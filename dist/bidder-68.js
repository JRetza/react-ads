(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{113:function(e,r,d){"use strict";d.r(r),d.d(r,"spec",(function(){return s}));var i=d(0),n=d(22),t=d(2),a=d(55),o=d(13),u={},c={},s={code:"adspend",aliases:["as"],supportedMediaTypes:[o.b],onBidWon:function(e){var r=e.requestId,d=e.cpm,i=u[r].replace(/\$\{AUCTION_PRICE\}/,d);Object(n.a)(i,null)},isBidRequestValid:function(e){return!!("RUB"===t.b.getConfig("currency.adServerCurrency")&&e.params&&e.params.bidfloor&&e.crumbs.pubcid&&i.checkCookieSupport()&&i.cookiesAreEnabled())},buildRequests:function(e,r){var d=e[Math.floor(Math.random()*e.length)],i=d.bidId,n={id:d.crumbs.pubcid,domain:document.domain},t={ua:navigator.userAgent,ip:""},a={id:p()},o=["RUB"],u=r.timeout,s=e.map((function(e){var r=e.params,d=r.tagId,n=r.placement,t={format:b(e.sizes)},a=void 0!==r.bidfloor?Number(r.bidfloor):1;return c[n]=i,{id:n,tagId:d,banner:t,bidfloor:a,bidfloorcur:"RUB",secure:0}})),m={bidId:i,at:1,site:n,device:t,user:a,imp:s,cur:o,tmax:u};return{method:"POST",url:"https://rtb.com.ru/headerbidding-bid",data:JSON.stringify(m)}},interpretResponse:function(e,r){r.bidderRequest;return""===e.body?[]:e.body.seatbid[0].bid.map((function(r){var d=r.price,i=r.impid;return{cpm:d,requestId:c[i],width:r.w,height:r.h,creativeId:r.adid,dealId:r.dealid,currency:e.body.cur,netRevenue:!0,ttl:1e4,ad:r.adm}}))},getUserSyncs:function(e,r){var d=[];return r.forEach((function(r){if(e.pixelEnabled&&""===r.body){var i=p();d.push({type:"image",url:"https://rtb.com.ru/headerbidding-sync?uid={UUID}".replace("{UUID}",i)})}})),d}},p=function(){var e=document.cookie.indexOf("hb-adspend-id");if(-1===e){var r=i.generateUUID();return document.cookie="".concat("hb-adspend-id","=").concat(r,"; path=/"),r}var d=e+"hb-adspend-id".length+1;return document.cookie.substring(d,d+36)},b=function(e){return e.map((function(e){return{w:e[0],h:e[1]}}))};Object(a.registerBidder)(s)}}]);