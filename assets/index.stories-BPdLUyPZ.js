import{l as C,u as E,w as B,c as S,m as R,n as h,o as D,p as K,L,e as N,r as P,v as r,U as O,B as z}from"./vue.esm-bundler-D2xXn-Hy.js";import{u as $}from"./index-QTJVFDTI.js";const I=Symbol("tabGroup"),j=["data-direction","aria-label","aria-describedby","aria-orientation"],d=C({name:"HnTabGroup",__name:"tab-group",props:h({direction:{default:"horizontal"},ariaLabel:{},ariaDescribedby:{}},{modelValue:{},modelModifiers:{}}),emits:h(["change"],["update:modelValue"]),setup(e,{emit:n}){const a=E(e,"modelValue"),s=n;B(a,c=>s("change",c));const{register:t,unregister:l,map:p}=$();return K(I,{modelValue:a,register:t,unregister:l,elements:p}),(c,m)=>(D(),S("div",{class:"hn-tab-group","data-direction":e.direction,role:"tablist","aria-label":e.ariaLabel,"aria-describedby":e.ariaDescribedby,"aria-orientation":e.direction},[R(c.$slots,"default")],8,j))}});d.__docgenInfo={exportName:"default",displayName:"tab-group",type:1,props:[{name:"direction",global:!1,description:"Hướng của tab group.",tags:[],required:!1,type:"TabGroupDirection | undefined",declarations:[],schema:{kind:"enum",type:"TabGroupDirection | undefined",schema:["undefined",'"horizontal"','"vertical"']},default:'"horizontal"'},{name:"ariaLabel",global:!1,description:"Nhãn aria cho tab group.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",global:!1,description:"Id của phần tử mô tả thêm cho tab group.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: number | undefined]",signature:'(event: "update:modelValue", value: number | undefined): void',declarations:[],schema:[{kind:"enum",type:"number | undefined",schema:["undefined","number"]}]},{name:"change",description:"Kích hoạt khi giá trị của tab group thay đổi.",tags:[],type:"[TabValue]",signature:'(event: "change", args_0: TabValue): void',declarations:[],schema:[{kind:"enum",type:"TabValue",schema:["undefined","number"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"direction",type:"TabGroupDirection",description:"Hướng của tab group.",declarations:[],schema:{kind:"enum",type:"TabGroupDirection",schema:['"horizontal"','"vertical"']}},{name:"ariaLabel",type:"string | undefined",description:"Nhãn aria cho tab group.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",type:"string | undefined",description:"Id của phần tử mô tả thêm cho tab group.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"number | undefined",description:"",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/tabs/tab-group.vue"};const M=()=>{const e=L(I);if(!e)throw new Error("hn-tab phải được sử dụng bên trong hn-tab-group");const n=P(null),a=N(()=>n.value?e.elements.value.get(n.value):-1),s=t=>{n.value=t,t&&e.register(t)};return{modelValue:e.modelValue,index:a,elementRef:s}},F=["aria-selected","aria-controls","tabindex"],u=C({name:"HnTab",__name:"tab",setup(e){const{modelValue:n,index:a,elementRef:s}=M(),t=N(()=>`hn-tab-panel-${z()}`),l=()=>{n.value=a.value};return(p,c)=>(D(),S("button",{ref:m=>r(s)(m),class:O(["hn-tab",{active:r(n)===r(a)}]),role:"tab","aria-selected":r(n)===r(a),"aria-controls":t.value,tabindex:r(n)===r(a)?-1:0,onClick:l},[R(p.$slots,"default")],10,F))}});u.__docgenInfo={exportName:"default",displayName:"tab",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/tabs/tab.vue"};const Y={title:"HnTabs",component:d},b={render:e=>({components:{HnTab:u,HnTabGroup:d},setup(){return{args:e}},template:`
      <hn-tab-group v-bind="args">
        <hn-tab>Tab 1</hn-tab>
        <hn-tab>Tab 2</hn-tab>
        <hn-tab>Tab 3</hn-tab>
      </hn-tab-group>
    `}),parameters:{docs:{source:{code:`<hn-tab-group>
  <hn-tab>Tab 1</hn-tab>
  <hn-tab>Tab 2</hn-tab>
  <hn-tab>Tab 3</hn-tab>
</hn-tab-group>`}}}},o={args:{direction:"vertical"},render:e=>({components:{HnTab:u,HnTabGroup:d},setup(){return{args:e}},template:`
      <hn-tab-group v-bind="args">
        <hn-tab>Tab 1</hn-tab>
        <hn-tab>Tab 2</hn-tab>
        <hn-tab>Tab 3</hn-tab>
      </hn-tab-group>
    `}),parameters:{docs:{source:{code:`<hn-tab-group direction="vertical">
  <hn-tab>Tab 1</hn-tab>
  <hn-tab>Tab 2</hn-tab>
  <hn-tab>Tab 3</hn-tab>
</hn-tab-group>`}}}},i={render:e=>({components:{HnTab:u,HnTabGroup:d},setup(){const n=P(1);return{args:e,selectedTab:n}},template:`
      <div>
        <p>Selected tab index: {{ selectedTab }}</p>
        <hn-tab-group v-model="selectedTab" v-bind="args">
          <hn-tab>Tab 1</hn-tab>
          <hn-tab>Tab 2</hn-tab>
          <hn-tab>Tab 3</hn-tab>
        </hn-tab-group>
      </div>
    `}),parameters:{docs:{source:{code:`<template>
  <div>
    <p>Selected tab index: {{ selectedTab }}</p>
    <hn-tab-group v-model="selectedTab">
      <hn-tab>Tab 1</hn-tab>
      <hn-tab>Tab 2</hn-tab>
      <hn-tab>Tab 3</hn-tab>
    </hn-tab-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedTab = ref(1) // Tab thứ 2 (index = 1)
<\/script>`}}}};var g,f,y;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(f=b.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var T,v,k,_,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source},description:{story:"Sử dụng thuộc tính `direction` của `hn-tab`group` để đổi hướng của nó.",...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.description}}};var V,H,q,G,w;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnTab,
      HnTabGroup
    },
    setup() {
      const selectedTab = ref(1); // Tab thứ 2 (index = 1)
      return {
        args,
        selectedTab
      };
    },
    template: \`
      <div>
        <p>Selected tab index: {{ selectedTab }}</p>
        <hn-tab-group v-model="selectedTab" v-bind="args">
          <hn-tab>Tab 1</hn-tab>
          <hn-tab>Tab 2</hn-tab>
          <hn-tab>Tab 3</hn-tab>
        </hn-tab-group>
      </div>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<template>
  <div>
    <p>Selected tab index: {{ selectedTab }}</p>
    <hn-tab-group v-model="selectedTab">
      <hn-tab>Tab 1</hn-tab>
      <hn-tab>Tab 2</hn-tab>
      <hn-tab>Tab 3</hn-tab>
    </hn-tab-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedTab = ref(1) // Tab thứ 2 (index = 1)
<\/script>\`
      }
    }
  }
}`,...(q=(H=i.parameters)==null?void 0:H.docs)==null?void 0:q.source},description:{story:"Sử dụng `v-model` để gán tab được chọn. Giá trị là index của tab (bắt đầu từ 0).",...(w=(G=i.parameters)==null?void 0:G.docs)==null?void 0:w.description}}};const J=["Cover","Direction","SelectedTab"];export{b as Cover,o as Direction,i as SelectedTab,J as __namedExportsOrder,Y as default};
