(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{256:function(t,e,r){var content=r(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("c086b19c",content,!0,{sourceMap:!1})},257:function(t,e,r){var content=r(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("e4068120",content,!0,{sourceMap:!1})},260:function(t,e,r){"use strict";var n=r(256),o=r.n(n);r.d(e,"default",(function(){return o.a}))},261:function(t,e,r){var n=r(25)(!1);n.push([t.i,".wrapper_2aqw7{display:block}.wrapper_2aqw7 .listItem_36LkF{position:relative;font-size:2.6rem;font-weight:600;text-transform:uppercase;padding-left:1.2em}.wrapper_2aqw7 .listItem_36LkF.isActive_37jG8{color:#8a2be2}.wrapper_2aqw7 .listItem_36LkF .icon_1_Mi1{position:absolute;left:0}",""]),n.locals={wrapper:"wrapper_2aqw7",listItem:"listItem_36LkF",isActive:"isActive_37jG8",icon:"icon_1_Mi1"},t.exports=n},262:function(t,e,r){"use strict";var n=r(257),o=r.n(n);r.d(e,"default",(function(){return o.a}))},263:function(t,e,r){var n=r(25)(!1);n.push([t.i,".layout_wVoxo{width:100vw;min-height:100vh;overflow:hidden}.layout_wVoxo .main_3cfLs{display:flex;flex-direction:column;align-items:center;justify-content:center;height:90vh;margin:0 auto;padding-right:1.6rem;padding-bottom:5vh;padding-left:1.6rem}.layout_wVoxo .main_3cfLs .nav_E4xn3{margin-top:2.4rem}.layout_wVoxo .footer_3fZ63{min-height:10vh}",""]),n.locals={layout:"layout_wVoxo",main:"main_3cfLs",nav:"nav_E4xn3",footer:"footer_3fZ63"},t.exports=n},264:function(t,e,r){"use strict";r(37),r(22),r(31),r(44),r(27),r(45);var n=r(9),o=r(24),c=r(132),l=r(130);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"BindNavigation",components:{BaseNuxtLink:c.a,BaseFeatherIcon:l.a},computed:d(d({},Object(o.c)("device-type",["isMobile","isTablet","isDesktop"])),Object(o.c)("pages",["sitemap"]))},m=r(260),v=r(7);var h={name:"BaseLayout",components:{BindNavigation:Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{class:t.$style.wrapper},t._l(t.sitemap,(function(e,i){return r("li",{key:i},[r("BaseNuxtLink",{class:t.$style.listItem,attrs:{text:e.name,url:e.path,exactActiveClass:t.$style.isActive}},[r("transition",{attrs:{appear:""}},[t.$route.path===e.path?r("BaseFeatherIcon",{class:t.$style.icon,attrs:{iconName:"ArrowRightIcon"}}):t._e()],1)],1)],1)})),0)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null).exports,TheBindFooter:r(131).a}},w=r(262);var _=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.layout},[r("main",{class:t.$style.main},[t._t("default"),r("BindNavigation",{class:t.$style.nav})],2),r("TheBindFooter",{class:t.$style.footer})],1)}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.a=_.exports},265:function(t,e,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("02152802",content,!0,{sourceMap:!1})},266:function(t,e,r){"use strict";r(265)},267:function(t,e,r){var n=r(25)(!1);n.push([t.i,".container[data-v-2d5d72f1]{text-align:center}.wrapper[data-v-2d5d72f1]{display:inline-block;width:18rem;margin-top:2.4rem}.wrapper .listItem[data-v-2d5d72f1]{position:relative;display:flex;justify-content:start;padding-left:1.2em;font-size:1.6rem;font-weight:400}.wrapper .listItem .icon[data-v-2d5d72f1]{position:absolute;left:0}",""]),t.exports=n},273:function(t,e,r){"use strict";r.r(e);r(37),r(22),r(31),r(44),r(27),r(45);var n=r(9),o=r(24),c=r(264),l=r(130),f=r(133),d=r(180);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"References",components:{BaseLayout:c.a,BaseTypography:f.a,BaseLinkText:d.a,BaseFeatherIcon:l.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("pages",["reference"]))},v=(r(266),r(7)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseLayout",{scopedSlots:t._u([{key:"default",fn:function(){return[r("transition-group",{staticClass:"container",attrs:{appear:"",tag:"div"}},[r("BaseTypography",{key:"title",attrs:{level:1,text:"References"}}),r("ul",{key:"links",staticClass:"wrapper"},t._l(t.reference,(function(t,i){return r("li",{key:i},[r("BaseLinkText",{staticClass:"listItem",attrs:{text:t.name,url:t.path}},[r("BaseFeatherIcon",{staticClass:"icon",attrs:{iconName:"FileTextIcon"}})],1)],1)})),0)],1)]},proxy:!0}])})}),[],!1,null,"2d5d72f1",null);e.default=component.exports}}]);