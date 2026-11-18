/* Whole-district containment in real geographic polygons. */
(function(root){
 function ring(x,z,r){let yes=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const a=r[i],b=r[j];if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])yes=!yes;}return yes;}
 function contains(polys,x,z){return polys.some(p=>ring(x,z,p.outer)&&!(p.holes||[]).some(h=>ring(x,z,h)));}
 function fits(polys,b){const nx=Math.max(8,Math.ceil((b.maxX-b.minX)/1.2)),nz=Math.max(8,Math.ceil((b.maxZ-b.minZ)/1.2));for(let i=0;i<=nx;i++)for(let j=0;j<=nz;j++)if(!contains(polys,b.minX+(b.maxX-b.minX)*i/nx,b.minZ+(b.maxZ-b.minZ)*j/nz))return false;return true;}
 const overlaps=(a,b,gap=3)=>a.minX<b.maxX+gap&&a.maxX>b.minX-gap&&a.minZ<b.maxZ+gap&&a.maxZ>b.minZ-gap;
 function locate(polys,desired,relative,occupied=[]){for(let radius=0;radius<85;radius+=1.5){const steps=radius?48:1;for(let i=0;i<steps;i++){const angle=Math.PI+i/steps*Math.PI*2,x=desired.x+Math.cos(angle)*radius,z=desired.z+Math.sin(angle)*radius;
 const box={minX:x+relative.minX,maxX:x+relative.maxX,minZ:z+relative.minZ,maxZ:z+relative.maxZ};if(fits(polys,box)&&!occupied.some(b=>overlaps(box,b)))return {x,z,box};}}throw Error('Não há terreno seguro para o bairro.');}
 const api={contains,fits,locate,overlaps};if(typeof module!=='undefined')module.exports=api;else root.ARENA_LAND=api;
})(typeof window!=='undefined'?window:globalThis);
