import{O as m}from"./Orchestrator-BcYNvlxf.js";import{d as L}from"./symToStr-Dpblx6Px.js";import"./jsx-runtime-Kowmy4gq.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./i18n-CBtZ6Qo0.js";import"./index-CAmJLBaW.js";import"./InputNumber-Ch7LxBnC.js";import"./Input-DreL468e.js";import"./getErrorStates-C-Ngk_mI.js";import"./dsfr-CgbVGEXh.js";import"./index-BtM5VmRH.js";import"./useAnalyticsId-CxjkFw7q.js";import"./themeStringToVariable-CnhZ9Cns.js";import"./extends-CCbyfPlC.js";import"./Button-BhnrHfox.js";import"./link-CBxWA4Rh.js";import"./CheckboxGroup-D_E-yJIR.js";import"./Fieldset-H2HSfB_G.js";import"./Dropdown-De2ygptg.js";import"./Input-DKQKyRDo.js";import"./Radio-C7TIQkhO.js";const d={NB_HAB:{EDITED:null,FORCED:null,INPUTED:null,PREVIOUS:null,COLLECTED:4},PRENOMS:{EDITED:[null],FORCED:[null],INPUTED:[null],PREVIOUS:[null],COLLECTED:["Pierre","Louise","Maxime","Spongebob"]},NOMS:{EDITED:[null],FORCED:[null],INPUTED:[null],PREVIOUS:[null],COLLECTED:["Dupont","Dupont","Dupont","Squarepants"]},AGES:{EDITED:[null],FORCED:[null],INPUTED:[null],PREVIOUS:[null],COLLECTED:["30","35","12","99"]},RESIDENTS:{EDITED:[null],FORCED:[null],INPUTED:[null],PREVIOUS:[null],COLLECTED:["1","1","1","2"]}},a={COLLECTED:d},c="5",y=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"2",min:0,max:10,decimals:0,label:{value:'"Combien de personnes vivent habituellement à votre adresse ?"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NB_HAB"}},{id:"kmnolkxb",componentType:"Loop",page:"3",depth:1,paginatedLoop:!1,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["NHAB"],lines:{min:{value:"NB_HAB",type:"VTL"},max:{value:"NB_HAB",type:"VTL"}},components:[{id:"kmno1n7m1",componentType:"Input",mandatory:!1,maxLength:20,label:{value:'"Prénom"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"PRENOMS"}},{id:"kmno1n7m2",componentType:"Input",mandatory:!1,maxLength:20,label:{value:'"Nom de famille"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NOMS"}},{id:"kmno1n7m3",componentType:"InputNumber",mandatory:!1,maxLength:20,label:{value:'"Age"))',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"AGES"}},{id:"kmno1n7m4",componentType:"Radio",mandatory:!1,label:{value:'"Resident"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",label:{value:'"Oui"',type:"VTL"}},{value:"2",label:{value:'"Non"',type:"VTL"}}],response:{name:"RESIDENTS"}}]},{id:"roundabout",componentType:"Roundabout",page:"4",conditionFilter:{value:"true",type:"VTL"},iterations:{value:"NB_HAB",type:"VTL"},label:{value:'"Les questionnaires individuels"',type:"VTL"},locked:!0,expressions:{complete:{value:"not(isnull(COLOR)) and not(isnull(SEXE)) and not(isnull(SOMETHING))",type:"VTL"},partial:{value:"not(isnull(COLOR)) or not(isnull(SEXE)) or not(isnull(SOMETHING))",type:"VTL"},unnecessary:{value:'if (AGES < "14") or (RESIDENTS = "2") then (PRENOMS || " " || NOMS ||if AGES < "14" then " n’a pas à compléter de questionnaire individuel car il est âgé de moins de 14 ans." else " n’a pas à compléter de questionnaire individuel car il n’est pas catégoriser comme un résident permanent de ce logement.") else ""',type:"VTL"},label:{value:'PRENOMS || " " || NOMS',type:"VTL"}},components:[{id:"jsygk7m7",componentType:"Subsequence",page:"4.1",label:{value:'"Première page de questions pour " || PRENOMS',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"kmno1n7m",componentType:"Input",maxLength:3,page:"4.1",label:{value:'"colour?"))',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"COLOR"}},{id:"jsygk7m7",componentType:"Subsequence",page:"4.2",label:{value:'"Deuxième page de questions pour "|| PRENOMS',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"sexe",componentType:"Radio",page:"4.2",label:{value:'"Sexe"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",label:{value:'"Homme"',type:"VTL"}},{value:"2",label:{value:'"Femme"',type:"VTL"}}],response:{name:"SEXE"}},{id:"jsygk7m7",componentType:"Subsequence",page:"4.3",label:{value:'"Troisième page de questions " || PRENOMS',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"kmno1n7m",componentType:"Input",maxLength:30,page:"4.3",label:{value:'"Dites quelque chose."))',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"SOMETHING"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Merci !"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"5"}],v=[{variableType:"COLLECTED",name:"NB_HAB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"SOMETHING",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"COLOR",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"SEXE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"PRENOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"NOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGES",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"RESIDENTS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"CALCULATED",name:"PRENOMREF",expression:{value:"first_value(PRENOMS over())",type:"VTL"},bindingDependencies:["PRENOMS"],inFilter:"true"}],D={NB_HAB:{size:"NB_HAB",variables:["PRENOMS","COLOR","SEXE","SOMETHING"]}},O={maxPage:c,components:y,variables:v,resizing:D},b="5",C=[{id:"seq",componentType:"Sequence",label:{value:'"Sequence label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"2",min:0,max:10,decimals:0,label:{value:'"InputNumber label"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NB_HAB"}},{id:"kmnolkxb",componentType:"Loop",page:"3",depth:1,paginatedLoop:!1,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["NHAB"],lines:{min:{value:"NB_HAB",type:"VTL"},max:{value:"NB_HAB",type:"VTL"}},components:[{id:"kmno1n7m1",componentType:"Input",mandatory:!1,maxLength:20,label:{value:'"Input label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"PRENOMS"}},{id:"kmno1n7m2",componentType:"Input",mandatory:!1,maxLength:20,label:{value:'"Input label"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NOMS"}},{id:"kmno1n7m3",componentType:"InputNumber",mandatory:!1,maxLength:20,label:{value:'"Input label"))',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"AGES"}},{id:"kmno1n7m4",componentType:"Radio",mandatory:!1,label:{value:'"Radio label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",label:{value:'"Radio option label"',type:"VTL"}},{value:"2",label:{value:'"Radio option label"',type:"VTL"}}],response:{name:"RESIDENTS"}}]},{id:"roundabout",componentType:"Roundabout",page:"4",conditionFilter:{value:"true",type:"VTL"},iterations:{value:"NB_HAB",type:"VTL"},label:{value:'"Roundabout label"',type:"VTL"},locked:!0,expressions:{complete:{value:"not(isnull(COLOR)) and not(isnull(SEXE)) and not(isnull(SOMETHING))",type:"VTL"},partial:{value:"not(isnull(COLOR)) or not(isnull(SEXE)) or not(isnull(SOMETHING))",type:"VTL"},unnecessary:{value:'if (AGES < "14") then "Roundabout unnecessary label" else ""',type:"VTL"},label:{value:"Roundabout expression label",type:"VTL"}},components:[{id:"jsygk7m7",componentType:"Subsequence",page:"4.1",label:{value:'"Subsequence label " || PRENOMS',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"kmno1n7m",componentType:"Input",maxLength:3,page:"4.1",label:{value:'"Input label"))',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"COLOR"}},{id:"jsygk7m7",componentType:"Subsequence",page:"4.2",label:{value:'"Subsequence label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"sexe",componentType:"Radio",page:"4.2",label:{value:'"Radio label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",label:{value:'"Radio option label"',type:"VTL"}},{value:"2",label:{value:'"Radio option label"',type:"VTL"}}],response:{name:"SEXE"}},{id:"jsygk7m7",componentType:"Subsequence",page:"4.3",label:{value:'"Subsequence label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"kmno1n7m",componentType:"Input",maxLength:30,page:"4.3",label:{value:'"Input label"))',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"SOMETHING"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Subsequence label"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"5"}],S=[{variableType:"COLLECTED",name:"NB_HAB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"SOMETHING",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"COLOR",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"SEXE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"PRENOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"NOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGES",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"RESIDENTS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"CALCULATED",name:"PRENOMREF",expression:{value:"first_value(PRENOMS over())",type:"VTL"},bindingDependencies:["PRENOMS"],inFilter:"true"}],V={NB_HAB:{size:"NB_HAB",variables:["PRENOMS","COLOR","SEXE","SOMETHING"]}},I={maxPage:b,components:C,variables:S,resizing:V},R="5",N=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"2",min:0,max:10,decimals:0,label:{value:'"Combien de personnes vivent habituellement à votre adresse ?"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NB_HAB"}},{id:"kmnolkxb",componentType:"Loop",page:"3",depth:1,paginatedLoop:!1,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["NHAB"],lines:{min:{value:"NB_HAB",type:"VTL"},max:{value:"NB_HAB",type:"VTL"}},components:[{id:"kmno1n7m1",componentType:"Input",mandatory:!1,maxLength:20,label:{value:'"Prénom"))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"PRENOMS"}},{id:"kmno1n7m2",componentType:"Input",mandatory:!1,maxLength:20,label:{value:'"Nom de famille"))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NOMS"}},{id:"kmno1n7m3",componentType:"InputNumber",mandatory:!1,maxLength:20,label:{value:'"Age"))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"AGES"}},{id:"kmno1n7m4",componentType:"Radio",mandatory:!1,label:{value:'"Resident"))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",label:{value:'"Oui"',type:"VTL|MD"}},{value:"2",label:{value:'"Non"',type:"VTL|MD"}}],response:{name:"RESIDENTS"}}]},{id:"roundabout",componentType:"Roundabout",page:"4",conditionFilter:{value:"true",type:"VTL"},iterations:{value:"NB_HAB",type:"VTL"},label:{value:'"Les questionnaires individuels"',type:"VTL"},locked:!1,expressions:{complete:{value:"not(isnull(COLOR)) and not(isnull(SEXE)) and not(isnull(SOMETHING))",type:"VTL"},partial:{value:"not(isnull(COLOR)) or not(isnull(SEXE)) or not(isnull(SOMETHING))",type:"VTL"},unnecessary:{value:'if (AGES < "14") or (RESIDENTS = "2") then (PRENOMS || " " || NOMS ||if AGES < "14" then " n’a pas à compléter de questionnaire individuel car il est âgé de moins de 14 ans." else " n’a pas à compléter de questionnaire individuel car il n’est pas catégoriser comme un résident permanent de ce logement.") else ""',type:"VTL"},label:{value:'PRENOMS || " " || NOMS',type:"VTL"}},components:[{id:"jsygk7m7",componentType:"Subsequence",page:"4.1",label:{value:'"Première page de questions pour " || PRENOMS',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"kmno1n7m",componentType:"Input",maxLength:3,page:"4.1",label:{value:'"colour?"))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"COLOR"}},{id:"jsygk7m7",componentType:"Subsequence",page:"4.2",label:{value:'"Deuxième page de questions pour "|| PRENOMS',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"sexe",componentType:"Radio",page:"4.2",label:{value:'"Sexe"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",label:{value:'"Homme"',type:"VTL|MD"}},{value:"2",label:{value:'"Femme"',type:"VTL|MD"}}],response:{name:"SEXE"}},{id:"jsygk7m7",componentType:"Subsequence",page:"4.3",label:{value:'"Troisième page de questions " || PRENOMS',type:"VTL"},conditionFilter:{value:"true",type:"VTL"}},{id:"kmno1n7m",componentType:"Input",maxLength:30,page:"4.3",label:{value:'"Dites quelque chose."))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"SOMETHING"}}]},{id:"seq",componentType:"Sequence",label:{value:'"Merci !"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"5"}],g=[{variableType:"COLLECTED",name:"NB_HAB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"SOMETHING",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"COLOR",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"SEXE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"PRENOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"NOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGES",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"RESIDENTS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"CALCULATED",name:"PRENOMREF",expression:{value:"first_value(PRENOMS over())",type:"VTL"},bindingDependencies:["PRENOMS"],inFilter:"true"}],P={NB_HAB:{size:"NB_HAB",variables:["PRENOMS","COLOR","SEXE","SOMETHING"]}},F={maxPage:R,components:N,variables:g,resizing:P},ee={title:"Orchestrated Components/Roundabout",component:m,argTypes:L,parameters:{docs:{description:{story:"This component allows you to give additional information to the user on why we are asking him a question. Users like to know why they should give an information and how it will be used. In an orchestrator, it would be displayed after the continue button and before the footer so it doesn't interfer with the form if the user doesn't want to read it."}}}},e={parameters:{docs:{description:{story:"If the locked props is set to true then the user cannot reenter in an iteration that has been completed."}}},args:{source:O,data:a}},n={parameters:{docs:{description:{story:"If the locked props is set to false then the user can reenter in an iteration even if it has already been completed."}}},args:{source:F,data:a}},l={args:{source:I,data:a}};var t,o,u;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "If the locked props is set to true then the user cannot reenter in an iteration that has been completed."
      }
    }
  },
  args: {
    source: source,
    data: data
  }
}`,...(u=(o=e.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var i,p,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "If the locked props is set to false then the user can reenter in an iteration even if it has already been completed."
      }
    }
  },
  args: {
    source: source1,
    data: data
  }
}`,...(s=(p=n.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var r,E,T;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    source: sourceSkeleton,
    data: data
  }
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const ne=["RoundaboutWithLockedSetToTrue","RoundaboutWithLockedSetToFalse","Skeleton"];export{n as RoundaboutWithLockedSetToFalse,e as RoundaboutWithLockedSetToTrue,l as Skeleton,ne as __namedExportsOrder,ee as default};
