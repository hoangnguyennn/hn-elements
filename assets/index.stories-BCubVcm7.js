import{l as R,u as T,e as o,c as m,x as $,y as E,z as H,A as K,a as j,n as z,B as f,o as p}from"./vue.esm-bundler-CcATLbJj.js";const A=["data-on","data-disabled","data-show-label"],F=["disabled","aria-label","aria-describedby","aria-labelledby","aria-checked"],D=R({name:"HnSwitch",__name:"switch",props:z({disabled:{type:Boolean},showLabel:{type:Boolean,default:!1},labelOn:{default:"On"},labelOff:{default:"Off"},ariaLabel:{},hint:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const n=T(r,"modelValue"),t=r,l=o(()=>n.value?t.labelOn:t.labelOff),c=`hn-switch-${f()}`,u=`hn-switch-label-${f()}`,I=o(()=>t.ariaLabel||`Chuyển đổi ${l.value}`),M=o(()=>{const e=[];return t.hint&&e.push(`hn-switch-hint-${c}`),e.length>0?e.join(" "):void 0});return(e,h)=>(p(),m("div",{class:"hn-switch","data-on":n.value,"data-disabled":e.disabled,"data-show-label":e.showLabel},[e.showLabel?(p(),m("span",{key:0,id:u,class:"hn-switch--label"},$(l.value),1)):E("",!0),H(j("input",{"onUpdate:modelValue":h[0]||(h[0]=P=>n.value=P),type:"checkbox",class:"hn-switch--input",id:c,disabled:e.disabled,"aria-label":I.value,"aria-describedby":M.value,"aria-labelledby":e.showLabel?u:void 0,role:"switch","aria-checked":n.value},null,8,F),[[K,n.value]])],8,A))}});D.__docgenInfo={exportName:"default",displayName:"switch",type:1,props:[{name:"disabled",global:!1,description:"Chỉ ra rằng switch có bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"showLabel",global:!1,description:"Chỉ ra rằng switch có hiển thị nhãn hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"labelOn",global:!1,description:"Nhãn hiển thị khi on.",tags:[{name:"default",text:"'On'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"On"'},{name:"labelOff",global:!1,description:"Nhãn hiển thị khi off.",tags:[{name:"default",text:"'Off'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Off"'},{name:"ariaLabel",global:!1,description:"Nhãn aria cho switch.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",global:!1,description:"Nội dung gợi ý cho switch.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: boolean | undefined]",signature:'(event: "update:modelValue", value: boolean | undefined): void',declarations:[],schema:[{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}]}],slots:[],exposed:[{name:"showLabel",type:"boolean",description:"Chỉ ra rằng switch có hiển thị nhãn hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"labelOn",type:"string",description:"Nhãn hiển thị khi on.",declarations:[],schema:"string"},{name:"labelOff",type:"string",description:"Nhãn hiển thị khi off.",declarations:[],schema:"string"},{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng switch có bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ariaLabel",type:"string | undefined",description:"Nhãn aria cho switch.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"boolean | undefined",description:"",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"hint",type:"string | undefined",description:"Nội dung gợi ý cho switch.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/switch/switch.vue"};const G={title:"HnSwitch",component:D},i={parameters:{docs:{source:{code:"<hn-switch />"}}}},a={args:{showLabel:!0},parameters:{docs:{source:{code:"<hn-switch show-label />"}}}},s={args:{disabled:!0},parameters:{docs:{source:{code:"<hn-switch disabled />"}}}},d={args:{showLabel:!0,labelOn:"Bật",labelOff:"Tắt"},parameters:{docs:{source:{code:'<hn-switch show-label label-on="Bật" label-off="Tắt" />'}}}};var b,g,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<hn-switch />\`
      }
    }
  }
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var w,k,v,O,L;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:"Sử dụng prop `show-label` của `hn-switch` để hiển thị label của trạng thái hiện tại.",...(L=(O=a.parameters)==null?void 0:O.docs)==null?void 0:L.description}}};var C,N,q,V,B;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(q=(N=s.parameters)==null?void 0:N.docs)==null?void 0:q.source},description:{story:"Sử dụng prop `disabled` của `hn-switch` để vô hiệu hoá nó.",...(B=(V=s.parameters)==null?void 0:V.docs)==null?void 0:B.description}}};var S,_,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(_=d.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const J=["Cover","ShowLabel","Disabled","CustomLabel"];export{i as Cover,d as CustomLabel,s as Disabled,a as ShowLabel,J as __namedExportsOrder,G as default};
