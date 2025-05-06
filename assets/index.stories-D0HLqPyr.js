import{c as h,o as d,a as Q,H as W,l as D,e as f,z as X,t as g,u as e,N as Z,m as I,v as ee,x as ne,y as te,q as oe,E as u}from"./vue.esm-bundler-fMwKVOuU.js";import{u as ae,_ as re}from"./popper-BYI8HI7k.js";import{_ as se}from"./icon-CPqTj-aL.js";import{_ as K}from"./button-B7bNTIUY.js";import"./index-Brg8sbcR.js";import"./index-BRohGxrE.js";import"./index-DOrznbbK.js";import"./index-qoFuZKhr.js";const pe={xmlns:"http://www.w3.org/2000/svg",width:"15",height:"10",fill:"none"};function ie(n,t){return d(),h("svg",pe,t[0]||(t[0]=[Q("path",{fill:"#fff",d:"M9.232 9c-.77 1.333-2.694 1.333-3.464 0L.572 0h13.856z"},null,-1)]))}const ce={render:ie},z=Symbol("popover"),de=()=>{const n=W(z);if(!n)throw new Error("usePopover phải được sử dụng bên trong hn-popover");return n},le={class:"hn-popover--content"},F=D({name:"HnPopoverContent",__name:"popover-content",setup(n){const{arrowRef:t,middlewareData:o}=ae(),{arrow:a,placement:i}=de(),m={top:"bottom",right:"left",bottom:"top",left:"right"},L={top:0,right:90,bottom:180,left:270},v=f(()=>i.value.split("-")[0]),U=m[v.value],Y=L[v.value];return(G,me)=>{var y,b,k,w;return d(),h("div",le,[e(a)?(d(),h("div",{key:0,ref:J=>t.value=J,style:Z({position:"fixed",left:((y=e(o).arrow)==null?void 0:y.x)!=null?`${e(o).arrow.x}px`:"",top:((b=e(o).arrow)==null?void 0:b.y)!=null?`${e(o).arrow.y}px`:"",[e(U)]:`${(k=e(t))!=null&&k.offsetHeight?-((w=e(t))==null?void 0:w.offsetHeight):0}px`,transform:`rotate(${e(Y)}deg)`}),class:"hn-popover--arrow"},[I(e(se),{as:e(ce)},null,8,["as"])],4)):X("",!0),g(G.$slots,"default")])}}});F.__docgenInfo={exportName:"default",displayName:"popover-content",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/popover/popover-content.vue"};const l=D({name:"HnPopover",__name:"popover",props:ee({placement:{default:"bottom-start"},trigger:{},offset:{},arrow:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=ne(n,"modelValue"),o=n;return te(z,{arrow:f(()=>o.arrow),placement:f(()=>o.placement)}),(a,i)=>(d(),oe(e(re),{class:"hn-popover",modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=m=>t.value=m),placement:a.placement,trigger:a.trigger,offset:a.arrow?10:4},{anchor:u(()=>[g(a.$slots,"anchor")]),content:u(()=>[I(F,null,{default:u(()=>[g(a.$slots,"content")]),_:3})]),_:3},8,["modelValue","placement","trigger","offset"]))}});l.__docgenInfo={exportName:"default",displayName:"popover",type:1,props:[{name:"placement",global:!1,description:"Chỉ định vị trí xuất hiện của content.",tags:[{name:"default",text:"'bottom-start'"}],required:!1,type:"Placement | undefined",declarations:[],schema:{kind:"enum",type:"Placement | undefined",schema:["undefined",'"bottom-start"','"top"','"right"','"bottom"','"left"','"top-start"','"top-end"','"right-start"','"right-end"','"bottom-end"','"left-start"','"left-end"']},default:'"bottom-start"'},{name:"trigger",global:!1,description:"Chỉ định cách thức bật content.",tags:[{name:"default",text:"'hover'"}],required:!1,type:"PopperTrigger | undefined",declarations:[],schema:{kind:"enum",type:"PopperTrigger | undefined",schema:["undefined",'"click"','"hover"','"focus"','"contextmenu"']}},{name:"offset",global:!1,description:"Chỉ định khoảng cách giữa content và anchor element.",tags:[{name:"remarks",text:"  Nếu không cung cấp, content sẽ nằm sát anchor element."}],required:!1,type:"OffsetOptions | undefined",declarations:[],schema:{kind:"enum",type:"OffsetOptions | undefined",schema:["undefined","number",{kind:"object",type:"{ mainAxis?: number | undefined; crossAxis?: number | undefined; alignmentAxis?: number | null | undefined; }"},{kind:"event",type:"(state: { placement: Placement; x: number; y: number; initialPlacement: Placement; strategy: Strategy; middlewareData: MiddlewareData; rects: ElementRects; platform: Platform; elements: Elements; }): OffsetValue"}]}},{name:"arrow",global:!1,description:"Chỉ ra rằng nội dung có hiển thị arrow hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:modelValue", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"anchor",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"content",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"placement",type:"Placement",description:"Chỉ định vị trí xuất hiện của content.",declarations:[],schema:{kind:"enum",type:"Placement",schema:['"bottom-start"','"top"','"right"','"bottom"','"left"','"top-start"','"top-end"','"right-start"','"right-end"','"bottom-end"','"left-start"','"left-end"']}},{name:"arrow",type:"boolean",description:"Chỉ ra rằng nội dung có hiển thị arrow hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"boolean | undefined",description:"",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"trigger",type:"PopperTrigger | undefined",description:"Chỉ định cách thức bật content.",declarations:[],schema:{kind:"enum",type:"PopperTrigger | undefined",schema:["undefined",'"click"','"hover"','"focus"','"contextmenu"']}},{name:"offset",type:"OffsetOptions | undefined",description:"Chỉ định khoảng cách giữa content và anchor element.",declarations:[],schema:{kind:"enum",type:"OffsetOptions | undefined",schema:["undefined","number",{kind:"object",type:"{ mainAxis?: number | undefined; crossAxis?: number | undefined; alignmentAxis?: number | null | undefined; }"},{kind:"event",type:"(state: { placement: Placement; x: number; y: number; initialPlacement: Placement; strategy: Strategy; middlewareData: MiddlewareData; rects: ElementRects; platform: Platform; elements: Elements; }): OffsetValue"}]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/popover/popover.vue"};const we={title:"HnPopover",component:l,render:n=>({components:{HnPopover:l,HnButton:K},setup(){return{args:n}},template:`<hn-popover v-bind="args">
      <template #anchor>
        <hn-button>Hover me</hn-button>
      </template>
      <template #content>
        <p>This is a popover content</p>
        <p>This is a popover content</p>
      </template>
    </hn-popover>`})},c={parameters:{docs:{source:{code:`<hn-popover>
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>`}}}},r={args:{arrow:!0},parameters:{docs:{source:{code:`<hn-popover arrow>
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>`}}}},s={args:{placement:"top"},parameters:{docs:{source:{code:`<hn-popover placement="bottom-end">
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>`}}}},p={args:{trigger:"click"},render:n=>({components:{HnPopover:l,HnButton:K},setup(){return{args:n}},template:`<hn-popover v-bind="args">
      <template #anchor>
        <hn-button>Click me</hn-button>
      </template>
      <template #content>
        <p>This is a popover content</p>
        <p>This is a popover content</p>
      </template>
    </hn-popover>`}),parameters:{docs:{source:{code:`<hn-popover trigger="click">
  <template #anchor>
    <hn-button>Click me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>`}}}};var P,_,T;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<hn-popover>
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>\`
      }
    }
  }
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var x,C,V,H,q;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    arrow: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-popover arrow>
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>\`
      }
    }
  }
}`,...(V=(C=r.parameters)==null?void 0:C.docs)==null?void 0:V.source},description:{story:"Sử dụng thuộc tính `arrow` của `hn-popover` để hiển thị ký hiệu arrow trên `hn-popover-content`.",...(q=(H=r.parameters)==null?void 0:H.docs)==null?void 0:q.description}}};var O,S,N,E,R;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placement: 'top'
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-popover placement="bottom-end">
  <template #anchor>
    <hn-button>Hover me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>\`
      }
    }
  }
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source},description:{story:"Sử dụng thuộc tính `placement` của `hn-popover` để thay đổi hướng của `hn-popover-content`.",...(R=(E=s.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var $,B,A,M,j;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    trigger: 'click'
  },
  render: args => ({
    components: {
      HnPopover,
      HnButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-popover v-bind="args">
      <template #anchor>
        <hn-button>Click me</hn-button>
      </template>
      <template #content>
        <p>This is a popover content</p>
        <p>This is a popover content</p>
      </template>
    </hn-popover>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-popover trigger="click">
  <template #anchor>
    <hn-button>Click me</hn-button>
  </template>
  <template #content>
    <p>This is a popover content</p>
    <p>This is a popover content</p>
  </template>
</hn-popover>\`
      }
    }
  }
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source},description:{story:"Sử dụng thuộc tính `trigger` của `hn-popover` để thay đổi hành vi để mở `hn-popover-content`.",...(j=(M=p.parameters)==null?void 0:M.docs)==null?void 0:j.description}}};const Pe=["Cover","Arrow","Placement","Trigger"];export{r as Arrow,c as Cover,s as Placement,p as Trigger,Pe as __namedExportsOrder,we as default};
