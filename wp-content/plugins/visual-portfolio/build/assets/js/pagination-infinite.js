(()=>{"use strict";var n={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return n.d(e,{a:e}),e},d:(o,e)=>{for(var t in e)n.o(e,t)&&!n.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},o:(n,o)=>Object.prototype.hasOwnProperty.call(n,o)};const o=window.jQuery;var e=n.n(o);const t=e()(window);e()(document).on("initEvents.vpf",((n,o)=>{if("vpf"!==n.namespace||"infinite"!==o.options.pagination)return;const e=`.vpf-uid-${o.uid}`;let i=!1;function r(){if(i||!o.options.nextPageUrl)return;i=!0;const n=o.$item[0].getBoundingClientRect();n.bottom>0&&n.bottom-400<=window.innerHeight?o.loadNewItems(o.options.nextPageUrl,!1,(()=>{setTimeout((()=>{i=!1,r()}),300)})):i=!1}var a,u,c,l;r(),t.on(`load${e} scroll${e} resize${e} orientationchange${e}`,function(n,o,e){var t,i=e||{},r=i.noTrailing,a=void 0!==r&&r,u=i.noLeading,c=void 0!==u&&u,l=i.debounceMode,d=void 0===l?void 0:l,v=!1,f=0;function s(){t&&clearTimeout(t)}function p(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];var u=this,l=Date.now()-f;function p(){f=Date.now(),o.apply(u,i)}function m(){t=void 0}v||(c||!d||t||p(),s(),void 0===d&&l>n?c?(f=Date.now(),a||(t=setTimeout(d?m:p,n))):p():!0!==a&&(t=setTimeout(d?m:p,void 0===d?n-l:n)))}return p.cancel=function(n){var o=(n||{}).upcomingOnly,e=void 0!==o&&o;s(),v=!e},p}(150,(a=()=>{r()},u=[],c=null,(l=function(){for(var n=arguments.length,o=new Array(n),e=0;e<n;e++)o[e]=arguments[e];u=o,c||(c=requestAnimationFrame((function(){c=null,a.apply(void 0,u)})))}).cancel=function(){c&&(cancelAnimationFrame(c),c=null)},l)))}))})();