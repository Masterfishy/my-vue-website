(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad193f39"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="my-vue-website/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f3c":function(e,t,n){e.exports=n.p+"img/bald-pose.5b9b377f.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},u=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,a,u,!1,null,null,null),l=s.exports,f=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"home"}},[r("b-row",{attrs:{id:"about-me"}},[r("b-col",{staticClass:"col-12 col-md-6"},[r("b-img",{attrs:{id:"headshot",alt:"Headshot",rounded:"circle",fluid:"",src:n("2f3c")}})],1),r("b-col",{staticClass:"col-12 col-md-6"},[r("b-row",{attrs:{id:"greeting"}},[e._v(" Hello, hello! ")]),r("b-row",[r("p",[e._v(" My name is Zach Long. I am a senior at Virginia Tech studying computer science. ")])])],1)],1)],1)},p=[],b={name:"Home",components:{},computed:{}},m=b,v=(n("b455"),Object(i["a"])(m,d,p,!1,null,"14636757",null)),h=v.exports;r["default"].use(f["a"]);var g=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new f["a"]({mode:"history",base:"my-vue-website/",routes:g}),w=y,_=n("2f62");r["default"].use(_["a"]);var j=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].config.productionTip=!1,new r["default"]({router:w,store:j,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},b455:function(e,t,n){"use strict";var r=n("d956"),o=n.n(r);o.a},d956:function(e,t,n){}});
//# sourceMappingURL=app.9f50f5e6.js.map