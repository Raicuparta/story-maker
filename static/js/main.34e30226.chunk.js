(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),c=n(20),l=n(5),d=n(2),s=n(7),u=n.n(s);n(28);u.a.initializeApp({apiKey:"AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM",authDomain:"story-maker-85706.firebaseapp.com",databaseURL:"https://story-maker-85706.firebaseio.com",projectId:"story-maker-85706",storageBucket:"story-maker-85706.appspot.com",messagingSenderId:"105986550181",appId:"1:105986550181:web:81ec40d053faad45"});var m=u.a.database(),p=n(1),f=n(4),h={primary:"#1c4265",primaryVariant:Object(f.a)(.15,"#1c4265"),secondary:Object(f.b)(.5,"#1c4265"),secondaryVariant:Object(f.b)(.15,"#1c4265")},y=p.c.button.withConfig({displayName:"UIstyle__Button",componentId:"velvdk-0"})(["all:unset;flex:1;padding:7px;background:",";border-radius:5px;margin:5px;text-align:center;cursor:pointer;border:solid 3px ",";:hover{border-color:",";}:active{background:",";}"],h.secondaryVariant,h.secondaryVariant,h.primaryVariant,h.primary),g=p.c.div.withConfig({displayName:"UIstyle__Row",componentId:"velvdk-1"})(["display:flex;"]),b=p.c.div.withConfig({displayName:"UIstyle__Column",componentId:"velvdk-2"})(["flex:1;display:flex;flex-direction:column;"]),v=Object(p.c)(g).withConfig({displayName:"Homestyle__Wrapper",componentId:"sc-1vl6oc7-0"})(["background:",";color:",";flex:1;@media (orientation:portrait){flex-direction:column;}"],h.primary,h.secondary),x=p.c.textarea.withConfig({displayName:"Homestyle__TextInput",componentId:"sc-1vl6oc7-1"})(["all:unset;background:",";padding:10px;border-radius:10px;margin:5px;height:55px;::placeholder{color:","}"],h.primaryVariant,h.secondaryVariant),w=Object(p.c)(b).withConfig({displayName:"Homestyle__DrawColumn",componentId:"sc-1vl6oc7-2"})(["flex:2;"]);var I=function(e,t){var n=[],a=t.x-e.x,r=t.y-e.y,o=Math.abs(a),i=Math.abs(r),c=a>0?1:-1,l=r>0?1:-1,d=0;if(o>i)for(var s=e.x,u=e.y;c<0?s>=t.x:s<=t.x;s+=c)n.push({x:s,y:u}),(d+=i)<<1>=o&&(u+=l,d-=o);else for(var m=e.x,p=e.y;l<0?p>=t.y:p<=t.y;p+=l)n.push({x:m,y:p}),(d+=o)<<1>=i&&(m+=c,d-=i);return n},j=p.c.div.withConfig({displayName:"Drawingstyle__Wrapper",componentId:"sc-1makj1j-0"})(["flex:1;background:",";margin:5px;border-radius:10px;position:relative;overflow:hidden;"],h.secondaryVariant),O=p.c.img.withConfig({displayName:"Drawingstyle__DrawingImage",componentId:"sc-1makj1j-1"})(["width:100%;height:100%;object-fit:contain;position:absolute;top:0;left:0;image-rendering:pixelated;"]),k=p.c.canvas.withConfig({displayName:"Drawingstyle__Canvas",componentId:"sc-1makj1j-2"})(["cursor:crosshair;width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;"]),C={width:100,height:75},E=function(e){var t=e.onChange,n=e.dataURL,o=Object(a.useState)(),i=Object(d.a)(o,2),c=i[0],l=i[1],s=Object(a.useState)(),u=Object(d.a)(s,2),m=u[0],p=u[1],f=Object(a.useState)(!1),y=Object(d.a)(f,2),g=y[0],b=y[1],v=Object(a.useState)(),x=Object(d.a)(v,2),w=x[0],E=x[1];function _(e){if(g&&c&&m){var n=function(e){var t=m.getBoundingClientRect(),n=t.width,a=t.height,r=t.left,o=t.top,i=C.height/C.width,c=a/n,l=i<c?n/C.width:a/C.height,d={x:r,y:o};return i>c?d.x+=(n-C.width*l)/2:d.y+=(a-C.height*l)/2,{x:Math.floor((e.clientX-d.x)/l),y:Math.floor((e.clientY-d.y)/l)}}(e),a=I(w||n,n),r=!0,o=!1,i=void 0;try{for(var l,d=a[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var s=l.value;c.fillRect(s.x,s.y,2,2)}}catch(u){o=!0,i=u}finally{try{r||null==d.return||d.return()}finally{if(o)throw i}}t(m.toDataURL()),E(n)}}function U(){b(!0)}function L(){b(!1),E(void 0)}return Object(a.useEffect)(function(){if(c&&m&&(n||(c.fillStyle=h.secondary,c.fillRect(0,0,m.width,m.height),t(m.toDataURL())),c.fillStyle=h.primary,!g)){var e=new Image;e.onload=function(){c.drawImage(e,0,0)},e.src=n}},[c,m,n,g,t]),r.a.createElement(j,null,n&&r.a.createElement(O,{src:n}),r.a.createElement(k,{ref:function(e){!e||m||c||(p(e),l(e.getContext("2d")||void 0))},onMouseMove:function(e){_(e)},onTouchMove:function(e){_(e.touches[0])},onTouchStart:U,onMouseDown:U,onMouseUp:L,onTouchEnd:L,onMouseOut:L,width:C.width,height:C.height}))},_=n(3);function U(){var e=Object(_.a)(["\n  width: 100%;\n  border-radius: 5px;\n  margin-top: 5px;\n"]);return U=function(){return e},e}var L=Object(p.b)(U()),R=p.c.img.withConfig({displayName:"Thumbnailstyle__ThumbnailImage",componentId:"sc-33co5w-0"})([""," flex:1;image-rendering:pixelated;"],L),S=p.c.div.withConfig({displayName:"Thumbnailstyle__Placeholder",componentId:"sc-33co5w-1"})([""," padding-bottom:75%;background-color:",";"],L,h.secondary),N=function(e){var t=e.src;return t?r.a.createElement(R,{src:t}):r.a.createElement(S,null)},M=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([{dataURL:"",text:"",nextIds:[],id:0}]),c=Object(d.a)(i,2),s=c[0],u=c[1],p=s[n],f=void 0!==p.prevId&&s[p.prevId],h=p.nextIds.map(function(e){return s[e]});function I(e){o(e.id)}return r.a.createElement(v,null,r.a.createElement(w,null,r.a.createElement(E,{onChange:function(e){u(function(t){var a=t.slice(0);return a[n]=Object(l.a)({},a[n],{dataURL:e}),a})},dataURL:p.dataURL}),r.a.createElement(x,{onChange:function(e){var t=s.slice(0);t[n]=Object(l.a)({},t[n],{text:e.target.value}),u(t)},value:p.text,placeholder:"Insert panel text here"}),r.a.createElement(g,null,r.a.createElement(y,{onClick:function(){m.ref("stories").limitToLast(1).once("value").then(function(e){var t=e.val();if(t){var n=Object.values(t)[0].panels;u(n.map(function(e){return{nextIds:JSON.parse(e.nextIds),dataURL:e.dataURL,text:e.text,prevId:e.prevId,id:e.id}}))}})}},"[Load From Database]"),r.a.createElement(y,{onClick:function(){var e={panels:s.map(function(e){return Object(l.a)({nextIds:JSON.stringify(e.nextIds),dataURL:e.dataURL,text:e.text,id:e.id},void 0!==e.prevId?{prevId:e.prevId}:{})})};m.ref("stories").push(e).then(function(){return console.log("done publishing")})}},"Publish"))),r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement(b,null,f&&r.a.createElement(y,{onClick:function(){return I(f)}},"Previous Panel",r.a.createElement(N,{src:f.dataURL}))),r.a.createElement(b,null,h.map(function(e){return r.a.createElement(y,{key:e.id,onClick:function(){return I(e)}},"Next Panel Thumb",r.a.createElement(N,{src:e.dataURL}))}),h.length<2&&r.a.createElement(y,{onClick:function(){u(function(e){var t=e.slice(0);return t[n].nextIds.push(t.length),t.push({dataURL:"",text:"",prevId:n,nextIds:[],id:t.length}),t})}},"Add Panel")))))};function D(){var e=Object(_.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: ",";\n  }\n\n  #root {\n    display: flex;\n    height: 100vh;\n  }\n"]);return D=function(){return e},e}var T=Object(p.a)(D(),h.primary),V=Object(c.hot)(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(M,null))});i.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.34e30226.chunk.js.map