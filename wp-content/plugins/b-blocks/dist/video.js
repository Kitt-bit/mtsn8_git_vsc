!function(){"use strict";var t={410:function(t,e,r){var n=r(206);e.H=n.createRoot,n.hydrateRoot},206:function(t){t.exports=ReactDOM}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}!function(){var t=React,e=r(410),n=function(t){var e=t.attributes,r=t.clientId,n=e.width,a=e.radius;return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t#bBlocksVideo-".concat(r," .bBlocksVideo{\n\t\t\twidth: ").concat(["0px","0%","0em"].includes(n)?"100%":n,";\n\t\t\tborder-radius: ").concat(a,";\n\t\t}\n\t\t").replace(/\s+/g," ")}})},a=function(t){var e=[];return Object.keys(t).map((function(r){t[r]&&e.push(r)})),e};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-b-blocks-video").forEach((function(t){var r=JSON.parse(t.dataset.attributes);(0,e.H)(t).render(React.createElement(React.Fragment,null,React.createElement(n,{attributes:r,clientId:r.clientId}),React.createElement(o,{attributes:r}))),null==t||t.removeAttribute("data-attributes")}))}));var o=function(e){var r=e.attributes,n=r.source,o=r.poster,c=r.controls,s=r.repeat,u=r.autoplay,i=r.muted,l=r.resetOnEnd,d=r.autoHideControl,p=(0,t.useRef)(null);return(0,t.useEffect)((function(){new Plyr(p.current,{controls:a(c),clickToPlay:!1,loop:{active:s},muted:i,autoplay:u,resetOnEnd:l,hideControls:d})}),[]),React.createElement("div",{className:"bBlocksVideo"},React.createElement("div",{className:"videoWrapper"},React.createElement("video",{controls:!0,playsinline:!0,"data-poster":o,preload:"metadata",ref:p},"Your browser does not support the video tag.",React.createElement("source",{src:n,type:"video/mp4"}))))}}()}();
//# sourceMappingURL=video.js.map