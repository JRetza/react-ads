(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{31:function(e,n,r){"use strict";r.r(n),r.d(n,"spec",(function(){return s}));var t=r(277),a=r(278);function i(e,n){var r="";return t._each(n,(function(e,n){r.length&&(r+="&"),r+=n+"="+encodeURIComponent(e)})),"https://"+e+"/_"+Math.random().toString().slice(2)+"/ad.json?"+r}var s={code:"adocean",isBidRequestValid:function(e){return!!(e.params.slaveId&&e.params.masterId&&e.params.emiter)},buildRequests:function(e,n){var r={},a=[];return t._each(e,(function(e){!function(e,n){for(var r=e.params.masterId,t=e.params.slaveId,a=n[r]=n[r]||[{}],i=0;a[i]&&a[i][t];)i++;a[i]||(a[i]={}),a[i][t]=e}(e,r)})),t._each(r,(function(e,r){t._each(e,(function(e){a.push(function(e,n,r){var a,s={id:n};r&&(s.gdpr_consent=r.consentString||void 0,s.gdpr=r.gdprApplies?1:0);var c={};return t._each(e,(function(e,n){a||(a=e.params.emiter),c[n]=e.bidId})),{method:"GET",url:i(a,s),data:{},bidIdMap:c}}(e,r,n.gdprConsent))}))})),a},interpretResponse:function(e,n){var r=[];return t.isArray(e.body)&&t._each(e.body,(function(e){!function(e,n,r){var t=n.bidIdMap[e.id];if(!e.error&&t){var a='<script type="application/javascript">(function(){var wu="'+(e.winUrl||"")+'",su="'+(e.statsUrl||"")+'".replace(/\\[TIMESTAMP\\]/,(new Date()).getTime());';a+="if(navigator.sendBeacon){if(wu){navigator.sendBeacon(wu)||((new Image(1,1)).src=wu)};if(su){navigator.sendBeacon(su)||((new Image(1,1)).src=su)}}",a+="else{if(wu){(new Image(1,1)).src=wu;}if(su){(new Image(1,1)).src=su;}}",a+="})();<\/script>";var i={ad:a+=decodeURIComponent(e.code),cpm:parseFloat(e.price),currency:e.currency,height:parseInt(e.height,10),requestId:t,width:parseInt(e.width,10),netRevenue:!1,ttl:parseInt(e.ttl),creativeId:e.crid};r.push(i)}}(e,n,r)})),r}};Object(a.registerBidder)(s)}}]);