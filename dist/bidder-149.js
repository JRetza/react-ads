(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{210:function(r,e,t){"use strict";t.r(e),t.d(e,"spec",(function(){return i}));var n=t(0),a=t(55);function o(r){return function(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i={code:"komoona",isBidRequestValid:function(r){return!!(r&&r.params&&r.params.placementId&&r.params.hbid)},buildRequests:function(r){var e=r.map((function(r){var e={uuid:r.bidId,sizes:r.sizes,trid:r.transactionId,hbid:r.params.hbid,placementid:r.params.placementId};return r.params.floorPrice&&(e.floorprice=r.params.floorPrice),e})),t=(new Date).getTime(),a={ts_as:t,hb_placements:[],hb_placement_bidids:{},hb_floors:{},cb:s(t),tz:(new Date).getTimezoneOffset()};r.forEach((function(r){a.hdbdid=a.hdbdid||r.params.hbid,a.encode_bid=a.encode_bid||r.params.encode_bid,a.hb_placement_bidids[r.params.placementId]=r.bidId,r.params.floorPrice&&(a.hb_floors[r.params.placementId]=r.params.floorPrice),a.hb_placements.push(r.params.placementId)}));var i={};return n.isEmpty(e)||(i={bids:o(e),kbConf:a}),{method:"POST",url:"https://bidder.komoona.com/v1/GetSBids",data:JSON.stringify(i)}},interpretResponse:function(r,e){var t=[];try{r.body&&r.body.bids&&r.body.bids.forEach((function(r){r.requestId=r.uuid,r.ad=r.creative,t.push(r)}))}catch(r){n.logError(r)}return t},getUserSyncs:function(r){if(r.iframeEnabled)return[{type:"iframe",url:"https://s.komoona.com/sync/usync.html"}]}};function s(r){return Math.floor(r%65536+65536*Math.floor(65536*Math.random()))}Object(a.registerBidder)(i)}}]);