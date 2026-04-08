import{o as g,c as y,a as b,L as J,e as V,r as k,l as j,x as Y,m as T,q as z,v as l,J as I,K as v,B as w,u as G,n as Q,p as U}from"./vue.esm-bundler-D2xXn-Hy.js";import{_ as X}from"./utils-BqV-7sDo.js";import"./index-BRohGxrE.js";import{a as Z}from"./index-DOrznbbK.js";import{u as ee}from"./index-QTJVFDTI.js";const ne={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none"};function te(e,t){return g(),y("svg",ne,[...t[0]||(t[0]=[b("path",{fill:"#00ACE5",d:"M14.08 4.747a.833.833 0 0 1 0 1.18l-5.607 5.606a.663.663 0 0 1-.94 0L1.92 5.92a.837.837 0 0 1 0-1.173.833.833 0 0 1 1.18 0L8 9.64l4.9-4.9a.84.84 0 0 1 1.18.007"},null,-1)])])}const le={render:te},F=Symbol("collapse"),ae=()=>{const e=J(F);if(!e)throw new Error("hn-collapse-item phải được sử dụng bên trong hn-collapse");const t=k(null),n=V(()=>t.value?e.elements.value.get(t.value)??-1:-1),c=V(()=>Z(n.value)?e.modelValue.value.includes(n.value):!1);return{index:n,isActive:c,elementRef:s=>{t.value=s,s&&e.register(s)},onTrigger:e.onTrigger}},oe=["data-open"],se=["aria-expanded"],ie=["aria-hidden"],u=j({name:"HnCollapseItem",__name:"collapse-item",props:{title:{}},setup(e){const{isActive:t,index:n,elementRef:c,onTrigger:i}=ae(),s=`hn-collapse-title-${w()}`,C=`hn-collapse-content-${w()}`;return(a,o)=>(g(),y("div",{ref:h=>l(c)(h),class:"hn-collapse--item","data-open":l(t)},[b("div",{class:"hn-collapse--trigger",onClick:o[0]||(o[0]=v(h=>l(i)(l(n)),["prevent"])),role:"button","aria-expanded":l(t),"aria-controls":C,tabindex:0,onKeydown:[o[1]||(o[1]=I(v(h=>l(i)(l(n)),["prevent"]),["enter"])),o[2]||(o[2]=I(v(h=>l(i)(l(n)),["prevent"]),["space"]))]},[e.title?(g(),y("div",{key:0,id:s,class:"hn-collapse--title"},Y(e.title),1)):T(a.$slots,"title",{key:1}),z(l(X),{as:l(le),class:"hn-collapse--icon",ariaHidden:"",ariaLabel:"Mở"},null,8,["as"])],40,se),b("div",{id:C,class:"hn-collapse--content","aria-labelledby":s,"aria-hidden":!l(t)},[T(a.$slots,"default")],8,ie)],8,oe))}});u.__docgenInfo={exportName:"default",displayName:"collapse-item",type:1,props:[{name:"title",global:!1,description:"Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"any",description:"Nội dung chính của collapse item.",declarations:[],schema:"any"},{name:"title",type:"any",description:"Nội dung của collapse item. Có thể sử dụng prop `title` thay thế.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & CollapseItemSlots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & CollapseItemSlots"}},{name:"title",type:"string | undefined",description:"Tiêu đề của collapse item. Có thể sử dụng slot `title` thay thế.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/collapse/collapse-item.vue"};const re=["aria-label","aria-describedby"],r=j({name:"HnCollapse",__name:"collapse",props:Q({accordion:{type:Boolean},ariaLabel:{},ariaDescribedby:{}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=G(e,"modelValue"),{register:c,unregister:i,map:s}=ee();return U(F,{modelValue:n,register:c,unregister:i,elements:s,onTrigger:a=>{if(t.accordion){n.value.includes(a)?n.value=[]:n.value=[a];return}n.value.includes(a)?n.value=n.value.filter(o=>o!==a):n.value=[...n.value,a]}}),(a,o)=>(g(),y("div",{class:"hn-collapse",role:"region","aria-label":e.ariaLabel,"aria-describedby":e.ariaDescribedby},[T(a.$slots,"default")],8,re))}});r.__docgenInfo={exportName:"default",displayName:"collapse",type:1,props:[{name:"accordion",global:!1,description:"Hiệu ứng accordion. Khi true, chỉ có thể mở một item tại một thời điểm.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ariaLabel",global:!1,description:"Nhãn aria cho collapse.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",global:!1,description:"Id của phần tử mô tả thêm cho collapse.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"CollapseValue | undefined",declarations:[],schema:{kind:"enum",type:"CollapseValue | undefined",schema:["undefined",{kind:"array",type:"CollapseValue"}]},default:"[]"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: CollapseValue]",signature:'(event: "update:modelValue", value: CollapseValue): void',declarations:[],schema:[{kind:"array",type:"CollapseValue"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"ariaLabel",type:"string | undefined",description:"Nhãn aria cho collapse.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",type:"string | undefined",description:"Id của phần tử mô tả thêm cho collapse.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"CollapseValue | undefined",description:"",declarations:[],schema:{kind:"enum",type:"CollapseValue | undefined",schema:["undefined",{kind:"array",type:"CollapseValue"}]}},{name:"accordion",type:"boolean | undefined",description:"Hiệu ứng accordion. Khi true, chỉ có thể mở một item tại một thời điểm.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/collapse/collapse.vue"};const he={title:"HnCollapse",component:r},f={render:e=>({components:{HnCollapse:r,HnCollapseItem:u},setup(){return{args:e}},template:`
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `}),parameters:{docs:{source:{code:`<hn-collapse>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`}}}},d={args:{accordion:!0},argTypes:{accordion:{control:!1}},render:e=>({components:{HnCollapse:r,HnCollapseItem:u},setup(){return{args:e}},template:`
      <hn-collapse v-bind="args">
        <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
        <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
        <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
      </hn-collapse>
    `}),parameters:{docs:{source:{code:`<hn-collapse accordion>
  <hn-collapse-item title="Title 1">Content 1</hn-collapse-item>
  <hn-collapse-item title="Title 2">Content 2</hn-collapse-item>
  <hn-collapse-item title="Title 3">Content 3</hn-collapse-item>
</hn-collapse>`}}}},p={render:e=>({components:{HnCollapse:r,HnCollapseItem:u},setup(){const t=k([0,2]);return{args:e,modelValue:t}},template:`
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
</hn-collapse>`}}}},m={args:{accordion:!0},argTypes:{accordion:{control:!1}},render:e=>({components:{HnCollapse:r,HnCollapseItem:u},setup(){const t=k([1]);return{args:e,modelValue:t}},template:`
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
</hn-collapse>`}}}};var H,S,_;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(S=f.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var q,N,R,$,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:"Sử dụng thuộc tính accordion của `hn-collapse` để tạo accordion.",...(M=($=d.parameters)==null?void 0:$.docs)==null?void 0:M.description}}};var L,x,K,A,E;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(x=p.parameters)==null?void 0:x.docs)==null?void 0:K.source},description:{story:"Sử dụng v-model để chỉ định trạng thái ban đầu của các collapse items.",...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.description}}};var P,B,O,D,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(B=m.parameters)==null?void 0:B.docs)==null?void 0:O.source},description:{story:"Sử dụng v-model với accordion mode.",...(W=(D=m.parameters)==null?void 0:D.docs)==null?void 0:W.description}}};const fe=["Cover","Accordion","WithInitialState","AccordionWithInitialState"];export{d as Accordion,m as AccordionWithInitialState,f as Cover,p as WithInitialState,fe as __namedExportsOrder,he as default};
