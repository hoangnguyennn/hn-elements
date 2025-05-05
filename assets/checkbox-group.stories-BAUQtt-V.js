import{j as g,v as t,x as f,w as y,c as v,m as C,o as O,y as G}from"./vue.esm-bundler-DzaazsR2.js";import{C as V,_ as m}from"./checkbox-BdDeSFIe.js";import"./ico_check-C-7g7TM-.js";const _=["data-direction"],c=g({name:"HnCheckboxGroup",__name:"checkbox-group",props:t({direction:{default:"vertical"}},{modelValue:{default:[]},modelModifiers:{}}),emits:t(["change"],["update:modelValue"]),setup(e,{emit:k}){const r=f(e,"modelValue"),x=k;return G(V,{modelValue:r}),y(r,o=>{x("change",o)}),(o,H)=>(O(),v("div",{class:"hn-checkbox-group","data-direction":o.direction},[C(o.$slots,"default")],8,_))}});c.__docgenInfo={exportName:"default",displayName:"checkbox-group",type:1,props:[{name:"direction",global:!1,description:"Hướng của checkbox group.",tags:[],required:!1,type:"CheckboxGroupDirection | undefined",declarations:[],schema:{kind:"enum",type:"CheckboxGroupDirection | undefined",schema:["undefined",'"vertical"','"horizontal"']},default:'"vertical"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"CheckboxGroupValue | undefined",declarations:[],schema:{kind:"enum",type:"CheckboxGroupValue | undefined",schema:["undefined",{kind:"array",type:"CheckboxGroupValue"}]},default:"[]"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: CheckboxGroupValue]",signature:'(event: "update:modelValue", value: CheckboxGroupValue): void',declarations:[],schema:[{kind:"array",type:"CheckboxGroupValue"}]},{name:"change",description:"Kích hoạt khi giá trị của checkbox group thay đổi.",tags:[],type:"[CheckboxGroupValue]",signature:'(event: "change", args_0: CheckboxGroupValue): void',declarations:[],schema:[{kind:"array",type:"CheckboxGroupValue"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"direction",type:"CheckboxGroupDirection",description:"Hướng của checkbox group.",declarations:[],schema:{kind:"enum",type:"CheckboxGroupDirection",schema:['"vertical"','"horizontal"']}},{name:"modelValue",type:"CheckboxGroupValue | undefined",description:"",declarations:[],schema:{kind:"enum",type:"CheckboxGroupValue | undefined",schema:["undefined",{kind:"array",type:"CheckboxGroupValue"}]}}],sourceFiles:"/home/runner/work/hn-elements/hn-elements/src/components/checkbox/checkbox-group.vue"};const D={title:"HnCheckboxGroup",component:c,args:{direction:"vertical"}},a={render:e=>({components:{HnCheckboxGroup:c,HnCheckbox:m},setup(){return{args:e}},template:`<hn-checkbox-group v-bind="args">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>`}),parameters:{docs:{source:{code:`<hn-checkbox-group>
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>`}}}},n={args:{direction:"horizontal"},render:e=>({components:{HnCheckboxGroup:c,HnCheckbox:m},setup(){return{args:e}},template:`<hn-checkbox-group v-bind="args">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>`}),parameters:{docs:{source:{code:`<hn-checkbox-group direction="horizontal">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>`}}}};var i,l,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HnCheckboxGroup,
      HnCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-checkbox-group v-bind="args">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-checkbox-group>
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>\`
      }
    }
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var u,d,p,h,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  },
  render: args => ({
    components: {
      HnCheckboxGroup,
      HnCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<hn-checkbox-group v-bind="args">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<hn-checkbox-group direction="horizontal">
  <hn-checkbox label="Option 1" value="1" />
  <hn-checkbox label="Option 2" value="2" />
  <hn-checkbox label="Option 3" value="3" />
</hn-checkbox-group>\`
      }
    }
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"Sử dụng thuộc tính `direction` của `hn-checkbox-group` để thay đổi hướng của nó.",...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};const E=["Cover","Direction"];export{a as Cover,n as Direction,E as __namedExportsOrder,D as default};
