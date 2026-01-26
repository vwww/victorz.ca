(()=>{"use strict";var e={},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}function r(e){return document.getElementById(e)}o.rv=()=>"1.7.3",o.ruid="bundler=rspack@1.7.3";let i=`
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
`,a=`
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
`,c=r("rndvid");class n{canvas;static displayName;context;constructor(e,t){this.canvas=e;const o=e.getContext(t);if(!o)throw n.rendererNotSupported(t);this.context=o}static rendererNotSupported(e){let t=`renderer not supported: ${e}`;return alert(t),Error(t)}}class s extends n{lTime;initialTime;constructor(e,t,o,r){function i(e,t){let o=a.createShader(e);if(!o)throw Error("failed to create shader");if(a.shaderSource(o,t),a.compileShader(o),!a.getShaderParameter(o,a.COMPILE_STATUS))throw console.error(a.getShaderInfoLog(o)),console.log(t),a.deleteShader(o),Error("failed to compile shader");return o}super(e,t);const a=this.context,c=i(a.VERTEX_SHADER,o),n=i(a.FRAGMENT_SHADER,r),l=a.createProgram();if(!l)throw Error("failed to create program");if(a.attachShader(l,c),a.attachShader(l,n),a.linkProgram(l),!a.getProgramParameter(l,a.LINK_STATUS))throw console.error(a.getProgramInfoLog(l)),a.deleteProgram(l),Error("failed to link program");a.useProgram(l),this.lTime=a.getUniformLocation(l,"iTime"),this.initialTime=s.currentTime();const d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),a.STATIC_DRAW);const h=a.getAttribLocation(l,"pos");a.vertexAttribPointer(h,2,a.FLOAT,!1,0,0),a.enableVertexAttribArray(h)}render(){let e=this.context;e.uniform1f(this.lTime,(s.currentTime()-this.initialTime)/1e3),e.viewport(0,0,this.canvas.width,this.canvas.height),e.drawArrays(e.TRIANGLE_STRIP,0,4)}static currentTime(){return(performance||Date).now()}}class l extends s{constructor(e,t){const o=`#version 300 es
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
    `+t)}}let d=[class extends n{static displayName="2d WebCrypto";constructor(e){super(e,"2d")}render(){let e=new Uint8Array(Math.min(65536,this.canvas.width*this.canvas.height*3)),t=65536,o=this.context.createImageData(this.canvas.width,this.canvas.height);for(let r=(this.canvas.width*this.canvas.height<<2)-1;r;--r){let i=255;3&~r&&(65536===t&&(t=0,crypto.getRandomValues(e)),i=e[t++]),o.data[r]=i}this.context.putImageData(o,0,0)}},class extends n{static displayName="2d Math.random";constructor(e){super(e,"2d")}render(){let e=this.context.createImageData(this.canvas.width,this.canvas.height);for(let t=(this.canvas.width*this.canvas.height<<2)-1;t;--t)e.data[t]=3&~t?256*Math.random()|0:255;this.context.putImageData(e,0,0)}},class extends s{static displayName="webgl";constructor(e){const t=`
    #ifdef GL_ES
      precision highp float;
      precision highp int;
    #endif
    `;super(e,"webgl",t+"attribute vec2 pos; void main() { gl_Position = vec4(pos.xy,0.0,1.0); }",t+`
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
    `+i)}},class extends l{static displayName="webgl2";constructor(e){super(e,i)}},class extends l{static displayName="webgl2 alt";constructor(e){super(e,a)}}];function h(){if(window.innerWidth===window.screen.width&&window.innerHeight===window.screen.height)c.width=window.innerWidth,c.height=window.innerHeight;else{c.width=1,c.height=1;let e=c.parentNode,t=e.clientWidth,o=e.clientHeight;c.width=t*window.devicePixelRatio,c.height=o*window.devicePixelRatio}}document.addEventListener("DOMContentLoaded",function(){r("selectRendererGroup").append(...d.map((e,t)=>{let o=document.createElement("button");return o.innerText=e.displayName,o.className=`w-${t?50:100} btn btn-outline-${t?"secondary":"primary"}`,o.onclick=()=>{r("selectRenderer").className="d-none",r("selectedRenderer").className="",c.className="";let t=new e(c);c.addEventListener("click",()=>{c.requestFullscreen().then(h).catch(()=>{alert("fullscreen failed")})}),h();let o=()=>{window.requestAnimationFrame(o),t.render()};o()},o}))}),window.onresize=h})();