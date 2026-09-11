import { create, load, search } from '@orama/orama';
let db;
let pf;
const mode=new URLSearchParams(location.search).get('engine')||'pagefind';
document.querySelector('#engine').textContent=mode;
const metrics=await (await fetch('/metrics.json')).json();
document.querySelector('#corpus').textContent=`${metrics.pages} pages / ${metrics.sections} sections. Local static search; no cloud account.`;
const querySet=await (await fetch('/queries.json')).json();
async function run(query) {
 const start=performance.now();
 let hits,count;
 if(mode==='pagefind') {
  pf ||= await import('/pagefind/pagefind.js');
  const result=await pf.search(query);
  count=result.results.length;
  hits=await Promise.all(result.results.slice(0,5).map(async r=>{
   const d=await r.data();
   return {title:d.meta.title,url:d.url,excerpt:d.excerpt,sections:(d.sub_results||[]).map(s=>({title:s.title,url:s.url}))};
  }));
 } else {
  if(!db) {db=create({schema:{title:'string',heading:'string',content:'string',url:'string'}});load(db,await(await fetch('/orama.json')).json());}
  const result=await search(db,{term:query,properties:['title','heading','content'],boost:{title:5,heading:2},tolerance:mode==='orama-typos'?1:0,limit:100});
  count=result.count;
  const seen=new Set(); hits=[];
  for(const h of result.hits) {const d=h.document;const page=d.url.split('#')[0];if(seen.has(page))continue;seen.add(page);hits.push({title:d.title,url:d.url,excerpt:d.content.slice(0,250)});if(hits.length===5)break;}
 }
 return {query,count,ms:performance.now()-start,hits};
}
function render(result) {
 document.querySelector('#status').textContent=`${result.count} matches · ${result.ms.toFixed(1)} ms (includes initialization and result fetch when needed)`;
 const list=document.querySelector('#results');list.replaceChildren();
 for(const hit of result.hits) {
  const li=document.createElement('li'),a=document.createElement('a'),p=document.createElement('p');
  a.href='/docs'+hit.url;a.textContent=hit.title; p.textContent=hit.excerpt.replace(/<[^>]+>/g,'');li.append(a,p);
  for(const section of hit.sections||[]) {const s=document.createElement('a');s.href='/docs'+section.url;s.textContent=section.title+' ';li.append(s);}
  list.append(li);
 }
}
document.querySelector('form').onsubmit=async e=>{e.preventDefault();try{render(await run(document.querySelector('input').value));}catch(e){document.querySelector('#status').textContent=e.stack;}};
document.querySelector('#suite').onclick=async()=>{
 const button=document.querySelector('#suite');button.disabled=true;
 try{
 await fetch('/reset-metrics',{method:'POST'});
 const results=[];
 for(const item of querySet) {
  const result=await run(item.query);
  if(results.length===0)result.coldRequests=await(await fetch('/request-metrics')).json();
  result.expected=item.expected; result.category=item.category||'standard';
  result.rank=item.expected?result.hits.findIndex(h=>h.url.split('#')[0].toLowerCase()===item.expected.toLowerCase())+1:null;
  result.pass=item.expected?result.rank>0:result.count===0;
  results.push(result);
 }
 const resources=performance.getEntriesByType('resource').filter(r=>r.name.includes('/pagefind/')||r.name.endsWith('/orama.json')||r.name.endsWith('/client.js')).map(r=>({url:r.name,transferSize:r.transferSize,encodedBodySize:r.encodedBodySize,decodedBodySize:r.decodedBodySize}));
 const requests=await(await fetch('/request-metrics')).json();
 const report={engine:mode,results,resources,requests,userAgent:navigator.userAgent};
 document.querySelector('#report').textContent=results.map(r=>`${r.pass?'PASS':'FAIL'} ${r.query}: rank ${r.rank||'—'} (${r.ms.toFixed(1)} ms)`).join('\n');
 await fetch('/report',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(report)});
 document.querySelector('#status').textContent=`Suite complete: ${results.filter(r=>r.pass).length}/${results.length} passed. Results saved locally.`;
 render(results[0]);
 }catch(e){document.querySelector('#status').textContent=e.stack;}finally{button.disabled=false;}
};
