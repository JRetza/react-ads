(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{184:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return o}));var n=t(0),i=t(55),o={code:"fidelity",isBidRequestValid:function(e){return!!(e&&e.params&&e.params.zoneid)},buildRequests:function(e,r){return e.map((function(e){var t=e.params.server||"x.fidelity-media.com",n={from:"hb",v:"1.0",requestid:e.bidderRequestId,impid:e.bidId,zoneid:e.params.zoneid,floor:parseFloat(e.params.floor)>0?e.params.floor:0,charset:document.charSet||document.characterSet,subid:"hb",flashver:a(),tmax:r.timeout,defloc:r.refererInfo.referer,referrer:d()};return s(r.gdprConsent,r.uspConsent,n),{method:"GET",url:"https://"+t+"/delivery/hb.php",data:n}}))},interpretResponse:function(e){e=e.body;var r=[];return e&&e.seatbid&&e.seatbid.forEach((function(e){return e.bid.forEach((function(e){var t={requestId:e.impid,creativeId:e.impid,cpm:e.price,width:e.width,height:e.height,ad:e.adm,netRevenue:e.netRevenue,currency:e.cur,ttl:e.ttl};r.push(t)}))})),r},getUserSyncs:function(e,r,t,i){if(e.iframeEnabled){var o={type:"iframe"};return s(t,i,o),[{type:"iframe",url:"https://x.fidelity-media.com/delivery/matches.php?"+n.parseQueryStringParameters(o).replace(/\&$/,"")}]}}};function a(){var e,r,t;if(navigator.plugins&&navigator.plugins.length>0){e=navigator.plugins;for(var n=0;n<e.length&&!t;n++)(r=e[n]).name.indexOf("Shockwave Flash")>-1&&(t=r.description.split("Shockwave Flash ")[1])}return t||""}function d(){try{return window.top.document.referrer}catch(e){return""}}function s(e,r,t){e&&(t.gdpr=0,t.consent_str="",t.consent_given=0,void 0!==e.gdprApplies&&(t.gdpr=e.gdprApplies?1:0),void 0!==e.consentString&&(t.consent_str=e.consentString),e.vendorData&&e.vendorData.vendorConsents&&void 0!==e.vendorData.vendorConsents[408..toString(10)]&&(t.consent_given=e.vendorData.vendorConsents[408..toString(10)]?1:0)),void 0!==r&&(t.us_privacy=r)}Object(i.registerBidder)(o)}}]);