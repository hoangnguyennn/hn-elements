import{c as j,o as q,k as A}from"./vue.esm-bundler-CZAkn07l.js";import{_ as t}from"./button-Dyyu5h-X.js";import{_ as i}from"./stack-DdcZa8AG.js";import{_ as N}from"./icon-C1NSCHJn.js";const F={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none"};function G(n,u){return q(),j("svg",F,u[0]||(u[0]=[A('<g clip-path="url(#a)"><g clip-path="url(#b)"><path fill="#fff" d="M13.025 2.547H2v12.906h14V5.522zm-.334 12.086H5.31v-4.02a.41.41 0 0 1 .41-.41h6.562a.41.41 0 0 1 .41.41zm0-7.711H5.31V3.367h5.195v2.735h1.094V3.367h1.093z"></path></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h18v18H0z"></path></clipPath><clipPath id="b"><path fill="#fff" d="M2 2h14v14H2z"></path></clipPath></defs>',2)]))}const O={render:G},U={title:"HnButton",component:t},c={render:n=>({components:{HnButton:t},setup(){return{args:n}},template:'<hn-button v-bind="args">Button</hn-button>'}),parameters:{docs:{source:{code:"<hn-button>Button</hn-button>"}}}},a={argTypes:{variant:{control:!1}},render:n=>({components:{HnButton:t,HnStack:i},setup(){return{args:n}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary">Button</hn-button>
        <hn-button v-bind="args" variant="secondary">Button</hn-button>
        <hn-button v-bind="args" variant="text">Button</hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button variant="primary">Button</hn-button>
  <hn-button variant="secondary">Button</hn-button>
  <hn-button variant="text">Button</hn-button>
</hn-stack>`}}}},o={argTypes:{size:{control:!1}},render:n=>({components:{HnButton:t,HnStack:i},setup(){return{args:n}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" size="small">Button</hn-button>
        <hn-button v-bind="args" size="medium">Button</hn-button>
        <hn-button v-bind="args" size="large">Button</hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button size="small">Button</hn-button>
  <hn-button size="medium">Button</hn-button>
  <hn-button size="large">Button</hn-button>
</hn-stack>`}}}},r={argTypes:{disabled:{control:!1},variant:{control:!1}},render:n=>({components:{HnButton:t,HnStack:i},setup(){return{args:n}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args" variant="primary" disabled>Button</hn-button>
        <hn-button v-bind="args" variant="secondary" disabled>Button</hn-button>
        <hn-button v-bind="args" variant="text" disabled>Button</hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button variant="primary" disabled>Button</hn-button>
  <hn-button variant="secondary" disabled>Button</hn-button>
  <hn-button variant="text" disabled>Button</hn-button>
</hn-stack>`}}}},e={args:{variant:"primary"},argTypes:{variant:{control:!1}},render:n=>({components:{HnButton:t,HnStack:i,HnIcon:N},setup(){return{args:n,IcoSave:O}},template:`
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
</hn-stack>`}}}},s={args:{variant:"primary"},argTypes:{variant:{control:!1}},render:n=>({components:{HnButton:t,HnStack:i,HnIcon:N},setup(){return{args:n,IcoSave:O}},template:`
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
</hn-stack>`}}}};var h,d,p;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(p=(d=c.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,l,m,g,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Sử dụng thuộc tính `variant` của `hn-button` để thay đổi màu sắc của nó.",...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.description}}};var B,k,z,y,f;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(k=o.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:"Sử dụng thuộc tính `size` của `hn-button` để thay đổi kích thước của nó.",...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var S,H,I,_,x;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(H=r.parameters)==null?void 0:H.docs)==null?void 0:I.source},description:{story:"Sử dụng thuộc tính `disabled` của `hn-button` để vô hiệu hoá nó.",...(x=(_=r.parameters)==null?void 0:_.docs)==null?void 0:x.description}}};var T,V,w,P,M;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(V=e.parameters)==null?void 0:V.docs)==null?void 0:w.source},description:{story:"Sử dụng slot `leading` trong `hn-button`.",...(M=(P=e.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};var C,D,E,L,$;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"Sử dụng slot `trailing` trong `hn-button`.",...($=(L=s.parameters)==null?void 0:L.docs)==null?void 0:$.description}}};const W=["Cover","Variant","Size","Disabled","Leading","Trailing"];export{c as Cover,r as Disabled,e as Leading,o as Size,s as Trailing,a as Variant,W as __namedExportsOrder,U as default};
