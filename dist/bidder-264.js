(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{256:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return a}));var i=t(279),n=t(282),d=t(280),o=t(281),a={code:"vdo.ai",supportedMediaTypes:[o.b],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,r){return 0===e.length?[]:e.map((function(e){var t=i.parseSizesInput(e.params.size||e.sizes)[0],n=t.split("x")[0],d=t.split("x")[1],o={placementId:e.params.placementId,width:n,height:d,bidId:e.bidId,referer:r.refererInfo.referer,id:e.auctionId};return e.params.bidFloor&&(o.bidFloor=e.params.bidFloor),{method:"POST",url:"https://prebid.vdo.ai/auction",data:o}}))},interpretResponse:function(e,r){var t=[],i=e.body,d=i.adid||0,o=r.data.width,a=r.data.height,u=i.price||0;i.rWidth=o,i.rHeight=a;var s=i.vdoCreative;if(0!==o&&0!==a&&0!==u&&0!==d){var c=i.cur||"USD",p={requestId:i.bidId,cpm:u,width:o,height:a,creativeId:d,currency:c,netRevenue:!0,ttl:n.b.getConfig("_bidderTimeout"),ad:s};t.push(p)}return t},getUserSyncs:function(e,r){var t=r[0]&&r[0].body&&r[0].body.cookiesync&&r[0].body.cookiesync.bidder_status;return e.iframeEnabled&&t&&t.length>0?t.map((function(e){return{url:e.usersync.url,type:"iframe"}})):[]},onTImeout:function(e){},onBidWon:function(e){},onSetTargeting:function(e){}};Object(d.registerBidder)(a)}}]);