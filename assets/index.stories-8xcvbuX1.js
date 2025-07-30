import{_ as T}from"./stack-DjuYD7DA.js";import{l as h,e as s,c as o,a as m,z as O,O as H,B as I,o as r,q as y}from"./vue.esm-bundler-IyFnVC7C.js";const M={class:"hn-progress--bar"},j={class:"hn-progress--bar-wrapper"},A={key:0,class:"hn-progress--bar-percentage"},x=h({name:"HnProgressBar",__name:"progress-bar",props:{size:{},percentage:{},showPercentage:{type:Boolean}},setup(a){const e=a,l=s(()=>{const n=e.percentage;return n<0?0:n>100?100:n});return(n,c)=>(r(),o("div",M,[m("div",j,[m("div",{class:"hn-progress--bar-inner",style:H({width:`${l.value}%`})},null,4)]),n.showPercentage?(r(),o("div",A,I(n.percentage)+"%",1)):O("",!0)]))}});x.__docgenInfo={exportName:"default",displayName:"progress-bar",type:1,props:[{name:"size",global:!1,description:"Kích thước của progress.",tags:[],required:!1,type:"ProgressSize | undefined",declarations:[],schema:{kind:"enum",type:"ProgressSize | undefined",schema:["undefined",'"small"','"normal"']}},{name:"percentage",global:!1,description:"Phần trăm của progress.",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"showPercentage",global:!1,description:"Chỉ ra rằng có hiển thị phần trăm hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:"ProgressSize | undefined",description:"Kích thước của progress.",declarations:[],schema:{kind:"enum",type:"ProgressSize | undefined",schema:["undefined",'"small"','"normal"']}},{name:"percentage",type:"number",description:"Phần trăm của progress.",declarations:[],schema:"number"},{name:"showPercentage",type:"boolean | undefined",description:"Chỉ ra rằng có hiển thị phần trăm hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/progress/progress-bar.vue"};const G={class:"hn-progress--circle"},J=["width","height","viewBox"],L=["cx","cy","r"],Q=["cx","cy","r"],U={key:0,class:"hn-progress--circle-percentage"},E=h({name:"HnProgressCircle",__name:"progress-circle",props:{size:{default:"normal"},percentage:{},showPercentage:{type:Boolean,default:!1}},setup(a){const e=a,l=s(()=>{const t=e.percentage;return t<0?0:t>100?100:t}),n=s(()=>e.size==="small"?84:140),c=s(()=>e.size==="small"?42:70),g=s(()=>e.size==="small"?37.8:63),D=s(()=>2*Math.PI*g.value),F=s(()=>D.value*(1-l.value/100));return(t,X)=>(r(),o("div",G,[(r(),o("svg",{width:n.value,height:n.value,viewBox:`0 0 ${n.value} ${n.value}`},[m("circle",{class:"hn-progress--circle-background",cx:c.value,cy:c.value,r:g.value},null,8,L),m("circle",{class:"hn-progress--circle-current",cx:c.value,cy:c.value,r:g.value,style:H({strokeDashoffset:F.value})},null,12,Q)],8,J)),t.showPercentage?(r(),o("span",U,I(t.percentage)+"% ",1)):O("",!0)]))}});E.__docgenInfo={exportName:"default",displayName:"progress-circle",type:1,props:[{name:"size",global:!1,description:"Kích thước của progress.",tags:[],required:!1,type:"ProgressSize | undefined",declarations:[],schema:{kind:"enum",type:"ProgressSize | undefined",schema:["undefined",'"small"','"normal"']},default:'"normal"'},{name:"percentage",global:!1,description:"Phần trăm của progress.",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"showPercentage",global:!1,description:"Chỉ ra rằng có hiển thị phần trăm hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:"ProgressSize",description:"Kích thước của progress.",declarations:[],schema:{kind:"enum",type:"ProgressSize",schema:['"small"','"normal"']}},{name:"showPercentage",type:"boolean",description:"Chỉ ra rằng có hiển thị phần trăm hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"percentage",type:"number",description:"Phần trăm của progress.",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/progress/progress-circle.vue"};const W=["data-value","data-size"],f=h({name:"HnProgress",__name:"progress",props:{variant:{default:"bar"},size:{default:"normal"},percentage:{default:0},showPercentage:{type:Boolean,default:!1}},setup(a){return(e,l)=>(r(),o("div",{class:"hn-progress","data-value":e.percentage,"data-size":e.size},[e.variant==="bar"?(r(),y(x,{key:0,percentage:e.percentage,"show-percentage":e.showPercentage},null,8,["percentage","show-percentage"])):(r(),y(E,{key:1,percentage:e.percentage,size:e.size,"show-percentage":e.showPercentage},null,8,["percentage","size","show-percentage"]))],8,W))}});f.__docgenInfo={exportName:"default",displayName:"progress",type:1,props:[{name:"variant",global:!1,description:"Biến thể của progress.",tags:[],required:!1,type:"ProgressVariant | undefined",declarations:[],schema:{kind:"enum",type:"ProgressVariant | undefined",schema:["undefined",'"bar"','"circle"']},default:'"bar"'},{name:"size",global:!1,description:"Kích thước của progress.",tags:[],required:!1,type:"ProgressSize | undefined",declarations:[],schema:{kind:"enum",type:"ProgressSize | undefined",schema:["undefined",'"small"','"normal"']},default:'"normal"'},{name:"percentage",global:!1,description:"Phần trăm của progress.",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"showPercentage",global:!1,description:"Chỉ ra rằng có hiển thị phần trăm hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:"ProgressSize",description:"Kích thước của progress.",declarations:[],schema:{kind:"enum",type:"ProgressSize",schema:['"small"','"normal"']}},{name:"variant",type:"ProgressVariant",description:"Biến thể của progress.",declarations:[],schema:{kind:"enum",type:"ProgressVariant",schema:['"bar"','"circle"']}},{name:"percentage",type:"number",description:"Phần trăm của progress.",declarations:[],schema:"number"},{name:"showPercentage",type:"boolean",description:"Chỉ ra rằng có hiển thị phần trăm hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/progress/progress.vue"};const ee={title:"HnProgress",component:f,args:{percentage:67}},p={parameters:{docs:{source:{code:'<hn-progress :percentage="67" />'}}}},i={argTypes:{size:{control:!1}},render:a=>({components:{HnProgress:f,HnStack:T},setup(){return{args:a}},template:`
      <hn-stack>
        <hn-progress v-bind="args" size="small" />
        <hn-progress v-bind="args" size="normal" />
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack>
  <hn-progress :percentage="67" size="small" />
  <hn-progress :percentage="67" size="normal" />
</hn-stack>`}}}},d={args:{showPercentage:!0},parameters:{docs:{source:{code:'<hn-progress :percentage="67" show-percentage />'}}}},u={args:{variant:"circle",showPercentage:!0},parameters:{docs:{source:{code:'<hn-progress :percentage="67" variant="circle" show-percentage />'}}}};var b,k,P;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: '<hn-progress :percentage="67" />'
      }
    }
  }
}`,...(P=(k=p.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var v,w,z,_,q;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: false
    }
  },
  render: args => ({
    components: {
      HnProgress,
      HnStack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <hn-stack>
        <hn-progress v-bind="args" size="small" />
        <hn-progress v-bind="args" size="normal" />
      </hn-stack>
    \`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-stack>
  <hn-progress :percentage="67" size="small" />
  <hn-progress :percentage="67" size="normal" />
</hn-stack>\`
      }
    }
  }
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"Sử dụng thuộc tính `size` của `hn-progress` để thay đổi kích thước của nó.",...(q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var S,C,B,N,K;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    showPercentage: true
  },
  parameters: {
    docs: {
      source: {
        code: '<hn-progress :percentage="67" show-percentage />'
      }
    }
  }
}`,...(B=(C=d.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"Sử dụng thuộc tính `show-percentage` của `hn-progress` để hiển thị phần trăm.",...(K=(N=d.parameters)==null?void 0:N.docs)==null?void 0:K.description}}};var R,V,$;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    showPercentage: true
  },
  parameters: {
    docs: {
      source: {
        code: '<hn-progress :percentage="67" variant="circle" show-percentage />'
      }
    }
  }
}`,...($=(V=u.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const ne=["Cover","Size","ShowPercentage","CircleProgress"];export{u as CircleProgress,p as Cover,d as ShowPercentage,i as Size,ne as __namedExportsOrder,ee as default};
