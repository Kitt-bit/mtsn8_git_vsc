!function(){"use strict";var t={410:function(t,o,n){var c=n(206);o.H=c.createRoot,c.hydrateRoot},206:function(t){t.exports=ReactDOM}},o={};function n(c){var e=o[c];if(void 0!==e)return e.exports;var a=o[c]={exports:{}};return t[c](a,a.exports,n),a.exports}!function(){var t=n(410),o=function(t){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],e=t||{},a=e.type,l=void 0===a?"solid":a,r=e.color,i=void 0===r?"#000000b3":r,d=e.gradient,u=void 0===d?"linear-gradient(135deg, #4527a4, #8344c5)":d,s=e.image,b=void 0===s?{}:s,v=e.position,m=void 0===v?"center center":v,p=e.attachment,k=void 0===p?"initial":p,g=e.repeat,h=void 0===g?"no-repeat":g,f=e.size,w=void 0===f?"cover":f,x=e.overlayColor,y=void 0===x?"#000000b3":x;return"gradient"===l&&n?"background: ".concat(u,";"):"image"===l&&c?"background: url(".concat(null==b?void 0:b.url,");\n\t\t\t\tbackground-color: ").concat(y,";\n\t\t\t\tbackground-position: ").concat(m,";\n\t\t\t\tbackground-size: ").concat(w,";\n\t\t\t\tbackground-repeat: ").concat(h,";\n\t\t\t\tbackground-attachment: ").concat(k,";\n\t\t\t\tbackground-blend-mode: overlay;"):o&&"background: ".concat(i,";")},c=function(t){var o=t||{},n=o.width,c=void 0===n?"0px":n,e=o.style,a=void 0===e?"solid":e,l=o.color,r=void 0===l?"#0000":l,i=o.side,d=void 0===i?"all":i,u=o.radius,s=void 0===u?"0px":u,b=function(t){var o=null==d?void 0:d.toLowerCase();return(null==o?void 0:o.includes("all"))||(null==o?void 0:o.includes(t))},v="0px"===c||!c,m="".concat(c," ").concat(a," ").concat(r),p="\n\t\t".concat(v?"":["top","right","bottom","left"].map((function(t){return b(t)?"border-".concat(t,": ").concat(m,";"):""})).join(""),"\n\t\t").concat(s?"border-radius: ".concat(s,";"):"","\n\t");return p},e=function(t){var o=t||{},n=o.type,c=void 0===n?"box":n,e=o.hOffset,a=void 0===e?"0px":e,l=o.vOffset,r=void 0===l?"0px":l,i=o.blur,d=void 0===i?"0px":i,u=o.spreed,s=void 0===u?"0px":u,b=o.color,v=void 0===b?"#7090b0":b,m=o.isInset,p=void 0!==m&&m?"inset":"",k="".concat(a," ").concat(r," ").concat(d);return("text"===c?"".concat(k," ").concat(v):"".concat(k," ").concat(s," ").concat(v," ").concat(p))||"none"},a=function(t){var o=t||{},n=o.side,c=void 0===n?2:n,e=o.vertical,a=void 0===e?"0px":e,l=o.horizontal,r=void 0===l?"0px":l,i=o.top,d=void 0===i?"0px":i,u=o.right,s=void 0===u?"0px":u,b=o.bottom,v=void 0===b?"0px":b,m=o.left,p=void 0===m?"0px":m;return 2===c?"".concat(a," ").concat(r):"".concat(d," ").concat(s," ").concat(v," ").concat(p)},l=function(t){var n=t.attributes,l=t.clientId,r=t.isBackend,i=n.width,d=n.overflow,u=n.background,s=n.padding,b=n.border,v=n.shadow,m=r?"#block-".concat(l):"#bBlocksColumn-".concat(l);return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(m,"{\n\t\t\twidth: ").concat(i.mobile,"%;\n\t\t}\n\t\t@media (min-width: 576px) {\n\t\t\t").concat(m,"{\n\t\t\t\twidth: ").concat(i.tablet,"%;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 768px) {\n\t\t\t").concat(m,"{\n\t\t\t\twidth: ").concat(i.desktop,"%;\n\t\t\t}\n\t\t}\n\n\t\t#bBlocksColumn-").concat(l," .bBlocksColumn{\n\t\t\toverflow: ").concat(d,";\n\t\t\t").concat(o(u),"\n\t\t\tpadding: ").concat(a(s),";\n\t\t\t").concat(c(b),"\n\t\t\tbox-shadow: ").concat(e(v),";\n\t\t}\n\t\t").replace(/\s+/g," ")}})};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-b-blocks-column").forEach((function(o){var n=JSON.parse(o.dataset.attributes),c=document.querySelector("#".concat(o.id," .bBlocksColumnStyle"));(0,t.H)(c).render(React.createElement(React.Fragment,null,React.createElement(l,{attributes:n,clientId:n.cId}))),null==o||o.removeAttribute("data-attributes")}))}));var r=function(t){var n,l=t.attributes,r=t.clientId,i=t.isBackend,d=void 0!==i&&i,u=l.columnGap,s=l.height,b=l.columnPositionY,v=l.columnPositionX,m=l.overflow,p=l.background,k=l.padding,g=l.border,h=l.shadow,f="#bBlocksRow-".concat(r," .bBlocksRow >.block-editor-inner-blocks >.block-editor-block-list__layout"),w="#bBlocksRow-".concat(r," .bBlocksRow"),x=d?f:w,y=null===(n=document.querySelector(x))||void 0===n||null===(n=n.children)||void 0===n?void 0:n.length,R=d?y-1:y,B=parseInt(u)*(R-1)/R,C=d?"".concat(f," .wp-block-b-blocks-column"):"".concat(w," .wp-block-b-blocks-column .bBlocksColumn"),S=d?"".concat(f," .block-editor-block-list__block:first-child .wp-block-b-blocks-column"):"".concat(w," .wp-block-b-blocks-column:first-child .bBlocksColumn"),E=d?"".concat(f," .block-editor-block-list__block:nth-last-child(2) .wp-block-b-blocks-column"):"".concat(w," .wp-block-b-blocks-column:last-child .bBlocksColumn");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(w,"{\n\t\t\trow-gap: ").concat(u,";\n\t\t\toverflow: ").concat(m,";\n\t\t\t").concat(o(p),"\n\t\t\tpadding: ").concat(a(k),";\n\t\t\t").concat(c(g),"\n\t\t\tbox-shadow: ").concat(e(h),";\n\t\t}\n\t\t").concat(x,"{\n\t\t\tmin-height: ").concat(s,";\n\t\t\talign-items: ").concat(b,";\n\t\t\tjustify-content: ").concat(v,";\n\t\t}\n\t\t").concat(C,"{\n\t\t\tmargin: 0 calc( ").concat(B,"px / 2 );\n\t\t}\n\t\t").concat(S,"{\n\t\t\tmargin: 0 ").concat(B,"px 0 0;\n\t\t}\n\t\t").concat(E,"{\n\t\t\tmargin: 0 0 0 ").concat(B,"px;\n\t\t}\n\t\t").replace(/\s+/g," ")}})};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-b-blocks-row").forEach((function(o){var n=JSON.parse(o.dataset.attributes),c=document.querySelector("#".concat(o.id," .bBlocksRowStyle"));(0,t.H)(c).render(React.createElement(React.Fragment,null,React.createElement(r,{attributes:n,clientId:n.cId}))),null==o||o.removeAttribute("data-attributes")}))}))}()}();
//# sourceMappingURL=row.js.map