import{_ as S}from"./stack-C2Tmd1HX.js";import{c as T,o as l,a as C,l as w,e as H,n as $,C as q,x as M,v as c,J as g,K as m}from"./vue.esm-bundler-BpvBiuDb.js";import{_}from"./icon-button-1QRRtaM4.js";import"./utils-DSnaB4L3.js";const N={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none"};function A(e,s){return l(),T("svg",N,s[0]||(s[0]=[C("path",{fill:"#4B3A5A",d:"m8.882 7.986 4.974-4.96a.598.598 0 0 0-.433-.987.6.6 0 0 0-.413.143l-4.974 4.96-4.974-4.966a.603.603 0 0 0-1.029.425.6.6 0 0 0 .177.425l4.98 4.96-4.98 4.961a.598.598 0 1 0 .846.844l4.98-4.96 4.974 4.96a.601.601 0 0 0 .99-.432.6.6 0 0 0-.144-.412z"},null,-1)]))}const B={render:A},K=["data-size","tabindex"],t=w({name:"HnTag",__name:"tag",props:{size:{default:"medium"},closeable:{type:Boolean,default:!1},closeAriaLabel:{}},emits:["close"],setup(e){const s=e,L=H(()=>s.closeAriaLabel||"Xóa tag");return(n,a)=>(l(),T("div",{class:"hn-tag","data-size":n.size,role:"button",tabindex:n.closeable?0:void 0,onKeydown:[a[1]||(a[1]=g(m(d=>n.$emit("close"),["prevent"]),["enter"])),a[2]||(a[2]=g(m(d=>n.$emit("close"),["prevent"]),["space"]))]},[$(n.$slots,"default"),n.closeable?(l(),q(c(_),{key:0,as:c(B),class:"hn-tag--close",ariaLabel:L.value,onClick:a[0]||(a[0]=d=>n.$emit("close"))},null,8,["as","ariaLabel"])):M("",!0)],40,K))}});t.__docgenInfo={exportName:"default",displayName:"tag",type:1,props:[{name:"size",global:!1,description:"Kích thước của tag.",tags:[{name:"default",text:"'medium'"}],required:!1,type:"TagSize | undefined",declarations:[],schema:{kind:"enum",type:"TagSize | undefined",schema:["undefined",'"small"','"medium"','"large"']},default:'"medium"'},{name:"closeable",global:!1,description:"Chỉ ra rằng tag có thể đóng hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"closeAriaLabel",global:!1,description:"Nhãn aria cho button đóng tag.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"close",description:"Sự kiện khi tag được đóng.",tags:[],type:"[]",signature:'(event: "close"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"TagSize",description:"Kích thước của tag.",declarations:[],schema:{kind:"enum",type:"TagSize",schema:['"small"','"medium"','"large"']}},{name:"closeable",type:"boolean",description:"Chỉ ra rằng tag có thể đóng hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"closeAriaLabel",type:"string | undefined",description:"Nhãn aria cho button đóng tag.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/tag/tag.vue"};const E={title:"HnTag",component:t,render:e=>({components:{HnTag:t},setup(){return{args:e}},template:'<hn-tag v-bind="args">Tag</hn-tag>'})},r={parameters:{docs:{source:{code:"<hn-tag>Tag</hn-tag>"}}}},i={argTypes:{size:{control:!1}},render:e=>({components:{HnTag:t,HnStack:S},setup(){return{args:e}},template:`
      <hn-stack direction="horizontal">
        <hn-tag v-bind="args" size="small">Small</hn-tag>
        <hn-tag v-bind="args" size="medium">Medium</hn-tag>
        <hn-tag v-bind="args" size="large">Large</hn-tag>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-tag size="small">Small</hn-tag>
  <hn-tag size="medium">Medium</hn-tag>
  <hn-tag size="large">Large</hn-tag>
</hn-stack>`}}}},o={args:{closeable:!0},argTypes:{size:{control:!1}},render:e=>({components:{HnTag:t,HnStack:S},setup(){return{args:e}},template:`
      <hn-stack direction="horizontal">
        <hn-tag v-bind="args" size="small">Small</hn-tag>
        <hn-tag v-bind="args" size="medium">Medium</hn-tag>
        <hn-tag v-bind="args" size="large">Large</hn-tag>
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack direction="horizontal">
  <hn-tag closeable size="small">Small</hn-tag>
  <hn-tag closeable size="medium">Medium</hn-tag>
  <hn-tag closeable size="large">Large</hn-tag>
</hn-stack>`}}}};var u,h,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<hn-tag>Tag</hn-tag>\`
      }
    }
  }
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var f,b,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var z,k,v;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const I=["Cover","Size","Closeable"];export{o as Closeable,r as Cover,i as Size,I as __namedExportsOrder,E as default};
