(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{265:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return m}));var n=t(0),i=t(55),a=t(16);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=100,u=200,o=50,p=150,c=50,l=["cp","ct","cf","video","battr","bcat","badv","bidfloor"],m={code:"pulsepoint",aliases:["pulseLite","pulsepointLite"],supportedMediaTypes:["banner","native","video"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.cp&&e.params.ct)},buildRequests:function(e,r){return{method:"POST",url:"https://bid.contextweb.com/header/ortb?src=prebid",data:{id:e[0].bidderRequestId,imp:e.map((function(e){return function(e){return{id:e.bidId,banner:f(e),native:g(e),tagid:e.params.ct.toString(),video:v(e),bidfloor:e.params.bidfloor,ext:b(e)}}(e)})),site:w(e,r),app:O(e),device:{ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage},bcat:e[0].params.bcat,badv:e[0].params.badv,user:R(e[0],r),regs:P(r),source:x(e[0].schain)},bidderRequest:r}},interpretResponse:function(e,r){return function(e,r){var t={},i={},d={},s=r.body;e.data.imp.forEach((function(e){t[e.id]=e})),s&&s.seatbid.forEach((function(e){return e.bid.forEach((function(e){i[e.impid]=e}))}));e.bidderRequest&&e.bidderRequest.bids&&e.bidderRequest.bids.forEach((function(e){d[e.bidId]=e}));var u=[];return Object.keys(t).forEach((function(e){if(i[e]){var r={requestId:e,cpm:i[e].price,creative_id:i[e].crid,creativeId:i[e].crid,adId:e,ttl:i[e].exp||20,netRevenue:!0,currency:s.cur||"USD"};t[e].native?(r.native=function(e,r){if(e.native){var t=function(e){try{if(e)return JSON.parse(e)}catch(e){n.logError("pulsepointLite.safeParse","ERROR",e)}return null}(r.adm),i={};if(t&&t.native&&t.native.assets)return t.native.assets.forEach((function(e){i.title=e.title?e.title.text:i.title,i.body=e.data&&2===e.data.type?e.data.value:i.body,i.sponsoredBy=e.data&&1===e.data.type?e.data.value:i.sponsoredBy,i.image=e.img&&3===e.img.type?e.img.url:i.image,i.icon=e.img&&1===e.img.type?e.img.url:i.icon})),t.native.link&&(i.clickUrl=encodeURIComponent(t.native.link.url)),i.impressionTrackers=t.native.imptrackers,i}return null}(t[e],i[e]),r.mediaType="native"):t[e].video?(d[e]&&"outstream"===n.deepAccess(d[e],"mediaTypes.video.context")&&(r.renderer=(o=n.deepAccess(d[e],"renderer.options"),p=n.deepAccess(i[e],"ext.outstream"),(c=a.a.install({url:p.rendererUrl,config:{defaultOptions:p.config,rendererOptions:o,type:p.type},loaded:!1})).setRender((function(e){e.renderer.push((function(){var r=e.renderer.getConfig();(new window.PulsePointOutstreamRenderer).render({adUnitCode:e.adUnitCode,vastXml:e.vastXml,type:r.type,defaultOptions:r.defaultOptions,rendererOptions:o})}))})),c)),r.vastXml=i[e].adm,r.mediaType="video",r.width=i[e].w,r.height=i[e].h):(r.ad=i[e].adm,r.width=t[e].banner.w,r.height=t[e].banner.h),u.push(r)}var o,p,c})),u}(r,e)},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://bh.contextweb.com/visitormatch"}]:e.pixelEnabled?[{type:"image",url:"https://bh.contextweb.com/visitormatch/prebid"}]:void 0},transformBidParams:function(e,r){return n.convertTypes({cf:"string",cp:"number",ct:"number"},e)}};function f(e){var r=function(e){if(e.params.cf){var r=e.params.cf.toUpperCase().split("X"),t=parseInt(e.params.cw||r[0],10),n=parseInt(e.params.ch||r[1],10);return[t,n]}return[1,1]}(e);return e.nativeParams||e.params.video?null:{w:r[0],h:r[1],battr:e.params.battr}}function v(e){return e.params.video?d({},e.params.video,{battr:e.params.battr}):null}function b(e){var r={},t={};return l.forEach((function(e){return t[e]=1})),Object.keys(e.params).forEach((function(n){t[n]||(r[n]=e.params[n])})),Object.keys(r).length>0?{prebid:r}:null}function g(e){if(e.nativeParams){var r=[];return h(r,function(e,r,t){if(r)return{id:e,required:r.required?1:0,title:{len:r.len||t}};return null}(r.length+1,e.nativeParams.title,s)),h(r,I(r.length+1,e.nativeParams.body,2,u)),h(r,I(r.length+1,e.nativeParams.sponsoredBy,1,o)),h(r,y(r.length+1,e.nativeParams.icon,1,c,c)),h(r,y(r.length+1,e.nativeParams.image,3,p,p)),{request:JSON.stringify({assets:r}),ver:"1.1",battr:e.params.battr}}return null}function h(e,r){r&&e.push(r)}function y(e,r,t,n,i){return r?{id:e,required:r.required?1:0,img:{type:t,wmin:r.wmin||n,hmin:r.hmin||i}}:null}function I(e,r,t,n){return r?{id:e,required:r.required?1:0,data:{type:t,len:r.len||n}}:null}function w(e,r){var t=e&&e.length>0?e[0].params.cp:"0";return e[0].params.app?null:{publisher:{id:t.toString()},ref:q(),page:r&&r.refererInfo?r.refererInfo.referer:""}}function O(e){var r=e&&e.length>0?e[0].params.cp:"0",t=e[0].params.app;return t?{publisher:{id:r.toString()},bundle:t.bundle,storeurl:t.storeUrl,domain:t.domain}:null}function q(){try{return window.top.document.referrer}catch(e){return document.referrer}}function R(e,r){var t={};if(r&&r.gdprConsent&&(t.consent=r.gdprConsent.consentString),e&&e.userId){t.eids=[],k(t.eids,e.userId.pubcid,"pubcommon"),k(t.eids,e.userId.britepoolid,"britepool.com"),k(t.eids,e.userId.criteoId,"criteo"),k(t.eids,e.userId.idl_env,"identityLink"),k(t.eids,e.userId.id5id,"id5-sync.com"),k(t.eids,e.userId.parrableid,"parrable.com"),e.userId.lipb&&e.userId.lipb.lipbid&&k(t.eids,e.userId.lipb.lipbid,"liveintent.com"),k(t.eids,e.userId.tdid,"adserver.org",{rtiPartner:"TDID"});var n=e.userId.digitrustid;if(n&&n.data){var i={};n.data.id&&(i.id=n.data.id),n.data.keyv&&(i.keyv=n.data.keyv),t.digitrust=i}}return{ext:t}}function k(e,r,t,n){if(r){var i={id:r};n&&(i.ext=n),e.push({source:t,uids:[i]})}}function P(e){if(e.gdprConsent||e.uspConsent){var r={};return e.gdprConsent&&(r.gdpr=e.gdprConsent.gdprApplies?1:0),e.uspConsent&&(r.us_privacy=e.uspConsent),{ext:r}}return null}function x(e){return e?{ext:{schain:e}}:null}Object(i.registerBidder)(m)}}]);