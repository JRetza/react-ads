(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return n}));var s=r(55),a=r(13),i=r(0),n={code:"advenue",supportedMediaTypes:[a.b,a.d,a.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.placementId)&&-1!==n.supportedMediaTypes.indexOf(e.params.traffic))},buildRequests:function(e,t){var r;try{(r=window.top).location.toString()}catch(e){i.logMessage(e),r=window}for(var s=t?new URL(t.refererInfo.referer):r.location,a=[],n={secure:"https:"===s.protocol?1:0,deviceWidth:r.screen.width,deviceHeight:r.screen.height,host:s.host,page:s.pathname,placements:a},d=0;d<e.length;d++){var o=e[d],c=o.params;a.push({placementId:c.placementId,bidId:o.bidId,sizes:o.sizes,traffic:c.traffic})}return{method:"POST",url:"https://ssp.advenuemedia.co.uk/?c=o&m=multi",data:n}},interpretResponse:function(e){try{e=e.body}catch(e){i.logMessage(e)}return e}};Object(s.registerBidder)(n)}}]);