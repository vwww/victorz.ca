(()=>{"use strict";var e={124:function(e,t,n){n("1"),n("86");var r,s,o,i,a,u,c,l,d,p,h,I,f,m,R,g,_,v,y,k,E=n("2"),N=n("106"),T=n("108"),S=n("109"),P=n("110"),U=n("111"),M=n("112"),O=n("107");function b(e,t,n){return Math.max(t,Math.min(e,n))}var w=n("90"),D=n("116"),A=n("117");(r=h||(h={}))[r.ROUND_WAIT=9]="ROUND_WAIT",r[r.ROUND_INTERM=10]="ROUND_INTERM",r[r.ROUND_START=11]="ROUND_START",r[r.READY=12]="READY",r[r.MOVE_CONFIRM=13]="MOVE_CONFIRM",r[r.END_ROUND=14]="END_ROUND",r[r.END_TURN=15]="END_TURN",r[r.NUM=16]="NUM",(s=I||(I={}))[s.READY=5]="READY",s[s.MOVE=6]="MOVE",s[s.MOVE_END=7]="MOVE_END",s[s.NUM=8]="NUM",(o=f||(f={}))[o.WAITING=0]="WAITING",o[o.INTERMISSION=1]="INTERMISSION",o[o.ACTIVE=2]="ACTIVE";class $ extends A.R7{static DEFAULT_PLAYER={...A.R7.DEFAULT_PLAYER,ready:!1,inRound:!1};isReady=(0,w.$_)(!1);inRound=(0,w.$_)(!1);roundState=(0,w.$_)(0);roundTimerStart=(0,w.$_)(0);roundTimerEnd=(0,w.$_)(0);roundPlayers=(0,w.$_)([]);roundPlayerQueue=(0,w.$_)([]);INTERMISSION_TIME=3e4;ROUND_TIME=2e4;sendReady(e){this.room?.send(new D.T().putInt(I.READY).putBool(e).toArray())}sendMoveEnd(){this.room?.send(new D.T().putInt(I.MOVE_END).toArray())}roundWait(){this.roundState.set(f.WAITING),this.unsetReady()}roundIntermission(e){this.roundState.set(f.INTERMISSION),this.setTimer(e),this.unsetReady(),this.isReady.set(!1)}roundStart(e){this.roundState.set(f.ACTIVE),this.setTimer(e),this.unsetReady()}roundSetPlayers(e){this.roundPlayers.set(e)}roundSetPlayerQueue(e){this.roundPlayerQueue.set(e)}setTimer(e){this.roundTimerStart.set(Date.now()),this.roundTimerEnd.set(Date.now()+e)}processWelcomeGame(e){let t=e.getInt();if(0===t)this.roundWait();else if(1===t){this.roundIntermission(e.getInt());for(let t=0;t<=this.clients.size;t++){let t=e.getInt();if(t<0)break;let n=this.clients.get(t);n&&(n.ready=!0)}}else 2===t&&this.roundStart(e.getInt());let n=[];for(let t=0;t<=this.clients.size;t++){let t=e.getInt();if(t<0)break;let r=this.clients.get(t);r&&(r.inRound=!0,n.push(r))}this.roundSetPlayers(n);let r=[];for(let t=0;t<=this.clients.size;t++){let t=e.getInt();if(t<0)break;let n=this.clients.get(t);n&&r.push(n)}this.roundSetPlayerQueue(r),this.processWelcomeGame2(e)}processWelcomeGame2(e){}playerActivated(e){this.roundPlayerQueue.update(t=>[...t,e])}playerDeactivated(e){this.roundPlayers.update(t=>t.filter(t=>t!==e)),this.roundPlayerQueue.update(t=>t.filter(t=>t!==e)),e.inRound=!1,e.isMe&&this.inRound.set(!1)}processMessage2(e,t){switch(e){case h.ROUND_WAIT:this.roundWait();break;case h.ROUND_INTERM:this.roundIntermission(this.INTERMISSION_TIME);break;case h.ROUND_START:{let e=[];for(let e of this.clients.values())e.inRound=!1;for(let n=0;n<=this.clients.size;n++){let n=t.getInt();if(n<0)break;let r=this.clients.get(n);r&&(r.inRound=!0,e.push(r))}this.inRound.set(this.clients.get(this.myCn)?.inRound??!1),this.roundSetPlayers(e),this.roundSetPlayerQueue([]),this.roundStart(this.ROUND_TIME),this.processRoundStart(t);break}case h.READY:{let e=t.getInt(),n=t.getBool(),r=this.clients.get(e);r&&(r.ready=n,e===this.myCn&&this.isReady.set(n),this.updatePlayers(!0),this.roundPlayers.update(e=>e),this.roundPlayerQueue.update(e=>e));break}case h.MOVE_CONFIRM:this.processMoveConfirm(t);break;case h.END_TURN:this.processEndTurn(t);break;case h.END_ROUND:this.processEndRound(t);break;default:return this.processMessage3(e,t)}return!0}processRoundStart(e){}processMessage3(e,t){return!1}unsetReady(){for(let e of this.clients.values())e.ready=!1}}(i=m||(m={}))[i.PLAYER_ELIMINATE=16]="PLAYER_ELIMINATE",i[i.PLAYER_PRIVATE_INFO=17]="PLAYER_PRIVATE_INFO",i[i.NUM=18]="NUM",(a=R||(R={}))[a.NUM=8]="NUM";class C extends ${static DEFAULT_PLAYER=$.DEFAULT_PLAYER;static DEFAULT_PLAYER_INFO={owner:-1};static DEFAULT_DISC_INFO={ownerName:""};playerInfo=(0,w.$_)([]);playerDiscInfo=(0,w.$_)([]);getClientFromPlayer(e){return e&&this.clients.get(e.owner)}getNameFromPlayer(e,t){return e?A.R7.formatPlayerName(this.getClientFromPlayer(e),e.owner):`<unknown${void 0===t?"":" pn#"+t}>`}playerIsMe(e){return!!this.getClientFromPlayer(e)?.isMe}getPlayerInfo(e){let t=this.playerInfo.get();return 0<=e&&e<=t.length?t[e]:void 0}updatePlayerInfo(){this.playerInfo.update(e=>e)}processRoundStart(e){let t=[];for(let n=0;n<=this.clients.size;n++){let n=e.getInt();if(n<0)break;let r=this.makePlayerInfo();r.owner=n,t.push(r)}this.playerInfo.set(t),this.playerDiscInfo.set([]),this.processRoundStartInfo(e)}processWelcomeGame2(e){this.processPlayerInfos(e),this.processDiscInfos(e),this.processRoundInfo(e)}processEndTurn(e){this.setTimer(this.processEndTurn2(e)??this.ROUND_TIME),this.playerInfo.update(e=>{let t=e.shift();return t&&e.push(t),e})}processMessage3(e,t){switch(e){case m.PLAYER_ELIMINATE:{let e=t.getInt(),n=this.getPlayerInfo(e);if(!n){this.room?.disconnect();break}let r=this.makeDiscInfo(),s=this.clients.get(n.owner);r.ownerName=A.R7.formatPlayerName(s,n.owner);let o=this.processEliminate(t,r,n);this.playerInfo.update(t=>(t.splice(e,1),t)),o||this.playerDiscInfo.update(e=>[...e,r]);break}case m.PLAYER_PRIVATE_INFO:this.processPrivateInfo(t);break;default:return!1}return!0}processPlayerInfos(e){let t=[];for(let n=0;n<=this.clients.size;n++){let n=e.getInt();if(n<0)break;let r=this.makePlayerInfo();r.owner=n,this.processPlayerInfo(e,r),t.push(r)}this.playerInfo.set(t)}processDiscInfos(e){let t=[];for(let n=0;n<=this.clients.size;n++){let n=e.getString(32);if(!n)break;let r=this.makeDiscInfo();r.ownerName=n,this.processDiscInfo(e,r),t.push(r)}this.playerDiscInfo.set(t)}}class F extends C{modeDeck=(0,w.$_)(0);modeJoker=(0,w.$_)(0);modeRevolution=(0,w.$_)(0);modeRevEndTrick=(0,w.$_)(!1);mode1Fewer2=(0,w.$_)(!1);modePlayAfterPass=(0,w.$_)(!1);modeEqualize=(0,w.$_)(0);modeEqualizeEndTrick=(0,w.$_)(0);modeEqualizeOnlyScum=(0,w.$_)(!1);modeFirstTrick=(0,w.$_)(0);mode4inARow=(0,w.$_)(!1);mode8=(0,w.$_)(!1);modeSingleTurn=(0,w.$_)(!1);modePenalizeFinal2=(0,w.$_)(!1);modePenalizeFinalJoker=(0,w.$_)(!1);gamePhase=(0,w.$_)(0);pres=(0,w.$_)(0);scum=(0,w.$_)(0);vicePres=(0,w.$_)(0);viceScum=(0,w.$_)(0);lowGive0=(0,w.$_)(0);lowGive1=(0,w.$_)(0);hiGive0=(0,w.$_)(0);hiGive1=(0,w.$_)(0);revolution=(0,w.$_)(!1);trickCount=(0,w.$_)(0);trickValue=(0,w.$_)(0);trickMaxed=(0,w.$_)(!1);cardCountMine=(0,w.$_)(L());cardCountOthers=(0,w.$_)(L());cardCountDiscard=(0,w.$_)(L());cardCountTotal=(0,w.$_)(L());moveHistory=(0,w.$_)([]);pendingMove=(0,w.$_)(0);pendingMoveCount=(0,w.$_)(0);playersSortProps=[e=>e.score,e=>e.streak,e=>e.rank2p,e=>e.rank1p,e=>e.rank0];sendMove(e,t){this.room?.send(new D.T().putInt(I.MOVE).putInt(1).putInt(e).putInt(t).toArray())}sendMoveTransfer(e,t){this.room?.send(new D.T().putInt(I.MOVE).putInt(0).putInt(e).putInt(t).toArray())}processMoveConfirm(e){this.pendingMove.set(e.getInt()),this.pendingMoveCount.set(e.getInt())}processPrivateInfo(e){switch(e.getInt()){case 0:this.cardCountMine.set(W(e));break;case 1:e.getInt(),e.getInt()}}processRoundStartInfo(e){e.getBool()?this.gamePhase.set(k.NEW_TRICK):(this.gamePhase.set(k.GIVE_CARDS),this.processGiveCardInfo(e))}processRoundInfo(e){let t=e.getInt();switch(this.gamePhase.set(t),t){case k.GIVE_CARDS:this.processGiveCardInfo(e);break;case k.IN_TRICK:case k.NEW_TRICK:{let t=W(e);this.cardCountDiscard.set(t)}}}processPlayerInfo(e,t){t.handSize=e.getInt(),t.discarded=W(e)}processDiscInfo(e,t){t.discarded=W(e),t.hand=W(e)}processEliminate(e,t,n){let r=e.getBool();return t.discarded=n.discarded,t.hand=W(e),this.clients.get(n.owner),r}processEndTurn2(e){throw Error("Method not implemented.")}processEndRound(e){}processWelcomeMode(e){this.modeDeck.set(b(e.getInt(),1,0x97b425ed097b)),this.modeJoker.set(b(e.getInt(),0,2)),this.modeRevolution.set(b(e.getInt(),0,g._NUM-1)),this.modeRevEndTrick.set(e.getBool()),this.mode1Fewer2.set(e.getBool()),this.modePlayAfterPass.set(e.getBool()),this.modeEqualize.set(b(e.getInt(),0,_._NUM-1)),this.modeEqualizeEndTrick.set(b(e.getInt(),0,y._NUM-1)),this.modeEqualizeOnlyScum.set(e.getBool()),this.modeFirstTrick.set(b(e.getInt(),0,v._NUM-1)),this.mode4inARow.set(e.getBool()),this.mode8.set(e.getBool()),this.modeSingleTurn.set(e.getBool()),this.modePenalizeFinal2.set(e.getBool()),this.modePenalizeFinalJoker.set(e.getBool())}processWelcomePlayer(e,t){t.score=e.getInt(),t.streak=e.getInt(),t.rank2p=e.getInt(),t.rank1p=e.getInt(),t.rank0=e.getInt(),t.rank1s=e.getInt(),t.rank2s=e.getInt()}playerResetStats(e){e.score=0,e.streak=0,e.rank2p=0,e.rank1p=0,e.rank0=0,e.rank1s=0,e.rank2s=0}makePlayer(){return{...C.DEFAULT_PLAYER,score:0,streak:0,rank2p:0,rank1p:0,rank0:0,rank1s:0,rank2s:0}}makePlayerInfo(){return{...C.DEFAULT_PLAYER_INFO,discarded:L(),handSize:0}}makeDiscInfo(){return{...C.DEFAULT_DISC_INFO,discarded:L(),hand:L()}}processGiveCardInfo(e){let t=e.getInt(),n=e.getInt(),r=e.getInt(),s=e.getInt();this.pres.set(t),this.scum.set(n),this.vicePres.set(r),this.viceScum.set(s)}}function L(){return[0,0,0,0,0,0,0,0,0,0,0,0,0,0]}function W(e){let t=[e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt(),e.getInt()];return[...t,t.reduce((e,t)=>e+t,0)]}(u=g||(g={}))[u.OFF=0]="OFF",u[u.ON_STRICT=1]="ON_STRICT",u[u.ON_RELAXED=2]="ON_RELAXED",u[u.ON=3]="ON",u[u._NUM=4]="_NUM",(c=_||(_={}))[c.DISALLOW=0]="DISALLOW",c[c.ALLOW=1]="ALLOW",c[c.CONTINUE_OR_SKIP=2]="CONTINUE_OR_SKIP",c[c.CONTINUE_OR_PASS=3]="CONTINUE_OR_PASS",c[c.FORCE_SKIP=4]="FORCE_SKIP",c[c._NUM=5]="_NUM",(l=v||(v={}))[l.SCUM=0]="SCUM",l[l.PRESIDENT=1]="PRESIDENT",l[l.RANDOM=2]="RANDOM",l[l._NUM=3]="_NUM",(d=y||(y={}))[d.OFF=0]="OFF",d[d.SCUM=1]="SCUM",d[d.ANY=2]="ANY",d[d._NUM=3]="_NUM",(p=k||(k={}))[p.GIVE_CARDS=0]="GIVE_CARDS",p[p.NEW_TRICK=1]="NEW_TRICK",p[p.IN_TRICK=2]="IN_TRICK";var B=E.XKW("<!> <span> </span>",1),z=E.XKW("<span> <!></span>"),V=E.XKW('<li class="list-group-item"><div>Ranks: <!></div></li>'),K=E.XKW('<li class="list-group-item">No past games!</li>'),J=E.XKW('<ul class="list-group list-group-flush overflow-auto" style="max-height: 15rem"></ul>'),x=E.XKW('<th scope="col"> </th>'),G=E.XKW("<td> </td>"),X=E.XKW('<tr><th scope="row"> </th><!></tr>'),Y=E.XKW('<div class="table-responsive"><table class="table table-sm"><thead><tr><th></th><!></tr></thead><tbody></tbody></table></div>'),q=E.XKW(`Scum [pl] gives the two highest cards to President [pl], who must choose two cards to give back.
  High-Scum [pl] gives the two highest cards to Vice-President [pl], who must choose two cards to give back. You gave [c0] and [c1] to [pl], who will give you back two cards. [pl] gave you [c0] and [c1]. Give back two cards:
  [cards0]
  [cards1] <button class="btn btn-primary d-block w-100">Confirm</button>`,1),Z=E.XKW('<!> <div class="btn-group d-flex my-2"><button class="btn w-100 btn-primary">Confirm</button> <button class="btn w-50 btn-outline-secondary">Random</button> <button class="btn w-50 btn-outline-danger">Pass</button></div>',1),H=E.XKW("<!> <!>",1);E.clJ(["click"]);let j=[["optDecks","i",1,"Decks","number of decks",1,0x97b425ed097b],["optJokers","i",2,"Jokers","number of jokers per deck",0,2],["optRevolution","e",0,"Revolutions","when 4 or more cards of the same value are played at once (and selected condition), rankings are reversed (except jokers) for the round",["off","on, strict (no jokers)","on, relaxed (any 4 are non-joker)","on, jokers (any)"]],["optRevEndTrick","b",!1,"Revolution ends trick","a revolution ends the current trick and starts a new one"],["opt1Fewer2","b",!0,"One fewer 2",""],["optPlayAfterPass","b",!1,"Play after pass","skip instead of pass"],["optEqualize","e",1,"Equalize","",["disallow","allow","equalize or skip","equalize or pass","force skip (next player skips)"]],["optEqualizeEndTrick","e",0,"Equalize End Trick","equalizing lets the next player start a new trick if current player is",["off","scum","all"]],["optEqualizeOnlyScum","b",!1,"Equalize only by scum","only scum can equalize"],["optFirstTrick","e",0,"First Trick","who starts it?",["Scum","President","Random"]],["opt4inARow","b",!1,"4-in-a-row","if 4 or more cards of the same rank are played (possibly by equalizing), next player starts a new trick"],["opt8","b",!1,"8-rule","if 8 is played, current player starts a new trick"],["optSingleTurn","b",!1,"Single turn","treat as passed after playing, player before starter of current trick starts next trick"],["optPenalizeFinal2","b",!1,"Penalize final 2","playing 2 as last card demotes to scum"],["optPenalizeFinalJoker","b",!1,"Penalize final joker","playing joker as last card demotes to scum"]];var Q=E.XKW('<!> <!> <!> <div class="row"><div class="col-12 col-xl-8"><!> <!></div> <div class="col-12 col-xl-4 mb-3"><!></div></div>',1);(0,n("84").Z)(function(e,t){E.VFu(t,!1);let n=E.hyl(),r=()=>E.hPL(g,"$name",n),s=()=>E.hPL(p,"$inGame",n),o=()=>E.hPL(h,"$isActive",n),i=()=>E.hPL(R,"$roundState",n),a=()=>E.hPL(I,"$isReady",n),u=()=>E.hPL(f,"$pastGames",n),c=()=>E.hPL(m,"$clientsSorted",n),l=new O.Z,d=new F(l),{inGame:p,isActive:h,isReady:I,pastGames:f,clientsSorted:m,roundState:R}=d,g=(0,w.CR)("game/mp/_shared/name","");E.S1n();var _=Q(),v=E.VHm(_);(0,P.Z)(v,{get value(){return E.I8m(),r()},set value($$value){E.GID(g,$$value)},$$legacy:!0});var y=E.J9n(v,2);(0,M.Z)(y,{gameId:"president-ftmxqwcwukyisw4waewyua",roomType:"PresidentRoom",onJoinedRoom:e=>d.enterGame(e,r()),formatGameMode:function({optInverted:e,optAddRandom:t,optTeams:n}){var r;return r=0,"TODO"},roomCreateOptions:j});var k=E.J9n(y,2),b=E.UXX(()=>1===i());(0,U.Z)(k,{get inGame(){return s()},get isActive(){return o()},get canReady(){return E.U2M(b)},get isReady(){return a()},onSetActive:e=>d.sendActive(e),onSetReady:e=>d.sendReady(e),onReset:()=>d.sendReset(),onDisconnect:()=>d.leaveGame(),children:(e,t)=>{!function(e,t){E.VFu(t,!0);let n=E.hyl(),r=()=>E.hPL(s,"$gamePhase",n),{gamePhase:s}=t.gameState;var o,i,a,u,c,l,d,p,h=H(),I=E.VHm(h),f=e=>{var t=q();E.lpx(),E.R3I(e,t)},m=e=>{var n=Z(),s=E.VHm(n),o=e=>{var t=E.fLW("Card: [buttons]\n    Cardinality: [number] [slider]\n    Jokers: [number] [slider]");E.R3I(e,t)},i=e=>{var t=E.fLW("Move: [buttons]\n    Jokers: [number] [slider]");E.R3I(e,t)};E.if(s,e=>{1===r()?e(o):e(i,!1)});var a=E.J9n(s,2),u=E.iUc(a);u.__click=function(...e){t.gameState.onConfirm?.apply(this,e)};var c=E.J9n(u,2);c.__click=function(...e){t.gameState.onRandom?.apply(this,e)};var l=E.J9n(c,2);l.__click=function(...e){t.gameState.onPass?.apply(this,e)},E.VHj(l,"disabled",true),E.mcB(a),E.R3I(e,n)};E.if(I,e=>{r()?e(m,!1):e(f)}),o=E.J9n(I,2),i={ranks:["*","2","A","K","Q","J","10","9","8","7","6","5","4","3"],counts:[["You",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Others",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Played",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Total",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]]]},a=Y(),u=E.iUc(a),c=E.iUc(u),l=E.iUc(c),d=E.J9n(E.iUc(l)),E.S6b(d,17,()=>i.ranks,E.KzB,(e,t)=>{var n=x(),r=E.iUc(n,!0);E.mcB(n),E.OwZ(()=>E.u7_(r,E.U2M(t))),E.R3I(e,n)}),E.mcB(l),E.mcB(c),p=E.J9n(c),E.S6b(p,21,()=>i.counts,E.KzB,(e,t)=>{var n=X(),r=E.iUc(n),s=E.iUc(r,!0);E.mcB(r);var o=E.J9n(r);E.S6b(o,17,()=>E.U2M(t)[1],E.KzB,(e,t)=>{var n=G(),r=E.iUc(n,!0);E.mcB(n),E.OwZ(()=>E.u7_(r,E.U2M(t))),E.R3I(e,n)}),E.mcB(n),E.OwZ(()=>E.u7_(s,E.U2M(t)[0])),E.R3I(e,n)}),E.mcB(p),E.mcB(u),E.mcB(a),E.R3I(o,a),E.R3I(e,h),E.Swx()}(e,{gameState:d})},$$slots:{default:!0}});var D=E.J9n(k,2),A=E.iUc(D),$=E.iUc(A),C=E.UXX(()=>!u().length);(0,T.Z)($,{get canClear(){return E.U2M(C)},onClear:()=>d.clearHistory(),children:(e,t)=>{!function(e,t){let n=[["Scum","danger"],["VS","warning"],["∅","secondary"],["VP","success"],["President","primary"]];function r(e){return n[e+2][0]}function s(e){return`badge text-bg-${n[e+2][1]}`}var o=J();E.S6b(o,21,()=>t.results,E.KzB,(e,t)=>{var r=V(),o=E.iUc(r),i=E.J9n(E.iUc(o));E.S6b(i,17,()=>E.U2M(t).players,E.KzB,(e,t)=>{var r=z();let o=E.nKH(()=>E.WyS(s(E.U2M(t).prevRankType)));var i=E.iUc(r),a=E.J9n(i),u=e=>{var r=B(),o=E.VHm(r),i=e=>{var r=E.fLW();E.OwZ(()=>E.u7_(r,n[E.U2M(t).prevRankType+2][0])),E.R3I(e,r)};E.if(o,e=>{E.U2M(t).prevRankType&&e(i)});var a=E.J9n(o),u=E.J9n(a);let c=E.nKH(()=>E.WyS(s(E.U2M(t).newRankType)));var l=E.iUc(u,!0);E.OwZ(()=>E.u7_(l,n[E.U2M(t).newRankType+2][0])),E.mcB(u),E.OwZ(()=>{E.u7_(a,` ${(E.U2M(t).prevRankType<E.U2M(t).newRankType?"➚":"➘")??""} `),E.u8O(u,E.U2M(c),"")}),E.R3I(e,r)};E.if(a,e=>{E.U2M(t).prevRankType!=E.U2M(t).newRankType&&e(u)}),E.mcB(r),E.OwZ(()=>{E.u8O(r,E.U2M(o),""),E.u7_(i,`${E.U2M(t).name??""} (${E.U2M(t).cn??""}) `)}),E.R3I(e,r)}),E.mcB(o),E.mcB(r),E.R3I(e,r)},e=>{var t=K();E.R3I(e,t)}),E.mcB(o),E.R3I(e,o)}(e,{get results(){return u()}})},$$slots:{default:!0}});var L=E.J9n($,2),W=E.UXX(()=>[["Score",e=>e.score],["Streak",e=>e.streak],["President",e=>e.rank2p],["VP",e=>e.rank1p],["Neutral",e=>e.rank0],["VS",e=>e.rank1s],["Scum",e=>e.rank2s]]);(0,S.Z)(L,{get players(){return c()},get columns(){return E.U2M(W)}}),E.mcB(A);var ee=E.J9n(A,2),et=E.iUc(ee);(0,N.Z)(et,{chatState:l,onInput:e=>d.processCommand(e)}),E.mcB(ee),E.mcB(D),E.R3I(e,_),E.Swx()})},25:function(){},47:function(e,t,n){n(24),n(25)},2:function(e,t,n){n.d(t,{As6:function(){return c.As},Ba6:function(){return u.B},DBn:function(){return o.DB},EoV:function(){return c.Eo},GID:function(){return g.GI},I8m:function(){return g.I8},J9n:function(){return k.J9},JcM:function(){return f.Jc},KzB:function(){return s.Kz},OwZ:function(){return f.Ow},R3I:function(){return h.R3},S1n:function(){return p.S},S6b:function(){return s.S6},SBE:function(){return m.SB},Swx:function(){return v.Sw},U2M:function(){return v.U2},UF7:function(){return i.UF},UI8:function(){return h.UI},UXX:function(){return I.UX},VFu:function(){return v.VF},VHj:function(){return a.VH},VHm:function(){return k.VH},W6n:function(){return i.W6},WpJ:function(){return c.Wp},WyS:function(){return E.W},XKW:function(){return h.XK},Z1T:function(){return l.Z},ZTd:function(){return N.ZT},clJ:function(){return u.cl},fD6:function(){return R.fD},fLW:function(){return h.fL},hPL:function(){return g.hP},hyl:function(){return g.hy},iUc:function(){return k.iU},if:function(){return r.R},lpx:function(){return d.lp},mcB:function(){return d.mc},nKH:function(){return I.nK},qt_:function(){return i.qt},sjz:function(){return y.s},t8m:function(){return m.t8},u7_:function(){return _.u7},u8O:function(){return a.u8},vgT:function(){return R.vg}}),n(3),n(4),n(25),n(26),n(27),n(22),n(35),n(15),n(36),n(37);var r=n(38);n(39),n(40);var s=n(41);n(42),n(43);var o=n(44);n(45),n(46),n(32),n(47),n(48);var i=n(49),a=n(51),u=n(29);n(31),n(52),n(55);var c=n(56);n(57),n(58),n(59),n(60),n(61);var l=n(62);n(63),n(64);var d=n(18);n(65);var p=n(66);n(67);var h=n(33),I=n(23),f=n(8),m=n(10),R=n(68),g=n(69);n(73);var _=n(28),v=n(6);n(74),n(53);var y=n(21);n(75);var k=n(17),E=n(50);n(16);var N=n(7);n(76),n(20),n(77)}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},(()=>{var e=[];n.O=function(t,r,s,o){if(r){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,s,o];return}for(var a=1/0,i=0;i<e.length;i++){for(var r=e[i][0],s=e[i][1],o=e[i][2],u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every(function(e){return n.O[e](r[c])})?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(i--,1);var l=s();void 0!==l&&(t=l)}}return t}})(),n.rv=function(){return"1.1.8"},(()=>{var e={app_game_mp_president:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s=r[0],o=r[1],i=r[2],a,u,c=0;if(s.some(function(t){return 0!==e[t]})){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(i)var l=i(n)}for(t&&t(r);c<s.length;c++)u=s[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(l)},r=self.webpackChunkvwww=self.webpackChunkvwww||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.ruid="bundler=rspack@1.1.8";var r=n.O(void 0,["1","3","2","15","32","34","33","31"],function(){return n("124")});r=n.O(r)})();