(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(20),l=n(2),s=n(7),d=n.n(s);n(27);d.a.initializeApp({apiKey:"AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM",authDomain:"story-maker-85706.firebaseapp.com",databaseURL:"https://story-maker-85706.firebaseio.com",projectId:"story-maker-85706",storageBucket:"story-maker-85706.appspot.com",messagingSenderId:"105986550181",appId:"1:105986550181:web:81ec40d053faad45"});var u=d.a.database(),p=n(1),m=n(5),f={primary:"#84567b",primaryVariant:Object(m.a)(.15,"#84567b"),secondary:Object(m.b)(.5,"#84567b"),secondaryVariant:Object(m.b)(.15,"#84567b")},h=p.c.button.withConfig({displayName:"UI__Button",componentId:"sc-34y89c-0"})(["all:unset;flex:1;padding:7px;background:",";border-radius:5px;margin:5px;text-align:center;cursor:pointer;border:solid 3px ",";:hover{background:",";}:active{border-color:",";}"],f.secondaryVariant,f.secondaryVariant,f.primary,f.primaryVariant),y=p.c.div.withConfig({displayName:"UI__Row",componentId:"sc-34y89c-1"})(["display:flex;"]),g=p.c.div.withConfig({displayName:"UI__Column",componentId:"sc-34y89c-2"})(["flex:1;display:flex;flex-direction:column;"]),x=n(19),b=p.c.path.withConfig({displayName:"DrawingSVGstyle__Path",componentId:"sc-1fbho8x-0"})(["fill:none;stroke-width:5px;stroke:",";stroke-linejoin:round;stroke-linecap:round;"],f.primaryVariant),v=400,w=300,E=function(e){var t="M "+e.line.map(function(e){return"".concat(e.x," ").concat(e.y)}).join(" L ");return r.a.createElement(b,{d:t})},C=function(e){var t=e.lines;return r.a.createElement("svg",{viewBox:"0 0 ".concat(v," ").concat(w),preserveAspectRatio:"xMidYMid meet"},r.a.createElement("rect",{width:"100%",height:"100%",fill:f.secondary}),t.map(function(e,t){return r.a.createElement(E,{key:t,line:e})}))},j=p.c.div.withConfig({displayName:"Drawingstyle__Wrapper",componentId:"sc-1v97gwe-0"})(["flex:1;touch-action:none;"]),I={width:400,height:300},O=function(e){var t=e.onInputDown,n=e.onInputMove,o=e.lines,i=Object(a.useState)(!1),c=Object(l.a)(i,2),s=c[0],d=c[1],u=Object(a.useRef)(null);function p(){d(!1)}function m(e){var t=u.current.getBoundingClientRect(),n=t.width,a=t.height,r=t.left,o=t.top,i=I.height/I.width<a/n?n/I.width:a/I.height,c={x:0,y:0};return n>a?c.x+=(n-I.width*i)/2:c.y+=(a-I.height*i)/2,{x:(e.clientX-c.x)/i-r,y:(e.clientY-c.y)/i-o}}Object(a.useEffect)(function(){return document.addEventListener("mouseup",p),function(){document.removeEventListener("mouseup",p)}});var f=t&&n?{onMouseDown:function(e){e.preventDefault(),d(!0),0===e.button&&t(m(e))},onTouchStart:function(e){e.preventDefault(),d(!0),t(m(e.touches[0]))}}:{},h=s&&t&&n?{onMouseMove:function(e){e.preventDefault(),n(m(e))},onTouchMove:function(e){e.preventDefault(),n(m(e.touches[0]))}}:{};return r.a.createElement(j,Object.assign({},f,h,{ref:u}),r.a.createElement(C,{lines:o}))},k=p.c.div.withConfig({displayName:"DrawAreastyle__Wrapper",componentId:"sc-1jzetc2-0"})(["margin:5px;overflow:hidden;cursor:crosshair;display:flex;justify-content:center;flex:1;background:",";border-radius:10px;"],f.secondaryVariant),_=function(e){var t=e.lines,n=e.onChange;return r.a.createElement(k,null,r.a.createElement(O,{onInputDown:function(e){n(t.concat([[e]]))},onInputMove:function(e){n([].concat(Object(x.a)(t.slice(0,t.length-1)),[t[t.length-1].concat([e])]))},lines:t}))},N=n(4);function S(){var e=Object(N.a)(["\n    border-color: ",";\n    :hover {\n      border-color: ",";\n    }\n  "]);return S=function(){return e},e}var V=p.c.div.withConfig({displayName:"FlowChartstyle__Wrapper",componentId:"sc-10bnhmv-0"})(["border:3px solid ",";border-radius:5px;margin:5px;flex:1;display:flex;flex-direction:column;align-items:center;padding:10px;position:relative;overflow:scroll;margin-bottom:20px;"],f.secondaryVariant),M=p.c.div.withConfig({displayName:"FlowChartstyle__Node",componentId:"sc-10bnhmv-1"})(["width:20px;height:20px;background:",";border-radius:100%;border:5px solid ",";cursor:pointer;:hover{border-color:",";}",""],f.secondary,f.primary,f.secondaryVariant,function(e){return e.isSelected&&Object(p.b)(S(),f.primaryVariant,f.primaryVariant)}),D=p.c.div.withConfig({displayName:"FlowChartstyle__Preview",componentId:"sc-10bnhmv-2"})(["border-radius:10px;border:5px solid ",";overflow:hidden;position:relative;right:122px;bottom:5px;width:100px;"],f.secondaryVariant),F=p.c.div.withConfig({displayName:"FlowChartstyle__TextPreview",componentId:"sc-10bnhmv-3"})(["font-size:10px;height:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:",";padding:5px;margin-top:-5px;"],f.primaryVariant),L=p.c.div.withConfig({displayName:"FlowChartstyle__NodeRow",componentId:"sc-10bnhmv-4"})(["display:flex;flex-direction:column;align-items:center;flex:1;"]),R=p.c.div.withConfig({displayName:"FlowChartstyle__NodeFork",componentId:"sc-10bnhmv-5"})(["display:flex;flex:1;"]),B=function(e){var t=e.panel;return r.a.createElement(D,null,r.a.createElement(C,{lines:t.drawing}),r.a.createElement(F,null,t.text))},P=function(e){var t=e.panels,n=e.selected,o=e.onNodeClick,i=Object(a.useState)(-1),c=Object(l.a)(i,2),s=c[0],d=c[1],u=Object(a.useRef)(null);return r.a.createElement(V,{ref:u},r.a.createElement(function e(a){var i=a.id,c=a.position,l=a.depth,p=t[i];if(!u.current)return null;var m=u.current.getBoundingClientRect(),f=m.width/Math.pow(l,2);return r.a.createElement(L,null,r.a.createElement(M,{style:u.current?{position:"absolute",top:"".concat(c.y,"px"),left:"".concat(m.width/2+c.x,"px")}:void 0,isSelected:n===i,onClick:function(){return o(p,i)},onMouseEnter:function(){return d(i)},onMouseLeave:function(){return d(-1)}},s===i&&n!==i&&r.a.createElement(B,{panel:p})),p.nextId&&r.a.createElement(e,{id:p.nextId,position:{x:c.x,y:c.y+40},depth:l}),p.choices&&r.a.createElement(R,null,p.choices.map(function(t,n){return r.a.createElement(e,{key:t.id,id:t.id,position:{x:c.x-f+2*f*n,y:c.y+40},depth:l+1})})))},{id:0,depth:2,position:{x:0,y:10}}))},U=Object(p.c)(y).withConfig({displayName:"Homestyle__Wrapper",componentId:"sc-1qsygr6-0"})(["background:",";color:",";flex:1;@media (orientation:portrait){flex-direction:column;}"],f.primary,f.secondary),z=p.c.textarea.withConfig({displayName:"Homestyle__TextInput",componentId:"sc-1qsygr6-1"})(["all:unset;background:",";padding:10px;border-radius:10px;margin:5px;height:55px;::placeholder{color:","}"],f.primaryVariant,f.secondaryVariant),A=Object(p.c)(g).withConfig({displayName:"Homestyle__DrawColumn",componentId:"sc-1qsygr6-2"})(["flex:2;"]),J=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),d=s[0],p=s[1],m=Object(a.useState)(0),f=Object(l.a)(m,2),x=f[0],b=f[1],v=Object(a.useState)([{drawing:[],text:""}]),w=Object(l.a)(v,2),E=w[0],C=w[1];return Object(a.useEffect)(function(){b(E.length-1)},[E.length]),Object(a.useEffect)(function(){o(E[x].drawing),p(E[x].text)},[E,x]),Object(a.useEffect)(function(){E.length<=1||localStorage.setItem("panels",JSON.stringify(E))},[E]),r.a.createElement(U,null,r.a.createElement(A,null,r.a.createElement(_,{lines:n,onChange:o}),r.a.createElement(z,{onChange:function(e){p(e.target.value)},value:d,placeholder:"Insert panel text here"}),r.a.createElement(y,null,r.a.createElement(h,{onClick:function(){u.ref("stories").limitToLast(1).once("value").then(function(e){var t=e.val();t&&C(JSON.parse(Object.values(t)[0].panels))})}},"[Load]"),r.a.createElement(h,{onClick:function(){C(function(e){var t=e.slice(0);return t[x]=Object(c.a)({},t[x],{drawing:n,text:d}),t})}},"Save Panel"),r.a.createElement(h,{onClick:function(){u.ref("stories").push({panels:JSON.stringify(E),author:"Ricky"})}},"Publish"))),r.a.createElement(g,null,r.a.createElement(y,null,r.a.createElement(h,{onClick:function(){E[x].nextId||E[x].choices||C(function(e){var t=e.slice(0);return t[x].choices=[{id:t.length},{id:t.length+1}],t.push({drawing:[],text:""}),t.push({drawing:[],text:""}),t})}},"+ Choice"),r.a.createElement(h,{onClick:function(){E[x].nextId||E[x].choices||C(function(e){var t=e.slice(0);return t[x].nextId=E.length,t.push({drawing:[],text:""}),t})}},"+ Panel")),r.a.createElement(P,{panels:E,onNodeClick:function(e,t){b(t)},selected:x})))};function T(){var e=Object(N.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: ",";\n  }\n\n  #root {\n    display: flex;\n    height: 100vh;\n  }\n"]);return T=function(){return e},e}var W=Object(p.a)(T(),f.primary);i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(J,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.129c64ec.chunk.js.map