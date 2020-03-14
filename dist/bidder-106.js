(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{158:function(n,t,e){"use strict";e.r(t),e.d(t,"consentAPI",(function(){return c})),e.d(t,"consentTimeout",(function(){return r})),e.d(t,"staticConsentData",(function(){return u})),e.d(t,"requestBidsHook",(function(){return f})),e.d(t,"resetConsentData",(function(){return y})),e.d(t,"setConsentConfig",(function(){return w}));var a=e(0),o=e(2),i=e(11);function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var c,r,u,d,l=!1,p={iab:function(n,t,e){var a=(i={},{consentDataCallback:function(a,o){o&&a.uspString&&(i.usPrivacy=a.uspString),i.usPrivacy?n(i,e):t("Unable to get USP consent string.",e)}}),o={};var i;try{window.__uspapi("getUSPData",1,a.consentDataCallback)}catch(n){for(var s,c=window;!s;){try{c.frames.__uspapiLocator&&(s=c)}catch(n){}if(c===window.top)break;c=c.parent}if(!s)return t("USP CMP not found.",e);!function(n,t,e){function a(n){var t=n&&n.data&&n.data.__uspapiReturn;t&&t.callId&&void 0!==o[t.callId]&&(o[t.callId](t.returnValue,t.success),delete o[t.callId])}window.__uspapi=function(n,e,a){var i=Math.random()+"",s={__uspapiCall:{command:n,version:e,callId:i}};o[i]=a,t.postMessage(s,"*")},window.addEventListener("message",a,!1),window.__uspapi(n,1,(function(n,t){window.removeEventListener("message",a,!1),e(n,t)}))}("getUSPData",s,a.consentDataCallback)}},static:function(n,t,e){n(u,e)}};function f(n,t){var e={context:this,args:[t],nextFn:n,adUnits:t.adUnits||pbjs.adUnits,bidsBackHandler:t.bidsBackHandler,haveExited:!1,timer:null};return d?v(null,e):p[c]?(p[c].call(this,g,b,e),void(e.haveExited||(0===r?g(void 0,e):e.timer=setTimeout(m.bind(null,e),r)))):(a.logWarn("USP framework (".concat(c,") is not a supported framework. Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args))}function g(n,t){!n||!n.usPrivacy?b("USPAPI returned unexpected value during lookup process.",t,n):(clearTimeout(t.timer),function(n){n&&n.usPrivacy&&(d=n.usPrivacy,i.uspDataHandler.setConsentData(d))}(n),v(null,t))}function m(n){b("USPAPI workflow exceeded timeout threshold.",n)}function b(n,t,e){clearTimeout(t.timer),v(n,t,e)}function v(n,t,e){if(!1===t.haveExited){t.haveExited=!0;var o=t.context,i=t.args,s=t.nextFn;n&&a.logWarn(n+" Resuming auction without consent data as per consentManagement config.",e),s.apply(o,i)}}function y(){d=void 0,c=void 0,i.uspDataHandler.setConsentData(null)}function w(n){(n=n.usp)&&"object"===s(n)?(a.isStr(n.cmpApi)?c=n.cmpApi:(c="iab",a.logInfo("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat("iab",")."))),a.isNumber(n.timeout)?r=n.timeout:(r=50,a.logInfo("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50,")."))),a.logInfo("USPAPI consentManagement module has been activated..."),"static"===c&&(a.isPlainObject(n.consentData)&&a.isPlainObject(n.consentData.getUSPData)?(n.consentData.getUSPData.uspString&&(u={usPrivacy:n.consentData.getUSPData.uspString}),r=0):a.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),l||pbjs.requestBids.before(f,50),l=!0):a.logWarn("consentManagement.usp config not defined, exiting usp consent manager")}o.b.getConfig("consentManagement",(function(n){return w(n.consentManagement)}))}}]);