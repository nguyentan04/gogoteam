(this.webpackJsonpapxfinance=this.webpackJsonpapxfinance||[]).push([[13],{1118:function(e,t,n){e.exports=n.p+"static/media/crypto_tomb_cash.f2b44ef4.svg"},1119:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(25)),o=n(0),i=a(o),c=a(n(1120)),u=a(n(1121));function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,o=t.easingFn,i=t.end,c=t.formattingFn,s=t.prefix,l=t.separator,p=t.start,f=t.suffix,m=t.useEasing;return new u(e,p,i,a,r,{decimal:n,easingFn:o,formattingFn:c,separator:l,prefix:s,suffix:f,useEasing:m,useGrouping:!!l})},v=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return p(b(n=g(this,(e=m(t)).call.apply(e,[this].concat(r)))),"createInstance",(function(){return"function"===typeof n.props.children&&c(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),O(n.containerRef.current,n.props)})),p(b(n),"pauseResume",(function(){var e=b(n),t=e.reset,a=e.restart,r=e.update,o=n.props.onPauseResume;n.instance.pauseResume(),o({reset:t,start:a,update:r})})),p(b(n),"reset",(function(){var e=b(n),t=e.pauseResume,a=e.restart,r=e.update,o=n.props.onReset;n.instance.reset(),o({pauseResume:t,start:a,update:r})})),p(b(n),"restart",(function(){n.reset(),n.start()})),p(b(n),"start",(function(){var e=b(n),t=e.pauseResume,a=e.reset,r=e.restart,o=e.update,i=n.props,c=i.delay,u=i.onEnd,s=i.onStart,l=function(){return n.instance.start((function(){return u({pauseResume:t,reset:a,start:r,update:o})}))};c>0?n.timeoutId=setTimeout(l,1e3*c):l(),s({pauseResume:t,reset:a,update:o})})),p(b(n),"update",(function(e){var t=b(n),a=t.pauseResume,r=t.reset,o=t.restart,i=n.props.onUpdate;n.instance.update(e),i({pauseResume:a,reset:r,start:o})})),p(b(n),"containerRef",i.createRef()),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,o=t.prefix,i=t.redraw,c=t.duration,u=t.separator,s=t.decimals,l=t.decimal;return c!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||o!==e.prefix||u!==e.separator||s!==e.decimals||l!==e.decimal||i}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,o=t.prefix,i=t.duration,c=t.separator,u=t.decimals,s=t.decimal,l=t.preserveValue;i===e.duration&&a===e.start&&r===e.suffix&&o===e.prefix&&c===e.separator&&u===e.decimals&&s===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(l||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,o=this.pauseResume,c=this.reset,u=this.restart,s=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:o,reset:c,start:u,update:s}):i.createElement("span",{className:n,ref:r,style:a})}}])&&l(n.prototype,a),r&&l(n,r),t}(o.Component);p(v,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),p(v,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var E={innerHTML:null};t.default=v,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v.defaultProps,{},e),n=t.start,a=t.formattingFn,r=h(o.useState("function"===typeof a?a(n):n),2),i=r[0],c=r[1],u=o.useRef(null),s=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=O(E,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);c(e)},e}();return u.current=n,n},l=function(){var e=t.onReset;s().reset(),e({pauseResume:d,start:m,update:b})},m=function e(){var n=t.onStart,a=t.onEnd;s().reset(),s().start((function(){a({pauseResume:d,reset:l,start:e,update:b})})),n({pauseResume:d,reset:l,update:b})},d=function(){var e=t.onPauseResume;s().pauseResume(),e({reset:l,start:m,update:b})},b=function(e){var n=t.onUpdate;s().update(e),n({pauseResume:d,reset:l,start:m})};return o.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){n({pauseResume:d,reset:l,update:b}),s().start((function(){clearTimeout(r),a({pauseResume:d,reset:l,start:m,update:b})}))}),1e3*e);return l}),[]),{countUp:i,start:m,pauseResume:d,reset:l,update:b}}},1120:function(e,t,n){"use strict";var a=function(){};e.exports=a},1121:function(e,t,n){var a,r;void 0===(r="function"===typeof(a=function(e,t,n){return function(e,t,n,a,r,o){function i(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,o,i,u=e<0;if(e=Math.abs(e).toFixed(c.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(r="",o=0,i=n.length;o<i;++o)0!==o&&o%3===0&&(r=c.options.separator+r),r=n[i-o-1]+r;n=r}return c.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(u?"-":"")+c.options.prefix+n+a+c.options.suffix},prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var u in c.options)o.hasOwnProperty(u)&&null!==o[u]&&(c.options[u]=o[u]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var s=0,l=["webkit","moz","ms","o"],p=0;p<l.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[l[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[p]+"CancelAnimationFrame"]||window[l[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-s)),r=window.setTimeout((function(){e(n+a)}),a);return s=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(n),i(c.startVal)&&i(c.endVal)?(c.decimals=Math.max(0,a||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(r)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!i(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},1122:function(e){e.exports=JSON.parse("{}")},1579:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var a,r,o,i,c=n(37),u=n(100),s=n(44),l=n(0),p=n.n(l),f=n(819),m=n(892),d=n.n(m),b=(n(1118),n(973),n(36)),g=n(1119),h=n.n(g),O=(b.d.div(a||(a=Object(s.a)(["\n  background-color: ",";\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 95px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  // box-shadow: inset 4px 4px 8px ",",\n  //   inset -6px -6px 12px ",";\n  margin: 0 auto ","px;\n"])),(function(e){return e.theme.color.grey[500]}),(function(e){return e.theme.color.grey[300]}),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[3]})),n(777)),v=n(789),E=n(810),y=n(824),x=n(893),j=n(894),w=n(895),S=n(2),k=n.n(S),F=n(16),N=n(227),V=n(748),A=function(){var e=Object(l.useState)(0),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(V.a)().slowRefresh,o=Object(N.a)();return Object(l.useEffect)((function(){function e(){return(e=Object(F.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,o.getTotalValueLocked();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,o,r]),n},R=(n(1122),n(239)),T=n(790),P=n.n(T),M=n(975),C=n.n(M),D=n(978),I=n(732),z=n(1551),U=n(1124),L=n(1555),_=n(1576),H=n(966),q=n(1549),B=Object(b.c)(r||(r=Object(s.a)(["\n  body {\n    // background: url(",") no-repeat !important;\n    // background-size: cover !important;\n    background: url(",") no-repeat !important;\n  }\n"])),d.a,P.a),G=Object(q.a)((function(e){return{button:Object(u.a)({},e.breakpoints.down("415"),{marginTop:"10px"})}})),Z=(b.d.a(o||(o=Object(s.a)(["\nfont-weight: 700;\ntext-decoration: none;\n"]))),Object(b.d)(D.a)(i||(i=Object(s.a)(["\nborder-radius: 3px!important;\nbackground: #1f1f2b !important;\n"])))),W=function(){console.log("debug rendering this");G();var e,t,n=A(),a=Object(E.a)("STONE-FTM-LP"),r=Object(E.a)("SSHARE-FTM-LP"),o=Object(v.a)(),i=Object(w.a)(),u=Object(j.a)(),s=Object(N.a)();e=R.tomb,t=R.tShare;e.address,t.address,Object(l.useMemo)((function(){return a||null}),[a]),Object(l.useMemo)((function(){return r||null}),[r]);var m=Object(l.useMemo)((function(){return o?Number(o.priceInDollars).toFixed(2):null}),[o]),d=Object(l.useMemo)((function(){return o?Number(o.tokenInFtm).toFixed(4):null}),[o]),b=Object(l.useMemo)((function(){return o?String(o.circulatingSupply):null}),[o]),g=Object(l.useMemo)((function(){return o?String(o.totalSupply):null}),[o]),S=Object(l.useMemo)((function(){return i?Number(i.priceInDollars).toFixed(2):null}),[i]),k=Object(l.useMemo)((function(){return i?Number(i.tokenInFtm).toFixed(4):null}),[i]),F=Object(l.useMemo)((function(){return i?String(i.circulatingSupply):null}),[i]),V=Object(l.useMemo)((function(){return i?String(i.totalSupply):null}),[i]),T=Object(l.useMemo)((function(){return u?Number(u.priceInDollars).toFixed(2):null}),[u]),P=Object(l.useMemo)((function(){return u?Number(u.tokenInFtm).toFixed(4):null}),[u]),M=Object(l.useMemo)((function(){return u?String(u.circulatingSupply):null}),[u]),D=Object(l.useMemo)((function(){return u?String(u.totalSupply):null}),[u]),q=Object(x.a)({depositTokenName:"STONE-FTM-LP"}),W=Object(x.a)({depositTokenName:"SSHARE-FTM-LP"}),$=Object(y.a)(p.a.createElement(H.a,{decimals:18,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(q.onZap(e,t,n),J())},tokenName:"STONE-FTM-LP"})),X=Object(c.a)($,2),J=(X[0],X[1]),K=Object(y.a)(p.a.createElement(H.a,{decimals:18,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(W.onZap(e,t,n),Y())},tokenName:"SSHARE-FTM-LP"})),Q=Object(c.a)(K,2),Y=(Q[0],Q[1]);return p.a.createElement(f.a,null,p.a.createElement(B,null),p.a.createElement("div",{className:"animateme"},p.a.createElement("ul",{className:"bg-bubbles"},p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null),p.a.createElement("li",null))),p.a.createElement(I.a,{style:{color:"#fff"},align:"left",variant:"h5",gutterBottom:!0},"Welcome to STONE Finance"),p.a.createElement(z.a,{container:!0,spacing:3},p.a.createElement(z.a,{item:!0,xs:12,sm:5},p.a.createElement(Z,{style:{height:"100%"}},p.a.createElement(U.a,{align:"center",style:{marginTop:"17px"}},p.a.createElement(I.a,{style:{color:"#fff"}},"Total Value Locked"),p.a.createElement(h.a,{style:{fontSize:"25px"},end:n,separator:",",prefix:"$"})))),p.a.createElement(z.a,{item:!0,xs:12,sm:7},p.a.createElement(Z,{style:{height:"100%"}},p.a.createElement(U.a,{style:{paddingBottom:"-10px",paddingLeft:"30px"}},p.a.createElement("p",null,"Any investment that offers medium to high rewards has risks, and yield farming is no different. Please visit our documentation before purchasing our STONE assets.")))),p.a.createElement(z.a,{item:!0,xs:12,sm:4},p.a.createElement(Z,null,p.a.createElement(U.a,{align:"center",style:{position:"relative"}},p.a.createElement(I.a,{style:{color:"#fff"},variant:"h5",gutterBottom:!0},"STONE"),p.a.createElement(L.a,{onClick:function(){s.watchAssetInMetamask("APEX")},style:{position:"absolute",top:"10px",right:"10px"}},p.a.createElement("img",{alt:"metamask fox",style:{width:"20px"},src:C.a})),p.a.createElement(_.a,{mt:2},p.a.createElement(O.a,{symbol:"APEX"})),"Current Price",p.a.createElement(_.a,null,p.a.createElement("span",{style:{fontSize:"30px"}},d||"-.----"," FTM")),p.a.createElement(_.a,null,p.a.createElement("span",{style:{fontSize:"16px",alignContent:"flex-start"}},"$",m||"-.--")),p.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $",(b*m).toFixed(2)," ",p.a.createElement("br",null),"Circulating Supply: ",b," ",p.a.createElement("br",null),"Total Supply: ",g)))),p.a.createElement(z.a,{item:!0,xs:12,sm:4},p.a.createElement(Z,null,p.a.createElement(U.a,{align:"center",style:{position:"relative"}},p.a.createElement(I.a,{style:{color:"#fff"},variant:"h5",gutterBottom:!0},"SSHARE"),p.a.createElement(L.a,{onClick:function(){s.watchAssetInMetamask("ASHARE")},style:{position:"absolute",top:"10px",right:"10px"}},p.a.createElement("img",{alt:"metamask fox",style:{width:"20px"},src:C.a})),p.a.createElement(_.a,{mt:2},p.a.createElement(O.a,{symbol:"ASHARE"})),"Current Price",p.a.createElement(_.a,null,p.a.createElement("span",{style:{fontSize:"30px"}},k||"-.----"," FTM")),p.a.createElement(_.a,null,p.a.createElement("span",{style:{fontSize:"16px"}},"$",S||"-.--")),p.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $",(F*S).toFixed(2)," ",p.a.createElement("br",null),"Circulating Supply: ",F," ",p.a.createElement("br",null),"Total Supply: ",V)))),p.a.createElement(z.a,{item:!0,xs:12,sm:4},p.a.createElement(Z,null,p.a.createElement(U.a,{align:"center",style:{position:"relative"}},p.a.createElement(I.a,{style:{color:"#fff"},variant:"h5",gutterBottom:!0},"SBOND"),p.a.createElement(L.a,{onClick:function(){s.watchAssetInMetamask("ABOND")},style:{position:"absolute",top:"10px",right:"10px"}},p.a.createElement("img",{alt:"metamask fox",style:{width:"20px"},src:C.a})),p.a.createElement(_.a,{mt:2},p.a.createElement(O.a,{symbol:"ABOND"})),"Current Price",p.a.createElement(_.a,null,p.a.createElement("span",{style:{fontSize:"30px"}},P||"-.----"," FTM")),p.a.createElement(_.a,null,p.a.createElement("span",{style:{fontSize:"16px"}},"$",T||"-.--")),p.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $",(M*T).toFixed(2)," ",p.a.createElement("br",null),"Circulating Supply: ",M," ",p.a.createElement("br",null),"Total Supply: ",D))))))}},753:function(e,t,n){"use strict";var a=n(0),r=n(759),o=n(98);t.a=function(){var e=Object(r.b)(),t=Object(o.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a,r,o,i=n(44),c=n(0),u=n.n(c),s=n(36),l=s.d.div(a||(a=Object(i.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),p=s.d.div(r||(r=Object(i.a)(["\n  flex: 1;\n"]))),f=s.d.div(o||(o=Object(i.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),m=function(e){var t=e.children,n=u.a.Children.toArray(t).length;return u.a.createElement(l,null,u.a.Children.map(t,(function(e,t){return u.a.createElement(u.a.Fragment,null,u.a.createElement(p,null,e),t<n-1&&u.a.createElement(f,null))})))}},789:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(16),i=n(37),c=n(0),u=n(227),s=n(748);t.a=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(s.a)().fastRefresh,p=Object(u.a)();return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,p.getTombStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,p,l]),n}},790:function(e,t,n){e.exports=n.p+"static/media/bg.1923e644.jpg"},810:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(16),i=n(37),c=n(0),u=n(227),s=n(748);t.a=function(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),a=n[0],l=n[1],p=Object(s.a)().slowRefresh,f=Object(u.a)();return Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=l,t.next=4,f.getLPStat(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.error(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[l,f,p,e]),a}},892:function(e,t,n){e.exports=n.p+"static/media/home.87c905bf.png"},893:function(e,t,n){"use strict";var a=n(0),r=n(227),o=n(753);t.a=function(e){var t=Object(r.a)(),n=Object(o.a)();return{onZap:Object(a.useCallback)((function(a,r,o){n(t.zapIn(a,r,o),"Zap ".concat(o," in ").concat(e.depositTokenName,"."))}),[e,t,n])}}},894:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(16),i=n(37),c=n(0),u=n(227),s=n(748);t.a=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(s.a)().slowRefresh,p=Object(u.a)();return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,p.getBondStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,p,l]),n}},895:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(16),i=n(37),c=n(0),u=n(227),s=n(748);t.a=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(s.a)().slowRefresh,p=Object(u.a)();return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,p.getShareStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,p,l]),n}},966:function(e,t,n){"use strict";var a,r=n(44),o=n(2),i=n.n(o),c=n(16),u=n(37),s=n(0),l=n.n(s),p=n(732),f=n(1584),m=n(1575),d=n(1555),b=n(229),g=n(1563),h=n(786),O=n(771),v=n(788),E=n(776),y=n(36),x=n(28),j=n(778),w=n(810),S=n(780),k=n(227),F=n(59),N=n(96),V=n(27),A=n(759),R=n(781),T=n(79),P=N.a.constants.MaxUint256,M=V.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={}));var C,D,I=function(e){var t,n=Object(k.a)();e===T.a?t=n.FTM:e===T.d?t=n.APEX:e===T.e&&(t=n.ASHARE);var r=Object(A.a)(t.address,T.f),o=Object(R.a)(t,T.f,r),u=Object(s.useMemo)((function(){return t===n.FTM?a.APPROVED:o?o.lt(M)?r?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[o,r,t,n]),l=Object(A.b)(),p=Object(s.useCallback)(Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u===a.NOT_APPROVED){e.next=3;break}return console.error("approve was called unnecessarily"),e.abrupt("return");case 3:return e.next=5,t.approve(T.f,P);case 5:n=e.sent,l(n,{summary:"Approve ".concat(t.symbol),approval:{tokenAddress:t.address,spender:T.f}});case 7:case"end":return e.stop()}}),e)}))),[u,t,l]);return[u,p]},z=n(1086),U=y.d.div(C||(C=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),L=y.d.div(D||(D=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n"])),(function(e){return e.theme.color.grey[400]})),_=Object(b.a)({root:{backgroundColor:"white",color:"#fff","&:hover":{backgroundColor:"grey",color:"#fff"},selected:{backgroundColor:"black"}}})(g.a);t.a=function(e){var t=e.onConfirm,n=(e.onDismiss,e.tokenName),r=void 0===n?"":n,o=e.decimals,b=void 0===o?18:o,g=Object(k.a)(),y=Object(F.b)().balance,N=(Number(y)/1e18).toFixed(4).toString(),V=Object(S.a)(g.APEX),A=Object(S.a)(g.ASHARE),R=Object(s.useState)(""),P=Object(u.a)(R,2),M=P[0],C=P[1],D=Object(s.useState)(T.a),H=Object(u.a)(D,2),q=H[0],B=H[1],G=Object(s.useState)(N),Z=Object(u.a)(G,2),W=Z[0],$=Z[1],X=Object(s.useState)({token0:"0",token1:"0"}),J=Object(u.a)(X,2),K=J[0],Q=J[1],Y=I(q),ee=Object(u.a)(Y,2),te=ee[0],ne=ee[1],ae=Object(w.a)("STONE-FTM-LP"),re=Object(w.a)("SSHARE-FTM-LP"),oe=Object(s.useMemo)((function(){return ae||null}),[ae]),ie=Object(s.useMemo)((function(){return re||null}),[re]),ce=r.startsWith(T.d)?null===oe||void 0===oe?void 0:oe.ftmAmount:null===ie||void 0===ie?void 0:ie.ftmAmount;var ue=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.currentTarget.value&&0!==t.currentTarget.value||(C(t.currentTarget.value),Q({token0:"0",token1:"0"})),a=t.currentTarget.value,!isNaN(parseFloat(a))&&isFinite(a)){e.next=3;break}return e.abrupt("return");case 3:return C(t.currentTarget.value),e.next=6,g.estimateZapIn(q,r,String(t.currentTarget.value));case 6:n=e.sent,Q({token0:n[0].toString(),token1:n[1].toString()});case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(W),e.next=3,g.estimateZapIn(q,r,String(W));case 3:t=e.sent,Q({token0:t[0].toString(),token1:t[1].toString()});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(h.a,null,l.a.createElement(v.a,{text:"Zap in ".concat(r)}),l.a.createElement(p.a,{variant:"h6",align:"center"},"Powered by"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://mlnl.finance"},"mlnl.finance")),l.a.createElement(U,null),l.a.createElement(f.a,{style:{color:"#fff"},id:"label"},"Select asset to zap with"),l.a.createElement(m.a,{onChange:function(e){var t=e.target.value;B(t),$(N),e.target.value===T.e&&$(Object(x.a)(A,b)),e.target.value===T.d&&$(Object(x.a)(V,b))},style:{color:"#fff"},labelId:"label",id:"select",value:q},l.a.createElement(_,{value:T.a},"FTM"),l.a.createElement(_,{value:T.e},"ASHARE")),l.a.createElement(E.a,{onSelectMax:se,onChange:ue,value:M,max:W,symbol:q}),l.a.createElement(j.a,{text:"Zap Estimations"}),l.a.createElement(L,null," ",r,": ",Number(K.token0)/Number(ce)),l.a.createElement(L,null," ","(",Number(K.token0)," ",T.a," / ",Number(K.token1)," ",r.startsWith(T.d)?T.d:T.e,")"," "),l.a.createElement(O.a,null,l.a.createElement(d.a,{color:"primary",variant:"contained",onClick:function(){return te!==a.APPROVED?ne():t(q,r,M)}},te!==a.APPROVED?"Approve":"Let's go")),l.a.createElement(U,null),l.a.createElement(z.a,{variant:"filled",severity:"warning"},"Beta feature. Use at your own risk!"))}}}]);
//# sourceMappingURL=13.9ea688cf.chunk.js.map