(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{42:function(e,i,r){"use strict";r.r(i),r.d(i,"spec",(function(){return f}));var t=r(282),n=r(279),a=r(290),d=r(280),s=r(281),o=r(285),c=r.n(o),p=[s.b,s.d,s.c],u=["id","mimes","minduration","maxduration","startdelay","skippable","playback_method","frameworks"],m=["forcedDspIds","forcedCampaignIds","forcedCreativeIds","gender","dnt","language"],l=["lineparam1","lineparam2","lineparam3"],f={code:"adxcg",supportedMediaTypes:p,isBidRequestValid:function(e){if(!e||!e.params)return n.logWarn("adxcg: Missing bid parameters"),!1;if(!n.isStr(e.params.adzoneid))return n.logWarn("adxcg: adzoneid must be specified as a string"),!1;if(g(e)){if(e.params.video.mimes){if(!n.isArray(e.params.video.mimes)||!e.params.video.mimes.every((function(e){return n.isStr(e)})))return n.logWarn("adxcg: mimes must be an array of strings"),!1}else n.logWarn("adxcg: mimes should be specified for videos");if("instream"!==n.deepAccess(e,"mediaTypes.video.context"))return n.logWarn("adxcg: video context must be valid - instream"),!1}return!0},buildRequests:function(e,i){n.logMessage("buildRequests: ".concat(JSON.stringify(e)));var r=new Date,d=window.devicePixelRatio||1,s=window&&window.IntersectionObserver&&window.IntersectionObserverEntry&&window.IntersectionObserverEntry.prototype&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,o=t.b.getConfig("bidderTimeout");window.PREBID_TIMEOUT&&(o=Math.min(window.PREBID_TIMEOUT,o));var p={renderformat:"javascript",ver:"r20191128PB30",secure:"1",source:"pbjs10",uw:window.screen.width,uh:window.screen.height,dpr:d,bt:o,isinframe:n.inIframe(),cookies:n.checkCookieSupport()?"1":"0",tz:r.getTimezoneOffset(),dt:n.timestamp(),iob:s?"1":"0",pbjs:"3.11.0",rndid:Math.floor(9e5*Math.random())+1e5},f=n.deepAccess(i,"refererInfo.referer"),v=n.deepAccess(i,"refererInfo.canonicalUrl")||t.b.getConfig("pageUrl")||n.deepAccess(window,"location.href");p.ref=encodeURIComponent(f),p.url=encodeURIComponent(v),i&&i.gdprConsent&&i.gdprConsent.gdprApplies&&(p.gdpr=i.gdprConsent.gdprApplies?"1":"0",p.gdpr_consent=i.gdprConsent.consentString);var b=t.b.getConfig("adxcg");b&&Object.keys(b).filter((function(e){return c()(m,e)})).forEach((function(e){return p[e]=encodeURIComponent(b[e])}));var h=[],I=[],y=[],w=[];return e.forEach((function(e,i){h.push(n.getBidIdParameter("adzoneid",e.params)),I.push(e.bidId),function(e){return"banner"===e.mediaType||!!n.deepAccess(e,"mediaTypes.banner")}(e)&&y.push(n.parseSizesInput(e.mediaTypes.banner.sizes).join("|")),function(e){return"native"===e.mediaType||!!n.deepAccess(e,"mediaTypes.native")}(e)&&y.push("0x0");var r=n.getBidIdParameter("bidfloor",e.params)||0;w.push(r),g(e)&&(e.params.video&&Object.keys(e.params.video).filter((function(e){return c()(u,e)})).forEach((function(r){return p["video."+r+"."+i]=encodeURIComponent(e.params.video[r])})),p["video.context."+i]=n.deepAccess(e,"mediaTypes.video.context"),y.push(n.parseSizesInput(e.mediaTypes.video.playerSize).join("|")));var t=n.getBidIdParameter("custom",e.params)||{};t&&Object.keys(t).filter((function(e){return c()(l,e)})).forEach((function(e){return p[e+"."+i]=encodeURIComponent(t[e])}))})),p.adzoneid=h.join(","),p.format=y.join(","),p.prebidBidIds=I.join(","),p.bidfloors=w.join(","),n.isStr(n.deepAccess(e,"0.userId.pubcid"))&&(p.pubcid=e[0].userId.pubcid),n.isStr(n.deepAccess(e,"0.userId.tdid"))&&(p.tdid=e[0].userId.tdid),n.isStr(n.deepAccess(e,"0.userId.id5id"))&&(p.id5id=e[0].userId.id5id),n.isStr(n.deepAccess(e,"0.userId.idl_env"))&&(p.idl_env=e[0].userId.idl_env),{contentType:"text/plain",method:"GET",url:a.a({protocol:"https",hostname:"hbps.adxcg.net",pathname:"/get/adi",search:p}),withCredentials:!0}},interpretResponse:function(e,i){var r=[];return(e=e.body)?e.forEach((function(e){var i={};if(i.requestId=e.bidId,i.cpm=e.cpm,i.creativeId=parseInt(e.creativeId),i.currency=e.currency?e.currency:"USD",i.netRevenue=!e.netRevenue||e.netRevenue,i.ttl=e.ttl?e.ttl:300,null!=e.deal_id&&e.deal_id.trim().length>0&&(i.dealId=e.deal_id),e.ad)i.ad=e.ad;else if(e.vastUrl)i.vastUrl=e.vastUrl,i.mediaType="video";else if(e.nativeResponse){i.mediaType="native";var t=e.nativeResponse;i.native={clickUrl:t.link.url,impressionTrackers:t.imptrackers,clickTrackers:t.clktrackers,javascriptTrackers:t.jstrackers},t.assets.forEach((function(e){if(e.title&&e.title.text&&(i.native.title=e.title.text),e.img&&e.img.url){var r={};r.url=e.img.url,r.height=e.img.h,r.width=e.img.w,i.native.image=r}if(e.icon&&e.icon.url){var t={};t.url=e.icon.url,t.height=e.icon.h,t.width=e.icon.w,i.native.icon=t}e.data&&"DESC"===e.data.label&&e.data.value&&(i.native.body=e.data.value),e.data&&"SPONSORED"===e.data.label&&e.data.value&&(i.native.sponsoredBy=e.data.value)}))}i.width=e.width,i.height=e.height,n.logMessage("submitting bid[".concat(e.bidId,"]: ").concat(JSON.stringify(i))),r.push(i)})):n.logMessage("empty bid response"),r},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://cdn.adxcg.net/pb-sync.html"}]}};function g(e){return"video"===e.mediaType||!!n.deepAccess(e,"mediaTypes.video")}Object(d.registerBidder)(f)}}]);