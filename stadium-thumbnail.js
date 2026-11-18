/* One static photo of the same neighborhood. No extra animation loop or game writes. */
(()=>{
 const cache=new Map();let renderer,queue=Promise.resolve(),groups=new Map();
 function key(t){return JSON.stringify([t.id,t.level,t.cadeiras,t.color1,t.color2,t.stadium_items||[],t.fans?.length,t.presidente?.h,t.lideres?.map(f=>f.h)]);}
 function remember(k,url){cache.delete(k);cache.set(k,url);while(cache.size>12)cache.delete(cache.keys().next().value);return url;}
 function fallback(t){return window.ARENA_NEIGHBORHOOD.svg(t);}
 async function photo(team,valid){
  const k=key(team);if(cache.has(k))return cache.get(k);
  const world=await window.ARENA_ART.create(team,{lite:true,animate:false,detailed:true,items:team.stadium_items||[]});
  try{if(!valid())return null;const T=window.THREE;
   if(!renderer){renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});renderer.outputEncoding=T.sRGBEncoding;renderer.setSize(640,400,false);renderer.setClearColor(0xd6eadb,1);renderer.setPixelRatio(1);}
   const scene=new T.Scene();scene.add(world.root);scene.add(new T.HemisphereLight(0xf0f9ff,0x709050,.8));const sun=new T.DirectionalLight(0xfff3e5,.85);sun.position.set(-100,180,90);scene.add(sun);
   const camera=new T.OrthographicCamera(-1,1,1,-1,.1,1500);camera.position.set(160,240,280);camera.lookAt(0,3,0);camera.updateMatrixWorld(true);
   let x=0,y=0;for(const a of [-1,1])for(const b of [0,38])for(const c of [-1,1]){const p=new T.Vector3(a*world.state.width/2,b,c*world.state.depth/2).applyMatrix4(camera.matrixWorldInverse);x=Math.max(x,Math.abs(p.x));y=Math.max(y,Math.abs(p.y));}
   const half=Math.max(y,x/1.6)*1.06;camera.left=-half*1.6;camera.right=half*1.6;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();renderer.render(scene,camera);
   return remember(k,renderer.domElement.toDataURL('image/png'));
  }finally{world.dispose();renderer?.renderLists.dispose();}
 }
 function cancel(group='card'){const state=groups.get(group);if(state){state.cancelled=true;state.observer?.disconnect();groups.delete(group);}}
 function mount(el,team,{lite=false,group='card'}={}){
  cancel(group);const state={cancelled:false,observer:null};groups.set(group,state);const valid=()=>!state.cancelled&&el.isConnected;el.dataset.preview='light';el.innerHTML=fallback(team);el.setAttribute('aria-label','Bairro do estádio de '+team.name);el.setAttribute('role','img');
  if(lite)return;
  const draw=()=>{if(!valid())return;state.observer?.disconnect();queue=queue.catch(()=>{}).then(async()=>{
   if(!valid())return;const url=await photo(team,()=>valid());if(!url||!valid())return;
   const img=document.createElement('img');img.alt='Bairro de '+team.name+' · '+window.ARENA_ART_STATE.names[team.level];img.width=640;img.height=400;img.decoding='async';img.src=url;el.replaceChildren(img);el.dataset.preview='ready';
  }).catch(()=>{if(el.isConnected)el.dataset.preview='light';});};
  if(!window.IntersectionObserver){draw();return;}state.observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))draw();},{root:el.closest('#sheet'),rootMargin:'80px'});state.observer.observe(el);
 }
 window.ARENA_THUMBNAIL={mount,cancel};
})();
