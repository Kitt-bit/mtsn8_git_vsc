(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.jQuery;var a=e.n(t);const{ajaxurl:r,VPAdminVariables:s}=window;a()('select[name="vp_general[portfolio_archive_page]"]').select2({ajax:{url:r,dataType:"json",delay:250,data(e){return{q:e.term,selected:this[0].value,nonce:s.nonce,action:"vp_get_pages_list"}},processResults(e){const t=[],r=this.$element.select2("data");let s=!1;return r&&r[0]&&r[0].selected&&(s=Number(r[0].id),t.push({id:s,text:r[0].text})),e&&a().each(e,((e,a)=>{s&&s===a[0]||t.push({id:a[0],text:a[1]})})),{results:t}},cache:!0}})})();