(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{265:function(e,r,n){"use strict";n.r(r),n.d(r,"spec",(function(){return p}));var t=n(277),o=n(278),a=n(287);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=["com","net"],s={com:"EUR",net:"USD"},l=function(e){e.renderer.push((function(){window.ANOutstreamVideo.renderAd({sizes:[e.width,e.height],targetId:e.adUnitCode,adResponse:e.adResponse,rendererOptions:{showBigPlayButton:!1,showProgressBar:"bar",showVolume:!1,allowFullscreen:!0,skippable:!1}})}))},u=function(e,r){var n=a.a.install({id:r.renderer_id,url:r.renderer_url,loaded:!1});try{n.setRender(l)}catch(e){t.logWarn("Prebid Error calling setRender on renderer",e)}return n},p={code:"vuble",supportedMediaTypes:["video"],isBidRequestValid:function(e){var r=t.deepAccess(e,"mediaTypes.video.playerSize")||e.sizes;return!t.isEmpty(r)&&0!=t.parseSizesInput(r).length&&(!!t.deepAccess(e,"mediaTypes.video.context")&&(!!t.contains(c,e.params.env)&&!!(e.params.env&&e.params.pubId&&e.params.zoneId)))},buildRequests:function(e,r){return e.map((function(e){var n=t.deepAccess(e,"mediaTypes.video.playerSize")||e.sizes,o=t.parseSizesInput(n)[0].split("x"),a=r&&r.refererInfo?r.refererInfo.referer:"";e.params.referrer&&(a=e.params.referrer);var i=t.deepAccess(e,"mediaTypes.video.context"),d="https://player.mediabong."+e.params.env+"/prebid/request",c={width:o[0],height:o[1],pub_id:e.params.pubId,zone_id:e.params.zoneId,context:i,floor_price:e.params.floorPrice?e.params.floorPrice:0,url:a,env:e.params.env,bid_id:e.bidId,adUnitCode:e.adUnitCode};return r&&r.gdprConsent&&(c.gdpr_consent={consent_string:r.gdprConsent.consentString,gdpr_applies:"boolean"!=typeof r.gdprConsent.gdprApplies||r.gdprConsent.gdprApplies}),{method:"POST",url:d,data:c}}))},interpretResponse:function(e,r){var n=e.body;if("object"!==d(n)||"ok"!==n.status)return[];var t=[],o={requestId:r.data.bid_id,cpm:n.cpm,width:r.data.width,height:r.data.height,ttl:60,creativeId:n.creativeId,dealId:n.dealId,netRevenue:!0,currency:s[r.data.env],vastUrl:n.url,mediaType:"video"};n.renderer_url&&i(o,{adResponse:{ad:{video:{content:n.content}}},adUnitCode:r.data.adUnitCode,renderer:u(0,n)});return t.push(o),t},getUserSyncs:function(e,r){if(e.iframeEnabled&&r.length>0){var n=r[0].body;if("object"!==d(n)||n.iframeSync)return[{type:"iframe",url:n.iframeSync}]}return[]}};Object(o.registerBidder)(p)},284:function(e,r,n){"use strict";n.d(r,"a",(function(){return c}));var t=n(283),o=n.n(t),a=n(277),i={},d=["criteo","outstream","adagio","browsi"];function c(e,r,n){if(r&&e){if(o()(d,r))return i[e]?(n&&"function"==typeof n&&(i[e].loaded?n():i[e].callbacks.push(n)),i[e].tag):(i[e]={loaded:!1,tag:null,callbacks:[]},n&&"function"==typeof n&&i[e].callbacks.push(n),a.logWarn("module ".concat(r," is loading external JavaScript")),function(r,n){var t=document.createElement("script");t.type="text/javascript",t.async=!0,i[e].tag=t,t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,n())}:t.onload=function(){n()};return t.src=r,a.insertElement(t),t}(e,(function(){i[e].loaded=!0;try{for(var r=0;r<i[e].callbacks.length;r++)i[e].callbacks[r]()}catch(e){a.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));a.logError("".concat(r," not whitelisted for loading external JavaScript"))}else a.logError("cannot load external script without url and moduleCode")}},287:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"c",(function(){return c})),n.d(r,"b",(function(){return s}));var t=n(284),o=n(277),a=n(286),i=n.n(a);function d(e){var r=this,n=e.url,a=e.config,d=e.id,c=e.callback,s=e.loaded,l=e.adUnitCode;this.url=n,this.config=a,this.handlers={},this.id=d,this.loaded=s,this.cmd=[],this.push=function(e){"function"==typeof e?r.loaded?e.call():r.cmd.push(e):o.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=c||function(){r.loaded=!0,r.process()},!function(e){var r=pbjs.adUnits,n=i()(r,(function(r){return r.code===e}));return!!(n&&n.renderer&&n.renderer.url&&n.renderer.render)}(l)?Object(t.a)(n,"outstream",this.callback):o.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(l))}function c(e){return!(!e||!e.url)}function s(e,r){e.render(r)}d.install=function(e){return new d({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},d.prototype.getConfig=function(){return this.config},d.prototype.setRender=function(e){this.render=e},d.prototype.setEventHandlers=function(e){this.handlers=e},d.prototype.handleVideoEvent=function(e){var r=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),o.logMessage("Prebid Renderer event for id ".concat(r," type ").concat(n))},d.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){o.logError("Error processing Renderer command: ",e)}}}}]);