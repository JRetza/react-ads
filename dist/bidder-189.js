(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{255:function(r,e,a){"use strict";a.r(e),a.d(e,"parrableIdSubmodule",(function(){return d}));var t=a(0),n=a(22),o=a(7);function i(r,e,a){if(function(r){return r?!!r.partner||(t.logError("User ID - parrableId submodule requires partner list"),!1):(t.logError("User ID - parrableId submodule requires configParams"),!1)}(r)){var o={eid:a||null,trackers:r.partner.split(",")},i={data:btoa(JSON.stringify(o)),_rand:Math.random()},d={method:"GET",withCredentials:!0};return{callback:function(r){Object(n.a)("https://h.parrable.com/prebid",(function(e){var a;if(e)try{var n=JSON.parse(e);a=n?n.eid:void 0}catch(r){t.logError(r)}r(a)}),i,d)}}}}var d={name:"parrableId",decode:function(r){return r&&"string"==typeof r?{parrableid:r}:void 0},getId:function(r,e,a){return i(r,0,a)}};Object(o.e)("userId",d)}}]);