// Only visible crests get a src. Native lazy loading alone may fetch hidden
// map markers and the whole ranking because of its generous distance margin.
(function(){
 const observed=new WeakSet(),requested=new Set();
 const observer=new IntersectionObserver(entries=>entries.forEach(({target:img,isIntersecting})=>{
  if(!isIntersecting||!img.isConnected)return;
  observer.unobserve(img);
  if(!img.dataset.crestSrc){img.classList.add('crest-failed');return;}
  img.addEventListener('load',async()=>{
   try{await img.decode();}catch{img.classList.add('crest-failed');return;}
   if(!img.isConnected)return;
   img.classList.add('crest-ready');img.closest('.marker-crest,.cluster-crests')?.classList.add('crest-box-ready');
  },{once:true});
  img.addEventListener('error',()=>img.classList.add('crest-failed'),{once:true});
  img.decoding='async';img.src=img.dataset.crestSrc;
  requested.add(img.dataset.crestSrc);document.documentElement.dataset.uniqueCrests=requested.size;
  document.documentElement.dataset.crestRequests=Number(document.documentElement.dataset.crestRequests||0)+1;
 }),{rootMargin:'0px',threshold:.01});
 function images(node){return node.nodeType===1?[...(node.matches('img[data-crest-src]')?[node]:[]),...node.querySelectorAll('img[data-crest-src]')]:[];}
 function watch(node){images(node).forEach(img=>{if(!observed.has(img)){observed.add(img);observer.observe(img);}});}
 new MutationObserver(records=>records.forEach(r=>{
  r.removedNodes.forEach(n=>images(n).forEach(img=>observer.unobserve(img)));
  r.addedNodes.forEach(watch);
 })).observe(document.body,{childList:true,subtree:true});
 watch(document.body);
})();
