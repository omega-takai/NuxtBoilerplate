(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{242:function(t,e,r){var content=r(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("c086b19c",content,!0,{sourceMap:!1})},243:function(t,e,r){var content=r(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("e4068120",content,!0,{sourceMap:!1})},246:function(t,e,r){"use strict";var n=r(242),o=r.n(n);r.d(e,"default",(function(){return o.a}))},247:function(t,e,r){(e=r(20)(!1)).push([t.i,".wrapper_9HhbN{display:block}.wrapper_9HhbN .listItem_mamEB{position:relative;font-size:2.6rem;font-weight:600;text-transform:uppercase;padding-left:1.2em}.wrapper_9HhbN .listItem_mamEB.isActive_2cauG{color:#8a2be2}.wrapper_9HhbN .listItem_mamEB .icon_1piFU{position:absolute;left:0}",""]),e.locals={wrapper:"wrapper_9HhbN",listItem:"listItem_mamEB",isActive:"isActive_2cauG",icon:"icon_1piFU"},t.exports=e},248:function(t,e,r){"use strict";var n=r(243),o=r.n(n);r.d(e,"default",(function(){return o.a}))},249:function(t,e,r){(e=r(20)(!1)).push([t.i,".layout_3VWbo{width:100vw;min-height:100vh;overflow:hidden}.layout_3VWbo .main_1UymR{display:flex;flex-direction:column;align-items:center;justify-content:center;height:90vh;margin:0 auto;padding-right:1.6rem;padding-bottom:5vh;padding-left:1.6rem}.layout_3VWbo .main_1UymR .nav_277b0{margin-top:2.4rem}.layout_3VWbo .footer_2z2sP{min-height:10vh}",""]),e.locals={layout:"layout_3VWbo",main:"main_1UymR",nav:"nav_277b0",footer:"footer_2z2sP"},t.exports=e},250:function(t,e,r){"use strict";var n=r(10),o=r(19),c=r(115),l=r(113);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"BindNavigation",components:{BaseNuxtLink:c.a,BaseFeatherIcon:l.a},computed:m(m({},Object(o.c)("device-type",["isMobile","isTablet","isDesktop"])),Object(o.c)("pages",["sitemap"]))},d=r(246),h=r(5);var v={name:"BaseLayout",components:{BindNavigation:Object(h.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{class:t.$style.wrapper},t._l(t.sitemap,(function(e,i){return r("li",{key:i},[r("BaseNuxtLink",{class:t.$style.listItem,attrs:{text:e.name,url:e.path,exactActiveClass:t.$style.isActive}},[r("transition",{attrs:{appear:""}},[t.$route.path===e.path?r("BaseFeatherIcon",{class:t.$style.icon,attrs:{iconName:"ArrowRightIcon"}}):t._e()],1)],1)],1)})),0)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null).exports,TheBindFooter:r(114).a}},O=r(248);var w=Object(h.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$style.layout},[e("main",{class:this.$style.main},[this._t("default"),e("BindNavigation",{class:this.$style.nav})],2),e("TheBindFooter",{class:this.$style.footer})],1)}),[],!1,(function(t){this.$style=O.default.locals||O.default}),null,null);e.a=w.exports},251:function(t,e,r){var content=r(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("02152802",content,!0,{sourceMap:!1})},252:function(t,e,r){"use strict";r(251)},253:function(t,e,r){(e=r(20)(!1)).push([t.i,".container[data-v-2d5d72f1]{text-align:center}.wrapper[data-v-2d5d72f1]{display:inline-block;width:18rem;margin-top:2.4rem}.wrapper .listItem[data-v-2d5d72f1]{position:relative;display:flex;justify-content:start;padding-left:1.2em;font-size:1.6rem;font-weight:400}.wrapper .listItem .icon[data-v-2d5d72f1]{position:absolute;left:0}",""]),t.exports=e},259:function(t,e,r){"use strict";r.r(e);var n=r(10),o=r(19),c=r(250),l=r(113),f=r(116),m=r(162);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={name:"References",components:{BaseLayout:c.a,BaseTypography:f.a,BaseLinkText:m.a,BaseFeatherIcon:l.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("pages",["reference"]))},h=(r(252),r(5)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseLayout",{scopedSlots:t._u([{key:"default",fn:function(){return[r("transition-group",{staticClass:"container",attrs:{appear:"",tag:"div"}},[r("BaseTypography",{key:"title",attrs:{level:1,text:"References"}}),r("ul",{key:"links",staticClass:"wrapper"},t._l(t.reference,(function(t,i){return r("li",{key:i},[r("BaseLinkText",{staticClass:"listItem",attrs:{text:t.name,url:t.path}},[r("BaseFeatherIcon",{staticClass:"icon",attrs:{iconName:"FileTextIcon"}})],1)],1)})),0)],1)]},proxy:!0}])})}),[],!1,null,"2d5d72f1",null);e.default=component.exports}}]);