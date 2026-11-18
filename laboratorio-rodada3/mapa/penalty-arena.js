/* Dedicated, disposable practice arena. No network or game-state writes. */
window.ARENA_PENALTY_SCENE=function(T,team,small){
 const goal=ARENA_BALL.GOAL;
 const scene=new T.Scene();scene.background=new T.Color('#a9d9ee');scene.fog=new T.Fog('#b8dcea',95,200);
 const camera=new T.PerspectiveCamera(small?56:32,innerWidth/innerHeight,.1,240);
 const primary=team.id==='gremio'?'#179ed9':team.id==='internacional'?'#d51e37':team.color1||team.primary||team.color||'#247d54';
 const secondary=team.id==='gremio'?'#101d2b':team.color2||'#ffffff',owned=new Set(),textures=new Set();
 const mat=(color,extra={})=>{const m=new T.MeshStandardMaterial({color:new T.Color(color).convertSRGBToLinear(),roughness:.85,...extra});owned.add(m);return m;};
 const white=mat('#f9fcf6'),concrete=mat('#abb7b5'),dark=mat('#1f3343'),club=mat(primary),trim=mat(secondary);
 function mesh(g,m,x,y,z,parent=scene){const o=new T.Mesh(g,m);o.position.set(x,y,z);parent.add(o);return o;}
 const box=(w,h,d,m,x,y,z,p)=>mesh(new T.BoxGeometry(w,h,d),m,x,y,z,p);
 function line(points,color='#ffffff',opacity=1,parent=scene){const m=new T.LineBasicMaterial({color,transparent:opacity<1,opacity});owned.add(m);const o=new T.LineSegments(new T.BufferGeometry().setFromPoints(points.map(p=>new T.Vector3(...p))),m);parent.add(o);return o;}
 const hemi=new T.HemisphereLight('#ecf8ff','#496047',.9);scene.add(hemi);const sun=new T.DirectionalLight('#fff3dc',.9);sun.position.set(-20,40,20);scene.add(sun);
 box(160,.4,175,mat('#3c6b59'),0,-.45,40);
 for(let i=0;i<15;i++)box(68,.08,7,mat(i%2?'#277f4f':'#319557'),0,-.04,-7.5+i*7);
 const mark=mat('#f0f6df');const stripe=(w,d,x,z)=>box(w,.013,d,mark,x,.012,z);
 stripe(68,.11,0,-11);stripe(68,.11,0,94);stripe(.11,105,-34,41.5);stripe(.11,105,34,41.5);stripe(68,.11,0,41.5);
 function rect(w,d,z){stripe(w,.11,0,z);stripe(.11,d,-w/2,z-d/2);stripe(.11,d,w/2,z-d/2);}
 rect(40.32,16.5,5.5);rect(18.32,5.5,-5.5);
 const arc=[];for(let i=0;i<70;i++){const a=i/70*Math.PI*2,b=(i+1)/70*Math.PI*2;arc.push([Math.cos(a)*9.15,.025,41.5+Math.sin(a)*9.15],[Math.cos(b)*9.15,.025,41.5+Math.sin(b)*9.15]);}line(arc,'#eef6df');
 mesh(new T.CircleGeometry(.13,16),mark,0,.021,0).rotation.x=-Math.PI/2;
 // 7.32 x goal.heightm goal, with posts, depth and a complete white net.
 function pole(a,b,r=goal.post){const v=new T.Vector3(...b).sub(new T.Vector3(...a));const o=mesh(new T.CylinderGeometry(r,r,v.length(),10),white,...new T.Vector3(...a).addScaledVector(v,.5).toArray());o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());}
 for(const x of [-goal.half,goal.half]){pole([x,0,-11],[x,goal.height,-11]);pole([x,goal.height,-11],[x,1.9,-13.1],.035);pole([x,1.9,-13.1],[x,0,-13.1],.035);}pole([-goal.half,goal.height,-11],[goal.half,goal.height,-11]);pole([-goal.half,1.9,-13.1],[goal.half,1.9,-13.1],.035);
 const net=[];for(let x=-goal.half;x<=3.67;x+=.24){net.push([x,0,-13.1],[x,1.9,-13.1],[x,1.9,-13.1],[x,goal.height,-11]);}for(let y=.12;y<=1.91;y+=.2)net.push([-goal.half,y,-13.1],[goal.half,y,-13.1]);for(const x of [-goal.half,goal.half]){for(let z=-13.1;z<-10.99;z+=.24){const h=1.9+(z+13.1)/2.1*.54;net.push([x,0,z],[x,h,z]);}for(let y=.2;y<2;y+=.2)net.push([x,y,-13.1],[x,y,-11]);}for(let z=-13.1;z<=-11;z+=.24){const y=1.9+(z+13.1)/2.1*.54;net.push([-goal.half,y,z],[goal.half,y,z]);}const netRoot=new T.Group();scene.add(netRoot);line(net,'#edf7fa',.7,netRoot);
 // Stepped concrete stands, colored seats and a crowd batched into a few calls.
 const spectators=[],seats=[];for(let row=0;row<9;row++){const z=-18-row*.94,y=.45+row*.58;box(58,.64,.96,concrete,0,y-.32,z);for(let col=0;col<58;col++){const x=(col-28.5)*.94;seats.push([x,y+.14,z]);if((col*7+row*11)%6!==0)spectators.push([x,y+.34,z]);}}
 for(const side of [-1,1])for(let row=0;row<6;row++){const x=side*(39+row*.96),y=.4+row*.58;box(.98,.64,75,concrete,x,y-.32,20);for(let col=0;col<50;col++){const z=-15+col*1.4;seats.push([x,y+.14,z]);if(col%3!==0)spectators.push([x,y+.34,z]);}}
 const dummy=new T.Object3D();const seatMesh=new T.InstancedMesh(new T.BoxGeometry(.62,.25,.65),white,seats.length);seats.forEach((p,i)=>{dummy.position.set(...p);dummy.rotation.set(0,0,0);dummy.scale.set(1,1,1);dummy.updateMatrix();seatMesh.setMatrixAt(i,dummy.matrix);seatMesh.setColorAt(i,new T.Color(i%4===0?secondary:primary));});scene.add(seatMesh);
 const heads=new T.InstancedMesh(new T.SphereGeometry(.14,6,5),white,spectators.length),bodies=new T.InstancedMesh(new T.BoxGeometry(.36,.43,.25),white,spectators.length);spectators.forEach((p,i)=>{dummy.position.set(p[0],p[1]+.4,p[2]);dummy.updateMatrix();heads.setMatrixAt(i,dummy.matrix);dummy.position.y=p[1]+.08;dummy.updateMatrix();bodies.setMatrixAt(i,dummy.matrix);bodies.setColorAt(i,new T.Color(i%3===0?secondary:primary));heads.setColorAt(i,new T.Color(['#dfb08c','#af7854','#76533b','#d49a78'][i%4]));});scene.add(heads,bodies);const crowdArms=new T.InstancedMesh(new T.CylinderGeometry(.065,.065,.42,5).translate(0,-.18,0),white,spectators.length*2);scene.add(crowdArms);crowdArms.frustumCulled=false;for(let i=0;i<spectators.length*2;i++)crowdArms.setColorAt(i,new T.Color(Math.floor(i/2)%3===0?secondary:primary));heads.frustumCulled=bodies.frustumCulled=false;
 for(const x of [-28,28]){box(.3,10,.3,dark,x,5,-27);box(3,.3,2,dark,x,10,-26);}box(64,.2,8,mat('#d4e1e1'),0,7,-25.5);
 function board(text,x,y,z,w=17,h=2.7){const cv=document.createElement('canvas');cv.width=1024;cv.height=160;const c=cv.getContext('2d');c.fillStyle=primary;c.fillRect(0,0,1024,160);c.fillStyle='#fff';c.font='900 76px Arial';c.textAlign='center';c.textBaseline='middle';c.fillText(text.toUpperCase(),512,82,990);const tx=new T.CanvasTexture(cv);tx.encoding=T.sRGBEncoding;textures.add(tx);const m=mat('#ffffff',{map:tx});return mesh(new T.PlaneGeometry(w,h),m,x,y,z);}
 board(team.name,0,6.15,-20,16,1.4);board('ARENA DAS TORCIDAS',-18,1,-16.7,15,1.3);board('A FORÇA VEM DA TORCIDA',18,1,-16.7,15,1.3);
 const banners=[];for(const x of [-21,-13,13,21]){const b=box(3,.8,.08,club,x,3.6,-21);banners.push(b);}
 // Football-specific avatar: club shirt, shorts, socks and boots (no civilian clothes).
 function player(goalkeeper=false){
 const root=new T.Group(),rig=new T.Group();rig.position.y=.88;root.add(rig);
 const skin=mat(goalkeeper?'#a97455':'#c18b67'),kit=goalkeeper?mat('#f4b837'):club;
 box(.55,.55,.3,kit,0,.23,0,rig);box(.51,.21,.31,goalkeeper?dark:trim,0,-.12,0,rig);
 mesh(new T.SphereGeometry(.205,12,10),skin,0,.73,0,rig);mesh(new T.SphereGeometry(.213,12,6,0,Math.PI*2,0,Math.PI*.48),mat('#302923'),0,.78,0,rig);
 for(const x of [-.072,.072])mesh(new T.SphereGeometry(.024,6,5),dark,x,.75,-.19,rig);
 const legs=[],arms=[];
 for(const side of [-1,1]){
  const hip=new T.Group();hip.position.set(side*.15,-.18,0);rig.add(hip);box(.18,.28,.2,skin,0,-.14,0,hip);
  const knee=new T.Group();knee.position.y=-.28;hip.add(knee);box(.18,.24,.2,kit,0,-.12,0,knee);box(.21,.12,.34,dark,0,-.31,-.07,knee);legs.push({hip,knee});
  const shoulder=new T.Group();shoulder.position.set(side*.34,.44,0);rig.add(shoulder);box(.21,.23,.23,kit,0,-.1,0,shoulder);
  const elbow=new T.Group();elbow.position.y=goalkeeper?-.32:-.24;shoulder.add(elbow);box(.15,goalkeeper?.36:.27,.17,skin,0,goalkeeper?-.18:-.13,0,elbow);
  const hand=box(goalkeeper?.26:.16,.2,.23,goalkeeper?white:skin,0,goalkeeper?-.49:-.33,0,elbow);arms.push({shoulder,elbow,hand,side});
 }
 if(!goalkeeper&&team.id==='gremio')for(const side of [-1,1])for(const x of [-.2,0,.2]){box(.095,.51,.012,white,x,.23,side*.157,rig);box(.07,.51,.012,dark,x+.06,.23,side*.168,rig);}
 if(!goalkeeper){box(.32,.22,.02,club,0,.33,.182,rig);for(const x of [-.065,.065])box(.045,.14,.015,white,x,.33,.197,rig);}
 const ground=mesh(new T.CircleGeometry(.42,18),new T.MeshBasicMaterial({color:'#102f25',transparent:true,opacity:.15,depthWrite:false}),0,.025,0);owned.add(ground.material);ground.rotation.x=-Math.PI/2;
 scene.add(root);return {root,rig,legs,arms,ground};
 }
 const keeper=player(true);keeper.root.position.set(0,0,-10.65);keeper.root.rotation.y=Math.PI;
 const striker=player();striker.root.position.set(small?-.75:-1.5,0,1.15);
 // Hand-painted pentagons on a small ball, at actual football scale.
 const cv=document.createElement('canvas');cv.width=512;cv.height=256;const c=cv.getContext('2d');c.fillStyle='#f5f7f3';c.fillRect(0,0,512,256);c.fillStyle='#202d32';for(let row=0;row<3;row++)for(let col=0;col<6;col++){const x=col*92+(row%2)*46,y=row*100+23;c.beginPath();for(let i=0;i<5;i++){const a=i/5*Math.PI*2;c.lineTo(x+23*Math.cos(a),y+23*Math.sin(a));}c.closePath();c.fill();}const tx=new T.CanvasTexture(cv);tx.encoding=T.sRGBEncoding;textures.add(tx);
 const ball=mesh(new T.SphereGeometry(goal.ball,20,16),mat('#ffffff',{map:tx,roughness:.5}),0,.14,0);
 const shadow=mesh(new T.CircleGeometry(.16,20),new T.MeshBasicMaterial({color:'#102f25',transparent:true,opacity:.24,depthWrite:false}),0,.035,0);owned.add(shadow.material);shadow.rotation.x=-Math.PI/2;
 const target=mesh(new T.TorusGeometry(.28,.045,8,32),new T.MeshBasicMaterial({color:'#10384c',depthTest:false}),1.4,1.1,-10.92);owned.add(target.material);target.renderOrder=20;const rim=new T.Mesh(new T.TorusGeometry(.295,.065,8,32),new T.MeshBasicMaterial({color:'#fff1b2',depthTest:false}));owned.add(rim.material);rim.position.z=-.002;rim.renderOrder=19;target.add(rim);const cross=new T.Group();box(.15,.025,.012,target.material,0,0,.01,cross);box(.025,.15,.012,target.material,0,0,.01,cross);cross.traverse(o=>o.renderOrder=21);target.add(cross);
 const arrow=new T.ArrowHelper(new T.Vector3(0,0,-1),new T.Vector3(0,.055,-.32),2.6,0xffd653,.6,.42);scene.add(arrow);
 target.material.visible=false;for(const child of target.children)child.visible=false;
 const start=new T.Vector3(small?-.15:0,small?3:2.7,small?8:7),look=new T.Vector3(0,1.25,-10.8);camera.position.copy(start);camera.lookAt(look);
 const confetti=new T.InstancedMesh(new T.BoxGeometry(.12,.2,.025),white,45);confetti.frustumCulled=false;confetti.visible=false;scene.add(confetti);for(let i=0;i<45;i++)confetti.setColorAt(i,new T.Color(i%3===0?'#ffd257':i%3===1?primary:'#ffffff'));let cheerAt=null;
 let crowdAt=0;
 function tick(dt,time,cheer,lite){confetti.visible=cheer&&!lite;if(cheer&&!lite){if(cheerAt===null)cheerAt=time;const t=time-cheerAt;for(let i=0;i<45;i++){const y=.8+(4+i%5*.4)*t-3*t*t;dummy.position.set((i%9-4)*.9+(i%2?1:-1)*t*.5,Math.max(.1,y),-14.5+(i%5)*.2);dummy.rotation.set(t*3+i,t*4+i,0);dummy.scale.setScalar(y>0?1:0);dummy.updateMatrix();confetti.setMatrixAt(i,dummy.matrix);}confetti.instanceMatrix.needsUpdate=true;}else cheerAt=null;
  crowdAt+=dt;if(!lite&&crowdAt>.055){crowdAt=0;const mood=cheer?1:.12;
   spectators.forEach((p,i)=>{const phase=time*(cheer?7.8:2.1)+i*1.73,jump=Math.max(0,Math.sin(phase))*mood*.2;
    dummy.rotation.set(0,0,Math.sin(phase*.6)*.025);dummy.scale.set(1,1,1);dummy.position.set(p[0],p[1]+.4+jump,p[2]);dummy.updateMatrix();heads.setMatrixAt(i,dummy.matrix);
    dummy.position.y=p[1]+.08+jump;dummy.updateMatrix();bodies.setMatrixAt(i,dummy.matrix);
    for(let side=0;side<2;side++){const raised=cheer||i%7===0,angle=(side?1:-1)*(raised?2.5+Math.sin(phase)*.3:.2+Math.sin(phase)*.12);dummy.position.set(p[0]+(side?.23:-.23),p[1]+.12+jump,p[2]);dummy.rotation.set(0,0,angle);dummy.updateMatrix();crowdArms.setMatrixAt(i*2+side,dummy.matrix);}
   });heads.instanceMatrix.needsUpdate=bodies.instanceMatrix.needsUpdate=crowdArms.instanceMatrix.needsUpdate=true;
   banners.forEach((b,i)=>{b.rotation.z=Math.sin(time*2+i)*.04;b.position.y=3.6+Math.sin(time*2+i)*.05;});
  }
 }
 function reset(){camera.fov=small?56:32;camera.position.copy(start);camera.lookAt(look);camera.updateProjectionMatrix();striker.root.position.set(small?-.75:-1.5,0,1.15);striker.root.rotation.set(0,0,0);striker.rig.rotation.set(0,0,0);keeper.root.position.set(0,0,-10.65);keeper.rig.rotation.set(0,0,0);keeper.root.rotation.set(0,Math.PI,0);for(const a of [keeper,striker]){a.legs.forEach(l=>{l.hip.rotation.set(0,0,0);l.knee.rotation.set(0,0,0);});a.arms.forEach(v=>{v.shoulder.rotation.set(0,0,0);v.elbow.rotation.set(0,0,0);});}netRoot.scale.set(1,1,1);}
 function animateShot(plan,age){camera.fov=(small?56:32)-Math.min(1,age)*1.5;camera.updateProjectionMatrix();
  const run=Math.min(1,age/.46),step=Math.sin(run*Math.PI*3);striker.root.position.z=1.15-run*.9;striker.root.position.x=(small?-.75:-1.5)+run*(small?.47:1.22);
  striker.legs[0].hip.rotation.x=step*.55;striker.legs[1].hip.rotation.x=age<.46?-step*.65:-Math.sin(Math.min(1,(age-.46)/.32)*Math.PI)*1.2;
  striker.legs[1].knee.rotation.x=Math.max(0,-step)*.7;striker.rig.rotation.x=-.07;striker.arms[0].shoulder.rotation.x=-step*.55;striker.arms[1].shoulder.rotation.x=step*.55;
  const t=Math.max(0,age-.46-plan.reaction),f=Math.min(1,t/(plan.duration-plan.reaction)),ease=1-Math.pow(1-f,2),sign=Math.sign(plan.hand.x)||1;
  const angle=Math.max(.65,Math.min(1.45,Math.atan2(Math.abs(plan.hand.x),Math.max(.2,plan.hand.y-.35))));
  const hipX=plan.hand.x-sign*Math.sin(angle)*1.15,hipY=Math.max(.26,plan.hand.y-Math.cos(angle)*1.15);
  keeper.root.position.x=hipX*ease;keeper.root.position.y=(hipY-.88)*ease+Math.sin(f*Math.PI)*.28;
  // Rotating about the hip, not the feet, lets shoulders and gloves lead the dive.
  keeper.rig.rotation.z=sign*angle*ease;keeper.legs[0].hip.rotation.x=-.28*Math.sin(f*Math.PI);keeper.legs[1].hip.rotation.x=.38*Math.sin(f*Math.PI);keeper.legs.forEach(l=>l.knee.rotation.x=.5*Math.sin(f*Math.PI));
  keeper.arms.forEach((v,i)=>{v.shoulder.rotation.z=(i?1:-1)*Math.PI*ease;v.shoulder.rotation.x=-.18*ease;v.elbow.rotation.z=(i?-.12:.12)*ease;});
  // The visible gloves converge on the very same hand point used by ball physics.
  // This prevents a save being shown with the keeper diving away from the ball.
  keeper.root.updateWorldMatrix(true,true);
  const glove=keeper.arms[sign>0?0:1].hand.getWorldPosition(new T.Vector3());
  const contact=plan.events?.find(e=>e.kind==='save');
  const dest=contact||{x:plan.hand.x,y:plan.hand.y,z:-10.55};
  const reach=Math.min(1,t/Math.max(.1,(plan.saveTime||plan.duration)-plan.reaction));
  const weight=reach*reach*(3-2*reach);
  keeper.root.position.x+=(dest.x-glove.x)*weight;
  keeper.root.position.y+=(dest.y-glove.y)*weight;
  keeper.root.position.z=-10.65+(dest.z-glove.z)*weight;
  striker.ground.position.set(striker.root.position.x,.025,striker.root.position.z);keeper.ground.position.set(keeper.root.position.x,.025,-10.65);
 }
 function idle(time){keeper.root.position.x=Math.sin(time*2.2)*.13;keeper.rig.position.y=.86+Math.sin(time*3)*.025;keeper.legs.forEach(l=>{l.hip.rotation.x=-.12;l.knee.rotation.x=.22;});keeper.arms.forEach(v=>{v.shoulder.rotation.z=v.side*(.45+Math.sin(time*2)*.045);v.elbow.rotation.x=-.22;});}
 function recover(t){camera.fov+=( (small?56:32)-camera.fov)*.08;camera.updateProjectionMatrix();const f=Math.max(0,Math.min(1,(t-.65)/.8));keeper.rig.rotation.z*=1-f;keeper.root.position.y*=1-f;keeper.arms.forEach(v=>v.shoulder.rotation.z*=1-f);}
 function dispose(){const gs=new Set();scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>owned.add(m));});gs.forEach(g=>g.dispose());owned.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());scene.clear();}
 tick(.06,0,false,false);
 return {scene,camera,ball,shadow,keeper,striker,target,arrow,netRoot,tick,reset,idle,animateShot,recover,dispose,start,look};
};
