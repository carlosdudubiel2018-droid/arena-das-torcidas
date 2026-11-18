/* Test-shop accessories only. Does not modify official shirt assets or club state. */
(function(root){'use strict';
 function clear(a){const old=a.root.userData.labOutfit;if(!old)return;old.nodes.forEach(n=>n.parent?.remove(n));old.owned.forEach(o=>o.dispose());delete a.root.userData.labOutfit;}
 function apply(T,world,outfits,progress={}){
  if(!world.labOutfitDispose){const dispose=world.dispose;world.dispose=()=>{world.actors.forEach(clear);dispose();};world.labOutfitDispose=true;}
  for(const a of world.actors){const items=outfits[a.f.h]||{},title=PLAY_TITLES.forLevel(progress[a.f.h]?.level||1),signature=JSON.stringify([items,title.id,world.team.color1,world.team.color2]);if(a.root.userData.labOutfit?.signature===signature)continue;clear(a);a.root.userData.labTitle=title.label;const owned=new Set(),nodes=[],own=o=>(owned.add(o),o),mat=c=>own(new T.MeshStandardMaterial({color:new T.Color(c).convertSRGBToLinear(),roughness:.8})),club=mat(world.team.color1||'#27764e'),white=mat(world.team.color2||'#f2ead2'),gold=mat('#e9c34b'),head=a.avatar.getObjectByName('head')||a.avatar,torso=a.avatar.getObjectByName('torso')||a.avatar;
   const add=(g,m,x,y,z,parent)=>{const o=new T.Mesh(own(g),m);o.position.set(x,y,z);parent.add(o);nodes.push(o);return o;};
   if(title.id==='lenda'&&a.f.role!=='Presidente'){add(new T.CylinderGeometry(.24,.22,.075,10),gold,0,.34,0,head);for(let i=0;i<5;i++){const q=i*Math.PI*2/5;add(new T.ConeGeometry(.065,.13,4),gold,Math.cos(q)*.2,.43,Math.sin(q)*.2,head);}}
   if(items.cap==='cap'){const cap=add(new T.SphereGeometry(.23,10,6,0,Math.PI*2,0,Math.PI/2),club,0,.334,0,head);cap.name='lab-cap';cap.scale.y=.5;add(new T.BoxGeometry(.34,.022,.20),club,0,.333,.16,head);add(new T.BoxGeometry(.07,.035,.012),gold,0,.375,.222,head);}
   if(items.scarf==='scarf'){add(new T.CylinderGeometry(.14,.14,.065,10),club,0,.165,.025,torso).name='lab-scarf';add(new T.BoxGeometry(.075,.24,.03),club,-.065,.06,.086,torso);for(const y of [.015,.07,.12])add(new T.BoxGeometry(.078,.024,.034),white,-.065,y,.088,torso);}
   if(items.shirt==='shirt'){add(new T.BoxGeometry(.245,.035,.024),gold,0,.09,.082,torso).name='lab-shirt';add(new T.BoxGeometry(.245,.024,.024),white,0,.055,.084,torso);}
   let flagPivot=null;
   if(items.flag){const special=items.flag==='streak-flag',pole=add(new T.CylinderGeometry(.065,.065,6.8,6),white,1.5,3.5,.2,a.root);pole.name='lab-flag-pole';flagPivot=new T.Group();flagPivot.name='lab-flag-cloth';flagPivot.position.set(1.5,6.1,.2);a.root.add(flagPivot);nodes.push(flagPivot);const cloth=mat(special?'#e9c34b':world.team.color1||'#27764e');cloth.side=T.DoubleSide;const flag=add(new T.BoxGeometry(3.4,2.1,.055),cloth,1.7,0,0,flagPivot);flag.name='lab-flag';add(new T.BoxGeometry(3.38,.3,.065),white,1.7,-.1,.002,flagPivot);add(new T.BoxGeometry(3.4,.08,.07),gold,1.7,1.02,0,flagPivot);}
   a.root.userData.labOutfit={nodes,owned,signature,flagPivot};
  }
 }
 function update(T,world,camera){const local=world.labFlagVector||(world.labFlagVector=new T.Vector3());for(const a of world.actors){const pivot=a.root.userData.labOutfit?.flagPivot;if(!pivot)continue;camera.getWorldPosition(local);a.root.worldToLocal(local);pivot.rotation.y=Math.atan2(local.x-pivot.position.x,local.z-pivot.position.z);}}
 root.ARENA_LAB_COSMETICS={apply,update};
})(window);
