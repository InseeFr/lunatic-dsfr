import{a as h}from"./_commonjsHelpers-BosuxZz1.js";import{R as f,r as j}from"./index-BwDkhjyp.js";import{a as b,i as m,c as p,f as O,b as v}from"./index-CjCjD4Ss.js";const y={},x=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),M=h(x);var k=function(t,s){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)s.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};let L=t=>{const s=t,{href:a}=s,e=k(s,["href"]);e:{if(a!=="#"||!("onClick"in e))break e;return b.assert(m(e)),f.createElement("button",Object.assign({},e,{className:p(O.cx("fr-link"),e.className)}))}return f.createElement("a",Object.assign({href:a},e))};function P(t){L=s=>{var a;{const e=s,{to:n,href:u}=e,o=k(e,["to","href"]),r=(a=typeof n=="string"?n:void 0)!==null&&a!==void 0?a:typeof u=="string"?u:void 0;e:{if(r!=="#"||!("onClick"in o))break e;return b.assert(m(o)),f.createElement("button",Object.assign({},o,{className:p(O.cx("fr-link"),o.className)}))}e:{if(r===void 0||!r.startsWith("//")&&!/^https?:\/\//.test(r))break e;return f.createElement("a",Object.assign({href:r,target:"_blank",rel:"noreferrer"},o))}e:{if(r===void 0||!r.startsWith("#"))break e;return f.createElement("a",Object.assign({href:r},o))}e:{if(r===void 0||!/^[a-z]+:/.test(r))break e;return f.createElement("a",Object.assign({href:r},o))}}return f.createElement(t.Link,Object.assign({},s))}}function S(){return{Link:L}}function E(t){const{languages:s,languageLike:a}=t;e:{const e=s.find(n=>n.toLowerCase()===a.toLowerCase());if(e===void 0)break e;return e}e:{const e=a.split("-")[0].toLowerCase(),n=s.find(u=>u.toLowerCase().includes(e));if(n===void 0)break e;return n}}let _=()=>"fr";function T(t){_=t.useLang}function w(){return _()}function z(t){const{componentName:s,frMessages:a}=t,e={fr:a};function n(){const o=w(),r=j.useMemo(()=>{const i=E({languages:Object.keys(e),languageLike:o});return i??"fr"},[o]);function g(i,d){var c;const l=(c=e[r][i])!==null&&c!==void 0?c:e.fr[i];return d===void 0?l:l(d)}return{t:g}}function u(o){const{lang:r,messages:g}=o;Object.entries(g).filter(([,i])=>i!==void 0).forEach(([i,d])=>{var c,l;return((c=(l=e)[r])!==null&&c!==void 0?c:l[r]={})[i]=d})}return{useTranslation:n,[`add${v(s)}Translations`]:u}}export{T as a,z as c,y as f,S as g,M as r,P as s};
