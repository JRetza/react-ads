(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return u}));var n=r(0),a=r(55),i=r(13),o=r(16),s=r(35);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u={code:"buzzoola",aliases:["buzzoolaAdapter"],supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){var t=e.mediaTypes;return!!(e&&e.mediaTypes&&(t.banner||t.video)&&e.params&&e.params.placementId)},buildRequests:function(e,t){return{url:"https://exchange.buzzoola.com/ssp/prebidjs",method:"POST",data:t}},interpretResponse:function(e,t){var r,a=e.body,d=t.data,u={};try{r=JSON.parse(a)}catch(e){r=a}return Array.isArray(r)||(r=[]),d.bids.forEach((function(e){return u[e.bidId]=e})),r.map((function(e){var t=u[e.requestId],r=n.deepAccess(t,"mediaTypes.video.context"),a=n.deepClone(e);if(a.mediaType===i.d&&r===s.b){var d=o.a.install({id:a.requestId,url:"https://tube.buzzoola.com/new/build/buzzlibrary.js",loaded:!1});d.setRender(c),a.renderer=d}return a}))}};function c(e){var t=JSON.parse(e.ad),r=n.deepAccess(t,"placement.unit_settings"),a={width:""+e.width,height:""+e.height,container_height:""+e.height};t.placement=d({},t.placement),t.placement.unit_settings=d({},r,a),e.renderer.push((function(){window.Buzzoola.Core.install(document.querySelector("#".concat(e.adUnitCode)),{data:t})}))}Object(a.registerBidder)(u)}}]);