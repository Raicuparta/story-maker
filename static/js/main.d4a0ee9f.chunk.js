(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),c=n(1),l=n(16),d=n(5),u=(n(33),n(36),n(11)),s={primary:"#1c4265",primaryVariant:Object(u.a)(.15,"#1c4265"),secondary:Object(u.b)(.5,"#1c4265"),secondaryVariant:Object(u.b)(.15,"#1c4265")},m=Object(c.c)(function(e){var t=e.theme;return Object(c.d)(["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:",";}#root{display:flex;height:100vh;}*{user-select:none;}"],t.primary)}),p=n(17),f=n(15),y=n.n(f),h=n(24),b=n(3),g=n(4);function v(){var e=Object(g.a)(["\n    cursor: pointer;\n\n    border-color: ",";\n\n    :hover {\n      border-color: ",";\n    }\n\n    :active {\n      background: ",";\n      border-color: ",";\n    }\n  "]);return v=function(){return e},e}function x(){var e=Object(g.a)(["\n  all: unset;\n  background: ",";\n  margin: 5px;\n  text-align: center;\n  border: solid 3px ",";\n\n  ","\n"]);return x=function(){return e},e}var w=c.e.button.withConfig({displayName:"UIstyle__ButtonBase",componentId:"sc-1m0zbe8-0"})(function(e){var t=e.theme,n=e.onClick;return Object(c.d)(x(),t.secondaryVariant,t.primary,n&&Object(c.d)(v(),t.primaryVariant,t.secondaryVariant,t.primary,t.primaryVariant))}),j=(Object(c.e)(w).withConfig({displayName:"UIstyle__Button",componentId:"sc-1m0zbe8-1"})(["flex:1;border-radius:5px;padding:7px;"]),Object(c.e)(w).withConfig({displayName:"UIstyle__RoundButton",componentId:"sc-1m0zbe8-2"})(["border-radius:100%;flex:unset;overflow:hidden;height:80px;width:80px;@media (orientation:portrait){height:50px;width:50px;}"])),O=c.e.div.withConfig({displayName:"UIstyle__Base",componentId:"sc-1m0zbe8-3"})(["display:flex;justify-content:center;"]),E=Object(c.e)(O).withConfig({displayName:"UIstyle__Row",componentId:"sc-1m0zbe8-4"})([""]),I=Object(c.e)(O).withConfig({displayName:"UIstyle__Column",componentId:"sc-1m0zbe8-5"})(["flex:1;flex-direction:column;"]);function C(){var e=Object(g.a)(["\n  all: unset;\n  background: ",";\n  padding: 10px;\n  border-radius: 10px;\n  margin: 5px;\n  height: 55px;\n\n  ::placeholder {\n    color: ","\n  }\n"]);return C=function(){return e},e}function _(){var e=Object(g.a)(["\n  background: ",";\n  color: ",";\n  flex: 1;\n\n  @media (orientation:portrait) {\n    flex-direction: column;\n  }\n"]);return _=function(){return e},e}var k=Object(c.e)(E).withConfig({displayName:"Editstyle__Wrapper",componentId:"sc-17aii1m-0"})(function(e){var t=e.theme;return Object(c.d)(_(),t.primary,t.secondary)}),N=c.e.textarea.withConfig({displayName:"Editstyle__TextInput",componentId:"sc-17aii1m-1"})(function(e){var t=e.theme;return Object(c.d)(C(),t.primaryVariant,t.secondaryVariant)});var P=function(e,t){var n=[],a=t.x-e.x,r=t.y-e.y,o=Math.abs(a),i=Math.abs(r),c=a>0?1:-1,l=r>0?1:-1,d=0;if(o>i)for(var u=e.x,s=e.y;c<0?u>=t.x:u<=t.x;u+=c)n.push({x:u,y:s}),(d+=i)<<1>=o&&(s+=l,d-=o);else for(var m=e.x,p=e.y;l<0?p>=t.y:p<=t.y;p+=l)n.push({x:m,y:p}),(d+=o)<<1>=i&&(m+=c,d-=i);return n};function U(){var e=Object(g.a)(["\n  flex: 1;\n  background: ",";\n  position: relative;\n  overflow: hidden;\n  margin: 5px;\n  border-radius: 10px;\n  overflow: hidden;\n"]);return U=function(){return e},e}var R=c.e.div.withConfig({displayName:"Drawingstyle__Wrapper",componentId:"sc-1w2x71x-0"})(function(e){var t=e.theme;return Object(c.d)(U(),t.secondaryVariant)}),S=c.e.img.withConfig({displayName:"Drawingstyle__DrawingImage",componentId:"sc-1w2x71x-1"})(["width:100%;height:100%;object-fit:contain;position:absolute;top:0;left:0;image-rendering:pixelated;"]),L=c.e.canvas.withConfig({displayName:"Drawingstyle__Canvas",componentId:"sc-1w2x71x-2"})(["cursor:crosshair;width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;touch-action:none;"]),M={height:60,width:80},V=function(e){var t=e.onChange,n=e.dataURL,o=e.onPressEnd,i=Object(a.useState)(),l=Object(b.a)(i,2),d=l[0],u=l[1],s=Object(a.useState)(),m=Object(b.a)(s,2),p=m[0],f=m[1],y=Object(a.useState)(!1),h=Object(b.a)(y,2),g=h[0],v=h[1],x=Object(a.useState)(),w=Object(b.a)(x,2),j=w[0],O=w[1],E=Object(a.useContext)(c.a);function I(e){if(d&&p){var n=function(e){if(!p)return{x:0,y:0};var t=p.getBoundingClientRect(),n=t.width,a=t.height,r=t.left,o=t.top,i=M.height/M.width,c=a/n,l=i<c?n/M.width:a/M.height,d={x:r,y:o};return i>c?d.x+=(n-M.width*l)/2:d.y+=(a-M.height*l)/2,{x:Math.floor((e.clientX-d.x)/l),y:Math.floor((e.clientY-d.y)/l)}}(e),a=P(j||n,n),r=!0,o=!1,i=void 0;try{for(var c,l=a[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value;d.fillRect(u.x,u.y,1,1)}}catch(s){o=!0,i=s}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}t(p.toDataURL()),O(n)}}function C(){v(!0)}function _(){v(!1),O(void 0),o()}return Object(a.useEffect)(function(){if(d&&p&&(n||(d.fillStyle=E.secondary,d.fillRect(0,0,p.width,p.height),t(p.toDataURL())),d.fillStyle=E.primary,!g)){var e=new Image;e.onload=function(){return d.drawImage(e,0,0)},e.src=n}},[d,p,n,g,t,E]),r.a.createElement(R,null,n&&r.a.createElement(S,{src:n}),r.a.createElement(L,{ref:function(e){!e||p||d||(f(e),u(e.getContext("2d")||void 0))},onMouseMove:function(e){g&&I(e)},onTouchMove:function(e){I(e.touches[0])},onTouchStart:function(e){C(),I(e.touches[0])},onMouseDown:function(e){C(),I(e)},onMouseUp:_,onTouchEnd:_,onMouseOut:_,width:M.width,height:M.height}))},z=n(25),B=Object(c.e)(I).withConfig({displayName:"PanelConnectionsstyle__Wrapper",componentId:"sc-1s1v7v3-0"})(["flex-direction:column;margin:10px;display:flex;flex:unset;@media (orientation:portrait){flex-direction:row;}"]),D=Object(c.e)(E).withConfig({displayName:"PanelConnectionsstyle__PanelsWrapper",componentId:"sc-1s1v7v3-1"})(["@media (orientation:portrait){flex-direction:column;}align-items:center;justify-content:center;"]),T=c.e.div.withConfig({displayName:"PanelConnectionsstyle__NewPannelText",componentId:"sc-1s1v7v3-2"})(["margin-top:-22px;font-size:5em;@media (orientation:portrait){font-size:3.8em;}"]);function W(){var e=Object(g.a)(["\n  ","\n  padding-bottom: 75%;\n  background-color: ",";\n"]);return W=function(){return e},e}function F(){var e=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n"]);return F=function(){return e},e}var A=Object(c.d)(F()),q=c.e.img.withConfig({displayName:"Thumbnailstyle__ThumbnailImage",componentId:"sc-148q6x5-0"})([""," flex:1;"],A),J=c.e.div.withConfig({displayName:"Thumbnailstyle__Placeholder",componentId:"sc-148q6x5-1"})(function(e){var t=e.theme;return Object(c.d)(W(),A,t.secondary)}),H=function(e){var t=e.src;return t?r.a.createElement(q,{src:t}):r.a.createElement(J,null)},K=function(e){var t=e.currentPanel,n=e.prevPanel,a=e.nextPanels,o=e.onConnectionClick,i=e.onNewPanelClick;return r.a.createElement(B,null,n&&r.a.createElement(D,null,r.a.createElement(j,{onClick:function(){return o(n)}},r.a.createElement(H,{src:n.dataURL}))),!n&&r.a.createElement(D,null,r.a.createElement(j,null)),r.a.createElement(D,null,r.a.createElement(j,null,r.a.createElement(H,{src:t.dataURL}))),r.a.createElement(D,null,a.map(function(e){return r.a.createElement(j,{key:e.id,onClick:function(){return o(e)}},r.a.createElement(H,{src:e.dataURL}))}),Object.keys(Object(z.a)(Array(2-a.length))).map(function(e){return r.a.createElement(j,{key:e,onClick:i},r.a.createElement(T,null,"+"))})))},Q={panels:[{id:0,nextIds:[],text:"",dataURL:""}]},X=function(e){var t=e.id,n=Object(d.c)().firestore().collection("stories").doc(t),o=Object(d.d)(n).data()||Q,i=Object(a.useState)(0),c=Object(b.a)(i,2),l=c[0],u=c[1],s=Object(a.useState)(o.panels),m=Object(b.a)(s,2),f=m[0],g=m[1],v=Object(a.useState)(!1),x=Object(b.a)(v,2),w=x[0],j=x[1];if(Object(a.useEffect)(function(){function e(){return(e=Object(h.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.update("panels",f);case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}w&&(j(!1),function(){e.apply(this,arguments)}())},[f,n,w]),!o)return r.a.createElement(r.a.Fragment,null,"Story not found");var O=f[l],E=void 0!==O.prevId?f[O.prevId]:void 0,C=O.nextIds.map(function(e){return f[e]});return r.a.createElement(k,null,r.a.createElement(I,null,r.a.createElement(V,{onChange:function(e){var t=f.slice(0);t[l]=Object(p.a)({},t[l],{dataURL:e||""}),g(t)},onPressEnd:function(){j(!0)},dataURL:O.dataURL}),r.a.createElement(N,{onChange:function(e){var t=f.slice(0);t[l]=Object(p.a)({},t[l],{text:e.target.value}),g(t)},value:O.text,placeholder:"Insert panel text here"})),r.a.createElement(K,{prevPanel:E,currentPanel:O,nextPanels:C,onConnectionClick:function(e){u(e.id)},onNewPanelClick:function(){g(function(e){var t=e.slice(0);return t[l].nextIds.push(t.length),t.push({dataURL:"",id:t.length,nextIds:[],prevId:l,text:""}),t})}}))};function Y(){var e=Object(g.a)(["\n  background: ",";\n  padding: 10px;\n  color: ",";\n"]);return Y=function(){return e},e}function G(){var e=Object(g.a)(["\n  margin: 10px;\n  border: solid 5px ",";\n  border-radius: 10px;\n  overflow: hidden;\n"]);return G=function(){return e},e}var Z=Object(c.e)(E).withConfig({displayName:"Playstyle__Wrapper",componentId:"sc-11vgva9-0"})(["width:100%;padding:10px;"]),$=Object(c.e)(I).withConfig({displayName:"Playstyle__CurrentPanelColumn",componentId:"sc-11vgva9-1"})(["flex:2;"]),ee=c.e.div.withConfig({displayName:"Playstyle__PanelWrapper",componentId:"sc-11vgva9-2"})(function(e){var t=e.theme;return Object(c.d)(G(),t.primaryVariant)}),te=c.e.img.withConfig({displayName:"Playstyle__PanelImage",componentId:"sc-11vgva9-3"})(["width:100%;image-rendering:pixelated;display:block;"]),ne=c.e.div.withConfig({displayName:"Playstyle__PanelText",componentId:"sc-11vgva9-4"})(function(e){var t=e.theme;return Object(c.d)(Y(),t.primaryVariant,t.secondary)}),ae=function(e){var t=e.id,n=Object(a.useState)(0),o=Object(b.a)(n,2),i=o[0],c=o[1],l=Object(d.c)().firestore().collection("stories").doc(t),u=Object(d.d)(l).data();if(!u)return r.a.createElement(r.a.Fragment,null,"Story not found");var s=u.panels[i];return r.a.createElement(Z,null,s&&r.a.createElement($,null,r.a.createElement(ee,null,r.a.createElement(te,{src:s.dataURL,alt:s.text}),r.a.createElement(ne,null,s.text))),r.a.createElement(I,null,s.nextIds&&s.nextIds.map(function(e){return r.a.createElement(ee,{key:e},r.a.createElement(te,{src:u.panels[e].dataURL,alt:u.panels[e].text,onClick:function(){return c(e)}}),r.a.createElement(ne,null,u.panels[e].text))})))},re={apiKey:"AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM",authDomain:"story-maker-85706.firebaseapp.com",databaseURL:"https://story-maker-85706.firebaseio.com",projectId:"story-maker-85706",storageBucket:"story-maker-85706.appspot.com",messagingSenderId:"105986550181",appId:"1:105986550181:web:81ec40d053faad45"},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat("/story-maker","/").concat(e)},ie=function(){return r.a.createElement(c.b,{theme:s},r.a.createElement(d.a,{firebaseConfig:re,initPerformance:!0},r.a.createElement(m,null),r.a.createElement(l.a,{path:oe("story/:id/edit")},function(e){return r.a.createElement(d.b,{fallback:"loading...",traceId:"load-story-player"},r.a.createElement(X,{id:e?e.id:void 0}))}),r.a.createElement(l.a,{path:oe("story/:id")},function(e){return r.a.createElement(d.b,{fallback:"loading...",traceId:"load-story-creaor"},r.a.createElement(ae,{id:e?e.id:void 0}))})))};i.a.render(r.a.createElement(ie,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d4a0ee9f.chunk.js.map