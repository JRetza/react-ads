(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{161:function(e,t,i){"use strict";i.r(t),i.d(t,"spec",(function(){return b}));var r=i(277),a=i(278),n=i(279);function o(e){return parseInt((Math.random()+1)*Math.pow(10,e-1))+""}function d(){return/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2}var s,u=(s=navigator.userAgent).indexOf("Android")>-1||s.indexOf("Adr")>-1?"Android":s.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?"iOS":"windows";var b={code:"newborntownWeb",supportedMediaTypes:[n.b,n.c],isBidRequestValid:function(e){return!!(e.params.publisher_id&&e.params.slot_id&&e.params.bidfloor)},buildRequests:function(e,t){var i,a,n=[];return 0===e.length?null:(null==localStorage.getItem("sax_user_id")&&localStorage.setItem("sax_user_id",(a=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=(a+16*Math.random())%16|0;return a=Math.floor(a/16),("x"==e?t:3&t|8).toString(16)})))),i=localStorage.getItem("sax_user_id"),r._each(e,(function(e){var a,s=e.params,b={id:o(12)+o(12),tmax:t.timeout,bidId:e.bidId,user:{id:i},imp:[{id:"1",bidfloor:s.bidfloor,bidfloorcur:"USD",banner:{w:0,h:0}}],site:{domain:window.location.host,id:s.slot_id,page:window.location.href,publisher:{id:s.publisher_id}},device:{ip:"",ua:navigator.userAgent,os:u,geo:{country:"",type:0,ipservice:1,region:"",city:""},language:(a=navigator.language?"language":"userLanguage",navigator[a].split("-")[0]),devicetype:d()},ext:{solomath:{slotid:s.slot_id}}},p=e.sizes;if(!p)return!1;p&&r.isArray(p[0])?(b.imp[0].banner.w=p[0][0],b.imp[0].banner.h=p[0][1]):p&&r.isNumber(p[0])&&(b.imp[0].banner.w=p[0],b.imp[0].banner.h=p[1]);n.push({method:"POST",url:"https://us-west.solortb.com/adx/api/rtb?from=4",data:b,bidderRequest:t,options:{withCredentials:!1}})})),n)},interpretResponse:function(e,t){var i=[];return e.body.seatbid&&e.body.seatbid.length>0&&e.body.seatbid[0].bid&&e.body.seatbid[0].bid.length>0&&e.body.seatbid[0].bid[0].adm&&r._each(e.body.seatbid[0].bid,(function(r){var a;a=r.adm;var n={requestId:t.data.bidId||0,cpm:r.price||0,width:r.w?r.w:0,height:r.h?r.h:0,ad:a,netRevenue:!0,currency:e.body.cur||"USD",ttl:600,creativeId:r.cid};i.push(n)})),i}};Object(a.registerBidder)(b)}}]);