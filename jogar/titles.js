(function(root){'use strict';
 const tiers=[{id:'amador',min:1,name:'Amador',icon:''},{id:'profissional',min:5,name:'Profissional',icon:''},{id:'craque',min:10,name:'Craque',icon:'⭐'},{id:'estrela',min:15,name:'Estrela',icon:'🌟'},{id:'idolo',min:20,name:'Ídolo',icon:'🏆'},{id:'fenomeno',min:25,name:'Fenômeno',icon:'🔥'},{id:'lenda',min:30,name:'Lenda',icon:'👑'}];
 const forLevel=level=>{const n=Math.min(30,Math.max(1,Number(level)||1));const t=tiers.filter(t=>n>=t.min).at(-1);return {...t,label:t.name+(t.icon?' '+t.icon:''),level:n};};
 const MAX_LEVEL=30;
const XP_TOTAL=Object.freeze([0, 50, 110, 190, 290, 400, 520, 650, 800, 980, 1280, 1640, 2060, 2540, 3080, 3680, 4340, 5060, 5840, 6680, 7380, 8110, 8870, 9660, 10480, 11330, 12210, 13120, 14060, 15030]);
const threshold=n=>XP_TOTAL[Math.max(0,Math.min(29,Math.floor(Number(n)||1)-1))];
const level=xp=>{const v=Math.max(0,Number(xp)||0);let n=1;while(n<30&&v>=XP_TOTAL[n])n++;return n;};
 root.PLAY_TITLES={tiers,forLevel,level,threshold,MAX_LEVEL};
})(typeof window==='undefined'?globalThis:window);
