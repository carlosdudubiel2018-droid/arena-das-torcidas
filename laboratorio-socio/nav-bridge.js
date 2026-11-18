(()=>{'use strict';
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent||!['mapa','ranking','regras'].includes(e.data?.arenaSocioNav))return;document.querySelector('.topbar [data-page="'+e.data.arenaSocioNav+'"]')?.click();});
// Same-origin lab frames only. Keep the official panel files untouched.
const documents=new WeakSet(),frames=new WeakSet();
function prepare(doc){
 if(documents.has(doc))return;documents.add(doc);
 if(doc!==document){const style=doc.createElement('style');style.textContent='@media(max-width:760px){.top,.lab-page-return{display:none!important}.page,#view-ranking,#view-regras{padding-bottom:110px!important;scroll-padding-bottom:110px}.sheet:not(.folded){padding-bottom:35px!important}}';doc.head?.append(style);}
 const scan=()=>doc.querySelectorAll('iframe').forEach(frame=>{if(frames.has(frame))return;frames.add(frame);const loaded=()=>{try{if(frame.contentDocument?.head)prepare(frame.contentDocument);}catch{}};frame.addEventListener('load',loaded);loaded();});
 scan();new MutationObserver(scan).observe(doc.documentElement,{childList:true,subtree:true});
}
prepare(document);parent.postMessage({arenaSocioReady:true},location.origin);
})();
