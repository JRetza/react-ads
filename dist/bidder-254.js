(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{241:function(e,i,t){"use strict";t.r(i),t.d(i,"spec",(function(){return o}));var r=t(279),n=t(280),a=t(306),d=t(284);var o={code:"tim",aliases:["timmedia"],isBidRequestValid:function(e){return!!(e.params&&e.params.publisherid&&e.params.placementCode)||(e.params?e.params.publisherid?e.params.placementCode||r.logError("bid not valid: placementCode was not provided"):r.logError("bid not valid: publisherid was not provided"):r.logError("bid not valid: params were not provided"),!1)},buildRequests:function(e,i){for(var t=[],r=0;r<e.length;r++)t.push(this.createRTBRequestURL(e[r]));return t},createRTBRequestURL:function(e){var i=window.location.host,t=window.location.href,n=e.params.publisherid,a=e.params.bidfloor,d=e.params.placementCode,o=e.mediaTypes.banner.sizes[0][0],s=e.mediaTypes.banner.sizes[0][1],p={id:r.getUniqueIdentifierStr(),imp:[{id:e.bidId,banner:{w:o,h:s},tagid:d,bidfloor:a}],site:{domain:i,page:t,publisher:{id:n}},device:{language:this.getLanguage(),w:o,h:s,js:1,ua:navigator.userAgent}};return a||delete p.imp.bidfloor,p.bidId=e.bidId,{method:"GET",url:"https://hb.timmedia-hb.com/api/v2/services/prebid/"+n+"/"+d+"?br="+encodeURIComponent(JSON.stringify(p)),data:"",options:{withCredentials:!1}}},interpretResponse:function(e,i){i=function(e){var i={},t=e.url.split("?")[1].split("&");try{for(var n in t){var a=t[n].split("=");i[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}}catch(e){r.logError(e)}return JSON.parse(i.br)}(i);var t=e.body,n=[];return t&&t.id&&t.seatbid&&0!==t.seatbid.length&&t.seatbid[0].bid&&0!==t.seatbid[0].bid.length?(t.seatbid[0].bid.forEach((function(e){var r,o="";if(i){var s=a.a(1);if(o=i.placementCode,i.status=d.STATUS.GOOD,0===(r=parseFloat(e.price))){var p=a.a(2);return p.bidderCode="tim",n.push(p),n}s.placementCode=o,s.size=i.sizes,s.creativeId=e.id,s.bidderCode="tim",s.cpm=r,s.ad=function(e){var i=e.adm;return"nurl"in e&&(i+=function(e){if(!e)return"";var i='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return i+='<img src="'+e+'"></div>'}(e.nurl)),"<!DOCTYPE html><html><head><title></title><body style='margin:0px;padding:0px;'>".concat(i,"</body></head>")}(e),s.width=parseInt(e.w),s.height=parseInt(e.h),s.currency=t.cur,s.netRevenue=!0,s.requestId=i.bidId,s.ttl=180,n.push(s)}})),n):[]},getLanguage:function(){var e=navigator.language?"language":"userLanguage";return navigator[e].split("-")[0]},getUserSyncs:function(e,i){return[]},onTimeout:function(e){},onBidWon:function(e){},onSetTargeting:function(e){}};Object(n.registerBidder)(o)}}]);