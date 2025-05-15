import{c as d,o as p,a as h,r as N,e as C,H as R,l as I,n as f,t as S,B as P,y as s,P as E,m as $,u as A,p as B}from"./vue.esm-bundler-BMJOeYAP.js";import{_ as O}from"./icon-button-kj_xkV0a.js";import"./index-BRohGxrE.js";import{a as K}from"./index-DOrznbbK.js";import{u as L}from"./index-BIDOFV-N.js";import"./icon-DQnXTdSR.js";const M={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none"};function x(n,t){return p(),d("svg",M,t[0]||(t[0]=[h("path",{fill:"#00ACE5",d:"M14.08 4.747a.833.833 0 0 1 0 1.18l-5.607 5.606a.663.663 0 0 1-.94 0L1.92 5.92a.837.837 0 0 1 0-1.173.833.833 0 0 1 1.18 0L8 9.64l4.9-4.9a.84.84 0 0 1 1.18.007"},null,-1)]))}const j={render:x},H=Symbol("collapse"),F=()=>{const n=R(H);if(!n)throw new Error("hn-collapse-item phải được sử dụng bên trong hn-collapse");const t=N(null),e=C(()=>t.value?n.elements.value.get(t.value)??-1:-1),o=C(()=>K(e.value)?n.modelValue.value.includes(e.value):!1);return{index:e,isActive:o,elementRef:l=>{t.value=l,l&&n.register(l)},onTrigger:n.onTrigger}},D=["data-open"],Y={key:0,class:"hn-collapse--title"},z={class:"hn-collapse--content"},y=I({name:"HnCollapseItem",__name:"collapse-item",props:{title:{}},setup(n){const{isActive:t,index:e,elementRef:o,onTrigger:r}=F();return(l,u)=>(p(),d("div",{ref:a=>s(o)(a),class:"hn-collapse--item","data-open":s(t)},[h("div",{class:"hn-collapse--trigger",onClick:u[0]||(u[0]=E(a=>s(r)(s(e)),["prevent"]))},[l.title?(p(),d("div",Y,P(l.title),1)):f(l.$slots,"title",{key:1}),S(s(O),{as:s(j),class:"hn-collapse--icon"},null,8,["as"])]),h("div",z,[f(l.$slots,"default")])],8,D))}});y.__docgenInfo={exportName:"default",displayName:"collapse-item",type:1,props:[{name:"title",global:!1,description:"Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"any",description:"Nội dung chính của collapse item.",declarations:[],schema:"any"},{name:"title",type:"any",description:"Nội dung của collapse item. Có thể sử dụng prop `title` thay thế.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & CollapseItemSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & CollapseItemSlots"}},{name:"title",type:"string | undefined",description:"Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/collapse/collapse-item.vue"};const G={class:"hn-collapse"},m=I({name:"HnCollapse",__name:"collapse",props:$({accordion:{type:Boolean}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=n,e=A(n,"modelValue"),{register:o,unregister:r,map:l}=L();return B(H,{modelValue:e,register:o,unregister:r,elements:l,onTrigger:a=>{if(t.accordion){e.value.includes(a)?e.value=[]:e.value=[a];return}e.value.includes(a)?e.value=e.value.filter(g=>g!==a):e.value=[...e.value,a]}}),(a,g)=>(p(),d("div",G,[f(a.$slots,"default")]))}});m.__docgenInfo={exportName:"default",displayName:"collapse",type:1,props:[{name:"accordion",global:!1,description:"Hiệu ứng accordion.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"CollapseValue | undefined",declarations:[],schema:{kind:"enum",type:"CollapseValue | undefined",schema:["undefined",{kind:"array",type:"CollapseValue"}]},default:"[]"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: CollapseValue]",signature:'(event: "update:modelValue", value: CollapseValue): void',declarations:[],schema:[{kind:"array",type:"CollapseValue"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"modelValue",type:"CollapseValue | undefined",description:"",declarations:[],schema:{kind:"enum",type:"CollapseValue | undefined",schema:["undefined",{kind:"array",type:"CollapseValue"}]}},{name:"accordion",type:"boolean | undefined",description:"Hiệu ứng accordion.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/collapse/collapse.vue"};const ee={title:"HnCollapse",component:m},c={render:n=>({components:{HnCollapse:m,HnCollapseItem:y},setup(){return{args:n}},template:`
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `}),parameters:{docs:{source:{code:`<hn-collapse>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`}}}},i={args:{accordion:!0},argTypes:{accordion:{control:!1}},render:n=>({components:{HnCollapse:m,HnCollapseItem:y},setup(){return{args:n}},template:`
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `}),parameters:{docs:{source:{code:`<hn-collapse accordion>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`}}}};var v,k,b;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnCollapse,
      HnCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-collapse>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>\`
      }
    }
  }
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var T,_,V,w,q;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    accordion: true
  },
  argTypes: {
    accordion: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnCollapse,
      HnCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-collapse accordion>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>\`
      }
    }
  }
}`,...(V=(_=i.parameters)==null?void 0:_.docs)==null?void 0:V.source},description:{story:"Sử dụng thuộc tính accordion của `hn-collapse` để tạo accordion.",...(q=(w=i.parameters)==null?void 0:w.docs)==null?void 0:q.description}}};const ne=["Cover","Accordion"];export{i as Accordion,c as Cover,ne as __namedExportsOrder,ee as default};
