(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{202:function(e,t,r){"use strict";r.r(t),r.d(t,"spec",(function(){return a}));var i=r(0),n=r(55);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var d={inskin:{BASE_URI:"https://mfad.inskinad.com/api/v2"}},a={code:"inskin",isBidRequestValid:function(e){return!(!e.params.networkId||!e.params.siteId)},buildRequests:function(e,t){var r,i={method:"POST",url:"",data:"",bidRequest:[]};if(e.length<1)return i;var n=s({placements:[],time:Date.now(),user:{},url:t.refererInfo.referer,enableBotFiltering:!0,includePricingData:!0,parallel:!0},e[0].params);return t&&t.gdprConsent&&(n.consent={gdprVendorId:150,gdprConsentString:t.gdprConsent.consentString,gdprConsentRequired:"boolean"!=typeof t.gdprConsent.gdprApplies||t.gdprConsent.gdprApplies}),e.map((function(e){var t=d[e.bidder];r=t.BASE_URI;var i=s({divName:e.bidId,adTypes:e.adTypes||p(e.sizes),eventIds:[40,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295]},e.params);i.adTypes.push(5,9,163,2163,3006),i.networkId&&i.siteId&&n.placements.push(i)})),i.data=JSON.stringify(n),i.bidRequest=e,i.url=r,i},interpretResponse:function(e,t){var r,i,n,s,d=[],a={};i=t.bidRequest,e=(e||{}).body;for(var o=0;o<i.length;o++)if(r={},n=(s=i[o]).bidId,a[n]=s,e){var p=e.decisions&&e.decisions[n],u=p&&p.contents&&p.contents[0]&&p.contents[0].data,m=u&&u.customData&&u.customData.pubCPM,l=p&&p.pricing&&p.pricing.clearPrice,f=m||l;p&&f&&(p.impressionUrl+="&property:pubcpm="+f,s.price=f,r.requestId=n,r.cpm=f,r.width=p.width,r.height=p.height,r.ad=c(n,p),r.currency="USD",r.creativeId=p.adId,r.ttl=360,r.netRevenue=!0,d.push(r))}return d.length&&window.addEventListener("message",(function(t){if(t.data&&"ism-bid"===t.data.from&&(e.decisions&&e.decisions[t.data.bidId])){var r="ism_tag_"+Math.floor(1e17*Math.random());window[r]={bidId:t.data.bidId,bidPrice:a[t.data.bidId].price,serverResponse:e};var i=document.createElement("script");i.src="https://cdn.inskinad.com/isfe/publishercode/"+a[t.data.bidId].params.siteId+"/default.js?autoload&id="+r,document.getElementsByTagName("head")[0].appendChild(i)}})),d},getUserSyncs:function(e){var t=[];return e.pixelEnabled&&(t.push({type:"image",url:"https://e.serverbid.com/udb/9969/match?redir=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fpool%2Fset%2Fi.gif%3FpoolId%3D9969%26poolKey%3D"}),t.push({type:"image",url:"https://ssum.casalemedia.com/usermatchredir?s=185638&cb=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fsync%2Fi.gif%3FpartnerId%3D1%26userId%3D"})),e.iframeEnabled&&t.push({type:"iframe",url:"https://ssum-sec.casalemedia.com/usermatch?s=184665&cb=https%3A%2F%2Fmfad.inskinad.com%2Fudb%2F9874%2Fsync%2Fi.gif%3FpartnerId%3D1%26userId%3D"}),t}},o=[null,"120x90","120x90","468x60","728x90","300x250","160x600","120x600","300x100","180x150","336x280","240x400","234x60","88x31","120x60","120x240","125x125","220x250","250x250","250x90","0x0","200x90","300x50","320x50","320x480","185x185","620x45","300x125","800x250"];function p(e){var t=[];return e.forEach((function(e){var r=o.indexOf(e[0]+"x"+e[1]);r>=0&&t.push(r)})),t}function c(e,t){return"<script>window.top.postMessage({from: 'ism-bid', bidId: '"+e+"'}, '*');<\/script>"+i.createTrackPixelHtml(t.impressionUrl)}o[77]="970x90",o[123]="970x250",o[43]="300x600",Object(n.registerBidder)(a)}}]);