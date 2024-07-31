import{O as y}from"./Orchestrator-DEYZj378.js";import"./index-9t-h-7t7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./i18n-C6wpSIzc.js";import"./inheritsLoose-Bp8pAaMb.js";const d={cleaning:{},suggesters:[{name:"L_PAYS-1-2-0",fields:[{name:"label",rules:["[\\w]+"],language:"French",min:3,stemmer:!1}],queryParser:{type:"tokenized",params:{language:"French",pattern:"[\\w.]+",min:3}},version:1}],components:[{componentType:"Suggester",response:{name:"VARIABLEPA"},optionResponses:[{name:"SUGGESTER_VARIABLEPA_LABEL",attribute:"label"}],storeName:"L_PAYS-1-2-0",conditionFilter:{type:"VTL",value:"true"},id:"lt4fjoev",page:"1",label:{type:"VTL|MD",value:'"➡ 2. " || "Variable Pays"'},mandatory:!1},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],variables:[{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"SUGGESTER_VARIABLEPA_LABEL"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"VARIABLEPA"}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"2"},D={cleaning:{},suggesters:[{name:"L_PAYS-1-2-0",fields:[{name:"label",rules:["[\\w]+"],language:"French",min:3,stemmer:!1}],queryParser:{type:"tokenized",params:{language:"French",pattern:"[\\w.]+",min:3}},version:1}],components:[{componentType:"Suggester",response:{name:"VARIABLEPA"},optionResponses:[{name:"SUGGESTER_VARIABLEPA_LABEL",attribute:"label"}],arbitrary:{response:{name:"PAYS_OTHER"}},storeName:"L_PAYS-1-2-0",conditionFilter:{type:"VTL",value:"true"},id:"lt4fjoev",page:"1",label:{type:"VTL|MD",value:'"➡ 2. " || "Variable Pays"'},mandatory:!1},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],variables:[{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"SUGGESTER_VARIABLEPA_LABEL"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"VARIABLEPA"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"PAYS_OTHER"}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"2"},g={id:"lyphhj89",label:{type:"VTL|MD",value:"DSFR  - tableaux dynamiques issue 1059"},modele:"DSFRCOMPOS",maxPage:"3",resizing:{},variables:[{name:"SUGG",values:{EDITED:[],FORCED:[],INPUTTED:[],PREVIOUS:[],COLLECTED:[]},dimension:1,variableType:"COLLECTED",iterationReference:"lsvppebo"},{name:"CA",values:{EDITED:[],FORCED:[],INPUTTED:[],PREVIOUS:[],COLLECTED:[]},dimension:1,variableType:"COLLECTED",iterationReference:"lsvppebo"},{name:"CA2",values:{EDITED:[],FORCED:[],INPUTTED:[],PREVIOUS:[],COLLECTED:[]},dimension:1,variableType:"COLLECTED",iterationReference:"lsvppebo"},{name:"QUELESTLEP",values:{EDITED:null,FORCED:null,INPUTTED:null,PREVIOUS:null,COLLECTED:null},dimension:0,variableType:"COLLECTED"},{name:"FILTER_RESULT_TABESTANP",expression:{type:"VTL",value:"true"},variableType:"CALCULATED"},{name:"FILTER_RESULT_SUGG_HORSTAB",expression:{type:"VTL",value:"true"},variableType:"CALCULATED"}],components:[{id:"question-lsvppebo",page:"1",label:{type:"VTL|MD",value:'"1\\. " || "Tableau dynamique type Estanp 10 lignes max"'},components:[{id:"lsvppebo",page:"2",lines:{max:{type:"VTL",value:"10"},min:{type:"VTL",value:"1"}},header:[{label:{type:"VTL|MD",value:'"Libellé produit via suggester"'}},{label:{type:"VTL|MD",value:'"Montant CA"'}},{label:{type:"VTL|MD",value:'"Montant CA export"'}}],controls:[{id:"lsvppebo-RDOP-lyphj3dg-format-borne-inf-sup",type:"SIMPLE",control:{type:"VTL",value:"not(not(isnull(CA)) and (0>CA or 100000<CA))"},criticality:"ERROR",errorMessage:{type:"VTL|MD",value:'" La valeur doit être comprise entre 0 et 100000."'},typeOfControl:"FORMAT"},{id:"lsvppebo-RDOP-lyphj3dg-format-decimal",type:"SIMPLE",control:{type:"VTL",value:"not(not(isnull(CA))  and round(CA,0)<>CA)"},criticality:"ERROR",errorMessage:{type:"VTL|MD",value:'"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."'},typeOfControl:"FORMAT"},{id:"lsvppebo-RDOP-lyphglrc-format-borne-inf-sup",type:"SIMPLE",control:{type:"VTL",value:"not(not(isnull(CA2)) and (0>CA2 or 100000<CA2))"},criticality:"ERROR",errorMessage:{type:"VTL|MD",value:'" La valeur doit être comprise entre 0 et 100000."'},typeOfControl:"FORMAT"},{id:"lsvppebo-RDOP-lyphglrc-format-decimal",type:"SIMPLE",control:{type:"VTL",value:"not(not(isnull(CA2))  and round(CA2,0)<>CA2)"},criticality:"ERROR",errorMessage:{type:"VTL|MD",value:'"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."'},typeOfControl:"FORMAT"}],mandatory:!1,components:[{id:"lsvppebo-RDOP-lyphsg13",response:{name:"SUGG"},storeName:"L_DECHETS",componentType:"Suggester"},{id:"lsvppebo-RDOP-lyphj3dg",max:1e5,min:0,unit:"k€",decimals:0,response:{name:"CA"},componentType:"InputNumber"},{id:"lsvppebo-RDOP-lyphglrc",max:1e5,min:0,unit:"k€",decimals:0,response:{name:"CA2"},componentType:"InputNumber"}],positioning:"HORIZONTAL",componentType:"RosterForLoop"}],declarations:[{id:"lyphddyi",label:{type:"VTL|MD",value:'"Tester la saisie de DEC et choisir vente de biens déchets de matières plastiques etc."'},position:"AFTER_QUESTION_TEXT",declarationType:"HELP"}],componentType:"Question",conditionFilter:{type:"VTL",value:"true"}},{id:"question-lxugy742",page:"2",label:{type:"VTL|MD",value:'"2\\. " || "Quel est le produit ?"'},components:[{id:"lxugy742",page:"3",response:{name:"QUELESTLEP"},mandatory:!1,storeName:"L_DECHETS",componentType:"Suggester"}],declarations:[{id:"lyphoyb2",label:{type:"VTL|MD",value:'"Tester la saisie de DEC"'},position:"AFTER_QUESTION_TEXT",declarationType:"HELP"}],componentType:"Question",conditionFilter:{type:"VTL",value:"true"}},{id:"lt72r9cn",page:"3",label:{type:"VTL|MD",value:'"II - " || "FIN"'},componentType:"Sequence",conditionFilter:{type:"VTL",value:"true"}}],pagination:"question",suggesters:[{name:"L_DECHETS",fields:[{min:3,name:"id",rules:["[\\w]+"],stemmer:!1,language:"French"},{min:3,name:"label",rules:["[\\w]+"],stemmer:!1,language:"French"},{min:3,name:"nc",rules:["[\\w]+"],stemmer:!1,language:"French"}],version:1,queryParser:{type:"tokenized",params:{min:3,pattern:"[\\w.]+",stemmer:!1,language:"French"}}}],componentType:"Questionnaire",enoCoreVersion:"3.23.8-SNAPSHOT",generatingDate:"17-07-2024 06:57:46",lunaticModelVersion:"3.12.0"},v={cleaning:{},maxPage:"2",suggesters:[{name:"L_PAYS-1-2-0",fields:[{name:"label",rules:["[\\w]+"],min:3}],queryParser:{type:"tokenized",params:{language:"French",pattern:"[\\w.]+",min:3}}}],variables:[{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"SUGGESTER_VARIABLEPA_LABEL"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"VARIABLEPA"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"SUG1_LABEL"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"SUG1"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"SUG2_LABEL"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"SUG2"}],components:[{componentType:"Question",id:"idQuestion",page:"1",label:{type:"VTL|MD",value:'"Label de la Question"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{componentType:"Suggester",response:{name:"VARIABLEPA"},optionResponses:[{name:"SUGGESTER_VARIABLEPA_LABEL",attribute:"label"}],storeName:"L_PAYS-1-2-0",conditionFilter:{type:"VTL",value:"true"},id:"lt4fjoev",mandatory:!1}]},{componentType:"Question",id:"idQuestion2",page:"2",label:{type:"VTL|MD",value:'"Question avec 2 composants Suggester"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{componentType:"Suggester",response:{name:"SUG1"},optionResponses:[{name:"SUG1_LABEL",attribute:"label"}],storeName:"L_PAYS-1-2-0",conditionFilter:{type:"VTL",value:"true"},id:"suggester1",label:{type:"VTL|MD",value:'"Label du composant Suggester 1"'},description:{type:"VTL|MD",value:'"Description du composant Suggester"'},mandatory:!1},{componentType:"Suggester",response:{name:"SUG2"},optionResponses:[{name:"SUG2_LABEL",attribute:"label"}],storeName:"L_PAYS-1-2-0",conditionFilter:{type:"VTL",value:"true"},id:"suggester1",label:{type:"VTL|MD",value:'"Label du composant Suggester 2"'},description:{type:"VTL|MD",value:'"Description du composant Suggester"'},mandatory:!1}]}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",id:"lsvuvtbg"},P={title:"Components/Suggester",component:y,args:{autoSuggesterLoading:!0},parameters:{docs:{description:{component:"The Suggester component is useful when users have many choices to select from. It helps them find options easily by suggesting matches as they type."}}},argTypes:{autoSuggesterLoading:{table:{disable:!1}}}},e={args:{source:d}},a={args:{source:D}},n={args:{source:g}},l={args:{source:v}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source
  }
} satisfies Story`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var r,i,u;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    source: arbitrarySource
  }
} satisfies Story`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,E,T;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: multilineSource
  }
} satisfies Story`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var m,L,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: questionSource
  }
} satisfies Story`,...(c=(L=l.parameters)==null?void 0:L.docs)==null?void 0:c.source}}};const I=["Default","Arbitrary","Multiline","Question"];export{a as Arbitrary,e as Default,n as Multiline,l as Question,I as __namedExportsOrder,P as default};
