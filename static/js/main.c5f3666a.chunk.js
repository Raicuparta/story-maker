(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=n(20),l=n(4),d=n(2),s=n(6),u=n.n(s);n(28);u.a.initializeApp({apiKey:"AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM",authDomain:"story-maker-85706.firebaseapp.com",databaseURL:"https://story-maker-85706.firebaseio.com",projectId:"story-maker-85706",storageBucket:"story-maker-85706.appspot.com",messagingSenderId:"105986550181",appId:"1:105986550181:web:81ec40d053faad45"});var p=u.a.database(),m=n(1),f=n(3),g={primary:"#4c7d55",primaryVariant:Object(f.a)(.15,"#4c7d55"),secondary:Object(f.b)(.5,"#4c7d55"),secondaryVariant:Object(f.b)(.15,"#4c7d55")},h=m.b.button.withConfig({displayName:"UIstyle__Button",componentId:"velvdk-0"})(["all:unset;flex:1;padding:7px;background:",";border-radius:5px;margin:5px;text-align:center;cursor:pointer;border:solid 3px ",";:hover{border-color:",";}:active{background:",";}"],g.secondaryVariant,g.secondaryVariant,g.primaryVariant,g.primary),b=m.b.div.withConfig({displayName:"UIstyle__Row",componentId:"velvdk-1"})(["display:flex;"]),y=m.b.div.withConfig({displayName:"UIstyle__Column",componentId:"velvdk-2"})(["flex:1;display:flex;flex-direction:column;"]),x=Object(m.b)(b).withConfig({displayName:"Homestyle__Wrapper",componentId:"sc-1vl6oc7-0"})(["background:",";color:",";flex:1;@media (orientation:portrait){flex-direction:column;}"],g.primary,g.secondary),v=m.b.textarea.withConfig({displayName:"Homestyle__TextInput",componentId:"sc-1vl6oc7-1"})(["all:unset;background:",";padding:10px;border-radius:10px;margin:5px;height:55px;::placeholder{color:","}"],g.primaryVariant,g.secondaryVariant),w=Object(m.b)(y).withConfig({displayName:"Homestyle__DrawColumn",componentId:"sc-1vl6oc7-2"})(["flex:2;"]),I=m.b.img.withConfig({displayName:"Homestyle__Thumbnail",componentId:"sc-1vl6oc7-3"})(["width:calc(100% - 20px);flex:1;margin:5px;border:5px solid ",";border-radius:10px;cursor:pointer;:hover{border-color:",";}"],g.secondaryVariant,g.primaryVariant),O=m.b.canvas.withConfig({displayName:"Canvasstyle__Wrapper",componentId:"qqiwli-0"})(["margin:5px;cursor:crosshair;background:",";border-radius:10px;flex:1;object-fit:contain;"],g.secondaryVariant),j={width:400,height:300},k=function(e){var t=e.onChange,n=e.dataURL,i=Object(a.useState)(),o=Object(d.a)(i,2),c=o[0],l=o[1],s=Object(a.useState)(),u=Object(d.a)(s,2),p=u[0],m=u[1],f=Object(a.useState)(!1),h=Object(d.a)(f,2),b=h[0],y=h[1],x=Object(a.useState)(),v=Object(d.a)(x,2),w=v[0],I=v[1];function k(){y(!1),I(void 0),p&&c&&b&&(t&&t(p.toDataURL()),c.closePath())}return Object(a.useEffect)(function(){function e(){c&&p&&(c.fillStyle=g.secondary,c.fillRect(0,0,p.width,p.height))}if(n&&c){var t=new Image;t.onload=function(){e(),c.drawImage(t,0,0)},t.src=n}else e()},[c,p,n]),r.a.createElement(O,{ref:function(e){e&&(m(e),l(e.getContext("2d")||void 0))},onMouseMove:function(e){if(b&&p&&c){var t=function(e){var t=p.getBoundingClientRect(),n=t.width,a=t.height,r=t.left,i=t.top,o=j.height/j.width,c=a/n,l=o<c?n/j.width:a/j.height,d={x:0,y:0};return o>c?d.x+=(n-j.width*l)/2:d.y+=(a-j.height*l)/2,{x:(e.clientX-d.x)/l-r,y:(e.clientY-d.y)/l-i}}(e);c.moveTo((w||t).x,(w||t).y),c.lineTo(t.x,t.y),c.strokeStyle=g.primaryVariant,c.lineWidth=1,c.filter="url(#remove-alpha)",c.stroke(),I(t)}},onMouseDown:function(){y(!0),c&&c.beginPath()},onMouseUp:k,onMouseOut:function(){k()},onMouseEnter:function(){},width:j.width,height:j.height})},C=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([{drawing:"",text:"",nextIds:[],id:0}]),c=Object(d.a)(o,2),s=c[0],u=c[1];Object(a.useEffect)(function(){i(s.length-1)},[s.length]);var m=s[n],f=void 0!==m.prevId&&s[m.prevId],g=m.nextIds.map(function(e){return s[e]});function O(e,t){m.nextIds.length>0||u(function(a){for(var r=a.slice(0),i=0;i<t;i++)r[n].nextIds.push(r.length),r.push({drawing:"",text:"",prevId:e,nextIds:[],id:r.length});return r})}function j(e){i(e.id)}return r.a.createElement(x,null,r.a.createElement(w,null,r.a.createElement(k,{onChange:function(e){u(function(t){var a=t.slice(0);return a[n]=Object(l.a)({},a[n],{drawing:e}),a})},dataURL:m.drawing}),r.a.createElement(v,{onChange:function(e){var t=s.slice(0);t[n]=Object(l.a)({},t[n],{text:e.target.value}),u(t)},value:m.text,placeholder:"Insert panel text here"}),r.a.createElement(b,null,r.a.createElement(h,{onClick:function(){p.ref("stories").limitToLast(1).once("value").then(function(e){var t=e.val();if(t){var n=Object.values(t)[0].panels;u(n.map(function(e){return{drawing:e.drawing,nextIds:JSON.parse(e.nextIds),text:e.text,prevId:e.prevId,id:e.id}}))}})}},"[Load From Database]"),r.a.createElement(h,{onClick:function(){var e={panels:s.map(function(e){return Object(l.a)({nextIds:JSON.stringify(e.nextIds),drawing:e.drawing,text:e.text,id:e.id},void 0!==e.prevId?{prevId:e.prevId}:{})})};p.ref("stories").push(e).then(function(){return console.log("done publishing")})}},"Publish"))),r.a.createElement(y,null,r.a.createElement(b,null,r.a.createElement(h,{onClick:function(){O(n,2)}},"+ Choice"),r.a.createElement(h,{onClick:function(){O(n,1)}},"+ Panel")),r.a.createElement(b,null,r.a.createElement(y,null,f&&r.a.createElement(I,{src:f.drawing,onClick:function(){return j(f)}})),r.a.createElement(y,null,g.map(function(e){return r.a.createElement(I,{key:e.id,src:e.drawing,onClick:function(){return j(e)}})})))))},E=n(19);function _(){var e=Object(E.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: ",";\n  }\n\n  #root {\n    display: flex;\n    height: 100vh;\n  }\n"]);return _=function(){return e},e}var S=Object(m.a)(_(),g.primary),N=Object(c.hot)(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(C,null))});o.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c5f3666a.chunk.js.map