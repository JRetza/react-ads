(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{258:function(r,t,e){"use strict";e.r(t),e.d(t,"URL",(function(){return a})),e.d(t,"spec",(function(){return p}));var n=e(277),i=e(278),o=e(279);function c(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if(!(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)))return;var e=[],n=!0,i=!1,o=void 0;try{for(var c,a=r[Symbol.iterator]();!(n=(c=a.next()).done)&&(e.push(c.value),!t||e.length!==t);n=!0);}catch(r){i=!0,o=r}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return e}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a="https://prebid.cootlogix.com",u="iframe",d="img",s="image";var p={code:"vidazoo",supportedMediaTypes:[o.b],isBidRequestValid:function(r){var t=r.params||{};return!(!t.cId||!t.pId)},buildRequests:function(r,t){var e=t.refererInfo.referer,i=[];return r.forEach((function(r){n.parseSizesInput(r.sizes).forEach((function(o){var u=function(r,t,e,i){var o=r.params,u=r.bidId,d=o.bidFloor,s=o.cId,p=o.pId,f=o.ext,l=c(e.split("x"),2),h=l[0],b=l[1],v={method:"GET",url:"".concat(a,"/prebid/").concat(s),data:{url:encodeURIComponent(t),cb:Date.now(),bidFloor:d,bidId:u,publisherId:p,consent:i.gdprConsent&&i.gdprConsent.consentString,width:h,height:b}};return n._each(f,(function(r,t){v.data["ext."+t]=r})),v}(r,e,o,t);i.push(u)}))})),i},interpretResponse:function(r,t){if(!r||!r.body)return[];var e=r.body,n=e.creativeId,i=e.ad,o=e.price,c=e.exp;if(!i||!o)return[];var a=t.data,u=a.bidId,d=a.width,s=a.height;try{return[{requestId:u,cpm:o,width:d,height:s,creativeId:n,currency:"USD",netRevenue:!0,ttl:c||300,ad:i}]}catch(r){return[]}},getUserSyncs:function(r,t){var e=r.iframeEnabled,n=r.pixelEnabled;if(e)return[{type:"iframe",url:"https://static.cootlogix.com/basev/sync/user_sync.html"}];if(n){var i={},o=[];return t.forEach((function(r){var t=r.body;(t&&t.cookies||[]).forEach((function(r){switch(r.type){case u:break;case d:n&&!i[r.src]&&o.push({type:s,url:r.src})}}))})),o}return[]}};Object(i.registerBidder)(p)}}]);