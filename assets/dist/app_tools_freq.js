(()=>{"use strict";var t={186:function(t,e,r){r("1"),r("86");var n=r("2"),o=r("91");function c(t,e){let r=function(t,e){let r=function(t,e){let{set:r,subscribe:n}=(0,o.fZ)(t,void 0);return{get:()=>t,set(e){r(t=e)},subscribe:n,update(e){r(t=e(t))}}}(e);return{...r,useLocalStorage:()=>{if(!window.localStorage)return;let e=localStorage.getItem(t);null!==e&&r.set("undefined"===e?void 0:JSON.parse(e)),r.subscribe(e=>{void 0===e?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(e))})}}}(t,e);return r.useLocalStorage(),r}function i(t,e,r,o,c,i,a,d,l,s,u,v,m){if(n.PBf(r,e())){let t=Date.now();n.GID(c,t-i()),n.GID(a,t),n.GID(l,t-s()),n.GID(m,v()+1/o())}else n.GID(u,n.GID(a,Date.now())),n.GID(m,0)}function a(t,e,r){n.GID(r,-1)}var d=n.XKW("<h2>Add two events!</h2>"),l=n.XKW("<h2>Add another event!</h2>"),s=n.XKW('<table class="table table-striped table-bordered table-hover caption-top w-auto"><caption> </caption><thead><tr><th scope="col">Quantity</th><th scope="col">s</th><th scope="col">/s</th><th scope="col">/min</th></tr></thead><tbody><tr><th scope="row">Last</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr><tr><th scope="row">Avg Time</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr><tr><th scope="row">Avg Freq</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr><tr><th scope="row">Sum Time</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr><tr><th scope="row">Sum Freq</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr></tbody></table>'),u=n.XKW('<div class="btn-group d-flex mb-3" role="group"><button class="btn btn-outline-primary">Add Event</button> <button class="btn btn-outline-secondary">Reset</button></div> <!>',1);n.clJ(["click"]);var v=r("71");!function(t){let e=document.getElementById("app"),r=(0,v.LI)(t,{target:e});document.getElementById("appLoading")?.remove()}(function(t,e){n.VFu(e,!1);let r=n.hyl(),o=()=>n.hPL(h,"$intervalCount",r),v=()=>n.hPL(x,"$lastDelay",r),m=()=>n.hPL(U,"$sumTime",r),f=()=>n.hPL(b,"$sumFreq",r),h=c("tool/freq/intervalCount",-1),p=c("tool/freq/startTime",0),w=c("tool/freq/prevTime",0),x=c("tool/freq/lastDelay",0),U=c("tool/freq/sumTime",0),b=c("tool/freq/sumFreq",0);n.S1n();var O=u(),B=n.VHm(O),J=n.iUc(B);J.__click=[i,o,h,v,x,()=>n.hPL(w,"$prevTime",r),w,m,U,()=>n.hPL(p,"$startTime",r),p,f,b],n.J9n(J,2).__click=[a,o,h],n.mcB(B);var _=n.J9n(B,2),g=t=>{var e=d();n.R3I(t,e)},F=t=>{var e=n.UI8(),r=n.VHm(e),c=t=>{var e=l();n.R3I(t,e)},i=t=>{var e=s();let r=n.UXX(()=>m()/o()),c=n.UXX(()=>f()/o());var i=n.iUc(e),a=n.iUc(i);n.mcB(i);var d=n.J9n(i,2),l=n.iUc(d),u=n.J9n(n.iUc(l)),h=n.iUc(u,!0);n.OwZ(()=>n.u7_(h,(.001*v()).toFixed(3))),n.mcB(u);var p=n.J9n(u),w=n.iUc(p,!0);n.OwZ(()=>n.u7_(w,(1e3/v()).toFixed(3))),n.mcB(p);var x=n.J9n(p),U=n.iUc(x,!0);n.OwZ(()=>n.u7_(U,(6e4/v()).toFixed(3))),n.mcB(x),n.mcB(l);var b=n.J9n(l),O=n.J9n(n.iUc(b)),B=n.iUc(O,!0);n.OwZ(()=>n.u7_(B,(.001*n.U2M(r)).toFixed(3))),n.mcB(O);var J=n.J9n(O),_=n.iUc(J,!0);n.OwZ(()=>n.u7_(_,(1e3/n.U2M(r)).toFixed(3))),n.mcB(J);var g=n.J9n(J),F=n.iUc(g,!0);n.OwZ(()=>n.u7_(F,(6e4/n.U2M(r)).toFixed(3))),n.mcB(g),n.mcB(b);var I=n.J9n(b),Z=n.J9n(n.iUc(I)),y=n.iUc(Z,!0);n.OwZ(()=>n.u7_(y,(.001/n.U2M(c)).toFixed(3))),n.mcB(Z);var D=n.J9n(Z),S=n.iUc(D,!0);n.OwZ(()=>n.u7_(S,(1e3*n.U2M(c)).toFixed(3))),n.mcB(D);var q=n.J9n(D),L=n.iUc(q,!0);n.OwZ(()=>n.u7_(L,(6e4*n.U2M(c)).toFixed(3))),n.mcB(q),n.mcB(I);var k=n.J9n(I),P=n.J9n(n.iUc(k)),G=n.iUc(P,!0);n.OwZ(()=>n.u7_(G,(.001*m()).toFixed(3))),n.mcB(P);var T=n.J9n(P),X=n.iUc(T,!0);n.OwZ(()=>n.u7_(X,(1e3/m()).toFixed(3))),n.mcB(T);var $=n.J9n(T),M=n.iUc($,!0);n.OwZ(()=>n.u7_(M,(6e4/m()).toFixed(3))),n.mcB($),n.mcB(k);var R=n.J9n(k),A=n.J9n(n.iUc(R)),C=n.iUc(A,!0);n.OwZ(()=>n.u7_(C,(.001/f()).toFixed(3))),n.mcB(A);var j=n.J9n(A),E=n.iUc(j,!0);n.OwZ(()=>n.u7_(E,(1e3*f()).toFixed(3))),n.mcB(j);var K=n.J9n(j),W=n.iUc(K,!0);n.OwZ(()=>n.u7_(W,(6e4*f()).toFixed(3))),n.mcB(K),n.mcB(R),n.mcB(d),n.mcB(e),n.OwZ(()=>n.u7_(a,`Count of intervals = ${o()??""}`)),n.R3I(t,e)};n.if(r,t=>{o()?t(i,!1):t(c)},!0),n.R3I(t,e)};n.if(_,t=>{0>o()?t(g):t(F,!1)}),n.R3I(t,O),n.Swx()})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.m=t,r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},(()=>{var t=[];r.O=function(e,n,o,c){if(n){c=c||0;for(var i=t.length;i>0&&t[i-1][2]>c;i--)t[i]=t[i-1];t[i]=[n,o,c];return}for(var a=1/0,i=0;i<t.length;i++){for(var n=t[i][0],o=t[i][1],c=t[i][2],d=!0,l=0;l<n.length;l++)(!1&c||a>=c)&&Object.keys(r.O).every(function(t){return r.O[t](n[l])})?n.splice(l--,1):(d=!1,c<a&&(a=c));if(d){t.splice(i--,1);var s=o();void 0!==s&&(e=s)}}return e}})(),r.rv=function(){return"1.1.8"},(()=>{var t={app_tools_freq:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o=n[0],c=n[1],i=n[2],a,d,l=0;if(o.some(function(e){return 0!==t[e]})){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(i)var s=i(r)}for(e&&e(n);l<o.length;l++)d=o[l],r.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return r.O(s)},n=self.webpackChunkvwww=self.webpackChunkvwww||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.ruid="bundler=rspack@1.1.8";var n=r.O(void 0,["1","22","9","12","62","61"],function(){return r("186")});n=r.O(n)})();