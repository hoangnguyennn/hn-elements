import{l as _,m as x,u as D,e as M,c as i,z as P,A as R,B as T,C as E,a as H,o as c}from"./vue.esm-bundler-IyFnVC7C.js";const I=["data-on","data-disabled","data-show-label"],K={key:0,class:"hn-switch--label"},z=["disabled"],q=_({name:"HnSwitch",__name:"switch",props:x({disabled:{type:Boolean},showLabel:{type:Boolean,default:!1},labelOn:{default:"On"},labelOff:{default:"Off"}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const a=D(d,"modelValue"),l=d,S=M(()=>a.value?l.labelOn:l.labelOff);return(s,r)=>(c(),i("div",{class:"hn-switch","data-on":a.value,"data-disabled":s.disabled,"data-show-label":s.showLabel},[s.showLabel?(c(),i("span",K,T(S.value),1)):P("",!0),R(H("input",{"onUpdate:modelValue":r[0]||(r[0]=N=>a.value=N),type:"checkbox",class:"hn-switch--input",disabled:s.disabled},null,8,z),[[E,a.value]])],8,I))}});q.__docgenInfo={exportName:"default",displayName:"switch",type:1,props:[{name:"disabled",global:!1,description:"Chỉ ra rằng switch có bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"showLabel",global:!1,description:"Chỉ ra rằng switch có hiển thị nhãn hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"labelOn",global:!1,description:"Nhãn hiển thị khi on.",tags:[{name:"default",text:"'On'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"On"'},{name:"labelOff",global:!1,description:"Nhãn hiển thị khi off.",tags:[{name:"default",text:"'Off'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Off"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: boolean | undefined]",signature:'(event: "update:modelValue", value: boolean | undefined): void',declarations:[],schema:[{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}]}],slots:[],exposed:[{name:"showLabel",type:"boolean",description:"Chỉ ra rằng switch có hiển thị nhãn hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"labelOn",type:"string",description:"Nhãn hiển thị khi on.",declarations:[],schema:"string"},{name:"labelOff",type:"string",description:"Nhãn hiển thị khi off.",declarations:[],schema:"string"},{name:"modelValue",type:"boolean | undefined",description:"",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng switch có bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/switch/switch.vue"};const F={title:"HnSwitch",component:q},t={parameters:{docs:{source:{code:"<hn-switch />"}}}},e={args:{showLabel:!0},parameters:{docs:{source:{code:"<hn-switch show-label />"}}}},n={args:{disabled:!0},parameters:{docs:{source:{code:"<hn-switch disabled />"}}}},o={args:{showLabel:!0,labelOn:"Bật",labelOff:"Tắt"},parameters:{docs:{source:{code:'<hn-switch show-label label-on="Bật" label-off="Tắt" />'}}}};var u,h,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<hn-switch />\`
      }
    }
  }
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,f,b,g,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-switch show-label />\`
      }
    }
  }
}`,...(b=(f=e.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Sử dụng prop `show-label` của `hn-switch` để hiển thị label của trạng thái hiện tại.",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var w,k,O,v,C;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-switch disabled />\`
      }
    }
  }
}`,...(O=(k=n.parameters)==null?void 0:k.docs)==null?void 0:O.source},description:{story:"Sử dụng prop `disabled` của `hn-switch` để vô hiệu hoá nó.",...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};var L,V,B;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    showLabel: true,
    labelOn: 'Bật',
    labelOff: 'Tắt'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-switch show-label label-on="Bật" label-off="Tắt" />\`
      }
    }
  }
}`,...(B=(V=o.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const U=["Cover","ShowLabel","Disabled","CustomLabel"];export{t as Cover,o as CustomLabel,n as Disabled,e as ShowLabel,U as __namedExportsOrder,F as default};
