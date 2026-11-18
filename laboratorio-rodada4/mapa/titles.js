(function(root){'use strict';
 const tiers=[{id:'amador',min:1,name:'Amador',icon:''},{id:'profissional',min:5,name:'Profissional',icon:''},{id:'craque',min:10,name:'Craque',icon:'⭐'},{id:'estrela',min:15,name:'Estrela',icon:'🌟'},{id:'idolo',min:20,name:'Ídolo',icon:'🏆'},{id:'fenomeno',min:25,name:'Fenômeno',icon:'🔥'},{id:'lenda',min:30,name:'Lenda',icon:'👑'}];
 const forLevel=level=>{const n=Math.min(30,Math.max(1,Number(level)||1));const t=tiers.filter(t=>n>=t.min).at(-1);return {...t,label:t.name+(t.icon?' '+t.icon:''),level:n};};
 const MAX_LEVEL=30;
const threshold=n=>{const k=Math.max(0,Math.min(30,Math.floor(n))-1);return 40*k+70*k*k;};
const level=xp=>Math.min(MAX_LEVEL,Math.max(1,1+Math.floor((-40+Math.sqrt(1600+280*Math.max(0,Number(xp)||0)))/140)));
 root.PLAY_TITLES={tiers,forLevel,level,threshold,MAX_LEVEL};
})(typeof window==='undefined'?globalThis:window);
