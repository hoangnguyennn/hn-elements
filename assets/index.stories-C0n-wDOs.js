import{g as Y,s as f,v as Z,r as ee,l as ae,o as g,A as ne,B as b,a as l,c as re,p as te,t as y,y as se,C as de,D as ie,u as oe}from"./vue.esm-bundler-DcsGvaBf.js";import{_ as le}from"./field-CsR1bCJg.js";import{_ as ce}from"./stack-pJoRfHB7.js";const ue=["data-focus"],me=["disabled","maxlength"],pe={class:"hn-textarea--counter"},he={key:0},h=Y({name:"HnTextarea",inheritAttrs:!1,__name:"textarea",props:f({label:{},size:{default:"normal"},hint:{},error:{},disabled:{type:Boolean},maxRows:{},minRows:{default:1},maxLength:{},showCounter:{type:Boolean},placeholder:{}},{modelValue:{},modelModifiers:{}}),emits:f(["change"],["update:modelValue"]),setup(u){const m=Z(u,"modelValue"),p=ee(!1);return(e,a)=>(g(),ae(oe(le),{class:"hn-textarea",label:e.label,size:e.size,hint:e.hint,error:e.error,disabled:e.disabled},ne({default:b(()=>[l("div",{class:"hn-field--wrapper hn-textarea--wrapper","data-focus":p.value},[se(l("textarea",de(e.$attrs,{"onUpdate:modelValue":a[0]||(a[0]=n=>m.value=n),class:"hn-field--input hn-textarea--input",disabled:e.disabled,maxlength:e.maxLength,style:{maxHeight:e.maxRows?`calc(1lh * ${e.maxRows})`:void 0,minHeight:e.minRows?`calc(1lh * ${e.minRows})`:void 0},onChange:a[1]||(a[1]=n=>e.$emit("change",n.target.value)),onFocus:a[2]||(a[2]=n=>p.value=!0),onBlur:a[3]||(a[3]=n=>p.value=!1)}),null,16,me),[[ie,m.value]])],8,ue)]),_:2},[e.showCounter?{name:"detailRight",fn:b(()=>{var n;return[l("p",pe,[l("span",null,y(((n=m.value)==null?void 0:n.length)??0),1),e.maxLength?(g(),re("span",he,y(`/${e.maxLength}`),1)):te("",!0)])]}),key:"0"}:void 0]),1032,["label","size","hint","error","disabled"]))}});h.__docgenInfo={exportName:"default",displayName:"textarea",type:1,props:[{name:"label",global:!1,description:"Nhãn của của field.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"size",global:!1,description:"Kích thước của field.",tags:[],required:!1,type:"FieldSize | undefined",declarations:[],schema:{kind:"enum",type:"FieldSize | undefined",schema:["undefined",'"normal"','"small"']},default:'"normal"'},{name:"hint",global:!1,description:"Nội dung gợi ý.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",global:!1,description:"Nội dung lỗi.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",global:!1,description:"Chỉ ra rằng field có bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"maxRows",global:!1,description:"Kích thước tối đa của textarea.",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"minRows",global:!1,description:"Kích thước tối thiểu của textarea.",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},default:"1"},{name:"maxLength",global:!1,description:"Số ký tự tối đa.",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"showCounter",global:!1,description:"Hiển thị số ký tự đã nhập.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"placeholder",global:!1,description:"Chỉ ra nội dung placeholder của textarea.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string | undefined]",signature:'(event: "update:modelValue", value: string | undefined): void',declarations:[],schema:[{kind:"enum",type:"string | undefined",schema:["undefined","string"]}]},{name:"change",description:"Kích hoạt khi giá trị textarea thay đổi.",tags:[],type:"[string]",signature:'(event: "change", args_0: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"size",type:"FieldSize",description:"Kích thước của field.",declarations:[],schema:{kind:"enum",type:"FieldSize",schema:['"normal"','"small"']}},{name:"minRows",type:"number",description:"Kích thước tối thiểu của textarea.",declarations:[],schema:"number"},{name:"modelValue",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng field có bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"label",type:"string | undefined",description:"Nhãn của của field.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",type:"string | undefined",description:"Nội dung lỗi.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",type:"string | undefined",description:"Nội dung gợi ý.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"placeholder",type:"string | undefined",description:"Chỉ ra nội dung placeholder của textarea.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"maxRows",type:"number | undefined",description:"Kích thước tối đa của textarea.",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"maxLength",type:"number | undefined",description:"Số ký tự tối đa.",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"showCounter",type:"boolean | undefined",description:"Hiển thị số ký tự đã nhập.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/textarea/textarea.vue"};const ye={title:"HnTextarea",component:h},c={parameters:{docs:{source:{code:"<hn-textarea />"}}}},r={render:u=>({components:{HnTextarea:h,HnStack:ce},setup(){return{args:u}},template:`<hn-stack direction="vertical">
  <hn-textarea size="small" placeholder="Small" />
  <hn-textarea size="normal" placeholder="Normal" />
</hn-stack>`}),parameters:{docs:{source:{code:`<hn-stack direction="vertical">
  <hn-textarea size="small" placeholder="Small" />
  <hn-textarea size="normal" placeholder="Normal" />
</hn-stack>`}}}},t={args:{label:"Label",placeholder:"Label"},parameters:{docs:{source:{code:'<hn-textarea label="Label" placeholder="Label" />'}}}},s={args:{label:"Label",hint:"Hint",placeholder:"Hint"},parameters:{docs:{source:{code:'<hn-textarea label="Label" hint="Hint" placeholder="Hint" />'}}}},d={args:{label:"Label",error:"Error",placeholder:"Error"},parameters:{docs:{source:{code:'<hn-textarea label="Label" error="Error" placeholder="Error" />'}}}},i={args:{label:"Label",disabled:!0,placeholder:"Disabled"},parameters:{docs:{source:{code:'<hn-textarea label="Label" disabled placeholder="Disabled" />'}}}},o={args:{label:"Label",showCounter:!0,placeholder:"Counter"},parameters:{docs:{source:{code:'<hn-textarea label="Label" :max-length="10" show-counter placeholder="Counter" />'}}}};var k,x,v;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<hn-textarea />\`
      }
    }
  }
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var L,S,w,C,z;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnTextarea,
      HnStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-stack direction="vertical">
  <hn-textarea size="small" placeholder="Small" />
  <hn-textarea size="normal" placeholder="Normal" />
</hn-stack>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="vertical">
  <hn-textarea size="small" placeholder="Small" />
  <hn-textarea size="normal" placeholder="Normal" />
</hn-stack>\`
      }
    }
  }
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Sử dụng thuộc tính `size` của `hn-textarea` để thay đổi kích thước của nó.",...(z=(C=r.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};var H,q,N,R,E;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Label'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-textarea label="Label" placeholder="Label" />\`
      }
    }
  }
}`,...(N=(q=t.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:"Sử dụng thuộc tính `label` của `hn-textarea` để thay đổi label của nó.",...(E=(R=t.parameters)==null?void 0:R.docs)==null?void 0:E.description}}};var V,B,D,K,$;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    hint: 'Hint',
    placeholder: 'Hint'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-textarea label="Label" hint="Hint" placeholder="Hint" />\`
      }
    }
  }
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"Sử dụng thuộc tính `hint` của `hn-textarea` để thay đổi hint của nó.",...($=(K=s.parameters)==null?void 0:K.docs)==null?void 0:$.description}}};var F,P,T,M,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    error: 'Error',
    placeholder: 'Error'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-textarea label="Label" error="Error" placeholder="Error" />\`
      }
    }
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source},description:{story:"Sử dụng thuộc tính `error` của `hn-textarea` để thay đổi error của nó.",...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};var O,A,I,U,j;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    disabled: true,
    placeholder: 'Disabled'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-textarea label="Label" disabled placeholder="Disabled" />\`
      }
    }
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:"Sử dụng thuộc tính `disabled` của `hn-textarea` để vô hiệu hoá nó.",...(j=(U=i.parameters)==null?void 0:U.docs)==null?void 0:j.description}}};var G,J,Q,W,X;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    showCounter: true,
    placeholder: 'Counter'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-textarea label="Label" :max-length="10" show-counter placeholder="Counter" />\`
      }
    }
  }
}`,...(Q=(J=o.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Sử dụng thuộc tính `showCounter` của `hn-textarea` để hiển thị counter của nó.",...(X=(W=o.parameters)==null?void 0:W.docs)==null?void 0:X.description}}};const ke=["Cover","Size","Label","Hint","Error","Disabled","Counter"];export{o as Counter,c as Cover,i as Disabled,d as Error,s as Hint,t as Label,r as Size,ke as __namedExportsOrder,ye as default};
