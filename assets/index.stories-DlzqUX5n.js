import{c as h,o as f,a as y,r as v,e as b,H as W,l as L,n as C,t as j,B as F,y as a,Q as D,m as Q,u as Y,p as z}from"./vue.esm-bundler-IyFnVC7C.js";import{_ as G}from"./icon-button-DMO1Z5FU.js";import"./index-BRohGxrE.js";import{a as J}from"./index-DOrznbbK.js";import{u as U}from"./index-BPnEtLoS.js";import"./icon-IotH_rmg.js";const X={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none"};function Z(e,t){return f(),h("svg",X,t[0]||(t[0]=[y("path",{fill:"#00ACE5",d:"M14.08 4.747a.833.833 0 0 1 0 1.18l-5.607 5.606a.663.663 0 0 1-.94 0L1.92 5.92a.837.837 0 0 1 0-1.173.833.833 0 0 1 1.18 0L8 9.64l4.9-4.9a.84.84 0 0 1 1.18.007"},null,-1)]))}const ee={render:Z},x=Symbol("collapse"),ne=()=>{const e=W(x);if(!e)throw new Error("hn-collapse-item phải được sử dụng bên trong hn-collapse");const t=v(null),n=b(()=>t.value?e.elements.value.get(t.value)??-1:-1),i=b(()=>J(n.value)?e.modelValue.value.includes(n.value):!1);return{index:n,isActive:i,elementRef:l=>{t.value=l,l&&e.register(l)},onTrigger:e.onTrigger}},te=["data-open"],le={key:0,class:"hn-collapse--title"},oe={class:"hn-collapse--content"},d=L({name:"HnCollapseItem",__name:"collapse-item",props:{title:{}},setup(e){const{isActive:t,index:n,elementRef:i,onTrigger:m}=ne();return(l,g)=>(f(),h("div",{ref:o=>a(i)(o),class:"hn-collapse--item","data-open":a(t)},[y("div",{class:"hn-collapse--trigger",onClick:g[0]||(g[0]=D(o=>a(m)(a(n)),["prevent"]))},[l.title?(f(),h("div",le,F(l.title),1)):C(l.$slots,"title",{key:1}),j(a(G),{as:a(ee),class:"hn-collapse--icon"},null,8,["as"])]),y("div",oe,[C(l.$slots,"default")])],8,te))}});d.__docgenInfo={exportName:"default",displayName:"collapse-item",type:1,props:[{name:"title",global:!1,description:"Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"any",description:"Nội dung chính của collapse item.",declarations:[],schema:"any"},{name:"title",type:"any",description:"Nội dung của collapse item. Có thể sử dụng prop `title` thay thế.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & CollapseItemSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & CollapseItemSlots"}},{name:"title",type:"string | undefined",description:"Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/collapse/collapse-item.vue"};const ae={class:"hn-collapse"},s=L({name:"HnCollapse",__name:"collapse",props:Q({accordion:{type:Boolean}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=Y(e,"modelValue"),{register:i,unregister:m,map:l}=U();return z(x,{modelValue:n,register:i,unregister:m,elements:l,onTrigger:o=>{if(t.accordion){n.value.includes(o)?n.value=[]:n.value=[o];return}n.value.includes(o)?n.value=n.value.filter(T=>T!==o):n.value=[...n.value,o]}}),(o,T)=>(f(),h("div",ae,[C(o.$slots,"default")]))}});s.__docgenInfo={exportName:"default",displayName:"collapse",type:1,props:[{name:"accordion",global:!1,description:"Hiệu ứng accordion. Khi true, chỉ có thể mở một item tại một thời điểm.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"CollapseValue | undefined",declarations:[],schema:{kind:"enum",type:"CollapseValue | undefined",schema:["undefined",{kind:"array",type:"CollapseValue"}]},default:"[]"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: CollapseValue]",signature:'(event: "update:modelValue", value: CollapseValue): void',declarations:[],schema:[{kind:"array",type:"CollapseValue"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"modelValue",type:"CollapseValue | undefined",description:"",declarations:[],schema:{kind:"enum",type:"CollapseValue | undefined",schema:["undefined",{kind:"array",type:"CollapseValue"}]}},{name:"accordion",type:"boolean | undefined",description:"Hiệu ứng accordion. Khi true, chỉ có thể mở một item tại một thời điểm.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/collapse/collapse.vue"};const me={title:"HnCollapse",component:s},u={render:e=>({components:{HnCollapse:s,HnCollapseItem:d},setup(){return{args:e}},template:`
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `}),parameters:{docs:{source:{code:`<hn-collapse>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`}}}},c={args:{accordion:!0},argTypes:{accordion:{control:!1}},render:e=>({components:{HnCollapse:s,HnCollapseItem:d},setup(){return{args:e}},template:`
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `}),parameters:{docs:{source:{code:`<hn-collapse accordion>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`}}}},r={render:e=>({components:{HnCollapse:s,HnCollapseItem:d},setup(){const t=v([0,2]);return{args:e,modelValue:t}},template:`
      <hn-collapse v-model="modelValue" v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `}),parameters:{docs:{source:{code:`<script setup>
const modelValue = ref([0, 2]) // Mở item đầu tiên và item thứ 3
<\/script>

<hn-collapse v-model="modelValue">
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`}}}},p={args:{accordion:!0},argTypes:{accordion:{control:!1}},render:e=>({components:{HnCollapse:s,HnCollapseItem:d},setup(){const t=v([1]);return{args:e,modelValue:t}},template:`
      <hn-collapse v-model="modelValue" v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `}),parameters:{docs:{source:{code:`<script setup>
const modelValue = ref([1]) // Mở item thứ 2
<\/script>

<hn-collapse v-model="modelValue" accordion>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`}}}};var V,k,_;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(k=u.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var I,H,w,S,q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(H=c.parameters)==null?void 0:H.docs)==null?void 0:w.source},description:{story:"Sử dụng thuộc tính accordion của `hn-collapse` để tạo accordion.",...(q=(S=c.parameters)==null?void 0:S.docs)==null?void 0:q.description}}};var N,R,M,A,E;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnCollapse,
      HnCollapseItem
    },
    setup() {
      const modelValue = ref([0, 2]); // Mở item đầu tiên và item thứ 3
      return {
        args,
        modelValue
      };
    },
    template: \`
      <hn-collapse v-model="modelValue" v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const modelValue = ref([0, 2]) // Mở item đầu tiên và item thứ 3
<\/script>

<hn-collapse v-model="modelValue">
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>\`
      }
    }
  }
}`,...(M=(R=r.parameters)==null?void 0:R.docs)==null?void 0:M.source},description:{story:"Sử dụng v-model để chỉ định trạng thái ban đầu của các collapse items.",...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var P,$,B,K,O;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      const modelValue = ref([1]); // Mở item thứ 2
      return {
        args,
        modelValue
      };
    },
    template: \`
      <hn-collapse v-model="modelValue" v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<script setup>
const modelValue = ref([1]) // Mở item thứ 2
<\/script>

<hn-collapse v-model="modelValue" accordion>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>\`
      }
    }
  }
}`,...(B=($=p.parameters)==null?void 0:$.docs)==null?void 0:B.source},description:{story:"Sử dụng v-model với accordion mode.",...(O=(K=p.parameters)==null?void 0:K.docs)==null?void 0:O.description}}};const ue=["Cover","Accordion","WithInitialState","AccordionWithInitialState"];export{c as Accordion,p as AccordionWithInitialState,u as Cover,r as WithInitialState,ue as __namedExportsOrder,me as default};
