import{F as s}from"./Table-B-KieeFC.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./utils-BLSKlp9E.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";const g={title:"Advanced/VirtualizedTable",component:s,parameters:{layout:"fullscreen"}},i=Array.from({length:1e4},(e,r)=>({id:r,customer:`Customer ${r}`,email:`customer${r}@example.com`})),c=[{title:"Customer",render:e=>e.customer},{title:"Email",render:e=>e.email}],t={args:{data:i,columns:c,virtualized:!0,estimatedRowHeight:56}};var a,o,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    data: mockData,
    columns,
    virtualized: true,
    estimatedRowHeight: 56
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,g as default};
