(()=>{"use strict";var e={203:function(e,t,s){var n,a,i,r,o;class c{x=0;y=0;xe=0;ye=0;constructor(){this.reset()}reset(){this.x=0,this.y=0,this.xe=0,this.ye=0}move(e){let t=Math.pow(.001,e/1e3);this.xe*=t,this.ye*=t}setServerLocation(e,t){this.xe+=this.x-e,this.ye+=this.y-t,this.x=e,this.y=t}}class h extends c{respawn(e){this.x=e?d:g,this.y=p,this.xe=0,this.ye=0}}class l extends c{name="";color="#7f0";score=0;ping=-1;respawn(e){this.reset(),this.x=e?d:g}}let d=.45,g=1.55,p=.5;(i=n||(n={}))[i.IN_PLAY=0]="IN_PLAY",i[i.WIN=1]="WIN",i[i.LOSS=2]="LOSS";class m{status=n.IN_PLAY;p1=new l;p2=new l;ball=new h;smoothDelay=1e3;hasServerOpponent=!1;constructor(){this.p1.respawn(!0),this.p2.respawn(!1),this.ball.respawn(!0)}update(e){this.smoothDelay=(4*this.smoothDelay+e)/5,e&&(this.ball.move(e),this.p1.move(e),this.p2.move(e))}getP1(){return this.p1}getP2(){return this.p2}getBall(){return this.ball}getStatus(){return this.status}getSmoothDelay(){return this.smoothDelay}getFPS(){return 1e3/Math.max(this.smoothDelay,.5)}hasOpponent(){return this.hasServerOpponent}setName(e){this.p1.name=e}setColor(e){this.p1.color=e}processServerDisconnect(){this.p1.ping=this.p2.ping=-1}processServerWelcome(e,t){this.p1.color=e,this.p1.name=t}processServerState(e,t,s,n,a,i){this.p1.setServerLocation(e,t),this.p2.setServerLocation(s,n),this.ball.setServerLocation(a,i)}processServerEnter(e,t){this.hasServerOpponent=!0,this.p1.score=this.p2.score=0,this.p2.color=e,this.p2.name=t}processServerLeave(){this.hasServerOpponent=!1}processServerWin(){this.p1.score++,this.status=n.WIN}processServerLose(){this.p2.score++,this.status=n.LOSS}processServerRoundStart(e){this.p1.respawn(!0),this.p2.respawn(!1),this.ball.respawn(e),this.status=n.IN_PLAY}processServerPingTimes(e,t){this.p1.ping=e,this.p2.ping=t}}function u(e){return"#"+("00000"+e.toString(16)).slice(-6)}(r=a||(a={}))[r.Connecting=0]="Connecting",r[r.Connected=1]="Connected",r[r.Disconnecting=2]="Disconnecting",r[r.Disconnected=3]="Disconnected",s("114");class f{game;state=a.Disconnected;connection;lastKeySent=-1;constructor(e){this.game=e}isConnected(){return this.readyState()!==a.Disconnected}readyState(){return this.state}connect(){this.disconnect(),this.state=a.Connecting;let e=e=>{console.log(e),this.disconnected()};PlayerIO.authenticate("slime-fd3iliszksmlav83stww","public",{userId:"guest"},{},t=>{this.state=a.Connected,t.multiplayer.developmentServer="localhost:8184";let s=()=>{t.multiplayer.createJoinRoom("$service-room$","match",!1,null,null,e=>{this.connection=e,e.addMessageCallback("m",t=>{n(t.getString(0)),e.disconnect()})},e)},n=n=>{t.multiplayer.createJoinRoom(n,"slime",!0,null,null,e=>{this.connection=e,e.addDisconnectCallback(()=>{this.game.processServerLeave(),s()}),e.addMessageCallback("welcome",e=>{let t=u(0xffffff&e.getUInt(0)),s=e.getString(1);this.game.processServerWelcome(t,s)}),e.addMessageCallback("s",e=>{let t=e.getByteArray(0),s=(t[1]<<8|t[2])/65535,n=(t[3]<<8|t[4])/65535,a=2-(t[7]<<8|t[8])/65535,i=(t[9]<<8|t[10])/65535,r=(t[13]<<8|t[14])/65535*2,o=(t[15]<<8|t[16])/65535;this.game.processServerState(s,n,a,i,r,o)}),e.addMessageCallback("enter",e=>{let t=u(0xffffff&e.getUInt(0)),s=e.getString(1);this.game.processServerEnter(t,s),this.lastKeySent=-1}),e.addMessageCallback("win",()=>this.game.processServerWin()),e.addMessageCallback("lose",()=>this.game.processServerLose()),e.addMessageCallback("nextRound",e=>this.game.processServerRoundStart(e.getBoolean(0))),e.addMessageCallback("t",e=>{this.game.processServerPingTimes(e.getUInt(0),e.getUInt(1))}),e.addMessageCallback("p",t=>e.sendMessage(t));let t=this.game.getUserName(),n=this.game.getUserColor();e.send("init",n,t)},e)};s()},e),this.game.processServerConnect()}disconnect(){this.connection&&(this.state=a.Disconnecting,this.connection.addDisconnectCallback(()=>this.disconnected()),this.connection.disconnect())}update(){if(!this.connection||!this.game.shouldSendNetworkUpdate())return;let e=this.game.getKeyFlags();this.lastKeySent!==e&&this.connection.send("k",e)}disconnected(){this.state=a.Disconnected,this.connection=void 0,this.game.processServerDisconnect()}}class v{x=Math.random();y=Math.random();vx=Math.floor(7*Math.random()-3)/800*.06;vy=Math.floor(3*Math.random()+1)/400*.06;rgb=0x1000000*Math.random()|0;a=.6*Math.random()+.1;blurSize=(Math.floor(10*Math.random())+5)/2/800;scale=.7*Math.random()+.3}class w{fancy;constructor(e=40){this.fancy=Array(e).fill(void 0).map(()=>new v)}update(e){if(e)for(let t=0;t<this.fancy.length;++t)this.fancy[t].x+=this.fancy[t].vx*e,this.fancy[t].y+=this.fancy[t].vy*e,(this.fancy[t].x<-.0375||this.fancy[t].x>1.0375)&&(this.fancy[t].x%=1.075),this.fancy[t].x<-.0375&&(this.fancy[t].x+=1.075),this.fancy[t].y>.875&&(this.fancy[t].y-=.95)}draw(e,t,s){e.save(),e.globalCompositeOperation="screen";for(let n=0;n<this.fancy.length;++n){let{x:a,y:i,a:r,blurSize:o,scale:c}=this.fancy[n],h=this.fancy[n].rgb>>16,l=this.fancy[n].rgb>>8&255,d=255&this.fancy[n].rgb;e.beginPath(),e.arc(a*t,i*s,.0375*c*t,0,2*Math.PI),e.closePath(),e.filter="blur("+o*c*t+"px)",e.fillStyle="rgba("+h+","+l+","+d+","+r+")",e.fill()}e.restore()}}class S{game;getNetStatus;drawFancyBackground=!1;drawDev=!1;flipP1=!1;fancy=new w;constructor(e,t){this.game=e,this.getNetStatus=t}draw(e){let t;let s=e.canvas.height,i=2*s;if(this.drawClear(e,i,s),this.drawFancyBackground&&this.fancy.draw(e,i,s),!this.game)return;this.drawFloor(e,i,s),this.drawNet(e,i,s),this.drawBall(e,i,s);let r=this.game.getP1(),o=this.game.getP2();switch(this.drawSlimer(e,i,s,r.x+r.xe,r.y+r.ye,r.color,r.name,!1),this.game.hasOpponent()&&(this.drawSlimer(e,i,s,o.x+o.xe,o.y+o.ye,o.color,o.name,!0),this.drawPing(e,i,s,r.ping,!this.flipP1),this.drawPing(e,i,s,o.ping,this.flipP1)),this.drawDev&&(this.drawBall(e,i,s,!0),this.drawSlimer(e,i,s,r.x,r.y,r.color,r.name,!1,!0),this.drawSlimer(e,i,s,o.x,o.y,o.color,o.name,!0,!0)),this.drawScore(e,i,s,r.score,o.score),this.getNetStatus()){case a.Connecting:t="Connecting";break;case a.Connected:this.game.hasOpponent()?this.game.getStatus()===n.WIN?t="You won the round!":this.game.getStatus()===n.LOSS&&(t="You lost the round!"):t="Waiting for opponent";break;case a.Disconnecting:t="Disconnecting";break;case a.Disconnected:t="Disconnected"}t&&this.drawStatus(e,i,s,t),this.drawFPS(e,i,s)}drawClear(e,t,s){let n=e.createRadialGradient(t/2,s/2,0,t/2,s/2,s);n.addColorStop(0,"#0df"),n.addColorStop(1,"#26b"),e.fillStyle=n,e.fillRect(0,0,t,s)}drawFloor(e,t,s){e.fillStyle="#999",e.fillRect(0,.8*s,t,s)}drawNet(e,t,s){e.fillStyle="#fff",e.fillRect(.495*t,.625*s,.01*t,.2*s)}drawBall(e,t,s,a){let i=this.game.getBall(),r=i.x,o=i.y;if(!a&&(r+=i.xe,o+=i.ye),this.flipP1&&(r=2-r),o=1-o-.2,e.beginPath(),e.arc(r*s,o*s,.03*s,0,2*Math.PI),e.closePath(),a){e.lineWidth=2,e.strokeStyle="red",e.stroke();return}e.fillStyle=this.game.getStatus()===n.WIN?"#0f0":this.game.getStatus()===n.LOSS?"red":"#ff0",e.fill()}drawSlimer(e,t,s,n,a,i,r,o,c){let h=this.game.getBall();if(this.flipP1&&(n=2-n),a=1-a-.2,e.beginPath(),e.arc(n*s,a*s,.1*s,0,Math.PI,!0),e.closePath(),c){e.lineWidth=2,e.strokeStyle="red",e.stroke();return}e.fillStyle=i,e.fill();let l=n+(this.flipP1!==o?-.0535:.0535),d=a-.0525;e.beginPath(),e.arc(l*s,d*s,.0175*s,0,2*Math.PI,!0),e.closePath(),e.fillStyle="#fff",e.fill();let g=(this.flipP1?2-(h.x+h.xe):h.x+h.xe)-l,p=1-(h.y+h.ye)-.2-d,m=g*g+p*p;if(m>25e-6){let e=.005/Math.sqrt(m);l+=g*e,d+=p*e}else l=h.x+h.xe,d=h.y+h.ye;e.beginPath(),e.arc(l*s,d*s,.01*s,0,2*Math.PI,!0),e.closePath(),e.fillStyle="#000",e.fill(),r&&(e.font=.0225*t+"px Verdana, sans-serif",e.textAlign="center",e.fillStyle="#ccc",e.fillText(r,n*s,(a-.05-.1)*s))}drawScore(e,t,s,n,a){e.font=.05*t+"px sans-serif",e.textAlign="center",e.fillStyle="#fd0",e.fillText(n+"",(this.flipP1?.92:.08)*t,.15*s),e.fillText(a+"",(this.flipP1?.08:.92)*t,.15*s)}drawStatus(e,t,s,n){e.font=.04*t+"px sans-serif",e.textAlign="center",e.fillStyle="#ddd",e.fillText(n,.5*t,.15*s)}drawFPS(e,t,s){if(!this.game)return;let n=this.game.getFPS();e.font=.02*t+"px monospace",e.textAlign="left",e.fillStyle="#fa0",e.fillText(Math.round(n)+" fps",.01*t,.97*s)}drawPing(e,t,s,n,a){!(n<0)&&(e.font=.02*t+"px monospace",e.textAlign=a?"left":"right",e.fillStyle="#fa0",e.fillText(n+" ms",(a?.01:.99)*t,.85*s))}}function y(e){var t;return t=e,document.getElementById(t)}class x{canvas;animationCallback;context;lastGameTime=Date.now();constructor(e,t){this.canvas=e,this.animationCallback=t,this.context=e.getContext("2d"),window.requestAnimationFrame(()=>this.drawFrame()),document.addEventListener("fullscreenchange",()=>this.resize()),window.addEventListener("resize",()=>this.resize()),this.resize()}getCanvas(){return this.canvas}getContext(){return this.context}resize(){if(window.innerWidth===window.screen.width&&window.innerHeight===window.screen.height)this.canvas.width=Math.min(window.innerWidth,2*window.innerHeight),this.canvas.height=Math.min(window.innerHeight,window.innerWidth/2);else{let e=this.canvas.parentNode;this.canvas.width=Math.min(e.clientWidth,2*e.clientHeight),this.canvas.height=Math.min(e.clientHeight,e.clientWidth/2)}}drawFrame(){window.requestAnimationFrame(()=>this.drawFrame());let e=Date.now(),t=e-this.lastGameTime;this.lastGameTime=e,this.animationCallback(t)}}class k{keys=new Set;on(e){this.keys.add(e)}off(e){this.keys.delete(e)}isOn(e){return this.keys.has(e)}attachListeners(e,t){e.addEventListener("keydown",e=>{this.on(e.keyCode),t()}),e.addEventListener("keyup",e=>{this.off(e.keyCode),t()})}}function C(e,t,s){return Math.max(t,Math.min(e,s))}class b{x=0;y=0;valid=!1;isValid(){return this.valid}getX(){return this.x}getY(){return this.y}attachListeners(e){e.addEventListener("mousemove",t=>this.movestart(t.clientX,t.clientY,e)),e.addEventListener("touchmove",t=>this.touchmove(t,e)),e.addEventListener("mouseleave",()=>this.movestop()),e.addEventListener("touchend",()=>this.movestop()),e.addEventListener("touchcancel",()=>this.movestop())}movestart(e,t,s){this.x=C((e-s.getBoundingClientRect().left)/s.width,0,1),this.y=C((t-s.getBoundingClientRect().top)/s.height,0,1),this.valid=!0}movestop(){this.valid=!1}touchmove(e,t){if(e.targetTouches.length<1)return;e.preventDefault();let s=e.targetTouches.item(0);s&&this.movestart(s.clientX,s.clientY,t)}}class M{keyManager=new k;keyFlags=0;keyFlagsFlip=0;mouseManager=new b;getKeyFlags(e){return e?this.keyFlagsFlip:this.keyFlags}getMouse(){return this.mouseManager}attachListeners(e){this.keyManager.attachListeners(e,()=>this.updateKeyFlags())}KeyL(){return this.keyManager.isOn(37)||this.keyManager.isOn(65)}KeyU(){return this.keyManager.isOn(38)||this.keyManager.isOn(87)}KeyR(){return this.keyManager.isOn(39)||this.keyManager.isOn(68)}updateKeyFlags(){let e=this.KeyL()?1:0,t=this.KeyR()?1:0,s=this.KeyU()?1:0;this.keyFlags=e|t<<1|s<<2,this.keyFlagsFlip=t|e<<1|s<<2}}class P{game;$canvas=y("gameCanvas");$pName=y("pName");$pColor=y("pColor");$connect=y("connect");$flipP1=y("flipP1");$notFlipP1=y("notFlipP1");$background=y("background");$devMode=y("devMode");$fullscreen=y("fullscreen");canvasGame=new x(this.$canvas,e=>this.game.processUIupdate(e));input=new M;constructor(e){this.game=e,this.input.attachListeners(window),y("connect").addEventListener("click",()=>this.game.processUIconnect()),y("fullscreen").addEventListener("click",()=>{this.$fullscreen.checked=!1,this.canvasGame.getCanvas().requestFullscreen()}),this.$pName.addEventListener("change",()=>{let e=this.$pName.value;this.game.processUIchangeName(e),window.localStorage.n=e}),this.$pColor.addEventListener("change",()=>{let e=this.$pColor.value;this.game.processUIchangeColor(u(parseInt(e,16))),window.localStorage.c=e}),this.$flipP1.addEventListener("change",()=>{let e=this.$flipP1.checked;this.game.processUIchangeFlipP1(e),window.localStorage.f=e?"1":"0"}),this.$notFlipP1.addEventListener("change",()=>{let e=!this.$notFlipP1.checked;this.game.processUIchangeFlipP1(e),window.localStorage.f=e?"1":"0"}),this.$background.addEventListener("change",()=>{let e=this.$background.checked;this.game.processUIchangeFancyBackground(e),window.localStorage.b=e?"1":"0"}),this.$devMode.addEventListener("change",()=>{let e=this.$devMode.checked;this.game.processUIchangeDrawDev(e),window.localStorage.d=e?"1":"0"})}getContext(){return this.canvasGame.getContext()}getUserName(){return this.$pName.value}getUserColor(){let e=parseInt(this.$pColor.value,16);return Number.isNaN(e)?7864064:0xffffff&e}setUserName(e){this.$pName.value=e}setUserColor(e){this.$pColor.value=e}getInputManager(){return this.input}restoreSettings(){window.localStorage.n&&this.game.processUIchangeName(this.$pName.value=window.localStorage.n),window.localStorage.c&&this.game.processUIchangeColor(u(this.$pColor.value=window.localStorage.c)),"1"===window.localStorage.f&&this.game.processUIchangeFlipP1(this.$flipP1.checked=!0),"1"===window.localStorage.b&&this.game.processUIchangeFancyBackground(this.$background.checked=!0),"1"===window.localStorage.d&&this.game.processUIchangeDrawDev(this.$devMode.checked=!0)}processServerConnect(){this.$pName.disabled=!0,this.$pColor.disabled=!0,this.$connect.innerHTML="Disconnect",this.$connect.className="btn btn-danger"}processServerDisconnect(){this.$pName.disabled=!1,this.$pColor.disabled=!1,this.$connect.innerHTML="Connect",this.$connect.className="btn btn-primary"}}class L{game=new m;ui=new P(this);net=new f(this);gameDrawer=new S(this.game,()=>this.net.readyState());constructor(){this.ui.restoreSettings()}processUIupdate(e){this.game.update(e),this.net.update(),this.gameDrawer.fancy.update(e),this.gameDrawer.draw(this.ui.getContext())}processUIconnect(){this.net.isConnected()?this.net.disconnect():this.net.connect()}processUIchangeName(e){!this.net.isConnected()&&this.game.setName(e)}processUIchangeColor(e){!this.net.isConnected()&&this.game.setColor(e)}processUIchangeFlipP1(e){this.gameDrawer.flipP1=e}processUIchangeFancyBackground(e){this.gameDrawer.drawFancyBackground=e}processUIchangeDrawDev(e){this.gameDrawer.drawDev=e}getUserName(){return this.ui.getUserName()}getUserColor(){return this.ui.getUserColor()}getKeyFlags(){let e=this.gameDrawer.flipP1,t=this.ui.getInputManager().getKeyFlags(e),s=this.ui.getInputManager().getMouse();if(s.isValid()){let n=s.getX();e&&(n=1-n);let a=Math.min(Math.max(2*n,0),1),i=.45>s.getY(),r=this.game.getP1().x;!(3&t)&&Math.abs(r-a)>.05&&(t|=r<a?2:1),i&&(t|=4)}return t}shouldSendNetworkUpdate(){return this.game.hasOpponent()}processServerConnect(){this.ui.processServerConnect()}processServerDisconnect(){this.game.processServerDisconnect(),this.ui.processServerDisconnect()}processServerWelcome(e,t){this.game.processServerWelcome(e,t)}processServerState(e,t,s,n,a,i){this.game.processServerState(e,t,s,n,a,i)}processServerEnter(e,t){this.game.processServerEnter(e,t)}processServerLeave(){this.game.processServerLeave()}processServerWin(){this.game.processServerWin()}processServerLose(){this.game.processServerLose()}processServerRoundStart(e){this.game.processServerRoundStart(e)}processServerPingTimes(e,t){this.game.processServerPingTimes(e,t)}}o=()=>{new L},document.addEventListener("DOMContentLoaded",o)}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.m=e,s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},(()=>{var e=[];s.O=function(t,n,a,i){if(n){i=i||0;for(var r=e.length;r>0&&e[r-1][2]>i;r--)e[r]=e[r-1];e[r]=[n,a,i];return}for(var o=1/0,r=0;r<e.length;r++){for(var n=e[r][0],a=e[r][1],i=e[r][2],c=!0,h=0;h<n.length;h++)(!1&i||o>=i)&&Object.keys(s.O).every(function(e){return s.O[e](n[h])})?n.splice(h--,1):(c=!1,i<o&&(o=i));if(c){e.splice(r--,1);var l=a();void 0!==l&&(t=l)}}return t}})(),s.rv=function(){return"1.1.8"},(()=>{var e={game_slime:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var a=n[0],i=n[1],r=n[2],o,c,h=0;if(a.some(function(t){return 0!==e[t]})){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(r)var l=r(s)}for(t&&t(n);h<a.length;h++)c=a[h],s.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return s.O(l)},n=self.webpackChunkvwww=self.webpackChunkvwww||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),s.ruid="bundler=rspack@1.1.8";var n=s.O(void 0,["33"],function(){return s("203")});n=s.O(n)})();