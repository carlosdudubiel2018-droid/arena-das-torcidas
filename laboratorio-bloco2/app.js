// Site público: mapa, súmula do time, ranking, regras e busca.
(async function () {
  const previewParams=new URLSearchParams(location.search);
  if(previewParams.has('preview')){location.replace('/laboratorio-evolucao/?'+previewParams.toString());return;}
  const G = window.GAME, C = G.CONFIG, LEVELS = G.LEVELS;
  const $ = (id) => document.getElementById(id);
  const fmt = (n) => Number(n).toLocaleString("pt-BR");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const FOREIGN = (t) => t.country && t.country !== 'BR';
  const countryNames = new Intl.DisplayNames(['pt-BR'], {type:'region'});
  const countryName = (code) => countryNames.of(code) || code;

  document.title = C.NOME_DO_JOGO;
  const words = C.NOME_DO_JOGO.split(" ");
  $("brand").innerHTML = esc(words.slice(0, -1).join(" ")) + (words.length > 1 ? " " : "") + "<span>" + esc(words[words.length - 1]) + "</span>";
  $("ig-handle").textContent = C.INSTAGRAM ? "@" + C.INSTAGRAM : "";
  if (G.DEMO) {$("demo-tag").hidden = false;$("demo-tag").textContent="Demo";$("demo-tag").title="Demonstração com torcedores fictícios";}

  const map = new maplibregl.Map({container:'map',style:window.ARENA_MAP.style,center:[-53,-15],zoom:2,pitch:0,maxPitch:60,minZoom:-.7,maxZoom:20.5,attributionControl:false,renderWorldCopies:false,locale:{'NavigationControl.ZoomIn':'Aproximar mapa','NavigationControl.ZoomOut':'Afastar mapa'}});
  const zoomControl={onAdd(){const box=document.createElement('div');box.className='maplibregl-ctrl maplibregl-ctrl-group';for(const event of ['dblclick','mousedown','touchstart'])box.addEventListener(event,e=>e.stopPropagation());for(const [label,step,symbol]of[['Aproximar mapa',1,'+'],['Afastar mapa',-1,'−']]){const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',label);b.title=label;map.on('zoom',()=>b.setAttribute('aria-description','Ampliação atual: '+map.getZoom().toFixed(1)));b.textContent=symbol;b.style.fontSize='22px';b.onclick=e=>{e.stopPropagation();map.stop();const center=map.getCenter().toArray();map.easeTo({...window.MAP_LAYOUT.zoomCamera(center,map.getZoom(),step,map.getMinZoom(),map.getMaxZoom()),duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:300});};box.append(b);}this.box=box;return box;},onRemove(){this.box.remove();}};
  map.addControl(zoomControl,'bottom-left');
  map.addControl(new maplibregl.AttributionControl({compact:true,customAttribution:'<a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener">Natural Earth</a> · Arena das Torcidas'}));
  // Draw the country before waiting for scores, crests or models.
  map.fitBounds([[-74.1,-34.2],[-34.6,5.5]],{padding:{top:70,bottom:100,left:matchMedia('(max-width:760px)').matches?18:350,right:24},maxZoom:4,duration:0});
  let baseReady=false,catalogReady=false;
  const earlyPins=()=>{if(catalogReady||map.getSource('first-stadiums'))return;
    const canvas=document.createElement('canvas');canvas.width=32;canvas.height=24;const ctx=canvas.getContext('2d');ctx.fillStyle='#fff8e2';ctx.fillRect(1,1,30,22);ctx.fillStyle='#28755d';ctx.fillRect(4,4,24,16);ctx.strokeStyle='#e8f2d8';ctx.lineWidth=1;ctx.strokeRect(6,6,20,12);ctx.beginPath();ctx.moveTo(16,6);ctx.lineTo(16,18);ctx.stroke();
    map.addImage('first-field',ctx.getImageData(0,0,32,24));
    map.addSource('first-stadiums',{type:'geojson',cluster:true,clusterRadius:45,data:{type:'FeatureCollection',features:window.TEAMS_SEED.filter(t=>t.country==='BR').map(t=>({type:'Feature',properties:{},geometry:{type:'Point',coordinates:[t.lon,t.lat]}}))}});
    map.addLayer({id:'first-stadiums',type:'symbol',source:'first-stadiums',layout:{'icon-image':'first-field','icon-size':.8,'icon-allow-overlap':false}});
  };
  map.once('load',earlyPins);
  function markBaseReady(){if(baseReady||!map.getSource('world')||!map.isSourceLoaded('world'))return;baseReady=true;document.documentElement.dataset.mapReadyMs=Math.round(performance.now());$('world-status').hidden=true;$('instant-world')?.remove();map.off('render',markBaseReady);}
  map.on('render',markBaseReady);
  map.on('error',()=>{if(!baseReady){$('world-status').textContent='O mapa está demorando. Você pode buscar sua torcida enquanto ele carrega.';}});

  // ---------- dados ----------
  let raw, S;
  try { raw = await (window.ARENA_DATA||G.load()); }
  catch (e) { console.error(e); $("boletim").innerHTML = "<summary>Dados indisponíveis</summary><p>Confira a conexão e recarregue a página.</p>";$('world-status').hidden=false;$('world-status').textContent='Não conseguimos buscar a torcida. Confira a conexão e atualize a página.'; return; }
  document.documentElement.dataset.dataReadyMs=Math.round(performance.now());
  S = G.compute(raw, raw.inactivity);
  $('club-count').textContent = fmt(S.teams.length);
  $('country-count').textContent = fmt(new Set(S.teams.map(t=>t.country)).size);
  $('fan-count').textContent = fmt(S.fans.length);
  const preseason=!G.DEMO&&(!S.season||S.season.status==='draft');
  if(!G.DEMO&&S.season&&S.season.status==='active'){
    document.querySelector('.season-label').textContent='TEMPORADA '+S.season.number+' · VALENDO';
    $('pilot-note').textContent='A temporada começou! Comente seu time no Reels oficial e faça sua torcida crescer. O encerramento será anunciado com pelo menos 14 dias de antecedência.';
    $('season-rules-status').textContent='Temporada '+S.season.number+' valendo. Veja como participar, acompanhar as conquistas e disputar os cargos.';
    document.querySelector('.season-status').textContent='TEMPORADA '+S.season.number+' · VALENDO';
  }
  function renderSeasonBadge(){const badge=G.seasonBadge(S.season);$('season-badge-label').textContent=badge.title;$('season-countdown').textContent=badge.detail;$('season-countdown').hidden=!badge.detail;$('season-badge').setAttribute('aria-label',badge.title+(badge.detail?' · '+badge.detail:'')+': ver regulamento');$('first-presidents-notice').textContent=window.ARENA_ELECTION.notice;$('first-presidents-notice').hidden=false;}
  if(S.season&&S.season.status==='active'&&!G.DEMO){$('pilot-rules-note').textContent='A Temporada 1 está valendo. Os registros anteriores do piloto ficam separados e não somam nesta disputa.';}
  renderSeasonBadge();
  $('season-badge').onclick=()=>showView('regras');
  $('season-history-content').innerHTML=S.history.length?'<ul class="season-history-list">'+S.history.map(h=>'<li><b>'+esc(h.name)+'</b><span>Resultados e conquistas nas fichas dos times</span></li>').join('')+'</ul>':'<p class="note">A história começa na Temporada 1. Aqui ficarão as temporadas encerradas; as estrelas e os emblemas estarão nas fichas das torcidas.</p>';
  const growing=!G.DEMO&&S.fans.length<25;
  $('fan-count').parentElement.hidden=growing;
  document.querySelector('.community-stats').classList.toggle('early-community',growing);
  $('community-invite').hidden=!growing;
  if(!C.POST_OFICIAL&&!G.DEMO){$('discover-team').innerHTML='Escolha seu time <span>↗</span>';}
  $('stadium-showcase').innerHTML = window.ARENA_MAP.stadium(4,'#197443','#fff8e2');
  const portugal=navigator.language.toLowerCase()==='pt-pt'||['Europe/Lisbon','Atlantic/Madeira','Atlantic/Azores'].includes(Intl.DateTimeFormat().resolvedOptions().timeZone);
  $('featured-country').textContent=portugal?'OLÁ, PORTUGAL.':'OLÁ, BRASIL.';
  $('portugal-clubs').innerHTML = (portugal?['benfica','vitoria-guimaraes','braga','sporting','porto']:['flamengo','corinthians','palmeiras','sao-paulo','gremio']).map(id=>S.teams.find(t=>t.id===id)).filter(Boolean).map(t=>'<button type="button" data-club="'+esc(t.id)+'" title="'+esc(t.name)+'" aria-label="Ver '+esc(t.name)+'"><img data-crest-src="'+esc(t.crest_url || '')+'" alt="'+esc(t.name)+'"><span>'+esc(t.name==='Vitória de Guimarães'?'Vitória SC':t.name)+'</span></button>').join('');
  $('portugal-clubs').onclick = e => {const b=e.target.closest('[data-club]');if(b){const t=S.teams.find(t=>t.id===b.dataset.club);openTeam(t);}};
  $('discover-team').onclick = () => {setIntro(false);$('q').focus();$('q').value='';renderSearch('');};
  if (G.DEMO) { $('simulation-link').hidden=false; $('pilot-note').textContent='Simulação com torcedores fictícios. Estes pontos não pertencem à rodada real.';$('simulation-link').href=location.pathname;$('simulation-link').textContent='Voltar ao jogo real ↗'; }
  function setIntro(open){$('view-mapa').classList.toggle('intro-open',open);$('intro-open').setAttribute('aria-expanded',String(open));if(!open&&document.activeElement===$('intro-close'))$('intro-open').focus();}
  $('intro-open').onclick=()=>setIntro(true);
  $('intro-close').onclick=()=>setIntro(false);
  $('welcome-close').onclick=()=>{$('mobile-welcome').hidden=true;};
  document.addEventListener('keydown',e=>{if(e.key==='Escape')setIntro(false);});
  const sizeSidebar = () => { $('view-mapa').style.setProperty('--sidebar-height', document.querySelector('.match-sidebar').offsetHeight+'px'); };
  new ResizeObserver(sizeSidebar).observe(document.querySelector('.match-sidebar')); sizeSidebar();
  $('ranking-overview').innerHTML = '<span class="chairs-primary"><b>'+fmt(S.teams.reduce((sum,t)=>sum+t.cadeiras,0))+'</b> cadeiras na temporada</span><span><b>'+fmt(S.teams.length)+'</b> clubes em campo</span>'+(growing?'<span>Sua cadeira faz sua torcida crescer</span>':'<span><b>'+fmt(S.fans.length)+'</b> torcedores'+(G.DEMO?' fictícios':'')+'</span>')+(preseason?'<span><b>Pré-temporada</b> · lançamento em breve</span>':'<span>Rodada · <b>'+S.weekStart.split('-').reverse().join('/')+'</b></span>');
  if(preseason)$('ranking-calendar').textContent=(S.season?S.season.name:'Temporada 1')+' em preparação. A abertura será anunciada no lançamento. Após o início, o encerramento terá pelo menos 14 dias de aviso. Os números atuais pertencem aos testes do jogo.';


  // ---------- mapa ----------
  const L=window.MAP_LAYOUT;
  const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile=()=>matchMedia('(max-width:760px)').matches;
  let region='br',scope='br',clusterMarkers=[],groupTeams=[],land=[];
  fetch('assets/world-110m.json').then(r=>r.json()).then(data=>{land=L.landIndex(data.features);declutter();}).catch(()=>{});
  const groupPicker=$('cluster-picker');
  const VIEWS={am:[[-128,-57],[-33,59]],br:[[-74.1,-34.2],[-34.6,5.5]],eu:[[-12,35],[44,71]],all:[[-130,-57],[155,71]]};
  const zeroPadding={top:0,bottom:0,left:0,right:0};
  const weakDevice=L.preferLight({saveData:navigator.connection?.saveData,memory:navigator.deviceMemory,cores:navigator.hardwareConcurrency});
  const motionProfile=window.ARENA_MOTION_POLICY.profile({smallScreen:mobile(),touch:(navigator.maxTouchPoints||0)>0,memory:navigator.deviceMemory,cores:navigator.hardwareConcurrency,saveData:navigator.connection?.saveData,forceCompact:previewParams.get('perfil')==='celular'}),compactDevice=motionProfile.compact;
  let lightMode=false,cameraTilt=true,plazaMode=false,plazaPeakZoom=0,motionEnabled=true,userPaused=false;
  if(lightMode){map.jumpTo({pitch:0});map.setMaxPitch(0);}
  cameraState();
  // Shared assets warm only after the continent paints, with no extra GPU context.
  if(!weakDevice){const warm=()=>{if(!baseReady){map.once('idle',warm);return;}const run=()=>window.ARENA_ART.load().then(()=>{$('map').dataset.assetsWarm='ready';}).catch(()=>{$('map').dataset.assetsWarm='retry-on-demand';});if(window.requestIdleCallback)requestIdleCallback(run,{timeout:1400});else setTimeout(run,400);};requestAnimationFrame(()=>requestAnimationFrame(warm));}
  map.on('moveend',()=>{$('map').dataset.cameraPose=JSON.stringify([map.getCenter().lng,map.getCenter().lat,map.getZoom(),map.getPitch(),map.getBearing()]);});
  function cameraState(){
    $('camera-flat').setAttribute('aria-pressed',String(!cameraTilt));
    $('camera-tilt').setAttribute('aria-pressed',String(cameraTilt));
    $('camera-light').setAttribute('aria-pressed',String(lightMode));$('camera-motion').setAttribute('aria-pressed',String(motionEnabled));$('camera-motion').textContent=motionEnabled?'Pausar torcida':'Animar torcida';$('camera-motion').title=motionEnabled?'Pausar movimentos da torcida':'Ativar movimentos da torcida';
    $('camera-tilt').disabled=false;$('camera-turn').disabled=lightMode&&!plazaMode;
    if(map.getLayer('country-sides'))map.setLayoutProperty('country-sides','visibility',lightMode?'none':'visible');
  }
  function changeCamera(tilt){if(!tilt){plazaMode=false;plazaPeakZoom=0;liftCrowdLabels();}cameraTilt=tilt;map.setMaxPitch(lightMode&&!plazaMode?0:60);map.easeTo({pitch:tilt?52:0,duration:reduced()?0:450});cameraState();}
  $('camera-flat').onclick=()=>changeCamera(false);
  $('camera-tilt').onclick=()=>{lightMode=false;motionEnabled=!userPaused;changeCamera(true);declutter();refreshStadiumScene();if(current&&!plazaMode)flyTo(current,0);refreshCardPreview();};
  $('camera-turn').onclick=()=>map.easeTo({bearing:map.getBearing()+45,duration:reduced()?0:450});
  $('camera-light').onclick=()=>{lightMode=!lightMode;motionEnabled=!lightMode&&!userPaused;detailRenderer?.setMotion(motionEnabled);changeCamera(!lightMode||plazaMode);declutter();refreshStadiumScene();if(current&&!plazaMode)flyTo(current,0);refreshCardPreview();};
  $('camera-motion').onclick=()=>{if(lightMode){toast('Modo Leve: movimentos e fumaça desligados.');return;}motionEnabled=!motionEnabled;userPaused=!motionEnabled;cameraState();detailRenderer?.setMotion(motionEnabled);};
  map.on('load',cameraState);
  map.on('pitchend',()=>{if(typeof refreshStadiumScene==='function')refreshStadiumScene();});

  function usableArea(withSheet=true){
    const r=$('map').getBoundingClientRect(),bar=document.querySelector('.mapctl').getBoundingClientRect();
    const area={left:mobile()?26:40,right:r.width-(mobile()?26:40),top:Math.max(24,bar.bottom-r.top+14,document.querySelector('.camera-controls').getBoundingClientRect().bottom-r.top+10),bottom:r.height-(mobile()?100:80)};
    if(mobile()&&($('view-mapa').classList.contains('team-open')||$('view-mapa').classList.contains('group-open')))area.top=44;
    const side=document.querySelector('.match-sidebar').getBoundingClientRect();
    if(!mobile()&&side.width)area.left=Math.max(area.left,side.right-r.left+24);
    if(!mobile()&&matchMedia('(min-width:1200px)').matches&&!$('view-mapa').classList.contains('team-open'))area.right=Math.min(area.right,$('activity-panel').getBoundingClientRect().left-r.left-20);
    if(mobile()&&!$('mobile-welcome').hidden){const welcome=$('mobile-welcome').getBoundingClientRect();if(welcome.height)area.top=Math.max(area.top,welcome.bottom-r.top+20);}
    if(withSheet&&!$('sheet').hidden){const panel=$('sheet').getBoundingClientRect();if(mobile())area.bottom=Math.min(area.bottom,panel.top-r.top-24);else area.right=Math.min(area.right,panel.left-r.left-24);}
    if(withSheet&&!groupPicker.hidden){const panel=groupPicker.getBoundingClientRect();if(mobile())area.bottom=Math.min(area.bottom,panel.top-r.top-24);else area.right=Math.min(area.right,panel.left-r.left-24);}
    area.right=Math.max(area.left+60,area.right);area.bottom=Math.max(area.top+30,area.bottom);
    return area;
  }
  function fitBounds(bounds,maxZoom,duration=650,withSheet=false){
    const area=usableArea(withSheet),r=$('map').getBoundingClientRect();
    const padding={left:area.left,right:r.width-area.right,top:area.top,bottom:r.height-area.bottom};
    map.stop();const priorCamera={center:map.getCenter().toArray(),zoom:map.getZoom(),pitch:map.getPitch(),bearing:map.getBearing(),padding:map.getPadding()};map.jumpTo({pitch:0,bearing:0,padding:zeroPadding});
    const camera=map.cameraForBounds(bounds,{padding,...(Number.isFinite(maxZoom)?{maxZoom}:{})});
    map.jumpTo(priorCamera);
    if(camera)map.easeTo({...camera,pitch:cameraTilt&&camera.zoom>=7?52:0,bearing:0,padding:zeroPadding,duration:reduced()?0:duration});
  }
  function fit(k){
    plazaMode=false;closeGroup();closeSheet();region=k;scope=k==='br'?'br':'all';$('map-region-label').textContent=({br:'BRASIL',am:'AMÉRICAS',eu:'EUROPA',all:'MUNDO'})[k];
    document.querySelectorAll('.mapctl button').forEach(b=>{const selected=b.id==='z-'+k;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
    fitBounds(VIEWS[k],k==='br'?4:undefined);
  }
  $('z-am').onclick=()=>fit('am');$('z-br').onclick=()=>fit('br');$('z-eu').onclick=()=>fit('eu');$('z-all').onclick=()=>fit('all');
  const markers={};
  function placeMarkers(){
    Object.values(markers).forEach(m=>m.remove());
    const cities=new Map();
    S.teams.forEach(t=>{const key=t.country+':'+t.city.toLowerCase();if(!cities.has(key))cities.set(key,[]);cities.get(key).push(t);});
    cities.forEach(arr=>{
      const anchor=[arr.reduce((n,t)=>n+t.lon,0)/arr.length,arr.reduce((n,t)=>n+t.lat,0)/arr.length],offsets=L.cityOffsets(arr.length),plots=L.cityPlots(anchor,arr.length);
      arr.sort((a,b)=>a.id.localeCompare(b.id));
      arr.forEach((t,i)=>{
        t.cityAnchor=anchor;t.mapLocation=plots[i];t.cityOffset=offsets[i];t.mapOffset=[0,0];
        const el=document.createElement('button');el.type='button';el.className='stad'+(t.level>=2||t.n>=30?' big':'');el.dataset.club=t.id;
        el.style.setProperty('--sz',window.ARENA_MAP.markerSize(t.level)*window.ARENA_OFFICIAL_MARKERS.scaleFor(t.cadeiras)+'px');
        el.setAttribute('aria-label',t.name+': '+LEVELS[t.level].name+', '+fmt(t.cadeiras)+' cadeiras');
        const next=LEVELS[t.level+1],progress=next&&t.n?'<span class="marker-progress"><span>'+fmt(t.cadeiras)+' / '+fmt(next.min)+'</span><i><b style="width:'+Math.min(100,Math.round(t.cadeiras/next.min*100))+'%"></b></i></span>':'';
        el.innerHTML=(t.stars?'<span class="stadium-honors" aria-label="'+t.stars+' títulos de temporada">★'+(t.stars>1?' ×'+t.stars:'')+'</span>':'')+window.ARENA_MARKER_VISUALS.silhouette(t)+window.ARENA_MARKER_VISUALS.badge(t)+(t.crest_url?'<span class="marker-crest"><img loading="lazy" decoding="async" data-crest-src="'+esc(t.crest_url)+'" alt=""></span>':'')+'<span class="lbl">'+esc(t.name)+'</span>'+progress;
        window.ARENA_MARKER_PREVIEWS.mount(el,t);const box=el.querySelector('svg').getAttribute('viewBox').split(/\s+/).map(Number);el.style.setProperty('--stadium-ratio',310/420);
        el.addEventListener('click',e=>{e.stopPropagation();openTeam(t);});
        markers[t.id]=new maplibregl.Marker({element:el,offset:t.mapOffset,rotationAlignment:'viewport',pitchAlignment:'viewport'}).setLngLat(t.mapLocation).addTo(map);el.setAttribute('aria-label',t.name+': '+LEVELS[t.level].name+', '+fmt(t.cadeiras)+' cadeiras');t.el=el;
      });
    });zoomStyle();catalogReady=true;if(map.getLayer('first-stadiums'))map.removeLayer('first-stadiums');if(map.getSource('first-stadiums'))map.removeSource('first-stadiums');
  }
  function zoomStyle(){const z=map.getZoom();$('map').style.setProperty('--zs',Math.max(.55,Math.min(1.5,.45+z*.12)).toFixed(2));$('map').style.setProperty('--marker-scale',Math.max(.85,Math.min(1.4,.55+z*.09)).toFixed(2));$('map').classList.toggle('map-zoomed',z>=7.5);$('map').classList.toggle('map-closeup',(z>=18.8||plazaMode)&&(!lightMode||plazaMode));}
  map.on('zoom',zoomStyle);
  function exploreMap(){
    plazaMode=false;plazaPeakZoom=0;liftCrowdLabels();region=null;scope='all';
    document.querySelectorAll('.mapctl button').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});
    declutter();
  }
  map.on('dragstart',exploreMap);
  map.on('zoomstart',e=>{if(e.originalEvent)exploreMap();});
  map.on('movestart',e=>{if(e.originalEvent)exploreMap();});
  function closeGroup(){groupPicker.hidden=true;groupTeams=[];$('view-mapa').classList.remove('group-open');declutter();refreshStadiumScene();}
  function focusGroup(){
    if(!groupTeams.length)return;
    const xs=groupTeams.map(t=>t.mapLocation[0]),ys=groupTeams.map(t=>t.mapLocation[1]);
    fitBounds([[Math.min(...xs)-.003,Math.min(...ys)-.003],[Math.max(...xs)+.003,Math.max(...ys)+.003]],14,600,true);
    declutter();refreshStadiumScene();
  }
  function openGroup(teams){
    closeSheet();setIntro(false);region=null;$('mobile-welcome').hidden=true;$('boletim').open=false;groupTeams=teams;
    $('view-mapa').classList.add('group-open');
    groupPicker.innerHTML='<div class="group-heading"><div><p class="eyebrow">'+teams.length+' CLUBES · '+esc(teams[0].city)+'</p><h3>Escolha sua torcida</h3></div><button type="button" id="group-close" aria-label="Fechar lista de times">×</button></div><div class="group-options">'+[...teams].sort(L.chairsFirst).map(t=>'<button type="button" data-pick-club="'+esc(t.id)+'"><img data-crest-src="'+esc(t.crest_url||'')+'" alt=""><span><b>'+esc(t.name)+'</b><small><strong class="chairs-primary">'+fmt(t.cadeiras)+' cadeiras</strong><span class="supporters-secondary"> · '+fmt(t.n)+' torcedores</span></small></span><span aria-hidden="true">↗</span></button>').join('')+'</div>';
    groupPicker.hidden=false;$('group-close').onclick=closeGroup;focusGroup();
  }
  groupPicker.addEventListener('click',e=>{const b=e.target.closest('[data-pick-club]');if(b){const team=S.teams.find(t=>t.id===b.dataset.pickClub);if(team)openTeam(team);}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!groupPicker.hidden)closeGroup();});
  function declutter(){
    clusterMarkers.forEach(m=>m.remove());clusterMarkers=[];
    const eligible=S.teams.filter(t=>scope!=='br'||t.country==='BR');
    S.teams.forEach(t=>{if(t.el)t.el.style.display=eligible.includes(t)?'':'none';t.mapOffset=[0,0];markers[t.id]?.setOffset(t.mapOffset);});
    if(map.getZoom()>=(lightMode?15:14))return;
    // Expanded city clubs stay on their permanent plots and can be tapped directly.
    const points=eligible.filter(t=>!groupTeams.some(g=>g.id===t.id)).map(t=>{const p=map.project(t.cityAnchor);return {x:p.x,y:p.y,team:t};});
    const buckets=L.clusterPoints(points,map.getZoom()>=7.5?80:mobile()?110:125);
    const anchorGroup=teams=>{
      teams.forEach(t=>t.el.style.display='none');
      const anchors=teams.map(t=>t.cityAnchor),mean=L.inlandAnchor(anchors,[]),size=window.ARENA_MAP.groupSize(L.clusterSize(teams.length)+22,L.groupLevel(teams))*(mobile()&&map.getZoom()<5?.78:1);
      const p=map.project(mean),edgeX=map.unproject([p.x+size*.58,p.y]),edgeY=map.unproject([p.x,p.y+size*.52]);
      const location=L.inlandAnchor(anchors,land,[Math.min(12,Math.abs(edgeX.lng-mean[0])),Math.min(10,Math.abs(edgeY.lat-mean[1]))]);
      const point=map.project(location);return {teams,location,x:point.x,y:point.y,size};
    };
    const groups=buckets.filter(g=>g.length>1).map(group=>anchorGroup(group.map(p=>p.team)));
    // Moving coastal groups inland must not stack their stadiums on one another.
    for(let merged=true;merged;){merged=false;outer:for(let i=0;i<groups.length;i++)for(let j=i+1;j<groups.length;j++){
      const a=groups[i],b=groups[j];if(Math.abs(a.x-b.x)<(a.size+b.size)/2+8&&Math.abs(a.y-b.y)<(a.size+b.size)*.47+25){groups[i]=anchorGroup([...a.teams,...b.teams]);groups.splice(j,1);merged=true;break outer;}
    }}
    const rect=$('map').getBoundingClientRect(),area=usableArea(false);
    const scale=Math.max(.85,Math.min(1.4,.55+map.getZoom()*.09));
    const singles=buckets.filter(g=>g.length===1).map(([p])=>{const size=window.ARENA_MAP.markerSize(p.team.level)*scale;return {...p,size,width:size+22,height:size*.84+48,single:true};});
    [...groups,...singles].filter(g=>g.x>-g.size&&g.x<rect.width+g.size&&g.y>-g.size&&g.y<rect.height+g.size).map(g=>({...g,dx:0,dy:0})).forEach(({teams,team,single,location,size,dx,dy})=>{
      if(single){markers[team.id].setOffset([team.mapOffset[0]+dx,team.mapOffset[1]+dy]);return;}
      const el=document.createElement('button');el.type='button';el.className='map-cluster';el.dataset.clubs=teams.map(t=>t.id).join(',');el.style.setProperty('--cluster-size',size+'px');
      const crests=[...teams].sort(L.chairsFirst).slice(0,3);
      const representative=crests[0],level=representative.level;el.dataset.level=level;el.dataset.representative=representative.id;
      el.title=teams.map(t=>t.name).join(', ');el.innerHTML=window.ARENA_MARKER_VISUALS.silhouette(representative)+window.ARENA_MARKER_VISUALS.badge(representative)+'<span class="cluster-crests" aria-hidden="true">'+crests.slice(0,1).map(t=>'<img loading="lazy" decoding="async" data-crest-src="'+esc(t.crest_url||'')+'" alt="">').join('')+'</span><span class="cluster-word"><b>'+teams.length+'</b> times</span>';
      window.ARENA_MARKER_PREVIEWS.mount(el,representative);el.onclick=e=>{e.stopPropagation();closeSheet();region=null;$('mobile-welcome').hidden=true;const sameCity=teams.every(t=>t.country===teams[0].country&&t.city===teams[0].city);if(sameCity){openGroup(teams);return;}closeGroup();const lons=teams.map(t=>t.mapLocation[0]),lats=teams.map(t=>t.mapLocation[1]);fitBounds([[Math.min(...lons),Math.min(...lats)],[Math.max(...lons),Math.max(...lats)]],10);};
      clusterMarkers.push(new maplibregl.Marker({element:el,offset:[dx,dy],rotationAlignment:'viewport',pitchAlignment:'viewport'}).setLngLat(location).addTo(map));el.setAttribute('aria-label','Ver '+teams.length+' times nesta região');
    });
  }
  map.on('moveend',declutter);placeMarkers();
  function flyTo(t,duration=650){
    const r=$('map').getBoundingClientRect(),area=usableArea();
    const offset=L.focusOffset(r.width,r.height,area,[0,0]);
    const zoom=t.level>=3?15.9:16.6;
    map.easeTo({center:t.mapLocation,zoom,pitch:cameraTilt?52:0,bearing:cameraTilt?-30:0,padding:zeroPadding,offset,duration:reduced()?0:duration});
  }

  // ---------- súmula ----------
  const sheet = $("sheet");
  let current = null, meHandle = null;
  let readyNeighborhoods=new Set(),sceneClub=null,sceneSignature=null,detailRenderer=null,roofCutaway=false,crowdLabels=[],arrivalMarker=null,arrivalTimer;
  function refreshCardPreview(){const el=$('club-neighborhood-preview');if(current&&el)window.ARENA_THUMBNAIL.mount(el,current,{lite:lightMode});}
  function visitorAvatar(t,h){
    const f=window.ARENA_ART_STATE.people({...t,visitorHandle:h}).find(f=>f.h===h);if(!f)return null;
    const scale=window.ARENA_ART_STATE.scale;return {...f,position:[t.mapLocation[0]+f.x*scale/(111320*Math.cos(t.mapLocation[1]*Math.PI/180)),t.mapLocation[1]-f.z*scale/111320]};
  }
  function crowdNames(crowd){
    crowdLabels.forEach(m=>m.remove());crowdLabels=[];
    for(const f of crowd.filter(f=>f.label)){
      const el=document.createElement('button');el.type='button';el.className='fan-avatar-label'+(f.own?' own':'');el.innerHTML='<small>'+esc(f.role)+'</small><b>@'+esc(f.h)+'</b>';el.title=f.role+' · @'+f.h;el.setAttribute('aria-label',el.title);el.onclick=e=>{e.stopPropagation();toast('@'+f.h+' · '+f.cad+' cadeiras · '+f.role);};
      const marker=new maplibregl.Marker({element:el,anchor:'top-left'}).setLngLat(f.position).addTo(map);marker.fan=f;crowdLabels.push(marker);
    }liftCrowdLabels();
  }
  function liftCrowdLabels(){
    const r=$('map').getBoundingClientRect(),close=window.ARENA_MARKER_VISUALS.showPlazaLabels(map.getZoom(),plazaMode),boxes=[];
    for(const m of crowdLabels){const el=m.getElement(),f=m.fan;el.style.visibility=close?'visible':'hidden';if(!close)continue;const p=map.project(m.getLngLat());if(p.x<0||p.x>r.width||p.y<0||p.y>r.height){el.style.visibility='hidden';continue;}const lift=window.ARENA_MOTION.labelLift(m.getLngLat().lat,map.getZoom(),map.getPitch());boxes.push({id:f.h,own:f.own,x:p.x,y:p.y-lift,width:el.offsetWidth,height:el.offsetHeight});}
    const layout=window.ARENA_LABELS.arrange(boxes,r.width,r.height);for(const m of crowdLabels){const box=layout.find(b=>b.id===m.fan.h),p=map.project(m.getLngLat());if(!box){m.getElement().style.visibility='hidden';continue;}m.setOffset([box.x-p.x,box.y-p.y]);}
  }
  map.on('move',liftCrowdLabels);
  map.on('zoom',()=>{if(plazaMode){const z=map.getZoom();if(plazaPeakZoom&&z<plazaPeakZoom-.05){plazaMode=false;plazaPeakZoom=0;sceneSignature=null;}else plazaPeakZoom=Math.max(plazaPeakZoom,z);}liftCrowdLabels();});

  function showArrival(f){
    const focused=current||sceneClub;
    if(!focused||focused.id!==f.team||!motionEnabled||(lightMode&&!plazaMode))return;
    if(detailRenderer?.arrive(f.team,f.h)){toast('@'+f.h+' chegou à torcida · +1 cadeira');return;}
    arrivalMarker?.remove();clearTimeout(arrivalTimer);
    const el=document.createElement('div');el.className='arrival-avatar';el.style.setProperty('--jersey',focused.color1);el.innerHTML='<span class="arrival-travel"><span class="arrival-person"><i></i><b></b></span><strong>+1 cadeira</strong><small></small></span>';el.querySelector('small').textContent='@'+f.h;
    const point=focused.mapLocation,pos=[point[0],point[1]+window.ARENA_CROWD.gate(focused)/111320];
    arrivalMarker=new maplibregl.Marker({element:el,anchor:'bottom'}).setLngLat(pos).addTo(map);arrivalTimer=setTimeout(()=>{arrivalMarker?.remove();arrivalMarker=null;},6500);
  }
  function refreshStadiumScene(){
    if(!map.getLayer('land'))return;
    const t=current||sceneClub,visible=map.getZoom()>=14&&(!lightMode||plazaMode);
    const bounds=map.getBounds();
    let clubs=visible?S.teams.filter(c=>!groupTeams.some(g=>g.id===c.id)&&(scope!=='br'||c.country==='BR')&&(bounds.contains(c.mapLocation)||((plazaMode||map.getZoom()>=18.8)&&c.id===t?.id))).sort((a,b)=>(b.id===t?.id)-(a.id===t?.id)).slice(0,12):[];
    // One district at walking distance keeps close-up views readable and bounded.
    const plazaClose=plazaMode||map.getZoom()>=18.8;
    if(plazaClose&&clubs.length){const center=map.getCenter();clubs.sort((a,b)=>(b.id===t?.id)-(a.id===t?.id)||Math.hypot(a.mapLocation[0]-center.lng,a.mapLocation[1]-center.lat)-Math.hypot(b.mapLocation[0]-center.lng,b.mapLocation[1]-center.lat));clubs=clubs.slice(0,1);}
    const signature=JSON.stringify([plazaClose,lightMode,clubs.map(c=>[c.id,c.cadeiras,c.stadium_items||[],c.color1,c.color2,c.presidente?.h,c.lideres?.map(f=>f.h),c.fans?.map(f=>[f.h,f.cad])]),visible,map.getZoom()>=16,roofCutaway,meHandle]);
    // Restore the exclusive representation even after markers are rebuilt by refreshGame.
    S.teams.forEach(c=>c.el?.classList.toggle('native-stadium',clubs.includes(c)&&readyNeighborhoods.has(c.id)));
    const mapBox=$('map').getBoundingClientRect();
    for(const c of clubs){
      const ppm=512*Math.pow(2,map.getZoom())/(40075016.686*Math.cos(c.mapLocation[1]*Math.PI/180));
      const plan=window.ARENA_ART_STATE.plan(c),point=c.mapLocation,latScale=1.3/111320,lonScale=latScale/Math.cos(point[1]*Math.PI/180),height=[4,15,17,24,32][c.level];
      const roofY=Math.min(...[-1,1].flatMap(x=>[-1,1].map(z=>map.project([point[0]+x*plan.width/2*lonScale,point[1]+z*plan.depth/2*latScale]).y)))-height*ppm*Math.sin(map.getPitch()*Math.PI/180);
      const bottomY=Math.max(...[-1,1].flatMap(x=>[-1,1].map(z=>map.project([point[0]+x*plan.width/2*lonScale,point[1]+z*plan.depth/2*latScale]).y)));
      const markerTop=c.el.getBoundingClientRect().top-mapBox.top;
      const controls=document.querySelector('.camera-controls').getBoundingClientRect(),safeTop=controls.height?controls.bottom-mapBox.top+8:12;
      c.el.style.setProperty('--crest-top',(Math.max(safeTop,roofY-36)-markerTop)+'px');
      c.el.style.setProperty('--label-top',(bottomY-markerTop+4)+'px');
    }
    if(signature===sceneSignature)return;sceneSignature=signature;
    if(t)sceneClub=t;
    // Mobile pilot approved: every club can use the neighborhood, with bounded detail.
    const artTeams=clubs.slice(0,lightMode?2:compactDevice?1:4).map(c=>({...c,visitorHandle:c.id===(current||sceneClub)?.id?meHandle:null}));
    const artCrowd=artTeams.flatMap(t=>window.ARENA_ART_STATE.people(t,lightMode).slice(0,compactDevice&&!lightMode&&!plazaClose?12:30).map(f=>({...f,position:[t.mapLocation[0]+f.x*window.ARENA_ART_STATE.scale/(111320*Math.cos(t.mapLocation[1]*Math.PI/180)),t.mapLocation[1]-f.z*window.ARENA_ART_STATE.scale/111320]})));crowdNames(artCrowd);
    const modelData={artTeams,lite:lightMode,compact:compactDevice&&!lightMode,animate:motionEnabled&&!lightMode,detailed:(!compactDevice||plazaClose)&&map.getZoom()>=16,cutaway:roofCutaway};
    if(artTeams.length){detailRenderer=detailRenderer||window.ARENA_THREE.create(map,{onReady:ids=>{readyNeighborhoods=new Set(ids);$('map').dataset.neighborhoodsReady=ids.join(',');S.teams.forEach(c=>c.el?.classList.toggle('native-stadium',(!lightMode||plazaMode)&&map.getZoom()>=14&&readyNeighborhoods.has(c.id)));}});detailRenderer.update(modelData,t?.mapLocation||clubs[0].mapLocation);}else{readyNeighborhoods.clear();detailRenderer?.update(modelData,[-53,-15]);}
  }
  map.on('moveend',refreshStadiumScene);
  map.on('load',refreshStadiumScene);
  map.on('idle',refreshStadiumScene);
  let wasDetail=false;map.on('zoom',()=>{const detail=map.getZoom()>=14&&!lightMode;if(detail!==wasDetail){wasDetail=detail;declutter();refreshStadiumScene();}});

  const participationPost=C.POST_OFICIAL||(preseason?C.POST_TESTE:'');
  function fanWelcome(f){const old=legacyFanWelcome(f),invite=old.match(/<details class="fan-invite">[\s\S]*?<\/details>/)?.[0]||'';return window.ARENA_ELECTION_UI.welcome(f,S).replace('</section>',invite+'</section>');}
  function legacyFanWelcome(f){
    const p=G.fanProgress(f);
    return `<section class="fan-welcome" aria-label="Sua participação"><span class="fan-welcome-kicker">${G.DEMO?'DEMONSTRAÇÃO':preseason?'PILOTO · PARTICIPAÇÃO DE TESTE':'SUA PARTICIPAÇÃO'}</span><h3>Bem-vindo, @${esc(f.h)}!</h3><p>Sua cadeira na torcida do <b>${esc(f.team.name)}</b> está garantida.</p><div class="fan-welcome-numbers"><span><b>${fmt(f.entryNumber)}º</b> a entrar nesta torcida</span><span><b>${fmt(f.cad)}</b> ${f.cad===1?'cadeira conquistada':'cadeiras conquistadas'}</span></div><p class="fan-entry-note">Ordem de entrada ${preseason?'no piloto':'nesta temporada'}; a posição no ranking muda com a pontuação.</p><div class="fan-next"><strong>${p.todayDone?'✓ Participação de hoje confirmada':'Comente hoje para ganhar mais uma cadeira'}</strong><p>${p.todayDone?'Comente amanhã de novo para ganhar mais uma cadeira.':'Um comentário válido por dia já conta.'}</p><p>Mais <b>${p.remaining} ${p.remaining===1?'dia seguido':'dias seguidos'}</b> de participação para ganhar <b>+${p.bonus} cadeiras</b> de bônus.${p.run===0?' Sua sequência começa de novo com o próximo comentário.':''}</p></div><details class="fan-invite"><summary>Convidar um amigo ↗</summary><p>Seu amigo comenta o time dele e escreve <b>“vim pelo @${esc(f.h)}”</b>. Na primeira participação dele ${preseason?'no piloto':'na temporada'}, sua torcida ganha uma cadeira extra.</p><p class="fan-entry-note">Compartilhar ou abrir o link não confirma a indicação.</p>${participationPost&&!G.DEMO?'<button type="button" class="btn" id="share-invite">Compartilhar convite</button><button type="button" class="btn ghost" id="copy-invite">Copiar convite</button><p id="invite-feedback" role="status"></p><textarea id="invite-copy" aria-label="Convite para copiar" readonly hidden></textarea>':'<p class="note">Os convites ficam disponíveis no post de participação.</p>'}</details>${preseason&&!G.DEMO?'<p class="fan-entry-note">Estamos em teste. As cadeiras e a ordem de entrada do piloto não passam para a Temporada 1.</p>':''}</section>`;
  }
  async function shareInvite(f,copyOnly=false){
    const text=`Venha para a Arena das Torcidas! Comente o nome do seu time e “vim pelo @${f.h}” no ${preseason?'post de teste':'post oficial'}. Vamos fazer nossa torcida crescer!\n${participationPost}`;
    const feedback=$('invite-feedback');
    if(copyOnly){const box=$('invite-copy');box.hidden=false;box.value=text;box.focus();box.select();feedback.textContent='Convite pronto para copiar e enviar ao seu amigo.';return;}
    try{
      if(navigator.share){await navigator.share({title:'Arena das Torcidas',text});feedback.textContent='Convite compartilhado. O bônus depende da primeira participação do amigo.';}
      else {await navigator.clipboard.writeText(text);feedback.textContent='Convite copiado! Cole na conversa com seu amigo.';}
    }catch(e){if(e.name==='AbortError')return;const box=$('invite-copy');if(!box)return;box.hidden=false;box.value=text;box.focus();box.select();feedback.textContent='Selecione e copie o convite abaixo para enviar ao seu amigo.';}
  }
  function closeSheet() { if(current)sceneClub=current;sheet.classList.remove('folded');window.ARENA_THUMBNAIL.cancel();sheet.hidden = true;$("view-mapa").classList.remove("team-open"); if (current && current.el) current.el.classList.remove("sel"); current = null;requestAnimationFrame(labelVisibility); }
  map.on("click", e=>{const fan=detailRenderer?.pickFan?.(e.point);if(fan){toast("@"+fan.h+" · "+fan.cad+" cadeiras · "+fan.role);return;}closeSheet();closeGroup();});
  function foldSheet(folded){sheet.classList.toggle('folded',folded);const b=$('sheet-expand');if(b)b.setAttribute('aria-expanded',String(!folded));}
  function openTeam(t, hl,passive=false) {
    if(!passive){plazaMode=false;plazaPeakZoom=0;liftCrowdLabels();}
    const wasFolded=passive&&sheet.classList.contains('folded');
    const previousScroll=passive?sheet.scrollTop:0,inviteOpen=passive&&sheet.querySelector('.fan-invite')?.open;
    $('view-mapa').classList.remove('activity-open');$('activity-toggle').setAttribute('aria-expanded','false');
    closeGroup();if(t.country!=="BR"){scope="all";region=null;document.querySelectorAll(".mapctl button").forEach(b=>{b.classList.remove("active");b.setAttribute("aria-pressed","false");});}
    setIntro(false);$("view-mapa").classList.add("team-open");$("boletim").open=false;
    if (current && current.el) current.el.classList.remove("sel");
    current = t; meHandle = hl || null; if (t.el) t.el.classList.add("sel");
    const lv = LEVELS[t.level], nx = LEVELS[t.level + 1],construction=window.ARENA_NEIGHBORHOOD.construction(t);
    const pct = nx ? Math.max(0, Math.round(((t.cadeiras - lv.min) / (nx.min - lv.min)) * 100)) : 100;
    const rivals = S.teams.filter((o) => G.groupOf(o) === G.groupOf(t)).sort((a, b) => a.rankUF - b.rankUF);
    const all = [...t.fans].sort((a, b) => b.cad - a.cad);
    const personal=t.fans.find(f=>f.h===meHandle);
    const li = (f, i, val, extra) => `<li class="${f.h === meHandle ? "me" : ""}"><span class="n">${i}</span><span class="h"><button type="button" class="fan-history-button" data-fan-history="${esc(f.h)}">@${esc(f.h)}</button>${extra || ""}</span><span class="v">${val}</span></li>`;
    const where = FOREIGN(t) ? t.city : t.uf;
    sheet.innerHTML = `<div class="sheet-mini"><button type="button" id="sheet-expand" aria-expanded="false">${esc(t.name)} · abrir ficha ↑</button><button type="button" id="sheet-dismiss" aria-label="Fechar ficha recolhida">×</button></div>
      <div class="sh-head"><div class="stripe" style="background:linear-gradient(90deg,${esc(t.color1)} 0 70%,${esc(t.color2)} 70%)"></div>
        <div class="sh-title">${t.crest_url ? `<img data-crest-src="${esc(t.crest_url)}" alt="">` : `<span class="sw" style="background:${esc(t.color1)};width:18px;height:18px"></span>`}<h2>${esc(t.name)}</h2></div>
        <button class="close" type="button" id="sh-close" aria-label="Fechar">✕</button>
        <span class="chip"><b>${esc(FOREIGN(t) ? countryName(t.country) : t.uf)}</b>${esc(t.city)}</span>
        <div class="level"><div class="level-row"><strong>${lv.name}</strong><span>${nx ? `faltam ${fmt(nx.min - t.cadeiras)} cadeiras para ${nx.name.toLowerCase()}` : "nível máximo"}</span></div>
          <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div></div>
      </div>
      <div class="construction-status"><b>${esc(construction.name)}</b><span>${construction.next?'Próxima obra: '+esc(construction.next.name)+' · faltam '+fmt(construction.remaining)+' cadeiras':'Construção no nível máximo'}</span></div>
      <div class="seat-inspector"><button id="inspect-plaza" type="button" class="btn">Ver torcida na praça</button><button id="inspect-seats" type="button" class="btn ghost" aria-pressed="${roofCutaway}">Ver cadeiras no 3D</button><small>${fmt(t.cadeiras)} conquistadas · cada lugar colorido representa uma cadeira; vagas em cinza.</small></div>
      ${personal?fanWelcome(personal):''}<div class="club-share-row"><button class="btn ghost" type="button" id="share-club"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/></svg><span><strong>Compartilhar minha torcida</strong><small>Instagram, WhatsApp e outros</small></span></button></div>${window.ARENA_ELECTION_UI.contest(t,S)}
      <div class="stadium-detail bairro-preview" style="--team-color:${esc(t.color1)}"><div id="club-neighborhood-preview"></div><span>NÍVEL 0${t.level+1} / 05</span></div>
      <div class="stats">
        <div class="stat"><b>${fmt(t.cadeiras)}</b><span>cadeiras</span></div>
        <div class="stat"><b>${fmt(t.n)}</b><span>torcedores</span></div>
        <div class="stat"><b>${t.cadeiras ? "#"+t.rankUF : "—"}</b><span>${FOREIGN(t) ? "no país" : "no " + esc(t.uf)}</span></div>
        <div class="stat"><b>${t.cadeiras ? "#"+t.rankAll : "—"}</b><span>geral</span></div>
      </div>
      <div class="sec">
        <p class="note">${fmt(t.bonusCurtidas)} ${t.bonusCurtidas===1?'cadeira do time veio':'cadeiras do time vieram'} dos prêmios de curtidas.</p><div class="classico">${rivals.length > 1 ? `Clássico ${FOREIGN(t) ? "no país" : "estadual"}: <b>${t.cadeiras ? t.rankUF+"º de "+rivals.length : "aguardando participação"}</b> (${rivals.slice(0, 6).map((r) => esc(r.short) + " " + fmt(r.cadeiras)).join(" · ")})` : `Na rodada: <b>${fmt(t.semana)}</b> cadeiras.`}</div>
        <div class="roles">
          <div class="role"><span class="ic" aria-hidden="true">♟</span><span class="who">${t.presidente ? "@" + esc(t.presidente.h) : t.rolesPending ? "Eleição da Torcida · 25/10 às 23h59 (Brasília)" : "Cargo vago · participe com 1 cadeira"}<small>Presidente da torcida · apuração diária</small></span><span class="pts">${t.presidente ? t.presidente.cad + " na temporada" : ""}</span></div>
          ${t.pendingChoices?.length?`<p class="note">${t.pendingChoices.length} ${t.pendingChoices.length===1?'melhoria pendente':'melhorias pendentes'} por evolução de nível. ${t.presidente?'O presidente pode escolher os itens acumulados. A organização registra a escolha confirmada.':'As escolhas ficam guardadas até o clube ter seu primeiro presidente.'}</p>`:''}
          <div class="role"><span class="ic" aria-hidden="true">⚑</span><span class="who">${t.fundador ? "@" + esc(t.fundador.h) : "Ninguém ainda"}<small>Torcedor nº 1 desta temporada</small></span><span class="pts">${t.fundador ? t.fundador.cad + " cad." : ""}</span></div>
          ${t.lostRole ? `<div class="role"><span class="ic" aria-hidden="true" style="color:var(--live)">↓</span><span class="who">@${esc(t.lostRole.h)}<small>Fora da disputa: ${t.lostRole.idle} dias sem comentar</small></span><span class="pts">${t.lostRole.cad} na temporada</span></div>` : ""}
        </div>
        ${t.n ? `<h3 class="sub">Líderes de torcida (${t.lideres.length} de 20)</h3>
        <ol class="list">${t.lideres.map((f, i) => li(f, i + 2, f.cad + " na temporada")).join("") || '<li><span></span><span class="h">'+(t.rolesPending?'Primeira apuração: domingo 25/10 às 23h59 (Brasília). Sem mínimo adicional: com 1 cadeira e atividade em dia você já concorre.':'Nenhum líder elegível ainda')+'</span><span></span></li>'}</ol>
        <h3 class="sub">Todos os torcedores (${fmt(t.n)})</h3>
        <ol class="list" id="all-list">${all.slice(0, 80).map((f, i) => li(f, i + 1, f.cad + " cad.", f.idle >= S.inactivity ? `<span class="idle">${f.idle}d parado</span>` : "")).join("")}</ol>`
        : `<p class="classico">Essa torcida ainda não tem ninguém. Comente <b>${esc(t.name)}</b> no post oficial e vire o torcedor nº 1.</p>`}
      </div>
      <section class="club-equipment"><h3>Melhorias da torcida</h3><p class="note">${t.pendingChoices?.length||0} ${(t.pendingChoices?.length||0)===1?'escolha pendente':'escolhas pendentes'} · itens visuais, sem bônus de cadeiras.</p><div class="equipment-gallery">${window.ARENA_ART_STATE.catalog.map(item=>{const installed=(t.stadium_items||[]).includes(item.id),available=window.ARENA_ART_STATE.allowed(item.id,t.level);return '<div class="equipment-card'+(installed?' installed':'')+'"><b>'+esc(item.name)+'</b><small>'+(installed?'✓ Instalado':item.soon?'Em breve':available?'Disponível para escolha do presidente':'A partir de '+esc(window.ARENA_ART_STATE.names[item.min]))+'</small></div>';}).join('')}</div><p class="note">As escolhas ficam guardadas até o clube ter presidente. Nada é instalado automaticamente.</p></section>
      <section class="team-history" id="personal-history" hidden></section>
      <section class="team-history" id="team-history"><h4>História da torcida</h4><p class="note">Carregando conquistas…</p></section>
      <div class="sh-foot"><button class="btn ghost" type="button" id="sh-map">Ver no mapa</button>${C.POST_OFICIAL ? `<a class="btn" href="${esc(C.POST_OFICIAL)}" target="_blank" rel="noopener">Comentar no post</a>` : `<a class="btn" href="https://www.instagram.com/arenadastorcidas2026/" target="_blank" rel="noopener">Participar no Instagram</a>`}</div>`;
    sheet.hidden = false;foldSheet(wasFolded);sheet.scrollTop=previousScroll;$('sheet-expand').onclick=()=>foldSheet(false);$('sheet-dismiss').onclick=closeSheet;
    $('share-club').onclick=()=>window.ARENA_SHARE.open(t,personal,S,'club');if(personal)$('share-personal').onclick=()=>window.ARENA_SHARE.open(t,personal,S,'personal');
    window.ARENA_THUMBNAIL.mount($('club-neighborhood-preview'),t,{lite:lightMode});
    if(!passive){sheet.classList.remove("stadium-enter");void sheet.offsetWidth;sheet.classList.add("stadium-enter");}
    if(inviteOpen&&sheet.querySelector('.fan-invite'))sheet.querySelector('.fan-invite').open=true;
    if(hl&&!passive)document.documentElement.dataset.personalReadyMs=Math.round(performance.now());
    $("sh-close").onclick = () => {closeSheet();$("mobile-welcome").hidden=true;};
    $("sh-map").onclick = () => flyTo(t);
    $('inspect-plaza').onclick=()=>{foldSheet(true);plazaMode=true;plazaPeakZoom=0;changeCamera(true);const P=window.ARENA_ART_STATE,b=window.ARENA_MOTION.plazaBounds({...t,visitorHandle:meHandle},lightMode,P),scale=P.scale/111320,cos=Math.cos(t.mapLocation[1]*Math.PI/180);fitBounds([[t.mapLocation[0]+b.left*scale/cos,t.mapLocation[1]-b.front*scale],[t.mapLocation[0]+b.right*scale/cos,t.mapLocation[1]-b.back*scale]],19.3,650,true);sceneSignature=null;refreshStadiumScene();};
    $('inspect-seats').onclick=()=>{roofCutaway=!roofCutaway;lightMode=false;motionEnabled=!userPaused;changeCamera(true);$('inspect-seats').setAttribute('aria-pressed',String(roofCutaway));sceneSignature=null;flyTo(t,0);refreshStadiumScene();};
    if(personal){const button=document.createElement('button');button.type='button';button.className='btn ghost';button.textContent='Ver meu bonequinho no mapa';button.onclick=()=>{foldSheet(true);plazaMode=true;plazaPeakZoom=0;changeCamera(true);sceneSignature=null;refreshStadiumScene();const avatar=visitorAvatar(t,personal.h);if(avatar){const r=$('map').getBoundingClientRect();map.easeTo({center:avatar.position,zoom:20.2,pitch:58,padding:zeroPadding,offset:L.focusOffset(r.width,r.height,usableArea()),duration:reduced()?0:600});}};sheet.querySelector('.fan-welcome').append(button);}
    if (meHandle) {
      const idx = all.findIndex((f) => f.h === meHandle);
      if (idx >= 80) $("all-list").insertAdjacentHTML("beforeend", li(all[idx], idx + 1, all[idx].cad + " cad."));
      if($('share-invite'))$('share-invite').onclick=()=>shareInvite(personal);
      if($('copy-invite'))$('copy-invite').onclick=()=>shareInvite(personal,true);
    }
    if(!passive)flyTo(t);
    loadTeamHistory(t);if(meHandle)loadFanHistory(meHandle,false);
  }


  async function loadTeamHistory(t){
    const box=$('team-history');if(!box)return;
    if(G.DEMO){box.innerHTML='<h4>História da torcida</h4><p class="note">As conquistas permanentes aparecem aqui quando uma temporada real termina.</p>';return;}
    const {data,error}=await G.sb.rpc('public_team_history',{p_team_id:t.id});
    if(current!==t||!box.isConnected)return;
    if(error){box.innerHTML='<h4>História da torcida</h4><p class="note">Não foi possível carregar as conquistas agora.</p>';return;}
    const titles={champion:'★ Time campeão',first_fan:'⚑ Torcedor nº 1',president:'♟ Presidente ao fim da temporada',leader:'◆ Líder ao fim da temporada'};
    box.innerHTML='<h4>História da torcida</h4>'+(data.results.length?'<ul class="season-history-list">'+data.results.map(r=>'<li><b>Temporada '+r.number+' · '+r.position+'º lugar</b><span>'+fmt(r.chairs)+' cadeiras · '+esc(LEVELS[r.stadium_level].name)+'</span></li>').join('')+'</ul><h4>Conquistas permanentes</h4><ul class="personal-honors">'+data.awards.map(a=>'<li><b>'+esc(titles[a.kind])+'</b><span>'+(a.handle?'@'+esc(a.handle)+' · ':'')+'Temporada '+a.number+'</span></li>').join('')+'</ul>':'<p class="note">Ainda não há temporadas encerradas para esta torcida. As estrelas e os emblemas conquistados ficarão guardados aqui.</p>');
  }

  async function loadFanHistory(handle,scroll=true){
    const box=$('personal-history');if(!box)return;box.hidden=false;
    box.innerHTML='<h4>Conquistas de @'+esc(handle)+'</h4><p class="note">Carregando…</p>';
    if(G.DEMO){box.innerHTML='<h4>@'+esc(handle)+'</h4><p class="note">Torcedor fictício da demonstração.</p>';return;}
    const {data,error}=await G.sb.rpc('public_fan_history',{p_handle:handle});if(!box.isConnected)return;
    const labels={first_fan:'Torcedor nº 1',president:'Presidente ao fim da temporada',leader:'Líder ao fim da temporada'};
    box.innerHTML='<h4>Conquistas de @'+esc(handle)+'</h4>'+(error?'<p class="note">Não foi possível carregar agora.</p>':data.awards.length?'<ul class="personal-honors">'+data.awards.map(a=>'<li><b>⚑ '+esc(labels[a.kind]||a.kind)+'</b><span>Temporada '+a.number+' · '+esc((S.teams.find(t=>t.id===a.team_id)||{}).name||a.team_id)+'</span></li>').join('')+'</ul>':'<p class="note">As conquistas permanentes serão registradas ao encerrar cada temporada.</p>');
    if(scroll)box.scrollIntoView({block:'nearest',behavior:reduced()?'instant':'smooth'});
  }
  sheet.addEventListener('click',e=>{const b=e.target.closest('[data-fan-history]');if(b)loadFanHistory(b.dataset.fanHistory);});
  // ---------- busca ----------
  const toastEl = $("toast"); let tmo;
  function toast(msg) { toastEl.textContent = msg; toastEl.hidden = false; clearTimeout(tmo); tmo = setTimeout(() => (toastEl.hidden = true), 5000); }
  async function findFan(q) {
    q = q.trim().replace(/^@/, "").toLowerCase(); if (!q) return;
    showView("mapa");
    const f = S.fans.find((x) => x.h === q);
    if (!f) {
      const tx = normalize(q);const matches=S.teams.filter(t=>[t.name,t.id,...(t.aliases||[])].some(n=>normalize(n)===tx));
      if(matches.length===1){openTeam(matches[0]);return;}
      if(matches.length>1){renderSearch(q);return;}
      if(!G.DEMO&&/^[a-z0-9._]{1,30}$/.test(q)){const {data,error}=await G.sb.rpc('public_fan_history',{p_handle:q});if(!error&&data.results.length){const team=S.teams.find(t=>t.id===data.results[0].team_id);if(team){openTeam(team,q);toast('@'+q+' tem conquistas no histórico. Uma nova participação entra na temporada atual.');return;}}}
      closeGroup();closeSheet();setIntro(false);
      sheet.innerHTML='<div class="sh-head"><h2 style="padding-right:28px">Ainda não encontramos @'+esc(q)+'</h2><button class="close" type="button" id="missing-close" aria-label="Fechar aviso">×</button></div><div class="sh-body" role="status" style="padding:0 18px"><p>Se você acabou de comentar, aguarde alguns minutos e atualize a página.</p><p>Ainda não comentou? Comente o nome do seu time no Instagram para entrar nesta temporada.</p></div><div class="sh-foot"><button class="btn ghost" id="missing-retry" type="button">Atualizar página</button><a class="btn" href="https://www.instagram.com/arenadastorcidas2026/" target="_blank" rel="noopener">Ir para o Instagram ↗</a></div>';
      sheet.hidden=false;$('view-mapa').classList.add('team-open');$('missing-close').onclick=closeSheet;$('missing-retry').onclick=()=>location.reload();return; }
    openTeam(f.team, f.h);
    $('intro-title').textContent='Bem-vindo, @'+f.h+'!';$('intro-description').textContent='Sua cadeira na torcida do '+f.team.name+' está garantida. Você é o '+f.entryNumber+'º a entrar '+(preseason?'no piloto.':'nesta temporada.');
    $('welcome-title').textContent='Bem-vindo, @'+f.h+'!';$('welcome-description').textContent='Sua cadeira na torcida do '+f.team.name+' está garantida.';
  }
  const normalize = text => String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
  const searchMatches=q=>{const tx=normalize(q);return S.teams.filter(t=>!tx||[t.name,t.id,t.short,...(t.aliases||[])].some(n=>normalize(n).includes(tx)));};
  function renderSearch(q){
    closeGroup();closeSheet();setIntro(false);
    const tx=normalize(q);const list=searchMatches(q).slice(0,8);
    $('search-results').innerHTML='<div class="search-caption">'+(tx?'TORCIDAS ENCONTRADAS':'ESCOLHA SUA TORCIDA')+'</div>'+list.map(t=>'<button type="button" data-result="'+esc(t.id)+'"><img data-crest-src="'+esc(t.crest_url || '')+'" alt=""><span>'+esc(t.name)+'<small>'+esc(countryName(t.country))+'</small></span><b>↗</b></button>').join('')+(list.length?'':'<p>Nenhum time encontrado. Busque seu @ completo para encontrar sua cadeira.</p>');
    $('search-results').hidden=false;
  }
  $('q').addEventListener('focus',()=>{region=null;map.stop();closeGroup();closeSheet();setIntro(false);});
  $('q').addEventListener('input',()=>renderSearch($('q').value));
  $('q').addEventListener('keydown',e=>{if(e.key==='Escape')$('search-results').hidden=true;});
  document.addEventListener('click',e=>{if(!$('search').contains(e.target)&&!e.target.closest('#discover-team'))$('search-results').hidden=true;});
  $('search-results').onclick=e=>{const b=e.target.closest('[data-result]');if(b){const t=S.teams.find(t=>t.id===b.dataset.result);showView('mapa');openTeam(t);$('search-results').hidden=true;$('q').value=t.name;}};
  $('search').addEventListener('submit',e=>{e.preventDefault();const query=$('q').value.trim();if(query.startsWith('@')||S.fans.some(f=>f.h===query.toLowerCase())){$('search-results').hidden=true;findFan(query);}else{const matches=searchMatches(query);if(query&&matches.length===1){showView('mapa');openTeam(matches[0]);$('search-results').hidden=true;$('q').value=matches[0].name;}else renderSearch(query);}});

  // ---------- boletim ----------
  function renderBoletim() {
    const box = $("boletim");
    const active = S.teams.filter((t) => t.n > 0);
    if (!active.length) {
      box.innerHTML = `<summary>Rodada <small>Pontapé inicial</small></summary><p class="bulletin-empty">Explore os ${S.teams.length} clubes no mapa. Em breve, seu comentário vai virar parte dessa história.</p>`;
      return;
    }
    const top = [...active].sort(L.chairsFirst);
    const fans = S.fans.filter((f) => f.idle < S.inactivity && f.cad > 0).sort((a, b) => b.cad - a.cad);
    const near = active.filter((t) => LEVELS[t.level + 1]).map((t) => ({ t, falta: LEVELS[t.level + 1].min - t.cadeiras })).sort((a, b) => a.falta - b.falta)[0];
    box.innerHTML = `
      <summary>Rodada <small>${G.DEMO ? "Exemplo" : "Ver resumo"}</small></summary>
      <dl class="blt">
        <dt>Lidera</dt><dd><button class="linky" data-t="${top[0].id}">${esc(top[0].name)}</button> com <b>${fmt(top[0].cadeiras)}</b> cadeiras na temporada</dd>
        ${fans[0] ? `<dt>Craque</dt><dd>@${esc(fans[0].h)} (${esc(fans[0].team.short)}) com <b>${fans[0].cad}</b> cadeiras</dd>` : ""}
        ${near ? `<dt>Quase lá</dt><dd><button class="linky" data-t="${near.t.id}">${esc(near.t.name)}</button> a <b>${fmt(near.falta)}</b> de virar ${LEVELS[near.t.level + 1].name.toLowerCase()}</dd>` : ""}
        <dt>Torcidas</dt><dd><b>${fmt(S.fans.length)}</b> torcedores em <b>${active.length}</b> times</dd>
      </dl>`;
  }
  $("boletim").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-t]"); if (!b) return;
    const t = S.teams.find((x) => x.id === b.dataset.t); openTeam(t);
  });

  // ---------- ranking ----------
  let ORD = "cadeiras", REG = "all", allClubs=false;
  function renderRank() {
    if($('view-ranking').hidden)return;
    document.querySelector('.rank-table').dataset.sort=ORD;
    const rows = S.teams.filter((t) => (allClubs||t.cadeiras>0)&&(REG === "all" || (REG === "BR" ? t.country === "BR" : G.regionOf(t) === REG)) && (!$("rank-country").value || t.country === $("rank-country").value)).sort(L.chairsFirst);
    $("rank-body").innerHTML = rows.map((t, i) => `
      <tr class="trow" data-t="${t.id}" tabindex="0"><td class="pos">${i + 1}</td>
      <td><span class="team">${t.crest_url ? `<img data-crest-src="${esc(t.crest_url)}" alt="" width="18" height="18" style="object-fit:contain">` : `<span class="sw" style="background:${esc(t.color1)}"></span>`}${esc(t.name)}</span></td>
      <td>${esc(t.city)} · ${esc(FOREIGN(t) ? countryName(t.country) : t.uf)}</td><td><span class="lvl">${LEVELS[t.level].name}</span></td>
      <td class="num chairs-primary">${fmt(t.cadeiras)}</td><td class="num supporters-secondary">${fmt(t.n)}</td><td class="num">${fmt(t.semana)}</td></tr>`).join("")||'<tr><td colspan="7">Nenhum clube com cadeiras neste filtro. Use “Ver todos os clubes” para explorar.</td></tr>';
    const fans = S.fans.filter((f) => f.idle < S.inactivity && f.cad > 0).sort((a, b) => b.cad - a.cad || a.h.localeCompare(b.h)).slice(0, 10);
    $("top-fans").innerHTML = fans.map((f, i) => `<li><span class="n">${i + 1}</span><span class="h">@${esc(f.h)} · ${esc(f.team.name)}</span><span class="v">${fmt(f.cad)} cadeiras</span></li>`).join("") || '<li><span></span><span class="h">Ninguém pontuou nesta rodada ainda</span><span></span></li>';
  }
  $("rank-body").addEventListener("click", (e) => { const r = e.target.closest("tr[data-t]"); if (!r) return; const t = S.teams.find((x) => x.id === r.dataset.t); showView("mapa"); openTeam(t); });
  $('rank-all').onclick=()=>{allClubs=!allClubs;$('rank-all').setAttribute('aria-pressed',String(allClubs));$('rank-all').textContent=allClubs?'Mostrar só clubes com cadeiras':'Ver todos os clubes';renderRank();};
  $("rank-body").addEventListener("keydown", (e) => { if (e.key === "Enter") { const r = e.target.closest("tr"); if (r) r.click(); } });
  document.querySelectorAll("[data-ord]").forEach((b) => (b.onclick = () => { ORD = b.dataset.ord; document.querySelectorAll("[data-ord]").forEach((x) => x.setAttribute("aria-pressed", x === b)); renderRank(); }));
  document.querySelectorAll("[data-reg]").forEach((b) => (b.onclick = () => { REG = b.dataset.reg; document.querySelectorAll("[data-reg]").forEach((x) => x.setAttribute("aria-pressed", x === b)); renderRank(); }));

  // ---------- regras ----------
  $("ladder").innerHTML = LEVELS.map((l,i)=>`<div><div class="ladder-neighborhood" data-ladder="${i}"></div><strong>${l.name}</strong><span>${i ? "a partir de " + fmt(l.min) : "início"}</span></div>`).join("");
  $("inact-text").textContent = `Quem fica ${S.inactivity} dias sem comentar fica inelegível na próxima apuração diária, às 22h de Brasília. O cargo passa ao próximo elegível com mais cadeiras individuais na temporada, sem mínimo adicional além de 1 cadeira válida. As cadeiras ficam guardadas; ao voltar a comentar, o torcedor volta a concorrer com seu total na próxima apuração.`;

  const stageDetails=['Campo aberto, chão de terra, alambrado simples e banco de reservas.','Uma arquibancada comprida e coberta em um lado, com degraus nas cores da torcida. Os outros três lados continuam abertos.','Quatro setores, cantos abertos e quatro torres de iluminação.','Dois anéis de arquibancadas, cobertura contínua, fachada e luzes na cor do clube.','Três anéis, cobertura elevada em duas asas, abertura central com anel de luz, bandeiras e celebração.'];
  let previewIndex=0, tourTimer=null, tourRunning=false,previewThumbTeam=null;
  $('preview-team').innerHTML=[...S.teams].sort((a,b)=>a.name.localeCompare(b.name,'pt-BR')).map(t=>'<option value="'+esc(t.id)+'">'+esc(t.name)+'</option>').join('');
  $('preview-team').value='palmeiras';
  function previewStage(index){
    previewIndex=index; const level=LEVELS[index],team=S.teams.find(t=>t.id===$('preview-team').value)||S.teams[0];
    const example=i=>({...team,level:i,cadeiras:LEVELS[i].min,n:0,fans:[],presidente:null,lideres:[],stadium_items:[],visitorHandle:null});
    $('evolution-scene').classList.add('neighborhood-evolution');
    $('evolution-scene').innerHTML='<div class="stadium-render neighborhood-photo" id="evolution-neighborhood"></div><div class="stadium-caption"><p class="eyebrow">NÍVEL 0'+(index+1)+' / 05 · EXEMPLO VISUAL</p><div class="preview-club"><span>'+esc(team.name)+'</span></div><h3>'+esc(level.name)+'</h3><strong>'+fmt(level.min)+' cadeiras</strong><p>'+stageDetails[index]+'</p><p class="note">'+(index>=3&&['internacional','gremio','palmeiras'].includes(team.id)?'Arquitetura com a identidade do clube.':'O bairro cresce junto com o estádio.')+'</p></div>';
    window.ARENA_THUMBNAIL.mount($('evolution-neighborhood'),example(index),{group:'rules-main'});
    if(previewThumbTeam!==team.id){
      document.querySelectorAll('[data-stage]').forEach(b=>window.ARENA_THUMBNAIL.mount(b.querySelector('.stage-thumb'),example(Number(b.dataset.stage)),{group:'rules-thumb-'+b.dataset.stage}));
      document.querySelectorAll('[data-ladder]').forEach(el=>window.ARENA_THUMBNAIL.mount(el,example(Number(el.dataset.ladder)),{group:'rules-ladder-'+el.dataset.ladder}));previewThumbTeam=team.id;
    }
    document.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.stage)===index));
  }
  function stopTour(){clearTimeout(tourTimer);tourTimer=null;tourRunning=false;$('play-evolution').textContent='▶ Ver evolução completa';}
  $('evolution-tabs').innerHTML=LEVELS.map((l,i)=>'<button type="button" data-stage="'+i+'" aria-pressed="false"><div class="stage-thumb"></div><span>0'+(i+1)+'</span>'+esc(l.name)+'<small>'+fmt(l.min)+' cadeiras</small></button>').join('');
  $('evolution-tabs').onclick=e=>{const b=e.target.closest('[data-stage]');if(b){stopTour();previewStage(Number(b.dataset.stage));}};
  $('preview-team').onchange=()=>{stopTour();previewStage(previewIndex);};
  $('preview-dna').onclick=()=>{stopTour();$('preview-team').value='internacional';previewStage(3);};
  $('play-evolution').onclick=()=>{if(tourRunning){stopTour();return;}tourRunning=true;$('play-evolution').textContent='Ⅱ Pausar evolução';previewStage(0);let step=0;const next=()=>{step++;if(step>4){stopTour();return;}previewStage(step);tourTimer=setTimeout(next,2400);};tourTimer=setTimeout(next,2400);};
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopTour();});
  let previewReady=false;
  // ---------- abas ----------
  function showView(v) {
    document.body.dataset.view=v;
    if(v!=="mapa"){closeGroup();const footer=document.querySelector(".site-footer");if(footer)$("view-"+v).querySelector(".wrap").append(footer);setIntro(false);}
    if(v!=="regras" && typeof stopTour==="function")stopTour();
    ["mapa", "ranking", "regras"].forEach((n) => { $("view-" + n).hidden = n !== v; $("tab-" + n).setAttribute("aria-selected", n === v); });
    if (v === "mapa") map.resize();
    if(v==='ranking')renderRank();
    if(v==='regras'&&!previewReady){previewReady=true;previewStage(0);}
  }
  document.querySelectorAll(".tabs button").forEach((b) => (b.onclick = () => showView(b.dataset.view)));

  const countries = [...new Set(S.teams.map(t=>t.country))].sort((a,b)=>countryName(a).localeCompare(countryName(b),'pt-BR'));
  $('rank-country').innerHTML = '<option value="">Todos os países</option>' + countries.map(code=>'<option value="'+esc(code)+'">'+esc(countryName(code))+'</option>').join('');
  $('rank-country').onchange = renderRank;
  renderBoletim(); renderRank();
  let resizeFrame;
  let previousMapSize='';
  new ResizeObserver(()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(()=>{
    if($('view-mapa').hidden)return;
    const r=$('map').getBoundingClientRect(),size=Math.round(r.width)+'x'+Math.round(r.height);
    if(size===previousMapSize)return;previousMapSize=size;map.resize();
    if(current&&!sheet.hidden&&!sheet.classList.contains('folded')&&!map.isMoving())flyTo(current,0);
  });}).observe($('map'));
  // link pessoal da DM: site.com/?u=seu_arroba
  const u = new URLSearchParams(location.search).get("u");
  // Local country labels use system fonts: no remote glyph downloads.
  const labels=(window.ARENA_COUNTRIES||[]).filter(c=>c.iso&&c.iso!=='-99').map(c=>{
    const el=document.createElement('span');el.className='country-label';el.textContent=countryName(c.iso);
    const marker=new maplibregl.Marker({element:el}).setLngLat(c.location).addTo(map);return {el,marker,location:c.location};
  });
  const cityGroups=new Map();S.teams.forEach(t=>{const key=t.country+':'+t.city;if(!cityGroups.has(key))cityGroups.set(key,[]);cityGroups.get(key).push(t);});
  const cityLabels=[...cityGroups.values()].map(teams=>{
    const el=document.createElement('span');el.className='city-label';el.textContent=teams[0].city;el.style.display='none';
    const location=teams[0].mapLocation,marker=new maplibregl.Marker({element:el}).setLngLat(location).addTo(map);
    return {el,marker,location,teams};
  });
  const cityKey=name=>name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const clubCityKeys=new Set([...cityGroups.values()].map(ts=>ts[0].country+':'+cityKey(ts[0].city)));
  let referenceCities=null,cityFetch=null,vectorPlaces=[];
  const nearbyCities=new Map();
  function refreshReferenceCities(){
    const z=map.getZoom(),bounds=map.getBounds(),wanted=new Set();
    if((referenceCities||vectorPlaces.length)&&z>=4.7){
      const minimum=z>=8?0:z>=6.5?50000:z>=5.5?150000:600000;
      const seen=new Set();
      [...vectorPlaces,...(referenceCities||[])].filter(c=>c[3]>=minimum&&bounds.contains([c[1],c[2]])&&!clubCityKeys.has(c[4]+':'+cityKey(c[0]))).slice(0,120).forEach(c=>{
        const name=cityKey(c[0]);if(seen.has(name))return;seen.add(name);
        if([...clubCityKeys].some(k=>k.endsWith(':'+name)))return;
        const key=c[4]+':'+c[0];wanted.add(key);if(nearbyCities.has(key))return;
        const el=document.createElement('span');el.className='city-label reference-city';el.textContent=c[0];el.style.display='none';
        const location=[c[1],c[2]],marker=new maplibregl.Marker({element:el}).setLngLat(location).addTo(map);
        nearbyCities.set(key,{el,marker,location,pop:c[3],teams:[]});
      });
    }
    nearbyCities.forEach((c,key)=>{if(!wanted.has(key)){c.marker.remove();nearbyCities.delete(key);}});
  }
  function loadReferenceCities(){
    if(map.getZoom()<4.7)return;
    if(referenceCities){refreshReferenceCities();return;}
    if(cityFetch)return;
    cityFetch=fetch('assets/cities.json',{signal:AbortSignal.timeout(10000)}).then(r=>{if(!r.ok)throw Error('city_map_unavailable');return r.json();}).then(data=>{referenceCities=data;refreshReferenceCities();labelVisibility();}).catch(()=>{}).finally(()=>cityFetch=null);
  }
  // Fine details are optional and never gate the base map or a fan's chair.
  let detailsReady=false,detailFrame=null;
  function fineReferences(){
    if(detailsReady||!baseReady||map.getZoom()<7||!map.isStyleLoaded())return;
    detailsReady=true;
    map.addSource('regional-detail',{type:'vector',url:'https://tiles.openfreemap.org/planet',attribution:'<a href="https://openfreemap.org/">OpenFreeMap</a> · <a href="https://openmaptiles.org/">© OpenMapTiles</a> · <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>'});
    map.addLayer({id:'main-roads',type:'line',source:'regional-detail','source-layer':'transportation',minzoom:7,filter:['match',['get','class'],['motorway','trunk','primary'],true,false],layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#e6e4b1','line-width':['interpolate',['linear'],['zoom'],7,.8,12,2.5],'line-opacity':.62}});
    map.addLayer({id:'nearby-places',type:'circle',source:'regional-detail','source-layer':'place',minzoom:7,filter:['match',['get','class'],['city','town','village'],true,false],paint:{'circle-radius':1.5,'circle-color':'#729168','circle-opacity':.5}});
  }
  function readFineCities(){
    if(!detailsReady||map.getZoom()<7)return;
    vectorPlaces=map.querySourceFeatures('regional-detail',{sourceLayer:'place'}).filter(f=>f.geometry.type==='Point'&&['city','town','village'].includes(f.properties.class)).map(f=>[f.properties['name:pt']||f.properties.name,...f.geometry.coordinates,f.properties.class==='city'?1000000:f.properties.class==='town'?100000:25000,'']).filter(c=>c[0]);
    refreshReferenceCities();labelVisibility();
  }
  map.on('sourcedata',e=>{if(e.sourceId==='regional-detail'&&!detailFrame)detailFrame=requestAnimationFrame(()=>{detailFrame=null;readFineCities();});});
  map.on('moveend',fineReferences);map.on('load',fineReferences);
  const stateLabels=[];let statesLoading=false,statesReady=false;
  async function regionalReferences(){
    if(statesReady||statesLoading||map.getZoom()<4.4||!map.isStyleLoaded())return;statesLoading=true;
    const b=map.getBounds();if(b.getWest()>-34||b.getEast()<-74||b.getSouth()>6||b.getNorth()<-34){statesLoading=false;return;}
    try{
      const response=await fetch('assets/states-br.json',{signal:AbortSignal.timeout(10000)});if(!response.ok)throw Error('regional_map_unavailable');
      const data=await response.json();if(data.type!=='FeatureCollection'||data.features.length!==27)throw Error('invalid_regional_map');
      map.addSource('br-states',{type:'geojson',data,tolerance:.15});
      map.addLayer({id:'state-land',type:'fill',source:'br-states',minzoom:4.4,paint:{'fill-color':'#a7cf84','fill-opacity':['interpolate',['linear'],['zoom'],4.4,0,4.7,1]}},'country-border');
      map.addLayer({id:'state-borders',type:'line',source:'br-states',minzoom:4.4,paint:{'line-color':'#5b8863','line-width':['interpolate',['linear'],['zoom'],4.4,.8,9,1.5],'line-dasharray':[3,2],'line-opacity':['interpolate',['linear'],['zoom'],4.4,0,5,.9]}});
      const br=['==',['get','iso'],'BR'];
      // Keep the coarse land visible until the regional geometry is rendered.
      const replaceBrazil=()=>{
      map.setPaintProperty('land','fill-opacity',['interpolate',['linear'],['zoom'],4.4,1,4.7,['case',br,0,1]]);
      map.setPaintProperty('country-border','line-opacity',['interpolate',['linear'],['zoom'],4.4,.65,4.7,['case',br,0,.65]]);
      map.setPaintProperty('coast-highlight','line-opacity',['interpolate',['linear'],['zoom'],4.4,.35,4.7,['case',br,0,.35]]);
      };
      if(map.isSourceLoaded('br-states'))replaceBrazil();else{const onRegionalData=e=>{if(e.sourceId==='br-states'&&e.isSourceLoaded){map.off('sourcedata',onRegionalData);replaceBrazil();}};map.on('sourcedata',onRegionalData);}
      data.features.forEach(f=>{const el=document.createElement('span');el.className='state-label';el.textContent=f.properties.name.toLocaleUpperCase('pt-BR');el.style.display='none';const location=f.properties.label,marker=new maplibregl.Marker({element:el}).setLngLat(location).addTo(map);stateLabels.push({el,marker,location});});
      statesReady=true;document.documentElement.dataset.regionalReadyMs=Math.round(performance.now());labelVisibility();
    }catch{ /* The base map and participation remain usable; retry on the next move. */ }
    finally{statesLoading=false;}
  }
  function labelVisibility(){
    const z=map.getZoom(),bounds=map.getBounds(),taken=[],rect=$('map').getBoundingClientRect(),area=usableArea();
    const overlaps=box=>taken.some(b=>box.x<b.x+b.w+8&&box.x+box.w>b.x-8&&box.y<b.y+b.h+5&&box.y+box.h>b.y-5);
    function plain(c,visible){if(visible){const p=map.project(c.location),box={x:p.x-c.el.textContent.length*3.5,y:p.y-9,w:c.el.textContent.length*7,h:18};visible=!overlaps(box);if(visible)taken.push(box);}c.el.style.display=visible?'':'none';}
    labels.sort((a,b)=>(b.el.textContent==='Brasil')-(a.el.textContent==='Brasil')).forEach(c=>plain(c,z>=1.7&&z<5.2&&bounds.contains(c.location)));
    stateLabels.forEach(c=>plain(c,z>=4.5&&z<7.2&&bounds.contains(c.location)));
    // City names get their own space, away from club crests and labels.
    if(z>=4.7){document.querySelectorAll('#map .stad,#map .map-cluster').forEach(el=>{if(el.style.display==='none')return;const r=el.getBoundingClientRect();if(r.right<rect.left||r.left>rect.right||r.bottom<rect.top||r.top>rect.bottom)return;taken.push({x:r.left-rect.left-12,y:r.top-rect.top-24,w:r.width+24,h:r.height+(el.classList.contains('stad')?72:38)});});}
    const ordered=[...cityLabels,...nearbyCities.values()].sort((a,b)=>Number(b.teams.some(t=>t.id===current?.id))-Number(a.teams.some(t=>t.id===current?.id))||Number(b.teams.length>0)-Number(a.teams.length>0)||(b.pop||0)-(a.pop||0));
    ordered.forEach(c=>{
      c.el.style.display='none';if(z<4.7||!bounds.contains(c.location))return;
      const p=map.project(c.location),offsets=c.teams.map(t=>t.mapOffset[1]),w=c.el.textContent.length*6.6+12,h=18;
      // Keep geographic references close to their coordinates, even when this
      // means hiding a crowded label instead of moving it into another region.
      const candidates=!c.teams.length?[[0,0],[0,-16],[0,16]]:[[0,-68],[0,68],[72,0],[-72,0],[52,-48],[-52,48]];
      for(const [x,y] of candidates){const box={x:p.x+x-w/2,y:p.y+y-h/2,w,h};if(box.x<10||box.x+w>rect.width-10||box.y<area.top||box.y+h>area.bottom||overlaps(box))continue;c.marker.setOffset([x,y]);c.el.style.display='';taken.push(box);break;}
    });
  }
  map.on('moveend',()=>{loadReferenceCities();readFineCities();refreshReferenceCities();labelVisibility();});
  map.on('moveend',regionalReferences);map.on('load',regionalReferences);
  let personalRequested=false,introStarted=false,introTimer=null,introCancelled=false,introGeneration=0;
  const stopOpening=()=>{introCancelled=true;introGeneration++;clearTimeout(introTimer);$('camera-replay').textContent='Abertura';};
  for(const event of ['pointerdown','wheel','keydown'])document.addEventListener(event,stopOpening,{capture:true});
  $('q').addEventListener('input',stopOpening);
  async function scheduleCountry(team,personal){
    const generation=introGeneration;
    await Promise.race([detailRenderer?.ready||Promise.resolve(false),new Promise(resolve=>setTimeout(resolve,3500))]);
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    if(introCancelled||generation!==introGeneration)return;
    $('view-mapa').dataset.opening='stadium';
    $('camera-replay').textContent='Abertura · '+team.name;
    introTimer=setTimeout(()=>{
      if(introCancelled||generation!==introGeneration)return;
      const feature=map.querySourceFeatures('world').find(f=>f.properties.iso===team.country);
      const polys=feature?(feature.geometry.type==='Polygon'?[feature.geometry.coordinates]:feature.geometry.coordinates):[];
      const boxes=polys.map(p=>{const xs=p[0].map(v=>v[0]),ys=p[0].map(v=>v[1]);return [[Math.min(...xs),Math.min(...ys)],[Math.max(...xs),Math.max(...ys)]];});
      boxes.sort((a,b)=>(b[1][0]-b[0][0])*(b[1][1]-b[0][1])-(a[1][0]-a[0][0])*(a[1][1]-a[0][1]));
      if(!personal){closeSheet();closeGroup();}
      region=null;scope=team.country==='BR'?'br':'all';
      fitBounds(team.country==='BR'?VIEWS.br:boxes[0]||VIEWS.all,undefined,reduced()?0:1400,personal);
      $('view-mapa').dataset.opening='country';
      $('camera-replay').textContent='Abertura';
    },reduced()?1800:600);
  }
  function initialFocus(replay=false){
    if(introStarted)return;introStarted=true;
    if(!replay){$('view-mapa').dataset.opening='country';if(u){personalRequested=true;findFan(u);}else{const club=S.teams.find(t=>t.id===previewParams.get('clube'));if(club)openTeam(club);else fit('br');}return;}
    $('view-mapa').dataset.opening='loading-stadium';
    if(u){personalRequested=true;findFan(u).then(()=>{if(current&&!lightMode)scheduleCountry(current,true);});return;}
    if(lightMode||/^#(ranking|regras)$/.test(location.hash)){$('view-mapa').dataset.opening=lightMode?'light':'section';fit('br');return;}
    const leader=[...S.teams].sort((a,b)=>b.cadeiras-a.cadeiras||a.rankAll-b.rankAll)[0];
    sceneClub=leader;region=null;$('mobile-welcome').hidden=true;
    const r=$('map').getBoundingClientRect(),area=usableArea(false);
    map.jumpTo({center:leader.mapLocation,zoom:leader.level>=3?16.1:17.1,pitch:52,bearing:-30,padding:zeroPadding});
    map.easeTo({center:leader.mapLocation,offset:L.focusOffset(r.width,r.height,area),duration:0});
    declutter();refreshStadiumScene();
    scheduleCountry(leader,false);
  }
  $('camera-replay').onclick=()=>{stopOpening();introCancelled=false;introStarted=false;initialFocus(true);};
  if(map.getLayer('land'))initialFocus();else map.once('load',()=>initialFocus());
  regionalReferences();loadReferenceCities();
  const activity=window.ARENA_ACTIVITY;
  let transientEvents=[];
  function renderActivity(){
    const events=activity.events(S,LEVELS,transientEvents);
    $('total-chairs').textContent=fmt(S.teams.reduce((sum,t)=>sum+t.cadeiras,0));$('total-supporters').textContent=fmt(S.fans.length);$('total-playing').textContent=fmt(S.teams.filter(t=>t.n>0).length);$('total-clubs').textContent=fmt(S.teams.length);
    $('activity-count').textContent=events.length?events.length:'';
    $('activity-list').innerHTML=events.map(e=>'<button type="button" class="activity-item" data-event-team="'+esc(e.team)+'"><span class="event-icon" aria-hidden="true">'+e.icon+'</span><span><small>'+esc(e.label)+'</small><b>'+esc(e.title)+'</b><span>'+esc(e.detail)+'</span><em>Ver no mapa ↗</em></span></button>').join('')||'<p class="activity-empty">O próximo capítulo começa com sua torcida. Comente seu time no Instagram.</p>';
    $('activity-updated').textContent='Atualizado às '+new Intl.DateTimeFormat('pt-BR',{hour:'2-digit',minute:'2-digit',timeZone:'America/Sao_Paulo'}).format(new Date())+' · Brasília';
  }
  renderActivity();
  $('activity-list').onclick=e=>{const b=e.target.closest('[data-event-team]');if(b){showView('mapa');openTeam(S.teams.find(t=>t.id===b.dataset.eventTeam));}};
  $('activity-toggle').onclick=()=>{closeGroup();closeSheet();setIntro(false);const open=$('view-mapa').classList.toggle('activity-open');$('activity-toggle').setAttribute('aria-expanded',String(open));};
  $('activity-close').onclick=()=>{$('view-mapa').classList.remove('activity-open');$('activity-toggle').setAttribute('aria-expanded','false');};
  let refreshing=false;
  async function refreshGame(){
    if(G.DEMO||document.hidden||refreshing)return;refreshing=true;
    try{
      const nextRaw=await G.load(),next=G.compute(nextRaw,nextRaw.inactivity);
      if(S.season?.id!==next.season?.id||S.season?.status!==next.season?.status||S.season?.roles_released!==next.season?.roles_released){location.reload();return;}
      const old=S,newEvents=activity.changes(old,next,LEVELS),arrivals=window.ARENA_CROWD.newcomers(old,next);
      const latest=new Map();for(const e of newEvents.concat(transientEvents)){const key=e.kind+':'+e.team;if(!latest.has(key)&&(!e.observedAt||Date.now()-e.observedAt<15*60000)&&(e.kind!=='rank'||next.teams.find(t=>t.id===e.team)?.rankAll===e.position))latest.set(key,{...e,observedAt:e.observedAt||Date.now()});}transientEvents=[...latest.values()].slice(0,15);
      const active=current?.id,handle=meHandle;raw=nextRaw;S=next;
      placeMarkers();declutter();sceneSignature=null;refreshStadiumScene();renderRank();renderBoletim();renderActivity();renderSeasonBadge();
      $('fan-count').textContent=fmt(S.fans.length);
      if(active){const team=S.teams.find(t=>t.id===active),prior=old.teams.find(t=>t.id===active);current=team;team?.el?.classList.add('sel');const signature=t=>JSON.stringify([t.cadeiras,t.rankAll,t.rankUF,t.presidente?.h,t.lideres.map(f=>f.h),t.fans.map(f=>[f.h,f.cad,f.week,f.idle,f.streak])]);if(team&&prior&&!sheet.hidden&&signature(team)!==signature(prior))openTeam(team,handle,true);}
      for(const e of newEvents.filter(e=>e.kind==='level')){const marker=S.teams.find(t=>t.id===e.team)?.el;if(marker)marker.classList.add('level-up');}
      if(motionEnabled)for(const id of window.ARENA_MOTION.gains(old,next))detailRenderer?.celebrate(id);
      const arrival=arrivals.find(f=>f.team===(current||sceneClub)?.id);if(arrival)showArrival(arrival);
    }catch{$('activity-updated').textContent='Sem conexão para atualizar · mantendo a última leitura';}
    finally{refreshing=false;}
  }
  setInterval(refreshGame,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshGame();});
  if (/^#(ranking|regras)$/.test(location.hash)) showView(location.hash.slice(1));
})();

