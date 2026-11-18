/* Laboratory-only map composition. No database writes or score changes. */
(()=>{'use strict';
const B=window.ARENA_BOARD,U=window.ISLANDS_UI,M=window.BOARD_MODEL,C=window.ISLANDS_CAMERA,world=document.querySelector('.world'),drawer=document.querySelector('.drawer');
const AM=new Set(['AR','UY','PY','CL','BO','PE','CO','EC','VE','US','MX','CA','CR','PA','HN','GT','SV','NI','BZ','CU','DO','HT','JM','TT','GY','SR','GF']);
const EU=new Set(['PT','ES','FR','GB','IT','DE','NL','BE','TR','GR','RU','UA','CH','AT','DK','SE','NO','PL','CZ','HR','RS','RO','HU','FI','IE','IS','SC','UK']);
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const layer=document.createElement('div');layer.className='island-layer';world.append(layer);
const shade=document.createElement('button');shade.className='drawer-shade';shade.hidden=true;shade.setAttribute('aria-label','Fechar painel e voltar ao mapa');document.querySelector('.stage').append(shade);
const stamp=document.createElement('span');stamp.className='lab-stamp';stamp.textContent='LABORATÓRIO · dados reais · oficial intacto';document.body.append(stamp);
const jumps=document.createElement('nav');jumps.className='island-jumps';jumps.setAttribute('aria-label','Explorar os continentes');jumps.innerHTML='<button data-island="west">← Américas</button><button data-island="brasil">Brasil</button><button data-island="east">Europa e Mundo →</button>';world.append(jumps);
const hint=document.createElement('span');hint.className='map-drag-hint';hint.textContent='↔ Arraste para explorar os continentes';world.append(hint);
let islands=[],currentView=null,lastSignature='',drag=null,suppressUntil=0;
function resetRegion(){document.querySelectorAll('.regions button').forEach((b,i)=>b.classList.toggle('active',i===0));}function close(){drawer.hidden=true;shade.hidden=true;resetRegion();}
shade.onclick=close;drawer.querySelector('.close').setAttribute('aria-label','Fechar painel');
new MutationObserver(()=>{shade.hidden=drawer.hidden;if(drawer.hidden)resetRegion();drawer.setAttribute('aria-label','Clubes e informações');}).observe(drawer,{attributes:true,attributeFilter:['hidden']});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!drawer.hidden){close();e.preventDefault();}});
function sprite(t){const current=window.ISLAND_CURRENT,f=current?.frames[t.id];if(f&&f.level===t.level&&f.phase===t.phase)return `<span class="sprite" style="--atlas:url(${current.file});--cols:8;--rows:1;--col:${f.index};--row:0"></span>`;const S=window.ISLAND_STAGES||window.BOARD_STAGES;let c=S.clubs[t.id];if(!c){const entries=Object.values(window.BOARD_STAGES.clubs);c=entries.find(c=>c.color1===t.color1)||entries[0];}
let index=S.entries.findIndex(e=>e.level===t.level&&e.phase===t.phase);if(index<0)index=S.entries.findIndex(e=>e.level===t.level);if(index<0)index=0;
const local=!!window.ISLAND_STAGES?.clubs[t.id],url=(local?'/laboratorio-ilhas/':'/tabuleiro-oficial/')+c.file;
return `<span class="sprite" style="--atlas:url(${url});--cols:${S.cols};--rows:${S.rows};--col:${index%S.cols};--row:${Math.floor(index/S.cols)}"></span>`;}
function rebuild(){const groups=[{id:'west',title:'AMÉRICAS',teams:B.data.teams.filter(t=>t.country!=='BR'&&AM.has(t.country)&&t.cadeiras>0)},{id:'east',title:'EUROPA E MUNDO',teams:B.data.teams.filter(t=>t.country!=='BR'&&!AM.has(t.country)&&t.cadeiras>0)}];
const signature=JSON.stringify(groups.map(g=>g.teams.map(t=>[t.id,t.cadeiras,t.level,t.phase,t.rankAll])));if(signature===lastSignature)return;lastSignature=signature;layer.replaceChildren();
islands=groups.map(g=>{Object.assign(g,window.ISLAND_CONTINENTS[g.id]);g.teams.sort((a,b)=>a.rankAll-b.rankAll);const el=document.createElement('section');el.className='foreign-island continent-'+g.id;el.setAttribute('aria-label',g.title+' · '+g.teams.length+' clubes com cadeiras');
el.innerHTML=`<img class="island-ground" width="880" height="${Math.round(880*g.height/g.width)}" alt="${g.id==='west'?'Recorte do sul da América do Sul':'Recorte da costa oeste da África'}" src="${g.file}" decoding="async">`;g.el=el;
if(g.teams.length){const t=g.teams[0],b=document.createElement('button');b.className='foreign-club continent-village';b.style.setProperty('--club',t.color1);b.style.setProperty('--club2',t.color2);b.setAttribute('aria-label',`Abrir ${g.title}: ${g.teams.length} clubes com cadeiras`);b.innerHTML=sprite(t)+`<span class="flag"></span><img class="crest" src="${safe(t.crest)}" alt="Escudo oficial de ${safe(t.name)}" decoding="async"><span class="continent-plaque">${g.title}<small>${g.teams.length} ${g.teams.length===1?'clube':'clubes'}</small></span>`;
b.onclick=()=>{if(performance.now()<suppressUntil)return;U.choose(g.teams,g.title);};el.append(b);g.button=b;}
layer.append(el);return g;});if(currentView)place(currentView);}
function place(v){currentView=v;for(const g of islands){const p=M.project(g,v,0);g.el.style.left=p.x+'px';g.el.style.top=p.y+'px';g.el.style.width=g.width*v.scale+'px';g.el.style.height=g.height*v.scale+'px';if(g.button){const k=Math.min(1.5,Math.max(.68,v.scale/34));g.button.style.left=(50+g.anchor.x/g.width*100)+'%';g.button.style.top=(50+g.anchor.z*M.angleZ/g.height*100)+'%';g.button.style.transform=`translate(-50%,-50%) scale(${k})`;}}}
world.addEventListener('board:resize',e=>place(e.detail));
const update=B.update;B.update=function(next){update(next);rebuild();};
document.querySelectorAll('.regions button').forEach((b,i)=>{b.onclick=()=>{document.querySelectorAll('.regions button').forEach(x=>x.classList.toggle('active',x===b));if(i===0){close();C.x=C.y=0;U.reset();return;}U.choose(B.data.teams.filter(t=>t.cadeiras>0&&(i===3||(i===1?AM.has(t.country)||t.country==='BR':EU.has(t.country)))),b.textContent);};});
jumps.onclick=e=>{const b=e.target.closest('[data-island]');if(!b)return;close();if(b.dataset.island==='brasil'){C.x=C.y=0;U.reset();return;}const g=islands.find(g=>g.id===b.dataset.island);if(g){U.setZoom(innerWidth<=760?(g.id==='west'?1.35:1.7):1.3);C.x=-(g.x+g.anchor.x)*C.scale;C.y=-(g.z+g.anchor.z)*M.angleZ*C.scale;U.layout();}};
document.querySelector('#reset').addEventListener('click',()=>{C.x=C.y=0;U.reset();});
world.addEventListener('pointerdown',e=>{if(e.button!==0||e.target.closest('.regions,.world-tools,.island-jumps,.welcome,.lab-note,#season-badge'))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,px:C.x,py:C.y,moved:false};});
world.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(dx,dy)<7&&!drag.moved)return;drag.moved=true;world.setPointerCapture(e.pointerId);world.classList.add('dragging');C.x=Math.max(-18*C.scale,Math.min(18*C.scale,drag.px+dx));C.y=Math.max(-10*C.scale,Math.min(10*C.scale,drag.py+dy));U.layout();});
function end(e){if(!drag||drag.id!==e.pointerId)return;if(drag.moved)suppressUntil=performance.now()+220;drag=null;world.classList.remove('dragging');if(world.hasPointerCapture(e.pointerId))world.releasePointerCapture(e.pointerId);}
world.addEventListener('pointerup',end);world.addEventListener('pointercancel',end);world.addEventListener('click',e=>{if(performance.now()<suppressUntil){e.preventDefault();e.stopImmediatePropagation();}},true);
// Hide interactive island labels while a club or page is mounted; return preserves pan.
new MutationObserver(()=>{layer.setAttribute('aria-hidden',document.querySelector('.neighborhood').open?'true':'false');}).observe(document.querySelector('.neighborhood'),{attributes:true,attributeFilter:['open']});
B.update(B.data);if(B.data.events)B.feed(B.data.events);rebuild();U.layout();
// Additional visible timing: includes decoding both new continental terrain images.
Promise.all([...layer.querySelectorAll('.island-ground')].map(img=>img.decode().catch(()=>{}))).then(()=>requestAnimationFrame(()=>{const mark=document.createElement('small');mark.className='continent-timing';mark.textContent='Continentes visíveis '+Math.round(performance.now())+' ms';document.querySelector('.lab-note')?.append(mark);}));
document.querySelector('.intro-foot').prepend(Object.assign(document.createElement('p'),{textContent:'Brasil no centro. Arraste para descobrir as torcidas dos outros continentes.'}));
})();
