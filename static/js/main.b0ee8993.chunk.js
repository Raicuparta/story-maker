(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=n(2),l=n(23),d=n(7),s=n(5),u=n(4),p=n(1),m=n(6),f={primary:"#1c4265",primaryVariant:Object(m.a)(.15,"#1c4265"),secondary:Object(m.b)(.5,"#1c4265"),secondaryVariant:Object(m.b)(.15,"#1c4265")};function y(){var e=Object(u.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: ",";\n  }\n\n  #root {\n    display: flex;\n    height: 100vh;\n  }\n\n  * {\n    user-select: none;\n  }\n"]);return y=function(){return e},e}var h=Object(p.a)(y(),f.primary),x=n(8),g=n(13),b=n.n(g);n(36);b.a.initializeApp({apiKey:"AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM",appId:"1:105986550181:web:81ec40d053faad45",authDomain:"story-maker-85706.firebaseapp.com",databaseURL:"https://story-maker-85706.firebaseio.com",messagingSenderId:"105986550181",projectId:"story-maker-85706",storageBucket:"story-maker-85706.appspot.com"});var v=b.a.database();function w(){var e=Object(u.a)(["\n    cursor: pointer;\n\n    border-color: ",";\n\n    :hover {\n      border-color: ",";\n    }\n\n    :active {\n      background: ",";\n      border-color: ",";\n    }\n  "]);return w=function(){return e},e}var I=p.c.button.withConfig({displayName:"UIstyle__ButtonBase",componentId:"sc-1m0zbe8-0"})(["all:unset;background:",";margin:5px;text-align:center;border:solid 3px ",";",""],f.secondaryVariant,f.primary,function(e){return e.onClick&&Object(p.b)(w(),f.primaryVariant,f.secondaryVariant,f.primary,f.primaryVariant)}),j=Object(p.c)(I).withConfig({displayName:"UIstyle__Button",componentId:"sc-1m0zbe8-1"})(["flex:1;border-radius:5px;padding:7px;"]),C=Object(p.c)(I).withConfig({displayName:"UIstyle__RoundButton",componentId:"sc-1m0zbe8-2"})(["border-radius:100%;flex:unset;overflow:hidden;height:80px;width:80px;@media (orientation:portrait){height:50px;width:50px;}"]),O=p.c.div.withConfig({displayName:"UIstyle__Base",componentId:"sc-1m0zbe8-3"})(["display:flex;justify-content:center;"]),E=Object(p.c)(O).withConfig({displayName:"UIstyle__Row",componentId:"sc-1m0zbe8-4"})([""]),_=Object(p.c)(O).withConfig({displayName:"UIstyle__Column",componentId:"sc-1m0zbe8-5"})(["flex:1;flex-direction:column;"]),k=Object(p.c)(E).withConfig({displayName:"StoryCreatorstyle__Wrapper",componentId:"y7tatx-0"})(["background:",";color:",";flex:1;@media (orientation:portrait){flex-direction:column;}"],f.primary,f.secondary),N=p.c.textarea.withConfig({displayName:"StoryCreatorstyle__TextInput",componentId:"y7tatx-1"})(["all:unset;background:",";padding:10px;border-radius:10px;margin:5px;height:55px;::placeholder{color:","}"],f.primaryVariant,f.secondaryVariant);var S=function(e,t){var n=[],a=t.x-e.x,r=t.y-e.y,o=Math.abs(a),i=Math.abs(r),c=a>0?1:-1,l=r>0?1:-1,d=0;if(o>i)for(var s=e.x,u=e.y;c<0?s>=t.x:s<=t.x;s+=c)n.push({x:s,y:u}),(d+=i)<<1>=o&&(u+=l,d-=o);else for(var p=e.x,m=e.y;l<0?m>=t.y:m<=t.y;m+=l)n.push({x:p,y:m}),(d+=o)<<1>=i&&(p+=c,d-=i);return n},U=p.c.div.withConfig({displayName:"Drawingstyle__Wrapper",componentId:"sc-1w2x71x-0"})(["flex:1;background:",";position:relative;overflow:hidden;margin:5px;border-radius:10px;overflow:hidden;"],f.secondaryVariant),R=p.c.img.withConfig({displayName:"Drawingstyle__DrawingImage",componentId:"sc-1w2x71x-1"})(["width:100%;height:100%;object-fit:contain;position:absolute;top:0;left:0;image-rendering:pixelated;"]),L=p.c.canvas.withConfig({displayName:"Drawingstyle__Canvas",componentId:"sc-1w2x71x-2"})(["cursor:crosshair;width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;touch-action:none;"]),P={height:60,width:80},M=function(e){var t=e.onChange,n=e.dataURL,o=Object(a.useState)(),i=Object(c.a)(o,2),l=i[0],d=i[1],s=Object(a.useState)(),u=Object(c.a)(s,2),p=u[0],m=u[1],y=Object(a.useState)(!1),h=Object(c.a)(y,2),x=h[0],g=h[1],b=Object(a.useState)(),v=Object(c.a)(b,2),w=v[0],I=v[1];function j(e){if(l&&p){var n=function(e){if(!p)return{x:0,y:0};var t=p.getBoundingClientRect(),n=t.width,a=t.height,r=t.left,o=t.top,i=P.height/P.width,c=a/n,l=i<c?n/P.width:a/P.height,d={x:r,y:o};return i>c?d.x+=(n-P.width*l)/2:d.y+=(a-P.height*l)/2,{x:Math.floor((e.clientX-d.x)/l),y:Math.floor((e.clientY-d.y)/l)}}(e),a=S(w||n,n),r=!0,o=!1,i=void 0;try{for(var c,d=a[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var s=c.value;l.fillRect(s.x,s.y,1,1)}}catch(u){o=!0,i=u}finally{try{r||null==d.return||d.return()}finally{if(o)throw i}}t(p.toDataURL()),I(n)}}function C(){g(!0)}function O(){g(!1),I(void 0)}return Object(a.useEffect)(function(){if(l&&p&&(n||(l.fillStyle=f.secondary,l.fillRect(0,0,p.width,p.height),t(p.toDataURL())),l.fillStyle=f.primary,!x)){var e=new Image;e.onload=function(){return l.drawImage(e,0,0)},e.src=n}},[l,p,n,x,t]),r.a.createElement(U,null,n&&r.a.createElement(R,{src:n}),r.a.createElement(L,{ref:function(e){!e||p||l||(m(e),d(e.getContext("2d")||void 0))},onMouseMove:function(e){x&&j(e)},onTouchMove:function(e){j(e.touches[0])},onTouchStart:function(e){C(),j(e.touches[0])},onMouseDown:function(e){C(),j(e)},onMouseUp:O,onTouchEnd:O,onMouseOut:O,width:P.width,height:P.height}))},V=n(24),z=Object(p.c)(_).withConfig({displayName:"PanelConnectionsstyle__Wrapper",componentId:"sc-1s1v7v3-0"})(["flex-direction:column;margin:10px;display:flex;flex:unset;@media (orientation:portrait){flex-direction:row;}"]),T=Object(p.c)(E).withConfig({displayName:"PanelConnectionsstyle__PanelsWrapper",componentId:"sc-1s1v7v3-1"})(["@media (orientation:portrait){flex-direction:column;}align-items:center;justify-content:center;"]),B=p.c.div.withConfig({displayName:"PanelConnectionsstyle__NewPannelText",componentId:"sc-1s1v7v3-2"})(["margin-top:-22px;font-size:5em;@media (orientation:portrait){font-size:3.8em;}"]);function D(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]);return D=function(){return e},e}var W=Object(p.b)(D()),J=p.c.img.withConfig({displayName:"Thumbnailstyle__ThumbnailImage",componentId:"sc-148q6x5-0"})([""," flex:1;"],W),A=p.c.div.withConfig({displayName:"Thumbnailstyle__Placeholder",componentId:"sc-148q6x5-1"})([""," padding-bottom:75%;background-color:",";"],W,f.secondary),F=function(e){var t=e.src;return t?r.a.createElement(J,{src:t}):r.a.createElement(A,null)},q=function(e){var t=e.currentPanel,n=e.prevPanel,a=e.nextPanels,o=e.onConnectionClick,i=e.onNewPanelClick;return r.a.createElement(z,null,n&&r.a.createElement(T,null,r.a.createElement(C,{onClick:function(){return o(n)}},r.a.createElement(F,{src:n.dataURL}))),!n&&r.a.createElement(T,null,r.a.createElement(C,null)),r.a.createElement(T,null,r.a.createElement(C,null,r.a.createElement(F,{src:t.dataURL}))),r.a.createElement(T,null,a.map(function(e){return r.a.createElement(C,{key:e.id,onClick:function(){return o(e)}},r.a.createElement(F,{src:e.dataURL}))}),Object.keys(Object(V.a)(Array(2-a.length))).map(function(e){return r.a.createElement(C,{key:e,onClick:i},r.a.createElement(B,null,"+"))})))},H=function(){var e=Object(a.useState)(0),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([{dataURL:"",id:0,nextIds:[],text:""}]),l=Object(c.a)(i,2),d=l[0],s=l[1],u=d[n],p=void 0!==u.prevId?d[u.prevId]:void 0,m=u.nextIds.map(function(e){return d[e]});return r.a.createElement(k,null,r.a.createElement(_,null,r.a.createElement(M,{onChange:function(e){s(function(t){var a=t.slice(0);return a[n]=Object(x.a)({},a[n],{dataURL:e}),a})},dataURL:u.dataURL}),r.a.createElement(N,{onChange:function(e){var t=d.slice(0);t[n]=Object(x.a)({},t[n],{text:e.target.value}),s(t)},value:u.text,placeholder:"Insert panel text here"}),r.a.createElement(E,null,r.a.createElement(j,{onClick:function(){v.ref("stories").limitToLast(1).once("value").then(function(e){var t=e.val();if(t){var n=Object.values(t)[0].panels;s(n.map(function(e){return{dataURL:e.dataURL,id:e.id,nextIds:JSON.parse(e.nextIds),prevId:e.prevId,text:e.text}}))}})}},"Load"),r.a.createElement(j,{onClick:function(){var e={panels:d.map(function(e){return Object(x.a)({dataURL:e.dataURL,id:e.id,nextIds:JSON.stringify(e.nextIds),text:e.text},void 0!==e.prevId?{prevId:e.prevId}:{})})};v.ref("stories").push(e)}},"Save"))),r.a.createElement(q,{prevPanel:p,currentPanel:u,nextPanels:m,onConnectionClick:function(e){o(e.id)},onNewPanelClick:function(){s(function(e){var t=e.slice(0);return t[n].nextIds.push(t.length),t.push({dataURL:"",id:t.length,nextIds:[],prevId:n,text:""}),t})}}))},K=Object(p.c)(E).withConfig({displayName:"StoryPlayerstyle__Wrapper",componentId:"sc-10j1xfg-0"})(["width:100%;padding:10px;"]),Q=Object(p.c)(_).withConfig({displayName:"StoryPlayerstyle__CurrentPanelColumn",componentId:"sc-10j1xfg-1"})(["flex:2;"]),X=p.c.div.withConfig({displayName:"StoryPlayerstyle__PanelWrapper",componentId:"sc-10j1xfg-2"})(["margin:10px;border:solid 5px ",";border-radius:10px;overflow:hidden;"],f.primaryVariant),Y=p.c.img.withConfig({displayName:"StoryPlayerstyle__PanelImage",componentId:"sc-10j1xfg-3"})(["width:100%;image-rendering:pixelated;display:block;"]),G=p.c.div.withConfig({displayName:"StoryPlayerstyle__PanelText",componentId:"sc-10j1xfg-4"})(["background:",";padding:10px;color:",";"],f.primaryVariant,f.secondary),Z=function(e){var t=e.id,n=Object(a.useState)(),o=Object(c.a)(n,2),i=o[0],l=o[1],d=Object(a.useState)(0),s=Object(c.a)(d,2),u=s[0],p=s[1],m=i?i.panels[u]:void 0;return Object(a.useEffect)(function(){v.ref("stories/".concat(t)).once("value").then(function(e){var t=e.val();t&&l({panels:t.panels.map(function(e){return{dataURL:e.dataURL,id:e.id,nextIds:JSON.parse(e.nextIds),prevId:e.prevId,text:e.text}})})})},[t]),r.a.createElement(K,null,m&&r.a.createElement(Q,null,r.a.createElement(X,null,r.a.createElement(Y,{src:m.dataURL,alt:m.text}),r.a.createElement(G,null,m.text))),r.a.createElement(_,null,i&&m&&m.nextIds.map(function(e){return r.a.createElement(X,{key:e},r.a.createElement(Y,{src:i.panels[e].dataURL,alt:i.panels[e].text,onClick:function(){return p(e)}}),r.a.createElement(G,null,i.panels[e].text))})))},$=Object(l.hot)(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(d.b,{hook:(e="/story-maker",function(){var t=Object(s.a)(),n=Object(c.a)(t,2),a=n[0],r=n[1];return[a.startsWith(e)?a.slice(e.length):a,function(t){return r(e+t)}]})},r.a.createElement(d.a,{path:"/"},r.a.createElement(H,null)),r.a.createElement(d.a,{path:"/story/:id"},function(e){return r.a.createElement(Z,{id:e?e.id:void 0})})));var e});i.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b0ee8993.chunk.js.map