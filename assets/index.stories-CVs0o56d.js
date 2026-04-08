import{L as B,l as C,c as H,v as d,C as P,y as E,m as N,e as h,o as m,p as K,N as O}from"./vue.esm-bundler-D2xXn-Hy.js";import"./checkbox-group-D4DSizpg.js";import{_ as M}from"./checkbox-e1IlaHnP.js";import"./ico_check-BJVCudEv.js";const w=Symbol("actionList"),V=()=>{const e=B(w);if(!e)throw new Error("useActionList phải được sử dụng bên trong hn-action-list");return e},$=["data-selected","data-disabled","aria-selected","aria-disabled","aria-label","aria-describedby"],n=C({name:"HnActionListItem",__name:"action-list-item",props:{selected:{type:Boolean},disabled:{type:Boolean},ariaLabel:{},ariaDescribedby:{}},emits:["click"],setup(e,{emit:r}){const c=r,l=e,{multiple:S}=V(),x=h(()=>l.ariaLabel||"Mục danh sách"),D=h(()=>l.ariaDescribedby),R=()=>c("click");return(_,F)=>(m(),H("button",{class:"hn-action-list-item","data-selected":e.selected,"data-disabled":e.disabled,role:"option","aria-selected":e.selected,"aria-disabled":e.disabled,"aria-label":x.value,"aria-describedby":D.value,onClick:R},[d(S)?(m(),P(d(M),{key:0,class:"hn-action-list-item--checkbox","model-value":e.selected,disabled:e.disabled,tabindex:"-1",readonly:"","aria-hidden":""},null,8,["model-value","disabled"])):E("",!0),N(_.$slots,"default")],8,$))}});n.__docgenInfo={exportName:"default",displayName:"action-list-item",type:1,props:[{name:"selected",global:!1,description:"Chỉ ra rằng `action-list-item` có đang được chọn hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabled",global:!1,description:"Chỉ ra rằng `action-list-item` có đang bị disable hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ariaLabel",global:!1,description:"Nhãn aria cho action list item.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",global:!1,description:"Id của phần tử mô tả thêm cho action list item.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"Kích hoạt khi `action-list-item` được nhấp vào.",tags:[],type:"[]",signature:'(event: "click"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"disabled",type:"boolean | undefined",description:"Chỉ ra rằng `action-list-item` có đang bị disable hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ariaLabel",type:"string | undefined",description:"Nhãn aria cho action list item.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",type:"string | undefined",description:"Id của phần tử mô tả thêm cho action list item.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"selected",type:"boolean | undefined",description:"Chỉ ra rằng `action-list-item` có đang được chọn hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/action-list/action-list-item.vue"};const j=["data-multiple","aria-label","aria-describedby","aria-multiselectable"],t=C({name:"HnActionList",__name:"action-list",props:{multiple:{type:Boolean,default:!1},ariaLabel:{},ariaDescribedby:{}},setup(e){return K(w,{...O(e)}),(c,l)=>(m(),H("div",{class:"hn-action-list","data-multiple":e.multiple,role:"listbox","aria-label":e.ariaLabel,"aria-describedby":e.ariaDescribedby||void 0,"aria-multiselectable":e.multiple},[N(c.$slots,"default")],8,j))}});t.__docgenInfo={exportName:"default",displayName:"action-list",type:1,props:[{name:"multiple",global:!1,description:"Chỉ ra rằng có chọn nhiều item được không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"ariaLabel",global:!1,description:"Nhãn aria cho action list.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",global:!1,description:"Id của phần tử mô tả thêm cho action list.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"multiple",type:"boolean",description:"Chỉ ra rằng có chọn nhiều item được không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ariaLabel",type:"string | undefined",description:"Nhãn aria cho action list.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ariaDescribedby",type:"string | undefined",description:"Id của phần tử mô tả thêm cho action list.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/action-list/action-list.vue"};const J={title:"HnActionList",component:t},i={render:e=>({components:{HnActionList:t,HnActionListItem:n},setup(){return{args:e}},template:`<hn-action-list v-bind="args">
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
</hn-action-list>`}}}},a={args:{multiple:!0},render:e=>({components:{HnActionList:t,HnActionListItem:n},setup(){return{args:e}},template:`<hn-action-list v-bind="args">
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
</hn-action-list>`}}}},s={render:e=>({components:{HnActionList:t,HnActionListItem:n},setup(){return{args:e}},template:`<hn-action-list v-bind="args">
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
</hn-action-list>`}}}},o={args:{multiple:!0},render:e=>({components:{HnActionList:t,HnActionListItem:n},setup(){return{args:e}},template:`<hn-action-list v-bind="args">
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
</hn-action-list>`}}}};var u,p,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var y,g,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var I,k,L;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(k=s.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var v,A,q;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(q=(A=o.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const Q=["Cover","Multiple","Selected","SelectedMultiple"];export{i as Cover,a as Multiple,s as Selected,o as SelectedMultiple,Q as __namedExportsOrder,J as default};
