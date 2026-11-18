/* Presentation only. Never writes or recomputes scores, positions or roles. */
(function(){
 const starts=[0,25,200,1000,5000],names=['Campinho','Arquibancada','Estádio','Arena','Mega Arena'];
 const groups={vertical:['gremio','fluminense','botafogo','atletico-mg','juventude','ceara','figueirense','criciuma','avai','santa-cruz','paysandu','porto','sporting-cristal','atletico-madrid','barcelona','real-sociedad','athletic-bilbao','juventus','inter-milao','milan','atalanta','newcastle','sunderland','real-betis','racing','estudiantes','san-lorenzo','penarol','guarani-paraguai','chivas','monterrey','fenerbahce'],horizontal:['flamengo','sport','fortaleza','sampaio-correa','sporting','celtic','fc-basel'],diagonal:['vasco','ponte-preta','river-plate','rayo-vallecano'],chest:['sao-paulo','bahia','boca-juniors']};
 const overrides={gremio:['#248dd2','#141b22','#ffffff'],flamengo:['#c92936','#15191d'],fluminense:['#801e3a','#16603c','#ffffff'],'sao-paulo':['#f1f1e8','#c92432','#171b20'],vasco:['#192222','#ffffff'],sporting:['#237343','#f4f3e9'],porto:['#1f61ac','#ffffff'],'boca-juniors':['#183f91','#edbf3a'],'river-plate':['#f1f1e9','#cd2533'],corinthians:['#f1f1e8','#1f292a'],santos:['#f2f2e9','#1d2928']};
 function shirt(t){const colors=overrides[t.id]||[t.color1||'#28794e',t.color2||'#f3f2e7'];let pattern='plain';for(const [key,ids]of Object.entries(groups))if(ids.includes(t.id))pattern=key;return {pattern:t.shirtPattern||pattern,colors:[...colors]};}
 function shirtColor(style,u,v){const [a,b,c]=style.colors;u=Math.max(0,Math.min(.999,u));v=Math.max(0,Math.min(.999,v));if(style.pattern==='vertical'){const stripe=Math.floor(u*(c?9:6));return (c?[a,b,c]:[a,b])[stripe%(c?3:2)];}if(style.pattern==='horizontal')return Math.floor(v*6)%2?b:a;if(style.pattern==='diagonal')return Math.abs(u+v-1)<.18?b:a;if(style.pattern==='chest'&&v>.35&&v<.65)return c?(v<.5?c:b):b;return a;}
 function plan(t){const level=Math.max(0,Math.min(4,Number(t.level)||0)),chairs=Math.max(0,Number(t.cadeiras)||0),phase=level===1?[25,50,100,150].filter(n=>chairs>=n).length-1:0;
  return {level,chairs,name:names[level],tiers:[0,1,1,2,3][level],standLength:level===1?64+Math.max(0,phase)*4:72,standDepth:level===1?10+Math.max(0,phase):12,
   width:[166,176,190,208,280][level],depth:[146,154,170,184,244][level],trees:[4,7,12,18,32][level],cars:[1,3,5,10,36][level],crowdLimit:[6,10,16,20,44][level],lamps:[2,3,4,6,12][level],parkingWidth:level===4?58:25,parkingDepth:level===4?44:24,
   capacity:level===0?25:level===1?200:level===2?1000:level===3?5000:Math.max(10000,Math.ceil(chairs/1000)*1000),
   dna:level>=3&&['internacional','gremio','palmeiras'].includes(t.id)?t.id:null,phase:Math.max(0,phase),gateZ:[21,30,30,47,61][level],plazaZ:[42,42,42,61,75][level]};
 }
 function people(t,lite=false){const p=plan(t),leaders=new Set((t.lideres||[]).map(f=>f.h)),seen=new Set();const list=(t.fans||[]).filter(f=>{if(seen.has(f.h))return false;seen.add(f.h);return true;}).map(f=>({...f,president:t.presidente?.h===f.h,leader:leaders.has(f.h),own:t.visitorHandle===f.h}));
  list.sort((a,b)=>Number(b.own)-Number(a.own)||Number(b.president)-Number(a.president)||Number(b.leader)-Number(a.leader)||(a.founderOrder||0)-(b.founderOrder||0));
  const highlighted=list.filter(f=>f.own||f.president||f.leader).length;return list.slice(0,lite?6:Math.max(p.crowdLimit,Math.min(24,highlighted+3))).map((f,i)=>({...f,x:i<3?-6+i*6:-18+((i-3)%7)*6,z:p.plazaZ+(i<3?4:-12+Math.floor((i-3)/7)*3),role:f.president?'Presidente':f.leader?'Líder':f.own?'Você':'Torcedor',label:!f.hide_handle&&!f.hideHandle&&(f.president||f.leader||f.own)}));
 }
 const equipment=['screen','banner','smoke','floodlights','president-box','leaders-banner'];
 window.ARENA_ART_STATE={starts,names,shirt,shirtColor,plan,people,equipment,scale:1.3};
})();

