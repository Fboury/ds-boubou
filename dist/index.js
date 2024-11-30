/*! For license information please see index.js.LICENSE.txt */
!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.MyLibrary=e(require("react")):r.MyLibrary=e(r.react)}(self,(r=>(()=>{"use strict";var e={655:(r,e,n)=>{n.d(e,{A:()=>i});var o=n(601),t=n.n(o),a=n(314),c=n.n(a)()(t());c.push([r.id,".btn {\n    display: inline-block;\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n    font-weight: bold;\n    border-radius: 4px;\n    border: none;\n    cursor: pointer;\n    transition: background-color 0.3s ease, transform 0.2s ease;\n}\n\n/* Bouton primaire */\n.btn.primary {\n    background-color: #007bff;\n    color: white;\n}\n\n.btn.primary:hover {\n    background-color: #0056b3;\n}\n\n/* Bouton secondaire */\n.btn.secondary {\n    background-color: #6c757d;\n    color: white;\n}\n\n.btn.secondary:hover {\n    background-color: #5a6268;\n}\n\n/* Désactiver le bouton */\n.btn:disabled {\n    background-color: #c0c0c0;\n    color: white;\n    cursor: not-allowed;\n    opacity: 0.7;\n}\n",""]);const i=c},507:(r,e,n)=>{n.d(e,{A:()=>l});var o=n(601),t=n.n(o),a=n(314),c=n.n(a),i=n(650),s=c()(t());s.i(i.A),s.push([r.id,'.dsb-message--error {\n    display: flex;\n    color: var(--color-use--5);\n    font: normal 1rem "Source Sans Pro", sans-serif !important;\n    line-height: 1.25rem !important;\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    background-color: var(--color-use--6);\n    padding: .25rem .5rem;\n    border-radius: 4px;\n    width: fit-content;\n}',""]);const l=s},650:(r,e,n)=>{n.d(e,{A:()=>i});var o=n(601),t=n.n(o),a=n(314),c=n.n(a)()(t());c.push([r.id,":root {\n    /* Couleurs */\n    --color-primary: #007bff;\n    --color-primary-hover: #0056b3;\n    --color-secondary: #6c757d;\n    --color-secondary-hover: #5a6268;\n    --color-white: #ffffff;\n    --color-black: #000000;\n    --color-grey--5: #F2F2F2;\n    --color-grey--10: #E5E5E5;\n    --color-grey--20: #CCCCCC;\n    --color-grey--30: #B2B2B2;\n    --color-grey--40: #999999;\n    --color-grey--50: #7F7F7F;\n    --color-grey--60: #666666;\n    --color-grey--70: #4D4D4D;\n    --color-grey--80: #333333;\n    --color-grey--90: #1A1A1A;\n    --color-use--1: #016F50;\n    --color-use--2: #EFFBF7;\n    --color-use--3: #0038BA;\n    --color-use--4: #ECF1FF;\n    --color-use--5: #D80C31;\n    --color-use--6: #FEECEF;\n    --color-use--7: #C73E00;\n    --color-use--8: #FFF1EB;\n    --color-use--9: #0066CC;\n    --color-use--10: #D62E52;\n    --color-macif--1: #0A2D82;\n    --color-macif--2: #D3D62E;\n\n    /* Espacements */\n    --spacing-small: 0.5rem;\n    --spacing-medium: 1rem;\n    --spacing-large: 1.5rem;\n\n    /* Bordures */\n    --border-radius: 4px;\n\n    /* Typographie */\n    --font-family: 'Arial', sans-serif;\n    --font-size: 16px;\n    --font-weight-bold: 700;\n}\n",""]);const i=c},314:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,o,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<r.length;l++){var u=[].concat(r[l]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),t&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=t):u[4]="".concat(t)),e.push(u))}},e}},601:r=>{r.exports=function(r){return r[1]}},20:(r,e,n)=>{var o=n(155),t=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};e.jsx=function(r,e,n){var o,s={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)a.call(e,o)&&!i.hasOwnProperty(o)&&(s[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps)void 0===s[o]&&(s[o]=e[o]);return{$$typeof:t,type:r,key:l,ref:u,props:s,_owner:c.current}}},848:(r,e,n)=>{r.exports=n(20)},72:r=>{var e=[];function n(r){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===r){n=o;break}return n}function o(r,o){for(var a={},c=[],i=0;i<r.length;i++){var s=r[i],l=o.base?s[0]+o.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var y=t(f,o);o.byIndex=i,e.splice(i,0,{identifier:d,updater:y,references:1})}c.push(d)}return c}function t(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,t){var a=o(r=r||[],t=t||{});return function(r){r=r||[];for(var c=0;c<a.length;c++){var i=n(a[c]);e[i].references--}for(var s=o(r,t),l=0;l<a.length;l++){var u=n(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:r=>{var e={};r.exports=function(r,n){var o=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},56:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},825:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var t=void 0!==n.layer;t&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,t&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},113:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},155:e=>{e.exports=r}},n={};function o(r){var t=n[r];if(void 0!==t)return t.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,o),a.exports}o.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return o.d(e,{a:e}),e},o.d=(r,e)=>{for(var n in e)o.o(e,n)&&!o.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},o.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),o.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.nc=void 0;var t={};o.r(t),o.d(t,{Bouton:()=>O,Erreur:()=>S});var a=o(848),c=o(72),i=o.n(c),s=o(825),l=o.n(s),u=o(659),d=o.n(u),p=o(56),f=o.n(p),y=o(540),m=o.n(y),v=o(113),b=o.n(v),h=o(655),g={};g.styleTagTransform=b(),g.setAttributes=f(),g.insert=d().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=m(),i()(h.A,g),h.A&&h.A.locals&&h.A.locals;var x=function(){return x=Object.assign||function(r){for(var e,n=1,o=arguments.length;n<o;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r},x.apply(this,arguments)};const O=function(r){var e=r.children,n=r.variant,o=r.disabled,t=r.onClick,c="btn ".concat(n);return(0,a.jsx)("button",x({"aria-disabled":o,className:c,disabled:o,onClick:t},{children:e}))};var E=o(507),A={};A.styleTagTransform=b(),A.setAttributes=f(),A.insert=d().bind(null,"head"),A.domAPI=l(),A.insertStyleElement=m(),i()(E.A,A),E.A&&E.A.locals&&E.A.locals;var C=function(){return C=Object.assign||function(r){for(var e,n=1,o=arguments.length;n<o;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r},C.apply(this,arguments)},w=function(r,e){var n={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(n[o]=r[o]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(r);t<o.length;t++)e.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(r,o[t])&&(n[o[t]]=r[o[t]])}return n};function S(r){var e=r.children,n=w(r,["children"]);return e?(0,a.jsx)("p",C({className:"dsb-message--error mds-icon__error--left"},n,{children:e})):null}return t})()));