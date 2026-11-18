/* Scoped to this laboratory. Public static shell + visuals; never game/API data. */
const CACHE='arena-tabuleiro-visual-73',SHELL='arena-tabuleiro-shell-73';
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const name of await caches.keys())if((name.startsWith('arena-tabuleiro-visual-')||name.startsWith('arena-tabuleiro-shell-'))&&name!==CACHE&&name!==SHELL)await caches.delete(name);await self.clients.claim();})()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;
 if(e.request.mode==='navigate'&&u.pathname==='/laboratorio-tabuleiro/'){
  const key=u.href;
  const fresh=(async()=>{const response=await fetch(e.request);if(response.ok){const c=await caches.open(SHELL);await c.put(key,response.clone());}return response;})();
  e.waitUntil(fresh.catch(()=>{}));
  e.respondWith((async()=>{const c=await caches.open(SHELL),hit=await c.match(key);if(hit)return hit;return fresh;})());return;
 }
 const visual=u.pathname.startsWith('/assets/arte-cc0/')||u.pathname.startsWith('/assets/vendor/three-r128')||u.pathname==='/laboratorio-arte/assets/fence_simple.glb'||u.pathname.startsWith('/laboratorio-tabuleiro/assets/')&&!u.pathname.endsWith('atlas.json');
 if(!visual)return;
 e.respondWith((async()=>{const c=await caches.open(CACHE),hit=await c.match(e.request);if(hit)return hit;const r=await fetch(e.request);if(r.ok&&r.type==='basic')await c.put(e.request,r.clone());return r;})());
});
