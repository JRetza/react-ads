(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return d}));var n=r(2),i=r(55),o=r(16),c=r(13);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={code:"byplay",supportedMediaTypes:[c.d],isBidRequestValid:function(e){return!!e.params.sectionId},buildRequests:function(e){return e.map((function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({requestId:e.bidId,sectionId:e.params.sectionId},e.params.env?{env:e.params.env}:{});return{method:"POST",url:"https://prebid.byplay.net/bidder",data:JSON.stringify(t),options:{withCredentials:!1}}}))},interpretResponse:function(e,t){var r=e.body;return[{requestId:JSON.parse(t.data).requestId,cpm:r.cpm,width:r.width,height:r.height,creativeId:r.creativeId||"0",ttl:n.b.getConfig("_bidderTimeout"),currency:"JPY",netRevenue:r.netRevenue,mediaType:c.d,vastXml:r.vastXml,renderer:u()}]}};function u(){var e=o.a.install({url:"https://cdn.byplay.net/prebid-byplay-v2.js"});return e.setRender((function(e){e.renderer.push((function(){window.adtagRender(e)}))})),e}Object(i.registerBidder)(d)}}]);