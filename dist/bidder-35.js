(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{284:function(e,r,n){"use strict";n.d(r,"a",(function(){return c}));var t=n(283),o=n.n(t),i=n(277),a={},d=["criteo","outstream","adagio","browsi"];function c(e,r,n){if(r&&e){if(o()(d,r))return a[e]?(n&&"function"==typeof n&&(a[e].loaded?n():a[e].callbacks.push(n)),a[e].tag):(a[e]={loaded:!1,tag:null,callbacks:[]},n&&"function"==typeof n&&a[e].callbacks.push(n),i.logWarn("module ".concat(r," is loading external JavaScript")),function(r,n){var t=document.createElement("script");t.type="text/javascript",t.async=!0,a[e].tag=t,t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,n())}:t.onload=function(){n()};return t.src=r,i.insertElement(t),t}(e,(function(){a[e].loaded=!0;try{for(var r=0;r<a[e].callbacks.length;r++)a[e].callbacks[r]()}catch(e){i.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));i.logError("".concat(r," not whitelisted for loading external JavaScript"))}else i.logError("cannot load external script without url and moduleCode")}},287:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"c",(function(){return c})),n.d(r,"b",(function(){return s}));var t=n(284),o=n(277),i=n(286),a=n.n(i);function d(e){var r=this,n=e.url,i=e.config,d=e.id,c=e.callback,s=e.loaded,u=e.adUnitCode;this.url=n,this.config=i,this.handlers={},this.id=d,this.loaded=s,this.cmd=[],this.push=function(e){"function"==typeof e?r.loaded?e.call():r.cmd.push(e):o.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=c||function(){r.loaded=!0,r.process()},!function(e){var r=pbjs.adUnits,n=a()(r,(function(r){return r.code===e}));return!!(n&&n.renderer&&n.renderer.url&&n.renderer.render)}(u)?Object(t.a)(n,"outstream",this.callback):o.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(u))}function c(e){return!(!e||!e.url)}function s(e,r){e.render(r)}d.install=function(e){return new d({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},d.prototype.getConfig=function(){return this.config},d.prototype.setRender=function(e){this.render=e},d.prototype.setEventHandlers=function(e){this.handlers=e},d.prototype.handleVideoEvent=function(e){var r=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),o.logMessage("Prebid Renderer event for id ".concat(r," type ").concat(n))},d.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){o.logError("Error processing Renderer command: ",e)}}},58:function(e,r,n){"use strict";n.r(r),n.d(r,"VIDEO_ENDPOINT",(function(){return h})),n.d(r,"BANNER_ENDPOINT",(function(){return v})),n.d(r,"OUTSTREAM_SRC",(function(){return m})),n.d(r,"VIDEO_TARGETING",(function(){return b})),n.d(r,"DEFAULT_MIMES",(function(){return y})),n.d(r,"spec",(function(){return I}));var t=n(277),o=n(288),i=n(280),a=n(278),d=n(287),c=n(279),s=n(286),u=n.n(s),l=n(283),p=n.n(l);function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function g(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],t=!0,o=!1,i=void 0;try{for(var a,d=e[Symbol.iterator]();!(t=(a=d.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(e){o=!0,i=e}finally{try{t||null==d.return||d.return()}finally{if(o)throw i}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h="https://reachms.bfmio.com/bid.json?exchange_id=",v="https://display.bfmio.com/prebid_display",m="https://player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js",b=["mimes","playbackmethod","maxduration","placement"],y=["video/mp4","application/javascript"],w="",I={code:"beachfront",supportedMediaTypes:[c.d,c.b],isBidRequestValid:function(e){return!(!U(e)&&!R(e))},buildRequests:function(e,r){var n=[],t=e.filter((function(e){return U(e)})),o=e.filter((function(e){return R(e)}));return t.forEach((function(e){w=N(e,"appId"),n.push({method:"POST",url:h+w,data:_(e,r),bidRequest:e})})),o.length&&(w=P(o[0],"appId"),n.push({method:"POST",url:v,data:M(o,r),bidRequest:o})),n},interpretResponse:function(e,r){var n=r.bidRequest;if(e=e.body,x(n)){if(!e||!e.url||!e.bidPrice)return t.logWarn("No valid video bids from ".concat(I.code," bidder")),[];var o=T(A(n)),i=t.deepAccess(n,"mediaTypes.video.context");return{requestId:n.bidId,bidderCode:I.code,vastUrl:e.url,vastXml:e.vast,cpm:e.bidPrice,width:o.w,height:o.h,creativeId:e.crid||e.cmpId,renderer:"outstream"===i?S(n):null,mediaType:c.d,currency:"USD",netRevenue:!0,ttl:300}}return e&&e.length?e.filter((function(e){return e.adm})).map((function(e){return{requestId:u()(n,(function(r){return r.adUnitCode===e.slot})).bidId,bidderCode:I.code,ad:e.adm,creativeId:e.crid,cpm:e.price,width:e.w,height:e.h,mediaType:c.b,currency:"USD",netRevenue:!0,ttl:300}})):(t.logWarn("No valid banner bids from ".concat(I.code," bidder")),[])},getUserSyncs:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=[],a=n.gdprApplies,d=n.consentString,c=void 0===d?"":d,s=u()(r,(function(e){return t.isArray(e.body)}));return s?e.iframeEnabled&&s.body.filter((function(e){return e.sync})).forEach((function(e){i.push({type:"iframe",url:e.sync})})):e.iframeEnabled?i.push({type:"iframe",url:"https://sync.bfmio.com/sync_iframe?ifg=1&id=".concat(w,"&gdpr=").concat(a?1:0,"&gc=").concat(c,"&gce=1&us_privacy=").concat(o)}):e.pixelEnabled&&i.push({type:"image",url:"https://sync.bfmio.com/syncb?pid=144&id=".concat(w,"&gdpr=").concat(a?1:0,"&gc=").concat(c,"&gce=1&us_privacy=").concat(o)}),i}};function S(e){var r=d.a.install({id:e.bidId,url:m,loaded:!1});return r.setRender((function(r){r.renderer.push((function(){window.Beachfront.Player(r.adUnitCode,{adTagUrl:r.vastUrl,width:r.width,height:r.height,expandInView:W(e,"expandInView",!1),collapseOnComplete:W(e,"collapseOnComplete",!0),progressColor:W(e,"progressColor"),adPosterColor:W(e,"adPosterColor")})}))})),r}function T(e){return e&&e.length?e[0]:{w:void 0,h:void 0}}function C(e){return t.parseSizesInput(e).map((function(e){var r=g(e.split("x"),2),n=r[0],t=r[1];return{w:parseInt(n,10)||void 0,h:parseInt(t,10)||void 0}}))}function A(e){return C(t.deepAccess(e,"mediaTypes.video.playerSize")||e.sizes)}function E(e){return C(t.deepAccess(e,"mediaTypes.banner.sizes")||e.sizes)}function O(){return/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)}function k(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNoTrack||"yes"===navigator.doNotTrack}function x(e){return t.deepAccess(e,"mediaTypes.video")}function N(e,r){return t.deepAccess(e,"params.video."+r)||t.deepAccess(e,"params."+r)}function P(e,r){return t.deepAccess(e,"params.banner."+r)||t.deepAccess(e,"params."+r)}function W(e,r,n){var o=t.deepAccess(e,"params.player."+r);return void 0===o?n:o}function U(e){return x(e)&&N(e,"appId")&&N(e,"bidfloor")}function R(e){return function(e){return t.deepAccess(e,"mediaTypes.banner")||!x(e)}(e)&&P(e,"appId")&&P(e,"bidfloor")}function j(e){var r=e&&e.refererInfo&&e.refererInfo.referer;return Object(o.c)(i.b.getConfig("pageUrl")||r,{decodeSearchAsString:!0})}function _(e,r){var n=T(A(e)),o=function(e){return Object.keys(Object(e.params.video)).filter((function(e){return p()(b,e)})).reduce((function(r,n){return r[n]=e.params.video[n],r}),{})}(e),i=N(e,"appId"),a=N(e,"bidfloor"),d=j(r),c={isPrebid:!0,appId:i,domain:document.location.hostname,id:t.getUniqueIdentifierStr(),imp:[{video:f({w:n.w,h:n.h,mimes:y},o),bidfloor:a,secure:"https:"===d.protocol?1:0,displaymanager:"BFIO_PREBID",displaymanagerver:"1.9"}],site:{page:d.href,domain:d.hostname},device:{ua:navigator.userAgent,language:navigator.language,devicetype:O()?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2,dnt:k()?1:0,js:1,geo:{}},regs:{ext:{}},user:{ext:{}},cur:["USD"]};if(r&&r.uspConsent&&(c.regs.ext.us_privacy=r.uspConsent),r&&r.gdprConsent){var s=r.gdprConsent,u=s.gdprApplies,l=s.consentString;c.regs.ext.gdpr=u?1:0,c.user.ext.consent=l}e.userId&&e.userId.tdid&&(c.user.ext.eids=[{source:"adserver.org",uids:[{id:e.userId.tdid,ext:{rtiPartner:"TDID"}}]}]);var g=navigator.connection||navigator.webkitConnection;return g&&g.effectiveType&&(c.device.connectiontype=g.effectiveType),c}function M(e,r){var n,t=j(r),o=function(){try{return window.top.document.referrer}catch(e){return""}}(),i={slots:e.map((function(e){return{slot:e.adUnitCode,id:P(e,"appId"),bidfloor:P(e,"bidfloor"),sizes:E(e)}})),page:t.href,domain:t.hostname,search:t.search,secure:0===t.protocol.indexOf("https")?1:0,referrer:o,ua:navigator.userAgent,deviceOs:(n=u()([{s:"Android",r:/Android/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"Linux",r:/(Linux|X11)/},{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"UNIX",r:/UNIX/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}],(function(e){return e.r.test(navigator.userAgent)})),n?n.s:"unknown"),isMobile:O()?1:0,dnt:k()?1:0,adapterVersion:"1.9",adapterName:"BFIO_PREBID"};if(r&&r.uspConsent&&(i.usPrivacy=r.uspConsent),r&&r.gdprConsent){var a=r.gdprConsent,d=a.gdprApplies,c=a.consentString;i.gdpr=d?1:0,i.gdprConsent=c}return e[0]&&e[0].userId&&e[0].userId.tdid&&(i.tdid=e[0].userId.tdid),i}Object(a.registerBidder)(I)}}]);