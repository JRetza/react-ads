(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{221:function(e,r,n){"use strict";n.r(r),n.d(r,"spec",(function(){return d}));var t=n(277),i=n(280),s=n(278);function a(){if(!t.inIframe())return window.location.hostname;var e=window.document.location.ancestorOrigins;return e&&e.length>0?e[e.length-1]:void 0}var d={code:"smartrtb",supportedMediaTypes:["banner","video"],aliases:["smrtb"],isBidRequestValid:function(e){return null!==e.params.pubId&&null!==e.params.medId&&null!==e.params.zoneId},buildRequests:function(e,r){var n=r.refererInfo&&r.refererInfo.stack?r.refererInfo:[],s=i.b.getConfig("userSync")&&i.b.getConfig("userSync").syncsPerBidder?i.b.getConfig("userSync").syncsPerBidder:5,d={start_time:t.timestamp(),language:window.navigator.userLanguage||window.navigator.language,site:{domain:a(),iframe:!r.refererInfo.reachedTop,url:n&&n.length>0?[n.length-1]:null,https:"https:"===window.location.protocol,referrer:r.refererInfo.referer},imps:[],user_ids:e[0].userId,sync_limit:s};r&&r.gdprConsent&&(d.gdpr={applies:r.gdprConsent.gdprApplies,consent:r.gdprConsent.consentString});for(var o=0;o<e.length;o++){var p=e[o];d.imps.push({zone_id:p.params.zoneId,bid_id:p.bidId,imp_id:p.transactionId,sizes:p.sizes,force_bid:p.params.forceBid,media_types:t.deepAccess(p,"mediaTypes"),has_renderer:void 0!==p.renderer})}var u=e[0].params;return{method:"POST",url:u.endpoint?u.endpoint:"https://market-global.smrtb.com/json/publisher/prebid",data:JSON.stringify(d)}},interpretResponse:function(e,r){var n=[];if(!e||!e.body)return n;var t=e.body;if(!t.bids||!t.bids.length)return[];for(var i=0;i<e.body.bids.length;i++){var s=e.body.bids[i];n.push({requestId:s.bid_id,cpm:s.cpm,width:s.w,height:s.h,ad:s.html,vastUrl:s.vast_url,vastXml:s.vast_xml,mediaType:s.html?"banner":"video",ttl:120,creativeId:s.crid,dealId:s.deal_id,netRevenue:!0,currency:"USD"})}return n},getUserSyncs:function(e,r){var n=[];if(!r.length||!r[0].body)return n;var t=r[0].body.pixels;if(!t||!t.length)return n;for(var i=0;i<t.length;i++){var s=t[i];("iframe"===s.type&&e.iframeEnabled||"image"===s.type&&e.pixelEnabled)&&n.push(s)}return n}};Object(s.registerBidder)(d)}}]);