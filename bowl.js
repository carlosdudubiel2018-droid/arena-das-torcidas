/* One open stadium profile for all clubs. Coordinates use the existing 70 × 43 pitch. */
(function(){
  function build(T, level, primary, secondary) {
    const mega=level===4, segments=64, tiers=mega?3:2, rows=5;
    const rgb=c=>new T.Color(c).convertSRGBToLinear();
    const base=rgb(primary), trim=rgb(secondary), ivory=rgb('#ebe5d6');
    const colors={
      facade:base.clone().multiplyScalar(.66), seat:base.clone().lerp(ivory,.07),
      riser:base.clone().multiplyScalar(.77), concourse:trim.clone().lerp(rgb('#20252c'),.48),
      trim:trim.clone().lerp(base,.12), plinth:rgb('#606869'), pillar:base.clone().lerp(trim,.34)
    };
    const positions=[], inks=[], normals=[], points=[];
    function pt(r,y,i) {
      const a=i*2*Math.PI/segments, c=Math.cos(a), s=Math.sin(a);
      return [r[0]*Math.sign(c)*Math.pow(Math.abs(c),.65),y,r[1]*Math.sign(s)*Math.pow(Math.abs(s),.65)-7];
    }
    function face(a,b,c,d,ink) {
      const u=new T.Vector3().fromArray(b).sub(new T.Vector3().fromArray(a));
      const v=new T.Vector3().fromArray(c).sub(new T.Vector3().fromArray(a));
      const n=u.cross(v).normalize();
      points.push({vertices:[a,b,c,d],ink,n});
      for(const p of [a,b,c,a,c,d]){positions.push(...p);inks.push(ink.r,ink.g,ink.b);normals.push(n.x,n.y,n.z);}
    }
    function ring(inner,y,outer,h,paint,reverse=false) {
      for(let i=0;i<segments;i++){
        const a=pt(inner,y,i), b=pt(inner,y,i+1), c=pt(outer,h,i+1), d=pt(outer,h,i);
        const ink=typeof paint==='function'?paint(i):paint;
        if(reverse) face(d,c,b,a,ink); else face(a,b,c,d,ink);
      }
    }
    const inner=[47,33], outer=[47+tiers*8,33+tiers*7];
    let r=inner, y=1.1;
    ring(r,.72,r,y,colors.plinth);
    const aisles=colors.seat.clone().lerp(ivory,.38);
    for(let tier=0;tier<tiers;tier++){
      for(let row=0;row<rows;row++){
        const next=[r[0]+1.22,r[1]+1.04];
        ring(r,y,r,y+.94,colors.riser);
        ring(r,y+.94,next,y+.94,i=>i%8===0?aisles:colors.seat);
        r=next;y+=.94;
      }
      const walk=[inner[0]+(tier+1)*8,inner[1]+(tier+1)*7];
      ring(r,y,walk,y,colors.concourse);
      ring(walk,y,walk,y+.45,colors.trim);
      y+=.45;r=walk;
      if(tier<tiers-1){ring(r,y,r,y+2.4,colors.concourse);y+=2.4;}
    }
    const rim=[outer[0]+.9,outer[1]+.9], foot=[rim[0]+2.3,rim[1]+2.3];
    ring(outer,y,rim,y,colors.seat);
    ring(rim,.7,rim,y,colors.facade,true);
    ring(rim,.7,foot,.7,colors.plinth);
    const ridge=[rim[0]+.19,rim[1]+.19];
    const bands=mega?[.95,6,13.5]:[.95,5.6];
    for(const band of bands) ring(ridge,band,ridge,band+.45,colors.trim,true);
    if(mega){
      const glow=base.clone().lerp(ivory,.68);
      ring(ridge,y-.48,ridge,y-.05,glow,true);
      for(let i=0;i<segments;i+=4){
        const a=pt(rim,.75,i-.33),b=pt(rim,.75,i+.33),c=pt(foot,.75,i+.26),d=pt(foot,.75,i-.26);
        const cap=p=>[p[0],y+.2,p[2]];
        face(d,c,cap(c),cap(d),colors.pillar);
        face(c,b,cap(b),cap(c),colors.pillar);
        face(a,d,cap(d),cap(a),colors.pillar);
        face(cap(d),cap(c),cap(b),cap(a),colors.trim);
      }
    }
    const geometry=new T.BufferGeometry();
    geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));
    geometry.setAttribute('color',new T.Float32BufferAttribute(inks,3));
    geometry.setAttribute('normal',new T.Float32BufferAttribute(normals,3));
    return {geometry, points};
  }
  let renderer;
  const photos=new Map();
  function photo(T,level,primary,secondary,width=256,background=false){
    const key=JSON.stringify([level,primary,secondary,width,background]);
    if(photos.has(key))return photos.get(key);
    renderer ||= new T.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true,powerPreference:'low-power'});
    renderer.outputEncoding=T.sRGBEncoding;
    renderer.setSize(width,Math.round(width/1.6),false);
    renderer.setClearColor(0xdbe7dc,background?1:0);
    const scene=new T.Scene();
    const {geometry}=build(T,level,primary,secondary);
    scene.add(new T.Mesh(geometry,new T.MeshStandardMaterial({vertexColors:true,roughness:.89})));
    const mega=level===4;
    const ground=new T.Mesh(new T.CircleGeometry(1,64),new T.MeshStandardMaterial({color:0x617860}));
    ground.rotation.x=-Math.PI/2;ground.scale.set(mega?77:69,mega?60:53,1);ground.position.set(0,.45,-7);scene.add(ground);
    const pitch=document.createElement('canvas');pitch.width=512;pitch.height=312;
    const g=pitch.getContext('2d');
    for(let i=0;i<12;i++){g.fillStyle=i%2?'#31814e':'#3b9257';g.fillRect(i*512/12,0,44,312);}
    g.strokeStyle='#e7f3d9';g.lineWidth=2.8;
    g.strokeRect(6,6,500,300);g.beginPath();g.moveTo(256,6);g.lineTo(256,306);g.stroke();g.beginPath();g.arc(256,156,43,0,Math.PI*2);g.stroke();
    for(const x of [6,428])g.strokeRect(x,72,78,168);
    for(const x of [6,478])g.strokeRect(x,119,28,74);
    const tex=new T.CanvasTexture(pitch);tex.encoding=T.sRGBEncoding;
    const field=new T.Mesh(new T.PlaneGeometry(70,43),new T.MeshBasicMaterial({map:tex}));field.rotation.x=-Math.PI/2;field.position.set(0,.82,-7);scene.add(field);
    scene.add(new T.HemisphereLight(0xf3f7ff,0x9ba88e,1.02));
    const sun=new T.DirectionalLight(0xffeddb,1);sun.position.set(-110,180,120);scene.add(sun);
    const half=mega?56:53;
    const camera=new T.OrthographicCamera(-half*1.6,half*1.6,half,-half,.1,700);
    camera.position.set(111,198,223);camera.lookAt(0,mega?8:5,-7);
    renderer.render(scene,camera);
    const url=renderer.domElement.toDataURL('image/webp',.89);
    scene.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});tex.dispose();renderer.renderLists.dispose();
    photos.set(key,url);if(photos.size>36)photos.delete(photos.keys().next().value);
    return url;
  }

  window.ARENA_OVAL={build,photo};
})();
