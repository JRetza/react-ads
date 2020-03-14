(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{87:function(e,r,a){"use strict";a.r(r),a.d(r,"spec",(function(){return b}));var t=a(0),n=a(55),s=a(13),o=a(4),i=a.n(o),p=a(3),d=a.n(p);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function m(e){return function(e){if(Array.isArray(e)){for(var r=0,a=new Array(e.length);r<e.length;r++)a[r]=e[r];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f="https://hb.1ad4good.org/prebid",l=["id","mimes","minduration","maxduration","startdelay","skippable","playback_method","frameworks"],y=["age","externalUid","segments","gender","dnt","language"],v=["geo","device_id"],b={code:"1ad4good",aliases:["adsforgood","ads4good","1adsforgood"],supportedMediaTypes:[s.b,s.d],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,r){var a,n=e.map(_),s=i()(e,w);s&&(a={},Object.keys(s.params.user).filter((function(e){return d()(y,e)})).forEach((function(e){return a[e]=s.params.user[e]})));var o,p=i()(e,k);p&&p.params&&p.params.app&&(o={},Object.keys(p.params.app).filter((function(e){return d()(v,e)})).forEach((function(e){return o[e]=p.params.app[e]})));var u,c=i()(e,T);c&&c.params&&p.params.app&&p.params.app.id&&(u={appid:c.params.app.id});var l={tags:m(n),user:a,sdk:{source:"pbjs",version:"3.11.0"}};if(p&&(l.device=o),c&&(l.app=u),r&&r.gdprConsent&&(l.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies}),r&&r.refererInfo){var b={rd_ref:encodeURIComponent(r.refererInfo.referer),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map((function(e){return encodeURIComponent(e)})).join(",")};l.referrer_detection=b}return function(e,r){var a=[];if(e.tags.length>15){var n=t.deepClone(e);t.chunk(e.tags,15).forEach((function(e){n.tags=e;var t=JSON.stringify(n);a.push({method:"POST",url:f,data:t,bidderRequest:r})}))}else{var s=JSON.stringify(e);a={method:"POST",url:f,data:s,bidderRequest:r}}return a}(l,r)},interpretResponse:function(e,r){var a=this,n=r.bidderRequest;e=e.body;var o=[];if(!e||e.error){var p="in response for ".concat(n.bidderCode," adapter");return e&&e.error&&(p+=": ".concat(e.error)),t.logError(p),o}return e.tags&&e.tags.forEach((function(e){var r,p=(r=e)&&r.ads&&r.ads.length&&i()(r.ads,(function(e){return e.rtb}));if(p&&0!==p.cpm&&d()(a.supportedMediaTypes,p.ad_type)){var u=function(e,r,a){var n=t.getBidRequest(e.uuid,[a]),s={requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:n.adUnitCode,ads4good:{buyerMemberId:r.buyer_member_id,dealPriority:r.deal_priority,dealCode:r.deal_code}};r.advertiser_id&&(s.meta=c({},s.meta,{advertiserId:r.advertiser_id}));if(r.rtb.video)c(s,{width:r.rtb.video.player_width,height:r.rtb.video.player_height,vastUrl:r.rtb.video.asset_url,vastImpUrl:r.notify_url,ttl:3600});else{c(s,{width:r.rtb.banner.width,height:r.rtb.banner.height,ad:r.rtb.banner.content});try{var o=r.rtb.trackers[0].impression_urls[0],i=t.createTrackPixelHtml(o);s.ad+=i}catch(e){t.logError("Error appending tracking pixel",e)}}return s}(e,p,n);u.mediaType=function(e){return e.ad_type===s.d?s.d:s.b}(p),o.push(u)}})),o},transformBidParams:function(e,r){return e=t.convertTypes({placementId:"number",keywords:t.transformBidderParamKeywords},e),r&&(e.use_pmt_rule="boolean"==typeof e.usePaymentRule&&e.usePaymentRule,e.usePaymentRule&&delete e.usePaymentRule,h(e.keywords)&&e.keywords.forEach(g),Object.keys(e).forEach((function(r){var a=t.convertCamelToUnderscore(r);a!==r&&(e[a]=e[r],delete e[r])}))),e},onBidWon:function(e){}};function h(e){return!!(t.isArray(e)&&e.length>0)}function g(e){h(e.value)&&""===e.value[0]&&delete e.value}function _(e){var r={};if(r.sizes=I(e.sizes),r.primary_size=r.sizes[0],r.ad_types=[],r.uuid=e.bidId,e.params.placementId&&(r.id=parseInt(e.params.placementId,10)),e.params.cpm&&(r.cpm=e.params.cpm),r.allow_smaller_sizes=e.params.allowSmallerSizes||!1,r.use_pmt_rule=e.params.usePaymentRule||!1,r.prebid=!0,r.disable_psa=!0,e.params.reserve&&(r.reserve=e.params.reserve),e.params.position&&(r.position={above:1,below:2}[e.params.position]||0),e.params.trafficSourceCode&&(r.traffic_source_code=e.params.trafficSourceCode),e.params.privateSizes&&(r.private_sizes=I(e.params.privateSizes)),e.params.supplyType&&(r.supply_type=e.params.supplyType),e.params.pubClick&&(r.pubclick=e.params.pubClick),e.params.extInvCode&&(r.ext_inv_code=e.params.extInvCode),e.params.externalImpId&&(r.external_imp_id=e.params.externalImpId),!t.isEmpty(e.params.keywords)){var a=t.transformBidderParamKeywords(e.params.keywords);a.length>0&&a.forEach(g),r.keywords=a}var n=t.deepAccess(e,"mediaTypes.".concat(s.d)),o=t.deepAccess(e,"mediaTypes.video.context");return(e.mediaType===s.d||n)&&r.ad_types.push(s.d),(e.mediaType===s.d||n&&"outstream"!==o)&&(r.require_asset_url=!0),e.params.video&&(r.video={},Object.keys(e.params.video).filter((function(e){return d()(l,e)})).forEach((function(a){return r.video[a]=e.params.video[a]}))),e.renderer&&(r.video=c({},r.video,{custom_renderer_present:!0})),(t.isEmpty(e.mediaType)&&t.isEmpty(e.mediaTypes)||e.mediaType===s.b||e.mediaTypes&&e.mediaTypes[s.b])&&r.ad_types.push(s.b),r}function I(e){var r=[],a={};if(t.isArray(e)&&2===e.length&&!t.isArray(e[0]))a.width=parseInt(e[0],10),a.height=parseInt(e[1],10),r.push(a);else if("object"===u(e))for(var n=0;n<e.length;n++){var s=e[n];(a={}).width=parseInt(s[0],10),a.height=parseInt(s[1],10),r.push(a)}return r}function w(e){return!!e.params.user}function k(e){if(e.params)return!!e.params.app}function T(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}Object(n.registerBidder)(b)}}]);