import{g as q,s as L,v as C,b as B,c as t,p as N,y as O,t as D,z as M,a as P,o as r}from"./vue.esm-bundler-DcsGvaBf.js";const R=["data-on","data-disabled","data-show-label"],x={key:0,class:"hn-switch--label"},E=["disabled"],v=q({name:"HnSwitch",__name:"switch",props:L({disabled:{type:Boolean},showLabel:{type:Boolean,default:!1}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(V){const a=C(V,"modelValue"),_=B(()=>a.value?"On":"Off");return(s,d)=>(r(),t("div",{class:"hn-switch","data-on":a.value,"data-disabled":s.disabled,"data-show-label":s.showLabel},[s.showLabel?(r(),t("span",x,D(_.value),1)):N("",!0),O(P("input",{"onUpdate:modelValue":d[0]||(d[0]=S=>a.value=S),type:"checkbox",class:"hn-switch--input",disabled:s.disabled},null,8,E),[[M,a.value]])],8,R))}});v.__docgenInfo={exportName:"default",displayName:"switch",type:1,props:[{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"showLabel",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: boolean | undefined]",signature:'(event: "update:modelValue", value: boolean | undefined): void',declarations:[],schema:[{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}]}],slots:[],exposed:[{name:"showLabel",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"boolean | undefined",description:"",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabled",type:"boolean | undefined",description:"",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/switch/switch.vue"};const I={title:"HnSwitch",component:v},o={parameters:{docs:{source:{code:"<hn-switch />"}}}},e={args:{showLabel:!0},parameters:{docs:{source:{code:"<hn-switch show-label />"}}}},n={args:{disabled:!0},parameters:{docs:{source:{code:"<hn-switch disabled />"}}}};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<hn-switch />\`
      }
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,m,p,h,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-switch show-label />\`
      }
    }
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Sử dụng prop `show-label` của `hn-switch` để hiển thị label của trạng thái hiện tại.",...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var b,y,g,w,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<hn-switch disabled />\`
      }
    }
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:"Sử dụng prop `disabled` của `hn-switch` để vô hiệu hoá nó.",...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};const K=["Cover","ShowLabel","Disabled"];export{o as Cover,n as Disabled,e as ShowLabel,K as __namedExportsOrder,I as default};
