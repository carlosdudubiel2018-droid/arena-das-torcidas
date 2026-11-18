/* Offline art only. The browser receives one compressed image, not this shader. */
window.WORLD_TERRAIN_ART={
 smoothRing(ring){const a=ring.slice(0,-1),out=[];for(let i=0;i<a.length;i++){const p=a[i],q=a[(i+1)%a.length];out.push([p[0]*.85+q[0]*.15,p[1]*.85+q[1]*.15],[p[0]*.15+q[0]*.85,p[1]*.15+q[1]*.85]);}out.push(out[0]);return out;},
 palette(mesh,T){
  const east=mesh.userData.east,vec=hex=>{const c=new T.Color(hex).convertSRGBToLinear();return`vec3(${c.r.toFixed(5)},${c.g.toFixed(5)},${c.b.toFixed(5)})`;};
  mesh.material.customProgramCacheKey=()=>east?'world-east-biomes-v1':'world-west-biomes-v1';
  mesh.material.onBeforeCompile=s=>{
   s.vertexShader='varying vec2 terrainPoint;\n'+s.vertexShader;
   s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nterrainPoint=vec2(position.x,-position.y);');
   s.fragmentShader=`varying vec2 terrainPoint;
float biome(vec2 p,vec2 c,vec2 r){return 1.0-smoothstep(.48,1.10,length((p-c)/r));}
`+s.fragmentShader;
   const coordinates=east?'vec2 ll=vec2(((11.0+(terrainPoint.x-11.0)/.5)+2.0)/.35-54.5,-terrainPoint.y/.175-14.0);':'vec2 ll=vec2(terrainPoint.x/.378-54.5,-terrainPoint.y/.378-14.0);';
   const west=`
// Broad transitions illustrate biomes; these are not administrative boundaries.
col=mix(col,${vec('#98b44e')},biome(ll,vec2(-50.,-15.),vec2(10.,11.))*.90);
col=mix(col,${vec('#2d7439')},biome(ll,vec2(-62.,-4.),vec2(15.,9.))*.96);
col=mix(col,${vec('#bfa267')},biome(ll,vec2(-40.,-9.),vec2(6.,7.))*.94);
col=mix(col,${vec('#a4c878')},biome(ll,vec2(-55.,-31.),vec2(8.,6.))*.95);
float wet=biome(ll,vec2(-57.,-18.),vec2(3.3,4.4));
col=mix(col,${vec('#63945c')},wet*.9);
float marsh=smoothstep(.36,.76,sin(ll.x*4.8+sin(ll.y*3.1))*.5+.5)*wet;
col=mix(col,${vec('#67afa5')},marsh*.74);
col=mix(col,${vec('#9caf7b')},biome(ll,vec2(-111.,50.),vec2(30.,20.))*.36);
`;
   const eastText=`
col=mix(col,${vec('#b4ad64')},biome(ll,vec2(22.,-18.),vec2(23.,15.))*.93);
col=mix(col,${vec('#42904b')},biome(ll,vec2(21.,0.),vec2(18.,9.))*.94);
col=mix(col,${vec('#dfc286')},biome(ll,vec2(14.,24.),vec2(35.,13.))*.99);
col=mix(col,${vec('#8eaf63')},biome(ll,vec2(15.,52.),vec2(35.,20.))*.55);
col=mix(col,${vec('#c0b07d')},biome(ll,vec2(72.,39.),vec2(35.,15.))*.68);
col=mix(col,${vec('#bd9f6a')},biome(ll,vec2(133.,-25.),vec2(18.,14.))*.74);
`;
   s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>\n${coordinates}\nvec3 col=diffuseColor.rgb;${east?eastText:west}
float grain=sin(ll.x*2.3+sin(ll.y*1.7))*sin(ll.y*2.5)*.025;
diffuseColor.rgb=col*(.98+grain);`);
  };
 },
 accents({T,scene,M,isLand,nodes,mat,dummy}){
  // A few compact canopy masses, not hundreds of individually drawn trees.
  const patches=[[-69,-3],[-65,1],[-65,-5],[-61,-2],[-60,-7],[-56,-2],[-54,-5],[-72,-6],[-67,-9],[17,1],[23,-2],[27,1]];
  const forest=new T.InstancedMesh(new T.DodecahedronGeometry(1,1),mat(0x286b39),patches.length*7);let count=0;
  for(let i=0;i<patches.length;i++){const east=patches[i][0]>0,scale=east?.5:1.08,c=M.point(patches[i],east);for(let j=0;j<7;j++){const a=j*2.4+i,x=c.x+Math.cos(a)*(.18+j*.035)*scale,z=c.z+Math.sin(a)*(.15+j*.027)*scale;if(!isLand(x,z)||nodes.some(n=>Math.hypot(n.x-x,n.z-z)<1.25))continue;dummy.position.set(x,.13*scale,z);dummy.scale.set((.32+(j%3)*.07)*scale,(.19+(j%2)*.07)*scale,.29*scale);dummy.rotation.set(0,a,0);dummy.updateMatrix();forest.setMatrixAt(count++,dummy.matrix);}}
  forest.count=count;forest.castShadow=forest.receiveShadow=true;scene.add(forest);
  const path=[[-73,-49],[-70,-36],[-69,-25],[-71,-17],[-76,-10],[-78,-1],[-74,7]],body=new T.InstancedMesh(new T.ConeGeometry(1,1,5),mat(0x8b8c79),60),snow=new T.InstancedMesh(new T.ConeGeometry(1,1,5),mat(0xf2f4e9),60);let mountains=0;
  for(let i=0;i<path.length-1;i++)for(let j=0;j<7;j++){const f=j/7,lon=path[i][0]*(1-f)+path[i+1][0]*f,lat=path[i][1]*(1-f)+path[i+1][1]*f,p=M.point([lon,lat]);if(!isLand(p.x,p.z)||nodes.some(n=>Math.hypot(n.x-p.x,n.z-p.z)<.85))continue;const h=.42+(j%3)*.13,r=.22+(j%2)*.06;dummy.position.set(p.x,h/2,p.z);dummy.scale.set(r,h,r*.82);dummy.rotation.set(0,i+j,0);dummy.updateMatrix();body.setMatrixAt(mountains,dummy.matrix);dummy.position.y=h*.855;dummy.scale.set(r*.29,h*.29,r*.82*.29);dummy.updateMatrix();snow.setMatrixAt(mountains++,dummy.matrix);}
  body.count=snow.count=mountains;body.castShadow=body.receiveShadow=true;scene.add(body,snow);
 }
};
