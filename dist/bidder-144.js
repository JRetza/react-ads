(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{81:function(e,r,n){"use strict";n.r(r),n.d(r,"spec",(function(){return p}));var t=n(277),i=n(278);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a=0,d="consumable",p={code:"consumable",isBidRequestValid:function(e){return!!(e.params.networkId&&e.params.siteId&&e.params.unitId&&e.params.unitName)},buildRequests:function(e,r){var n={method:"POST",url:"",data:"",bidRequest:[]};if(e.length<1)return n;a=e[0].params.siteId,d=e[0].bidder;var t=s({placements:[],time:Date.now(),url:r.refererInfo.referer,referrer:document.referrer,source:[{name:"prebidjs",version:"3.11.0"}]},e[0].params);return r&&r.gdprConsent&&(t.gdpr={consent:r.gdprConsent.consentString,applies:"boolean"!=typeof r.gdprConsent.gdprApplies||r.gdprConsent.gdprApplies}),r&&r.uspConsent&&(t.ccpa=r.uspConsent),e.map((function(e){var r=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.sizes||[],n=s({divName:e.bidId,adTypes:e.adTypes||u(r)},e.params);n.networkId&&n.siteId&&n.unitId&&n.unitName&&t.placements.push(n)})),n.data=JSON.stringify(t),n.bidRequest=e,n.bidderRequest=r,n.url="https://e.serverbid.com/api/v2",n},interpretResponse:function(e,r){var n,t,i,s,a=[];t=r.bidRequest,e=(e||{}).body;for(var d=0;d<t.length;d++)if(n={},i=(s=t[d]).bidId,e){var p=e.decisions&&e.decisions[i],o=p&&p.pricing&&p.pricing.clearPrice;p&&o&&(n.requestId=i,n.cpm=o,n.width=p.width,n.height=p.height,n.unitId=s.params.unitId,n.unitName=s.params.unitName,n.ad=c(p,n.unitId,n.unitName),n.currency="USD",n.creativeId=p.adId,n.ttl=30,n.netRevenue=!0,n.referrer=r.bidderRequest.refererInfo.referer,a.push(n))}return a},getUserSyncs:function(e,r){return e.iframeEnabled?[{type:"iframe",url:"https://sync.serverbid.com/ss/"+a+".html"}]:e.pixelEnabled&&r.length>0?r[0].body.pixels:void t.logWarn(d+": Please enable iframe based user syncing.")}},o=[null,"120x90","120x90","468x60","728x90","300x250","160x600","120x600","300x100","180x150","336x280","240x400","234x60","88x31","120x60","120x240","125x125","220x250","250x250","250x90","0x0","200x90","300x50","320x50","320x480","185x185","620x45","300x125","800x250"];function u(e){var r=[];return e.forEach((function(e){var n=o.indexOf(e[0]+"x"+e[1]);n>=0&&r.push(n)})),r}function c(e,r,n){return e.contents&&e.contents[0]&&e.contents[0].body+t.createTrackPixelHtml(e.impressionUrl)}o[77]="970x90",o[123]="970x250",o[43]="300x600",o[286]="970x66",o[3230]="970x280",o[429]="486x60",o[374]="700x500",o[934]="300x1050",o[1578]="320x100",o[331]="320x250",o[3301]="320x267",o[2730]="728x250",Object(i.registerBidder)(p)}}]);