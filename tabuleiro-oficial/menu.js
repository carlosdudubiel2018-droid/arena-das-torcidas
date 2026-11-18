(()=>{
 const header=document.querySelector('.arena-nav');
 if(!header)return;
 const button=header.querySelector('#nav-menu'),links=header.querySelector('#arena-nav-links');
 if(!button||!links)return;
 // Reinitialization replaces the bindings instead of accumulating listeners.
 header.arenaMenuController?.abort();
 const controller=new AbortController();header.arenaMenuController=controller;
 const options={signal:controller.signal};
 const close=()=>{document.body.classList.remove('nav-open');button.setAttribute('aria-expanded','false');};
 button.onclick=null;
 button.addEventListener('click',()=>{const open=document.body.classList.toggle('nav-open');button.setAttribute('aria-expanded',String(open));},options);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close();},options);
 links.addEventListener('click',e=>{if(e.target.closest('a'))close();},options);
})();
