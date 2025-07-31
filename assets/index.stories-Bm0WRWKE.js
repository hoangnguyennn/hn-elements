import{c as j,o as q,k as A}from"./vue.esm-bundler-BJHP4A_q.js";import{_ as i}from"./stack-ajNgoUDs.js";import{_ as N}from"./utils-C-Z_aRPN.js";import{_ as t}from"./button-ebXJBgp5.js";const F={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none"};function G(n,u){return q(),j("svg",F,u[0]||(u[0]=[A('<g clip-path="url(#a)"><g clip-path="url(#b)"><path fill="#fff" d="M13.025 2.547H2v12.906h14V5.522zm-.334 12.086H5.31v-4.02a.41.41 0 0 1 .41-.41h6.562a.41.41 0 0 1 .41.41zm0-7.711H5.31V3.367h5.195v2.735h1.094V3.367h1.093z"></path></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h18v18H0z"></path></clipPath><clipPath id="b"><path fill="#fff" d="M2 2h14v14H2z"></path></clipPath></defs>',2)]))}const O={render:G},U={title:"HnButton",component:t},c={render:n=>({components:{HnButton:t},setup(){return{args:n}},template:'<hn-button v-bind="args">Button</hn-button>'}),parameters:{docs:{source:{code:"<hn-button>Button</hn-button>"}}}},a={argTypes:{variant:{control:!1}},render:n=>({components:{HnButton:t,HnStack:i},setup(){return{args:n}},template:`
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
            <hn-icon :as="IcoSave" ariaLabel="Save" />
          </template>
          Button
        </hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button variant="primary">
    <template #leading>
      <hn-icon :as="IcoSave" ariaLabel="Save" />
    </template>
    Button
  </hn-button>
</hn-stack>`}}}},s={args:{variant:"primary"},argTypes:{variant:{control:!1}},render:n=>({components:{HnButton:t,HnStack:i,HnIcon:N},setup(){return{args:n,IcoSave:O}},template:`
      <hn-stack direction="horizontal">
        <hn-button v-bind="args">
          Button
          <template #trailing>
            <hn-icon :as="IcoSave" ariaLabel="Save" />
          </template>
        </hn-button>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-button variant="primary">
    Button
    <template #trailing>
      <hn-icon :as="IcoSave" ariaLabel="Save" />
    </template>
  </hn-button>
</hn-stack>`}}}};var h,d,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(d=c.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var p,l,m,v,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Sử dụng thuộc tính `variant` của `hn-button` để thay đổi màu sắc của nó.",...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var B,k,S,z,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:"Sử dụng thuộc tính `size` của `hn-button` để thay đổi kích thước của nó.",...(y=(z=o.parameters)==null?void 0:z.docs)==null?void 0:y.description}}};var f,H,I,_,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(H=r.parameters)==null?void 0:H.docs)==null?void 0:I.source},description:{story:"Sử dụng thuộc tính `disabled` của `hn-button` để vô hiệu hoá nó.",...(x=(_=r.parameters)==null?void 0:_.docs)==null?void 0:x.description}}};var T,L,V,w,P;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            <hn-icon :as="IcoSave" ariaLabel="Save" />
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
      <hn-icon :as="IcoSave" ariaLabel="Save" />
    </template>
    Button
  </hn-button>
</hn-stack>\`
      }
    }
  }
}`,...(V=(L=e.parameters)==null?void 0:L.docs)==null?void 0:V.source},description:{story:"Sử dụng slot `leading` trong `hn-button`.",...(P=(w=e.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var M,C,D,E,$;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
            <hn-icon :as="IcoSave" ariaLabel="Save" />
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
      <hn-icon :as="IcoSave" ariaLabel="Save" />
    </template>
  </hn-button>
</hn-stack>\`
      }
    }
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"Sử dụng slot `trailing` trong `hn-button`.",...($=(E=s.parameters)==null?void 0:E.docs)==null?void 0:$.description}}};const W=["Cover","Variant","Size","Disabled","Leading","Trailing"];export{c as Cover,r as Disabled,e as Leading,o as Size,s as Trailing,a as Variant,W as __namedExportsOrder,U as default};
