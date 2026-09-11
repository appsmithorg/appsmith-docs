import fs from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import { load as html } from 'cheerio';
import { create, insertMultiple, save } from '@orama/orama';
import * as pagefind from 'pagefind';
import { build } from 'esbuild';
const site = path.resolve('../../website/build');
const out = path.resolve('build');
await fs.mkdir(out, { recursive: true });
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir,e.name)) : path.join(dir,e.name)))).flat();
}
const files = (await walk(site)).filter(f=>f.endsWith('.html')).sort();
const pages = [];
const records = [];
for (const file of files) {
  const $ = html(await fs.readFile(file,'utf8'));
  const article = $('article .theme-doc-markdown');
  if (!article.length || $('meta[name="robots"]').attr('content')?.includes('noindex')) continue;
  article.find('script,style,button,.hash-link').remove();
  const title = article.find('h1').first().text().trim();
  if (!title) continue;
  const url = '/' + path.relative(site,file).replace(/index\.html$/, '').replace(/\.html$/, '');
  pages.push({url,title,html:`<html lang="en"><head><title>${title.replaceAll('&','&amp;').replaceAll('<','&lt;')}</title></head><body>${article.html()}</body></html>`});
  let heading = '', anchor = '', content = [];
  const flush = () => {
    if (content.join(' ').trim()) records.push({id:String(records.length),title,heading,url:url+(anchor?'#'+anchor:''),content:content.join(' ').replace(/\s+/g,' ').trim()});
    content=[];
  };
  article.children().each((_,el)=>{
    if (/^h[1-6]$/.test(el.tagName)) { flush(); heading=$(el).text().trim(); anchor=$(el).attr('id')||''; }
    content.push($(el).text());
  });
  flush();
}
const startPF=performance.now();
const {index}=await pagefind.createIndex({forceLanguage:'en'});
for (const page of pages) {
  const result=await index.addHTMLFile({url:page.url,content:page.html});
  if(result.errors?.length) throw Error(JSON.stringify(result.errors));
}
const pfWrite=await index.writeFiles({outputPath:path.join(out,'pagefind')});
if(pfWrite.errors?.length) throw Error(JSON.stringify(pfWrite.errors));
const pagefindBuildMs=performance.now()-startPF;
await pagefind.close();
const startO=performance.now();
const db=create({schema:{title:'string',heading:'string',content:'string',url:'string'}});
await insertMultiple(db,records);
await fs.writeFile(path.join(out,'orama.json'),JSON.stringify(save(db)));
const oramaBuildMs=performance.now()-startO;
await build({entryPoints:['client.js'],bundle:true,format:'esm',minify:true,external:['/pagefind/*'],outfile:path.join(out,'client.js')});
await fs.copyFile('index.html',path.join(out,'index.html'));
await fs.copyFile('queries.json',path.join(out,'queries.json'));
const sizes={};
for(const file of await walk(out)) {
  const data=await fs.readFile(file);
  sizes[path.relative(out,file)]={bytes:data.length,gzipBytes:gzipSync(data).length};
}
await fs.writeFile(path.join(out,'metrics.json'),JSON.stringify({pages:pages.length,sections:records.length,pagefindBuildMs,oramaBuildMs,sizes},null,2));
await fs.writeFile(path.join(out,'pages.json'),JSON.stringify(pages.map(({url,title})=>({url,title}))));
console.log(JSON.stringify({pages:pages.length,sections:records.length,pagefindBuildMs,oramaBuildMs,orama:sizes['orama.json']},null,2));
