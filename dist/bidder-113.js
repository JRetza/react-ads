(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"spec",(function(){return u}));var r=n(55),i=n(13),a=n(0);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=[i.b,i.c];var u={code:"dailyhunt",aliases:["dh"],supportedMediaTypes:s,isBidRequestValid:function(e){return!!e.params.partnerId},buildRequests:function(e,t){var n=[],r=navigator.userAgent,i=t.refererInfo.referer;return e.forEach((function(o,c){var s=function(e){var t=d({},e.params);t.pagetype="sources",t.placementId=12345,t.env="prod",t.testmode&&!0===t.testmode&&(t.customEvent="pb-testmode");var n=!1,r=!1;return e&&e.sizes&&e.sizes.forEach((function(e,t){r||300!=e[0]||250!=e[1]||(r=!0),n||300!=e[0]&&320!=e[0]||50!=e[1]||(n=!0)})),t.zone="web",t.subSlots=!r&&n?"web-5":"web-3",e.nativeParams&&(t.subSlots="web-3",t.ad_type="2,3"),t.partnerId||(t.partnerId="unknown-pb-partner"),t.pbRequestId=e.bidId,t.format="json",t}(o),u="";if(o.nativeParams)u={method:"GET",url:"https://money.dailyhunt.in/openx/ads/index.php",data:a.parseQueryStringParameters(s)};else{var p={id:t.auctionId,imp:[{id:c.toString(),banner:{id:"banner-"+t.auctionId,format:[{h:250,w:300},{h:50,w:320}]},bidfloor:0,ext:{dailyhunt:d({},s)}}],site:{id:c.toString(),page:i},device:{userAgent:r},user:{id:s.clientId||""}};u={method:"POST",url:"https://money.dailyhunt.in/openrtb2/auction",data:JSON.stringify(p),options:{contentType:"application/json",withCredentials:!0},bids:e}}n.push(u)})),n},interpretResponse:function(e,t){var n=[];if(t.bids){if(!e.body)return;var r=e.body.seatbid;return t.bids.reduce((function(e,t,n){var i=r&&r[n]&&r[n].bid,a=i&&i[0];return a&&e.push({requestId:t.bidId,cpm:a.price,creativeId:a.crid,width:a.w,height:a.h,ttl:360,netRevenue:"net"===t.netRevenue,currency:"USD",ad:a.adm}),e}),[])}var i=e.body[0][0].ad;if(2!=i.typeId&&3!=i.typeId)return n;var a=[];a.push(i.beaconUrl),a=i.beaconUrlAdditional&&0!==i.beaconUrlAdditional.length?a.concat(i.beaconUrlAdditional):a;var o,d,c={requestId:i.pbRequestId,cpm:i.price,creativeId:i.bannerid,currency:"USD",ttl:360,netRevenue:!0,mediaType:"native"};return c.native={title:i.content.itemTitle.data,body:i.content.itemSubtitle1.data,body2:i.content.itemSubtitle1.data,cta:i.content.itemSubtitle2.data,clickUrl:(o=i.action,d=window.encodeURIComponent(o),d=d.replace(/'/g,"%27")),impressionTrackers:a,clickTrackers:i.landingUrlAdditional&&0!==i.landingUrlAdditional.length?i.landingUrlAdditional:[],image:{url:i.content.iconLink,height:i.height,width:i.width},icon:{url:i.content.iconLink,height:i.height,width:i.width}},n.push(c),n}};Object(r.registerBidder)(u)}}]);