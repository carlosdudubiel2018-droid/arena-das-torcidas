/* One flight drives both rendering and scoring. All units are metres/seconds. */
(function(root){
 const GOAL=Object.freeze({half:3.66,height:2.44,z:-11,post:.055,ball:.14,net:-13.1}),DT=1/480,G=9.81;
 function resolve(plan){
  const d=plan.duration,p={x:0,y:GOAL.ball,z:0},v={x:plan.target.x/d,y:(plan.target.y-GOAL.ball+G*d*d/2)/d,z:GOAL.z/d};
  const frames=[{t:0,...p}],events=[];let outcome=null,decided=null,goalTime=null,saveTime=null,lastFrame=0;
  const add=(kind,t)=>{if(!events.some(e=>e.kind===kind&&t-e.t<.09))events.push({kind,t,x:p.x,y:p.y,z:p.z});};
  function hit(a,b,ca,cb,kind,t){const dx=p[a]-ca,dy=p[b]-cb,R=GOAL.ball+GOAL.post,len=Math.hypot(dx,dy);if(len>=R)return;const nx=len?dx/len:0,ny=len?dy/len:1,approach=v[a]*nx+v[b]*ny;p[a]=ca+nx*(R+.0002);p[b]=cb+ny*(R+.0002);if(approach<0){v[a]-=1.68*approach*nx;v[b]-=1.68*approach*ny;add(kind,t);}}
  for(let t=DT;t<=2.6;t+=DT){const old={...p};v.y-=G*DT;p.x+=v.x*DT;p.y+=v.y*DT;p.z+=v.z*DT;
   if(saveTime===null&&goalTime===null&&old.z> -10.55&&p.z<= -10.55){const u=(-10.55-old.z)/(p.z-old.z),x=old.x+(p.x-old.x)*u,y=old.y+(p.y-old.y)*u;if(Math.hypot(x-plan.hand.x,(y-plan.hand.y)*1.1)<.5){saveTime=t;outcome='save';decided=t;p.z=-10.55;v.z=Math.abs(v.z)*.34;v.x=(Math.sign(x)||1)*(2.8+Math.abs(v.x)*.2);v.y=1.4;add('save',t);}}
   if(p.y>=-.14&&p.y<=GOAL.height+.14){hit('x','z',-GOAL.half,GOAL.z,'post',t);hit('x','z',GOAL.half,GOAL.z,'post',t);}
   if(Math.abs(p.x)<GOAL.half+GOAL.ball)hit('y','z',GOAL.height,GOAL.z,'crossbar',t);
   if(p.y<GOAL.ball){p.y=GOAL.ball;if(v.y<0)v.y=-v.y*.38;v.x*=.998;v.z*=.998;}
   // Only judge after the WHOLE ball has passed the line. Contacts have already resolved.
   if(decided===null&&p.z<GOAL.z-GOAL.ball){const inside=Math.abs(p.x)<GOAL.half-GOAL.post&&p.y<GOAL.height-GOAL.post;
    outcome=inside?'goal':'out';decided=t;if(inside){goalTime=t;add('goal',t);}else add('wide',t);
   }
   if(goalTime!==null){if(p.z<GOAL.net+GOAL.ball){p.z=GOAL.net+GOAL.ball;v.z=Math.abs(v.z)*.12;v.x*=.6;}
    const roof=1.9+(p.z-GOAL.net)/(GOAL.z-GOAL.net)*.54-GOAL.ball;
    if(p.z<GOAL.z&&p.y>roof){p.y=roof;v.y=-Math.abs(v.y)*.15;}
    if(Math.abs(p.x)>GOAL.half-GOAL.ball){p.x=Math.sign(p.x)*(GOAL.half-GOAL.ball);v.x=-v.x*.15;}
   }
   if(t-lastFrame>=1/120-.00001){frames.push({t,...p});lastFrame=t;}
  }
  if(decided===null){outcome='out';decided=Math.min(1.7,(events.find(e=>e.kind==='post'||e.kind==='crossbar')?.t||d)+.45);}
  return {...plan,outcome,flight:frames,events,decisionTime:decided+.12,goalTime,saveTime};
 }
 function sample(flight,time){if(time<=0)return flight[0];let lo=0,hi=flight.length-1;if(time>=flight[hi].t)return flight[hi];while(hi-lo>1){const m=(lo+hi)>>1;if(flight[m].t<time)lo=m;else hi=m;}const a=flight[lo],b=flight[hi],f=(time-a.t)/(b.t-a.t);return {x:a.x+(b.x-a.x)*f,y:a.y+(b.y-a.y)*f,z:a.z+(b.z-a.z)*f};}
 const api={GOAL,resolve,sample};if(typeof window!=='undefined')root.ARENA_BALL=api;else if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
