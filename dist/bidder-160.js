(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{225:function(e,r,i){"use strict";i.r(r),i.d(r,"spec",(function(){return t}));var s=i(0),a=i(55),d=i(13);var t=new function(){this.code="marsmedia",this.aliases=["mars"],this.supportedMediaTypes=[d.d,d.b];var e=[2,3,5,6],r=["video/mp4"],i=[1,2,3,4],a=[1],t=[1,2,5],n={},p=this;function o(e,r){var i=[],a=0;if(r&&r.refererInfo&&r.refererInfo.stack.length){var d=document.createElement("a");d.href=r.refererInfo.stack[0],a="https:"==d.protocol?1:0}for(var t=0;t<e.length;t++){n[e[t].adUnitCode]=e[t];var p={};if(p.id=e[t].adUnitCode,p.secure=a,s.deepAccess(e[t],"mediaTypes.banner")||"banner"===s.deepAccess(e[t],"mediaType")){var o=v(e[t]);o&&(p.banner=o)}(s.deepAccess(e[t],"mediaTypes.video")||"video"===s.deepAccess(e[t],"mediaType"))&&(p.video=u(e[t])),(p.banner||p.video)&&(p.ext={bidder:{zoneId:e[t].params.zoneId}},i.push(p))}return i}function c(e){var r={domain:"",page:"",ref:""};if(e&&e.refererInfo){var i=e.refererInfo;if(r.ref=i.referer,i.stack.length){r.page=i.stack[i.stack.length-1];var s=document.createElement("a");s.href=i.stack[0],r.domain=s.hostname}}return r}function m(e){var r=parseInt(e[0]),i=parseInt(e[1]);return r==r&&i==i&&[r,i]}function v(e){var r=e.sizes;e.mediaTypes&&e.mediaTypes.banner&&(r=e.mediaTypes.banner.sizes);var i=s.parseSizesInput(r),a=[];return i.forEach((function(e){if(e){var r=m(e.split("x"));r&&a.push({w:r[0],h:r[1]})}})),!!a.length&&{format:a}}function u(d){var n=[];if(s.deepAccess(d,"mediaTypes.video.playerSize")){var p=d.mediaTypes.video.playerSize;s.isArray(d.mediaTypes.video.playerSize[0])&&(p=d.mediaTypes.video.playerSize[0]);var o=m(p);o&&(n=o)}return{mimes:s.deepAccess(d,"mediaTypes.video.mimes")||r,protocols:s.deepAccess(d,"mediaTypes.video.protocols")||e,w:n[0],h:n[1],startdelay:s.deepAccess(d,"mediaTypes.video.startdelay")||0,skip:s.deepAccess(d,"mediaTypes.video.skip")||0,playbackmethod:s.deepAccess(d,"mediaTypes.video.playbackmethod")||i,delivery:s.deepAccess(d,"mediaTypes.video.delivery")||a,api:s.deepAccess(d,"mediaTypes.video.api")||t}}this.isBidRequestValid=function(e){return!(!e.params||!e.params.zoneId)},this.getUserSyncs=function(e,r,i){return[]},this.buildRequests=function(e,r){var i=function(e,r){for(var i=0;i<r.length;i++)if(r[i].params&&r[i].params[e])return r[i].params[e]}("zoneId",e);if(void 0===i||e.length<1)return[];var a="https://bid306.rtbsrv.com/bidder/?bid=3mhdom&zoneId="+i,d=/(^v|(\.0)+$)/gi;a+="&hbv="+"3.11.0".replace(d,"")+","+"2.1".replace(d,"");var t=function(e,r){var i={id:e[0].bidderRequestId,imp:o(e,r),site:c(r),device:{ua:navigator.userAgent,ip:"",dnt:s.getDNT()?1:0},user:{ext:{consent:s.deepAccess(r,"gdprConsent.gdprApplies")?r.gdprConsent.consentString:""}},at:1,tmax:1e3,regs:{ext:{gdpr:!!s.deepAccess(r,"gdprConsent.gdprApplies")&&Boolean(1&r.gdprConsent.gdprApplies)}}};return e[0].schain&&(i.source={ext:{schain:e[0].schain}}),i}(e,r);return t.imp.length?{method:"POST",url:a,data:JSON.stringify(t)}:{}},this.interpretResponse=function(e){var r=e.body||[],i=[],s=0;if(r.seatbid){var a=[];for(s=0;s<r.seatbid.length;s++)for(var d=0;d<r.seatbid[s].bid.length;d++)a.push(r.seatbid[s].bid[d]);r=a}for(s=0;s<r.length;s++){var t=r[s],o=n[t.impid],c={requestId:o.id,bidderCode:p.code,cpm:parseFloat(t.price),width:t.w,height:t.h,creativeId:t.crid,currency:"USD",netRevenue:!0,ttl:350};o.mediaTypes&&o.mediaTypes.video?(c.vastUrl=t.adm,c.mediaType="video",c.ttl=600):c.ad=t.adm,i.push(c)}return i}};Object(a.registerBidder)(t)}}]);