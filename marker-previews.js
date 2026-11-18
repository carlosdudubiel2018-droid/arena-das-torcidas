/* Demand-loaded, bounded static 3D snapshots. Never delays the base map. */
(()=>{const cache=new Map(),jobs=new Map(),targets=new Set();let observer;
 function key(t){return JSON.stringify([t.id,t.level,t.cadeiras,t.color1,t.color2,t.cadeiras>0&&t.rankAll<=3?t.rankAll:0]);}
 function rank(t){return t.cadeiras>0&&t.rankAll<=3?t.rankAll:0;}
 function mount(el,t){const k=key(t);el.dataset.miniatureKey=k;el.dataset.miniature='waiting';el.dataset.rank=rank(t)||'';el.dataset.construction=window.ARENA_ART_STATE.plan(t).phase;const valid=()=>el.isConnected&&el.dataset.miniatureKey===k;
  const paint=out=>{if(!valid())return;const img=new Image();img.className='marker-picture map-stadium'+(rank(t)===1?' medal-glow':'');img.alt=t.name+' · '+window.ARENA_ART_STATE.plan(t).work+(rank(t)?' · '+rank(t)+'º geral':'');img.onload=()=>{if(!valid())return;el.querySelector('.marker-picture')?.remove();el.append(img);el.classList.add('miniature-ready');el.dataset.miniature='ready';};img.src=out.url;};
  const draw=()=>{observer?.unobserve(el);targets.delete(el);if(!valid())return;el.dataset.miniature='rendering';if(cache.has(k)){paint(cache.get(k));return;}let job=jobs.get(k);if(!job){job=window.ARENA_OFFICIAL_MARKERS.render(t,{rank:0}).then(out=>{cache.set(k,out);while(cache.size>96)cache.delete(cache.keys().next().value);return out;}).finally(()=>jobs.delete(k));jobs.set(k,job);}job.then(paint).catch(()=>{if(valid())el.dataset.miniature='fallback';});};
  if(cache.has(k)){paint(cache.get(k));return;}
  if(!window.IntersectionObserver){draw();return;}
  observer ||=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target._drawMiniature?.();}),{rootMargin:'40px'});
  el._drawMiniature=draw;targets.add(el);observer.observe(el);queueMicrotask(()=>{if(!valid())return;const box=el.getBoundingClientRect();if(box.width&&box.height&&box.right>0&&box.left<innerWidth&&box.bottom>0&&box.top<innerHeight)draw();});for(const old of targets)if(old!==el&&!old.isConnected){observer.unobserve(old);targets.delete(old);}
 }
 window.ARENA_MARKER_PREVIEWS={mount};
})();
