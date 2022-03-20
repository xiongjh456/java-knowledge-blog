"use strict";(self.webpackChunkjava_knowledge_blog=self.webpackChunkjava_knowledge_blog||[]).push([[587],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2963:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"redis",title:"redis\u77e5\u8bc6\u70b9",sidebar_position:3},c=void 0,u={unversionedId:"data-base/redis",id:"data-base/redis",isDocsHomePage:!1,title:"redis\u77e5\u8bc6\u70b9",description:"\u7f13\u5b58\u7a7f\u900f",source:"@site/docs/data-base/redis.md",sourceDirName:"data-base",slug:"/data-base/redis",permalink:"/java-knowledge-blog/docs/data-base/redis",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/data-base/redis.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"redis",title:"redis\u77e5\u8bc6\u70b9",sidebar_position:3},sidebar:"tutorialSidebar",next:{title:"Tutorial Intro",permalink:"/java-knowledge-blog/docs/intro"}},s=[{value:"\u7f13\u5b58\u7a7f\u900f",id:"\u7f13\u5b58\u7a7f\u900f",children:[]},{value:"\u7f13\u5b58\u51fb\u7a7f",id:"\u7f13\u5b58\u51fb\u7a7f",children:[]},{value:"\u7f13\u5b58\u96ea\u5d29",id:"\u7f13\u5b58\u96ea\u5d29",children:[]},{value:"\u6301\u4e45\u53161",id:"\u6301\u4e45\u53161",children:[]}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7f13\u5b58\u7a7f\u900f"},"\u7f13\u5b58\u7a7f\u900f"),(0,o.kt)("p",null,"\u6982\u5ff5\uff1a\u8bf7\u6c42\u7cfb\u7edf\u65f6\uff0c\u7f13\u5b58\u4e2d\u6ca1\u6709\u6570\u636e\uff0c\u6570\u636e\u5e93\u4e2d\u4e5f\u6ca1\u6709\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u589e\u52a0\u4e1a\u52a1\u5c42\u7ea7\u7684Filter\uff0c\u8fdb\u884c\u5408\u6cd5\u6821\u9a8c\uff0c\u8fd9\u53ef\u4ee5\u6709\u6548\u62e6\u622a\u5927\u90e8\u5206\u4e0d\u5408\u6cd5\u7684\u8bf7\u6c42\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f5c\u4e3a\u7b2c\u4e00\u70b9\u7684\u8865\u5145\uff0c\u6700\u5e38\u89c1\u7684\u662f\u4f7f\u7528\u5e03\u9686\u8fc7\u6ee4\u5668\uff0c\u9488\u5bf9\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7ef4\u5ea6\uff0c\u628a\u53ef\u80fd\u5b58\u5728\u7684\u6570\u636e\u503chash\u5230bitmap\u4e2d\uff0cbitmap\u8bc1\u660e\u8be5\u6570\u636e\u4e0d\u5b58\u5728\u5219\u8be5\u6570\u636e\u4e00\u5b9a\u4e0d\u5b58\u5728\uff0c\u4f46\u662fbitmap\u8bc1\u660e\u8be5\u6570\u636e\u5b58\u5728\u4e5f\u53ea\u80fd\u662f\u53ef\u80fd\u5b58\u5728\uff0c\u56e0\u4e3a\u4e0d\u540c\u7684\u6570\u503chash\u5230\u7684bit\u4f4d\u5f88\u6709\u53ef\u80fd\u662f\u4e00\u6837\u7684\uff0chash\u51b2\u7a81\u4f1a\u5bfc\u81f4\u8bef\u5224\uff0c\u591a\u4e2ahash\u65b9\u6cd5\u4e5f\u53ea\u80fd\u662f\u964d\u4f4e\u51b2\u7a81\u7684\u6982\u7387\uff0c\u65e0\u6cd5\u505a\u5230\u907f\u514d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53e6\u5916\u4e00\u4e2a\u5e38\u89c1\u7684\u65b9\u6cd5\uff0c\u5219\u662f\u9488\u5bf9\u6570\u636e\u5e93\u4e0e\u7f13\u5b58\u90fd\u6ca1\u6709\u7684\u6570\u636e\uff0c\u5bf9\u7a7a\u7684\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58\uff0c\u4f46\u662f\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u5f97\u8f83\u77ed\uff0c\u4e00\u822c\u4e94\u5206\u949f\u5185\u3002\u800c\u8fd9\u79cd\u6570\u636e\uff0c\u5982\u679c\u6570\u636e\u5e93\u6709\u5199\u5165\uff0c\u6216\u8005\u66f4\u65b0\uff0c\u5fc5\u987b\u540c\u65f6\u5237\u65b0\u7f13\u5b58\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u5b58\u5728\u3002")),(0,o.kt)("h2",{id:"\u7f13\u5b58\u51fb\u7a7f"},"\u7f13\u5b58\u51fb\u7a7f"),(0,o.kt)("p",null,"\u6982\u5ff5\uff1a\u8bf7\u6c42\u7cfb\u7edf\u65f6\uff0c\u7f13\u5b58\u4e2d\u6ca1\u6709\u6570\u636e\uff0c\u6570\u636e\u5e93\u4e2d\u6709\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u70ed\u70b9\u6570\u636e\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u8bbe\u7f6e\u6c38\u8fdc\u4e0d\u8fc7\u671f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u6570\u636e\u4e00\u5b9a\u4f1a\u8fc7\u671f\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5728\u6570\u636e\u4e3a\u7a7a\u7684\u65f6\u5019\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u4e92\u65a5\u7684\u9501\uff0c\u53ea\u8ba9\u4e00\u4e2a\u8bf7\u6c42\u901a\u8fc7\uff0c\u53ea\u6709\u4e00\u4e2a\u8bf7\u6c42\u53bb\u6570\u636e\u5e93\u62c9\u53d6\u6570\u636e\uff0c\u53d6\u5b8c\u6570\u636e\uff0c\u4e0d\u7ba1\u5982\u4f55\u90fd\u9700\u8981\u91ca\u653e\u9501\uff0c\u5f02\u5e38\u7684\u65f6\u5019\u4e5f\u9700\u8981\u91ca\u653e\u9501\uff0c\u8981\u4e0d\u5176\u4ed6\u7ebf\u7a0b\u4f1a\u4e00\u76f4\u62ff\u4e0d\u5230\u9501\u3002")),(0,o.kt)("h2",{id:"\u7f13\u5b58\u96ea\u5d29"},"\u7f13\u5b58\u96ea\u5d29"),(0,o.kt)("p",null,"\u6982\u5ff5\uff1a\u5927\u91cf\u8bf7\u6c42\u8bbf\u95ee\u7cfb\u7edf\u65f6\uff0c\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u540c\u4e00\u65f6\u523b\u5927\u91cf\u5931\u6548\uff0c\u5bfc\u81f4\u5927\u91cf\u7684\u8bf7\u6c42\u843d\u5728\u6570\u636e\u5e93\u4e0a\u3002"),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u70ed\u70b9\u6570\u636e\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u8bbe\u7f6e\u6c38\u8fdc\u4e0d\u8fc7\u671f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7f13\u5b58\u7684\u8fc7\u671f\u65f6\u95f4\u5982\u679c\u4e0d\u662f\u6bd4\u8f83\u4e25\u683c\uff0c\u53ef\u4ee5\u8003\u8651\u8bbe\u7f6e\u4e00\u4e2a\u6ce2\u52a8\u968f\u673a\u503c\uff0c\u6bd4\u5982\u7406\u8bba\u5341\u5206\u949f\uff0c\u90a3\u8fd9\u7c7bkey\u7684\u7f13\u5b58\u65f6\u95f4\u90fd\u52a0\u4e0a\u4e00\u4e2a1~3\u5206\u949f\uff0c\u8fc7\u671f\u65f6\u95f4\u57287~13\u5206\u949f\u5185\u6ce2\u52a8\uff0c\u6709\u6548\u9632\u6b62\u90fd\u5728\u540c\u4e00\u4e2a\u65f6\u95f4\u70b9\u4e0a\u5927\u91cf\u8fc7\u671f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u65b9\u6cd51\u907f\u514d\u4e86\u6709\u6548\u8fc7\u671f\u7684\u60c5\u51b5\uff0c\u4f46\u662f\u8981\u662f\u6240\u6709\u7684\u70ed\u70b9\u6570\u636e\u5728\u4e00\u53f0redis\u670d\u52a1\u5668\u4e0a\uff0c\u4e5f\u662f\u6781\u5176\u5371\u9669\u7684\uff0c\u5982\u679c\u7f51\u7edc\u6709\u95ee\u9898\uff0c\u6216\u8005redis\u670d\u52a1\u5668\u6302\u4e86\uff0c\u90a3\u4e48\u6240\u6709\u7684\u70ed\u70b9\u6570\u636e\u4e5f\u4f1a\u96ea\u5d29\uff08\u67e5\u8be2\u4e0d\u5230\uff09\uff0c\u56e0\u6b64\u5c06\u70ed\u70b9\u6570\u636e\u6253\u6563\u5206\u5e03\u5230\u4e0d\u540c\u7684\u673a\u623f\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u6709\u6548\u51cf\u5c11\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e5f\u53ef\u4ee5\u8003\u8651\u53cc\u7f13\u5b58\u7684\u65b9\u5f0f\uff0c\u6570\u636e\u5e93\u6570\u636e\u540c\u6b65\u5230\u7f13\u5b58A\u548cB\uff0cA\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0cB\u4e0d\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c\u5982\u679cA\u4e3a\u7a7a\u7684\u65f6\u5019\u53bb\u8bfbB\uff0c\u540c\u65f6\u5f02\u6b65\u53bb\u66f4\u65b0\u7f13\u5b58\uff0c\u4f46\u662f\u66f4\u65b0\u7684\u65f6\u5019\u9700\u8981\u540c\u65f6\u66f4\u65b0\u4e24\u4e2a\u7f13\u5b58\u3002")),(0,o.kt)("h2",{id:"\u6301\u4e45\u53161"},"\u6301\u4e45\u53161"))}d.isMDXComponent=!0}}]);