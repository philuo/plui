(function(t){function e(e){for(var r,l,u=e[0],s=e[1],p=e[2],f=0,i=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&i.push(c[l][0]),c[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);o&&o(e);while(i.length)i.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},c={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var o=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"280f":function(t,e,n){},"980f":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("830f"),c=n("5c40");const a=Object(c["x"])("data-v-334cdc54");Object(c["q"])("data-v-334cdc54");const l={id:"app"},u={class:"demo-layout"},s=Object(c["j"])("h2",null,"Layout Demo",-1),p=Object(c["j"])("div",{class:"content bg-purple-dark"},"default",-1),o=Object(c["j"])("div",{class:"content bg-purple"},"span:24",-1),f=Object(c["j"])("div",{class:"content bg-purple"},"span:12",-1),i=Object(c["j"])("div",{class:"content bg-purple-light"},"span:6",-1),j=Object(c["j"])("div",{class:"content bg-purple"},"span:6",-1),d={class:"bg-purple-light"},b=Object(c["j"])("div",{class:"content bg-purple-dark"},"span:12 > span6 ",-1),g=Object(c["j"])("div",{class:"content2 bg-purple"},"span:12 > span:12 + offset6",-1),O=Object(c["j"])("div",{class:"content bg-purple-light"},"span:8",-1);Object(c["p"])();const y=a((function(t,e){const n=Object(c["s"])("pl-col"),r=Object(c["s"])("pl-row");return Object(c["o"])(),Object(c["g"])("div",l,[Object(c["j"])("div",u,[s,Object(c["j"])(r,{gutter:"20"},{default:a(()=>[Object(c["j"])(n,null,{default:a(()=>[p]),_:1})]),_:1}),Object(c["j"])(r,null,{default:a(()=>[Object(c["j"])(n,{span:"24"},{default:a(()=>[o]),_:1})]),_:1}),Object(c["j"])(r,null,{default:a(()=>[Object(c["j"])(n,{span:"12"},{default:a(()=>[f]),_:1}),Object(c["j"])(n,{span:"6"},{default:a(()=>[i]),_:1}),Object(c["j"])(n,{span:"6"},{default:a(()=>[j]),_:1})]),_:1}),Object(c["j"])(r,{gutter:"10",type:"flex",justify:"center"},{default:a(()=>[Object(c["j"])(n,{span:"12"},{default:a(()=>[Object(c["j"])("div",d,[Object(c["j"])(r,{type:"flex",align:"center"},{default:a(()=>[Object(c["j"])(n,{span:"6"},{default:a(()=>[b]),_:1}),Object(c["j"])(n,{span:"12",offset:"6"},{default:a(()=>[g]),_:1})]),_:1})])]),_:1}),Object(c["j"])(n,{span:"8"},{default:a(()=>[O]),_:1})]),_:1})])])}));function v(t,e){return Object(c["o"])(),Object(c["g"])("div",{class:t.getClassList,style:t.getGutter},[Object(c["r"])(t.$slots,"default")],6)}var h=Object(c["k"])({name:"pl-row",props:{gutter:{type:[Number,String],default:0},type:{type:String,default:""},justify:{type:String,default:""},align:{type:String,default:""}},setup(t){const e=Object(c["f"])(()=>{const e=-t.gutter/2;return 0===e?"":{marginLeft:e+"px",marginRight:e+"px"}}),n=Object(c["f"])(()=>["pl-row",""+(t.type&&"flex"===t.type?"pl-row--flex":""),""+(t.justify&&["start","end","center","space-between","space-around"].includes(t.justify)?"is-justify-"+t.justify:""),""+(t.align&&["start","end","center"].includes(t.align)?"is-align-"+t.align:"")]);return{getGutter:e,getClassList:n}}});n("280f");h.render=v;var _=h;function m(t,e){return Object(c["o"])(),Object(c["g"])("div",{class:["pl-col",t.getClassList],style:t.getGutter},[Object(c["r"])(t.$slots,"default")],6)}var w=Object(c["k"])({name:"pl-col",props:{span:{type:[Number,String],default:24},gutter:{type:[Number,String],default:0},offset:{type:[Number,String],default:0}},setup(t){const{parent:e}=Object(c["l"])(),{gutter:n}=e.props,r=Object(c["f"])(()=>{const t=+n/2;return 0===t?"":{paddingLeft:t+"px",paddingRight:t+"px"}}),a=Object(c["f"])(()=>["pl-col-"+t.span,+t.offset?"pl-col-offset-"+t.offset:""]);return{getGutter:r,getClassList:a}}});n("e872");w.render=m;var x=w,S=Object(c["k"])({name:"app",components:{PlRow:_,PlCol:x},setup(){return{}}});n("980f");S.render=y,S.__scopeId="data-v-334cdc54";var P=S;Object(r["a"])(P).mount("#app")},e872:function(t,e,n){}});