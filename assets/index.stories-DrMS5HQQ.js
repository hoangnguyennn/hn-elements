import{g as u,c as s,a as p,p as $,L as H,t as O,o as n,b as t,l as f}from"./vue.esm-bundler-DcsGvaBf.js";import{_ as F}from"./stack-pJoRfHB7.js";const T={class:"hn-progress--bar"},L={class:"hn-progress--bar-wrapper"},M={key:0,class:"hn-progress--bar-percentage"},I=u({name:"HnProgressBar",__name:"progress-bar",props:{size:{},percentage:{},showPercentage:{type:Boolean}},setup(a){return(e,r)=>(n(),s("div",T,[p("div",L,[p("div",{class:"hn-progress--bar-inner",style:H({width:`${e.percentage}%`})},null,4)]),e.showPercentage?(n(),s("div",M,O(e.percentage)+"%",1)):$("",!0)]))}});I.__docgenInfo={exportName:"default",displayName:"progress-bar",type:1,props:[{name:"size",global:!1,description:"Kích thước của progress.",tags:[],required:!1,type:"ProgressSize | undefined",declarations:[],schema:{kind:"enum",type:"ProgressSize | undefined",schema:["undefined",'"small"','"normal"']}},{name:"percentage",global:!1,description:"Phần trăm của progress.",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"showPercentage",global:!1,description:"Chỉ ra rằng có hiển thị phần trăm hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:"ProgressSize | undefined",description:"Kích thước của progress.",declarations:[],schema:{kind:"enum",type:"ProgressSize | undefined",schema:["undefined",'"small"','"normal"']}},{name:"percentage",type:"number",description:"Phần trăm của progress.",declarations:[],schema:"number"},{name:"showPercentage",type:"boolean | undefined",description:"Chỉ ra rằng có hiển thị phần trăm hay không.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/progress/progress-bar.vue"};const j={class:"hn-progress--circle"},A=["width","height","viewBox"],G=["cx","cy","r"],J=["cx","cy","r"],Q={key:0,class:"hn-progress--circle-percentage"},E=u({name:"HnProgressCircle",__name:"progress-circle",props:{size:{default:"normal"},percentage:{},showPercentage:{type:Boolean,default:!1}},setup(a){const e=a,r=t(()=>e.size==="small"?84:140),i=t(()=>e.size==="small"?42:70),m=t(()=>e.size==="small"?37.8:63),x=t(()=>2*Math.PI*m.value),D=t(()=>x.value*(1-e.percentage/100));return(h,W)=>(n(),s("div",j,[(n(),s("svg",{width:r.value,height:r.value,viewBox:`0 0 ${r.value} ${r.value}`},[p("circle",{class:"hn-progress--circle-background",cx:i.value,cy:i.value,r:m.value},null,8,G),p("circle",{class:"hn-progress--circle-current",cx:i.value,cy:i.value,r:m.value,style:H({strokeDashoffset:D.value})},null,12,J)],8,A)),h.showPercentage?(n(),s("span",Q,O(h.percentage)+"% ",1)):$("",!0)]))}});E.__docgenInfo={exportName:"default",displayName:"progress-circle",type:1,props:[{name:"size",global:!1,description:"Kích thước của progress.",tags:[],required:!1,type:"ProgressSize | undefined",declarations:[],schema:{kind:"enum",type:"ProgressSize | undefined",schema:["undefined",'"small"','"normal"']},default:'"normal"'},{name:"percentage",global:!1,description:"Phần trăm của progress.",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"showPercentage",global:!1,description:"Chỉ ra rằng có hiển thị phần trăm hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:"ProgressSize",description:"Kích thước của progress.",declarations:[],schema:{kind:"enum",type:"ProgressSize",schema:['"small"','"normal"']}},{name:"showPercentage",type:"boolean",description:"Chỉ ra rằng có hiển thị phần trăm hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"percentage",type:"number",description:"Phần trăm của progress.",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/progress/progress-circle.vue"};const U=["data-value","data-size"],g=u({name:"HnProgress",__name:"progress",props:{variant:{default:"bar"},size:{default:"normal"},percentage:{default:0},showPercentage:{type:Boolean,default:!1}},setup(a){return(e,r)=>(n(),s("div",{class:"hn-progress","data-value":e.percentage,"data-size":e.size},[e.variant==="bar"?(n(),f(I,{key:0,percentage:e.percentage,"show-percentage":e.showPercentage},null,8,["percentage","show-percentage"])):(n(),f(E,{key:1,percentage:e.percentage,size:e.size,"show-percentage":e.showPercentage},null,8,["percentage","size","show-percentage"]))],8,U))}});g.__docgenInfo={exportName:"default",displayName:"progress",type:1,props:[{name:"variant",global:!1,description:"Biến thể của progress.",tags:[],required:!1,type:"ProgressVariant | undefined",declarations:[],schema:{kind:"enum",type:"ProgressVariant | undefined",schema:["undefined",'"bar"','"circle"']},default:'"bar"'},{name:"size",global:!1,description:"Kích thước của progress.",tags:[],required:!1,type:"ProgressSize | undefined",declarations:[],schema:{kind:"enum",type:"ProgressSize | undefined",schema:["undefined",'"small"','"normal"']},default:'"normal"'},{name:"percentage",global:!1,description:"Phần trăm của progress.",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"showPercentage",global:!1,description:"Chỉ ra rằng có hiển thị phần trăm hay không.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:"ProgressSize",description:"Kích thước của progress.",declarations:[],schema:{kind:"enum",type:"ProgressSize",schema:['"small"','"normal"']}},{name:"variant",type:"ProgressVariant",description:"Biến thể của progress.",declarations:[],schema:{kind:"enum",type:"ProgressVariant",schema:['"bar"','"circle"']}},{name:"percentage",type:"number",description:"Phần trăm của progress.",declarations:[],schema:"number"},{name:"showPercentage",type:"boolean",description:"Chỉ ra rằng có hiển thị phần trăm hay không.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/progress/progress.vue"};const Z={title:"HnProgress",component:g,args:{percentage:67}},d={parameters:{docs:{source:{code:'<hn-progress :percentage="67" />'}}}},o={argTypes:{size:{control:!1}},render:a=>({components:{HnProgress:g,HnStack:F},setup(){return{args:a}},template:`
      <hn-stack>
        <hn-progress v-bind="args" size="small" />
        <hn-progress v-bind="args" size="normal" />
      </hn-stack>
    `}),parameters:{docs:{source:{code:`<hn-stack>
  <hn-progress :percentage="67" size="small" />
  <hn-progress :percentage="67" size="normal" />
</hn-stack>`}}}},c={args:{showPercentage:!0},parameters:{docs:{source:{code:'<hn-progress :percentage="67" show-percentage />'}}}},l={args:{variant:"circle",showPercentage:!0},parameters:{docs:{source:{code:'<hn-progress :percentage="67" variant="circle" show-percentage />'}}}};var y,b,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: '<hn-progress :percentage="67" />'
      }
    }
  }
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var P,v,w,z,_;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:"Sử dụng thuộc tính `size` của `hn-progress` để thay đổi kích thước của nó.",...(_=(z=o.parameters)==null?void 0:z.docs)==null?void 0:_.description}}};var q,S,C,B,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source},description:{story:"Sử dụng thuộc tính `show-percentage` của `hn-progress` để hiển thị phần trăm.",...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.description}}};var K,R,V;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const ee=["Cover","Size","ShowPercentage","CircleProgress"];export{l as CircleProgress,d as Cover,c as ShowPercentage,o as Size,ee as __namedExportsOrder,Z as default};
