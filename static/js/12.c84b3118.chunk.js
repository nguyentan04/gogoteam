(this.webpackJsonpapxfinance=this.webpackJsonpapxfinance||[]).push([[12],{1125:function(e,t,n){e.exports=n.p+"static/media/cemetery.10f2f6b9.png"},1574:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ye}));var a,r,c,o,l,i,u,s,m,d,f,b,p,E=n(37),v=n(44),O=n(0),g=n.n(O),j=n(59),h=n(41),k=n(100),x=n(36),y=n(1549),N=n(1576),w=n(1551),T=n(978),P=n(1124),A=n(732),C=n(1555),S=n(967),I=n(807),R=n(787),D=n(778),F=n(848),M=n(2),U=n.n(M),z=n(16),V=n(27),W=n(227),H=n(38),B=function(e,t,n){var a=Object(O.useState)(V.a.from(0)),r=Object(E.a)(a,2),c=r[0],o=r[1],l=Object(W.a)(),i=null===l||void 0===l?void 0:l.isUnlocked,u=Object(O.useCallback)(Object(z.a)(U.a.mark((function a(){var r;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.earnedFromBank(e,t,n,l.myAccount);case 2:r=a.sent,o(r);case 4:case"end":return a.stop()}}),a)}))),[e,t,n,l]);return Object(O.useEffect)((function(){if(i){u().catch((function(e){return console.error(e.stack)}));var e=setInterval(u,H.b.refreshInterval);return function(){return clearInterval(e)}}}),[i,e,l,u]),c},L=n(753),_=function(e){var t=Object(W.a)(),n=Object(L.a)();return{onReward:Object(O.useCallback)((function(){n(t.harvest(e.contract,e.poolId),"Claim ".concat(e.earnTokenName," from ").concat(e.contract))}),[e,t,n])}},G=n(28),K=n(777),Z=n(789),X=n(895),$=x.d.div(a||(a=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),q=x.d.div(r||(r=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),J=x.d.div(c||(c=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Y=function(e){var t=e.bank,n=B(t.contract,t.earnTokenName,t.poolId),a=_(t).onReward,r=Object(Z.a)(),c=Object(X.a)(),o="ASHARE"===t.earnTokenName?"ASHARE":"APEX",l="ASHARE"===t.earnTokenName?c:r,i=Object(O.useMemo)((function(){return l?Number(l.priceInDollars).toFixed(2):null}),[l]),u=(Number(i)*Number(Object(G.a)(n))).toFixed(2);return g.a.createElement(T.a,null,g.a.createElement(P.a,null,g.a.createElement(J,null,g.a.createElement($,null,g.a.createElement(K.a,{symbol:t.earnToken.symbol,size:54}),g.a.createElement(F.a,{value:Object(G.a)(n)}),g.a.createElement(D.a,{text:"\u2248 $".concat(u)}),g.a.createElement(D.a,{text:"".concat(o," Earned")})),g.a.createElement(q,null,g.a.createElement(C.a,{onClick:a,disabled:n.eq(0),color:"primary",variant:"contained"},"Claim")))))},Q=n(964),ee=n(968),te=n(773),ne=n(824),ae=n(50),re=function(e){var t=Object(W.a)(),n=Object(L.a)();return{onStake:Object(O.useCallback)((function(a){var r=Object(ae.parseUnits)(a,e.depositToken.decimal);n(t.stake(e.contract,e.poolId,r),"Stake ".concat(a," ").concat(e.depositTokenName," to ").concat(e.contract))}),[e,t,n])}},ce=n(893),oe=function(e,t){var n=Object(O.useState)(V.a.from(0)),a=Object(E.a)(n,2),r=a[0],c=a[1],o=Object(W.a)(),l=null===o||void 0===o?void 0:o.isUnlocked,i=Object(O.useCallback)(Object(z.a)(U.a.mark((function n(){var a;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.stakedBalanceOnBank(e,t,o.myAccount);case 2:a=n.sent,c(a);case 4:case"end":return n.stop()}}),n)}))),[e,t,o]);return Object(O.useEffect)((function(){if(l){i().catch((function(e){return console.error(e.stack)}));var e=setInterval(i,H.b.refreshInterval);return function(){return clearInterval(e)}}}),[l,e,c,o,i]),r},le=n(897),ie=n(780),ue=function(e){var t=Object(W.a)(),n=Object(L.a)();return{onWithdraw:Object(O.useCallback)((function(a){var r=Object(ae.parseUnits)(a,e.depositToken.decimal);n(t.unstake(e.contract,e.poolId,r),"Withdraw ".concat(a," ").concat(e.depositTokenName," from ").concat(e.contract))}),[e,t,n])}},se=n(786),me=n(771),de=n(788),fe=n(776),be=function(e){var t=e.max,n=e.decimals,a=e.onConfirm,r=(e.onDismiss,e.tokenName),c=void 0===r?"":r,o=Object(O.useState)(""),l=Object(E.a)(o,2),i=l[0],u=l[1],s=Object(O.useMemo)((function(){return Object(G.b)(t,n,!1)}),[t,n]),m=Object(O.useCallback)((function(e){u(e.currentTarget.value)}),[u]),d=Object(O.useCallback)((function(){u(s)}),[s,u]);return g.a.createElement(se.a,null,g.a.createElement(de.a,{text:"Deposit ".concat(c)}),g.a.createElement(fe.a,{value:i,onSelectMax:d,onChange:m,max:s,symbol:c}),g.a.createElement(me.a,null,g.a.createElement(C.a,{color:"primary",variant:"contained",onClick:function(){return a(i)}},"Confirm")))},pe=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),a=e.tokenName,r=void 0===a?"":a,c=e.decimals,o=void 0===c?18:c,l=Object(O.useState)(""),i=Object(E.a)(l,2),u=i[0],s=i[1],m=Object(O.useMemo)((function(){return Object(G.b)(n,o,!1)}),[n,o]),d=Object(O.useCallback)((function(e){s(e.currentTarget.value)}),[s]),f=Object(O.useCallback)((function(){s(m)}),[m,s]);return g.a.createElement(se.a,null,g.a.createElement(de.a,{text:"Withdraw ".concat(r)}),g.a.createElement(fe.a,{onSelectMax:f,onChange:d,value:u,max:m,symbol:r}),g.a.createElement(me.a,null,g.a.createElement(C.a,{color:"primary",variant:"contained",onClick:function(){return t(u)}},"Confirm")))},Ee=n(966),ve=x.d.div(o||(o=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),Oe=x.d.div(l||(l=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),ge=x.d.div(i||(i=Object(v.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),je=x.d.div(u||(u=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),he=function(e){var t=e.bank,n=Object(te.b)(t.depositToken,t.address),a=Object(E.a)(n,2),r=a[0],c=a[1],o=(Object(O.useContext)(x.a).color,Object(ie.a)(t.depositToken)),l=oe(t.contract,t.poolId),i=Object(le.a)(t.depositTokenName,t.depositToken),u=Object(O.useMemo)((function(){return i||null}),[i]),s=(Number(u)*Number(Object(G.a)(l,t.depositToken.decimal))).toFixed(2),m=re(t).onStake,d=Object(ce.a)(t).onZap,f=ue(t).onWithdraw,b=Object(ne.a)(g.a.createElement(be,{max:o,decimals:t.depositToken.decimal,onConfirm:function(e){Number(e)<=0||isNaN(Number(e))||(m(e),j())},tokenName:t.depositTokenName})),p=Object(E.a)(b,2),v=p[0],j=p[1],h=Object(ne.a)(g.a.createElement(Ee.a,{decimals:t.depositToken.decimal,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(d(e,t,n),y())},tokenName:t.depositTokenName})),k=Object(E.a)(h,2),y=(k[0],k[1]),N=Object(ne.a)(g.a.createElement(pe,{max:l,decimals:t.depositToken.decimal,onConfirm:function(e){Number(e)<=0||isNaN(Number(e))||(f(e),S())},tokenName:t.depositTokenName})),w=Object(E.a)(N,2),A=w[0],S=w[1];return g.a.createElement(T.a,null,g.a.createElement(P.a,null,g.a.createElement(je,null,g.a.createElement(ve,null,g.a.createElement(K.a,{symbol:t.depositToken.symbol,size:54}),g.a.createElement(F.a,{value:Object(G.a)(l,t.depositToken.decimal)}),g.a.createElement(D.a,{text:"\u2248 $".concat(s)}),g.a.createElement(D.a,{text:"".concat(t.depositTokenName," Staked")})),g.a.createElement(Oe,null,r!==te.a.APPROVED?g.a.createElement(C.a,{disabled:t.closedForStaking||r===te.a.PENDING||r===te.a.UNKNOWN,onClick:c,color:"primary",variant:"contained",style:{marginTop:"20px"}},"Approve ".concat(t.depositTokenName)):g.a.createElement(g.a.Fragment,null,g.a.createElement(ee.a,{onClick:A},g.a.createElement(Q.b,null)),g.a.createElement(ge,null),g.a.createElement(ee.a,{disabled:t.closedForStaking,onClick:function(){return t.closedForStaking?null:v()}},g.a.createElement(Q.a,null)))))))},ke=n(242),xe=function(e){return Object(O.useContext)(ke.a).banks.find((function(t){return t.contract===e}))},ye=function(e){var t=Object(W.a)(),n=Object(O.useState)(),a=Object(E.a)(n,2),r=a[0],c=a[1],o=Object(O.useCallback)(Object(z.a)(U.a.mark((function n(){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=c,n.next=3,t.getPoolAPRs(e);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)}))),[t,e]);return Object(O.useEffect)((function(){o().catch((function(e){return console.error("Failed to fetch ABOND price: ".concat(e.stack))}));var e=setInterval(o,H.b.refreshInterval);return function(){return clearInterval(e)}}),[c,t,o]),r},Ne=function(e){var t=Object(W.a)(),n=Object(L.a)();return{onRedeem:Object(O.useCallback)((function(){n(t.exit(e.contract,e.poolId),"Redeem ".concat(e.contract))}),[e,t,n])}},we=Object(y.a)((function(e){return{gridItem:Object(k.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),Te=function(e){var t,n,a=e.bank,r=Object(W.a)(),c=r.APEX.address,o=r.ASHARE.address;return a.depositTokenName.includes("APEX")?(t="APEX-FTM pair",n="https://spookyswap.finance/add/FTM/"+c):(t="ASHARE-FTM pair",n="https://spookyswap.finance/add/FTM/"+o),g.a.createElement(T.a,{style:{backgroundColor:"#fff"}},g.a.createElement(P.a,null,g.a.createElement(Ce,{href:n,target:"_blank"},"\ud83d\udc7b Provide liquidity for ".concat(t," now on SpookySwap \ud83d\udc7b"))))},Pe=function(){return g.a.createElement(Re,null,g.a.createElement(S.a,{icon:"\ud83c\udfda",title:"Not Found",subtitle:"You've hit a bank just robbed by unicorns."}))},Ae=x.d.div(s||(s=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),Ce=x.d.a(m||(m=Object(v.a)(["\n  font-weight: 700;\n  text-decoration: none;\n  color: ",";\n"])),(function(e){return e.theme.color.primary.main})),Se=x.d.div(d||(d=Object(v.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),Ie=x.d.div(f||(f=Object(v.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Re=x.d.div(b||(b=Object(v.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n"]))),De=function(){Object(O.useEffect)((function(){return window.scrollTo(0,0)}));var e=we(),t=Object(h.f)().bankId,n=xe(t),a=Object(j.b)().account,r=Ne(n).onRedeem,c=ye(n);return a&&n?g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{style:{marginTop:"-50px",textAlign:"center"}},g.a.createElement(S.a,{icon:"\ud83c\udfe6",subtitle:"Deposit ".concat(null===n||void 0===n?void 0:n.depositTokenName," and earn ").concat(null===n||void 0===n?void 0:n.earnTokenName)})),g.a.createElement(N.a,null,g.a.createElement(w.a,{container:!0,justify:"center",spacing:3,style:{marginBottom:"50px"}},g.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},g.a.createElement(T.a,{className:e.gridItem},g.a.createElement(P.a,{style:{textAlign:"center"}},g.a.createElement(A.a,null,"APR"),g.a.createElement(A.a,null,n.closedForStaking?"0.00":null===c||void 0===c?void 0:c.yearlyAPR,"%")))),g.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},g.a.createElement(T.a,{className:e.gridItem},g.a.createElement(P.a,{style:{textAlign:"center"}},g.a.createElement(A.a,null,"Daily APR"),g.a.createElement(A.a,null,n.closedForStaking?"0.00":null===c||void 0===c?void 0:c.dailyAPR,"%")))),g.a.createElement(w.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},g.a.createElement(T.a,{className:e.gridItem},g.a.createElement(P.a,{style:{textAlign:"center"}},g.a.createElement(A.a,null,"TVL"),g.a.createElement(A.a,null,"$",null===c||void 0===c?void 0:c.TVL)))))),g.a.createElement(N.a,{mt:5},g.a.createElement(Ae,null,g.a.createElement(Se,null,g.a.createElement(Ie,null,g.a.createElement(Y,{bank:n})),g.a.createElement(I.a,null),g.a.createElement(Ie,null,g.a.createElement(he,{bank:n}))),g.a.createElement(I.a,{size:"lg"}),n.depositTokenName.includes("LP")&&g.a.createElement(Te,{bank:n}),g.a.createElement(I.a,{size:"lg"}),g.a.createElement("div",null,g.a.createElement(C.a,{onClick:r,color:"primary",variant:"contained"},"Claim & Withdraw")),g.a.createElement(I.a,{size:"lg"})))):n?g.a.createElement(R.a,null):g.a.createElement(Pe,null)},Fe=n(1550),Me=n(1086),Ue=n(819),ze=n(230),Ve=n(10),We=n(43),He=(n(25),n(228)),Be=n(229),Le=O.forwardRef((function(e,t){var n=e.disableSpacing,a=void 0!==n&&n,r=e.classes,c=e.className,o=Object(We.a)(e,["disableSpacing","classes","className"]);return O.createElement("div",Object(Ve.a)({className:Object(He.default)(r.root,c,!a&&r.spacing),ref:t},o))})),_e=Object(Be.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(Le),Ge=function(e){var t=e.bank;return g.a.createElement(w.a,{item:!0,xs:12,md:4,lg:4},g.a.createElement(T.a,{variant:"outlined"},g.a.createElement(P.a,null,g.a.createElement(N.a,{style:{position:"relative"}},g.a.createElement(N.a,{style:{position:"absolute",right:"0px",top:"-5px",height:"48px",width:"48px",borderRadius:"40px",backgroundColor:"white",alignItems:"center",display:"flex",justifyContent:"center"}},g.a.createElement(K.a,{size:24,symbol:t.depositTokenName})),g.a.createElement(A.a,{style:{color:"#fff"},variant:"h6"},t.depositTokenName),g.a.createElement(A.a,{color:"textSecondary"},"Deposit ",t.depositTokenName.toUpperCase()," Earn "," ".concat(t.earnTokenName)))),g.a.createElement(_e,{style:{justifyContent:"flex-end"}},g.a.createElement(C.a,{color:"primary",size:"small",variant:"contained",component:ze.b,to:"/staking/".concat(t.contract)},"View"))))},Ke=n(1125),Ze=n.n(Ke),Xe=n(790),$e=n.n(Xe),qe=function(){return[Object(O.useContext)(ke.a).banks]},Je=Object(x.c)(p||(p=Object(v.a)(["\n  body {\n    // background: url(",") no-repeat !important;\n    // background-size: cover !important;\n    background: url(",") no-repeat !important;\n  }\n"])),Ze.a,$e.a),Ye=function(){var e=qe(),t=Object(E.a)(e,1)[0],n=Object(h.g)().path,a=Object(j.b)().account,r=t.filter((function(e){return!e.finished}));return g.a.createElement(h.c,null,g.a.createElement(Ue.a,null,g.a.createElement(h.a,{exact:!0,path:n},g.a.createElement(Je,null),g.a.createElement("div",{className:"animateme"},g.a.createElement("ul",{className:"bg-bubbles"},g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null),g.a.createElement("li",null))),a?g.a.createElement(Fe.a,{maxWidth:"lg"},g.a.createElement(A.a,{style:{color:"#fff"},align:"left",variant:"h5",gutterBottom:!0},"Staking"),g.a.createElement(N.a,{mt:5},g.a.createElement("div",{hidden:0===r.filter((function(e){return 2===e.sectionInUI})).length},g.a.createElement(A.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},"Earn SSHARE by staking LP"),g.a.createElement(w.a,{container:!0,spacing:3},r.filter((function(e){return 2===e.sectionInUI})).map((function(e){return g.a.createElement(g.a.Fragment,{key:e.name},g.a.createElement(Ge,{bank:e}))})))),g.a.createElement("div",{hidden:0===r.filter((function(e){return 1===e.sectionInUI})).length},g.a.createElement(A.a,{color:"textPrimary",variant:"h6",gutterBottom:!0,style:{marginTop:"20px"}},"Earn STONE by staking LP"),g.a.createElement(w.a,{container:!0,spacing:3,style:{marginTop:"20px"}},r.filter((function(e){return 1===e.sectionInUI})).map((function(e){return g.a.createElement(g.a.Fragment,{key:e.name},g.a.createElement(Ge,{bank:e}))})))),g.a.createElement("div",{hidden:0===r.filter((function(e){return 0===e.sectionInUI})).length},g.a.createElement(A.a,{color:"textPrimary",variant:"h6",gutterBottom:!0,style:{marginTop:"20px"}},"Genesis Pools"),g.a.createElement(Me.a,{variant:"filled",severity:"warning"},"All below pools have ended. Please unstake and collect your rewards."),g.a.createElement(w.a,{container:!0,spacing:3,style:{marginTop:"20px"}},r.filter((function(e){return 0===e.sectionInUI})).map((function(e){return g.a.createElement(g.a.Fragment,{key:e.name},g.a.createElement(Ge,{bank:e}))})))))):g.a.createElement(R.a,null)),g.a.createElement(h.a,{path:"".concat(n,"/:bankId")},g.a.createElement(Je,null),g.a.createElement(De,null))))}},753:function(e,t,n){"use strict";var a=n(0),r=n(759),c=n(98);t.a=function(){var e=Object(r.b)(),t=Object(c.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,c,o=n(44),l=n(0),i=n.n(l),u=n(36),s=u.d.div(a||(a=Object(o.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),m=u.d.div(r||(r=Object(o.a)(["\n  flex: 1;\n"]))),d=u.d.div(c||(c=Object(o.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),f=function(e){var t=e.children,n=i.a.Children.toArray(t).length;return i.a.createElement(s,null,i.a.Children.map(t,(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null,e),t<n-1&&i.a.createElement(d,null))})))}},773:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a,r=n(2),c=n.n(r),o=n(16),l=n(96),i=n(27),u=n(0),s=n(759),m=n(781),d=l.a.constants.MaxUint256,f=i.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),t.b=function(e,t){var n=Object(s.a)(e.address,t),r=Object(m.a)(e,t,n),l=Object(u.useMemo)((function(){return r?r.lt(f)?n?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,n]),i=Object(s.b)(),b=Object(u.useCallback)(Object(o.a)(c.a.mark((function n(){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l===a.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:return n.next=5,e.approve(t,d);case 5:r=n.sent,i(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:t}});case 7:case"end":return n.stop()}}),n)}))),[l,e,t,i]);return[l,b]}},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c=n(1576),o=n(847),l=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(o.a,null))}},789:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(16),o=n(37),l=n(0),i=n(227),u=n(748);t.a=function(){var e=Object(l.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(u.a)().fastRefresh,m=Object(i.a)();return Object(l.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,m.getTombStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,m,s]),n}},790:function(e,t,n){e.exports=n.p+"static/media/bg.1923e644.jpg"},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r=n(44),c=n(0),o=n.n(c),l=n(36),i=l.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var t,n=e.size,a=void 0===n?"md":n,r=Object(c.useContext)(l.a).spacing;switch(a){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return o.a.createElement(i,{size:t})}},810:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(16),o=n(37),l=n(0),i=n(227),u=n(748);t.a=function(e){var t=Object(l.useState)(),n=Object(o.a)(t,2),a=n[0],s=n[1],m=Object(u.a)().slowRefresh,d=Object(i.a)();return Object(l.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=s,t.next=4,d.getLPStat(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.error(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[s,d,m,e]),a}},848:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a,r=n(44),c=n(0),o=n.n(c),l=n(36).d.div(a||(a=Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),i=function(e){var t=e.value;return o.a.createElement(l,null,t)}},893:function(e,t,n){"use strict";var a=n(0),r=n(227),c=n(753);t.a=function(e){var t=Object(r.a)(),n=Object(c.a)();return{onZap:Object(a.useCallback)((function(a,r,c){n(t.zapIn(a,r,c),"Zap ".concat(c," in ").concat(e.depositTokenName,"."))}),[e,t,n])}}},895:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(16),o=n(37),l=n(0),i=n(227),u=n(748);t.a=function(){var e=Object(l.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(u.a)().slowRefresh,m=Object(i.a)();return Object(l.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,m.getShareStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,m,s]),n}},897:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(16),o=n(37),l=n(0),i=n(227),u=n(38);t.a=function(e,t){var n=Object(l.useState)("0"),a=Object(o.a)(n,2),s=a[0],m=a[1],d=Object(i.a)(),f=null===d||void 0===d?void 0:d.isUnlocked,b=Object(l.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.getDepositTokenPriceInDollars(e,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[t,e,d]);return Object(l.useEffect)((function(){if(f){b().catch((function(e){return console.error(e.stack)}));var e=setInterval(b,u.b.refreshInterval);return function(){return clearInterval(e)}}}),[f,m,d,b]),s}},964:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a,r=n(0),c=n.n(r),o=n(36),l=n(44),i=o.d.div(a||(a=Object(l.a)([""]))),u=function(e){var t=e.children;return c.a.createElement(i,null,t)},s=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[900]})))},m=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(u,null,c.a.createElement("svg",{viewBox:"0 0 24 24",fill:t||n.grey[900],width:"18px",height:"18px"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13H5v-2h14v2z"})))}},966:function(e,t,n){"use strict";var a,r=n(44),c=n(2),o=n.n(c),l=n(16),i=n(37),u=n(0),s=n.n(u),m=n(732),d=n(1584),f=n(1575),b=n(1555),p=n(229),E=n(1563),v=n(786),O=n(771),g=n(788),j=n(776),h=n(36),k=n(28),x=n(778),y=n(810),N=n(780),w=n(227),T=n(59),P=n(96),A=n(27),C=n(759),S=n(781),I=n(79),R=P.a.constants.MaxUint256,D=A.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={}));var F,M,U=function(e){var t,n=Object(w.a)();e===I.a?t=n.FTM:e===I.d?t=n.APEX:e===I.e&&(t=n.ASHARE);var r=Object(C.a)(t.address,I.f),c=Object(S.a)(t,I.f,r),i=Object(u.useMemo)((function(){return t===n.FTM?a.APPROVED:c?c.lt(D)?r?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[c,r,t,n]),s=Object(C.b)(),m=Object(u.useCallback)(Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i===a.NOT_APPROVED){e.next=3;break}return console.error("approve was called unnecessarily"),e.abrupt("return");case 3:return e.next=5,t.approve(I.f,R);case 5:n=e.sent,s(n,{summary:"Approve ".concat(t.symbol),approval:{tokenAddress:t.address,spender:I.f}});case 7:case"end":return e.stop()}}),e)}))),[i,t,s]);return[i,m]},z=n(1086),V=h.d.div(F||(F=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),W=h.d.div(M||(M=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n"])),(function(e){return e.theme.color.grey[400]})),H=Object(p.a)({root:{backgroundColor:"white",color:"#fff","&:hover":{backgroundColor:"grey",color:"#fff"},selected:{backgroundColor:"black"}}})(E.a);t.a=function(e){var t=e.onConfirm,n=(e.onDismiss,e.tokenName),r=void 0===n?"":n,c=e.decimals,p=void 0===c?18:c,E=Object(w.a)(),h=Object(T.b)().balance,P=(Number(h)/1e18).toFixed(4).toString(),A=Object(N.a)(E.APEX),C=Object(N.a)(E.ASHARE),S=Object(u.useState)(""),R=Object(i.a)(S,2),D=R[0],F=R[1],M=Object(u.useState)(I.a),B=Object(i.a)(M,2),L=B[0],_=B[1],G=Object(u.useState)(P),K=Object(i.a)(G,2),Z=K[0],X=K[1],$=Object(u.useState)({token0:"0",token1:"0"}),q=Object(i.a)($,2),J=q[0],Y=q[1],Q=U(L),ee=Object(i.a)(Q,2),te=ee[0],ne=ee[1],ae=Object(y.a)("STONE-FTM-LP"),re=Object(y.a)("SSHARE-FTM-LP"),ce=Object(u.useMemo)((function(){return ae||null}),[ae]),oe=Object(u.useMemo)((function(){return re||null}),[re]),le=r.startsWith(I.d)?null===ce||void 0===ce?void 0:ce.ftmAmount:null===oe||void 0===oe?void 0:oe.ftmAmount;var ie=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.currentTarget.value&&0!==t.currentTarget.value||(F(t.currentTarget.value),Y({token0:"0",token1:"0"})),a=t.currentTarget.value,!isNaN(parseFloat(a))&&isFinite(a)){e.next=3;break}return e.abrupt("return");case 3:return F(t.currentTarget.value),e.next=6,E.estimateZapIn(L,r,String(t.currentTarget.value));case 6:n=e.sent,Y({token0:n[0].toString(),token1:n[1].toString()});case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(Z),e.next=3,E.estimateZapIn(L,r,String(Z));case 3:t=e.sent,Y({token0:t[0].toString(),token1:t[1].toString()});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(v.a,null,s.a.createElement(g.a,{text:"Zap in ".concat(r)}),s.a.createElement(m.a,{variant:"h6",align:"center"},"Powered by"," ",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://mlnl.finance"},"mlnl.finance")),s.a.createElement(V,null),s.a.createElement(d.a,{style:{color:"#fff"},id:"label"},"Select asset to zap with"),s.a.createElement(f.a,{onChange:function(e){var t=e.target.value;_(t),X(P),e.target.value===I.e&&X(Object(k.a)(C,p)),e.target.value===I.d&&X(Object(k.a)(A,p))},style:{color:"#fff"},labelId:"label",id:"select",value:L},s.a.createElement(H,{value:I.a},"FTM"),s.a.createElement(H,{value:I.e},"ASHARE")),s.a.createElement(j.a,{onSelectMax:ue,onChange:ie,value:D,max:Z,symbol:L}),s.a.createElement(x.a,{text:"Zap Estimations"}),s.a.createElement(W,null," ",r,": ",Number(J.token0)/Number(le)),s.a.createElement(W,null," ","(",Number(J.token0)," ",I.a," / ",Number(J.token1)," ",r.startsWith(I.d)?I.d:I.e,")"," "),s.a.createElement(O.a,null,s.a.createElement(b.a,{color:"primary",variant:"contained",onClick:function(){return te!==a.APPROVED?ne():t(L,r,D)}},te!==a.APPROVED?"Approve":"Let's go")),s.a.createElement(V,null),s.a.createElement(z.a,{variant:"filled",severity:"warning"},"Beta feature. Use at your own risk!"))}},967:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,c,o=n(44),l=n(0),i=n.n(l),u=n(36),s=u.d.div(a||(a=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  max-width: 512px;\n  width: 100%;\n  margin: 0 auto;\n"])),(function(e){return e.theme.spacing[6]}),(function(e){return e.theme.spacing[6]})),m=u.d.h1(r||(r=Object(o.a)(["\n  color: ",";\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n"])),(function(e){return e.theme.color.grey[200]})),d=u.d.h3(c||(c=Object(o.a)(["\n  color: ",";\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"])),(function(e){return e.theme.color.grey[700]})),f=function(e){e.icon;var t=e.subtitle,n=e.title;return i.a.createElement(s,null,i.a.createElement(m,null,n),i.a.createElement(d,null,t))}},968:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r,c=n(44),o=n(0),l=n.n(o),i=n(36),u=n(230),s=i.d.button(a||(a=Object(c.a)(["\n  align-items: center;\n  // background-color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 28px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",";\n    background-color: #50efca;\n  }\n"])),(function(e){return e.theme.color.grey[e.disabled?900:700]}),(function(e){return e.disabled?e.theme.color.grey[900]:"#0086ff"}),(function(e){return e.disabled?e.theme.color.grey[500]:e.theme.color.primary.main}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.theme.color.grey[800]})),m=Object(i.d)(u.b)(r||(r=Object(c.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),d=function(e){var t=e.children,n=e.disabled,a=e.onClick,r=e.to;return l.a.createElement(s,{disabled:n,onClick:a},r?l.a.createElement(m,{to:r},t):t)}}}]);
//# sourceMappingURL=12.c84b3118.chunk.js.map