(()=>{"use strict";function e(e){return document.getElementById(e)}let t=`
// modified from https://www.shadertoy.com/view/ltB3zD
precision lowp float;

const float PHI = 1.61803398874989484820459;

float gold_noise(in vec2 xy, in float seed) {
  return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);
}

void mainImage(out vec4 rgba, in vec2 xy) {
  float seed = fract(iTime);
  rgba = vec4(
    gold_noise(xy, seed+0.1),
    gold_noise(xy, seed+0.2),
    gold_noise(xy, seed+0.3),
    1 // gold_noise(xy, seed+0.4)
  );
}
`,o=`
// unknown source, but works on shadertoy.com

float rand_float(inout uvec2 rvec) {
  rvec.x = 36969u * (rvec.x & 65535u) + (rvec.x >> 16u);
  rvec.y = 18000u * (rvec.y & 65535u) + (rvec.y >> 16u);
  return float((rvec.x << 16u) + rvec.y) / float(0xFFFFFFFFu);
}

void mainImage(out vec4 color, in vec2 coord) {
  vec2 offset = vec2(iTime,0.0);

  uvec2 rvec = uvec2(397.6432*(coord.xy+offset)) ^ uvec2(32.9875*(coord.yx+offset));

  color = vec4(rand_float(rvec), rand_float(rvec), rand_float(rvec), 1.0);
}
`,r=e("rndvid");class i{canvas;static displayName;context;constructor(e,t){this.canvas=e;const o=e.getContext(t);if(!o)throw i.rendererNotSupported(t);this.context=o}static rendererNotSupported(e){let t=`renderer not supported: ${e}`;return alert(t),Error(t)}}class a extends i{lTime;initialTime;constructor(e,t,o,r){function i(e,t){let o=c.createShader(e);if(!o)throw Error("failed to create shader");if(c.shaderSource(o,t),c.compileShader(o),!c.getShaderParameter(o,c.COMPILE_STATUS))throw console.error(c.getShaderInfoLog(o)),console.log(t),c.deleteShader(o),Error("failed to compile shader");return o}super(e,t);const c=this.context,n=i(c.VERTEX_SHADER,o),s=i(c.FRAGMENT_SHADER,r),l=c.createProgram();if(!l)throw Error("failed to create program");if(c.attachShader(l,n),c.attachShader(l,s),c.linkProgram(l),!c.getProgramParameter(l,c.LINK_STATUS))throw console.error(c.getProgramInfoLog(l)),c.deleteProgram(l),Error("failed to link program");c.useProgram(l),this.lTime=c.getUniformLocation(l,"iTime"),this.initialTime=a.currentTime();const d=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,d),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),c.STATIC_DRAW);const h=c.getAttribLocation(l,"pos");c.vertexAttribPointer(h,2,c.FLOAT,!1,0,0),c.enableVertexAttribArray(h)}render(){let e=this.context;e.uniform1f(this.lTime,(a.currentTime()-this.initialTime)/1e3),e.viewport(0,0,this.canvas.width,this.canvas.height),e.drawArrays(e.TRIANGLE_STRIP,0,4)}static currentTime(){return(performance||Date).now()}}class c extends a{constructor(e,t){const o=`#version 300 es
    #ifdef GL_ES
      precision highp float;
      precision highp int;
      precision mediump sampler3D;
    #endif
    `;super(e,"webgl2",o+"layout(location = 0) in vec2 pos; void main() { gl_Position = vec4(pos.xy,0.0,1.0); }",o+`
    uniform float iTime;
    void mainImage(out vec4 c, in vec2 f);
    out vec4 shadertoy_out_color;
    void main() {
      /*
      shadertoy_out_color = vec4(1.0,1.0,1.0,1.0);
      vec4 color = vec4(1e20);
      mainImage( color, gl_FragCoord.xy );
      if(shadertoy_out_color.x<0.0) color=vec4(1.0,0.0,0.0,1.0);
      if(shadertoy_out_color.y<0.0) color=vec4(0.0,1.0,0.0,1.0);
      if(shadertoy_out_color.z<0.0) color=vec4(0.0,0.0,1.0,1.0);
      if(shadertoy_out_color.w<0.0) color=vec4(1.0,1.0,0.0,1.0);
      shadertoy_out_color = vec4(color.xyz,1.0);
      */
      mainImage( shadertoy_out_color, gl_FragCoord.xy );
    }
    `+t)}}let n=[class extends i{static displayName="2d WebCrypto";constructor(e){super(e,"2d")}render(){let e=new Uint8Array(Math.min(65536,this.canvas.width*this.canvas.height*3)),t=65536,o=this.context.createImageData(this.canvas.width,this.canvas.height);for(let r=(this.canvas.width*this.canvas.height<<2)-1;r;--r){let i=255;3&~r&&(65536===t&&(t=0,crypto.getRandomValues(e)),i=e[t++]),o.data[r]=i}this.context.putImageData(o,0,0)}},class extends i{static displayName="2d Math.random";constructor(e){super(e,"2d")}render(){let e=this.context.createImageData(this.canvas.width,this.canvas.height);for(let t=(this.canvas.width*this.canvas.height<<2)-1;t;--t)e.data[t]=3&~t?256*Math.random()|0:255;this.context.putImageData(e,0,0)}},class extends a{static displayName="webgl";constructor(e){const o=`
    #ifdef GL_ES
      precision highp float;
      precision highp int;
    #endif
    `;super(e,"webgl",o+"attribute vec2 pos; void main() { gl_Position = vec4(pos.xy,0.0,1.0); }",o+`
    uniform float iTime;
    void mainImage(out vec4 c, in vec2 f);
    void main() {
      /*
      gl_FragColor = vec4(0.0,0.0,0.0,1.0);
      vec4 color = vec4(1e20);
      mainImage(color, gl_FragCoord.xy);
      color.w = 1.0;
      if(gl_FragColor.w<0.0) color=vec4(1.0,0.0,0.0,1.0);
      if(gl_FragColor.x<0.0) color=vec4(1.0,0.0,0.0,1.0);
      if(gl_FragColor.y<0.0) color=vec4(0.0,1.0,0.0,1.0);
      if(gl_FragColor.z<0.0) color=vec4(0.0,0.0,1.0,1.0);
      if(gl_FragColor.w<0.0) color=vec4(1.0,1.0,0.0,1.0);
      gl_FragColor = vec4(color.xyz,1.0);
      */
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
    `+t)}},class extends c{static displayName="webgl2";constructor(e){super(e,t)}},class extends c{static displayName="webgl2 alt";constructor(e){super(e,o)}}];function s(){if(window.innerWidth===window.screen.width&&window.innerHeight===window.screen.height)r.width=window.innerWidth,r.height=window.innerHeight;else{r.width=1,r.height=1;let e=r.parentNode,t=e.clientWidth,o=e.clientHeight;r.width=t*window.devicePixelRatio,r.height=o*window.devicePixelRatio}}document.addEventListener("DOMContentLoaded",function(){e("selectRendererGroup").append(...n.map((t,o)=>{let i=document.createElement("button");return i.innerText=t.displayName,i.className=`w-${o?50:100} btn btn-outline-${o?"secondary":"primary"}`,i.onclick=()=>{e("selectRenderer").className="d-none",e("selectedRenderer").className="",r.className="";let o=new t(r);r.addEventListener("click",()=>{r.requestFullscreen().then(s).catch(()=>{alert("fullscreen failed")})}),s();let i=()=>{window.requestAnimationFrame(i),o.render()};i()},i}))}),window.onresize=s})();