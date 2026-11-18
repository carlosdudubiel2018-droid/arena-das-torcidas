// Local cartography: no remote tile, sprite, font or street requests.
(function(){
 const style={version:8,sources:{world:{type:'geojson',data:'assets/world-110m.json',tolerance:.35}},layers:[
  {id:'sea',type:'background',paint:{'background-color':'#78bfdc'}},
  {id:'land',type:'fill',source:'world',paint:{'fill-color':['case',['==',['get','iso'],'BR'],'#a7cf84','#c0dca3'],'fill-opacity':1}},
  {id:'country-sides',type:'fill-extrusion',source:'world',maxzoom:7,paint:{'fill-extrusion-color':'#719a52','fill-extrusion-height':0,'fill-extrusion-opacity':.9}},
  {id:'country-border',type:'line',source:'world',paint:{'line-color':'#538653','line-width':['interpolate',['linear'],['zoom'],1,.55,7,1.2],'line-opacity':.65}},
  {id:'coast-highlight',type:'line',source:'world',paint:{'line-color':'#edf1cc','line-width':1,'line-opacity':.35}}
 ]};
 const stadium=(level,color1,color2,chairs,id)=>window.ARENA_NEIGHBORHOOD.marker({level,color1,color2,cadeiras:chairs,id});
 const markerSize=level=>[78,98,146,164,184][Math.max(0,Math.min(4,Number(level)||0))];
 const groupSize=(base,level)=>Number(level)===1?Math.round(base*1.25):base+[0,0,38,54,72][Math.max(0,Math.min(4,Number(level)||0))];
 window.ARENA_MAP={style,stadium,markerSize,groupSize};
})();
