(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{286:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(285),a=t.n(n),i=t(279),d={},o=["criteo","outstream","adagio","browsi"];function c(e,r,t){if(r&&e){if(a()(o,r))return d[e]?(t&&"function"==typeof t&&(d[e].loaded?t():d[e].callbacks.push(t)),d[e].tag):(d[e]={loaded:!1,tag:null,callbacks:[]},t&&"function"==typeof t&&d[e].callbacks.push(t),i.logWarn("module ".concat(r," is loading external JavaScript")),function(r,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,d[e].tag=n,n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()};return n.src=r,i.insertElement(n),n}(e,(function(){d[e].loaded=!0;try{for(var r=0;r<d[e].callbacks.length;r++)d[e].callbacks[r]()}catch(e){i.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));i.logError("".concat(r," not whitelisted for loading external JavaScript"))}else i.logError("cannot load external script without url and moduleCode")}},289:function(e,r,t){"use strict";t.d(r,"a",(function(){return o})),t.d(r,"c",(function(){return c})),t.d(r,"b",(function(){return s}));var n=t(286),a=t(279),i=t(288),d=t.n(i);function o(e){var r=this,t=e.url,i=e.config,o=e.id,c=e.callback,s=e.loaded,l=e.adUnitCode;this.url=t,this.config=i,this.handlers={},this.id=o,this.loaded=s,this.cmd=[],this.push=function(e){"function"==typeof e?r.loaded?e.call():r.cmd.push(e):a.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=c||function(){r.loaded=!0,r.process()},!function(e){var r=pbjs.adUnits,t=d()(r,(function(r){return r.code===e}));return!!(t&&t.renderer&&t.renderer.url&&t.renderer.render)}(l)?Object(n.a)(t,"outstream",this.callback):a.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(l))}function c(e){return!(!e||!e.url)}function s(e,r){e.render(r)}o.install=function(e){return new o({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},o.prototype.getConfig=function(){return this.config},o.prototype.setRender=function(e){this.render=e},o.prototype.setEventHandlers=function(e){this.handlers=e},o.prototype.handleVideoEvent=function(e){var r=e.id,t=e.eventName;"function"==typeof this.handlers[t]&&this.handlers[t](),a.logMessage("Prebid Renderer event for id ".concat(r," type ").concat(t))},o.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){a.logError("Error processing Renderer command: ",e)}}},45:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return u}));var n=t(289),a=t(279),i=t(280),d=t(281);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=1,s=2,l=3,u={code:"aja",supportedMediaTypes:[d.d,d.b,d.c],isBidRequestValid:function(e){return!!e.params.asi},buildRequests:function(e,r){for(var t=[],n=0,i=e.length;n<i;n++){var d=e[n],o="",c=a.getBidIdParameter("asi",d.params);o=a.tryAppendQueryString(o,"asi",c),o=a.tryAppendQueryString(o,"skt",5),o=a.tryAppendQueryString(o,"prebid_id",d.bidId),o=a.tryAppendQueryString(o,"prebid_ver","3.11.0"),r&&r.refererInfo&&(o=a.tryAppendQueryString(o,"page_url",r.refererInfo.referer)),t.push({method:"GET",url:"https://ad.as.amanad.adtdp.com/v2/prebid",data:o})}return t},interpretResponse:function(e,r){var t=e.body;if(!t.is_ad_return)return[];var n=t.ad,i={requestId:n.prebid_id,cpm:n.price,creativeId:n.creative_id,dealId:n.deal_id,currency:n.currency||"USD",netRevenue:!0,ttl:300};if(l===n.ad_type){var u=t.ad.video;o(i,{vastXml:u.vtag,width:u.w,height:u.h,renderer:p(t),adResponse:t,mediaType:d.d})}else if(c===n.ad_type){var h=t.ad.banner;o(i,{width:h.w,height:h.h,ad:h.tag,mediaType:d.b});try{h.imps.forEach((function(e){var r=a.createTrackPixelHtml(e);i.ad+=r}))}catch(e){a.logError("Error appending tracking pixel",e)}}else if(s===n.ad_type){n.native.template_and_ads.ads.forEach((function(e){var r=e.assets;o(i,{mediaType:d.c}),i.native={title:r.title,body:r.description,cta:r.cta_text,sponsoredBy:r.sponsor,clickUrl:r.lp_link,impressionTrackers:e.imps,privacyLink:r.adchoice_url},void 0!==r.img_main&&(i.native.image={url:r.img_main,width:parseInt(r.img_main_width,10),height:parseInt(r.img_main_height,10)}),void 0!==r.img_icon&&(i.native.icon={url:r.img_icon,width:parseInt(r.img_icon_width,10),height:parseInt(r.img_icon_height,10)})}))}return[i]},getUserSyncs:function(e,r){var t=[];if(!r.length)return t;var n=r[0].body;return e.pixelEnabled&&n.syncs&&n.syncs.forEach((function(e){t.push({type:"image",url:e})})),e.iframeEnabled&&n.sync_htmls&&n.sync_htmls.forEach((function(e){t.push({type:"iframe",url:e})})),t}};function p(e){var r=n.a.install({id:e.ad.prebid_id,url:e.ad.video.purl,loaded:!1});try{r.setRender(h)}catch(e){a.logWarn("Prebid Error calling setRender on newRenderer",e)}return r}function h(e){e.renderer.push((function(){window.aja_vast_player.init({vast_tag:e.adResponse.ad.video.vtag,ad_unit_code:e.adUnitCode,width:e.width,height:e.height,progress:e.adResponse.ad.video.progress,loop:e.adResponse.ad.video.loop,inread:e.adResponse.ad.video.inread})}))}Object(i.registerBidder)(u)}}]);