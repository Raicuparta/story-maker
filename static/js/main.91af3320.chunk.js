(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=n(21),l=n(11),d=n(3),s=n(1),u=n(4),p={primary:"#1c4265",primaryVariant:Object(u.a)(.15,"#1c4265"),secondary:Object(u.b)(.5,"#1c4265"),secondaryVariant:Object(u.b)(.15,"#1c4265")};function m(){var e=Object(d.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: ",";\n  }\n\n  #root {\n    display: flex;\n    height: 100vh;\n  }\n\n  * {\n    user-select: none;\n  }\n"]);return m=function(){return e},e}var f=Object(s.a)(m(),p.primary),y=n(5),h=n(2),x=n(10),g=n.n(x);n(34);g.a.initializeApp({apiKey:"AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM",appId:"1:105986550181:web:81ec40d053faad45",authDomain:"story-maker-85706.firebaseapp.com",databaseURL:"https://story-maker-85706.firebaseio.com",messagingSenderId:"105986550181",projectId:"story-maker-85706",storageBucket:"story-maker-85706.appspot.com"});var b=g.a.database();function v(){var e=Object(d.a)(["\n    cursor: pointer;\n\n    border-color: ",";\n\n    :hover {\n      border-color: ",";\n    }\n\n    :active {\n      background: ",";\n      border-color: ",";\n    }\n  "]);return v=function(){return e},e}var w=s.c.button.withConfig({displayName:"UIstyle__ButtonBase",componentId:"sc-1m0zbe8-0"})(["all:unset;background:",";margin:5px;text-align:center;border:solid 3px ",";",""],p.secondaryVariant,p.primary,function(e){return e.onClick&&Object(s.b)(v(),p.primaryVariant,p.secondaryVariant,p.primary,p.primaryVariant)}),I=Object(s.c)(w).withConfig({displayName:"UIstyle__Button",componentId:"sc-1m0zbe8-1"})(["flex:1;border-radius:5px;padding:7px;"]),j=Object(s.c)(w).withConfig({displayName:"UIstyle__RoundButton",componentId:"sc-1m0zbe8-2"})(["border-radius:100%;flex:unset;overflow:hidden;height:80px;width:80px;@media (orientation:portrait){height:50px;width:50px;}"]),C=s.c.div.withConfig({displayName:"UIstyle__Base",componentId:"sc-1m0zbe8-3"})(["display:flex;justify-content:center;"]),O=Object(s.c)(C).withConfig({displayName:"UIstyle__Row",componentId:"sc-1m0zbe8-4"})([""]),E=Object(s.c)(C).withConfig({displayName:"UIstyle__Column",componentId:"sc-1m0zbe8-5"})(["flex:1;flex-direction:column;"]),_=Object(s.c)(O).withConfig({displayName:"StoryCreatorstyle__Wrapper",componentId:"y7tatx-0"})(["background:",";color:",";flex:1;@media (orientation:portrait){flex-direction:column;}"],p.primary,p.secondary),k=s.c.textarea.withConfig({displayName:"StoryCreatorstyle__TextInput",componentId:"y7tatx-1"})(["all:unset;background:",";padding:10px;border-radius:10px;margin:5px;height:55px;::placeholder{color:","}"],p.primaryVariant,p.secondaryVariant);var N=function(e,t){var n=[],a=t.x-e.x,r=t.y-e.y,o=Math.abs(a),i=Math.abs(r),c=a>0?1:-1,l=r>0?1:-1,d=0;if(o>i)for(var s=e.x,u=e.y;c<0?s>=t.x:s<=t.x;s+=c)n.push({x:s,y:u}),(d+=i)<<1>=o&&(u+=l,d-=o);else for(var p=e.x,m=e.y;l<0?m>=t.y:m<=t.y;m+=l)n.push({x:p,y:m}),(d+=o)<<1>=i&&(p+=c,d-=i);return n},S=s.c.div.withConfig({displayName:"Drawingstyle__Wrapper",componentId:"sc-1w2x71x-0"})(["flex:1;background:",";position:relative;overflow:hidden;margin:5px;border-radius:10px;overflow:hidden;"],p.secondaryVariant),U=s.c.img.withConfig({displayName:"Drawingstyle__DrawingImage",componentId:"sc-1w2x71x-1"})(["width:100%;height:100%;object-fit:contain;position:absolute;top:0;left:0;image-rendering:pixelated;"]),R=s.c.canvas.withConfig({displayName:"Drawingstyle__Canvas",componentId:"sc-1w2x71x-2"})(["cursor:crosshair;width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;touch-action:none;"]),L={height:60,width:80},P=function(e){var t=e.onChange,n=e.dataURL,o=Object(a.useState)(),i=Object(h.a)(o,2),c=i[0],l=i[1],d=Object(a.useState)(),s=Object(h.a)(d,2),u=s[0],m=s[1],f=Object(a.useState)(!1),y=Object(h.a)(f,2),x=y[0],g=y[1],b=Object(a.useState)(),v=Object(h.a)(b,2),w=v[0],I=v[1];function j(e){if(c&&u){var n=function(e){if(!u)return{x:0,y:0};var t=u.getBoundingClientRect(),n=t.width,a=t.height,r=t.left,o=t.top,i=L.height/L.width,c=a/n,l=i<c?n/L.width:a/L.height,d={x:r,y:o};return i>c?d.x+=(n-L.width*l)/2:d.y+=(a-L.height*l)/2,{x:Math.floor((e.clientX-d.x)/l),y:Math.floor((e.clientY-d.y)/l)}}(e),a=N(w||n,n),r=!0,o=!1,i=void 0;try{for(var l,d=a[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var s=l.value;c.fillRect(s.x,s.y,1,1)}}catch(p){o=!0,i=p}finally{try{r||null==d.return||d.return()}finally{if(o)throw i}}t(u.toDataURL()),I(n)}}function C(){g(!0)}function O(){g(!1),I(void 0)}return Object(a.useEffect)(function(){if(c&&u&&(n||(c.fillStyle=p.secondary,c.fillRect(0,0,u.width,u.height),t(u.toDataURL())),c.fillStyle=p.primary,!x)){var e=new Image;e.onload=function(){return c.drawImage(e,0,0)},e.src=n}},[c,u,n,x,t]),r.a.createElement(S,null,n&&r.a.createElement(U,{src:n}),r.a.createElement(R,{ref:function(e){!e||u||c||(m(e),l(e.getContext("2d")||void 0))},onMouseMove:function(e){x&&j(e)},onTouchMove:function(e){j(e.touches[0])},onTouchStart:function(e){C(),j(e.touches[0])},onMouseDown:function(e){C(),j(e)},onMouseUp:O,onTouchEnd:O,onMouseOut:O,width:L.width,height:L.height}))},M=n(22),V=Object(s.c)(E).withConfig({displayName:"PanelConnectionsstyle__Wrapper",componentId:"sc-1s1v7v3-0"})(["flex-direction:column;margin:10px;display:flex;flex:unset;@media (orientation:portrait){flex-direction:row;}"]),z=Object(s.c)(O).withConfig({displayName:"PanelConnectionsstyle__PanelsWrapper",componentId:"sc-1s1v7v3-1"})(["@media (orientation:portrait){flex-direction:column;}align-items:center;justify-content:center;"]),T=s.c.div.withConfig({displayName:"PanelConnectionsstyle__NewPannelText",componentId:"sc-1s1v7v3-2"})(["margin-top:-22px;font-size:5em;@media (orientation:portrait){font-size:3.8em;}"]);function B(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n"]);return B=function(){return e},e}var D=Object(s.b)(B()),W=s.c.img.withConfig({displayName:"Thumbnailstyle__ThumbnailImage",componentId:"sc-148q6x5-0"})([""," flex:1;"],D),J=s.c.div.withConfig({displayName:"Thumbnailstyle__Placeholder",componentId:"sc-148q6x5-1"})([""," padding-bottom:75%;background-color:",";"],D,p.secondary),A=function(e){var t=e.src;return t?r.a.createElement(W,{src:t}):r.a.createElement(J,null)},F=function(e){var t=e.currentPanel,n=e.prevPanel,a=e.nextPanels,o=e.onConnectionClick,i=e.onNewPanelClick;return r.a.createElement(V,null,n&&r.a.createElement(z,null,r.a.createElement(j,{onClick:function(){return o(n)}},r.a.createElement(A,{src:n.dataURL}))),!n&&r.a.createElement(z,null,r.a.createElement(j,null)),r.a.createElement(z,null,r.a.createElement(j,null,r.a.createElement(A,{src:t.dataURL}))),r.a.createElement(z,null,a.map(function(e){return r.a.createElement(j,{key:e.id,onClick:function(){return o(e)}},r.a.createElement(A,{src:e.dataURL}))}),Object.keys(Object(M.a)(Array(2-a.length))).map(function(e){return r.a.createElement(j,{key:e,onClick:i},r.a.createElement(T,null,"+"))})))},q=function(){var e=Object(a.useState)(0),t=Object(h.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([{dataURL:"",id:0,nextIds:[],text:""}]),c=Object(h.a)(i,2),l=c[0],d=c[1],s=l[n],u=void 0!==s.prevId?l[s.prevId]:void 0,p=s.nextIds.map(function(e){return l[e]});return r.a.createElement(_,null,r.a.createElement(E,null,r.a.createElement(P,{onChange:function(e){d(function(t){var a=t.slice(0);return a[n]=Object(y.a)({},a[n],{dataURL:e}),a})},dataURL:s.dataURL}),r.a.createElement(k,{onChange:function(e){var t=l.slice(0);t[n]=Object(y.a)({},t[n],{text:e.target.value}),d(t)},value:s.text,placeholder:"Insert panel text here"}),r.a.createElement(O,null,r.a.createElement(I,{onClick:function(){b.ref("stories").limitToLast(1).once("value").then(function(e){var t=e.val();if(t){var n=Object.values(t)[0].panels;d(n.map(function(e){return{dataURL:e.dataURL,id:e.id,nextIds:JSON.parse(e.nextIds),prevId:e.prevId,text:e.text}}))}})}},"Load"),r.a.createElement(I,{onClick:function(){var e={panels:l.map(function(e){return Object(y.a)({dataURL:e.dataURL,id:e.id,nextIds:JSON.stringify(e.nextIds),text:e.text},void 0!==e.prevId?{prevId:e.prevId}:{})})};b.ref("stories").push(e)}},"Save"))),r.a.createElement(F,{prevPanel:u,currentPanel:s,nextPanels:p,onConnectionClick:function(e){o(e.id)},onNewPanelClick:function(){d(function(e){var t=e.slice(0);return t[n].nextIds.push(t.length),t.push({dataURL:"",id:t.length,nextIds:[],prevId:n,text:""}),t})}}))},H=Object(s.c)(O).withConfig({displayName:"StoryPlayerstyle__Wrapper",componentId:"sc-10j1xfg-0"})(["width:100%;padding:10px;"]),K=Object(s.c)(E).withConfig({displayName:"StoryPlayerstyle__CurrentPanelColumn",componentId:"sc-10j1xfg-1"})(["flex:2;"]),Q=s.c.div.withConfig({displayName:"StoryPlayerstyle__PanelWrapper",componentId:"sc-10j1xfg-2"})(["margin:10px;border:solid 5px ",";border-radius:10px;overflow:hidden;"],p.primaryVariant),X=s.c.img.withConfig({displayName:"StoryPlayerstyle__PanelImage",componentId:"sc-10j1xfg-3"})(["width:100%;image-rendering:pixelated;display:block;"]),Y=s.c.div.withConfig({displayName:"StoryPlayerstyle__PanelText",componentId:"sc-10j1xfg-4"})(["background:",";padding:10px;color:",";"],p.primaryVariant,p.secondary),G=function(e){var t=e.id,n=Object(a.useState)(),o=Object(h.a)(n,2),i=o[0],c=o[1],l=Object(a.useState)(0),d=Object(h.a)(l,2),s=d[0],u=d[1],p=i?i.panels[s]:void 0;return Object(a.useEffect)(function(){b.ref("stories/".concat(t)).once("value").then(function(e){var t=e.val();t&&c({panels:t.panels.map(function(e){return{dataURL:e.dataURL,id:e.id,nextIds:JSON.parse(e.nextIds),prevId:e.prevId,text:e.text}})})})},[t]),r.a.createElement(H,null,p&&r.a.createElement(K,null,r.a.createElement(Q,null,r.a.createElement(X,{src:p.dataURL,alt:p.text}),r.a.createElement(Y,null,p.text))),r.a.createElement(E,null,i&&p&&p.nextIds.map(function(e){return r.a.createElement(Q,{key:e},r.a.createElement(X,{src:i.panels[e].dataURL,alt:i.panels[e].text,onClick:function(){return u(e)}}),r.a.createElement(Y,null,i.panels[e].text))})))},Z=Object(c.hot)(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(l.a,{path:"/"},r.a.createElement(q,null)),r.a.createElement(l.a,{path:"/story/:id"},function(e){return r.a.createElement(G,{id:e?e.id:void 0})}))});i.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.91af3320.chunk.js.map