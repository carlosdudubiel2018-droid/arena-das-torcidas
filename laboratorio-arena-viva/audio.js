/* Goal: paulw2k, Football-crowd-GOAL.wav, CC BY 4.0; see audio-sources.json. */
window.ARENA_AUDIO=(()=>{
 let ctx,master,bed,cheer,loading,on=false,active=false;
 const playing=new Set();
 function track(s,...nodes){playing.add(s);s.onended=()=>{playing.delete(s);s.disconnect();nodes.forEach(n=>n.disconnect());};return s;}
 function stop(){for(const s of playing){try{s.stop();}catch{}}playing.clear();}
 function available(){return on&&active&&ctx?.state==='running'&&!document.hidden;}
 function init(){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;ctx=new AC();master=ctx.createGain();master.gain.value=0;const limiter=ctx.createDynamicsCompressor();limiter.threshold.value=-6;limiter.ratio.value=8;master.connect(limiter);limiter.connect(ctx.destination);
 const b=ctx.createBuffer(1,ctx.sampleRate*3,ctx.sampleRate),d=b.getChannelData(0);let last=0;for(let i=0;i<d.length;i++){last=(last+Math.random()*.16-.08)/1.025;d[i]=last;}bed=ctx.createBufferSource();bed.buffer=b;bed.loop=true;const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=600;f.Q.value=.65;const g=ctx.createGain();g.gain.value=.07;bed.connect(f);f.connect(g);g.connect(master);bed.start();return true;}
 function load(){if(cheer)return Promise.resolve();if(!loading)loading=fetch('goal-crowd.mp3?v=6').then(r=>{if(!r.ok)throw Error('crowd');return r.arrayBuffer();}).then(b=>ctx.decodeAudioData(b)).then(b=>{cheer=b;}).finally(()=>{loading=null;});return loading;}
 async function toggle(){if(!ctx&&!init())return null;try{await ctx.resume();if(!on)await load();}catch{return null;}on=!on;if(!on)stop();master.gain.setTargetAtTime(on&&active&&!document.hidden?.8:0,ctx.currentTime,.08);return on;}
 function tone(f,volume,duration,type='sine',at=ctx.currentTime){const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(.0001,at);g.gain.linearRampToValueAtTime(volume,at+.018);g.gain.setValueAtTime(volume,at+duration*.65);g.gain.exponentialRampToValueAtTime(.0001,at+duration);o.connect(g);g.connect(master);track(o,g);o.start(at);o.stop(at+duration+.02);return o;}
 function whistle(){if(!available())return;const at=ctx.currentTime;for(const [f,v] of [[2850,.075],[3200,.048],[3470,.024]]){const o=tone(f,v,.43,'sine',at);o.frequency.setValueAtTime(f*.97,at);o.frequency.linearRampToValueAtTime(f,at+.055);o.frequency.linearRampToValueAtTime(f*.985,at+.42);}}
 function goal(){if(!available()||!cheer)return;const s=ctx.createBufferSource(),g=ctx.createGain();s.buffer=cheer;g.gain.value=.95;s.connect(g);g.connect(master);track(s,g);s.start();}
 function kick(){if(!available())return;const t=ctx.currentTime,s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=bed.buffer;f.type='lowpass';f.frequency.value=420;g.gain.setValueAtTime(.8,t);g.gain.exponentialRampToValueAtTime(.001,t+.13);s.connect(f);f.connect(g);g.connect(master);track(s,f,g);s.start();s.stop(t+.15);}
 function post(){if(!available())return;for(const f of [540,1190])tone(f,.08,.23);}
 function pause(){active=false;stop();if(ctx)master.gain.setTargetAtTime(0,ctx.currentTime,.04);}
 function resume(){active=true;if(ctx&&on&&!document.hidden){ctx.resume().catch(()=>{});master.gain.setTargetAtTime(.8,ctx.currentTime,.08);}}
 document.addEventListener('visibilitychange',()=>{if(!ctx)return;if(document.hidden)stop();master.gain.setTargetAtTime(on&&active&&!document.hidden?.8:0,ctx.currentTime,.05);});
 return {toggle,post,kick,goal,whistle,pause,resume};
})();
