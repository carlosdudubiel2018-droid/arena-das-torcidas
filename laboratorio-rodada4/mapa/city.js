/* Laboratory-only neighbourhood. Shared geometry, deterministic lots, no game writes. */
(function(root){
 'use strict';
 function plan({halfWidth,halfDepth,limit,free,highways=[]}){
  const roads=[],houses=[],seen=new Set(),width=.66,rx=Math.min(limit-2.4,halfWidth+5.9),rz=Math.min(limit-2.4,halfDepth+5.9),ix=halfWidth+1.5,iz=halfDepth+1.5;
  const insideStadium=(x,z,pad=0)=>Math.abs(x)<halfWidth+pad&&Math.abs(z)<halfDepth+pad;
  const safe=(a,b,access=false)=>{const n=Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.35);for(let i=0;i<=n;i++){const f=n?i/n:0,x=a.x+(b.x-a.x)*f,z=a.z+(b.z-a.z)*f;if(!free(x,z,.65)||!access&&insideStadium(x,z,.5))return false;}return true;};
  function add(a,b,access=false){if(Math.hypot(a.x-b.x,a.z-b.z)<.2||!safe(a,b,access))return false;const k=[a,b].map(p=>p.x.toFixed(2)+':'+p.z.toFixed(2)).sort().join('/');if(seen.has(k))return true;seen.add(k);roads.push({a,b,access});return true;}
  const ring=(x,z)=>{const points=[{x:-x,z:-z},{x,z:-z},{x,z},{x:-x,z}];return points.map((p,i)=>add(p,points[(i+1)%4]));};
  ring(ix,iz);const outer=ring(rx,rz);
  // Radial streets form small blocks between the two rings.
  for(const x of [-ix,0,ix]){add({x,z:iz},{x,z:rz});add({x,z:-iz},{x,z:-rz});}
  for(const z of [-iz,0,iz]){add({x:ix,z},{x:rx,z});add({x:-ix,z},{x:-rx,z});}
  const gateZ=halfDepth-.845;add({x:0,z:gateZ},{x:0,z:iz},true);
  const candidates=highways.filter(p=>Math.max(Math.abs(p.x),Math.abs(p.z))<limit+70&&!insideStadium(p.x,p.z,1));
  const entries=[{x:0,z:rz},{x:0,z:-rz},{x:rx,z:0},{x:-rx,z:0}];let connections=0;
  for(const entry of entries){const near=candidates.slice().sort((a,b)=>Math.hypot(a.x-entry.x,a.z-entry.z)-Math.hypot(b.x-entry.x,b.z-entry.z)).slice(0,4);for(const p of near){const routes=[[entry,p],[entry,{x:entry.x,z:p.z},p],[entry,{x:p.x,z:entry.z},p]];const route=routes.find(r=>r.slice(1).every((b,i)=>safe(r[i],b)));if(route){route.slice(1).forEach((b,i)=>add(route[i],b));connections++;break;}}}
  const dist=(p,r)=>{const dx=r.b.x-r.a.x,dz=r.b.z-r.a.z,u=Math.max(0,Math.min(1,((p.x-r.a.x)*dx+(p.z-r.a.z)*dz)/(dx*dx+dz*dz)));return Math.hypot(p.x-r.a.x-u*dx,p.z-r.a.z-u*dz);};
  for(const road of roads){if(road.access)continue;const dx=road.b.x-road.a.x,dz=road.b.z-road.a.z,length=Math.hypot(dx,dz),ux=dx/length,uz=dz/length;
   for(const side of [-1,1])for(let t=1;t<length-.8;t+=1.2){const x=road.a.x+ux*t-uz*side*1.05,z=road.a.z+uz*t+ux*side*1.05;
    const edge=Math.max(Math.abs(x)-halfWidth,Math.abs(z)-halfDepth),hash=Math.abs(Math.round(x*31+z*47));
    if(edge>6&&hash%3!==0||edge>3.7&&hash%5===0||Math.abs(x)>limit-1||Math.abs(z)>limit-1||insideStadium(x,z,.7)||!free(x,z,.85)||roads.some(r=>dist({x,z},r)<.86)||houses.some(p=>Math.hypot(p.x-x,p.z-z)<1.03))continue;
    houses.push({x,z,angle:Math.atan2(uz*side,-ux*side),height:.33+(hash%4)*.055,variant:hash%7});
   }
  }
  // A few outer lots thin out into the countryside, following existing streets.
  const sparse=[];for(const p of houses.filter(p=>Math.max(Math.abs(p.x),Math.abs(p.z))>Math.min(ix,iz)+1)){const x=p.x+Math.sign(p.x)*1.4,z=p.z+Math.sign(p.z)*1.4;if(Math.abs(x)<limit-1&&Math.abs(z)<limit-1&&free(x,z,.9)&&!insideStadium(x,z,.7)&&!roads.some(r=>dist({x,z},r)<.9)&&!houses.concat(sparse).some(q=>Math.hypot(q.x-x,q.z-z)<1.1)&&p.variant%3===0)sparse.push({...p,x,z});}houses.push(...sparse);
  const walk=roads.filter(r=>!r.access&&Math.hypot(r.b.x-r.a.x,r.b.z-r.a.z)>5).sort((a,b)=>b.a.z+b.b.z-a.a.z-a.b.z).slice(0,5);
  const carPath=outer.every(Boolean)?[{x:-rx,z:rz},{x:rx,z:rz},{x:rx,z:-rz},{x:-rx,z:-rz},{x:-rx,z:rz}]:null;
  return {roads,houses,walk,carPath,connections,width};
 }
 function create(T,{team,state,anchor,anchors,contains,highways,scale}){
  const halfWidth=state.width*scale/2,halfDepth=state.depth*scale/2,nearest=Math.min(...Object.values(anchors).filter(a=>a!==anchor).map(a=>Math.hypot(a.x-anchor.x,a.z-anchor.z))),limit=Math.min(23,nearest*.46);
  const free=(x,z,pad=0)=>{for(const dx of [-pad,0,pad])for(const dz of [-pad,0,pad]){if(!contains(anchor.x+x+dx,anchor.z+z+dz))return false;for(const a of Object.values(anchors))if(a!==anchor&&Math.abs(anchor.x+x+dx-a.x)<16&&Math.abs(anchor.z+z+dz-a.z)<16)return false;}return true;};
  const ports=highways.flatMap(([a,b])=>{const points=[],dx=b.x-a.x,dz=b.z-a.z,len=dx*dx+dz*dz;for(const [x,z]of [[0,0],[halfWidth+6,0],[-halfWidth-6,0],[0,halfDepth+6],[0,-halfDepth-6]]){const u=Math.max(0,Math.min(1,((anchor.x+x-a.x)*dx+(anchor.z+z-a.z)*dz)/len));points.push({x:a.x+dx*u-anchor.x,z:a.z+dz*u-anchor.z});}return points;});
  const p=plan({halfWidth,halfDepth,limit,free,highways:ports}),group=new T.Group(),actors=new T.Group(),owned=new Set();group.name='Cidade · '+team.name;group.position.set(anchor.x,0,anchor.z);group.add(actors);
  const own=o=>(owned.add(o),o),mat=c=>own(new T.MeshLambertMaterial({color:new T.Color(c).convertSRGBToLinear()})),asphalt=mat('#64716f'),curb=mat('#d0d0ba'),wall=mat('#ffffff'),roof=mat('#ffffff'),glass=mat('#547e8d'),door=mat('#5e4b3c'),stripe=mat('#eee2bb'),club=mat(team.color1||'#23724e'),skin=mat('#bf8d6a'),dark=mat('#293c40');
  const plane=own(new T.PlaneGeometry(1,1)),cube=own(new T.BoxGeometry(1,1,1)),roofGeo=own(new T.ConeGeometry(1,1,4)),dummy=new T.Object3D();
  function inst(geometry,material,count,parent=group){const m=new T.InstancedMesh(geometry,material,count);parent.add(m);return m;}
  const streets=inst(plane,asphalt,p.roads.length),sidewalks=inst(plane,curb,p.roads.length),marks=[];
  p.roads.forEach((r,i)=>{const dx=r.b.x-r.a.x,dz=r.b.z-r.a.z,len=Math.hypot(dx,dz);dummy.position.set((r.a.x+r.b.x)/2,.49,(r.a.z+r.b.z)/2);dummy.rotation.set(-Math.PI/2,0,Math.atan2(dx,dz));dummy.scale.set(1.15,len+.55,1);dummy.updateMatrix();sidewalks.setMatrixAt(i,dummy.matrix);dummy.position.y=.51;dummy.scale.set(p.width,len+.4,1);dummy.updateMatrix();streets.setMatrixAt(i,dummy.matrix);for(let d=.5;d<len-.3;d+=1.3)marks.push({x:r.a.x+dx*d/len,z:r.a.z+dz*d/len,angle:Math.atan2(dx,dz)});});
  const lines=inst(plane,stripe,marks.length);marks.forEach((p,i)=>{dummy.position.set(p.x,.515,p.z);dummy.rotation.set(-Math.PI/2,0,p.angle);dummy.scale.set(.035,.34,1);dummy.updateMatrix();lines.setMatrixAt(i,dummy.matrix);});
  const bodies=inst(cube,wall,p.houses.length),roofs=inst(roofGeo,roof,p.houses.length),doors=inst(cube,door,p.houses.length),windows=inst(cube,glass,p.houses.length*2),yards=inst(plane,curb,p.houses.length);
  const walls=['#e6d8b8','#f4e7d2','#c7d7cb','#d8dce4','#e5cba8','#c0cdd8','#e1d9c3'],tiles=['#a86c48','#a06b50','#b77a53',team.color1||'#27714c','#8e7962','#bd8158','#8b6250'];
  p.houses.forEach((h,i)=>{dummy.position.set(h.x,.5+h.height/2,h.z);dummy.rotation.set(0,h.angle,0);dummy.scale.set(.86,h.height,.82);dummy.updateMatrix();bodies.setMatrixAt(i,dummy.matrix);bodies.setColorAt(i,new T.Color(walls[h.variant]).convertSRGBToLinear());dummy.position.y=.5+h.height+.12;dummy.rotation.y=h.angle+Math.PI/4;dummy.scale.set(.7,.25,.68);dummy.updateMatrix();roofs.setMatrixAt(i,dummy.matrix);roofs.setColorAt(i,new T.Color(tiles[h.variant]).convertSRGBToLinear());
   const front=new T.Vector3(0,0,.418).applyAxisAngle(new T.Vector3(0,1,0),h.angle);dummy.position.set(h.x+front.x,.5+h.height*.33,h.z+front.z);dummy.rotation.set(0,h.angle,0);dummy.scale.set(.14,h.height*.64,.025);dummy.updateMatrix();doors.setMatrixAt(i,dummy.matrix);for(let k=0;k<2;k++){const offset=new T.Vector3(k?.27:-.27,h.height*.57,.42).applyAxisAngle(new T.Vector3(0,1,0),h.angle);dummy.position.set(h.x+offset.x,.5+offset.y,h.z+offset.z);dummy.scale.set(.15,.13,.025);dummy.updateMatrix();windows.setMatrixAt(i*2+k,dummy.matrix);}dummy.position.set(h.x,.485,h.z);dummy.rotation.set(-Math.PI/2,0,h.angle);dummy.scale.set(1.04,1.05,1);dummy.updateMatrix();yards.setMatrixAt(i,dummy.matrix);
  });
  const people=[],cars=[],head=own(new T.SphereGeometry(.075,5,4)),torso=own(new T.BoxGeometry(.15,.21,.095)),leg=own(new T.BoxGeometry(.045,.17,.06)),carBody=own(new T.BoxGeometry(.26,.16,.48)),carGlass=own(new T.BoxGeometry(.23,.12,.25)),wheel=own(new T.BoxGeometry(.30,.055,.34));
  const n=p.walk.length?8:0,nCars=p.carPath?3:0,shirts=inst(torso,wall,n,actors),heads=inst(head,skin,n,actors),legs=inst(leg,dark,n*2,actors),carBodies=inst(carBody,wall,nCars,actors),carWindows=inst(carGlass,glass,nCars,actors),wheels=inst(wheel,dark,nCars,actors);
  for(let i=0;i<n;i++){const g=new T.Object3D();g.scale.setScalar(.7);people.push({g,road:p.walk[i%p.walk.length],phase:i*.31});shirts.setColorAt(i,new T.Color(i%3?team.color1||'#23724e':'#f4eedc').convertSRGBToLinear());}
  for(let i=0;i<nCars;i++){cars.push({g:new T.Object3D(),phase:i/3});carBodies.setColorAt(i,new T.Color(i===1?'#f2e4b4':team.color1||'#23724e').convertSRGBToLinear());}
  const part=new T.Object3D(),matrix=new T.Matrix4();function partAt(inst,i,g,x,y,z,rx=0){part.position.set(x,y,z);part.rotation.set(rx,0,0);part.updateMatrix();matrix.multiplyMatrices(g.matrix,part.matrix);inst.setMatrixAt(i,matrix);}
  const lengths=p.carPath?p.carPath.slice(1).map((b,i)=>Math.hypot(b.x-p.carPath[i].x,b.z-p.carPath[i].z)):[],total=lengths.reduce((a,b)=>a+b,0);let clock=0;
  function tick(dt,moving,lite){actors.visible=!lite;if(lite||!moving)return;clock+=dt;for(let i=0;i<people.length;i++){const a=people[i],r=a.road,dx=r.b.x-r.a.x,dz=r.b.z-r.a.z,len=Math.hypot(dx,dz),f=(clock*.36/len+a.phase)%2,u=f<1?f:2-f,side=(a.phase>.9?-1:1)*.47;a.g.position.set(r.a.x+dx*u-dz/len*side,.52,r.a.z+dz*u+dx/len*side);a.g.rotation.y=Math.atan2(dx,dz)+(f<1?0:Math.PI);a.g.updateMatrix();const swing=Math.sin(clock*7+a.phase*6)*.65;partAt(shirts,i,a.g,0,.28,0);partAt(heads,i,a.g,0,.47,0);partAt(legs,i*2,a.g,-.045,.09,0,swing);partAt(legs,i*2+1,a.g,.045,.09,0,-swing);}
   for(let i=0;i<cars.length;i++){const c=cars[i];let d=(clock*.9+c.phase*total)%total,j=0;while(j<lengths.length-1&&d>lengths[j])d-=lengths[j++];const a=p.carPath[j],b=p.carPath[j+1],ux=(b.x-a.x)/lengths[j],uz=(b.z-a.z)/lengths[j];c.g.position.set(a.x+ux*d-uz*.13,.53,a.z+uz*d+ux*.13);const angle=Math.atan2(ux,uz),delta=Math.atan2(Math.sin(angle-c.g.rotation.y),Math.cos(angle-c.g.rotation.y));c.g.rotation.y+=delta*Math.min(1,dt*12);c.g.updateMatrix();partAt(carBodies,i,c.g,0,.13,0);partAt(carWindows,i,c.g,0,.255,0);partAt(wheels,i,c.g,0,.055,0);}
   for(const m of [shirts,heads,legs,carBodies,carWindows,wheels])m.instanceMatrix.needsUpdate=true;
  }
  tick(.001,true,false);
  return {root:group,plan:p,stats:{houses:p.houses.length,streets:p.roads.length,connections:p.connections,people:people.length,cars:cars.length},tick,time:()=>clock,dispose(){owned.forEach(o=>o.dispose());group.removeFromParent();}};
 }
 root.ARENA_CITY={plan,create};
})(typeof window!=='undefined'?window:globalThis);
