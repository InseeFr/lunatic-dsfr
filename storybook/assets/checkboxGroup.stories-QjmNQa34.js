import{O as C}from"./Orchestrator-B0CNxFVp.js";import"./inheritsLoose-72Xsdem2.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./i18n-BSio4brK.js";import"./index-CjCjD4Ss.js";const I={cleaning:{},components:[{id:"checkboxgroup",componentType:"CheckboxGroup",mandatory:!1,page:"1",label:{value:'"Which of these cities are in France?"',type:"VTL|MD"},description:{value:'"If you select a city that is not in France, an error will appear!"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},controls:[{id:"checkboxgroup",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:"OPT3 = false or isnull(OPT3)",type:"VTL"},errorMessage:{value:'"Take another guess"',type:"VTL|MD"},bindingDependencies:["OPT3"]}],responses:[{id:"opt1",description:{value:'"Paris is the capital city!"',type:"VTL|MD"},label:{value:'"Paris"',type:"VTL|MD"},response:{name:"OPT1"}},{id:"opt2",description:{value:'"Bordeaux is where you can find great wine!"',type:"VTL|MD"},label:{value:'"Bordeaux"',type:"VTL|MD"},response:{name:"OPT2"}},{id:"opt3",description:{value:'"There is great Swiss chocolate in Geneva"',type:"VTL|MD"},label:{value:'"Geneva"',type:"VTL|MD"},response:{name:"OPT3"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],variables:[{variableType:"COLLECTED",name:"OPT1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"OPT2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"OPT3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",missing:!1,id:"lsvuvtbg",maxPage:"2"},c={cleaning:{},maxPage:"2",variables:[{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"OPT1"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"OPT2"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"OPT3"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"OPT_1"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"OPT_2"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"OPT_3"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTTED:null,FORCED:null,PREVIOUS:null},name:"NAME"}],components:[{componentType:"Question",id:"idQuestion",page:"1",label:{type:"VTL|MD",value:'"Label de la Question"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{id:"checkboxgroup",componentType:"CheckboxGroup",mandatory:!1,conditionFilter:{value:"true",type:"VTL"},responses:[{id:"opt1",description:{value:`"Description de l'option 1"`,type:"VTL|MD"},label:{value:`"Label de l'option 1"`,type:"VTL|MD"},response:{name:"OPT1"}},{id:"opt2",description:{value:`"Description de l'option 2"`,type:"VTL|MD"},label:{value:`"Label de l'option 2"`,type:"VTL|MD"},response:{name:"OPT2"}},{id:"opt3",description:{value:`"Description de l'option 3"`,type:"VTL|MD"},label:{value:`"Label de l'option 3"`,type:"VTL|MD"},response:{name:"OPT3"}}]}]},{componentType:"Question",id:"idQuestion2",page:"2",label:{type:"VTL|MD",value:'"Question avec 2 Composants (CheckboxGroup et Input)"'},description:{type:"VTL|MD",value:'"Description de la question"'},declarations:[{declarationType:"HELP",id:"idQuestion-help1",label:{type:"VTL|MD",value:'"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"'},position:"BEFORE_QUESTION_TEXT"},{declarationType:"HELP",id:"idQuestion-help3",label:{type:"VTL|MD",value:'"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"'},position:"AFTER_QUESTION_TEXT"}],components:[{id:"checkboxgroup1",componentType:"CheckboxGroup",mandatory:!1,label:{value:'"Label du composant CheckboxGroup"',type:"VTL|MD"},description:{value:'"Description du composant CheckboxGroup"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},responses:[{id:"opt1",description:{value:`"Description de l'option 1"`,type:"VTL|MD"},label:{value:`"Label de l'option 1"`,type:"VTL|MD"},response:{name:"OPT_1"}},{id:"opt2",description:{value:`"Description de l'option 2"`,type:"VTL|MD"},label:{value:`"Label de l'option 2"`,type:"VTL|MD"},response:{name:"OPT_2"}},{id:"opt3",description:{value:`"Description de l'option 3"`,type:"VTL|MD"},label:{value:`"Label de l'option 3"`,type:"VTL|MD"},response:{name:"OPT_3"}}]},{componentType:"Input",label:{value:`"What's your name?"`,type:"VTL|MD"},description:{value:'"No more than 30 characters"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"input1",response:{name:"NAME"}}]}],pagination:"question",resizing:{},label:{type:"VTL|MD",value:"Test-Dylan"},lunaticModelVersion:"2.5.0",modele:"TESTDYLAN",enoCoreVersion:"2.7.1",generatingDate:"06-03-2024 12:46:44",id:"lsvuvtbg"},m={components:[{id:"checkboxbooleanGroupNumeric",componentType:"CheckboxGroup",page:"1",label:{value:"Situation matrimoniale",type:"TXT"},missingResponse:{name:"SITUMATRI_MISSING"},responses:[{id:"kmort6x9-QOP-kmosa98y",label:{value:"Française de naissance ou par réintégration",type:"TXT"},response:{name:"NATIO1N1"}},{id:"kmort6x9-QOP-kmos360k",label:{value:'"Française par déclaration, naturalisation, option à la majorité"',type:"VTL"},response:{name:"NATIO1N2"}},{id:"kmort6x9-QOP-kmos37e1",label:{value:"Étrangère",type:"TXT"},response:{name:"NATIO1N3"}},{id:"kmort6x9-QOP-kmorue9c",label:{value:"Apatride (pas de nationalité)",type:"TXT"},response:{name:"NATIO1N4"}},{id:"kmort6x9-QOP-kmorue9d",label:{value:"Autre",type:"TXT"},description:{value:"description",type:"TXT"},response:{name:"NATIO1N_OTHER"},detail:{label:{value:'"Préciser : "',type:"VTL"},response:{name:"NATIO1N_DETAIL"}}}]},{id:"end",componentType:"Sequence",page:"2",label:{value:"FIN",type:"TXT"}}],maxPage:"2",variables:[{variableType:"COLLECTED",name:"NATIO1N1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N4",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS4",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS5",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS6",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS7",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS8",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS9",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS10",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS11",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS12",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N_OTHER",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N_DETAIL",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}}]},v={components:[{id:"checkboxbooleanGroupNumeric",componentType:"CheckboxGroup",page:"1",orientation:"horizontal",label:{value:"Situation matrimoniale",type:"TXT"},missingResponse:{name:"SITUMATRI_MISSING"},responses:[{id:"kmort6x9-QOP-kmosa98y",label:{value:"Française de naissance ou par réintégration",type:"TXT"},response:{name:"NATIO1N1"}},{id:"kmort6x9-QOP-kmos360k",label:{value:'"Française par déclaration, naturalisation, option à la majorité"',type:"VTL"},response:{name:"NATIO1N2"}},{id:"kmort6x9-QOP-kmos37e1",label:{value:"Étrangère",type:"TXT"},response:{name:"NATIO1N3"}},{id:"kmort6x9-QOP-kmorue9c",label:{value:"Apatride (pas de nationalité)",type:"TXT"},response:{name:"NATIO1N4"}},{id:"kmort6x9-QOP-kmorue9d",label:{value:"Autre",type:"TXT"},description:{value:"description",type:"TXT"},response:{name:"NATIO1N_OTHER"},detail:{label:{value:'"Préciser : "',type:"VTL"},response:{name:"NATIO1N_DETAIL"}}}]},{id:"end",componentType:"Sequence",page:"2",label:{value:"FIN",type:"TXT"}}],maxPage:"2",variables:[{variableType:"COLLECTED",name:"NATIO1N1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N4",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS4",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS5",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS6",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS7",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS8",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS9",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS10",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS11",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"MOIS12",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N_OTHER",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}},{variableType:"COLLECTED",name:"NATIO1N_DETAIL",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTTED:null}}]},U={title:"Components/CheckboxGroup",component:C,parameters:{docs:{description:{component:"The CheckboxGroup component provides a way for users to select one or multiple answers from a list of options."}}}},l={args:{source:I}},e={args:{source:m}},n={args:{source:v}},a={args:{source:c}};var E,T,u;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    source
  }
} satisfies Story`,...(u=(T=l.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    source: arbitrarySource
  }
} satisfies Story`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var t,s,D;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source: horizontalSource
  }
} satisfies Story`,...(D=(s=n.parameters)==null?void 0:s.docs)==null?void 0:D.source}}};var p,O,L;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: questionSource
  }
} satisfies Story`,...(L=(O=a.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const V=["Default","Arbitrary","Horizontal","Question"];export{e as Arbitrary,l as Default,n as Horizontal,a as Question,V as __namedExportsOrder,U as default};
