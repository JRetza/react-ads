(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{104:function(e,n,t){"use strict";t.r(n);var o=t(277);pbjs.express=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits;o.logMessage("loading express"),0===e.length&&o.logWarn("no valid adUnits found, not loading express");var n={},t=e.reduce((function(e,n){return n.code&&n.bids?e[n.code]=n:o.logError("misconfigured adUnit",null,n),e}),{});window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push((function(){var e=window.googletag,i=e.pubads;if(e.display&&e.enableServices&&"function"==typeof i&&i().refresh&&i().disableInitialLoad&&i().getSlots&&i().enableSingleRequest){o.logMessage("running");var a=e.display,r=e.enableServices,s=i().refresh,l=i().disableInitialLoad,g=i().enableSingleRequest;e.enableServices=function(){return d||l.apply(i()),r.apply(e,arguments)},e.display=function(t){var r;o.logInfo("display:",t),a.apply(e,arguments),p||(r=googletag.pubads().getSlots().filter((function(e){return e.getSlotElementId()===t}))),(r=c(r).filter((function(e){return!e._displayed}))).forEach((function(e){e._displayed=!0}));var l=f(r);d||(r.length&&s.apply(i(),[r]),l.length&&pbjs.requestBids({adUnits:l,bidsBackHandler:function(){pbjs.setTargetingForGPTAsync(),s.apply(i(),[l.map((function(e){return n[e.code]}))])}}))},i().refresh=function(e,t){o.logInfo("refresh:",e);var a=f(e=c(e)).filter((function(e){return n[e.code]._displayed}));e.length&&s.apply(i(),[e,t]),a.length&&pbjs.requestBids({adUnits:a,bidsBackHandler:function(){pbjs.setTargetingForGPTAsync(),s.apply(i(),[a.map((function(e){return n[e.code]})),t])}})};var d=!1;i().disableInitialLoad=function(){return d=!0,l.apply(window.googletag.pubads(),arguments)};var p=!1;i().enableSingleRequest=function(){return p=!0,g.apply(window.googletag.pubads(),arguments)}}else o.logError("could not bind to gpt googletag api");function u(e){for(var n=[],t=0;t<e.length;t++)try{n.push([e[t].getWidth(),e[t].getHeight()])}catch(n){o.logWarn("slot size "+e[t].toString()+" not supported byexpress")}return n}function c(e){return Array.isArray(e)?e.slice():googletag.pubads().getSlots().slice()}function f(e){for(var o=[],i=e.length-1;i>-1;i--){var a=e[i],r=a.getSlotElementId(),s=t[r];s&&(n[r]=a,s.sizes=s.sizes||u(a.getSizes()),o.push(s),e.splice(i,1))}return o}}))}}}]);