import{K as P,l as H,e as h,c as _,C as K,x as E,n as N,v as u,o as r,p as M,M as O}from"./vue.esm-bundler-BJHP4A_q.js";import"./checkbox-group-D9BD5zch.js";import{_ as V}from"./checkbox-CmXh8Rag.js";import"./ico_check-BIoE2BDl.js";const w=Symbol("actionList"),$=()=>{const e=P(w);if(!e)throw new Error("useActionList phải được sử dụng bên trong hn-action-list");return e},j=["data-selected","data-disabled","aria-selected","aria-disabled","aria-label","aria-describedby"],a=H({name:"HnActionListItem",__name:"action-list-item",props:{selected:{type:Boolean},disabled:{type:Boolean},ariaLabel:{},ariaDescribedby:{}},emits:["click"],setup(e,{emit:d}){const t=d,m=e,{multiple:S}=$(),D=h(()=>m.ariaLabel||"Mục danh sách"),R=h(()=>m.ariaDescribedby),B=()=>t("click");return(n,T)=>(r(),_("button",{class:"hn-action-list-item","data-selected":n.selected,"data-disabled":n.disabled,role:"option","aria-selected":n.selected,"aria-disabled":n.disabled,"aria-label":D.value,"aria-describedby":R.value,onClick:B},[u(S)?(r(),K(u(V),{key:0,class:"hn-action-list-item--checkbox","model-value":n.selected,disabled:n.disabled,tabindex:"-1",readonly:"","aria-hidden":""},null,8,["model-value","disabled"])):E("",!0),N(n.$slots,"default")],8,j))}});a.__docgenInfo={exportName:"default",displayName:"action-list-item",type:1,props:[{name:"selected",global:!1,description:"Chỉ ra rằng `action-list-item` có đang được chọn hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabled",global:!1,description:"Chỉ ra rằng `action-list-item` có đang bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ariaLabel",global:!1,description:"Nhãn aria cho action list item.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",global:!1,description:"Id của phần tử mô tả thêm cho action list item.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"Kích hoạt khi `action-list-item` được nhấp vào.",tags:[],type:"[]",signature:'(event: "click"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng `action-list-item` có đang bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ariaLabel",type:"string | undefined",description:"Nhãn aria cho action list item.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",type:"string | undefined",description:"Id của phần tử mô tả thêm cho action list item.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"selected",type:"boolean | undefined",description:"Chỉ ra rằng `action-list-item` có đang được chọn hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/action-list/action-list-item.vue"};const F=["data-multiple","aria-label","aria-describedby","aria-multiselectable"],i=H({name:"HnActionList",__name:"action-list",props:{multiple:{type:Boolean,default:!1},ariaLabel:{},ariaDescribedby:{}},setup(e){return M(w,{...O(e)}),(t,m)=>(r(),_("div",{class:"hn-action-list","data-multiple":t.multiple,role:"listbox","aria-label":t.ariaLabel,"aria-describedby":t.ariaDescribedby||void 0,"aria-multiselectable":t.multiple},[N(t.$slots,"default")],8,F))}});i.__docgenInfo={exportName:"default",displayName:"action-list",type:1,props:[{name:"multiple",global:!1,description:"Chỉ ra rằng có chọn nhiều item được không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"ariaLabel",global:!1,description:"Nhãn aria cho action list.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",global:!1,description:"Id của phần tử mô tả thêm cho action list.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"multiple",type:"boolean",description:"Chỉ ra rằng có chọn nhiều item được không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ariaLabel",type:"string | undefined",description:"Nhãn aria cho action list.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",type:"string | undefined",description:"Id của phần tử mô tả thêm cho action list.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/action-list/action-list.vue"};const J={title:"HnActionList",component:i},s={render:e=>({components:{HnActionList:i,HnActionListItem:a},setup(){return{args:e}},template:`<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`}),parameters:{docs:{source:{code:`<hn-action-list>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`}}}},o={args:{multiple:!0},render:e=>({components:{HnActionList:i,HnActionListItem:a},setup(){return{args:e}},template:`<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`}),parameters:{docs:{source:{code:`<hn-action-list multiple>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`}}}},c={render:e=>({components:{HnActionList:i,HnActionListItem:a},setup(){return{args:e}},template:`<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`}),parameters:{docs:{source:{code:`<hn-action-list>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`}}}},l={args:{multiple:!0},render:e=>({components:{HnActionList:i,HnActionListItem:a},setup(){return{args:e}},template:`<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item selected>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`}),parameters:{docs:{source:{code:`<hn-action-list multiple>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item selected>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>`}}}};var p,f,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnActionList,
      HnActionListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-action-list>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>\`
      }
    }
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,b,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: args => ({
    components: {
      HnActionList,
      HnActionListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-action-list multiple>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>\`
      }
    }
  }
}`,...(I=(b=o.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var k,L,v;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnActionList,
      HnActionListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-action-list>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>\`
      }
    }
  }
}`,...(v=(L=c.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var A,q,C;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: args => ({
    components: {
      HnActionList,
      HnActionListItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-action-list v-bind="args">
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item selected>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-action-list multiple>
  <hn-action-list-item>Item 1</hn-action-list-item>
  <hn-action-list-item selected>Item 2</hn-action-list-item>
  <hn-action-list-item selected>Item 3</hn-action-list-item>
  <hn-action-list-item>Item 4</hn-action-list-item>
  <hn-action-list-item>Item 5</hn-action-list-item>
</hn-action-list>\`
      }
    }
  }
}`,...(C=(q=l.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const Q=["Cover","Multiple","Selected","SelectedMultiple"];export{s as Cover,o as Multiple,c as Selected,l as SelectedMultiple,Q as __namedExportsOrder,J as default};
