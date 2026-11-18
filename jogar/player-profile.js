(function(root){
'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=h=>String(h||'').toLowerCase().replace(/^@/,'').trim();
const names={shirt:'Camisa especial',cap:'Boné da torcida',scarf:'Cachecol',flag:'Bandeira da torcida','streak-flag':'Bandeira dourada',boots:'Chuteira'};
let host,manifestTask,dialog,openTicket=0;
const dataCache=new Map(),prefetches=new Map();
const img=url=>new Promise((ok,no)=>{const im=new Image();im.onload=()=>ok(im);im.onerror=()=>no(Error('Imagem indisponível.'));im.src=url;});
function teamFor(id){return host.getState()?.teams.find(t=>t.id===id)||TEAMS_SEED.find(t=>t.id===id);}
function known(h){const state=host.getState(),f=state?.fans?.find(f=>f.h===h||f.handle===h),w=host.wallet?.(),t=f?.team||teamFor(w?.handle===h?w.team_id:null);return {handle:h,team_id:t?.id,team:t,level:w?.handle===h?w.level:1,equipped:w?.handle===h?w.equipped:{},records:{},positions:{}};}
function decorate(p){p={...p};p.team=p.team||teamFor(p.team_id)||known(p.handle).team;p.role=p.team?.presidente?.h===p.handle?'Presidente':p.team?.lideres?.some(f=>f.h===p.handle)?'Líder':'Torcedor';p.title=PLAY_TITLES.forLevel(p.level||1);return p;}
async function load(h,force=true){h=normalize(h);if(!/^[a-z0-9._]{1,30}$/.test(h))throw Error('Confira o @ do jogador.');const c=dataCache.get(h);if(!force&&c&&Date.now()-c.at<15000)return c.value;if(!force&&prefetches.has(h))return prefetches.get(h);const task=host.api.call('profile',{handle:h}).then(raw=>{const fallback=known(h),p=decorate({...fallback,...raw,team:teamFor(raw.team_id)||fallback.team});if(!p.team)throw Error('Não encontramos a torcida desse @.');dataCache.set(h,{at:Date.now(),value:p});return p;}).finally(()=>prefetches.delete(h));prefetches.set(h,task);return task;}
function metric(p,kind){const n=p.positions?.[kind];return n?'<strong>'+n+'º</strong>':'<strong class="not-played">Ainda não jogou hoje</strong>';}
function theme(team){return '--club:'+esc(team?.color1||'#237a56')+';--club2:'+esc(team?.color2||'#79bc90');}
function hero(p,id){return '<div class="avatar-hero" style="'+theme(p.team)+'"><span class="avatar-level">NV. '+(p.level||1)+' · '+esc(p.title.label)+'</span><img id="'+id+'" class="avatar-body" alt="Avatar de corpo inteiro de @'+esc(p.handle)+' comemorando com o uniforme da torcida" draggable="false"><p class="avatar-loading" role="status">Preparando o avatar…</p><span class="avatar-ground"></span><div class="avatar-tools"><button type="button" class="avatar-back">Ver costas ↻</button><small>Arraste para girar</small></div></div>';}
async function mountAvatar(el,p,{rotate=false}={}){
 const start=performance.now(),target=el.querySelector('.avatar-body'),status=el.querySelector('.avatar-loading');
 if(!p.team){status.textContent='Escolha sua torcida para ver o avatar.';return;}
 try{
  const frames=await ARENA_AVATAR_PORTRAIT.images(p.team,p);if(!target.isConnected)return;
  let index=0,drag=null,pauseUntil=0;target.src=frames[0];await target.decode().catch(()=>{});status.hidden=true;target.dataset.readyMs=Math.round(performance.now()-start);
  const area=target.closest('.avatar-hero'),back=area.querySelector('.avatar-back');
  function turn(n){index=(n%frames.length+frames.length)%frames.length;target.src=frames[index];back.textContent=index===Math.floor(frames.length/2)?'Ver frente ↻':'Ver costas ↻';area.querySelector('.avatar-tools small').textContent=index===Math.floor(frames.length/2)?'Nº '+(p.jersey_number||([...String(p.handle)].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7)%99+1))+' · @'+p.handle:'Arraste para girar';pauseUntil=Date.now()+4000;}
  area.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;drag={x:e.clientX,index};area.setPointerCapture(e.pointerId);});
  area.addEventListener('pointermove',e=>{if(drag)turn(drag.index+Math.round((e.clientX-drag.x)/12));});
  area.addEventListener('pointerup',()=>drag=null);area.addEventListener('pointercancel',()=>drag=null);
  back.onclick=()=>turn(index===Math.floor(frames.length/2)?0:Math.floor(frames.length/2));
  area.tabIndex=0;area.setAttribute('aria-label','Girar avatar: arraste ou use as setas do teclado');
  area.onkeydown=e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();turn(index+(e.key==='ArrowRight'?1:-1));}};
  if(rotate&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const timer=setInterval(()=>{if(!target.isConnected){clearInterval(timer);return;}if(document.hidden||drag||Date.now()<pauseUntil||document.querySelector('dialog[open]'))return;index=(index+1)%frames.length;target.src=frames[index];},350);}
 }catch(e){status.textContent='Não foi possível carregar o avatar.';const retry=document.createElement('button');retry.textContent='Tentar novamente';retry.onclick=()=>{status.textContent='Preparando o avatar…';mountAvatar(el,p,{rotate});};status.append(retry);}
}
function shell(){if(dialog)return dialog;dialog=document.createElement('dialog');dialog.id='player-profile-dialog';dialog.className='player-sheet';dialog.innerHTML='<header><span>FICHA DO JOGADOR</span><button aria-label="Fechar ficha do jogador">×</button></header><div class="player-sheet-body"></div>';dialog.querySelector('button').onclick=()=>dialog.close();dialog.onclick=e=>{if(e.target===dialog)dialog.close();};dialog.addEventListener('close',()=>openTicket++);document.body.append(dialog);return dialog;}
function recordText(p){const pen=p.records?.penalty,fre=p.records?.freekick;return '<section class="profile-records"><h2>Recordes pessoais</h2><div><span>⚽ Pênaltis · melhor partida'+(pen?.source==='official'?'<small>Histórico oficial · somente leitura</small>':'')+'</span><strong>'+(pen&&pen.available!==false&&Number.isFinite(pen.goals)?pen.goals+'/5 gols':'Sem partidas concluídas')+'</strong></div><div><span>🥅 Falta · melhor corrida</span><strong>'+(fre&&fre.available!==false&&Number.isFinite(fre.goals)?'Fase '+fre.phase+' · '+fre.goals+' gols':'Sem corridas concluídas')+'</strong></div></section>';}
async function open(h,{shareStory=false}={}){
 h=normalize(h);const ticket=++openTicket,d=shell(),body=d.querySelector('.player-sheet-body'),start=performance.now();
 body.innerHTML='<div class="profile-skeleton"><h1>@'+esc(h)+'</h1><p role="status">Carregando ficha do jogador…</p></div>';if(!d.open)d.showModal();
 try{
  const p=await load(h);if(ticket!==openTicket)return;
  d.style.setProperty('--club',p.team.color1||'#237a56');d.style.setProperty('--club2',p.team.color2||'#79bc90');
  body.innerHTML=hero(p,'public-avatar')+
   '<section class="profile-identity"><img src="'+esc(host.crest(p.team))+'" alt="Escudo do '+esc(p.team.name)+'"><div><h1>@'+esc(p.handle)+'</h1><p>'+esc(p.team.name)+'</p></div></section>'+
   '<section class="profile-ranks" aria-label="Posição no ranking do dia"><div>'+metric(p,'penalty')+'<span>Pênaltis hoje</span></div><div>'+metric(p,'freekick')+'<span>Falta hoje</span></div></section>'+
   '<p class="profile-day">'+(p.day?'Ranking de '+p.day.split('-').reverse().join('/')+' · Brasília':'Ranking do dia')+'</p>'+recordText(p)+
   '<section class="outfit-tags"><h2>Em campo com</h2>'+Object.values(p.equipped||{}).map(id=>'<span>'+esc(names[id]||id)+'</span>').join('')+(!Object.keys(p.equipped||{}).length?'<span>Uniforme do '+esc(p.team.name)+'</span>':'')+'</section>'+
   '<section class="profile-share"><h2>Leve esse jogador para o Story</h2><div role="group" aria-label="Formato da imagem"><button data-size="story" aria-pressed="true">Story · 1080×1920</button><button data-size="square" aria-pressed="false">Quadrada · 1080×1080</button></div><button class="gold" id="profile-download">↓ BAIXAR IMAGEM</button><button class="profile-story" id="profile-story">↗ STORY · COMPARTILHAR</button><p id="profile-export-status" role="status"></p><div id="profile-export-preview"></div></section>';
  d.dataset.profileContentMs=Math.round(performance.now()-start);mountAvatar(body,p);
  let format='story';body.querySelectorAll('[data-size]').forEach(b=>b.onclick=()=>{format=b.dataset.size;body.querySelectorAll('[data-size]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));});
  body.querySelector('#profile-download').onclick=()=>exportImage(p,format,false,body);body.querySelector('#profile-story').onclick=()=>exportImage(p,'story',true,body);if(shareStory)await exportImage(p,'story',true,body,{fresh:false});
 }catch(e){if(ticket===openTicket){body.innerHTML='<h1>@'+esc(h)+'</h1><p role="status">'+esc(e.code?'Ficha indisponível agora. Tente novamente em instantes.':e.message)+'</p><button class="gold" id="profile-retry">TENTAR DE NOVO</button>';body.querySelector('#profile-retry').onclick=()=>open(h);}}
}
function dressing(el,w,options){const p=decorate({...known(w.handle),...w,team:teamFor(w.team_id)});el.innerHTML=hero(p,'dressing-avatar')+'<div class="dressing-identity"><span class="eyebrow">SEU VESTIÁRIO</span><h2>@'+esc(w.handle)+'</h2><p>'+esc(p.team?.name||'Sua torcida')+'</p></div><button class="gold" id="profile-share-own">↗ COMPARTILHAR MINHA FICHA</button><button class="secondary" id="profile-public">VER COMO OS OUTROS ME VEEM</button><section class="dressing-items"><div><h3>Seu uniforme</h3><span>🪙 '+w.coins+' moedas</span></div><p>Toque num item comprado. O avatar muda assim que o servidor confirma.</p><div class="dressing-grid">'+w.inventory.filter(id=>w.catalog.find(i=>i.id===id)?.category==='avatar').map(id=>{const item=w.catalog.find(i=>i.id===id),on=Object.values(w.equipped).includes(id);return '<button data-dress="'+esc(id)+'" aria-pressed="'+on+'"><span>'+({cap:'🧢',scarf:'🧣',flag:'⚑',shirt:'👕','streak-flag':'⚑'}[id]||'◆')+'</span><strong>'+esc(item.title)+'</strong><small>'+(on?'✓ EM USO':'EQUIPAR')+'</small></button>';}).join('')+'</div>'+(!w.inventory.some(id=>w.catalog.find(i=>i.id===id)?.category==='avatar')?'<p>Seu uniforme do clube já está pronto. Visite a loja para escolher acessórios.</p>':'')+'<button class="gold" id="dressing-shop">IR À LOJA</button></section>';mountAvatar(el,p,{rotate:true});el.querySelector('#profile-public').onclick=()=>open(w.handle);el.querySelector('#profile-share-own').onclick=()=>open(w.handle,{shareStory:true});el.querySelector('#dressing-shop').onclick=()=>host.onView('loja');el.querySelectorAll('[data-dress]').forEach(b=>b.onclick=()=>options.equip(w.catalog.find(i=>i.id===b.dataset.dress)));}
function preview(el,w){if(!w)return;const p=decorate({...w,team:teamFor(w.team_id)});el.innerHTML=hero(p,'shop-avatar')+'<button class="text-button" id="preview-dressing">ABRIR PROVADOR →</button>';el.className='shop-avatar-preview';mountAvatar(el,p);el.querySelector('button.text-button').onclick=()=>host.onView('jogador');}
async function stadium(team){manifestTask ||= fetch('/jogar/mapa/sprite-stages.json').then(r=>r.json());const m=await manifestTask,sheet=m.clubs[team.id];if(!sheet)return null;const e=m.entries.map((e,i)=>({...e,i})).filter(e=>e.chairs<=Number(team.cadeiras||team.chairs||0)).at(-1)||{...m.entries[0],i:0};return {image:await img(m.base+sheet.file),sx:(e.i%m.cols)*m.width,sy:Math.floor(e.i/m.cols)*m.height,sw:m.width,sh:m.height};}
function round(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r);}
function fit(c,text,x,y,max,size,weight='900'){c.font=weight+' '+size+'px system-ui';while(c.measureText(text).width>max&&size>20)c.font=weight+' '+(--size)+'px system-ui';c.fillText(text,x,y);}
function rankingCaption(p){const positions=['penalty','freekick'].filter(k=>Number(p.positions?.[k])>0);return {headline:positions.length?positions.map(k=>p.positions[k]+'º '+(k==='penalty'?'PÊNALTIS':'FALTA')).join(' · '):'AINDA NÃO JOGOU HOJE',subtitle:positions.length>1?'RANKINGS DE HOJE':positions.length?'RANKING DE HOJE':'Entre em campo com a sua torcida'};}
async function makeImage(p,format){
 const square=format==='square',cv=document.createElement('canvas');cv.width=1080;cv.height=square?1080:1920;
 const c=cv.getContext('2d');c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';const H=cv.height,g=c.createLinearGradient(0,0,1080,H);g.addColorStop(0,p.team.color1||'#20714d');g.addColorStop(.6,p.team.color2||'#112f24');g.addColorStop(1,p.team.color1||'#20714d');c.fillStyle=g;c.fillRect(0,0,1080,H);
 c.fillStyle='#08142188';c.fillRect(0,0,1080,H);
 const [avatar,crest,logo,st]=await Promise.all([ARENA_AVATAR_PORTRAIT.portrait(p.team,p).then(img),img(host.crest(p.team)).catch(()=>null),img('/arena-viva/assets/arena-simbolo.webp').catch(()=>null),stadium(p.team).catch(()=>null)]);
 c.save();c.globalAlpha=.24;c.filter='blur(10px)';if(st)c.drawImage(st.image,st.sx,st.sy,st.sw,st.sh,-180,square?80:440,1440,1080);c.restore();
 c.save();c.strokeStyle='#ffffff0b';c.lineWidth=72;for(let x=-1700;x<2100;x+=190){c.beginPath();c.moveTo(x,H);c.lineTo(x+900,0);c.stroke();}c.restore();
 c.strokeStyle='#efd381';c.lineWidth=3;round(c,35,35,1010,H-70,38);c.stroke();
 if(logo){c.save();c.beginPath();c.arc(104,108,35,0,Math.PI*2);c.clip();c.drawImage(logo,69,73,70,70);c.restore();}
 c.fillStyle='#fff';c.textAlign='left';fit(c,'ARENA DAS TORCIDAS',158,118,480,28);
 c.textAlign='right';c.fillStyle='#ffe49b';fit(c,'NV. '+(p.level||1)+' · '+p.title.name.toUpperCase(),1000,118,350,28);
 c.textAlign='center';
 const aw=square?600:900,ah=aw*avatar.naturalHeight/avatar.naturalWidth;c.drawImage(avatar,square?-20:90,square?130:200,aw,ah);
 const infoX=square?790:540;
 if(crest)c.drawImage(crest,square?730:480,square?270:1270,120,120);
 c.fillStyle='#fff';fit(c,'@'+p.handle,infoX,square?475:1460,square?440:920,square?50:72);
 fit(c,p.team.name,infoX,square?535:1520,square?440:880,square?29:38,'700');
 const caption=rankingCaption(p);
 c.fillStyle='#061b2bcc';round(c,75,square?850:1610,930,square?110:130,24);c.fill();
 c.fillStyle='#ffe49b';fit(c,caption.headline,540,square?897:1665,850,square?38:44);
 c.fillStyle='#fff';c.font='700 25px system-ui';c.fillText(caption.subtitle,540,square?935:1710);
 c.fillStyle='#eef3f7';c.font='700 27px system-ui';c.fillText('arenadastorcidasoficial.com.br',540,H-70);
 return new Promise(ok=>cv.toBlob(blob=>{blob.avatarRenderWidth=avatar.naturalWidth;blob.avatarRenderHeight=avatar.naturalHeight;ok(blob);},'image/png'));
}
const dataURL=blob=>new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(r.result);r.onerror=no;r.readAsDataURL(blob);});
async function exportImage(p,format,share,body,{fresh=true}={}){
 const status=body.querySelector('#profile-export-status'),buttons=body.querySelectorAll('.profile-share button');buttons.forEach(b=>b.disabled=true);status.textContent='Preparando sua imagem em alta resolução…';
 try{
  body.querySelector('#profile-export-preview')?.replaceChildren();if(fresh)p=await load(p.handle,true);const started=performance.now(),blob=await makeImage(p,format);body.dataset.exportAvatarWidth=String(blob.avatarRenderWidth);body.dataset.exportAvatarHeight=String(blob.avatarRenderHeight);body.dataset.exportMs=String(Math.round(performance.now()-started));
  const preview=body.querySelector('#profile-export-preview');preview.innerHTML='<img alt="PNG '+(format==='square'?'1080×1080':'1080×1920')+' gerado pelo botão"><small>Imagem gerada · '+(format==='square'?'1080×1080':'1080×1920')+'</small>';preview.querySelector('img').src=await dataURL(blob);
  const file=new File([blob],'arena-'+p.handle+'-'+format+'.png',{type:'image/png'});
  if(share&&navigator.canShare?.({files:[file]})){
   try{await navigator.share({files:[file],title:'@'+p.handle+' · Arena das Torcidas'});status.textContent='Imagem pronta para compartilhar.';}catch(e){if(e.name!=='AbortError')throw e;status.textContent='Compartilhamento cancelado.';}
  }else if(share){
   const d=document.createElement('dialog');d.className='image-save-dialog';const url=URL.createObjectURL(blob);d.innerHTML='<button aria-label="Fechar imagem">×</button><p>Segure o dedo na imagem e toque em Salvar imagem.</p><img alt="Imagem de @'+esc(p.handle)+' pronta para Story">';d.querySelector('img').src=url;d.querySelector('button').onclick=()=>d.close();d.onclose=()=>{URL.revokeObjectURL(url);d.remove();};document.body.append(d);d.showModal();status.textContent='Imagem aberta para salvar.';
  }else{const url=URL.createObjectURL(blob),a=document.createElement('a');a.download=file.name;a.href=url;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);status.textContent='PNG '+(format==='square'?'1080×1080':'1080×1920')+' pronto.';}
 }catch(e){body.dataset.exportError=String(e?.message||e);status.textContent='Não foi possível gerar a imagem. Tente de novo.';}finally{buttons.forEach(b=>b.disabled=false);}
}
function upgradeLinks(scope=document){const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT),todo=[];while(walker.nextNode()){const n=walker.currentNode,el=n.parentElement;if(!el||el.closest('script,style,input,textarea,[data-player-handle],#player-profile-dialog,.avatar-hero,.dressing-identity,.welcome,.card-page,.economy-title'))continue;const h=n.textContent.trim().match(/^@([a-zA-Z0-9._]{1,30})$/);if(h&&el.closest('.player-ranking,.champions-list,.game-champions,#penalty-ranking,#rank-dialog'))todo.push([n,h[1]]);}for(const [n,h]of todo){const b=document.createElement('button');b.type='button';b.className='player-handle';b.dataset.playerHandle=h;b.textContent='@'+h;b.setAttribute('aria-label','Abrir ficha de @'+h);n.replaceWith(b);}}
function install(h){host=h;if(install.done)return;install.done=true;const observer=new MutationObserver(()=>{if(install.queued)return;install.queued=true;queueMicrotask(()=>{install.queued=false;upgradeLinks();});});function observe(){observer.observe(document.body,{childList:true,subtree:true});upgradeLinks();}if(document.body)observe();else document.addEventListener('DOMContentLoaded',observe,{once:true});document.addEventListener('click',e=>{const b=e.target.closest('[data-player-handle]');if(b){e.preventDefault();open(b.dataset.playerHandle);}},true);document.addEventListener('pointerover',e=>{const b=e.target.closest('[data-player-handle]');if(b)ARENA_AVATAR_PORTRAIT.prewarm().catch(()=>{});},{passive:true});addEventListener('message',e=>{if(e.origin===location.origin&&e.data?.arenaPlayerProfile&&[document.querySelector('#reading-frame')?.contentWindow,document.querySelector('#club-detail-frame')?.contentWindow].includes(e.source))open(e.data.arenaPlayerProfile);});}
root.ARENA_PLAYER_PROFILE={install,open,dressing,preview,load,makeImage,rankingCaption,upgradeLinks,warmOwn:w=>ARENA_AVATAR_PORTRAIT.images(teamFor(w.team_id),decorate({...w,team:teamFor(w.team_id)})),invalidate:h=>dataCache.delete(normalize(h)),prewarm:()=>ARENA_AVATAR_PORTRAIT.prewarm()};
})(window);