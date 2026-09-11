import fs from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
const reports={};
for(const engine of ['pagefind','orama','orama-typos']) {
 const report=JSON.parse(await fs.readFile(`build/results-${engine}.json`));
 const invalid=[];let checked=0;
 for(const result of report.results)for(const hit of result.hits)for(const link of [hit,...(hit.sections||[])]){
  const u=new URL(link.url,'https://docs.appsmith.com');
  const file=path.resolve('../../website/build','.'+u.pathname+(u.pathname.endsWith('/')?'index.html':'.html'));
  try{const $=load(await fs.readFile(file,'utf8'));if(u.hash&&!$('[id]').toArray().some(el=>$(el).attr('id')===decodeURIComponent(u.hash.slice(1))))invalid.push(link.url);}
  catch{invalid.push(link.url);}checked++;
 }
 const sum=rows=>rows.reduce((n,r)=>n+r.encodedBytes,0);
 reports[engine]={standardTop1:report.results.filter(r=>r.category==='standard'&&r.rank===1).length,standardTop5:report.results.filter(r=>r.category==='standard'&&r.pass).length,typosTop5:report.results.filter(r=>r.category==='typo'&&r.pass).length,noResultsPass:report.results.at(-1).pass,coldSearchMs:report.results[0].ms,coldSearchBytes:sum(report.results[0].coldRequests),suiteSearchBytes:sum(report.requests),checkedLinks:checked,invalidLinks:[...new Set(invalid)]};
}
await fs.mkdir('results',{recursive:true});
for(const engine of Object.keys(reports))await fs.copyFile(`build/results-${engine}.json`,`results/${engine}.json`);
await fs.writeFile('results/summary.json',JSON.stringify(reports,null,2));
console.log(JSON.stringify(reports,null,2));
if(Object.values(reports).some(r=>r.invalidLinks.length))process.exitCode=1;
