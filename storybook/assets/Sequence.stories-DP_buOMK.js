import{O as r}from"./Orchestrator-nctjbd9j.js";import"./inheritsLoose-72Xsdem2.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./i18n-BSio4brK.js";import"./index-CjCjD4Ss.js";const p={cleaning:{},variables:[{variableType:"COLLECTED",name:"TESTTEXTE",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}}],components:[{id:"seq",componentType:"Sequence",label:{value:'"Sequence label"',type:"VTL|MD"},description:{value:'"Sequence description"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1",declarations:[{declarationType:"INSTRUCTION",id:"jruq5os5-kqhuxnyt",label:{type:"VTL|MD",value:'"declaration instruction after label! "'},position:"AFTER_QUESTION_TEXT"},{declarationType:"INSTRUCTION",id:"jruq5os5-kqhfdsfdsuxnyt",label:{type:"VTL|MD",value:'"declaration instruction before label"'},position:"BEFORE_QUESTION_TEXT"}]},{componentType:"Question",id:"idQuestion",page:"1",label:{type:"VTL|MD",value:'"Label de la Question"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{componentType:"Input",bindingDependencies:["TESTTEXTE"],response:{name:"TESTTEXTE"},conditionFilter:{type:"VTL",value:"true"},id:"kfxn6f16",page:"1",label:{type:"VTL|MD",value:'"Label du composant (Input ici)"'},description:{type:"VTL|MD",value:'"Description du composant"'},mandatory:!1,maxLength:15}]},{id:"seq",componentType:"Sequence",label:{value:'"Sequence label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],pagination:"question",resizing:{},label:{type:"VTL",value:'"Example Sequence"'},lunaticModelVersion:"2.2.13",modele:"SEQUENCE",enoCoreVersion:"2.3.10",generatingDate:"05-09-2022 14:37:43",missing:!1,id:"l7ovbqou",maxPage:"2"},u={cleaning:{},components:[{id:"seq",componentType:"Sequence",label:{value:'"Sequence label"',type:"VTL|MD"},description:{value:'"Sequence description"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1",declarations:[{declarationType:"INSTRUCTION",id:"jruq5os5-kqhuxnyt",label:{type:"VTL|MD",value:'"declaration instruction after label! "'},position:"AFTER_QUESTION_TEXT"},{declarationType:"INSTRUCTION",id:"jruq5os5-kqhfdsfdsuxnyt",label:{type:"VTL|MD",value:'"declaration instruction before label"'},position:"BEFORE_QUESTION_TEXT"}]},{id:"seq",componentType:"Sequence",label:{value:'"Sequence label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],variables:[],pagination:"question",resizing:{},label:{type:"VTL",value:'"Example Sequence"'},lunaticModelVersion:"2.2.13",modele:"SEQUENCE",enoCoreVersion:"2.3.10",generatingDate:"05-09-2022 14:37:43",missing:!1,id:"l7ovbqou",maxPage:"2"},b={title:"Components/Sequence",component:r},e={args:{source:u}},n={args:{source:p}};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source
  }
} satisfies Story`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var i,l,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: questionSource
  }
} satisfies Story`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const L=["Default","Question"];export{e as Default,n as Question,L as __namedExportsOrder,b as default};
