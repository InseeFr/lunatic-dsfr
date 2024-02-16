import{j as u}from"./jsx-runtime-Kowmy4gq.js";import{O as p}from"./Orchestrator-BcYNvlxf.js";import{d as c}from"./symToStr-Dpblx6Px.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./i18n-CBtZ6Qo0.js";import"./index-CAmJLBaW.js";import"./InputNumber-Ch7LxBnC.js";import"./Input-DreL468e.js";import"./getErrorStates-C-Ngk_mI.js";import"./dsfr-CgbVGEXh.js";import"./index-BtM5VmRH.js";import"./useAnalyticsId-CxjkFw7q.js";import"./themeStringToVariable-CnhZ9Cns.js";import"./extends-CCbyfPlC.js";import"./Button-BhnrHfox.js";import"./link-CBxWA4Rh.js";import"./CheckboxGroup-D_E-yJIR.js";import"./Fieldset-H2HSfB_G.js";import"./Dropdown-De2ygptg.js";import"./Input-DKQKyRDo.js";import"./Radio-C7TIQkhO.js";const T="2",m=[{id:"checkboxgroup",componentType:"CheckboxGroup",mandatory:!1,page:"1",label:{value:'"Which of these cities are in France?"',type:"VTL|MD"},description:'"If you select a city that is not in France, an error will appear!"',conditionFilter:{value:"true",type:"VTL"},controls:[{id:"checkboxgroup",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:"OPT3 = false or isnull(OPT3)",type:"VTL"},errorMessage:{value:'"Take another guess"',type:"VTL|MD"},bindingDependencies:["OPT3"]}],responses:[{id:"opt1",description:{value:'"Paris is the capital city!"',type:"VTL|MD"},label:{value:'"Paris"',type:"VTL|MD"},response:{name:"OPT1"}},{id:"opt2",description:{value:'"Bordeaux is where you can find great wine!"',type:"VTL|MD"},label:{value:'"Bordeaux"',type:"VTL|MD"},response:{name:"OPT2"}},{id:"opt3",description:{value:'"There is great Swiss chocolate in Geneva"',type:"VTL|MD"},label:{value:'"Geneva"',type:"VTL|MD"},response:{name:"OPT3"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Bye!"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2",questionInformation:{value:'"Question Information"',type:"VTL|MD"},questionContext:{value:'"Question Context"',type:"VTL|MD"}}],d=[{variableType:"COLLECTED",name:"OPT1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"OPT2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"OPT3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],D={maxPage:T,components:m,variables:d},E="2",y=[{id:"checkboxgroup",componentType:"CheckboxGroup",mandatory:!1,page:"1",label:{value:'"Checkbox label"',type:"VTL|MD"},description:'"Checkbox description (non mandatory)"',conditionFilter:{value:"true",type:"VTL"},controls:[{id:"checkboxgroup",typeOfControl:"CONSISTENCY",criticality:"WARN",control:{value:"OPT3 = false or isnull(OPT3)",type:"VTL"},errorMessage:{value:'"Take another guess"',type:"VTL|MD"},bindingDependencies:["OPT3"]}],responses:[{id:"opt1",description:{value:'"Option description (non mandatory)"',type:"VTL|MD"},label:{value:'"Option label"',type:"VTL|MD"},response:{name:"OPT1"}},{id:"opt2",description:{value:'"Option description (non mandatory)"',type:"VTL|MD"},label:{value:'"Option label"',type:"VTL|MD"},response:{name:"OPT2"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Sequence label"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],O=[{variableType:"COLLECTED",name:"OPT1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"OPT2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"OPT3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],L={maxPage:E,components:y,variables:O},C={},j={title:"Orchestrated Components/CheckboxGroup",component:p,argTypes:c,args:{source:D,data:C}},e={render:n=>(console.log(n),u(p,{...n})),parameters:{docs:{description:{story:"This component should be used when you want the user to be able to select one or multiple answers."}}}},o={args:{source:L}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    console.log(args);
    return <Orchestrator {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "This component should be used when you want the user to be able to select one or multiple answers."
      }
    }
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var l,s,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: sourceSkeleton
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Q=["Default","Skeleton"];export{e as Default,o as Skeleton,Q as __namedExportsOrder,j as default};
