import{_ as z}from"./stack-DE21IiHx.js";import{c as k,o,a as b,l as v,n as S,q as T,z as _,y as l}from"./vue.esm-bundler-CZAkn07l.js";import{_ as C}from"./icon-button-B7i4gyoI.js";import"./icon-C1NSCHJn.js";const H={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none"};function w(e,n){return o(),k("svg",H,n[0]||(n[0]=[b("path",{fill:"#4B3A5A",d:"m8.882 7.986 4.974-4.96a.598.598 0 0 0-.433-.987.6.6 0 0 0-.413.143l-4.974 4.96-4.974-4.966a.603.603 0 0 0-1.029.425.6.6 0 0 0 .177.425l4.98 4.96-4.98 4.961a.598.598 0 1 0 .846.844l4.98-4.96 4.974 4.96a.601.601 0 0 0 .99-.432.6.6 0 0 0-.144-.412z"},null,-1)]))}const q={render:w},L=["data-size"],a=v({name:"HnTag",__name:"tag",props:{size:{default:"medium"},closeable:{type:Boolean,default:!1}},emits:["close"],setup(e){return(n,i)=>(o(),k("div",{class:"hn-tag","data-size":n.size},[S(n.$slots,"default"),n.closeable?(o(),T(l(C),{key:0,as:l(q),class:"hn-tag--close",onClick:i[0]||(i[0]=M=>n.$emit("close"))},null,8,["as"])):_("",!0)],8,L))}});a.__docgenInfo={exportName:"default",displayName:"tag",type:1,props:[{name:"size",global:!1,description:"Kích thước của tag.",tags:[{name:"default",text:"'medium'"}],required:!1,type:"TagSize | undefined",declarations:[],schema:{kind:"enum",type:"TagSize | undefined",schema:["undefined",'"medium"','"small"','"large"']},default:'"medium"'},{name:"closeable",global:!1,description:"Chỉ ra rằng tag có thể đóng hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"close",description:"Sự kiện khi tag được đóng.",tags:[],type:"[]",signature:'(event: "close"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"TagSize",description:"Kích thước của tag.",declarations:[],schema:{kind:"enum",type:"TagSize",schema:['"medium"','"small"','"large"']}},{name:"closeable",type:"boolean",description:"Chỉ ra rằng tag có thể đóng hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/tag/tag.vue"};const K={title:"HnTag",component:a,render:e=>({components:{HnTag:a},setup(){return{args:e}},template:'<hn-tag v-bind="args">Tag</hn-tag>'})},s={parameters:{docs:{source:{code:"<hn-tag>Tag</hn-tag>"}}}},t={argTypes:{size:{control:!1}},render:e=>({components:{HnTag:a,HnStack:z},setup(){return{args:e}},template:`
      <hn-stack direction="horizontal">
        <hn-tag v-bind="args" size="small">Small</hn-tag>
        <hn-tag v-bind="args" size="medium">Medium</hn-tag>
        <hn-tag v-bind="args" size="large">Large</hn-tag>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-tag size="small">Small</hn-tag>
  <hn-tag size="medium">Medium</hn-tag>
  <hn-tag size="large">Large</hn-tag>
</hn-stack>`}}}},r={args:{closeable:!0},argTypes:{size:{control:!1}},render:e=>({components:{HnTag:a,HnStack:z},setup(){return{args:e}},template:`
      <hn-stack direction="horizontal">
        <hn-tag v-bind="args" size="small">Small</hn-tag>
        <hn-tag v-bind="args" size="medium">Medium</hn-tag>
        <hn-tag v-bind="args" size="large">Large</hn-tag>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-tag closeable size="small">Small</hn-tag>
  <hn-tag closeable size="medium">Medium</hn-tag>
  <hn-tag closeable size="large">Large</hn-tag>
</hn-stack>`}}}};var d,c,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<hn-tag>Tag</hn-tag>\`
      }
    }
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,h,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnTag,
      HnStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-stack direction="horizontal">
        <hn-tag v-bind="args" size="small">Small</hn-tag>
        <hn-tag v-bind="args" size="medium">Medium</hn-tag>
        <hn-tag v-bind="args" size="large">Large</hn-tag>
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="horizontal">
  <hn-tag size="small">Small</hn-tag>
  <hn-tag size="medium">Medium</hn-tag>
  <hn-tag size="large">Large</hn-tag>
</hn-stack>\`
      }
    }
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var p,f,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    closeable: true
  },
  argTypes: {
    size: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnTag,
      HnStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-stack direction="horizontal">
        <hn-tag v-bind="args" size="small">Small</hn-tag>
        <hn-tag v-bind="args" size="medium">Medium</hn-tag>
        <hn-tag v-bind="args" size="large">Large</hn-tag>
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack direction="horizontal">
  <hn-tag closeable size="small">Small</hn-tag>
  <hn-tag closeable size="medium">Medium</hn-tag>
  <hn-tag closeable size="large">Large</hn-tag>
</hn-stack>\`
      }
    }
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const P=["Cover","Size","Closeable"];export{r as Closeable,s as Cover,t as Size,P as __namedExportsOrder,K as default};
