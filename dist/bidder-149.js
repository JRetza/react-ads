(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{90:function(e,a,i){"use strict";i.r(a),i.d(a,"spec",(function(){return p}));var r=i(277),t=i(278),n=i(279),d=i(288);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}var o={body:2,body2:10,price:6,displayUrl:11,cta:12},c=[{id:1,required:1,title:{len:140}},{id:2,required:1,img:{type:3}},{id:3,required:1,data:{type:11}},{id:4,required:0,data:{type:2}},{id:5,required:0,img:{type:1}},{id:6,required:0,data:{type:12}}],u=["mimes","minduration","maxduration","protocols","w","h","startdelay","placement","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype","ext"],p={supportedMediaTypes:[n.b,n.c,n.d],code:"datablocks",isBidRequestValid:function(e){return!!(e.params.host&&e.params.sourceId&&e.mediaTypes&&(e.mediaTypes.banner||e.mediaTypes.native||e.mediaTypes.video))},buildRequests:function(e,a){if(!e.length)return[];var i={},t={},n={},p=Object(d.c)(a.referrer),m=[];e.forEach((function(e){var a={id:e.bidId,tagid:e.adUnitCode,secure:"https:"==window.location.protocol};if(r.deepAccess(e,"mediaTypes.banner")){var t=e.mediaTypes.banner.sizes;if(1==t.length)a.banner={w:t[0][0],h:t[0][1]};else{if(!(t.length>1))return;a.banner={format:t.map((function(e){return{w:e[0],h:e[1]}}))}}}else if(r.deepAccess(e,"mediaTypes.native")){var n=e.mediaTypes.native;if(n.type){var d=[];switch(n.type){case"image":d=c;break;default:return}a.native=JSON.stringify({assets:d})}else{var s=[];Object.keys(n).forEach((function(e,a){var i=!!n[e].required,r=a+1;switch(e){case"title":s.push({id:r,required:i,title:{len:n[e].len||140}});break;case"body":case"body2":case"price":case"display_url":var t={id:r,required:i,data:{type:o[e]}};n[e].data&&n[e].data.len&&(t.data.len=n[e].data.len),s.push(t);break;case"image":n[e].sizes&&n[e].sizes.length&&s.push({id:r,required:i,image:{type:3,w:n[e].sizes[0],h:n[e].sizes[1]}})}})),a.native={request:JSON.stringify({native:{assets:s}})}}}else if(r.deepAccess(e,"mediaTypes.video")){var p=e.mediaTypes.video,m=p.playerSize||e.sizes||[];if(m.length&&Array.isArray(m[0]))a.video={w:m[0][0],h:m[0][1]};else{if(2!=m.length||Array.isArray(m[0]))return;a.video={w:m[0],h:m[1]}}p.durationRangeSec&&(Array.isArray(p.durationRangeSec)?1==p.durationRangeSec.length?a.video.maxduration=p.durationRangeSec[0]:2==p.durationRangeSec.length&&(a.video.minduration=p.durationRangeSec[0],a.video.maxduration=p.durationRangeSec[1]):a.video.maxduration=p.durationRangeSec),e.params.video&&Object.keys(e.params.video).forEach((function(i){u.indexOf(i)>-1&&(a.video[i]=e.params.video[i])}))}var l=e.params.host,v=e.params.sourceId;i[l]=i[l]||{};var y=i[l][v]=i[l][v]||{imps:[]};y.imps.push(a),y.subid=y.imps.subid||e.params.subid||"blank",y.path="search",y.idParam="sid",y.protocol="//"})),t.domain=p.hostname,t.page=p.protocol+"://"+p.hostname+p.pathname,self===top&&document.referrer&&(t.ref=document.referrer);var l=document.getElementsByTagName("meta").keywords;return l&&l.content&&(t.keywords=l.content),n.ip="peer",n.ua=window.navigator.userAgent,n.js=1,n.language=(navigator.language||navigator.userLanguage||"").split("-")[0]||"en",function(e,i,r){var t=[];return Object.keys(r).forEach((function(n){var d=r[n];Object.keys(d).forEach((function(r){var o=d[r];t.push({url:"https://".concat(n,"/").concat(o.path,"/?").concat(o.idParam,"=").concat(r),body:{id:a.auctionId,imp:o.imps,site:s({id:o.subid||"blank"},i),device:s({},e)}})}))})),t}(n,t,i).forEach((function(e){m.push({method:"POST",url:e.url,data:e.body,options:{withCredentials:!1}})})),m},interpretResponse:function(e,a){if(!e||!e.body||!e.body.seatbid)return[];var i=e.body.seatbid.map((function(e){return e.bid})).reduce((function(e,a){return e.concat(a)}),[]),r=a.data.imp;return i.map((function(e){var a;for(var i in r){var t=r[i];if(t.id==e.impid){a=t;break}}var d={requestId:e.impid,cpm:e.price,creativeId:e.crid,currency:e.currency||"USD",netRevenue:!0,ttl:360};if(!a)return d;if(a.banner)d.mediaType=n.b,d.width=e.w,d.height=e.h,d.ad=e.adm;else if(a.native){d.mediaType=n.c;var s={};Object.keys(o).forEach((function(e){s[o[e]]=e}));var c={},u=JSON.parse(a.native.request);u.native&&u.native.assets&&u.native.assets.forEach((function(e){e.data&&(c[e.id]=s[e.data.type])}));var p=JSON.parse(e.adm).native,m=p.assets,l=p.link,v=p.imptrackers,y=p.jstrackers,f={clickUrl:l.url,clickTrackers:l.clicktrackers||void 0,impressionTrackers:v||void 0,javascriptTrackers:y?[y]:void 0};m.forEach((function(e){e.title?f.title=e.title.text:e.img?f.image=e.img.url:c[e.id]&&(f[c[e.id]]=e.data.value)})),d.native=f}else a.video&&(d.mediaType=n.d,d.width=e.w,d.height=e.h,e.adm?d.vastXml=e.adm:e.nurl&&(d.vastUrl=e.nurl));return d}))}};Object(t.registerBidder)(p)}}]);