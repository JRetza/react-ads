(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{8:function(e,t,r){"use strict";r.r(t),r.d(t,"createEidsArray",(function(){return u}));var i=r(279),n={pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{source:"id5-sync.com",atype:1},parrableid:{source:"parrable.com",atype:1},idl_env:{source:"liveramp.com",atype:1},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:1,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:1},digitrustid:{getValue:function(e){return e.data.id},source:"digitru.st",atype:1},criteoId:{source:"criteo.com",atype:1},netId:{source:"netid.de",atype:1}};function a(e,t){var r=n[t];if(r&&e){var a={};a.source=r.source;var u=i.isFn(r.getValue)?r.getValue(e):e;if(u){var o={id:u,atype:r.atype};if(i.isFn(r.getUidExt)){var s=r.getUidExt(e);s&&(o.ext=s)}if(a.uids=[o],i.isFn(r.getEidExt)){var c=r.getEidExt(e);c&&(a.ext=c)}return a}}return null}function u(e){var t=[];for(var r in e)if(e.hasOwnProperty(r)){var i=a(e[r],r);i&&t.push(i)}return t}}}]);