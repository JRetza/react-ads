(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{326:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return b}));var i=t(0),n=t(55),s=t(16),d=t(13),a="Bid from response has no auid parameter - ",o="Bid from response has no adm parameter - ",p="Array of bid objects is empty",u="Can't find in requested bids the bid with auid - ",c="Seatbid array from response has empty item",f="Response is empty",m="Response has empty seatbid array",l="Seatbid from response has no array of bid objects - ",b={code:"turktelekom",supportedMediaTypes:[d.b,d.d],isBidRequestValid:function(e){return!!e.params.uid},buildRequests:function(e,r){var t,n=[],s={},d={},a={},o="net";(e||[]).forEach((function(e){"gross"===e.params.priceType&&(o="gross"),t=e.bidderRequestId;var r=e.params.uid,p=e.adUnitCode;n.push(r);var u=i.parseSizesInput(e.sizes);d[r]||(d[r]={});var c=d[r];c[p]?c[p].bids.push(e):c[p]={adUnitCode:p,bids:[e],parents:[]};var f=c[p];u.forEach((function(e){a[e]=!0,s[r]||(s[r]={}),s[r][e]?s[r][e].push(f):s[r][e]=[f],f.parents.push({parent:s[r],key:e,uid:r})}))}));var p={pt:o,auids:n.join(","),sizes:i.getKeys(a).join(","),r:t,wrapperType:"Prebid_js",wrapperVersion:"3.11.0"};return r&&(r.refererInfo&&r.refererInfo.referer&&(p.u=r.refererInfo.referer),r.timeout&&(p.wtimeout=r.timeout),r.gdprConsent&&(r.gdprConsent.consentString&&(p.gdpr_consent=r.gdprConsent.consentString),p.gdpr_applies="boolean"==typeof r.gdprConsent.gdprApplies?Number(r.gdprConsent.gdprApplies):1)),{method:"GET",url:"https://ssp.programattik.com/hb",data:i.parseQueryStringParameters(p).replace(/\&$/,""),bidsMap:s}},interpretResponse:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.a;e=e&&e.body;var n,d=[],a=r.bidsMap,o=r.data.pt;return e?e.seatbid&&!e.seatbid.length&&(n=m):n=f,!n&&e.seatbid&&e.seatbid.forEach((function(e){h(g(e),a,o,d,t)})),n&&i.logError(n),d},getUserSyncs:function(e){if(e.pixelEnabled)return[{type:"image",url:"https://ssp.programattik.com/sync"}]}};function g(e){return e?e.bid?e.bid[0]||i.logError(p):i.logError(l+JSON.stringify(e)):i.logError(c),e&&e.bid&&e.bid[0]}function h(e,r,t,n,s){if(e){var p;if(e.auid||(p=a+JSON.stringify(e)),e.adm){var c=r[e.auid];if(c){var f="".concat(e.w,"x").concat(e.h);if(c[f]){var m=c[f][0],l=m.bids.shift(),g={requestId:l.bidId,bidderCode:b.code,cpm:e.price,width:e.w,height:e.h,creativeId:e.auid,currency:"TRY",netRevenue:"gross"!==t,ttl:360,dealId:e.dealid};"video"===e.content_type?(g.vastXml=e.adm,g.mediaType=d.d,g.adResponse={content:g.vastXml},l.renderer||l.mediaTypes&&l.mediaTypes.video&&"outstream"!==l.mediaTypes.video.context||(g.renderer=function(e,r,t){var n=t.install({id:r.id,url:r.url,loaded:!1});try{n.setRender(y)}catch(e){i.logWarn("Prebid Error calling setRender on renderer",e)}return n}(0,{id:l.bidId,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"},s))):(g.ad=e.adm,g.mediaType=d.b),n.push(g),m.bids.length||m.parents.forEach((function(e){var t=e.parent,n=e.key,s=e.uid,d=t[n].indexOf(m);d>-1&&t[n].splice(d,1),t[n].length||(delete t[n],i.getKeys(t).length||delete r[s])}))}}else p=u+e.auid}else p=o+JSON.stringify(e);p&&i.logError(p)}}function y(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({targetId:e.adUnitCode,adResponse:e.adResponse})}))}Object(n.registerBidder)(b)}}]);