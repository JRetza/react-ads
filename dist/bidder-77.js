(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{124:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return s}));var a=t(13),n=t(55),i=t(16);function d(e){e.renderer.push((function(){var r=e&&e.renderer&&e.renderer.handleVideoEvent?e.renderer.handleVideoEvent:null;window.aniviewRenderer.renderAd({id:e.adUnitCode+"_"+e.adId,debug:window.location.href.indexOf("pbjsDebug")>=0,placement:e.adUnitCode,width:e.width,height:e.height,vastUrl:e.vastUrl,vastXml:e.vastXml,config:e.params[0].rendererConfig,eventsCallback:r,bid:e})}))}var s={code:"aniview",supportedMediaTypes:[a.d],isBidRequestValid:function(e){return!!(e.params&&e.params.AV_PUBLISHERID&&e.params.AV_CHANNELID)},buildRequests:function(e,r){for(var t=[],a=0;a<e.length;a++){var n=e[a],i=[[640,480]];n.mediaTypes&&n.mediaTypes.video&&n.mediaTypes.video.playerSize?i=n.mediaTypes.video.playerSize:n.sizes&&(i=n.sizes),2===i.length&&"number"==typeof i[0]&&(i=[[i[0],i[1]]]);for(var d=0;d<i.length;d++){var s=i[d],o=void 0,p=void 0;s&&2==s.length?(o=s[0],p=s[1]):(o=640,p=480);var m={};for(var A in n.params)n.params.hasOwnProperty(A)&&0==A.indexOf("AV_")&&(m[A]=n.params[A]);m.AV_APPPKGNAME&&!m.AV_URL&&(m.AV_URL=m.AV_APPPKGNAME),m.AV_IDFA||m.AV_URL||(r&&r.refererInfo&&r.refererInfo.referer?m.AV_URL=r.refererInfo.referer:m.AV_URL=window.location.href),m.AV_IDFA&&!m.AV_AID&&(m.AV_AID=m.AV_IDFA),m.AV_AID&&!m.AV_IDFA&&(m.AV_IDFA=m.AV_AID),m.cb=Math.floor(999999999*Math.random()),m.AV_WIDTH=o,m.AV_HEIGHT=p,m.bidWidth=o,m.bidHeight=p,m.bidId=n.bidId,m.pbjs=1,m.tgt=10,m.s2s="1",r&&r.gdprConsent&&r.gdprConsent.gdprApplies&&(m.AV_GDPR=1,m.AV_CONSENT=r.gdprConsent.consentString),r&&r.uspConsent&&(m.AV_CCPA=r.uspConsent);var l="https://"+(n.params&&n.params.serverDomain?n.params.serverDomain:"gov.aniview.com")+"/api/adserver/vast3/";t.push({method:"GET",url:l,data:m,bidRequest:n})}}return t},interpretResponse:function(e,r){var t=[];if(e&&e.body){if(e.error)return t;try{var n={};if(r&&r.data&&r.data.bidId&&""!==r.data.bidId){var s=e.body,o=(new window.DOMParser).parseFromString(s,"text/xml");if(o&&0==o.getElementsByTagName("parsererror").length){var p=function(e){var r={cpm:0,currency:"USD"};if(e){var t=e.getElementsByTagName("Extensions");if(t&&t.length>0&&(t=t[0].getElementsByTagName("Extension"))&&t.length>0)for(var a=0;a<t.length;a++)if("ANIVIEW"==t[a].getAttribute("type")){var n=t[a].getElementsByTagName("Cpm");n&&1==n.length&&(r.cpm=n[0].textContent);break}}return r}(o);if(p&&p.cpm>0){n.requestId=r.data.bidId,n.bidderCode="aniview",n.ad="",n.cpm=p.cpm,n.width=r.data.AV_WIDTH,n.height=r.data.AV_HEIGHT,n.ttl=600,n.creativeId=o.getElementsByTagName("Ad")&&o.getElementsByTagName("Ad")[0]&&o.getElementsByTagName("Ad")[0].getAttribute("id")?o.getElementsByTagName("Ad")[0].getAttribute("id"):"creativeId",n.currency=p.currency,n.netRevenue=!0;var m=new Blob([s],{type:"application/xml"});n.vastUrl=window.URL.createObjectURL(m),n.vastXml=s,n.mediaType=a.d,r.bidRequest&&r.bidRequest.mediaTypes&&r.bidRequest.mediaTypes.video&&"outstream"===r.bidRequest.mediaTypes.video.context&&(n.renderer=function(e){var r=i.a.install({url:"https://player.aniview.com/script/6.1/prebidRenderer.js",config:{},loaded:!1});try{r.setRender(d)}catch(e){}return r}()),t.push(n)}}}}catch(e){}}return t}};Object(n.registerBidder)(s)}}]);