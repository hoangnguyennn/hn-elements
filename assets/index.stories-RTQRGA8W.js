import{c as S,o as i,a as n,l as ve,y as N,z as ke,r as k,e as H,q as w,E as we,u as d,B as Se,v as q,F as Ce,O as ze,P as E}from"./vue.esm-bundler-pDrKRx47.js";import{_ as Ne}from"./field-B9E1Htnn.js";import{_ as M}from"./icon-button-BTfQRb5Q.js";import"./index-BRohGxrE.js";import{N as P}from"./index-qoFuZKhr.js";import{_ as He}from"./stack-VsuMcAp9.js";import"./icon-C5lBE2Bn.js";const qe={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none"};function Ee(t,r){return i(),S("svg",qe,r[0]||(r[0]=[n("path",{fill:"#ABA7AF",d:"m6.661 5.99 3.73-3.72a.449.449 0 0 0-.634-.634l-3.73 3.721-3.73-3.725a.452.452 0 0 0-.772.319c0 .12.048.234.132.318l3.735 3.72L1.657 9.71a.45.45 0 1 0 .635.633l3.735-3.72 3.73 3.72a.45.45 0 0 0 .635-.633z"},null,-1)]))}const Me={render:Ee},Pe={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none"};function $e(t,r){return i(),S("svg",Pe,r[0]||(r[0]=[n("g",{"clip-path":"url(#a)"},[n("path",{fill:"#ABA7AF",d:"M18.038 12.72a.626.626 0 1 1-1.082.625l-1.436-2.488a9.7 9.7 0 0 1-2.757 1.272l.454 2.575a.625.625 0 0 1-1.231.218l-.447-2.534c-1.023.15-2.062.15-3.085 0l-.447 2.532a.625.625 0 0 1-1.23-.216l.454-2.577a9.7 9.7 0 0 1-2.754-1.272l-1.444 2.502a.626.626 0 1 1-1.083-.625l1.523-2.638a11.6 11.6 0 0 1-1.46-1.508.625.625 0 1 1 .973-.785 10 10 0 0 0 1.66 1.634l.014.011A8.56 8.56 0 0 0 10 11.25a8.56 8.56 0 0 0 5.339-1.803l.012-.01a10 10 0 0 0 1.663-1.636.625.625 0 0 1 .972.785q-.662.823-1.462 1.51z"})],-1),n("defs",null,[n("clipPath",{id:"a"},[n("path",{fill:"#fff",d:"M0 0h20v20H0z"})])],-1)]))}const Be={render:$e},Ve={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none"};function Ae(t,r){return i(),S("svg",Ve,r[0]||(r[0]=[n("g",{"clip-path":"url(#a)"},[n("path",{fill:"#ABA7AF",d:"M17.562 9.53C15.896 5.89 13.377 4.057 10 4.057S4.104 5.89 2.438 9.532a1.13 1.13 0 0 0 0 .938c1.666 3.64 4.185 5.473 7.562 5.473 3.379 0 5.896-1.832 7.562-5.474a1.14 1.14 0 0 0 0-.94M10 14.63c-2.835 0-4.911-1.49-6.376-4.63C5.09 6.861 7.164 5.37 10 5.37c2.835 0 4.911 1.491 6.376 4.63-1.463 3.14-3.539 4.63-6.376 4.63m-.07-7.838C8.22 6.792 6.836 8.228 6.836 10s1.385 3.208 3.094 3.208 3.094-1.436 3.094-3.208-1.386-3.208-3.094-3.208m0 5.25c-1.088 0-1.969-.913-1.969-2.042s.88-2.042 1.969-2.042 1.969.914 1.969 2.042c0 1.129-.881 2.042-1.97 2.042"})],-1),n("defs",null,[n("clipPath",{id:"a"},[n("path",{fill:"#fff",d:"M0 0h20v20H0z"})])],-1)]))}const Le={render:Ae},Fe=["data-focus","data-clear"],Ie=["type","disabled"],C=ve({name:"HnInput",inheritAttrs:!1,__name:"input",props:N({label:{},size:{},hint:{},error:{},disabled:{type:Boolean},clearable:{type:Boolean},password:{type:Boolean},placeholder:{}},{modelValue:{},modelModifiers:{}}),emits:N(["clear","change"],["update:modelValue"]),setup(t,{emit:r}){const z=r,f=ke(t,"modelValue"),fe=t,g=k(!1),v=k(!1),b=k(!0),ge=H(()=>fe.password&&b.value?"password":"text"),be=H(()=>b.value?Be:Le),ye=()=>{f.value="",z("clear"),z("change","")};return(a,e)=>(i(),w(d(Ne),{class:"hn-input",label:a.label,size:a.size,hint:a.hint,error:a.error,disabled:a.disabled},{default:we(()=>[n("div",{class:"hn-field--wrapper hn-input--wrapper","data-focus":g.value,"data-clear":a.clearable,onMouseenter:e[5]||(e[5]=s=>v.value=!0),onMouseleave:e[6]||(e[6]=s=>v.value=!1)},[Se(n("input",Ce(a.$attrs,{"onUpdate:modelValue":e[0]||(e[0]=s=>f.value=s),class:"hn-field--input hn-input--input",type:ge.value,disabled:a.disabled,onChange:e[1]||(e[1]=s=>a.$emit("change",s.target.value)),onFocus:e[2]||(e[2]=s=>g.value=!0),onBlur:e[3]||(e[3]=s=>g.value=!1)}),null,16,Ie),[[ze,f.value]]),a.clearable&&!a.disabled&&(v.value||g.value)&&f.value?(i(),w(d(M),{key:0,as:d(Me),class:"hn-input--clear",onClick:ye,onMousedown:E(d(P),["prevent"])},null,8,["as","onMousedown"])):q("",!0),a.password?(i(),w(d(M),{key:1,as:be.value,onClick:e[4]||(e[4]=s=>b.value=!b.value),onMousedown:E(d(P),["prevent"])},null,8,["as","onMousedown"])):q("",!0)],40,Fe)]),_:1},8,["label","size","hint","error","disabled"]))}});C.__docgenInfo={exportName:"default",displayName:"input",type:1,props:[{name:"label",global:!1,description:"Nhãn của của field.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"size",global:!1,description:"Kích thước của field.",tags:[],required:!1,type:"FieldSize | undefined",declarations:[],schema:{kind:"enum",type:"FieldSize | undefined",schema:["undefined",'"normal"','"small"']}},{name:"hint",global:!1,description:"Nội dung gợi ý.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",global:!1,description:"Nội dung lỗi.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",global:!1,description:"Chỉ ra rằng field có bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"clearable",global:!1,description:"Chỉ ra rằng input có chức năng clear hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"password",global:!1,description:"Chỉ ra rằng có phải là input password hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"placeholder",global:!1,description:"Nội dung placeholder của input.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string | undefined]",signature:'(event: "update:modelValue", value: string | undefined): void',declarations:[],schema:[{kind:"enum",type:"string | undefined",schema:["undefined","string"]}]},{name:"clear",description:"Kích hoạt khi button clear được click.",tags:[],type:"[]",signature:'(event: "clear"): void',declarations:[],schema:[]},{name:"change",description:"Kích hoạt khi giá trị input thay đổi.",tags:[],type:"[string]",signature:'(event: "change", args_0: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"modelValue",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"size",type:"FieldSize | undefined",description:"Kích thước của field.",declarations:[],schema:{kind:"enum",type:"FieldSize | undefined",schema:["undefined",'"normal"','"small"']}},{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng field có bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"label",type:"string | undefined",description:"Nhãn của của field.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",type:"string | undefined",description:"Nội dung gợi ý.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",type:"string | undefined",description:"Nội dung lỗi.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"clearable",type:"boolean | undefined",description:"Chỉ ra rằng input có chức năng clear hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"password",type:"boolean | undefined",description:"Chỉ ra rằng có phải là input password hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"placeholder",type:"string | undefined",description:"Nội dung placeholder của input.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/input/input.vue"};const Ue={title:"HnInput",component:C},y={parameters:{docs:{source:{code:"<hn-input />"}}}},l={argTypes:{size:{control:!1},label:{control:!1},placeholder:{control:!1}},render:t=>({components:{HnInput:C,HnStack:He},setup(){return{args:t}},template:`
      <hn-stack direction="vertical">
        <hn-input v-bind="args" size="small" label="Small" placeholder="Small" />
        <hn-input v-bind="args" size="normal" label="Normal" placeholder="Normal" />
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="vertical">
  <hn-input size="small" label="Small" placeholder="Small" />
  <hn-input size="normal" label="Normal" placeholder="Normal" />
</hn-stack>`}}}},o={args:{label:"Label",placeholder:"Label"},parameters:{docs:{source:{code:'<hn-input label="Label" placeholder="Label" />'}}}},c={args:{hint:"Hint",placeholder:"Hint"},parameters:{docs:{source:{code:'<hn-input hint="Hint" placeholder="Hint" />'}}}},p={args:{error:"Error",placeholder:"Error"},parameters:{docs:{source:{code:'<hn-input error="Error" placeholder="Error" />'}}}},u={args:{disabled:!0,placeholder:"Disabled"},parameters:{docs:{source:{code:'<hn-input disabled placeholder="Disabled" />'}}}},m={args:{clearable:!0,placeholder:"Clearable"},parameters:{docs:{source:{code:'<hn-input clearable placeholder="Clearable" />'}}}},h={args:{password:!0,placeholder:"Password"},parameters:{docs:{source:{code:'<hn-input password placeholder="Password" />'}}}};var $,B,V;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: '<hn-input />'
      }
    }
  }
}`,...(V=(B=y.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var A,L,F,I,D;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(L=l.parameters)==null?void 0:L.docs)==null?void 0:F.source},description:{story:"Sử dụng thuộc tính `size` của `hn-input` để thay đổi kích thước của nó.",...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.description}}};var O,K,_,R,T;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(K=o.parameters)==null?void 0:K.docs)==null?void 0:_.source},description:{story:"Sử dụng thuộc tính `label` của `hn-input` để thay đổi label của nó.",...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var x,U,j,G,J;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(U=c.parameters)==null?void 0:U.docs)==null?void 0:j.source},description:{story:"Sử dụng thuộc tính `hint` của `hn-input` để thay đổi hint của nó.",...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Q,W,X,Y,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"Sử dụng thuộc tính `error` của `hn-input` để thay đổi error của nó.",...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ne,ae,re,se;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ae.source},description:{story:"Sử dụng thuộc tính `disabled` của `hn-input` để vô hiệu hoá nó.",...(se=(re=u.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var te,de,ie,le,oe;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ie.source},description:{story:"Sử dụng thuộc tính `clearable` của `hn-input` để cho phép xóa nội dung.",...(oe=(le=m.parameters)==null?void 0:le.docs)==null?void 0:oe.description}}};var ce,pe,ue,me,he;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"Sử dụng thuộc tính `password` của `hn-input` để sử dụng chế độ nhập mật khẩu.",...(he=(me=h.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};const je=["Cover","Size","Label","Hint","Error","Disabled","Clearable","Password"];export{m as Clearable,y as Cover,u as Disabled,p as Error,c as Hint,o as Label,h as Password,l as Size,je as __namedExportsOrder,Ue as default};
