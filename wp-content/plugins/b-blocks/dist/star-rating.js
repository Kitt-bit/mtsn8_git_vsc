!function(){"use strict";var t,n,e,c,a,o,r,i,l={410:function(t,n,e){var c=e(206);n.H=c.createRoot,c.hydrateRoot},206:function(t){t.exports=ReactDOM}},s={};function u(t){var n=s[t];if(void 0!==n)return n.exports;var e=s[t]={exports:{}};return l[t](e,e.exports,u),e.exports}t=u(410),n=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"box",e="";return null==t||t.map((function(c,a){var o=c||{},r=o.hOffset,i=void 0===r?"0px":r,l=o.vOffset,s=void 0===l?"0px":l,u=o.blur,d=void 0===u?"0px":u,f=o.spreed,v=void 0===f?"0px":f,p=o.color,m=void 0===p?"#7090b0":p,g=o.isInset,x=void 0!==g&&g?"inset":"",h="".concat(i," ").concat(s," ").concat(d),w=a+1>=t.length?"":", ";e+="text"===n?"".concat(h," ").concat(m).concat(w):"".concat(h," ").concat(v," ").concat(m," ").concat(x).concat(w)})),e||"none"},e=function(t,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=n||{},a=c.fontFamily,o=void 0===a?"Default":a,r=c.fontCategory,i=void 0===r?"sans-serif":r,l=c.fontVariant,s=void 0===l?400:l,u=c.fontWeight,d=void 0===u?400:u,f=c.isUploadFont,v=void 0===f||f,p=c.fontSize,m=void 0===p?{desktop:15,tablet:15,mobile:15}:p,g=c.fontStyle,x=void 0===g?"normal":g,h=c.textTransform,w=void 0===h?"none":h,b=c.textDecoration,R=void 0===b?"auto":b,L=c.lineHeight,y=void 0===L?"135%":L,E=c.letterSpace,k=void 0===E?"0px":E,S=function(t,n){return t?"".concat(n,": ").concat(t,";"):""},F=!e||!o||"Default"===o,z=(null==m?void 0:m.desktop)||m,I=(null==m?void 0:m.tablet)||z,N=(null==m?void 0:m.mobile)||I,B="\n\t\t".concat(F?"":"font-family: '".concat(o,"', ").concat(i,";"),"\n\t\t").concat(S(d,"font-weight"),"\n\t\t","font-size: ".concat(z,"px;"),"\n\t\t").concat(S(x,"font-style"),"\n\t\t").concat(S(w,"text-transform"),"\n\t\t").concat(S(R,"text-decoration"),"\n\t\t").concat(S(y,"line-height"),"\n\t\t").concat(S(k,"letter-spacing"),"\n\t"),C=s&&400!==s?"400i"===s?":ital@1":null!=s&&s.includes("00i")?": ital, wght@1, ".concat(null==s?void 0:s.replace("00i","00")," "):": wght@".concat(s," "):"",D=F?"":"https://fonts.googleapis.com/css2?family=".concat(null==o?void 0:o.split(" ").join("+")).concat(C.replace(/ /g,""),"&display=swap");return{googleFontLink:!v||F?"":"@import url(".concat(D,");"),styles:"".concat(t,"{\n\t\t\t").concat(B,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(I,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(N,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},c=function(t){return Array.from({length:t},(function(t,n){return n+1}))},a=function(t){var a,o,r=t.attributes,i=t.clientId,l=r.rating,s=r.gap,u=r.alignment,d=r.textTypo,f=r.textColor,v=r.textShadow,p="#bBlocksRating-".concat(i," .bBlocksRating"),m="".concat(p," .stars .star"),g=(l+"").split("."),x=parseInt(g[0]),h=parseInt(g[1]||0);return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(null===(a=e("",d))||void 0===a?void 0:a.googleFontLink,"\n\t\t").concat(null===(o=e("".concat(p," .ratingPrefix"),d))||void 0===o?void 0:o.styles,"\n\n\t\t").concat(p," {\n\t\t\tjustify-content: ").concat(u,";\n\t\t\tgap: ").concat(s,";\n\t\t\tcolor: ").concat(f,";\n\t\t}\n\n\t\t").concat(p," .ratingPrefix{\n\t\t\ttext-shadow: ").concat(n(v,"text"),"\n\t\t}\n\n\t\t").concat(c(x).map((function(t){return"".concat(m,":nth-child(").concat(t,") .starFill")})).join(", "),"{\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t").concat(m,":nth-child(").concat(x+1,") .starFill{\n\t\t\twidth: ").concat(function(){switch(h){case 1:return 25;case 2:return 30;case 3:return 35;case 4:return 42.5;case 5:return 50;case 6:return 57.5;case 7:return 65;case 8:return 70;case 9:return 75;default:return 0}}(),"%;\n\t\t}\n\t")}})},o=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},React.createElement("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})),r=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},React.createElement("path",{d:"M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"})),i=function(t){var n=t.attributes,e=n.ratingScale,a=n.iconStyle,i=n.prefix;return React.createElement("div",{className:"bBlocksRating"},React.createElement("span",{className:"ratingPrefix"},i),React.createElement("div",{className:"stars"},c(e).map((function(t){return React.createElement("span",{key:t,className:"star"},"solid"===a?o:r,React.createElement("span",{className:"starFill"},o))}))))},document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-b-blocks-star-rating").forEach((function(n){var e=JSON.parse(n.dataset.attributes),c=e.cId;(0,t.H)(n).render(React.createElement(React.Fragment,null,React.createElement(a,{attributes:e,clientId:c}),React.createElement(i,{attributes:e}))),null==n||n.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=star-rating.js.map