// Local cartography: no remote tile, sprite, font or street requests.
(function(){
 const style={version:8,sources:{world:{type:'geojson',data:'assets/world-110m.json',tolerance:.35}},layers:[
  {id:'sea',type:'background',paint:{'background-color':'#78b6d8'}},
  {id:'land',type:'fill',source:'world',paint:{'fill-color':['case',['==',['get','iso'],'BR'],'#b3d69c','#d0e4b8'],'fill-opacity':1}},
  {id:'country-border',type:'line',source:'world',paint:{'line-color':'#779a74','line-width':['interpolate',['linear'],['zoom'],1,.55,7,1.2],'line-opacity':.65}},
  {id:'coast-highlight',type:'line',source:'world',paint:{'line-color':'#eaf5d8','line-width':1,'line-opacity':.35}}
 ]};
 const color=c=>/^#[a-f\d]{6}$/i.test(c)?c:'#28755d';
 // At marker size the roof/stands silhouette matters more than tiny seats.
 function stadium(level,c1,c2,group=false){
  level=Math.max(0,Math.min(4,Number(level)||0));c1=color(c1);c2=color(c2);
  const pitch='<path d="M34 43 68 32 94 45 60 58Z" fill="#73a94c" stroke="#eff3ce" stroke-width="1.2"/><path d="m51 38 26 13m-26-8 8-3 9 4-8 3Z" fill="none" stroke="#f4f5da" stroke-width=".8"/>';
  let structure='';
  if(level===0)structure='<path d="M16 48 67 30 111 49 60 69Z" fill="#c8b989"/><path d="M21 50v8m85-9v8" stroke="#9b8057" stroke-width="2"/>';
  if(level>=2)structure='<path d="M16 40Q19 17 65 15q47 2 49 27v17q-8 25-54 25Q19 79 16 59Z" fill="'+c1+'" stroke="#284f42" stroke-width="1.5"/><ellipse cx="65" cy="40" rx="47" ry="23" fill="'+c2+'"/><ellipse cx="65" cy="40" rx="38" ry="17" fill="'+c1+'"/><path d="M20 54q43 29 90-1" fill="none" stroke="'+c2+'" stroke-width="4"/>';
  const lamps=level>=2?'<path d="M20 35V12m89 23V12" stroke="#526660" stroke-width="2"/><path d="M14 12h12m77 0h12" stroke="#fff9cd" stroke-width="4"/>':'';
  const roof=level>=3?'<ellipse cx="65" cy="35" rx="50" ry="24" fill="none" stroke="'+(level===4?'#e8bd59':c2)+'" stroke-width="'+(level===4?9:5)+'"/><path d="M17 35q48-30 96 0" fill="none" stroke="#fff7d6" stroke-width="2"/>':'';
  const mega=level===4?'<path d="m23 18 7-12 8 12M88 18 96 6l8 12" fill="#f0ca67" stroke="#85692e" stroke-width="1"/><path d="M11 49q54 40 108 0" fill="none" stroke="#e8bd59" stroke-width="3"/>':'';
  if(level===1)return '<svg class="map-stadium level-1" viewBox="0 0 130 100" aria-hidden="true"><ellipse cx="65" cy="83" rx="57" ry="11" fill="#244b32" opacity=".16"/><path d="m5 53 57-24 60 24-59 27Z" fill="#bda97a" stroke="#8e9e66"/><g class="single-grandstand"><path d="m63 33 53 22 11-14-53-23Z" fill="'+c1+'" stroke="#365744" stroke-width="1.2"/><path d="m68 30 52 22m-49-27 52 22m-48-28 51 22" fill="none" stroke="'+c2+'" stroke-width="2.2"/><path d="M68 25v14m51 5v15" stroke="#536950" stroke-width="1.8"/><path class="stand-roof" d="m63 12 14-6 53 22-14 7Z" fill="'+c1+'" stroke="#365744" stroke-width="1.4"/><path d="m64 12 52 22 13-6" fill="none" stroke="'+c2+'" stroke-width="2.5"/></g><path d="m12 53 50-21 52 22-51 23Z" fill="#5d9d49" stroke="#eff4d3" stroke-width="1.4"/><path d="m37 43 52 22m-48-10 22-9 23 10-23 10Z" fill="none" stroke="#f3f6da" stroke-width="1"/><path d="m16 50 13-5v9l-13 5Zm84-4 11 5v9l-11-5Z" fill="#ffffff25" stroke="#fffbe6" stroke-width="1.7"/><path d="m19 75 21 8 7-4-22-9Z" fill="'+c1+'" stroke="#536950"/><path d="M8 48V27m117 3V9" stroke="#65785c" stroke-width="1.3"/><path d="m9 27 13 4-13 5Zm115-18-12 4 12 5Z" fill="'+c1+'" stroke="'+c2+'" stroke-width=".6"/></svg>';
  if(level===0)return '<svg class="map-stadium level-0" viewBox="0 0 130 100" aria-hidden="true"><ellipse cx="67" cy="81" rx="56" ry="11" fill="#244b32" opacity=".16"/><path d="m8 45 60-23 56 23-60 30Z" fill="#c1ae78" stroke="#8e9e66"/><path d="m20 45 48-18 45 18-49 19Z" fill="#5c9b48" stroke="#f4f6d6" stroke-width="1.4"/><path d="m44 36 44 18m-46-9 22-8 23 8-23 9Z" fill="none" stroke="#edf4d6" stroke-width="1"/><path d="m23 43 14-5v11l-14 5Zm76-5 14 5v11l-14-5Z" fill="#ffffff35" stroke="#fffef0" stroke-width="1.9"/><path d="m26 42 9 5m-6-6 1 10m73-11 8 9m-4-8v10" fill="none" stroke="#fffef0" stroke-width=".6"/><path d="M9 44V33l59-23 56 23v11M9 33l55 25 60-25M64 58v14M30 25v17m19-24v16m39-15v16m19-10v16" fill="none" stroke="#6e8168" stroke-width="1.1"/><path d="m13 28 54-20 53 20M13 36l54-20 53 20" fill="none" stroke="#7e9475" stroke-width=".6" opacity=".65"/><path d="m22 68 23 9 7-5-23-9Z" fill="'+c1+'" stroke="#435a42"/><path d="m24 64 22 9m-19-7v8m16-2v9" stroke="#f6f3dd" stroke-width="1.5"/><path d="M16 28V11m98 19V13" stroke="#617459" stroke-width="1.4"/><path d="m17 11 11 4-11 4Z" fill="'+c1+'"/><path d="m115 13 10 4-10 4Z" fill="'+c2+'"/></svg>';
  return '<svg class="map-stadium level-'+level+'" viewBox="0 0 130 100" aria-hidden="true"><ellipse cx="65" cy="80" rx="51" ry="12" fill="#233c3a" opacity=".14"/>'+lamps+structure+pitch+roof+mega+(group?'<path d="m12 74 7-3 7 3-7 3Zm91 4 8-3 7 3-7 3Z" fill="#8eac78"/>':'')+'</svg>';
 }
 const markerSize=level=>[78,98,146,164,184][Math.max(0,Math.min(4,Number(level)||0))];
 const groupSize=(base,level)=>Number(level)===1?Math.round(base*1.25):base+[0,0,38,54,72][Math.max(0,Math.min(4,Number(level)||0))];
 window.ARENA_MAP={style,stadium,markerSize,groupSize};
})();
