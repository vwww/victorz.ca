(()=>{"use strict";var t={207:function(t,e,n){let r;function o(t){var e;return e=t,document.getElementById(e)}var a,u=n("208"),i=n.n(u);n("96"),n("97"),n("98");function l(){let t=Date.parse(o("startDate").value+""),e=t+3156e7*+(o("terms").value??0),n=+(o("principal").value??0),a=1+ +(o("interest").value??0)/100,u=t,i=n,l=[[t,n]];for(;u<e;)(u+=Math.max(18e5,3156e7*Math.log(1+.01/i)/Math.log(a)))>e&&(u=e),i=n*Math.pow(a,(u-t)/3156e7),l.push([u,i]);r.setData(l)}a=function(){o("plotDataButton").onclick=l;let t=i().getOptions().colors,e={credits:{enabled:!1},title:{text:"Compound Interest Graph"},yAxis:{type:"logarithmic"},rangeSelector:{buttons:[{type:"hour",count:1,text:"1h"},{type:"day",count:1,text:"1d"},{type:"week",count:1,text:"1w"},{type:"week",count:2,text:"2w"},{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],selected:9,inputEnabled:!1},series:[{name:"Value",type:"area",tooltip:{valueDecimals:2},fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,t[0]],[1,new(i()).Color(t[0]).setOpacity(0).get("rgba")]]},threshold:null},{type:"flags",onSeries:"dataseries",shape:"circlepin",width:16,data:[{x:Date.now(),title:"!",text:"Now"}]}]};i().stockChart("container",e,t=>{r=t.series[0],l(),window.setInterval(function(){t.series[1].data[0].update({x:Date.now()})},1e3)})},document.addEventListener("DOMContentLoaded",a)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},(()=>{var t=[];n.O=function(e,r,o,a){if(r){a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a];return}for(var i=1/0,u=0;u<t.length;u++){for(var r=t[u][0],o=t[u][1],a=t[u][2],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every(function(t){return n.O[t](r[c])})?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){t.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}})(),n.rv=function(){return"1.1.8"},(()=>{var t={misc_compound:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o=r[0],a=r[1],u=r[2],i,l,c=0;if(o.some(function(e){return 0!==t[e]})){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var s=u(n)}for(e&&e(r);c<o.length;c++)l=o[c],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(s)},r=self.webpackChunkvwww=self.webpackChunkvwww||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.ruid="bundler=rspack@1.1.8";var r=n.O(void 0,["18","70"],function(){return n("207")});r=n.O(r)})();