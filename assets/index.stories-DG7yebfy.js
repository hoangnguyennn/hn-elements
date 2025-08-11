import{_ as Ne}from"./stack-C2Tmd1HX.js";import{c as L,o,a,l as Le,m as A,u as ze,r as S,e as l,C as N,G as qe,v as d,z as Ae,y as Pe,x as P,H as He,Q as $e,K as H}from"./vue.esm-bundler-BpvBiuDb.js";import{_ as Me}from"./utils-BRr9b3ld.js";import{_ as $}from"./icon-button-1QRRtaM4.js";import"./index-BRohGxrE.js";import{N as M}from"./index-qoFuZKhr.js";import"./utils-DSnaB4L3.js";const Ee={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none"};function Ie(i,r){return o(),L("svg",Ee,r[0]||(r[0]=[a("path",{fill:"#ABA7AF",d:"m6.661 5.99 3.73-3.72a.449.449 0 0 0-.634-.634l-3.73 3.721-3.73-3.725a.452.452 0 0 0-.772.319c0 .12.048.234.132.318l3.735 3.72L1.657 9.71a.45.45 0 1 0 .635.633l3.735-3.72 3.73 3.72a.45.45 0 0 0 .635-.633z"},null,-1)]))}const Be={render:Ie},Ve={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none"};function De(i,r){return o(),L("svg",Ve,r[0]||(r[0]=[a("g",{"clip-path":"url(#a)"},[a("path",{fill:"#ABA7AF",d:"M18.038 12.72a.626.626 0 1 1-1.082.625l-1.436-2.488a9.7 9.7 0 0 1-2.757 1.272l.454 2.575a.625.625 0 0 1-1.231.218l-.447-2.534c-1.023.15-2.062.15-3.085 0l-.447 2.532a.625.625 0 0 1-1.23-.216l.454-2.577a9.7 9.7 0 0 1-2.754-1.272l-1.444 2.502a.626.626 0 1 1-1.083-.625l1.523-2.638a11.6 11.6 0 0 1-1.46-1.508.625.625 0 1 1 .973-.785 10 10 0 0 0 1.66 1.634l.014.011A8.56 8.56 0 0 0 10 11.25a8.56 8.56 0 0 0 5.339-1.803l.012-.01a10 10 0 0 0 1.663-1.636.625.625 0 0 1 .972.785q-.662.823-1.462 1.51z"})],-1),a("defs",null,[a("clipPath",{id:"a"},[a("path",{fill:"#fff",d:"M0 0h20v20H0z"})])],-1)]))}const Fe={render:De},Ke={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none"};function Oe(i,r){return o(),L("svg",Ke,r[0]||(r[0]=[a("g",{"clip-path":"url(#a)"},[a("path",{fill:"#ABA7AF",d:"M17.562 9.53C15.896 5.89 13.377 4.057 10 4.057S4.104 5.89 2.438 9.532a1.13 1.13 0 0 0 0 .938c1.666 3.64 4.185 5.473 7.562 5.473 3.379 0 5.896-1.832 7.562-5.474a1.14 1.14 0 0 0 0-.94M10 14.63c-2.835 0-4.911-1.49-6.376-4.63C5.09 6.861 7.164 5.37 10 5.37c2.835 0 4.911 1.491 6.376 4.63-1.463 3.14-3.539 4.63-6.376 4.63m-.07-7.838C8.22 6.792 6.836 8.228 6.836 10s1.385 3.208 3.094 3.208 3.094-1.436 3.094-3.208-1.386-3.208-3.094-3.208m0 5.25c-1.088 0-1.969-.913-1.969-2.042s.88-2.042 1.969-2.042 1.969.914 1.969 2.042c0 1.129-.881 2.042-1.97 2.042"})],-1),a("defs",null,[a("clipPath",{id:"a"},[a("path",{fill:"#fff",d:"M0 0h20v20H0z"})])],-1)]))}const Re={render:Oe},Te=["data-focus","data-clear"],_e=["type","disabled","id","aria-describedby","aria-invalid","aria-required","aria-placeholder"],z=Le({name:"HnInput",inheritAttrs:!1,__name:"input",props:A({id:{},label:{},size:{},hint:{},error:{},disabled:{type:Boolean},clearable:{type:Boolean},password:{type:Boolean},placeholder:{},required:{type:Boolean},clearAriaLabel:{},showPasswordAriaLabel:{},hidePasswordAriaLabel:{}},{modelValue:{},modelModifiers:{}}),emits:A(["clear","change"],["update:modelValue"]),setup(i,{emit:r}){const q=r,y=ze(i,"modelValue"),t=i,k=S(!1),C=S(!1),c=S(!0),v=Ae(),be=l(()=>`hn-input-${v}`),ye=l(()=>t.password&&c.value?"password":"text"),ke=l(()=>c.value?Fe:Re),ve=l(()=>{const e=[];return t.error?e.push(`hn-field-error-${v}`):t.hint&&e.push(`hn-field-hint-${v}`),e.length>0?e.join(" "):void 0}),we=l(()=>t.clearAriaLabel||"Xóa nội dung"),Ce=l(()=>c.value?t.hidePasswordAriaLabel||"Ẩn mật khẩu":t.showPasswordAriaLabel||"Hiện mật khẩu"),Se=()=>{y.value="",q("clear"),q("change","")};return(e,n)=>(o(),N(d(Me),{class:"hn-input",label:e.label,size:e.size,hint:e.hint,error:e.error,disabled:e.disabled,id:d(v)},{default:qe(()=>[a("div",{class:"hn-field--wrapper hn-input--wrapper","data-focus":k.value,"data-clear":e.clearable,onMouseenter:n[5]||(n[5]=s=>C.value=!0),onMouseleave:n[6]||(n[6]=s=>C.value=!1)},[Pe(a("input",He(e.$attrs,{"onUpdate:modelValue":n[0]||(n[0]=s=>y.value=s),class:"hn-field--input hn-input--input",type:ye.value,disabled:e.disabled,id:be.value,"aria-describedby":ve.value,"aria-invalid":!!e.error,"aria-required":e.required,"aria-placeholder":e.placeholder,onChange:n[1]||(n[1]=s=>e.$emit("change",s.target.value)),onFocus:n[2]||(n[2]=s=>k.value=!0),onBlur:n[3]||(n[3]=s=>k.value=!1)}),null,16,_e),[[$e,y.value]]),e.clearable&&!e.disabled&&(C.value||k.value)&&y.value?(o(),N(d($),{key:0,as:d(Be),class:"hn-input--clear",ariaLabel:we.value,onClick:Se,onMousedown:H(d(M),["prevent"])},null,8,["as","ariaLabel","onMousedown"])):P("",!0),e.password?(o(),N(d($),{key:1,as:ke.value,ariaLabel:Ce.value,onClick:n[4]||(n[4]=s=>c.value=!c.value),onMousedown:H(d(M),["prevent"])},null,8,["as","ariaLabel","onMousedown"])):P("",!0)],40,Te)]),_:1},8,["label","size","hint","error","disabled","id"]))}});z.__docgenInfo={exportName:"default",displayName:"input",type:1,props:[{name:"id",global:!1,description:"Id của field.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"label",global:!1,description:"Nhãn của của field.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"size",global:!1,description:"Kích thước của field.",tags:[],required:!1,type:"FieldSize | undefined",declarations:[],schema:{kind:"enum",type:"FieldSize | undefined",schema:["undefined",'"normal"','"small"']}},{name:"hint",global:!1,description:"Nội dung gợi ý.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",global:!1,description:"Nội dung lỗi.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",global:!1,description:"Chỉ ra rằng field có bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"clearable",global:!1,description:"Chỉ ra rằng input có chức năng clear hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"password",global:!1,description:"Chỉ ra rằng có phải là input password hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"placeholder",global:!1,description:"Nội dung placeholder của input.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"required",global:!1,description:"Chỉ ra rằng input có bắt buộc hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"clearAriaLabel",global:!1,description:"Nhãn aria cho button clear.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"showPasswordAriaLabel",global:!1,description:"Nhãn aria cho button hiện mật khẩu.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hidePasswordAriaLabel",global:!1,description:"Nhãn aria cho button ẩn mật khẩu.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string | undefined]",signature:'(event: "update:modelValue", value: string | undefined): void',declarations:[],schema:[{kind:"enum",type:"string | undefined",schema:["undefined","string"]}]},{name:"change",description:"Kích hoạt khi giá trị input thay đổi.",tags:[],type:"[string]",signature:'(event: "change", args_0: string): void',declarations:[],schema:["string"]},{name:"clear",description:"Kích hoạt khi button clear được click.",tags:[],type:"[]",signature:'(event: "clear"): void',declarations:[],schema:[]}],slots:[],exposed:[{name:"id",type:"string | undefined",description:"Id của field.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"label",type:"string | undefined",description:"Nhãn của của field.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"size",type:"FieldSize | undefined",description:"Kích thước của field.",declarations:[],schema:{kind:"enum",type:"FieldSize | undefined",schema:["undefined",'"normal"','"small"']}},{name:"hint",type:"string | undefined",description:"Nội dung gợi ý.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",type:"string | undefined",description:"Nội dung lỗi.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng field có bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"modelValue",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"placeholder",type:"string | undefined",description:"Nội dung placeholder của input.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"required",type:"boolean | undefined",description:"Chỉ ra rằng input có bắt buộc hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"clearable",type:"boolean | undefined",description:"Chỉ ra rằng input có chức năng clear hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"password",type:"boolean | undefined",description:"Chỉ ra rằng có phải là input password hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"clearAriaLabel",type:"string | undefined",description:"Nhãn aria cho button clear.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"showPasswordAriaLabel",type:"string | undefined",description:"Nhãn aria cho button hiện mật khẩu.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hidePasswordAriaLabel",type:"string | undefined",description:"Nhãn aria cho button ẩn mật khẩu.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/input/input.vue"};const We={title:"HnInput",component:z},w={parameters:{docs:{source:{code:"<hn-input />"}}}},u={argTypes:{size:{control:!1},label:{control:!1},placeholder:{control:!1}},render:i=>({components:{HnInput:z,HnStack:Ne},setup(){return{args:i}},template:`
      <hn-stack direction="vertical">
        <hn-input v-bind="args" size="small" label="Small" placeholder="Small" />
        <hn-input v-bind="args" size="normal" label="Normal" placeholder="Normal" />
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="vertical">
  <hn-input size="small" label="Small" placeholder="Small" />
  <hn-input size="normal" label="Normal" placeholder="Normal" />
</hn-stack>`}}}},p={args:{label:"Label",placeholder:"Label"},parameters:{docs:{source:{code:'<hn-input label="Label" placeholder="Label" />'}}}},h={args:{hint:"Hint",placeholder:"Hint"},parameters:{docs:{source:{code:'<hn-input hint="Hint" placeholder="Hint" />'}}}},m={args:{error:"Error",placeholder:"Error"},parameters:{docs:{source:{code:'<hn-input error="Error" placeholder="Error" />'}}}},f={args:{disabled:!0,placeholder:"Disabled"},parameters:{docs:{source:{code:'<hn-input disabled placeholder="Disabled" />'}}}},g={args:{clearable:!0,placeholder:"Clearable"},parameters:{docs:{source:{code:'<hn-input clearable placeholder="Clearable" />'}}}},b={args:{password:!0,placeholder:"Password"},parameters:{docs:{source:{code:'<hn-input password placeholder="Password" />'}}}};var E,I,B;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: '<hn-input />'
      }
    }
  }
}`,...(B=(I=w.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var V,D,F,K,O;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: false
    },
    label: {
      control: false
    },
    placeholder: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnInput,
      HnStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-stack direction="vertical">
        <hn-input v-bind="args" size="small" label="Small" placeholder="Small" />
        <hn-input v-bind="args" size="normal" label="Normal" placeholder="Normal" />
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="vertical">
  <hn-input size="small" label="Small" placeholder="Small" />
  <hn-input size="normal" label="Normal" placeholder="Normal" />
</hn-stack>\`
      }
    }
  }
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"Sử dụng thuộc tính `size` của `hn-input` để thay đổi kích thước của nó.",...(O=(K=u.parameters)==null?void 0:K.docs)==null?void 0:O.description}}};var R,T,_,j,G;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Label'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-input label="Label" placeholder="Label" />\`
      }
    }
  }
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:"Sử dụng thuộc tính `label` của `hn-input` để thay đổi label của nó.",...(G=(j=p.parameters)==null?void 0:j.docs)==null?void 0:G.description}}};var Q,U,X,x,J;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    hint: 'Hint',
    placeholder: 'Hint'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-input hint="Hint" placeholder="Hint" />\`
      }
    }
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:"Sử dụng thuộc tính `hint` của `hn-input` để thay đổi hint của nó.",...(J=(x=h.parameters)==null?void 0:x.docs)==null?void 0:J.description}}};var W,Y,Z,ee,ne;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    error: 'Error',
    placeholder: 'Error'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-input error="Error" placeholder="Error" />\`
      }
    }
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Sử dụng thuộc tính `error` của `hn-input` để thay đổi error của nó.",...(ne=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ne.description}}};var ae,re,se,ie,de;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-input disabled placeholder="Disabled" />\`
      }
    }
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"Sử dụng thuộc tính `disabled` của `hn-input` để vô hiệu hoá nó.",...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.description}}};var te,le,oe,ce,ue;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    clearable: true,
    placeholder: 'Clearable'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-input clearable placeholder="Clearable" />\`
      }
    }
  }
}`,...(oe=(le=g.parameters)==null?void 0:le.docs)==null?void 0:oe.source},description:{story:"Sử dụng thuộc tính `clearable` của `hn-input` để cho phép xóa nội dung.",...(ue=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ue.description}}};var pe,he,me,fe,ge;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    password: true,
    placeholder: 'Password'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-input password placeholder="Password" />\`
      }
    }
  }
}`,...(me=(he=b.parameters)==null?void 0:he.docs)==null?void 0:me.source},description:{story:"Sử dụng thuộc tính `password` của `hn-input` để sử dụng chế độ nhập mật khẩu.",...(ge=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:ge.description}}};const Ye=["Cover","Size","Label","Hint","Error","Disabled","Clearable","Password"];export{g as Clearable,w as Cover,f as Disabled,m as Error,h as Hint,p as Label,b as Password,u as Size,Ye as __namedExportsOrder,We as default};
