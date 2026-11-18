/* Camera translation only. The official score projection remains untouched. */
window.ISLANDS_CAMERA={x:0,y:0,zoom:1,scale:1};
window.ISLANDS_VIEW=function(v,box,zoom){const c=window.ISLANDS_CAMERA;if(c.zoom!==zoom&&c.scale>1){const ratio=v.scale/c.scale;c.x*=ratio;c.y*=ratio;}c.scale=v.scale;c.zoom=zoom;v.cx+=c.x;v.cy+=c.y;};
