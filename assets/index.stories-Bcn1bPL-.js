import{_ as ne}from"./stack-D4EHPg3u.js";import{l as re,u as te,C as se,F as de,G as y,v as g,n as x,B as ie,o as k,a as u,x as v,c as le,y as oe,z as ce,H as ue,I as me,r as he,e as pe}from"./vue.esm-bundler-D2xXn-Hy.js";import{_ as fe}from"./utils-DO1zxFkR.js";const ge=["data-focus"],be=["id","placeholder","disabled","maxlength","aria-describedby","aria-invalid","aria-required","aria-placeholder"],ye={class:"hn-textarea--counter","aria-live":"polite"},xe={key:0},b=re({name:"HnTextarea",inheritAttrs:!1,__name:"textarea",props:x({id:{},label:{},size:{default:"normal"},hint:{},error:{},disabled:{type:Boolean},maxRows:{},minRows:{default:1},maxLength:{},showCounter:{type:Boolean},placeholder:{},required:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:x(["change"],["update:modelValue"]),setup(e){const h=te(e,"modelValue"),p=e,f=he(!1),t=ie(),ae=pe(()=>{const a=[];return p.error?a.push(`hn-field-error-${t}`):p.hint&&a.push(`hn-field-hint-${t}`),p.showCounter&&a.push(t),a.length>0?a.join(" "):void 0});return(a,n)=>(k(),se(g(fe),{class:"hn-textarea",label:e.label,size:e.size,hint:e.hint,error:e.error,disabled:e.disabled,id:g(t)},de({default:y(()=>[u("div",{class:"hn-field--wrapper hn-textarea--wrapper","data-focus":f.value},[ce(u("textarea",ue(a.$attrs,{"onUpdate:modelValue":n[0]||(n[0]=r=>h.value=r),class:"hn-field--input hn-textarea--input",id:g(t),placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxLength,"aria-describedby":ae.value,"aria-invalid":!!e.error,"aria-required":e.required,"aria-placeholder":e.placeholder,style:{maxHeight:e.maxRows?`calc(1lh * ${e.maxRows})`:void 0,minHeight:e.minRows?`calc(1lh * ${e.minRows})`:void 0},onChange:n[1]||(n[1]=r=>a.$emit("change",r.target.value)),onFocus:n[2]||(n[2]=r=>f.value=!0),onBlur:n[3]||(n[3]=r=>f.value=!1)}),null,16,be),[[me,h.value]])],8,ge)]),_:2},[e.showCounter?{name:"detailRight",fn:y(()=>{var r;return[u("p",ye,[u("span",null,v(((r=h.value)==null?void 0:r.length)??0),1),e.maxLength?(k(),le("span",xe,v(`/${e.maxLength}`),1)):oe("",!0)])]}),key:"0"}:void 0]),1032,["label","size","hint","error","disabled","id"]))}});b.__docgenInfo={exportName:"default",displayName:"textarea",type:1,props:[{name:"id",global:!1,description:"Id của field.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"label",global:!1,description:"Nhãn của của field.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"size",global:!1,description:"Kích thước của field.",tags:[],required:!1,type:"FieldSize | undefined",declarations:[],schema:{kind:"enum",type:"FieldSize | undefined",schema:["undefined",'"small"','"normal"']},default:'"normal"'},{name:"hint",global:!1,description:"Nội dung gợi ý.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",global:!1,description:"Nội dung lỗi.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",global:!1,description:"Chỉ ra rằng field có bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"maxRows",global:!1,description:"Số hàng tối đa của textarea.",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"minRows",global:!1,description:"Số hàng tối thiểu của textarea.",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},default:"1"},{name:"maxLength",global:!1,description:"Số ký tự tối đa.",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"showCounter",global:!1,description:"Hiển thị số ký tự đã nhập.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"placeholder",global:!1,description:"Chỉ ra nội dung placeholder của textarea.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"required",global:!1,description:"Chỉ ra rằng textarea có bắt buộc hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string | undefined]",signature:'(event: "update:modelValue", value: string | undefined): void',declarations:[],schema:[{kind:"enum",type:"string | undefined",schema:["undefined","string"]}]},{name:"change",description:"Kích hoạt khi giá trị textarea thay đổi.",tags:[],type:"[string]",signature:'(event: "change", args_0: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"size",type:"FieldSize",description:"Kích thước của field.",declarations:[],schema:{kind:"enum",type:"FieldSize",schema:['"small"','"normal"']}},{name:"minRows",type:"number",description:"Số hàng tối thiểu của textarea.",declarations:[],schema:"number"},{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng field có bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"required",type:"boolean | undefined",description:"Chỉ ra rằng textarea có bắt buộc hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"hint",type:"string | undefined",description:"Nội dung gợi ý.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"id",type:"string | undefined",description:"Id của field.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"label",type:"string | undefined",description:"Nhãn của của field.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",type:"string | undefined",description:"Nội dung lỗi.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"placeholder",type:"string | undefined",description:"Chỉ ra nội dung placeholder của textarea.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"maxRows",type:"number | undefined",description:"Số hàng tối đa của textarea.",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"maxLength",type:"number | undefined",description:"Số ký tự tối đa.",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"showCounter",type:"boolean | undefined",description:"Hiển thị số ký tự đã nhập.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/textarea/textarea.vue"};const Le={title:"HnTextarea",component:b},m={parameters:{docs:{source:{code:"<hn-textarea />"}}}},s={render:e=>({components:{HnTextarea:b,HnStack:ne},setup(){return{args:e}},template:`<hn-stack direction="vertical">
  <hn-textarea size="small" placeholder="Small" />
  <hn-textarea size="normal" placeholder="Normal" />
</hn-stack>`}),parameters:{docs:{source:{code:`<hn-stack direction="vertical">
  <hn-textarea size="small" placeholder="Small" />
  <hn-textarea size="normal" placeholder="Normal" />
</hn-stack>`}}}},d={args:{label:"Label",placeholder:"Label"},parameters:{docs:{source:{code:'<hn-textarea label="Label" placeholder="Label" />'}}}},i={args:{label:"Label",hint:"Hint",placeholder:"Hint"},parameters:{docs:{source:{code:'<hn-textarea label="Label" hint="Hint" placeholder="Hint" />'}}}},l={args:{label:"Label",error:"Error",placeholder:"Error"},parameters:{docs:{source:{code:'<hn-textarea label="Label" error="Error" placeholder="Error" />'}}}},o={args:{label:"Label",disabled:!0,placeholder:"Disabled"},parameters:{docs:{source:{code:'<hn-textarea label="Label" disabled placeholder="Disabled" />'}}}},c={args:{label:"Label",showCounter:!0,placeholder:"Counter"},parameters:{docs:{source:{code:'<hn-textarea label="Label" :max-length="10" show-counter placeholder="Counter" />'}}}};var S,L,C;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<hn-textarea />\`
      }
    }
  }
}`,...(C=(L=m.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var w,q,z,H,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(q=s.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"Sử dụng thuộc tính `size` của `hn-textarea` để thay đổi kích thước của nó.",...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};var R,E,V,$,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source},description:{story:"Sử dụng thuộc tính `label` của `hn-textarea` để thay đổi label của nó.",...(B=($=d.parameters)==null?void 0:$.docs)==null?void 0:B.description}}};var D,F,I,K,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source},description:{story:"Sử dụng thuộc tính `hint` của `hn-textarea` để thay đổi hint của nó.",...(P=(K=i.parameters)==null?void 0:K.docs)==null?void 0:P.description}}};var T,M,O,j,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"Sử dụng thuộc tính `error` của `hn-textarea` để thay đổi error của nó.",...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.description}}};var G,U,J,Q,W;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(U=o.parameters)==null?void 0:U.docs)==null?void 0:J.source},description:{story:"Sử dụng thuộc tính `disabled` của `hn-textarea` để vô hiệu hoá nó.",...(W=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:W.description}}};var X,Y,Z,_,ee;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Sử dụng thuộc tính `showCounter` của `hn-textarea` để hiển thị counter của nó.",...(ee=(_=c.parameters)==null?void 0:_.docs)==null?void 0:ee.description}}};const Ce=["Cover","Size","Label","Hint","Error","Disabled","Counter"];export{c as Counter,m as Cover,o as Disabled,l as Error,i as Hint,d as Label,s as Size,Ce as __namedExportsOrder,Le as default};
