(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[233],{210:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return o}));var i=t(278),n=t(279),a=t(277),c=t(280);function d(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s={0:"title",1:"body",2:"sponsoredBy",3:"image",4:"cta",5:"icon"},u={title:{id:0,name:"title"},body:{id:1,name:"data",type:2},sponsoredBy:{id:2,name:"data",type:1},image:{id:3,type:3,name:"img"},cta:{id:4,type:12,name:"data"},icon:{id:5,type:1,name:"img"}},o={code:"seedingAlliance",supportedMediaTypes:[n.c],isBidRequestValid:function(e){return!!e.params.adUnitId},buildRequests:function(e,r){var t=l(e,"params.pt")||l(e,"params.priceType")||"net",i=e[0].transactionId,n=[c.b.getConfig("currency.adServerCurrency")||"EUR"],d=null,s=r.refererInfo.referer,o=e.map((function(e,r){var n=a._map(e.nativeParams,(function(e,r){var t,i,n=u[r],a={required:1&e.required};if(n)return a.id=n.id,e.sizes&&(t=e.sizes[0],i=e.sizes[1]),a[n.name]={len:e.len,type:n.type,w:t,h:i},a})).filter(Boolean);return e.params.url&&(s=e.params.url),{id:String(r+1),tagid:e.params.adUnitId,tid:i,pt:t,native:{request:{assets:n}}}}));e[0].crumbs&&e[0].crumbs.pubcid&&(d=e[0].crumbs.pubcid);var p={id:r.auctionId,site:{page:s},device:{ua:navigator.userAgent},cur:n,imp:o,user:{buyeruid:d}};return{method:"POST",url:"https://b.nativendo.de/cds/rtb/bid?format=openrtb2.5&ssp=nativendo",data:JSON.stringify(p),bids:e}},interpretResponse:function(e,r){var t=r.bids;if(a.isEmpty(e.body))return[];var i,c,s=e.body,u=s.seatbid,o=s.cur,l=(i=u.map((function(e){return e.bid})),(c=[]).concat.apply(c,d(i))).reduce((function(e,r){return e[r.impid-1]=r,e}),[]);return t.map((function(e,r){var t=l[r];if(t)return{requestId:e.bidId,cpm:t.price,creativeId:t.crid,ttl:1e3,netRevenue:"net"===e.netRevenue,currency:o,mediaType:n.c,bidderCode:"seedingAlliance",native:p(t)}})).filter(Boolean)}};function p(e){var r=e.adm.native,t=r.assets,i=r.link,n=r.imptrackers;i.clicktrackers.forEach((function(r,t){i.clicktrackers[t]=r.replace(/\$\{AUCTION_PRICE\}/,e.price)})),n.forEach((function(r,t){n[t]=r.replace(/\$\{AUCTION_PRICE\}/,e.price)}));var a={url:i.url,clickUrl:i.url,clickTrackers:i.clicktrackers||void 0,impressionTrackers:n||void 0};return t.forEach((function(e){var r=s[e.id],t=r&&e[u[r].name];t&&(a[r]=t.text||t.value||{url:t.url,width:t.w,height:t.h})})),a}function l(e,r){for(var t,i=0;i<e.length;i++)if(t=a.deepAccess(e[i],r))return t}Object(i.registerBidder)(o)}}]);