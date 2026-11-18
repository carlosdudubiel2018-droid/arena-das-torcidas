/* Test-shop accessories only. Does not modify official shirt assets or club state. */
(function(root){'use strict';
 function clear(a){const old=a.root.userData.labOutfit;if(!old)return;old.nodes.forEach(n=>n.parent?.remove(n));old.owned.forEach(o=>o.dispose());delete a.root.userData.labOutfit;}
 function apply(T,world,outfits){
  if(!world.labOutfitDispose){const dispose=world.dispose;world.dispose=()=>{world.actors.forEach(clear);dispose();};world.labOutfitDispose=true;}
  for(const a of world.actors){clear(a);const items=outfits[a.f.h];if(!items)continue;const owned=new Set(),nodes=[],own=o=>(owned.add(o),o),mat=c=>own(new T.MeshStandardMaterial({color:new T.Color(c).convertSRGBToLinear(),roughness:.8})),club=mat(world.team.color1||'#27764e'),white=mat(world.team.color2||'#f2ead2'),gold=mat('#e9c34b'),head=a.avatar.getObjectByName('head')||a.avatar,torso=a.avatar.getObjectByName('torso')||a.avatar;
   const add=(g,m,x,y,z,parent)=>{const o=new T.Mesh(own(g),m);o.position.set(x,y,z);parent.add(o);nodes.push(o);return o;};
   if(items.cap==='cap'){const cap=add(new T.SphereGeometry(.23,10,6,0,Math.PI*2,0,Math.PI/2),club,0,.334,0,head);cap.scale.y=.5;add(new T.BoxGeometry(.34,.022,.20),club,0,.333,.16,head);add(new T.BoxGeometry(.07,.035,.012),gold,0,.375,.222,head);}
   if(items.scarf==='scarf'){add(new T.CylinderGeometry(.113,.113,.042,10),club,0,.165,.025,torso);add(new T.BoxGeometry(.064,.18,.025),club,-.065,.06,.086,torso);for(const y of [.015,.07,.12])add(new T.BoxGeometry(.067,.017,.028),white,-.065,y,.088,torso);}
   if(items.shirt==='shirt'){add(new T.BoxGeometry(.19,.026,.014),gold,0,.09,.082,torso);add(new T.BoxGeometry(.19,.013,.014),white,0,.055,.084,torso);}
   if(items.flag){const special=items.flag==='streak-flag';add(new T.CylinderGeometry(.035,.035,3.5,5),white,1.3,2.1,0,a.root);const flag=add(new T.PlaneGeometry(1.45,.9),special?gold:club,2.03,3.35,0,a.root);flag.material.side=T.DoubleSide;add(new T.PlaneGeometry(1.35,.14),white,2.03,3.35,.008,a.root);}
   a.root.userData.labOutfit={nodes,owned};
  }
 }
 root.ARENA_LAB_COSMETICS={apply};
})(window);
