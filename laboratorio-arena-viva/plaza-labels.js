/* Screen-space packing for up to four plaza nameplates. No score/role changes. */
(function(root){'use strict';
 const overlap=(a,b,gap=5)=>a.x<b.x+b.width+gap&&a.x+a.width>b.x-gap&&a.y<b.y+b.height+gap&&a.y+a.height>b.y-gap;
 function layout(points,viewport,obstacles=[]){
  const used=obstacles.map(b=>({x:b.left??b.x,y:b.top??b.y,width:b.width,height:b.height})),output=[],width=Math.min(132,viewport.width/2-15),height=38,pad=8;
  for(const p of points.slice(0,4)){
   const candidates=[],xs=[p.x-width/2,p.x-width-16,p.x+16,pad,viewport.width-width-pad],ys=[p.y-height-15,p.y-height-59,p.y-height-103,p.y+20];
   for(let y=105;y<viewport.height-height-60;y+=height+8)ys.push(y);
   for(const x0 of xs)for(const y0 of ys){const x=Math.max(pad,Math.min(viewport.width-width-pad,x0)),y=Math.max(pad,Math.min(viewport.height-height-pad,y0)),box={x,y,width,height};if(used.some(b=>overlap(box,b)))continue;const dx=x+width/2-p.x,dy=y+height-p.y;candidates.push({...box,score:dx*dx+dy*dy+(dy>0?1500:0)});}
   const best=candidates.sort((a,b)=>a.score-b.score)[0];if(!best)continue;used.push(best);output.push({...best,id:p.id,anchor:p});
  }
  return output;
 }
 const api={layout,overlap};if(typeof module!=='undefined')module.exports=api;else root.ARENA_PLAZA_LABELS=api;
})(typeof window!=='undefined'?window:globalThis);
