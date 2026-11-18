/* Small, immediate neighborhood illustration. Same daylight palette and level silhouettes as the CC0 district. */
(()=>{
 const safe=c=>/^#[a-f\d]{6}$/i.test(c)?c:'#28755d';
 const stages=[[0,0,'Campo de várzea'],[10,0,'Cerca e banco da torcida'],[25,1,'Primeira arquibancada coberta'],[50,1,'Novo módulo da arquibancada'],[100,1,'Arquibancada ampliada'],[150,1,'Arquibancada completa e acesso'],[200,2,'Estádio de quatro lados'],[400,2,'Setores ampliados'],[700,2,'Estrutura preparada para Arena'],[1000,3,'Arena de dois níveis'],[2000,3,'Fachada ampliada'],[3500,3,'Cobertura ampliada'],[5000,4,'Mega Arena de três níveis']].map(([min,level,name])=>({min,level,name,id:'obra-'+min}));
 function construction(t){if(window.ARENA_ART_STATE){const p=window.ARENA_ART_STATE.plan(t);return {id:'obra-'+p.level+'-'+p.phase,name:p.work,chairs:p.chairs,next:p.nextAt?{min:p.nextAt,name:p.nextWork}:null,remaining:p.nextAt?p.nextAt-p.chairs:0};}const level=Math.max(0,Math.min(4,Number(t.level)||0)),chairs=Number(t.cadeiras)||0,at=[...stages].reverse().find(s=>s.min<=chairs),next=stages.find(s=>s.min>chairs);return {...at,chairs,next:next||null,remaining:next?next.min-chairs:0};}
 function svg(t){const level=Math.max(0,Math.min(4,Number(t.level)||0)),club=safe(t.color1),secondary=safe(t.color2),out=[];
  const p=(x,z,h=0)=>[120+(x-z)*.78,85+(x+z)*.35-h*.9],points=coords=>coords.map(a=>p(...a).map(v=>v.toFixed(1)).join(',')).join(' '),poly=(a,c,stroke='')=>out.push('<polygon points="'+points(a)+'" fill="'+c+'"'+(stroke?' stroke="'+stroke+'" stroke-width=".8"':'')+'/>');
  function slab(x,z,w,d,h,c){const a=[x-w/2,z-d/2],b=[x+w/2,z-d/2],cc=[x+w/2,z+d/2],dd=[x-w/2,z+d/2];poly([[...b,0],[...cc,0],[...cc,h],[...b,h]],'#87968a');poly([[...cc,0],[...dd,0],[...dd,h],[...cc,h]],'#94a58e');poly([[...a,h],[...b,h],[...cc,h],[...dd,h]],c);}
  slab(0,0,158,138,3,'#a7ca7c');slab(0,56,156,12,3.3,'#778785');slab(-68,-2,12,128,3.3,'#778785');slab(0,36,54,20,3.4,'#e8dbbd');
  for(let i=0;i<9;i++)slab(-58+i*14,56,6,.8,3.5,'#eff0d9');
  if(level>=1)slab(0,-34,85,13,9,'#c8ccbe');
  if(level>=2){slab(0,26,85,12,10,'#c8ccbe');for(const x of [-48,48])slab(x,-4,12,50,10,'#c8ccbe');}
  slab(0,-4,78,48,3.6,'#46a75e');for(let i=0;i<6;i++)slab(-32+i*13,-4,6.5,47,3.7,'#58b46d');
  poly([[-37,-26,3.9],[37,-26,3.9],[37,18,3.9],[-37,18,3.9]],'none','#f0f7dc');poly([[0,-26,3.9],[0,18,3.9]],'none','#f0f7dc');
  const center=p(0,-4,4);out.push('<ellipse cx="'+center[0]+'" cy="'+center[1]+'" rx="9" ry="4" fill="none" stroke="#f0f7dc"/>');
  if(level>=1){for(let i=0;i<3;i++)slab(0,-31-i*3,80,1.6,6+i,club);slab(0,-34,89,16,13,club);}
  if(level>=2){for(let i=0;i<3;i++){slab(0,26+i*2,80,1.5,6+i,club);for(const x of [-48,48])slab(x+Math.sign(x)*i*2,-4,1.5,48,6+i,club);}}
  if(level>=3){const h=level===4?26:20;slab(0,-38,110,14,h,secondary);slab(0,32,110,14,h,secondary);slab(-54,-3,14,60,h,secondary);slab(54,-3,14,60,h,secondary);for(const z of [-44,38])slab(0,z,110,2,h+.6,club);if(level===4){for(const x of [-63,63])slab(x,-3,5,86,h+3,club);slab(0,40,126,5,h+3,club);}}
  for(const [x,z]of [[-51,35],[55,37],[-52,-50],[62,7]]){const a=p(x,z,4),b=p(x,z,16);out.push('<path d="M'+a+'L'+b+'" stroke="#8d633e" stroke-width="2"/><circle cx="'+b[0]+'" cy="'+b[1]+'" r="5" fill="#43844c"/>');}
  if(level>=2)slab(52,40,13,12,11,secondary);
  return '<svg class="map-stadium neighborhood-marker level-'+level+'" data-visual="neighborhood" viewBox="0 0 240 170" aria-hidden="true">'+out.join('')+'</svg>';
 }
 function marker(t){const plan=window.ARENA_ART_STATE?.plan(t),level=Math.max(0,Math.min(4,Number(t.level)||0)),c=safe(t.color1),s=safe(t.color2);let stands=level?'<path d="M-47-38H47V-26H-47Z" fill="'+c+'" stroke="#bfc5b6" stroke-width="4"/>':'';if(level===1&&plan){if(plan.sides.includes('left'))stands+='<path d="M-48-21V22" stroke="'+c+'" stroke-width="7"/>';if(plan.sides.includes('right'))stands+='<path d="M48-21V22" stroke="'+c+'" stroke-width="7"/>';if(plan.sides.includes('back'))stands+='<path d="M-46 26H46" stroke="'+c+'" stroke-width="7"/>';}if(level>=2)stands+='<path d="M-46 26H46M-48-21V22M48-21V22" stroke="'+c+'" stroke-width="7"/>';if(level>=3)stands='<path d="M-60-46H60V39H-60ZM-38-25V18H38V-25Z" fill="'+s+'" fill-rule="evenodd" stroke="'+c+'" stroke-width="'+(level===4?5:2)+'"/>';
 return '<svg class="map-stadium neighborhood-marker level-'+level+'" data-visual="neighborhood" viewBox="0 0 240 170" aria-hidden="true"><g transform="matrix(.85 .35 -.85 .35 120 80)"><rect x="-85" y="-65" width="170" height="140" rx="8" fill="#a7ca7c" stroke="#7eae6c" stroke-width="3"/><path d="M-72-60V62H80" fill="none" stroke="#758784" stroke-width="12"/><path d="M-72-50V60H72" fill="none" stroke="#f3efd8" stroke-width="1" stroke-dasharray="6 6"/><rect x="-38" y="-25" width="76" height="43" fill="#48a75d" stroke="#f4f8df" stroke-width="1.5"/><path d="M0-25V18M-38-15H-25V8H-38M38-15H25V8H38" fill="none" stroke="#f3f7df"/><circle cy="-4" r="8" fill="none" stroke="#f4f8df"/>'+stands+'<rect x="-20" y="41" width="40" height="13" fill="#e8dbbd"/></g><path d="M40 96v-12m147-14V59" stroke="#8d633e" stroke-width="2"/><path d="M32 82a8 7 0 1 0 16 0a8 7 0 1 0-16 0M179 57a8 7 0 1 0 16 0a8 7 0 1 0-16 0" fill="#43844c"/></svg>';
 }
 window.ARENA_NEIGHBORHOOD={svg,marker,construction};
})();
