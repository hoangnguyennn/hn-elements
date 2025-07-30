import{l as _,m as p,u as C,w as G,c as V,n as q,o as w,p as R,r as P,e as x,H as N,S as E,y as c}from"./vue.esm-bundler-IyFnVC7C.js";import{u as D}from"./index-BPnEtLoS.js";const H=Symbol("tabGroup"),K=["data-direction"],d=_({name:"HnTabGroup",__name:"tab-group",props:p({direction:{default:"horizontal"}},{modelValue:{},modelModifiers:{}}),emits:p(["change"],["update:modelValue"]),setup(e,{emit:n}){const a=C(e,"modelValue"),o=n;G(a,r=>o("change",r));const{register:t,unregister:u,map:b}=D();return R(H,{modelValue:a,register:t,unregister:u,elements:b}),(r,S)=>(w(),V("div",{class:"hn-tab-group","data-direction":r.direction},[q(r.$slots,"default")],8,K))}});d.__docgenInfo={exportName:"default",displayName:"tab-group",type:1,props:[{name:"direction",global:!1,description:"Hướng của tab group.",tags:[],required:!1,type:"TabGroupDirection | undefined",declarations:[],schema:{kind:"enum",type:"TabGroupDirection | undefined",schema:["undefined",'"horizontal"','"vertical"']},default:'"horizontal"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: number | undefined]",signature:'(event: "update:modelValue", value: number | undefined): void',declarations:[],schema:[{kind:"enum",type:"number | undefined",schema:["undefined","number"]}]},{name:"change",description:"Kích hoạt khi giá trị của tab group thay đổi.",tags:[],type:"[TabValue]",signature:'(event: "change", args_0: TabValue): void',declarations:[],schema:[{kind:"enum",type:"TabValue",schema:["undefined","number"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"direction",type:"TabGroupDirection",description:"Hướng của tab group.",declarations:[],schema:{kind:"enum",type:"TabGroupDirection",schema:['"horizontal"','"vertical"']}},{name:"modelValue",type:"number | undefined",description:"",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/tabs/tab-group.vue"};const O=()=>{const e=N(H);if(!e)throw new Error("hn-tab phải được sử dụng bên trong hn-tab-group");const n=P(null),a=x(()=>n.value?e.elements.value.get(n.value):-1),o=t=>{n.value=t,t&&e.register(t)};return{modelValue:e.modelValue,index:a,elementRef:o}},l=_({name:"HnTab",__name:"tab",setup(e){const{modelValue:n,index:a,elementRef:o}=O(),t=()=>{n.value=a.value};return(u,b)=>(w(),V("button",{ref:r=>c(o)(r),class:E(["hn-tab",{active:c(n)===c(a)}]),onClick:t},[q(u.$slots,"default")],2))}});l.__docgenInfo={exportName:"default",displayName:"tab",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/tabs/tab.vue"};const I={title:"HnTabs",component:d},i={render:e=>({components:{HnTab:l,HnTabGroup:d},setup(){return{args:e}},template:`
      <hn-tab-group v-bind="args">
        <hn-tab>Tab 1</hn-tab>
        <hn-tab>Tab 2</hn-tab>
        <hn-tab>Tab 3</hn-tab>
      </hn-tab-group>
    `}),parameters:{docs:{source:{code:`<hn-tab-group>
  <hn-tab>Tab 1</hn-tab>
  <hn-tab>Tab 2</hn-tab>
  <hn-tab>Tab 3</hn-tab>
</hn-tab-group>`}}}},s={args:{direction:"vertical"},render:e=>({components:{HnTab:l,HnTabGroup:d},setup(){return{args:e}},template:`
      <hn-tab-group v-bind="args">
        <hn-tab>Tab 1</hn-tab>
        <hn-tab>Tab 2</hn-tab>
        <hn-tab>Tab 3</hn-tab>
      </hn-tab-group>
    `}),parameters:{docs:{source:{code:`<hn-tab-group direction="vertical">
  <hn-tab>Tab 1</hn-tab>
  <hn-tab>Tab 2</hn-tab>
  <hn-tab>Tab 3</hn-tab>
</hn-tab-group>`}}}};var m,h,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnTab,
      HnTabGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-tab-group v-bind="args">
        <hn-tab>Tab 1</hn-tab>
        <hn-tab>Tab 2</hn-tab>
        <hn-tab>Tab 3</hn-tab>
      </hn-tab-group>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-tab-group>
  <hn-tab>Tab 1</hn-tab>
  <hn-tab>Tab 2</hn-tab>
  <hn-tab>Tab 3</hn-tab>
</hn-tab-group>\`
      }
    }
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,T,k,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    direction: 'vertical'
  },
  render: args => ({
    components: {
      HnTab,
      HnTabGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-tab-group v-bind="args">
        <hn-tab>Tab 1</hn-tab>
        <hn-tab>Tab 2</hn-tab>
        <hn-tab>Tab 3</hn-tab>
      </hn-tab-group>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-tab-group direction="vertical">
  <hn-tab>Tab 1</hn-tab>
  <hn-tab>Tab 2</hn-tab>
  <hn-tab>Tab 3</hn-tab>
</hn-tab-group>\`
      }
    }
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source},description:{story:"Sử dụng thuộc tính `direction` của `hn-tab`group` để đổi hướng của nó.",...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};const j=["Cover","Direction"];export{i as Cover,s as Direction,j as __namedExportsOrder,I as default};
