import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
const root=path.resolve('build'), docs=path.resolve('../../website/build');
const mime={'.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css','.wasm':'application/wasm'};
let requests=[];
http.createServer(async(req,res)=>{
 try {
  const pathname=new URL(req.url,'http://localhost').pathname;
  if(req.method==='POST'&&pathname==='/reset-metrics'){requests=[];res.end('reset');return;}
  if(pathname==='/request-metrics'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify(requests));return;}
  if(req.method==='POST'&&pathname==='/report'){
   let body='';for await(const chunk of req){body+=chunk;if(body.length>2e6)throw Error('too large');}
   const report=JSON.parse(body);
   if(!['pagefind','orama','orama-typos'].includes(report.engine))throw Error('invalid engine');
   await fs.writeFile(path.join(root,`results-${report.engine}.json`),JSON.stringify(report,null,2));res.end('saved');return;
  }
  const isDoc=pathname.startsWith('/docs/'), base=isDoc?docs:root;
  let relative=decodeURIComponent(isDoc?pathname.slice(6):pathname.slice(1));
  if(!relative)relative='index.html';
  let file=path.resolve(base,relative);
  if(!file.startsWith(base+path.sep)){res.writeHead(403);res.end();return;}
  if(isDoc && !path.extname(file))file+='.html';
  const data=await fs.readFile(file);
  res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');
  res.setHeader('Cache-Control','no-store');
  const body=req.headers['accept-encoding']?.includes('gzip')?gzipSync(data):data;
  if(body!==data)res.setHeader('Content-Encoding','gzip');
  requests.push({url:pathname,encodedBytes:body.length,decodedBytes:data.length});res.end(body);
 }catch(e){res.writeHead(404);res.end(String(e));}
}).listen(4175,'127.0.0.1',()=>console.log('http://127.0.0.1:4175'));
