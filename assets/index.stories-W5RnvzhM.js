import{c as L,o as O,E as A,g as G,q as c}from"./vue.esm-bundler-DcsGvaBf.js";import{_ as d}from"./stack-pJoRfHB7.js";import{_ as j}from"./icon-DuCXg-vs.js";const J={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none"};function Q(n,t){return O(),L("svg",J,t[0]||(t[0]=[A('<g clip-path="url(#a)"><g clip-path="url(#b)"><path fill="#fff" d="M13.025 2.547H2v12.906h14V5.522zm-.334 12.086H5.31v-4.02a.41.41 0 0 1 .41-.41h6.562a.41.41 0 0 1 .41.41zm0-7.711H5.31V3.367h5.195v2.735h1.094V3.367h1.093z"></path></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h18v18H0z"></path></clipPath><clipPath id="b"><path fill="#fff" d="M2 2h14v14H2z"></path></clipPath></defs>',2)]))}const D={render:Q},U=["disabled","data-variant","data-size","data-disabled"],e=G({name:"HnButton",__name:"button",props:{disabled:{type:Boolean},variant:{default:"primary"},size:{default:"medium"},type:{},form:{}},emits:["click"],setup(n){return(t,l)=>(O(),L("button",{class:"hn-button",disabled:t.disabled,"data-variant":t.variant,"data-size":t.size,"data-disabled":t.disabled,onClick:l[0]||(l[0]=F=>t.$emit("click",F))},[c(t.$slots,"leading"),c(t.$slots,"default"),c(t.$slots,"trailing")],8,U))}});e.__docgenInfo={exportName:"default",displayName:"button",type:1,props:[{name:"disabled",global:!1,description:"Chỉ ra rằng button có bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"variant",global:!1,description:"Biến thể của button.",tags:[{name:"default",text:"'primary'"}],required:!1,type:"ButtonVariant | undefined",declarations:[],schema:{kind:"enum",type:"ButtonVariant | undefined",schema:["undefined",'"primary"','"secondary"','"text"']},default:'"primary"'},{name:"size",global:!1,description:"Kích thước của button.",tags:[{name:"default",text:"'medium'"}],required:!1,type:"ButtonSize | undefined",declarations:[],schema:{kind:"enum",type:"ButtonSize | undefined",schema:["undefined",'"small"','"medium"','"large"']},default:'"medium"'},{name:"type",global:!1,description:"Loại button.",tags:[],required:!1,type:'"button" | "submit" | "reset" | undefined',declarations:[],schema:{kind:"enum",type:'"button" | "submit" | "reset" | undefined',schema:["undefined",'"button"','"submit"','"reset"']}},{name:"form",global:!1,description:"Id của form mà button này liên kết tới.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"Sự kiện khi button được click.",tags:[],type:"[MouseEvent]",signature:'(event: "click", args_0: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[{name:"default",type:"any",description:"Nội dung của button.",declarations:[],schema:"any"},{name:"leading",type:"any",description:"Slot ở phía trước nội dung của button.",declarations:[],schema:"any"},{name:"trailing",type:"any",description:"Slot ở phía sau nội dung của button.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & ButtonSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & ButtonSlots"}},{name:"variant",type:"ButtonVariant",description:"Biến thể của button.",declarations:[],schema:{kind:"enum",type:"ButtonVariant",schema:['"primary"','"secondary"','"text"']}},{name:"size",type:"ButtonSize",description:"Kích thước của button.",declarations:[],schema:{kind:"enum",type:"ButtonSize",schema:['"small"','"medium"','"large"']}},{name:"type",type:'"button" | "submit" | "reset" | undefined',description:"Loại button.",declarations:[],schema:{kind:"enum",type:'"button" | "submit" | "reset" | undefined',schema:["undefined",'"button"','"submit"','"reset"']}},{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng button có bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"form",type:"string | undefined",description:"Id của form mà button này liên kết tới.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/button/button.vue"};const Z={title:"HnButton",component:e},u={render:n=>({components:{HnButton:e},setup(){return{args:n}},template:'<hn-button v-bind="args">Button</hn-button>'}),parameters:{docs:{source:{code:"<hn-button>Button</hn-button>"}}}},a={argTypes:{variant:{control:!1}},render:n=>({components:{HnButton:e,HnStack:d},setup(){return{args:n}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary">Button</hn-button>
        <hn-button v-bind="args" variant="secondary">Button</hn-button>
        <hn-button v-bind="args" variant="text">Button</hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button variant="primary">Button</hn-button>
  <hn-button variant="secondary">Button</hn-button>
  <hn-button variant="text">Button</hn-button>
</hn-stack>`}}}},o={argTypes:{size:{control:!1}},render:n=>({components:{HnButton:e,HnStack:d},setup(){return{args:n}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" size="small">Button</hn-button>
        <hn-button v-bind="args" size="medium">Button</hn-button>
        <hn-button v-bind="args" size="large">Button</hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button size="small">Button</hn-button>
  <hn-button size="medium">Button</hn-button>
  <hn-button size="large">Button</hn-button>
</hn-stack>`}}}},r={argTypes:{disabled:{control:!1},variant:{control:!1}},render:n=>({components:{HnButton:e,HnStack:d},setup(){return{args:n}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary" disabled>Button</hn-button>
        <hn-button v-bind="args" variant="secondary" disabled>Button</hn-button>
        <hn-button v-bind="args" variant="text" disabled>Button</hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button variant="primary" disabled>Button</hn-button>
  <hn-button variant="secondary" disabled>Button</hn-button>
  <hn-button variant="text" disabled>Button</hn-button>
</hn-stack>`}}}},s={args:{variant:"primary"},argTypes:{variant:{control:!1}},render:n=>({components:{HnButton:e,HnStack:d,HnIcon:j},setup(){return{args:n,IcoSave:D}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args">
          <template #leading>
            <hn-icon :as="IcoSave" />
          </template>
          Button
        </hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button variant="primary">
    <template #leading>
      <hn-icon :as="IcoSave" />
    </template>
    Button
  </hn-button>
</hn-stack>`}}}},i={args:{variant:"primary"},argTypes:{variant:{control:!1}},render:n=>({components:{HnButton:e,HnStack:d,HnIcon:j},setup(){return{args:n,IcoSave:D}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args">
          Button
          <template #trailing>
            <hn-icon :as="IcoSave" />
          </template>
        </hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button variant="primary">
    Button
    <template #trailing>
      <hn-icon :as="IcoSave" />
    </template>
  </hn-button>
</hn-stack>`}}}};var h,m,p;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-button v-bind="args">Button</hn-button>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-button>Button</hn-button>\`
      }
    }
  }
}`,...(p=(m=u.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,g,y,f,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnButton,
      HnStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary">Button</hn-button>
        <hn-button v-bind="args" variant="secondary">Button</hn-button>
        <hn-button v-bind="args" variant="text">Button</hn-button>
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="horizontal">
  <hn-button variant="primary">Button</hn-button>
  <hn-button variant="secondary">Button</hn-button>
  <hn-button variant="text">Button</hn-button>
</hn-stack>\`
      }
    }
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"Sử dụng thuộc tính `variant` của `hn-button` để thay đổi màu sắc của nó.",...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var k,B,z,S,H;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnButton,
      HnStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" size="small">Button</hn-button>
        <hn-button v-bind="args" size="medium">Button</hn-button>
        <hn-button v-bind="args" size="large">Button</hn-button>
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="horizontal">
  <hn-button size="small">Button</hn-button>
  <hn-button size="medium">Button</hn-button>
  <hn-button size="large">Button</hn-button>
</hn-stack>\`
      }
    }
  }
}`,...(z=(B=o.parameters)==null?void 0:B.docs)==null?void 0:z.source},description:{story:"Sử dụng thuộc tính `size` của `hn-button` để thay đổi kích thước của nó.",...(H=(S=o.parameters)==null?void 0:S.docs)==null?void 0:H.description}}};var I,_,q,T,V;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: {
    disabled: {
      control: false
    },
    variant: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnButton,
      HnStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary" disabled>Button</hn-button>
        <hn-button v-bind="args" variant="secondary" disabled>Button</hn-button>
        <hn-button v-bind="args" variant="text" disabled>Button</hn-button>
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="horizontal">
  <hn-button variant="primary" disabled>Button</hn-button>
  <hn-button variant="secondary" disabled>Button</hn-button>
  <hn-button variant="text" disabled>Button</hn-button>
</hn-stack>\`
      }
    }
  }
}`,...(q=(_=r.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"Sử dụng thuộc tính `disabled` của `hn-button` để vô hiệu hoá nó.",...(V=(T=r.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var x,w,C,P,$;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  argTypes: {
    variant: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnButton,
      HnStack,
      HnIcon
    },
    setup() {
      return {
        args,
        IcoSave
      };
    },
    template: \`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args">
          <template #leading>
            <hn-icon :as="IcoSave" />
          </template>
          Button
        </hn-button>
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="horizontal">
  <hn-button variant="primary">
    <template #leading>
      <hn-icon :as="IcoSave" />
    </template>
    Button
  </hn-button>
</hn-stack>\`
      }
    }
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Sử dụng slot `leading` trong `hn-button`.",...($=(P=s.parameters)==null?void 0:P.docs)==null?void 0:$.description}}};var E,M,N,R,K;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  argTypes: {
    variant: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnButton,
      HnStack,
      HnIcon
    },
    setup() {
      return {
        args,
        IcoSave
      };
    },
    template: \`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args">
          Button
          <template #trailing>
            <hn-icon :as="IcoSave" />
          </template>
        </hn-button>
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="horizontal">
  <hn-button variant="primary">
    Button
    <template #trailing>
      <hn-icon :as="IcoSave" />
    </template>
  </hn-button>
</hn-stack>\`
      }
    }
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source},description:{story:"Sử dụng slot `trailing` trong `hn-button`.",...(K=(R=i.parameters)==null?void 0:R.docs)==null?void 0:K.description}}};const nn=["Cover","Variant","Size","Disabled","Leading","Trailing"];export{u as Cover,r as Disabled,s as Leading,o as Size,i as Trailing,a as Variant,nn as __namedExportsOrder,Z as default};
