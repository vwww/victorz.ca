"use strict";(self.webpackChunkvwww=self.webpackChunkvwww||[]).push([["39"],{118:function(t,e,n){n.d(e,{Z:function(){return o}}),n(1);var r=n(2),s=r.XKW("<span> </span>"),i=r.XKW("<span> </span>"),u=r.XKW("<div>In game: <!></div> <div>Queue: <!></div>",1);function o(t,e){var n=u(),o=r.VHm(n),a=r.J9n(r.iUc(o));r.S6b(a,17,()=>e.inGame,r.KzB,(t,e)=>{var n=s(),i=r.iUc(n);r.mcB(n),r.OwZ(()=>{r.u8O(n,`badge text-bg-${(r.U2M(e).ready?"info":"primary")??""} me-1`),r.u7_(i,`${r.U2M(e).name??""} (${r.U2M(e).cn??""})`)}),r.R3I(t,n)},t=>{r.lpx();var e=r.fLW("nobody");r.R3I(t,e)}),r.mcB(o);var c=r.J9n(o,2),l=r.J9n(r.iUc(c));r.S6b(l,17,()=>e.inQueue,r.KzB,(t,e)=>{var n=i(),s=r.iUc(n);r.mcB(n),r.OwZ(()=>{r.u8O(n,`badge text-bg-${(r.U2M(e).ready?"info":"secondary")??""} me-1`),r.u7_(s,`${r.U2M(e).name??""} (${r.U2M(e).cn??""})`)}),r.R3I(t,n)},t=>{r.lpx();var e=r.fLW("nobody");r.R3I(t,e)}),r.mcB(c),r.R3I(t,n)}},130:function(t,e,n){n.d(e,{Z:function(){return i}}),n(1);var r=n(2),s=r.XKW('<div class="btn-group d-flex my-2"><button class="btn w-100 btn-outline-danger">Resign</button> <button> </button> <button> </button></div>');function i(t,e){r.VFu(e,!0);var n=s(),i=r.iUc(n);i.__click=function(...t){e.onResign?.apply(this,t)};var u=r.J9n(i,2);u.__click=function(...t){e.onDrawOffer?.apply(this,t)};var o=r.iUc(u,!0);r.mcB(u);var a=r.J9n(u,2);a.__click=function(...t){e.onDrawReject?.apply(this,t)};var c=r.iUc(a,!0);r.mcB(a),r.mcB(n),r.OwZ(()=>{r.u8O(u,`btn w-50 btn-${["outline-primary","primary","info"][e.drawOffer]??""}`),r.u7_(o,["Offer Draw","Draw Requested","Accept Draw"][e.drawOffer]),r.u8O(a,`btn w-50 btn-${(e.drawOffer?"":"outline-")??""}warning`),r.VHj(a,"disabled",!e.drawOffer),r.u7_(c,e.drawOffer>1?"Reject Draw":"Cancel Draw")}),r.R3I(t,n),r.Swx()}r.clJ(["click"])},128:function(t,e,n){n.d(e,{Z:function(){return o}}),n(1);var r=n(2),s=r.XKW('<li class="list-group-item"><span> </span> vs <span> </span> <p> </p></li>'),i=r.XKW('<li class="list-group-item">No past games!</li>'),u=r.XKW('<ul class="list-group list-group-flush overflow-auto" style="max-height: 15rem"></ul>');function o(t,e){let n=r.vgT(e,"p0Win",3,"X wins"),o=r.vgT(e,"p1Win",3,"O wins"),a=r.vgT(e,"draw",3,"draw"),c=r.vgT(e,"winEarly",3,"by forfeit"),l=r.vgT(e,"drawEarly",3,"by agreement");function d(t){return t?1===t?"danger":"secondary":"success"}var f=u();r.S6b(f,21,()=>e.results,r.KzB,(t,e)=>{var i=s(),u=r.iUc(i);let f=r.nKH(()=>`badge text-bg-${d(r.U2M(e).winner)??""}`);var h=r.iUc(u,!0);r.mcB(u);var R=r.J9n(u,2);let p=r.nKH(()=>`badge text-bg-${d(1-r.U2M(e).winner)??""}`);var y=r.iUc(R,!0);r.mcB(R);var I=r.J9n(R,2),m=r.iUc(I);r.mcB(I),r.mcB(i),r.OwZ(()=>{r.u8O(u,r.U2M(f)),r.u7_(h,r.U2M(e).p0Name),r.u8O(R,r.U2M(p)),r.u7_(y,r.U2M(e).p1Name),r.u7_(m,`Ply ${r.U2M(e).ply??""}: ${(r.U2M(e).winner?1===r.U2M(e).winner?o():a():n())??""} ${(r.U2M(e).earlyEnd?r.U2M(e).winner<2?c():l():"")??""}`)}),r.R3I(t,i)},t=>{var e=i();r.R3I(t,e)}),r.mcB(f),r.R3I(t,f)}},115:function(t,e,n){n.d(e,{Dh:function(){return f},Zt:function(){return o}});var r,s,i,u,o,a,c=n(90),l=n(116),d=n(117);(r=u||(u={}))[r.ROUND_WAIT=9]="ROUND_WAIT",r[r.ROUND_INTERM=10]="ROUND_INTERM",r[r.ROUND_START=11]="ROUND_START",r[r.READY=12]="READY",r[r.MOVE_CONFIRM=13]="MOVE_CONFIRM",r[r.END_ROUND=14]="END_ROUND",r[r.END_TURN=15]="END_TURN",r[r.NUM=16]="NUM",(s=o||(o={}))[s.READY=5]="READY",s[s.MOVE=6]="MOVE",s[s.MOVE_END=7]="MOVE_END",s[s.NUM=8]="NUM",(i=a||(a={}))[i.WAITING=0]="WAITING",i[i.INTERMISSION=1]="INTERMISSION",i[i.ACTIVE=2]="ACTIVE";class f extends d.R7{static DEFAULT_PLAYER={...d.R7.DEFAULT_PLAYER,ready:!1,inRound:!1};isReady=(0,c.$_)(!1);inRound=(0,c.$_)(!1);roundState=(0,c.$_)(0);roundTimerStart=(0,c.$_)(0);roundTimerEnd=(0,c.$_)(0);roundPlayers=(0,c.$_)([]);roundPlayerQueue=(0,c.$_)([]);INTERMISSION_TIME=3e4;ROUND_TIME=2e4;sendReady(t){this.room?.send(new l.T().putInt(o.READY).putBool(t).toArray())}sendMoveEnd(){this.room?.send(new l.T().putInt(o.MOVE_END).toArray())}roundWait(){this.roundState.set(a.WAITING),this.unsetReady()}roundIntermission(t){this.roundState.set(a.INTERMISSION),this.setTimer(t),this.unsetReady(),this.isReady.set(!1)}roundStart(t){this.roundState.set(a.ACTIVE),this.setTimer(t),this.unsetReady()}roundSetPlayers(t){this.roundPlayers.set(t)}roundSetPlayerQueue(t){this.roundPlayerQueue.set(t)}setTimer(t){this.roundTimerStart.set(Date.now()),this.roundTimerEnd.set(Date.now()+t)}processWelcomeGame(t){let e=t.getInt();if(0===e)this.roundWait();else if(1===e){this.roundIntermission(t.getInt());for(let e=0;e<=this.clients.size;e++){let e=t.getInt();if(e<0)break;let n=this.clients.get(e);n&&(n.ready=!0)}}else 2===e&&this.roundStart(t.getInt());let n=[];for(let e=0;e<=this.clients.size;e++){let e=t.getInt();if(e<0)break;let r=this.clients.get(e);r&&(r.inRound=!0,n.push(r))}this.roundSetPlayers(n);let r=[];for(let e=0;e<=this.clients.size;e++){let e=t.getInt();if(e<0)break;let n=this.clients.get(e);n&&r.push(n)}this.roundSetPlayerQueue(r),this.processWelcomeGame2(t)}processWelcomeGame2(t){}playerActivated(t){this.roundPlayerQueue.update(e=>[...e,t])}playerDeactivated(t){this.roundPlayers.update(e=>e.filter(e=>e!==t)),this.roundPlayerQueue.update(e=>e.filter(e=>e!==t)),t.inRound=!1,t.isMe&&this.inRound.set(!1)}processMessage2(t,e){switch(t){case u.ROUND_WAIT:this.roundWait();break;case u.ROUND_INTERM:this.roundIntermission(this.INTERMISSION_TIME);break;case u.ROUND_START:{let t=[];for(let t of this.clients.values())t.inRound=!1;for(let n=0;n<=this.clients.size;n++){let n=e.getInt();if(n<0)break;let r=this.clients.get(n);r&&(r.inRound=!0,t.push(r))}this.inRound.set(this.clients.get(this.myCn)?.inRound??!1),this.roundSetPlayers(t),this.roundSetPlayerQueue([]),this.roundStart(this.ROUND_TIME),this.processRoundStart(e);break}case u.READY:{let t=e.getInt(),n=e.getBool(),r=this.clients.get(t);r&&(r.ready=n,t===this.myCn&&this.isReady.set(n),this.updatePlayers(!0),this.roundPlayers.update(t=>t),this.roundPlayerQueue.update(t=>t));break}case u.MOVE_CONFIRM:this.processMoveConfirm(e);break;case u.END_TURN:this.processEndTurn(e);break;case u.END_ROUND:this.processEndRound(e);break;default:return this.processMessage3(t,e)}return!0}processRoundStart(t){}processMessage3(t,e){return!1}unsetReady(){for(let t of this.clients.values())t.ready=!1}}},129:function(t,e,n){n.d(e,{Du:function(){return d}});var r,s,i,u,o=n(90),a=n(116),c=n(117),l=n(115);(r=i||(i={}))[r.OFFER_DRAW=16]="OFFER_DRAW",r[r.NUM=17]="NUM",(s=u||(u={}))[s.FORFEIT=8]="FORFEIT",s[s.OFFER_DRAW=9]="OFFER_DRAW",s[s.REJECT_DRAW=10]="REJECT_DRAW",s[s.NUM=11]="NUM";class d extends l.Dh{static DEFAULT_PLAYER={...l.Dh.DEFAULT_PLAYER,score:0,wins:0,loss:0,ties:0,total:0,streak:0};p0=-1;p1=-1;ply=(0,o.$_)(0);winner=(0,o.$_)(0);myTurn=(0,o.$_)(!1);myPlayer=(0,o.$_)(0);drawOffer=(0,o.$_)(0);sendMoveEnd(){this.room?.send(new a.T().putInt(l.Zt.MOVE_END).toArray())}sendResign(){this.room?.send(new a.T().putInt(u.FORFEIT).toArray())}sendDrawOffer(){this.room?.send(new a.T().putInt(u.OFFER_DRAW).toArray())}sendDrawReject(){this.room?.send(new a.T().putInt(u.REJECT_DRAW).toArray())}processWelcomeGame2(t){this.resetRound(),this.processPlayerInfo(t),this.processRoundInfo(t)}processRoundStart(t){this.resetRound(),this.processPlayerInfo(t),this.processRoundStartInfo(t)}processEndRound(t){let e=t.getInt(),n=t.getBool(),r=this.clients.get(this.p0),s=this.clients.get(this.p1);r&&this.setResult(r,e),s&&this.setResult(s,1-e);let i={p0Name:c.R7.formatPlayerName(r,this.p0),p1Name:c.R7.formatPlayerName(s,this.p1),winner:e,earlyEnd:n,ply:this.ply.get()};this.addHistory(i),this.winner.set(e+1),this.drawOffer.set(0)}processWelcomePlayer(t,e){e.wins=t.getInt(),e.loss=t.getInt(),e.ties=t.getInt(),e.total=e.wins+e.loss+e.ties,e.streak=t.getInt(),e.score=((e.wins<<1)+e.ties<<1)+e.loss}playerResetStats(t){t.score=0,t.wins=0,t.loss=0,t.ties=0,t.total=0,t.streak=0}processEndTurn(t){this.processEndTurn2(t),this.ply.update(t=>t+1);let e=this.myPlayer.get();this.myTurn.set(!!e&&(1&this.ply.get())==e-1),this.setTimer(this.ROUND_TIME)}processMessage3(t,e){if(t===i.OFFER_DRAW){let t=e.getInt(),n=e.getInt();this.drawOffer.set(t&&(n===this.myCn?1:2))}else return!1;return!0}resetRound(){this.ply.set(0),this.winner.set(0),this.drawOffer.set(0)}processPlayerInfo(t){this.p0=t.getInt(),this.p1=t.getInt(),this.myPlayer.set(this.p0===this.myCn?1:this.p1===this.myCn?2:0),this.myTurn.set(this.p0===this.myCn)}setResult(t,e){e?1===e?(t.loss++,t.streak>0&&(t.streak=0),t.streak--,t.score++):(t.ties++,t.score+=2):(t.wins++,t.streak<0&&(t.streak=0),t.streak++,t.score+=4),t.total++}}},121:function(t,e,n){n.d(e,{u:function(){return r}});function r(t,e,n){return Math.max(e,Math.min(t,n))}},25:function(t,e,n){n.d(e,{T:function(){return s}});var r=new Map;function s(t,e){var n=r.get(t);!n&&(n=new Set,r.set(t,n)),n.add(e)}},47:function(t,e,n){n.d(e,{q:function(){return u}});var r=n(13),s=n(24),i=n(25);function u(t,e){(0,s.EZ)(()=>{var n=t.getRootNode(),s=n.host?n:n.head??n.ownerDocument.head;if(!s.querySelector("#"+e.hash)){let t=document.createElement("style");t.id=e.hash,t.textContent=e.code,s.appendChild(t),r.Z&&(0,i.T)(e.hash,t)}})}},2:function(t,e,n){n.d(e,{As6:function(){return l.As},Ba6:function(){return c.B},DBn:function(){return i.DB},EoV:function(){return l.Eo},GID:function(){return E.GI},I8m:function(){return E.I8},J9n:function(){return U.J9},JcM:function(){return y.Jc},KzB:function(){return s.Kz},OwZ:function(){return y.Ow},R3I:function(){return R.R3},S1n:function(){return h.S},S6b:function(){return s.S6},SBE:function(){return I.SB},Swx:function(){return T.Sw},U2M:function(){return T.U2},UF7:function(){return o.UF},UI8:function(){return R.UI},UXX:function(){return p.UX},VFu:function(){return T.VF},VHj:function(){return a.VH},VHm:function(){return U.VH},W6n:function(){return o.W6},WpJ:function(){return l.Wp},XKW:function(){return R.XK},Z1T:function(){return d.Z},ZTd:function(){return _.ZT},clJ:function(){return c.cl},fD6:function(){return m.fD},fLW:function(){return R.fL},hPL:function(){return E.hP},hyl:function(){return E.hy},iUc:function(){return U.iU},if:function(){return r.R},lpx:function(){return f.lp},mcB:function(){return f.mc},nKH:function(){return p.nK},qOq:function(){return u.q},qt_:function(){return o.qt},sjz:function(){return O.s},t8m:function(){return I.t8},u7_:function(){return w.u7},u8O:function(){return a.u8},vgT:function(){return m.vg}}),n(3),n(4),n(25),n(26),n(27),n(22),n(35),n(15),n(36),n(37);var r=n(38);n(39),n(40);var s=n(41);n(42),n(43);var i=n(44);n(45),n(46),n(32);var u=n(47);n(48);var o=n(49),a=n(51),c=n(29);n(31),n(52),n(55);var l=n(56);n(57),n(58),n(59),n(60),n(61);var d=n(62);n(63),n(64);var f=n(18);n(65);var h=n(66);n(67);var R=n(33),p=n(23),y=n(8),I=n(10),m=n(68),E=n(69);n(73);var w=n(28),T=n(6);n(74),n(53);var O=n(21);n(75);var U=n(17);n(50),n(16);var _=n(7);n(76),n(20),n(77)}}]);