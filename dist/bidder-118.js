(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{37:function(e,r,n){"use strict";n.r(r),n.d(r,"BIDDER_CODE",(function(){return o})),n.d(r,"PUBLISHER_PLACEHOLDER",(function(){return c})),n.d(r,"ENDPOINT_URL",(function(){return u})),n.d(r,"ENDPOINT_METHOD",(function(){return a})),n.d(r,"spec",(function(){return s})),n.d(r,"extractSizesFromBidRequest",(function(){return p})),n.d(r,"extractParamsFromBidRequest",(function(){return f})),n.d(r,"extractGdprFromBidderRequest",(function(){return b})),n.d(r,"extractTopWindowUrlFromBidRequest",(function(){return l})),n.d(r,"extractTopWindowReferrerFromBidRequest",(function(){return h}));var t=n(278),d=n(279),i=n(277),o="aduptech",c="{PUBLISHER}",u="https://rtb.d.adup-tech.com/prebid/"+c+"_bid",a="POST",s={code:o,supportedMediaTypes:[d.b],isBidRequestValid:function(e){if(!e)return!1;var r=p(e);if(!r||0===r.length)return!1;var n=f(e);return!!(n&&n.publisher&&n.placement)},buildRequests:function(e,r){var n=[],t=b(r);return e.forEach((function(e){n.push({url:u.replace(c,encodeURIComponent(e.params.publisher)),method:a,data:{bidId:e.bidId,auctionId:e.auctionId,transactionId:e.transactionId,adUnitCode:e.adUnitCode,pageUrl:l(e),referrer:h(e),sizes:p(e),params:f(e),gdpr:t}})})),n},interpretResponse:function(e){var r=[];return e.body&&e.body.bid&&e.body.creative?(r.push({requestId:e.body.bid.bidId,cpm:e.body.bid.price,netRevenue:e.body.bid.net,currency:e.body.bid.currency,ttl:e.body.bid.ttl,creativeId:e.body.creative.id,width:e.body.creative.width,height:e.body.creative.height,ad:e.body.creative.html}),r):r}};function p(e){return e&&i.deepAccess(e,"mediaTypes.banner.sizes")?e.mediaTypes.banner.sizes:e&&e.sizes?e.sizes:[]}function f(e){return e&&e.params?e.params:null}function b(e){var r=null;return e&&e.gdprConsent&&(r={consentString:e.gdprConsent.consentString,consentRequired:"boolean"!=typeof e.gdprConsent.gdprApplies||e.gdprConsent.gdprApplies}),r}function l(e){if(e&&i.deepAccess(e,"refererInfo.canonicalUrl"))return e.refererInfo.canonicalUrl;try{return window.top.location.href}catch(e){return window.location.href}}function h(e){if(e&&i.deepAccess(e,"refererInfo.referer"))return e.refererInfo.referer;try{return window.top.document.referrer}catch(e){return window.document.referrer}}Object(t.registerBidder)(s)}}]);