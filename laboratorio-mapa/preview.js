/* Isolated Phase 1 prototype. No database, Instagram, scoring or game writes. */
(()=>{'use strict';
const $=id=>document.getElementById(id),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const palettes={
 vivo:{title:'Gramado Vivo',copy:'Um mundo claro e acolhedor. A torcida dá cor ao estádio.',sea:'#78bfdc',land:'#a7cf84',edge:'#538653',side:'#719a52',park:'#85b661',walk:'#e4d7ad',tree:'#426e40',leaves:'#65964d',road:'#ced0b4',rim:'#edf1cc',ground:'#afcc91'},
 maquete:{title:'Maquete de Arena',copy:'Uma pequena maquete de futebol. Terreno elevado e construções em destaque.',sea:'#a2d1d7',land:'#c5ca91',edge:'#8d9b66',side:'#b49361',park:'#9ab26a',walk:'#e6d6b1',tree:'#626e3e',leaves:'#a0b56a',road:'#ccbda0',rim:'#f7e8bf',ground:'#d6ce9d'},
 noite:{title:'Noite de Clássico',copy:'O mapa escurece. A luz e as cores das torcidas viram protagonistas.',sea:'#132f4a',land:'#29484b',edge:'#728a80',side:'#1c343e',park:'#254f43',walk:'#7c806e',tree:'#173936',leaves:'#365e4b',road:'#405b5a',rim:'#c7b66b',ground:'#2c4f49'}
};
const teams=[
 {id:'gremio',name:'Grêmio',place:'Porto Alegre',center:[-51.194,-29.973],color:'#56b4e5',second:'#142c43',level:1},
 {id:'internacional',name:'Internacional',place:'Porto Alegre',center:[-51.236,-30.066],color:'#cb3d40',second:'#f9e9d5',level:0},
 {id:'palmeiras',name:'Palmeiras',place:'São Paulo',center:[-46.678,-23.527],color:'#287b51',second:'#f4eed6',level:1},
 {id:'flamengo',name:'Flamengo',place:'Rio de Janeiro',center:[-43.23,-22.91],color:'#b93b39',second:'#302e32',level:0},
 {id:'sporting',name:'Sporting',place:'Lisboa',center:[-9.16,38.76],color:'#368055',second:'#ececd9',level:0},
 {id:'vitoria-guimaraes',name:'Vitória de Guimarães',place:'Guimarães',center:[-8.293,41.443],color:'#3a3c3a',second:'#f2eddc',level:0}
];
let theme='vivo',team=teams[0],light=false,lastPitch=48,view='focus',ready=false,map,markers=[],labels=[],started=performance.now(),loadMs=0,worldCount=0,frameTimes=[],lastFrame=0;
const feature=(coords,props)=>({type:'Feature',properties:props,geometry:{type:'Polygon',coordinates:[coords]}});
function createScene(t){
 const features=[],[lon,lat]=t.center,sx=1/(111320*Math.cos(lat*Math.PI/180)),sy=1/111320;
 const point=(x,y)=>[lon+x*sx,lat+y*sy];
 function rect(x,y,w,h,tone,height=0,base=0,extra={}){features.push(feature([[x-w/2,y-h/2],[x+w/2,y-h/2],[x+w/2,y+h/2],[x-w/2,y+h/2],[x-w/2,y-h/2]].map(([a,b])=>point(a,b)),{tone,height,base,...extra}));}
 function circle(x,y,r,tone,height=0,base=0,n=10){const pts=Array.from({length:n+1},(_,i)=>point(x+Math.cos(i/n*2*Math.PI)*r,y+Math.sin(i/n*2*Math.PI)*r));features.push(feature(pts,{tone,height,base}));}
 // Park and neighboring streets establish scale; relief is illustrative, not elevation data.
 rect(0,0,650,490,'ground');rect(0,0,555,400,'park');rect(0,-195,630,22,'road');rect(-310,0,20,490,'road');rect(310,0,20,490,'road');
 rect(0,0,290,220,'walk');rect(0,0,208,132,'pitch');
 for(let i=0;i<10;i++)rect(-93.6+i*20.8,0,20.8,132,i%2?'pitch':'stripe');
 const stroke=(coords,tone='line',width=1)=>({type:'Feature',properties:{tone,width},geometry:{type:'LineString',coordinates:coords.map(([x,y])=>point(x,y))}});
 features.push(stroke([[-101,-63],[101,-63],[101,63],[-101,63],[-101,-63]],'line',1.5));features.push(stroke([[0,-63],[0,63]],'line',1.2));
 features.push(stroke(Array.from({length:49},(_,i)=>[Math.cos(i/48*2*Math.PI)*18,Math.sin(i/48*2*Math.PI)*18]),'line',1));
 for(const sign of [-1,1]){features.push(stroke([[sign*101,-29],[sign*69,-29],[sign*69,29],[sign*101,29]],'line',1.2));features.push(stroke([[sign*101,-13],[sign*91,-13],[sign*91,13],[sign*101,13]],'line',1));
  rect(sign*105,-10,1.1,1.1,'white',9);rect(sign*105,10,1.1,1.1,'white',9);rect(sign*105,0,1,21,'white',9,8);rect(sign*109,0,8,20,'net',5);
 }
 // Existing level 2 stays ONE covered grandstand. No future item is equipped here.
 if(t.level===1){
  for(let i=0;i<6;i++){rect(0,80+i*6,220,6,i%2?'secondary':'team',5+i*3);}
  rect(0,116,225,5,'team',24);for(const x of [-110,110])rect(x,91,2.3,46,'metal',34);
  rect(0,94,241,60,'team',36,33);rect(0,63,241,2,'secondary',34,32);
  for(let i=0;i<24;i++)for(let row=0;row<5;row++)rect(-104+i*9,81+row*6,4.8,3.2,row%2?'team':'secondary',8+row*3,5+row*3);
 }else{
  for(let i=0;i<8;i++){rect(-125+i*36,87,1.8,1.8,'metal',12);rect(-125+i*36,-87,1.8,1.8,'metal',12);}
  for(const side of [-1,1]){rect(side*125,0,1.4,176,'metal',12,11);rect(side*125,0,1.4,176,'net',9);}
  rect(0,87,255,1.4,'metal',12,11);rect(0,-87,255,1.4,'metal',12,11);
  rect(-50,-95,45,10,'team',7);rect(-50,-99,45,2,'secondary',14,7);
 }
 // Decorative trees and small houses are map scenery, not playable constructions.
 for(let i=0;i<24;i++){const a=i/24*Math.PI*2,x=Math.cos(a)*235,y=Math.sin(a)*166;if(y< -120&&Math.abs(x)<100)continue;rect(x,y,3,3,'trunk',12);circle(x,y,11+(i%3)*2,'leaves',30+(i%3)*4,10,6);}
 for(const side of [-1,1])for(let j=0;j<3;j++){rect(side*(358+j%2*25),-110+j*105,44,40,'house',16);rect(side*(358+j%2*25),-110+j*105,48,44,'roof',22,16);}
 for(const x of [-122,122]){rect(x,114,1.8,1.8,'metal',51);rect(x+9,114,18,1,'team',49,39);}
 // Lighting is atmosphere only in this camera study, not an unlocked item.
 for(const x of [-160,160])for(const y of [-112,112]){rect(x,y,2,2,'metal',46);rect(x,y,17,4,'lamp',48,44);for(let i=6;i>0;i--){circle(x,y,i*5,'glow');features[features.length-1].properties.alpha=.03;}}
 // A few lamps on the entrance path; no avatars, item catalogue or mini-games.
 for(const x of [-75,75]){rect(x,-151,1.5,1.5,'metal',14);circle(x,-151,3,'lamp',16,14,6);}
 return {type:'FeatureCollection',features};
}
function toneExpression(){const p=palettes[theme];return ['match',['get','tone'],'ground',p.ground,'park',p.park,'walk',p.walk,'road',p.road,'team',team.color,'secondary',team.second,'pitch',theme==='noite'?'#328459':'#4f974d','stripe',theme==='noite'?'#398c60':'#5ca555','line','#e9efd7','white','#f7f3dd','net',theme==='noite'?'#78978b':'#c5d6b2','metal',theme==='noite'?'#597777':'#87968a','trunk','#856345','leaves',p.leaves,'house',theme==='noite'?'#69847c':'#e5dbbe','roof',theme==='noite'?'#355563':'#8da787','lamp',theme==='noite'?'#ffe9a5':'#ecedda','#71955e'];}
function drawTheme(){
 const p=palettes[theme];document.body.dataset.theme=theme;$('scene-name').textContent=p.title;$('scene-copy').textContent=p.copy;
 document.querySelectorAll('.themes button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.theme===theme));
 if(!ready)return;
 map.setPaintProperty('sea','background-color',p.sea);map.setPaintProperty('land','fill-color',p.land);map.setPaintProperty('borders','line-color',p.edge);map.setPaintProperty('coast','line-color',p.rim);
 map.setPaintProperty('country-sides','fill-extrusion-color',p.side);
 map.setPaintProperty('floor','fill-color',toneExpression());map.setPaintProperty('buildings','fill-extrusion-color',toneExpression());map.setPaintProperty('glow','fill-opacity',theme==='noite'?['get','alpha']:0);
 map.setLight({anchor:'viewport',color:theme==='noite'?'#c1e4ec':'#ffffff',intensity:theme==='noite'?.65:.42,position:[1.5,theme==='maquete'?170:210,theme==='noite'?35:45]});
 map.setPaintProperty('buildings','fill-extrusion-vertical-gradient',true);
 map.setPaintProperty('country-sides','fill-extrusion-height',['interpolate',['linear'],['zoom'],2,theme==='maquete'?65000:theme==='noite'?22000:35000,7,0]);
 $('status').textContent=light?'Modo leve · de cima':'3D simples · arraste para explorar';
}
function duration(){return reduced?0:800;}
function selectView(v){view=v;['brasil','mundo','focus'].forEach(id=>$(id).classList.toggle('active',id===v));}
function overview(kind){if(!ready)return;selectView(kind);map.stop();map.jumpTo({pitch:0,bearing:0,padding:{top:0,bottom:0,left:0,right:0}});const pad=innerWidth<761?{top:115,bottom:160,left:25,right:25}:{top:85,bottom:155,left:270,right:65};
 if(kind==='brasil')map.fitBounds([[-74,-34],[ -34,5]],{padding:pad,duration:duration(),pitch:light?0:lastPitch,bearing:0});
 else map.easeTo({center:[-22,13],zoom:innerWidth<761?1:1.55,padding:pad,pitch:light?0:lastPitch,bearing:0,duration:duration()});
}
function focus(){if(!ready)return;selectView('focus');map.stop();map.easeTo({center:team.center,zoom:innerWidth<761?15.85:16,padding:innerWidth<761?{top:125,bottom:150,left:10,right:10}:{top:85,bottom:170,left:260,right:70},pitch:light?0:lastPitch,bearing:theme==='maquete'?-25:-18,duration:duration()});}
function chooseTeam(id){team=teams.find(t=>t.id===id)||teams[0];$('team').value=team.id;$('team-crest').src='assets/escudos/'+team.id+'.png';$('team-crest').alt='Escudo do '+team.name;$('stadium-label').textContent=(team.level?'Arquibancada':'Campinho de várzea')+' · visual de demonstração';if(!$('fallback').hidden)$('fallback-stadium').innerHTML=window.ARENA_MAP.stadium(team.level,team.color,team.second);
 if(ready){map.getSource('scene').setData(createScene(team));drawTheme();labels.forEach(x=>x.remove());labels=[];const label=document.createElement('div');label.className='ground-label';label.append(document.createTextNode(team.name));const small=document.createElement('small');small.textContent=team.level?'Uma arquibancada coberta':'O primeiro campo da torcida';label.append(small);labels.push(new maplibregl.Marker({element:label,anchor:'top'}).setLngLat([team.center[0],team.center[1]-.00135]).addTo(map));focus();}}
function updateVisibility(){if(!ready)return;const z=map.getZoom(),regional=z>5.5,detail=z>11;markers.forEach(m=>m.el.classList.toggle('hidden',detail||(m.group?regional:!regional)));labels.forEach(m=>m.getElement().classList.toggle('hidden',!detail));}
function addClubMarker(t,position=t.center,group=false,count=1){const el=document.createElement('button');el.className='map-club'+(group?' group':'');el.setAttribute('aria-label',group?'Explorar '+count+' clubes em '+t.place:'Ver estádio do '+t.name);el.innerHTML=window.ARENA_MAP.stadium(t.level,t.color,t.second)+`<img src="assets/escudos/${t.id}.png" alt=""><span class="club-label">${group?count+' clubes · ':''}${group?t.place:t.name}</span>`;el.onclick=()=>{if(group){map.easeTo({center:position,zoom:8,pitch:light?0:lastPitch,padding:innerWidth<761?{top:110,bottom:130,left:20,right:20}:{top:100,bottom:160,left:260,right:50},duration:duration()});selectView('focus');}else chooseTeam(t.id);};const m=new maplibregl.Marker({element:el,anchor:'bottom'}).setLngLat(position).addTo(map);markers.push({marker:m,el,group});}
function showFallback(){ready=false;document.body.classList.add('compat');$('fallback').hidden=false;$('fallback-stadium').innerHTML=window.ARENA_MAP.stadium(team.level,team.color,team.second);$('status').textContent='Prévia estática · WebGL indisponível';$('technical').textContent='Fallback sem WebGL · nenhuma conexão com o jogo';$('light').checked=true;$('light').disabled=true;$('flat').setAttribute('aria-pressed','true');$('tilt').setAttribute('aria-pressed','false');['brasil','mundo','focus','flat','tilt','rotate','plus','minus'].forEach(id=>$(id).disabled=true);}
function init(){
 ['brasil','mundo','focus','flat','tilt','rotate','plus','minus'].forEach(id=>$(id).disabled=true);
 if(new URLSearchParams(location.search).get('compat')==='1'||!window.maplibregl){showFallback();return;}
 try{map=new maplibregl.Map({container:'map',attributionControl:false,style:{version:8,sources:{world:{type:'geojson',data:'assets/world-110m.json',tolerance:.35},scene:{type:'geojson',data:createScene(team)}},layers:[
 {id:'sea',type:'background',paint:{'background-color':palettes.vivo.sea}},
 {id:'land',type:'fill',source:'world',paint:{'fill-color':palettes.vivo.land}},
 {id:'country-sides',type:'fill-extrusion',source:'world',maxzoom:7,paint:{'fill-extrusion-color':palettes.vivo.side,'fill-extrusion-height':['interpolate',['linear'],['zoom'],2,35000,7,0],'fill-extrusion-opacity':1}},
 {id:'borders',type:'line',source:'world',paint:{'line-color':palettes.vivo.edge,'line-width':.8,'line-opacity':.5}},
 {id:'coast',type:'line',source:'world',paint:{'line-color':palettes.vivo.rim,'line-width':1.4,'line-opacity':.5}},
 {id:'floor',type:'fill',source:'scene',minzoom:11,filter:['all',['==',['geometry-type'],'Polygon'],['!=',['get','tone'],'glow']],paint:{'fill-color':toneExpression()}},
 {id:'glow',type:'fill',source:'scene',minzoom:11,filter:['==',['get','tone'],'glow'],paint:{'fill-color':'#ffefaf','fill-opacity':0}},
 {id:'pitch-lines',type:'line',source:'scene',minzoom:12,filter:['==',['geometry-type'],'LineString'],paint:{'line-color':'#f0f3da','line-width':['get','width']}},
 {id:'buildings',type:'fill-extrusion',source:'scene',minzoom:11,filter:['all',['==',['geometry-type'],'Polygon'],['>', ['get','height'],0]],paint:{'fill-extrusion-color':toneExpression(),'fill-extrusion-height':['get','height'],'fill-extrusion-base':['get','base'],'fill-extrusion-opacity':1}}
 ]},center:team.center,zoom:innerWidth<761?15.85:16,pitch:48,bearing:-18,padding:innerWidth<761?{top:125,bottom:150,left:10,right:10}:{top:85,bottom:170,left:260,right:70},maxZoom:18,minZoom:.5,maxPitch:60,renderWorldCopies:false,antialias:false,fadeDuration:reduced?0:200});
 map.addControl(new maplibregl.AttributionControl({compact:true,customAttribution:'Natural Earth · prévia Arena'}),'bottom-right');
 map.on('load',()=>{ready=true;['brasil','mundo','focus','flat','tilt','rotate','plus','minus'].forEach(id=>$(id).disabled=false);loadMs=Math.round(performance.now()-started);worldCount=map.querySourceFeatures('world').length;
  teams.forEach(t=>addClubMarker(t));addClubMarker(teams[0],[-51.2,-30],true,2);addClubMarker(teams[2],[-45.9,-23],true,2);addClubMarker(teams[4],[-8.9,40.2],true,2);
  drawTheme();chooseTeam(team.id);updateVisibility();$('technical').textContent=`Base pronta em ${(loadMs/1000).toFixed(2)} s · assets locais · dados ilustrativos`;
 });
 map.on('move',updateVisibility);map.on('render',()=>{if(!map.isMoving())return;const now=performance.now();if(lastFrame&&now-lastFrame<300){frameTimes.push(now-lastFrame);if(frameTimes.length>90)frameTimes.shift();}lastFrame=now;});map.on('moveend',()=>{lastFrame=0;if(frameTimes.length>5){const sorted=[...frameTimes].sort((a,b)=>a-b);$('technical').textContent=`Base ${(loadMs/1000).toFixed(2)} s · câmera ~${Math.round(1000/sorted[Math.floor(sorted.length/2)])} fps neste teste`;}updateVisibility();});
 map.on('error',e=>{const status=$('status');if(!ready)status.textContent='Carregando recursos locais…';});
 map.getCanvas().addEventListener('webglcontextlost',e=>{e.preventDefault();showFallback();});
 }catch{showFallback();}
}
document.querySelectorAll('.themes button').forEach(b=>b.addEventListener('click',()=>{theme=b.dataset.theme;drawTheme();if(view==='focus')focus();}));
$('team').onchange=e=>chooseTeam(e.target.value);$('brasil').onclick=()=>overview('brasil');$('mundo').onclick=()=>overview('mundo');$('focus').onclick=focus;
$('flat').onclick=()=>{lastPitch=0;if(ready)map.easeTo({pitch:0,duration:duration()});$('flat').setAttribute('aria-pressed','true');$('tilt').setAttribute('aria-pressed','false');};
$('tilt').onclick=()=>{if(light){$('light').checked=false;$('light').dispatchEvent(new Event('change'));}lastPitch=48;if(ready)map.easeTo({pitch:48,duration:duration()});$('flat').setAttribute('aria-pressed','false');$('tilt').setAttribute('aria-pressed','true');};
$('rotate').onclick=()=>{if(ready)map.easeTo({bearing:map.getBearing()+45,duration:duration()});};$('plus').onclick=()=>{if(ready)map.zoomIn({duration:duration()});};$('minus').onclick=()=>{if(ready)map.zoomOut({duration:duration()});};
$('light').onchange=e=>{light=e.target.checked;if(!ready)return;['buildings','country-sides'].forEach(id=>map.setLayoutProperty(id,'visibility',light?'none':'visible'));map.setMaxPitch(light?0:60);map.easeTo({pitch:light?0:lastPitch,duration:duration()});$('flat').setAttribute('aria-pressed',light||!lastPitch?'true':'false');$('tilt').setAttribute('aria-pressed',!light&&lastPitch?'true':'false');drawTheme();};
init();
})();

