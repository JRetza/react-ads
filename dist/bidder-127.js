(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{183:function(e,n,r){"use strict";r.r(n),r.d(n,"spec",(function(){return f}));var t=r(0),i=r(55),a=r(13),o=r(22);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var c=[a.d,a.b],s=/^[a-z0-9][a-z0-9_-]+[a-z0-9]$/,p={};function u(e){return function(n){if(n){var r=function(e,n){var r=e.bidId||e.requestId;if(!p.hasOwnProperty(r))return null;var t=p[r],i=t.referer,a=t.transactionId;return delete p[r],{app_hybrid:!1,client_token:e.params[0].clientToken,placement_id:e.params[0].placementId,klass:n,prebid_auction_id:e.auctionId,prebid_bid_id:r,prebid_transaction_id:a,referer:i,sdk_version:"1.0.0"}}(n,e);r&&Object(o.a)("".concat("https://api.feedad.com").concat("/1/prebid/web/events"),null,JSON.stringify(r),{withCredentials:!0,method:"POST",contentType:"application/json"})}}}var f={code:"feedad",supportedMediaTypes:c,isBidRequestValid:function(e){var n=t.deepAccess(e,"params.clientToken");if(!n||!function(e){return"string"==typeof e&&e.length>0}(n))return t.logWarn("[FeedAd]","missing or invalid parameter 'clientToken'. found value:",n),!1;var r=t.deepAccess(e,"params.placementId");return!(!r||!function(e){return"string"==typeof e&&e.length>0&&e.length<=256&&s.test(e)}(r))||(t.logWarn("[FeedAd]","missing or invalid parameter 'placementId'. found value:",r),!1)},buildRequests:function(e,n){if(!n)return[];var r=e.filter((function(e){return!function(e){return Object.keys(e).every((function(n){return void 0===e[n]}))}((n=e.mediaTypes,{banner:n.banner,video:n.video&&"outstream"===n.video.context?n.video:void 0,native:void 0}));var n}));if(0===r.length)return[];var t=d({},n,{bids:r.map((function(e){var n;return e.params={ad_type:0,client_token:(n=e).params.clientToken,placement_id:n.params.placementId,sdk_version:"prebid_".concat("1.0.0"),app_hybrid:!1},e}))});return t.bids.forEach((function(e){return p[e.bidId]={referer:t.refererInfo.referer,transactionId:e.transactionId}})),{method:"POST",url:"".concat("https://api.feedad.com").concat("/1/prebid/web/bids"),data:t,options:{contentType:"application/json"}}},interpretResponse:function(e,n){return"string"==typeof e.body?JSON.parse(e.body):e.body},onTimeout:u("prebid_bidTimeout"),onBidWon:u("prebid_bidWon")};Object(i.registerBidder)(f)}}]);