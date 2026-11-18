/* Tight, high-resolution stills of the approved 3D art. No game state is modified. */
(()=>{
 const groups=new Map(),cache=new Map();let renderer,queue=Promise.resolve();
 const starts=[0,25,200,1000,5000],staticClubs=new Set(['palmeiras','flamengo','internacional']);
 async function render(team){
  const world=await window.ARENA_ART.create(team,{lite:true,animate:false,detailed:true,miniature:true,items:team.stadium_items||[]});
  try{
   const T=window.THREE;
   if(!renderer){renderer=new T.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,powerPreference:'low-power'});renderer.outputEncoding=T.sRGBEncoding;renderer.setPixelRatio(1);renderer.setSize(1920,1200,false);renderer.setClearColor(0x000000,0);}
   const scene=new T.Scene();scene.add(world.root,new T.HemisphereLight(0xf1faff,0x769452,.9));const sun=new T.DirectionalLight(0xfff1dc,.95);sun.position.set(-100,180,90);scene.add(sun);
   world.root.updateMatrixWorld(true);const bounds=new T.Box3().setFromObject(world.root),center=bounds.getCenter(new T.Vector3());
   const camera=new T.OrthographicCamera(-1,1,1,-1,.1,1500);camera.position.copy(center).add(new T.Vector3(160,220,260));camera.lookAt(center);camera.updateMatrixWorld(true);
   let x=0,y=0;for(const a of [bounds.min.x,bounds.max.x])for(const b of [bounds.min.y,bounds.max.y])for(const c of [bounds.min.z,bounds.max.z]){const p=new T.Vector3(a,b,c).applyMatrix4(camera.matrixWorldInverse);x=Math.max(x,Math.abs(p.x));y=Math.max(y,Math.abs(p.y));}
   const half=Math.max(y,x/1.6)/.88;camera.left=-half*1.6;camera.right=half*1.6;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();renderer.render(scene,camera);
   const result={};for(const w of [640,1280,1920]){const canvas=document.createElement('canvas');canvas.width=w;canvas.height=w/1.6;canvas.getContext('2d').drawImage(renderer.domElement,0,0,w,canvas.height);result[w]=canvas.toDataURL('image/webp',.93);}
   return result;
  }finally{world.dispose();renderer?.renderLists.dispose();}
 }
 const enqueue=team=>{const task=queue.catch(()=>{}).then(()=>render(team));queue=task;return task;};
 function cancel(group='card'){const prior=groups.get(group);if(prior){prior.cancelled=true;prior.observer?.disconnect();groups.delete(group);}}
 function mount(el,team,{group='card'}={}){
  cancel(group);const state={cancelled:false},valid=()=>!state.cancelled&&el.isConnected;groups.set(group,state);
  el.setAttribute('role','img');el.setAttribute('aria-label','Estádio de '+team.name+' · '+window.ARENA_ART_STATE.names[team.level]);
  const image=document.createElement('img');image.alt=el.getAttribute('aria-label');image.width=1920;image.height=1200;image.decoding='async';image.loading='lazy';image.sizes=group==='rules-main'?'(max-width: 600px) 92vw, 920px':group.startsWith('rules-thumb')?'(max-width: 600px) 44vw, 340px':'(max-width: 600px) 88vw, 440px';
  el.replaceChildren(image);el.dataset.preview='loading';
  image.onload=()=>{if(valid())el.dataset.preview='ready';};
  const key=JSON.stringify([team.id,team.level,team.cadeiras,team.stadium_items||[]]);
  async function draw(){
   state.observer?.disconnect();if(!valid())return;
   let photos=cache.get(key);if(!photos){photos=await enqueue(team);cache.set(key,photos);while(cache.size>16)cache.delete(cache.keys().next().value);}
   if(!valid())return;image.onerror=null;image.srcset='';image.src=photos[1920];
  }
  function lazyDraw(){if(!window.IntersectionObserver){draw().catch(fail);return;}state.observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))draw().catch(fail);},{rootMargin:'120px'});state.observer.observe(el);}
  function fail(){if(valid()){el.innerHTML=window.ARENA_NEIGHBORHOOD.svg(team);el.dataset.preview='vector';}}
  if(staticClubs.has(team.id)&&team.cadeiras===starts[team.level]){
   const base='/laboratorio-regras/assets/'+team.id+'-'+(team.level+1)+'-';
   image.onerror=()=>{image.onerror=null;image.removeAttribute('srcset');lazyDraw();};
   image.srcset=[640,1280,1920].map(w=>base+w+'.webp '+w+'w').join(', ');image.src=base+'1280.webp';
  }else lazyDraw();
 }
 window.ARENA_RULES_PHOTO={render:enqueue};window.ARENA_THUMBNAIL={mount,cancel};
})();
