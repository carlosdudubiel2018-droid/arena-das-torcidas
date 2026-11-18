/* Fixed opt-in layers. No item is awarded by level or by this renderer. */
(function(){
 const catalog=[
  ['screen','Telão',[-92,79,35]],['banner','Bandeirão',[-30,82,44]],
  ['smoke','Show da torcida',[88,-65,36]],['floodlights','Refletores',[-105,-75,42]],
  ['president-box','Camarote do presidente',[65,51,30]],['leaders-banner','Faixa dos líderes',[0,-64,17]],
  ['mosaic','Mosaico da torcida',[-55,-48,18]],['training-ground','CT / campo de treino',[-245,-60,3]],
  ['trophy-room','Sala de troféus',[225,90,23]],['statue','Estátua / mascote',[-220,165,40]],
  ['tunnel','Túnel / entrada',[0,-102,15]],['club-shop','Loja do clube',[220,-87,22]],
  ['plaza','Praça',[25,-205,8]]
 ].map(([id,name,position],i)=>({id,name,position,number:i+1,choice:'president',effect:'visual'}));
 function compose(t,enabled=[]){
  if(!Number.isInteger(t.level)||t.level<0||t.level>4)throw new Error('Nível inválido.');
  const base=window.ARENA_RENDER.colorize(window.ARENA_SCENE.create(t),t);
  const features=base.features.filter(f=>!['house','roof'].includes(f.properties.tone)).map(f=>({...f,properties:{...f.properties,layerId:'stadium'}}));
  const [lon,lat]=t.center,sx=1/(111320*Math.cos(lat*Math.PI/180)),sy=1/111320;
  const point=(x,y)=>[lon+x*sx,lat+y*sy];let id='';
  const outerX=[72,84,94,112,136][t.level],outerY=[52,62,72,91,114][t.level],heightScale=[.4,.65,.8,1.2,1.7][t.level];
  const internal=new Set(['screen','banner','smoke','floodlights','president-box','leaders-banner','mosaic','tunnel']);
  const poly=(coords,color,height=0,base=0)=>{const inside=internal.has(id);features.push({type:'Feature',properties:{layerId:id,tone:'item',ink:color,height:height*(inside?heightScale:1),base:base*(inside?heightScale:1),opacity:id==='smoke'?.45:1,renderPriority:['banner','mosaic','leaders-banner'].includes(id)?3:2},geometry:{type:'Polygon',coordinates:[coords.map(([x,y])=>point(x*(inside?outerX/105:1),y*(inside?outerY/77:1)))]}});};
  const rect=(x,y,w,h,color,z=0,b=0)=>poly([[x-w/2,y-h/2],[x+w/2,y-h/2],[x+w/2,y+h/2],[x-w/2,y+h/2],[x-w/2,y-h/2]],color,z,b);
  const disc=(x,y,r,color,z=0,b=0)=>poly(Array.from({length:13},(_,i)=>[x+Math.cos(i/12*2*Math.PI)*r,y+Math.sin(i/12*2*Math.PI)*r]),color,z,b);
  const team=t.color1,cream=t.color2,green='#4e954d',gold='#e4b956',metal='#6c8276',white='#fff5da';
  for(const item of catalog){if(!enabled.includes(item.id))continue;id=item.id;
   if(id==='screen'){
    rect(-92,79,2,3,metal,32);rect(-66,79,2,3,metal,32);
    rect(-79,79,40,5,team,41,22);rect(-79,76,33,1,'#132f2b',38,25);
    rect(-79,75,10,1,gold,35,28);rect(-79,75,2,1,cream,37,26);
   }
   if(id==='banner'){rect(-30,50,48,17,cream,23,22);for(let i=0;i<6;i++)rect(-50+i*8,50,4,17,team,23.5,23);disc(-30,50,7,gold,24,23.5);}
   if(id==='smoke'){for(const side of [-1,1])for(let i=0;i<6;i++)disc(side*(80+i*1.2),-57+i*2,4+i*.9,i%2?cream:team,14+i*5,8+i*5);}
   if(id==='floodlights'){for(const x of [-103,103])for(const y of [-77,77]){rect(x,y,2,2,metal,47);rect(x,y,19,5,metal,49,46);for(let i=0;i<5;i++)rect(x-7+i*3.5,y,2.5,5,white,50,49);}}
   if(id==='president-box'){rect(65,51,40,18,cream,29,15);rect(65,41.5,36,1,'#80bdc0',27,19);for(const x of [53,65,77])rect(x,41,1,1,team,28,18);rect(65,51,44,21,team,31,29);}
   if(id==='leaders-banner'){rect(0,-64,86,2,team,16,9);for(let i=0;i<10;i++)rect(-36+i*8,-65,4,1,cream,14,11);}
   if(id==='mosaic'){for(let row=0;row<6;row++)for(let col=0;col<12;col++)rect(-58+col*5,-44-row*3,4.8,2.8,(row+col)%3?team:cream,6+row*1.6,5+row*1.6);}
   if(id==='training-ground'){
    rect(-245,-60,155,110,'#c9d6a1');rect(-245,-60,132,83,green);for(let i=0;i<8;i++)rect(-303+i*16.5,-60,8,83,'#61a058');
    for(const y of [-100,-20])rect(-245,y,130,1,white);for(const x of [-309,-181,-245])rect(x,-60,1,80,white);disc(-245,-60,10,white);disc(-245,-60,9,green);
    rect(-245,10,100,25,cream,13);rect(-245,10,104,28,team,16,13);
   }
   if(id==='trophy-room'){rect(225,90,78,54,cream,20);rect(225,90,82,58,team,24,20);rect(225,62,66,1,'#86bcb4',17,5);rect(225,85,10,8,gold,39,28);rect(225,85,4,4,gold,29,24);disc(225,85,9,gold,40,35);}
   if(id==='statue'){disc(-190,145,22,'#d6d6b9',4);rect(-190,145,16,16,cream,10);disc(-190,145,6,gold,25,10);disc(-190,145,7,gold,34,25);for(const x of [-203,-177])rect(x,145,4,4,gold,25,22);rect(-190,145,26,4,gold,23,21);}
   if(id==='tunnel'){rect(0,-100,38,47,team,15);rect(0,-125,23,1,'#183c32',12,0);rect(0,-100,42,49,cream,17,15);for(const x of [-18,18])rect(x,-126,3,3,gold,19);}
   if(id==='club-shop'){rect(220,-87,79,45,cream,18);rect(220,-87,84,49,team,22,18);rect(220,-111,65,1,'#84bab3',15,4);for(let i=0;i<7;i++)rect(190+i*9,-116,6,12,i%2?team:cream,16,14);rect(220,-112,12,1,'#173e31',15);}
   if(id==='plaza'){
    rect(25,-205,187,80,'#dacdaa');rect(25,-205,10,80,'#f2e4c2');disc(25,-205,21,'#c0d9cf',3);disc(25,-205,15,'#71b6c4',3.5,3);disc(25,-205,5,cream,9,3.5);
    for(const x of [-50,100])for(const y of [-225,-185]){disc(x,y,12,'#6f9c57',16,5);rect(x,y,3,3,'#8c714e',5);}
    for(const x of [-20,70])rect(x,-237,22,6,team,5);
   }
  }
  const src=t.crest_url||(window.CRESTS||{})[t.id],screens=enabled.includes('screen')&&src?[{position:point(-79*outerX/105,74.3*outerY/77),z:31.5*heightScale,w:9*outerX/105,h:11*heightScale,src:src.startsWith('assets/')?'/'+src:src}]:[];
  return {...base,features,screens};
 }
 window.ARENA_ITEMS={catalog,compose};
})();
