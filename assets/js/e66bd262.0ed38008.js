"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[87],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||i;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8991:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"spring",title:"spring",sidebar_position:2},p=void 0,s={unversionedId:"frame/spring/spring",id:"frame/spring/spring",isDocsHomePage:!1,title:"spring",description:"1. SPI\u673a\u5236\u4e86\u89e3\u5417\uff1f\u8bf4\u8bf4\u9879\u76ee\u4e2d\u7528SPI\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002",source:"@site/docs/frame/spring/spring.md",sourceDirName:"frame/spring",slug:"/frame/spring/spring",permalink:"/java-knowledge-blog/docs/frame/spring/spring",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/frame/spring/spring.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"spring",title:"spring",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/java-knowledge-blog/docs/tutorial-extras/translate-your-site"}},u=[],l={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"SPI\u673a\u5236\u4e86\u89e3\u5417\uff1f\u8bf4\u8bf4\u9879\u76ee\u4e2d\u7528SPI\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,i.kt)("p",{parentName:"li"},"\u7b54\uff1aSPI \u662f Java \u63d0\u4f9b\u7684\u4e00\u79cd\u670d\u52a1\u52a0\u8f7d\u65b9\u5f0f\uff0c\u5168\u540d\u4e3a Service Provider Interface\u3002\u6839\u636e Java \u7684 SPI \u89c4\u8303\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u670d\u52a1\u63a5\u53e3\uff0c\u5177\u4f53\u7684\u5b9e\u73b0\u7531\u5bf9\u5e94\u7684\u5b9e\u73b0\u8005\u53bb\u63d0\u4f9b\uff0c\u5373\u670d\u52a1\u63d0\u4f9b\u8005\u3002\u7136\u540e\u5728\u4f7f\u7528\u7684\u65f6\u5019\u518d\u6839\u636e SPI \u7684\u89c4\u8303\u53bb\u83b7\u53d6\u5bf9\u5e94\u7684\u670d\u52a1\u63d0\u4f9b\u8005\u7684\u670d\u52a1\u5b9e\u73b0\u3002\u901a\u8fc7 SPI \u670d\u52a1\u52a0\u8f7d\u673a\u5236\u8fdb\u884c\u670d\u52a1\u7684\u6ce8\u518c\u548c\u53d1\u73b0\uff0c\u53ef\u4ee5\u6709\u6548\u7684\u907f\u514d\u5728\u4ee3\u7801\u4e2d\u5c06\u670d\u52a1\u63d0\u4f9b\u8005\u5199\u6b7b\u3002\u4ece\u800c\u53ef\u4ee5\u57fa\u4e8e\u63a5\u53e3\u7f16\u7a0b\uff0c\u5b9e\u73b0\u6a21\u5757\u95f4\u7684\u89e3\u8026\u3002")),(0,i.kt)("li",{parentName:"ol"})))}f.isMDXComponent=!0}}]);