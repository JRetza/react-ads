(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{325:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return g}));var s=t(0),i=t(55),n=t(16),d=t(13),a="Bid from response has no auid parameter - ",o="Bid from response has no adm parameter - ",p="Array of bid objects is empty",u="Can't find in requested bids the bid with auid - ",c="Seatbid array from response has empty item",f="Response is empty",l="Response has empty seatbid array",m="Seatbid from response has no array of bid objects - ",g={code:"trustx",supportedMediaTypes:[d.b,d.d],isBidRequestValid:function(e){return!!e.params.uid},buildRequests:function(e,r){var t,i,n=[],d={},a={},o={},p="net";(e||[]).forEach((function(e){"gross"===e.params.priceType&&(p="gross"),i=e.bidderRequestId;var r=e.params.uid,u=e.adUnitCode;n.push(r);var c=s.parseSizesInput(e.sizes);if(!t&&!s.isEmpty(e.params.keywords)){var f=s.transformBidderParamKeywords(e.params.keywords);f.length>0&&f.forEach(b),t=f}a[r]||(a[r]={});var l=a[r];l[u]?l[u].bids.push(e):l[u]={adUnitCode:u,bids:[e],parents:[]};var m=l[u];c.forEach((function(e){o[e]=!0,d[r]||(d[r]={}),d[r][e]?d[r][e].push(m):d[r][e]=[m],m.parents.push({parent:d[r],key:e,uid:r})}))}));var u={pt:p,auids:n.join(","),sizes:s.getKeys(o).join(","),r:i,wrapperType:"Prebid_js",wrapperVersion:"3.11.0"};return t&&(u.keywords=JSON.stringify(t)),r&&(r.refererInfo&&r.refererInfo.referer&&(u.u=r.refererInfo.referer),r.timeout&&(u.wtimeout=r.timeout),r.gdprConsent&&(r.gdprConsent.consentString&&(u.gdpr_consent=r.gdprConsent.consentString),u.gdpr_applies="boolean"==typeof r.gdprConsent.gdprApplies?Number(r.gdprConsent.gdprApplies):1),r.uspConsent&&(u.us_privacy=r.uspConsent)),{method:"GET",url:"https://sofia.trustx.org/hb",data:s.parseQueryStringParameters(u).replace(/\&$/,""),bidsMap:d}},interpretResponse:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.a;e=e&&e.body;var i,d=[],a=r.bidsMap,o=r.data.pt;return e?e.seatbid&&!e.seatbid.length&&(i=l):i=f,!i&&e.seatbid&&e.seatbid.forEach((function(e){h(y(e),a,o,d,t)})),i&&s.logError(i),d},getUserSyncs:function(e){if(e.pixelEnabled)return[{type:"image",url:"https://sofia.trustx.org/push_sync"}]}};function b(e){var r;r=e.value,s.isArray(r)&&r.length>0&&""===e.value[0]&&delete e.value}function y(e){return e?e.bid?e.bid[0]||s.logError(p):s.logError(m+JSON.stringify(e)):s.logError(c),e&&e.bid&&e.bid[0]}function h(e,r,t,i,n){if(e){var p;if(e.auid||(p=a+JSON.stringify(e)),e.adm){var c=r[e.auid];if(c){var f="".concat(e.w,"x").concat(e.h);if(c[f]){var l=c[f][0],m=l.bids.shift(),b={requestId:m.bidId,bidderCode:g.code,cpm:e.price,width:e.w,height:e.h,creativeId:e.auid,currency:"USD",netRevenue:"gross"!==t,ttl:360,dealId:e.dealid};"video"===e.content_type?(b.vastXml=e.adm,b.mediaType=d.d,b.adResponse={content:b.vastXml},m.renderer||m.mediaTypes&&m.mediaTypes.video&&"outstream"!==m.mediaTypes.video.context||(b.renderer=function(e,r,t){var i=t.install({id:r.id,url:r.url,loaded:!1});try{i.setRender(v)}catch(e){s.logWarn("Prebid Error calling setRender on renderer",e)}return i}(0,{id:m.bidId,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"},n))):(b.ad=e.adm,b.mediaType=d.b),i.push(b),l.bids.length||l.parents.forEach((function(e){var t=e.parent,i=e.key,n=e.uid,d=t[i].indexOf(l);d>-1&&t[i].splice(d,1),t[i].length||(delete t[i],s.getKeys(t).length||delete r[n])}))}}else p=u+e.auid}else p=o+JSON.stringify(e);p&&s.logError(p)}}function v(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({targetId:e.adUnitCode,adResponse:e.adResponse})}))}Object(i.registerBidder)(g)}}]);