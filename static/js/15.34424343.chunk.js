(this.webpackJsonpapxfinance=this.webpackJsonpapxfinance||[]).push([[15],{1127:function(e,t,n){e.exports=n.p+"static/media/masonry.042cb5a6.png"},1573:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ke}));var a,r,c,l,i,o,u,s,m,f,d,b,p,E,h,O=n(100),j=n(44),v=n(0),g=n.n(v),x=n(59),y=n(217),w=n.n(y),k=n(36),S=n(807),N=n(1576),A=n(978),C=n(1124),R=n(1555),D=n(732),P=n(777),M=n(778),T=n(848),I=n(37),F=n(227),U=function(){var e=Object(v.useState)({from:new Date,to:new Date}),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(F.a)();return Object(v.useEffect)((function(){r&&r.getUserClaimRewardTime().then(a)}),[r]),n},H=n(2),W=n.n(H),z=n(16),V=n(748),B=function(){var e=Object(V.a)().slowRefresh,t=Object(v.useState)(!1),n=Object(I.a)(t,2),a=n[0],r=n[1],c=Object(F.a)(),l=null===c||void 0===c?void 0:c.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,c.canUserClaimRewardFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}l&&function(){e.apply(this,arguments)}()}),[l,e,c]),a},_=n(1126),G=k.d.p(a||(a=Object(j.a)(["\n  // font-size: 14px;\n  font-weight: 700;\n  // color: ",";\n  margin: 0 0 6px 0;\n"])),(function(e){return e.theme.color.grey[100]})),K=k.d.div(r||(r=Object(j.a)(["\n  width: 100%;\n  height: 8px;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.theme.color.grey[700]})),q=k.d.div(c||(c=Object(j.a)(["\n  width: ","%;\n  height: 100%;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.progress}),(function(e){return e.theme.color.grey[100]})),J=k.d.div(l||(l=Object(j.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  // padding: ","px ","px;\n"])),(function(e){return e.theme.spacing[2]}),(function(e){return e.theme.spacing[4]})),X=function(e){var t=e.base,n=e.deadline,a=e.hideBar,r=(e.description,Date.now()>=n.getTime()?100:(Date.now()-t.getTime())/(n.getTime()-t.getTime())*100);return g.a.createElement(J,null,g.a.createElement(_.a,{key:(new Date).getTime(),date:n,renderer:function(e){var t=e.days,n=e.hours,a=e.minutes,r=e.seconds,c=String(24*t+n),l=String(a),i=String(r);return g.a.createElement(G,null,c.padStart(2,"0"),":",l.padStart(2,"0"),":",i.padStart(2,"0"))}}),a?"":g.a.createElement(K,null,g.a.createElement(q,{progress:r})))},$=n(753),L=function(){var e=Object(F.a)(),t=Object($.a)();return{onReward:Object(v.useCallback)((function(){t(e.harvestCashFromMasonry(),"Claim APEX from Masonry")}),[e,t])}},Q=n(27),Y=function(){var e=Object(V.a)().slowRefresh,t=Object(v.useState)(Q.a.from(0)),n=Object(I.a)(t,2),a=n[0],r=n[1],c=Object(F.a)(),l=null===c||void 0===c?void 0:c.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,c.getEarningsOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}l&&function(){e.apply(this,arguments)}()}),[l,c,e]),a},Z=n(789),ee=n(28),te=k.d.div(i||(i=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),ne=k.d.div(o||(o=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),ae=k.d.div(u||(u=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),re=function(){var e=Object(Z.a)(),t=L().onReward,n=Y(),a=B(),r=Object(v.useMemo)((function(){return e?Number(e.priceInDollars).toFixed(2):null}),[e]),c=(Number(r)*Number(Object(ee.a)(n))).toFixed(2),l=U(),i=l.from,o=l.to;return g.a.createElement(N.a,null,g.a.createElement(A.a,null,g.a.createElement(C.a,null,g.a.createElement(ae,null,g.a.createElement(te,null,g.a.createElement(P.a,{symbol:"APEX"}),g.a.createElement(T.a,{value:Object(ee.a)(n)}),g.a.createElement(M.a,{text:"\u2248 $".concat(c)}),g.a.createElement(M.a,{text:"STONE Earned"})),g.a.createElement(ne,null,g.a.createElement(R.a,{onClick:t,color:"primary",variant:"contained",disabled:n.eq(0)||!a},"Claim Reward"))))),g.a.createElement(N.a,{mt:2,style:{color:"#FFF"}},a?"":g.a.createElement(A.a,null,g.a.createElement(C.a,null,g.a.createElement(D.a,{style:{textAlign:"center"}},"Claim possible in"),g.a.createElement(X,{hideBar:!0,base:i,deadline:o,description:"Claim available in"})))))},ce=n(964),le=n(968),ie=n(773),oe=n(824),ue=n(780),se=function(){var e=Object(v.useState)(!1),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(F.a)(),c=Object(V.a)().slowRefresh,l=null===r||void 0===r?void 0:r.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.canUserUnstakeFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}l&&function(){e.apply(this,arguments)}()}),[l,r,c]),n},me=n(786),fe=n(771),de=n(788),be=n(776),pe=function(e){var t=e.max,n=e.onConfirm,a=(e.onDismiss,e.tokenName),r=void 0===a?"":a,c=Object(v.useState)(""),l=Object(I.a)(c,2),i=l[0],o=l[1],u=Object(v.useMemo)((function(){return Object(ee.b)(t,"USDC"===r?6:18)}),[t,r]),s=Object(v.useCallback)((function(e){o(e.currentTarget.value)}),[o]),m=Object(v.useCallback)((function(){o(u)}),[u,o]);return g.a.createElement(me.a,null,g.a.createElement(de.a,{text:"Deposit ".concat(r)}),g.a.createElement(be.a,{value:i,onSelectMax:m,onChange:s,max:u,symbol:r}),g.a.createElement(fe.a,null,g.a.createElement(R.a,{color:"primary",variant:"contained",onClick:function(){return n(i)}},"Confirm")))},Ee=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),a=e.tokenName,r=void 0===a?"":a,c=Object(v.useState)(""),l=Object(I.a)(c,2),i=l[0],o=l[1],u=Object(v.useMemo)((function(){return Object(ee.b)(n)}),[n]),s=Object(v.useCallback)((function(e){o(e.currentTarget.value)}),[o]),m=Object(v.useCallback)((function(){o(u)}),[u,o]);return g.a.createElement(me.a,null,g.a.createElement(de.a,{text:"Withdraw ".concat(r)}),g.a.createElement(be.a,{onSelectMax:m,onChange:s,value:i,max:u,symbol:r}),g.a.createElement(fe.a,null,g.a.createElement(R.a,{color:"primary",variant:"contained",onClick:function(){return t(i)}},"Confirm")))},he=function(){var e=Object(V.a)().slowRefresh,t=Object(v.useState)(Q.a.from(0)),n=Object(I.a)(t,2),a=n[0],r=n[1],c=Object(F.a)(),l=null===c||void 0===c?void 0:c.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,c.getStakedSharesOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}l&&function(){e.apply(this,arguments)}()}),[e,l,c]),a},Oe=n(897),je=function(){var e=Object(v.useState)({from:new Date,to:new Date}),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(F.a)();return Object(v.useEffect)((function(){r&&r.getUserUnstakeTime().then(a)}),[r]),n},ve=function(){var e=Object(F.a)(),t=Object($.a)();return{onStake:Object(v.useCallback)((function(n){t(e.stakeShareToMasonry(n),"Stake ".concat(n," ASHARE to the masonry"))}),[e,t])}},ge=function(){var e=Object(F.a)(),t=Object($.a)();return{onWithdraw:Object(v.useCallback)((function(n){t(e.withdrawShareFromMasonry(n),"Withdraw ".concat(n," ASHARE from the masonry"))}),[e,t])}},xe=k.d.div(s||(s=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),ye=k.d.div(m||(m=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),we=k.d.div(f||(f=Object(j.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),ke=k.d.div(d||(d=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Se=function(){var e=Object(F.a)(),t=Object(ie.b)(e.ASHARE,e.contracts.Masonry.address),n=Object(I.a)(t,2),a=n[0],r=n[1],c=Object(ue.a)(e.ASHARE),l=he(),i=je(),o=i.from,u=i.to,s=Object(Oe.a)("ASHARE",e.ASHARE),m=Object(v.useMemo)((function(){return s?(Number(s)*Number(Object(ee.a)(l))).toFixed(2).toString():null}),[s,l]),f=ve().onStake,d=ge().onWithdraw,b=se(),p=Object(oe.a)(g.a.createElement(pe,{max:c,onConfirm:function(e){f(e),O()},tokenName:"AShare"})),E=Object(I.a)(p,2),h=E[0],O=E[1],j=Object(oe.a)(g.a.createElement(Ee,{max:l,onConfirm:function(e){d(e),w()},tokenName:"AShare"})),x=Object(I.a)(j,2),y=x[0],w=x[1];return g.a.createElement(N.a,null,g.a.createElement(A.a,null,g.a.createElement(C.a,null,g.a.createElement(ke,null,g.a.createElement(xe,null,g.a.createElement(P.a,{symbol:"ASHARE"}),g.a.createElement(T.a,{value:Object(ee.a)(l)}),g.a.createElement(M.a,{text:"\u2248 $".concat(m)}),g.a.createElement(M.a,{text:"SSHARE Staked"})),g.a.createElement(ye,null,a!==ie.a.APPROVED?g.a.createElement(R.a,{disabled:a!==ie.a.NOT_APPROVED,variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:r},"Approve ASHARE"):g.a.createElement(g.a.Fragment,null,g.a.createElement(le.a,{disabled:!b,onClick:y},g.a.createElement(ce.b,null)),g.a.createElement(we,null),g.a.createElement(le.a,{onClick:h},g.a.createElement(ce.a,null))))))),g.a.createElement(N.a,{mt:2,style:{color:"#FFF"}},b?"":g.a.createElement(A.a,null,g.a.createElement(C.a,null,g.a.createElement(D.a,{style:{textAlign:"center"}},"Withdraw possible in"),g.a.createElement(X,{hideBar:!0,base:o,deadline:u,description:"Withdraw available in"})))))},Ne=n(1549),Ae=n(1551),Ce=n(1086),Re=n(787),De=n(819),Pe=function(e){var t=Object(F.a)(),n=Object($.a)();return{onRedeem:Object(v.useCallback)((function(){var a=e||"Redeem ASHARE from Masonry";n(t.exitFromMasonry(),a)}),[t,e,n])}},Me=function(){var e=Object(v.useState)(Q.a.from(0)),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(F.a)(),c=Object(V.a)().slowRefresh;return Object(v.useEffect)((function(){function e(){return(e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getCurrentEpoch();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,c]),n},Te=function(){var e=Object(v.useState)(0),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(F.a)(),c=Object(V.a)().slowRefresh;return Object(v.useEffect)((function(){function e(){return(e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getMasonryAPR();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,c]),n},Ie=function(){var e=Object(v.useState)(),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(F.a)(),c=Object(V.a)().slowRefresh;return Object(v.useEffect)((function(){function e(){return(e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getTombStatInEstimatedTWAP();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,c]),n},Fe=function(){var e=Object(V.a)().slowRefresh,t=Object(v.useState)({from:new Date,to:new Date}),n=Object(I.a)(t,2),a=n[0],r=n[1],c=Object(F.a)();return Object(v.useEffect)((function(){c&&c.getTreasuryNextAllocationTime().then(r)}),[c,e]),a},Ue=function(){var e=Object(v.useState)(Q.a.from(0)),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(F.a)(),c=Object(V.a)().slowRefresh,l=null===r||void 0===r?void 0:r.isUnlocked;return Object(v.useEffect)((function(){function e(){return(e=Object(z.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getTotalStakedInMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}l&&function(){e.apply(this,arguments)}()}),[l,c,r]),n},He=(n(1127),n(790)),We=n.n(He),ze=Object(k.c)(b||(b=Object(j.a)(["\n  body {\n    // background-size: cover !important;\n    // background-color: rgb(24, 24, 33);\n    background: url(",") no-repeat !important;\n  }\n"])),We.a),Ve=Object(Ne.a)((function(e){return{gridItem:Object(O.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),Be=k.d.div(p||(p=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),_e=k.d.div(E||(E=Object(j.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),Ge=k.d.div(h||(h=Object(j.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Ke=function(){var e=Ve(),t=Object(x.b)().account,n=Pe().onRedeem,a=he(),r=Me(),c=Ie(),l=Ue(),i=Te(),o=B(),u=se(),s=Object(v.useMemo)((function(){return c?Number(c.priceInDollars).toFixed(4):null}),[c]),m=Fe().to;return g.a.createElement(De.a,null,g.a.createElement(ze,null),g.a.createElement("div",{className:"animateme"},g.a.createElement("ul",{className:"bg-bubbles"},g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null))),t?g.a.createElement(g.a.Fragment,null,g.a.createElement(D.a,{style:{color:"#fff"},align:"center",variant:"h5",gutterBottom:!0},"Board Room"),g.a.createElement(N.a,{mt:5},g.a.createElement(Ae.a,{container:!0,justify:"center",spacing:3},g.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},g.a.createElement(A.a,{className:e.gridItem},g.a.createElement(C.a,null,g.a.createElement(D.a,{style:{textAlign:"center"}},"Next Epoch"),g.a.createElement(X,{base:w()().toDate(),hideBar:!0,deadline:m,description:"Next Epoch"})))),g.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},g.a.createElement(A.a,{className:e.gridItem},g.a.createElement(C.a,{align:"center"},g.a.createElement(D.a,{style:{color:"#fff"},align:"center",gutterBottom:!0},"Current Epoch"),g.a.createElement(D.a,null,Number(r))))),g.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},g.a.createElement(A.a,{className:e.gridItem},g.a.createElement(C.a,{align:"center"},g.a.createElement(D.a,null,"STONE Price",g.a.createElement("small",null,"(TWAP)")),g.a.createElement(D.a,null,s)))),g.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},g.a.createElement(A.a,{className:e.gridItem},g.a.createElement(C.a,{align:"center"},g.a.createElement(D.a,null,"APR"),g.a.createElement(D.a,null,i.toFixed(2),"%")))),g.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2},g.a.createElement(A.a,{className:e.gridItem},g.a.createElement(C.a,{align:"center"},g.a.createElement(D.a,null,"SSHARE Staked"),g.a.createElement(D.a,null,Object(ee.a)(l)))))),g.a.createElement(Ae.a,{container:!0,justify:"center"},g.a.createElement(N.a,{mt:3,style:{width:"600px"}},g.a.createElement(Ce.a,{variant:"filled",severity:"warning"},"Staked SSHAREs can only be withdrawn after 6 epochs since deposit."))),g.a.createElement(N.a,{mt:4},g.a.createElement(Be,null,g.a.createElement(_e,null,g.a.createElement(Ge,null,g.a.createElement(re,null)),g.a.createElement(S.a,null),g.a.createElement(Ge,null,g.a.createElement(Se,null)))))),g.a.createElement(N.a,{mt:5},g.a.createElement(Ae.a,{container:!0,justify:"center",spacing:3,mt:10},g.a.createElement(R.a,{disabled:a.eq(0)||!u&&!o,onClick:n,color:"primary",variant:"contained"},"Claim and Withdraw")))):g.a.createElement(Re.a,null))}},753:function(e,t,n){"use strict";var a=n(0),r=n(759),c=n(98);t.a=function(){var e=Object(r.b)(),t=Object(c.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r,c,l=n(44),i=n(0),o=n.n(i),u=n(36),s=u.d.div(a||(a=Object(l.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),m=u.d.div(r||(r=Object(l.a)(["\n  flex: 1;\n"]))),f=u.d.div(c||(c=Object(l.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),d=function(e){var t=e.children,n=o.a.Children.toArray(t).length;return o.a.createElement(s,null,o.a.Children.map(t,(function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null,e),t<n-1&&o.a.createElement(f,null))})))}},773:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a,r=n(2),c=n.n(r),l=n(16),i=n(96),o=n(27),u=n(0),s=n(759),m=n(781),f=i.a.constants.MaxUint256,d=o.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),t.b=function(e,t){var n=Object(s.a)(e.address,t),r=Object(m.a)(e,t,n),i=Object(u.useMemo)((function(){return r?r.lt(d)?n?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,n]),o=Object(s.b)(),b=Object(u.useCallback)(Object(l.a)(c.a.mark((function n(){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i===a.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:return n.next=5,e.approve(t,f);case 5:r=n.sent,o(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:t}});case 7:case"end":return n.stop()}}),n)}))),[i,e,t,o]);return[i,b]}},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),c=n(1576),l=n(847),i=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(l.a,null))}},789:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(16),l=n(37),i=n(0),o=n(227),u=n(748);t.a=function(){var e=Object(i.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(u.a)().fastRefresh,m=Object(o.a)();return Object(i.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,m.getTombStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,m,s]),n}},790:function(e,t,n){e.exports=n.p+"static/media/bg.1923e644.jpg"},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r=n(44),c=n(0),l=n.n(c),i=n(36),o=i.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var t,n=e.size,a=void 0===n?"md":n,r=Object(c.useContext)(i.a).spacing;switch(a){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return l.a.createElement(o,{size:t})}},848:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a,r=n(44),c=n(0),l=n.n(c),i=n(36).d.div(a||(a=Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),o=function(e){var t=e.value;return l.a.createElement(i,null,t)}},897:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(16),l=n(37),i=n(0),o=n(227),u=n(38);t.a=function(e,t){var n=Object(i.useState)("0"),a=Object(l.a)(n,2),s=a[0],m=a[1],f=Object(o.a)(),d=null===f||void 0===f?void 0:f.isUnlocked,b=Object(i.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.getDepositTokenPriceInDollars(e,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[t,e,f]);return Object(i.useEffect)((function(){if(d){b().catch((function(e){return console.error(e.stack)}));var e=setInterval(b,u.b.refreshInterval);return function(){return clearInterval(e)}}}),[d,m,f,b]),s}},964:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a,r=n(0),c=n.n(r),l=n(36),i=n(44),o=l.d.div(a||(a=Object(i.a)([""]))),u=function(e){var t=e.children;return c.a.createElement(o,null,t)},s=function(e){var t=e.color,n=Object(r.useContext)(l.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[900]})))},m=function(e){var t=e.color,n=Object(r.useContext)(l.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{viewBox:"0 0 24 24",fill:t||n.grey[900],width:"18px",height:"18px"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13H5v-2h14v2z"})))}},968:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,c=n(44),l=n(0),i=n.n(l),o=n(36),u=n(230),s=o.d.button(a||(a=Object(c.a)(["\n  align-items: center;\n  // background-color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 28px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",";\n    background-color: #50efca;\n  }\n"])),(function(e){return e.theme.color.grey[e.disabled?900:700]}),(function(e){return e.disabled?e.theme.color.grey[900]:"#0086ff"}),(function(e){return e.disabled?e.theme.color.grey[500]:e.theme.color.primary.main}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.theme.color.grey[800]})),m=Object(o.d)(u.b)(r||(r=Object(c.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),f=function(e){var t=e.children,n=e.disabled,a=e.onClick,r=e.to;return i.a.createElement(s,{disabled:n,onClick:a},r?i.a.createElement(m,{to:r},t):t)}}}]);
//# sourceMappingURL=15.34424343.chunk.js.map