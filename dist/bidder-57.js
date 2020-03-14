(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{249:function(e,n,t){"use strict";t.r(n),t.d(n,"ANALYTICS_VERSION",(function(){return d})),t.d(n,"BIDDER_STATUS",(function(){return b})),t.d(n,"parseBidderCode",(function(){return h})),t.d(n,"parseAdUnitCode",(function(){return T})),t.d(n,"ucfunnelAnalyticsAdapter",(function(){return v}));var i=t(281),o=t(285),a=t(282),s=t(290),r=t(293),u=t(277);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var d="1.0.0",p=a.EVENTS,l=p.AUCTION_END,f=p.BID_WON,g=p.BID_TIMEOUT,b={BID:"bid",NO_BID:"noBid",BID_WON:"bidWon",TIMEOUT:"timeout"},y={},h=function(e){return(e.bidderCode||e.bidder).toLowerCase()},T=function(e){return e.adUnitCode.toLowerCase()},v=c(Object(o.a)({ANALYTICS_SERVER:"https://hbwa.aralego.com",analyticsType:"endpoint"}),{cachedAuctions:{},initConfig:function(e){return y.options=Object(u.deepClone)(e.options),"string"!=typeof e.options.pbuid||e.options.pbuid.length<1?(Object(u.logError)('"options.pbuid" is required.'),!1):"string"!=typeof e.options.adid||e.options.adid.length<1?(Object(u.logError)('"options.adid" is required.'),!1):(y.sampled=!0,"number"==typeof e.options.sampling&&(y.sampled=Math.random()<parseFloat(e.options.sampling)),y.pbuid=e.options.pbuid,y.adid=e.options.adid,y.server="https://hbwa.aralego.com",!0)},sendEventMessage:function(e,n){Object(u.logInfo)("AJAX: ".concat(e,": ")+JSON.stringify(n)),Object(i.a)("".concat(y.server,"/").concat(e),null,JSON.stringify(n),{contentType:"application/json",withCredentials:!0})},createCommonMessage:function(e){return{version:d,auctionId:e,referrer:window.location.href,sampling:y.options.sampling,prebid:"3.11.0",adid:y.adid,pbuid:y.pbuid,adUnits:{}}},serializeBidResponse:function(e,n){var t={prebidWon:n===b.BID_WON,isTimeout:n===b.TIMEOUT,status:n};return n!==b.BID&&n!==b.BID_WON||c(t,{time:e.timeToRespond,cpm:e.cpm,currency:e.currency}),t},addBidResponseToMessage:function(e,n,t){var i=T(n);e.adUnits[i]=e.adUnits[i]||{};var o=h(n),a=this.serializeBidResponse(n,t);e.adUnits[i][o]=a},createBidMessage:function(e,n,t){var i=this,o=e.auctionId,a=e.timestamp,s=e.auctionEnd,r=e.adUnitCodes,u=e.bidsReceived,c=e.noBids,d=this.createCommonMessage(o);return d.auctionElapsed=s-a,r.forEach((function(e){d.adUnits[e]={}})),c.forEach((function(e){return i.addBidResponseToMessage(d,e,b.NO_BID)})),u.forEach((function(e){return i.addBidResponseToMessage(d,e,b.BID)})),t.forEach((function(e){return i.addBidResponseToMessage(d,e,b.TIMEOUT)})),n.forEach((function(e){var n=T(e),t=h(e);d.adUnits[n][t].prebidWon=!0})),d},createImpressionMessage:function(e){var n=this.createCommonMessage(e.auctionId);return this.addBidResponseToMessage(n,e,b.BID_WON),n},getCachedAuction:function(e){return this.cachedAuctions[e]=this.cachedAuctions[e]||{timeoutBids:[]},this.cachedAuctions[e]},handleAuctionEnd:function(e){var n=this.getCachedAuction(e.auctionId),t=Object(r.a)().getHighestCpmBids();this.sendEventMessage("bid",this.createBidMessage(e,t,n.timeoutBids))},handleBidTimeout:function(e){var n=this;e.forEach((function(e){n.getCachedAuction(e.auctionId).timeoutBids.push(e)}))},handleBidWon:function(e){this.sendEventMessage("imp",this.createImpressionMessage(e))},track:function(e){var n=e.eventType,t=e.args;if(y.sampled)switch(n){case f:this.handleBidWon(t);break;case g:this.handleBidTimeout(t);break;case l:this.handleAuctionEnd(t)}},getAnalyticsOptions:function(){return y}});v.originEnableAnalytics=v.enableAnalytics,v.enableAnalytics=function(e){this.initConfig(e)&&v.originEnableAnalytics(e)},s.default.registerAnalyticsAdapter({adapter:v,code:"ucfunnelAnalytics"})},285:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var i=t(282),o=t(281);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=t(289),u=t(277),c=i.EVENTS,d=c.AUCTION_INIT,p=c.AUCTION_END,l=c.REQUEST_BIDS,f=c.BID_REQUESTED,g=c.BID_TIMEOUT,b=c.BID_RESPONSE,y=c.NO_BID,h=c.BID_WON,T=c.BID_ADJUSTMENT,v=c.BIDDER_DONE,E=c.SET_TARGETING,m=c.AD_RENDER_FAILED,A=c.ADD_AD_UNITS;function I(e){var n,t=e.url,i=e.analyticsType,c=e.global,I=e.handler,w=[],B=0,O=!0;return function(){if(O){for(var e=0;e<w.length;e++)w[e]();w.push=function(e){e()},O=!1}u.logMessage("event count sent to ".concat(c,": ").concat(B))}(),{track:function(e){var n=e.eventType,t=e.args;"bundle"===this.getAdapterType()&&window[c](I,n,t);"endpoint"===this.getAdapterType()&&_.apply(void 0,arguments)},enqueue:D,enableAnalytics:N,disableAnalytics:function(){u._each(n,(function(e,n){r.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:N},getAdapterType:function(){return i},getGlobal:function(){return c},getHandler:function(){return I},getUrl:function(){return t}};function _(e){var n=e.eventType,i=e.args,a=e.callback;Object(o.a)(t,a,JSON.stringify({eventType:n,args:i}))}function D(e){var n=e.eventType,t=e.args,i=this;c&&window[c]&&n&&t?this.track({eventType:n,args:t}):w.push((function(){B++,i.track({eventType:n,args:t})}))}function N(e){var t,i=this,o=this;"object"!==s(e)||"object"!==s(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(r.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==g&&D.call(o,{eventType:n,args:t})}})),a(t={},l,(function(e){return i.enqueue({eventType:l,args:e})})),a(t,f,(function(e){return i.enqueue({eventType:f,args:e})})),a(t,b,(function(e){return i.enqueue({eventType:b,args:e})})),a(t,y,(function(e){return i.enqueue({eventType:y,args:e})})),a(t,g,(function(e){return i.enqueue({eventType:g,args:e})})),a(t,h,(function(e){return i.enqueue({eventType:h,args:e})})),a(t,T,(function(e){return i.enqueue({eventType:T,args:e})})),a(t,v,(function(e){return i.enqueue({eventType:v,args:e})})),a(t,E,(function(e){return i.enqueue({eventType:E,args:e})})),a(t,p,(function(e){return i.enqueue({eventType:p,args:e})})),a(t,m,(function(e){return i.enqueue({eventType:m,args:e})})),a(t,A,(function(e){return i.enqueue({eventType:A,args:e})})),a(t,d,(function(n){n.config="object"===s(e)&&e.options||{},i.enqueue({eventType:d,args:n})})),n=t,u._each(n,(function(e,n){r.on(n,e)}))):u.logMessage('Analytics adapter for "'.concat(c,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return u.logMessage('Analytics adapter for "'.concat(c,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}},293:function(e,n,t){"use strict";function i(){return window.pbjs}t.d(n,"a",(function(){return i})),window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[],window._pbjsGlobals=window._pbjsGlobals||[],window._pbjsGlobals.push("pbjs")}}]);