const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const vendor={console};vm.runInNewContext(fs.readFileSync(__dirname+'/../assets/vendor/three-r128.min.js','utf8'),vendor);const T=vendor.THREE,w={};for(const f of ['treino.js','ball-physics.js'])vm.runInNewContext(fs.readFileSync(__dirname+'/'+f,'utf8'),{window:w,Math});const P=w.ARENA_PENALTY,B=w.ARENA_BALL;
const ctx=new Proxy({},{get:(_,k)=>k==='measureText'?()=>({width:50}):()=>{}});
const env={window:{},ARENA_BALL:B,innerWidth:375,innerHeight:812,document:{createElement:()=>({width:0,height:0,getContext:()=>ctx})},Math,console};
vm.runInNewContext(fs.readFileSync(__dirname+'/penalty-arena.js','utf8'),env);
const arena=env.window.ARENA_PENALTY_SCENE(T,{id:'gremio',name:'Grêmio'},true);
for(const x of [-2.8,2.8]){
 const plan=B.resolve({...P.plan({x,y:1.2},.7,()=>0),hand:{x,y:1.2}});
 assert.equal(plan.outcome,'save');arena.reset();arena.animateShot(plan,.46+plan.saveTime);
 arena.keeper.root.updateWorldMatrix(true,true);
 const glove=arena.keeper.arms[x>0?0:1].hand.getWorldPosition(new T.Vector3()),hit=plan.events.find(e=>e.kind==='save');
 assert.ok(glove.distanceTo(new T.Vector3(hit.x,hit.y,hit.z))<.01,'visible glove must reach actual save contact');
}
assert.equal(P.plan({x:2,y:1},.59,()=>.5,[.58,.8]).perfect,true);
assert.equal(P.plan({x:2,y:1},.59,()=>.5).perfect,false);
arena.dispose();console.log('Gloves match saves on both sides; wider practice opening does not change standard difficulty.');

