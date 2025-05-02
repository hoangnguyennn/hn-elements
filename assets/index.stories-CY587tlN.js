import{c as d,o as p,a as h,r as H,b as C,F as R,g as I,q as f,j as S,t as E,u as s,N as P,s as $,v as A,x as B}from"./vue.esm-bundler-DcsGvaBf.js";import{_ as O}from"./icon-button-BNGkgLU_.js";import"./index-BRohGxrE.js";import{i as x}from"./index-B_VJtCIg.js";import{u as K}from"./index-CvFbHmVf.js";import"./icon-DuCXg-vs.js";const L={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none"};function M(n,t){return p(),d("svg",L,t[0]||(t[0]=[h("path",{fill:"#00ACE5",d:"M14.08 4.747a.833.833 0 0 1 0 1.18l-5.607 5.606a.663.663 0 0 1-.94 0L1.92 5.92a.837.837 0 0 1 0-1.173.833.833 0 0 1 1.18 0L8 9.64l4.9-4.9a.84.84 0 0 1 1.18.007"},null,-1)]))}const j={render:M},N=Symbol("collapse"),F=()=>{const n=R(N);if(!n)throw new Error("hn-collapse-item phải được sử dụng bên trong hn-collapse");const t=H(null),e=C(()=>t.value?n.elements.value.get(t.value)??-1:-1),o=C(()=>x(e.value)?n.modelValue.value.includes(e.value):!1);return{index:e,isActive:o,elementRef:l=>{t.value=l,l&&n.register(l)},onTrigger:n.onTrigger}},D=["data-open"],Y={key:0,class:"hn-collapse--title"},z={class:"hn-collapse--content"},y=I({name:"HnCollapseItem",__name:"collapse-item",props:{title:{}},setup(n){const{isActive:t,index:e,elementRef:o,onTrigger:r}=F();return(l,u)=>(p(),d("div",{ref:a=>s(o)(a),class:"hn-collapse--item","data-open":s(t)},[h("div",{class:"hn-collapse--trigger",onClick:u[0]||(u[0]=P(a=>s(r)(s(e)),["prevent"]))},[l.title?(p(),d("div",Y,E(l.title),1)):f(l.$slots,"title",{key:1}),S(s(O),{as:s(j),class:"hn-collapse--icon"},null,8,["as"])]),h("div",z,[f(l.$slots,"default")])],8,D))}});y.__docgenInfo={exportName:"default",displayName:"collapse-item",type:1,props:[{name:"title",global:!1,description:"Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"any",description:"Nội dung chính của collapse item.",declarations:[],schema:"any"},{name:"title",type:"any",description:"Nội dung của collapse item. Có thể sử dụng prop `title` thay thế.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & CollapseItemSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & CollapseItemSlots"}},{name:"title",type:"string | undefined",description:"Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/collapse/collapse-item.vue"};const G={class:"hn-collapse"},m=I({name:"HnCollapse",__name:"collapse",props:$({accordion:{type:Boolean}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=n,e=A(n,"modelValue"),{register:o,unregister:r,map:l}=K();return B(N,{modelValue:e,register:o,unregister:r,elements:l,onTrigger:a=>{if(t.accordion){e.value.includes(a)?e.value=[]:e.value=[a];return}e.value.includes(a)?e.value=e.value.filter(g=>g!==a):e.value=[...e.value,a]}}),(a,g)=>(p(),d("div",G,[f(a.$slots,"default")]))}});m.__docgenInfo={exportName:"default",displayName:"collapse",type:1,props:[{name:"accordion",global:!1,description:"Hiệu ứng accordion.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"CollapseValue | undefined",declarations:[],schema:{kind:"enum",type:"CollapseValue | undefined",schema:["undefined",{kind:"array",type:"CollapseValue"}]},default:"[]"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: CollapseValue]",signature:'(event: "update:modelValue", value: CollapseValue): void',declarations:[],schema:[{kind:"array",type:"CollapseValue"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"modelValue",type:"CollapseValue | undefined",description:"",declarations:[],schema:{kind:"enum",type:"CollapseValue | undefined",schema:["undefined",{kind:"array",type:"CollapseValue"}]}},{name:"accordion",type:"boolean | undefined",description:"Hiệu ứng accordion.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/collapse/collapse.vue"};const ee={title:"HnCollapse",component:m},c={render:n=>({components:{HnCollapse:m,HnCollapseItem:y},setup(){return{args:n}},template:`
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
