(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{263:function(e,n,t){"use strict";t.r(n);var r=t(22),a=t(390),o=t(11),u=t(9);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=t(0),s={site:"",endpoint:"https://api.pubwise.io/api/v4/event/default/",debug:""},l=!1,p={utm_source:"",utm_medium:"",utm_campaign:"",utm_term:"",utm_content:""};function f(e,n){c.logInfo("".concat("PubWise Analytics: ","Event ").concat(e," ").concat(l),n);var t={eventType:e,args:n,target_site:s.site,pubwiseSchema:"AVOCET",debug:s.debug?1:0};t=function(e){try{e.pw_version="3.0",e.pbjs_version=pbjs.version,e.debug=s.debug}catch(n){e.error_metric=1}return e}(t),e==u.EVENTS.AUCTION_INIT&&(t=function(e){var n=!1;try{for(var t in p)p[t]=c.getParameterByName(t),""!=p[t]&&(n=!0,e[t]=p[t]);if(!1===n)for(var r in p){var a=localStorage.getItem("pw-".concat(r));0!==a.length&&(e[r]=a)}else for(var o in p)localStorage.setItem("pw-".concat(o),p[o])}catch(n){c.logInfo("".concat("PubWise Analytics: ","Error"),n),e.error_utm=1}return e}(t)),Object(r.a)(s.endpoint,(function(e){return c.logInfo("".concat("PubWise Analytics: ","Result"),e)}),JSON.stringify(t))}var y=i(Object(a.a)({defaultUrl:"https://api.pubwise.io/api/v4/event/default/",analyticsType:"endpoint"}),{track:function(e){f(e.eventType,e.args)}});y.adapterEnableAnalytics=y.enableAnalytics,y.enableAnalytics=function(e){void 0===e.options.debug&&(e.options.debug=c.debugTurnedOn()),s=e.options,c.logInfo("".concat("PubWise Analytics: ","Enabled"),s),l=!0,y.adapterEnableAnalytics(e)},o.default.registerAnalyticsAdapter({adapter:y,code:"pubwise"}),n.default=y},390:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t(9),a=t(22);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=t(15),c=t(0),s=r.EVENTS,l=s.AUCTION_INIT,p=s.AUCTION_END,f=s.REQUEST_BIDS,y=s.BID_REQUESTED,g=s.BID_TIMEOUT,b=s.BID_RESPONSE,v=s.NO_BID,d=s.BID_WON,T=s.BID_ADJUSTMENT,E=s.BIDDER_DONE,A=s.SET_TARGETING,_=s.AD_RENDER_FAILED,h=s.ADD_AD_UNITS;function m(e){var n,t=e.url,r=e.analyticsType,s=e.global,m=e.handler,I=[],S=0,w=!0;return function(){if(w){for(var e=0;e<I.length;e++)I[e]();I.push=function(e){e()},w=!1}c.logMessage("event count sent to ".concat(s,": ").concat(S))}(),{track:function(e){var n=e.eventType,t=e.args;"bundle"===this.getAdapterType()&&window[s](m,n,t);"endpoint"===this.getAdapterType()&&D.apply(void 0,arguments)},enqueue:N,enableAnalytics:O,disableAnalytics:function(){c._each(n,(function(e,n){i.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:O},getAdapterType:function(){return r},getGlobal:function(){return s},getHandler:function(){return m},getUrl:function(){return t}};function D(e){var n=e.eventType,r=e.args,o=e.callback;Object(a.a)(t,o,JSON.stringify({eventType:n,args:r}))}function N(e){var n=e.eventType,t=e.args,r=this;s&&window[s]&&n&&t?this.track({eventType:n,args:t}):I.push((function(){S++,r.track({eventType:n,args:t})}))}function O(e){var t,r=this,a=this;"object"!==u(e)||"object"!==u(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(i.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==g&&N.call(a,{eventType:n,args:t})}})),o(t={},f,(function(e){return r.enqueue({eventType:f,args:e})})),o(t,y,(function(e){return r.enqueue({eventType:y,args:e})})),o(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),o(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),o(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),o(t,d,(function(e){return r.enqueue({eventType:d,args:e})})),o(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),o(t,E,(function(e){return r.enqueue({eventType:E,args:e})})),o(t,A,(function(e){return r.enqueue({eventType:A,args:e})})),o(t,p,(function(e){return r.enqueue({eventType:p,args:e})})),o(t,_,(function(e){return r.enqueue({eventType:_,args:e})})),o(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),o(t,l,(function(n){n.config="object"===u(e)&&e.options||{},r.enqueue({eventType:l,args:n})})),n=t,c._each(n,(function(e,n){i.on(n,e)}))):c.logMessage('Analytics adapter for "'.concat(s,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return c.logMessage('Analytics adapter for "'.concat(s,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}}}]);