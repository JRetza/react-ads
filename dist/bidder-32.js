(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{284:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(283),a=r.n(n),i=r(277),d={},o=["criteo","outstream","adagio","browsi"];function s(e,t,r){if(t&&e){if(a()(o,t))return d[e]?(r&&"function"==typeof r&&(d[e].loaded?r():d[e].callbacks.push(r)),d[e].tag):(d[e]={loaded:!1,tag:null,callbacks:[]},r&&"function"==typeof r&&d[e].callbacks.push(r),i.logWarn("module ".concat(t," is loading external JavaScript")),function(t,r){var n=document.createElement("script");n.type="text/javascript",n.async=!0,d[e].tag=n,n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,r())}:n.onload=function(){r()};return n.src=t,i.insertElement(n),n}(e,(function(){d[e].loaded=!0;try{for(var t=0;t<d[e].callbacks.length;t++)d[e].callbacks[t]()}catch(e){i.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));i.logError("".concat(t," not whitelisted for loading external JavaScript"))}else i.logError("cannot load external script without url and moduleCode")}},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return c}));var n=r(284),a=r(277),i=r(286),d=r.n(i);function o(e){var t=this,r=e.url,i=e.config,o=e.id,s=e.callback,c=e.loaded,l=e.adUnitCode;this.url=r,this.config=i,this.handlers={},this.id=o,this.loaded=c,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):a.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=s||function(){t.loaded=!0,t.process()},!function(e){var t=pbjs.adUnits,r=d()(t,(function(t){return t.code===e}));return!!(r&&r.renderer&&r.renderer.url&&r.renderer.render)}(l)?Object(n.a)(r,"outstream",this.callback):a.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(l))}function s(e){return!(!e||!e.url)}function c(e,t){e.render(t)}o.install=function(e){return new o({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},o.prototype.getConfig=function(){return this.config},o.prototype.setRender=function(e){this.render=e},o.prototype.setEventHandlers=function(e){this.handlers=e},o.prototype.handleVideoEvent=function(e){var t=e.id,r=e.eventName;"function"==typeof this.handlers[r]&&this.handlers[r](),a.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(r))},o.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){a.logError("Error processing Renderer command: ",e)}}},46:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return o}));var n=r(279),a=r(278),i=r(287);function d(e){e.renderer.push((function(){var t=e&&e.renderer&&e.renderer.handleVideoEvent?e.renderer.handleVideoEvent:null;window.aniviewRenderer.renderAd({id:e.adUnitCode+"_"+e.adId,debug:window.location.href.indexOf("pbjsDebug")>=0,placement:e.adUnitCode,width:e.width,height:e.height,vastUrl:e.vastUrl,vastXml:e.vastXml,config:e.params[0].rendererConfig,eventsCallback:t,bid:e})}))}var o={code:"aniview",supportedMediaTypes:[n.d],isBidRequestValid:function(e){return!!(e.params&&e.params.AV_PUBLISHERID&&e.params.AV_CHANNELID)},buildRequests:function(e,t){for(var r=[],n=0;n<e.length;n++){var a=e[n],i=[[640,480]];a.mediaTypes&&a.mediaTypes.video&&a.mediaTypes.video.playerSize?i=a.mediaTypes.video.playerSize:a.sizes&&(i=a.sizes),2===i.length&&"number"==typeof i[0]&&(i=[[i[0],i[1]]]);for(var d=0;d<i.length;d++){var o=i[d],s=void 0,c=void 0;o&&2==o.length?(s=o[0],c=o[1]):(s=640,c=480);var l={};for(var u in a.params)a.params.hasOwnProperty(u)&&0==u.indexOf("AV_")&&(l[u]=a.params[u]);l.AV_APPPKGNAME&&!l.AV_URL&&(l.AV_URL=l.AV_APPPKGNAME),l.AV_IDFA||l.AV_URL||(t&&t.refererInfo&&t.refererInfo.referer?l.AV_URL=t.refererInfo.referer:l.AV_URL=window.location.href),l.AV_IDFA&&!l.AV_AID&&(l.AV_AID=l.AV_IDFA),l.AV_AID&&!l.AV_IDFA&&(l.AV_IDFA=l.AV_AID),l.cb=Math.floor(999999999*Math.random()),l.AV_WIDTH=s,l.AV_HEIGHT=c,l.bidWidth=s,l.bidHeight=c,l.bidId=a.bidId,l.pbjs=1,l.tgt=10,l.s2s="1",t&&t.gdprConsent&&t.gdprConsent.gdprApplies&&(l.AV_GDPR=1,l.AV_CONSENT=t.gdprConsent.consentString),t&&t.uspConsent&&(l.AV_CCPA=t.uspConsent);var p="https://"+(a.params&&a.params.serverDomain?a.params.serverDomain:"gov.aniview.com")+"/api/adserver/vast3/";r.push({method:"GET",url:p,data:l,bidRequest:a})}}return r},interpretResponse:function(e,t){var r=[];if(e&&e.body){if(e.error)return r;try{var a={};if(t&&t.data&&t.data.bidId&&""!==t.data.bidId){var o=e.body,s=(new window.DOMParser).parseFromString(o,"text/xml");if(s&&0==s.getElementsByTagName("parsererror").length){var c=function(e){var t={cpm:0,currency:"USD"};if(e){var r=e.getElementsByTagName("Extensions");if(r&&r.length>0&&(r=r[0].getElementsByTagName("Extension"))&&r.length>0)for(var n=0;n<r.length;n++)if("ANIVIEW"==r[n].getAttribute("type")){var a=r[n].getElementsByTagName("Cpm");a&&1==a.length&&(t.cpm=a[0].textContent);break}}return t}(s);if(c&&c.cpm>0){a.requestId=t.data.bidId,a.bidderCode="aniview",a.ad="",a.cpm=c.cpm,a.width=t.data.AV_WIDTH,a.height=t.data.AV_HEIGHT,a.ttl=600,a.creativeId=s.getElementsByTagName("Ad")&&s.getElementsByTagName("Ad")[0]&&s.getElementsByTagName("Ad")[0].getAttribute("id")?s.getElementsByTagName("Ad")[0].getAttribute("id"):"creativeId",a.currency=c.currency,a.netRevenue=!0;var l=new Blob([o],{type:"application/xml"});a.vastUrl=window.URL.createObjectURL(l),a.vastXml=o,a.mediaType=n.d,t.bidRequest&&t.bidRequest.mediaTypes&&t.bidRequest.mediaTypes.video&&"outstream"===t.bidRequest.mediaTypes.video.context&&(a.renderer=function(e){var t=i.a.install({url:"https://player.aniview.com/script/6.1/prebidRenderer.js",config:{},loaded:!1});try{t.setRender(d)}catch(e){}return t}()),r.push(a)}}}}catch(e){}}return r}};Object(a.registerBidder)(o)}}]);