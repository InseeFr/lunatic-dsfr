import{j as x}from"./jsx-runtime-Kowmy4gq.js";import{r as m,R as E}from"./index-CBqU2yxZ.js";import{u as q}from"./dsfr-CgbVGEXh.js";import{a as B,c as g,f as h}from"./index-CAmJLBaW.js";import{g as w}from"./link-CBxWA4Rh.js";import{s as A}from"./symToStr-Dpblx6Px.js";import{u as L}from"./useAnalyticsId-CxjkFw7q.js";var M=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.TERTIARY_NO_OUTLINE="tertiary no outline",e))(M||{});function R(e){return m.isValidElement(e)}var Y=function(e,o){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)o.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]]);return a};const p=m.memo(m.forwardRef((e,o)=>{var a,n;const{id:i,className:c,children:s,title:r,iconId:u,iconPosition:d="left",priority:f="primary",size:_="medium",linkProps:l,onClick:v,nativeButtonProps:t,disabled:y,type:b,style:N,value:C}=e,j=Y(e,["id","className","children","title","iconId","iconPosition","priority","size","linkProps","onClick","nativeButtonProps","disabled","type","style","value"]);B.assert();const k=L({defaultIdPrefix:"fr-button",explicitlyProvidedId:i}),{Link:V}=w(),O=g(h.cx("fr-btn",f!=="primary"&&`fr-btn--${f==="tertiary no outline"?"tertiary-no-outline":f}`,_!=="medium"&&`fr-btn--${(()=>{switch(_){case"small":return"sm";case"large":return"lg"}})()}`,...u===void 0?[]:[u,s!==void 0&&`fr-btn--icon-${d}`]),l!==void 0&&l.className,c);return l!==void 0?E.createElement(V,Object.assign({},l,{id:(a=i??l.id)!==null&&a!==void 0?a:k,title:r??l.title,className:g(l==null?void 0:l.className,O),style:Object.assign(Object.assign({},l==null?void 0:l.style),N),ref:o},j),s):E.createElement("button",Object.assign({},t,{id:(n=i??(t==null?void 0:t.id))!==null&&n!==void 0?n:k,className:g(t==null?void 0:t.className,O),style:Object.assign(Object.assign({},t==null?void 0:t.style),N),type:b??(t==null?void 0:t.type),title:r??(t==null?void 0:t.title),onClick:v??(t==null?void 0:t.onClick),disabled:y??(t==null?void 0:t.disabled),ref:o,value:C},j),s)}));p.displayName=A({Button:p});function P({children:e,disabled:o,className:a,priority:n="primary",onClick:i,type:c,value:s}){const r=m.useCallback(function(d){i&&(d.stopPropagation(),d.preventDefault(),i(d))},[i]),{cx:u}=q();return R(e)?x(p,{disabled:o,className:u("button-lunatic-dsfr",a),priority:n,onClick:r,type:c,value:s,children:e}):x(p,{disabled:o,className:u("button-lunatic-dsfr",a),priority:n,onClick:r,type:c,value:s,children:e})}try{P.displayName="Button",P.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},priority:{defaultValue:{value:"primary"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"tertiary no outline"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{P as B,M as a,p as b};
