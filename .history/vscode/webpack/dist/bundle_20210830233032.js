(()=>{var e={305:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();n.ins=function(e,n){return e*n},n.name="xiaoming",n.sum=function(e,n){return e+n},n.Person=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,[{key:"run",value:function(){console.log("run")}}]),e}(),n.default="杭州市"},985:(e,n,t)=>{n=e.exports=t(645)(!1);var r=t(77)(t(869));n.push([e.id,"body {\n  font-size: 50px;\n  color: #fff;\n  text-align: center;\n  line-height: 100vh;\n  margin: 0 auto;\n  background: url("+r+") no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n",""])},58:(e,n,t)=>{(e.exports=t(645)(!1)).push([e.id,"*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody{\r\n  background-color: aqua;\r\n}",""])},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,r=e[1]||"",o=e[3];if(!o)return r;if(n&&"function"==typeof btoa){var i=(t=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"),a=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},77:e=>{"use strict";e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},106:(e,n,t)=>{var r=t(985);"string"==typeof r&&(r=[[e.id,r,""]]);t(379)(r,{insert:"head",singleton:!1}),r.locals&&(e.exports=r.locals)},720:(e,n,t)=>{var r=t(58);"string"==typeof r&&(r=[[e.id,r,""]]);t(379)(r,{insert:"head",singleton:!1}),r.locals&&(e.exports=r.locals)},379:(e,n,t)=>{"use strict";var r,o={},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function a(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function s(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],n))}else{for(var s=[];a<r.parts.length;a++)s.push(v(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var c,l=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,h=0;function v(e,n){var t,r,o;if(n.singleton){var i=h++;t=d||(d=u(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(e,n);return s(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var u=t[i],c=o[u.id];c&&(c.refs--,r.push(c))}e&&s(a(e,n),n);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}},869:(e,n,t)=>{e.exports=t.p+"img/windows11.d96e9146.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.p="dist/",(()=>{"use strict";var e=t(305),n=e.name,r=e.sum;console.log(n),console.log(r(265,23)),t(720),t(106),t(869)})()})();