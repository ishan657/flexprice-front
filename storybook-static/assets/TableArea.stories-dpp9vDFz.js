import{j as s}from"./jsx-runtime-6qgwzs7k.js";import{T as C,M as b}from"./ApiDocs-Co2QF_84.js";import{within as v,userEvent as R,expect as T}from"./index-CH2Su9EI.js";import"./index-DQDNmYQF.js";import"./Button-B6Y7aifE.js";import"./index-CS99gTSD.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";import"./Input-B1SHhgN9.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-rmX9f7t-.js";import"./DropdownMenu-Cxv-vWj5.js";import"./index-Dkxzguci.js";import"./Dialog-CbOliXkN.js";import"./Sheet-CFzkviKX.js";import"./index-CMUIB8cN.js";import"./QueryClientProvider-B6QCCsjn.js";import"./CodeBlock-mJjG_es0.js";import"./Card-DwF7Ghsh.js";import"./RecurringChargePreview-6EVNEM3a.js";import"./trash-2-CimWJyH9.js";import"./Table-B-KieeFC.js";import"./plus-CAQs44-f.js";import"./iframe-BUrLbgcZ.js";import"./tiny-invariant-CopsF_GD.js";const $={title:"Organisms/TableArea",component:C,decorators:[t=>s.jsx(b,{children:s.jsx("div",{className:"p-6 bg-white min-h-screen",children:s.jsx(t,{})})})],parameters:{layout:"fullscreen",docs:{description:{component:`TableArea\r

Generic reusable table area component\r
with optional pagination support.`}}},tags:["autodocs"]},r=[{title:"Name",render:t=>t.name},{title:"Email",render:t=>t.email}],m={items:[{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"}],pagination:{total:2}},o={args:{data:m,tableConfig:{columns:r,showEmptyRow:!0}}},a={args:{data:m,tableConfig:{columns:r,showEmptyRow:!0},paginationConfig:{unit:"Users",prefix:"users"}}},n={args:{data:m,tableConfig:{columns:r,showEmptyRow:!0}},play:async({canvasElement:t})=>{const i=await v(t).findByText(/john doe/i);await R.hover(i),await T(i).toBeInTheDocument()}},e={args:{data:{items:[],pagination:{total:0}},tableConfig:{columns:r,showEmptyRow:!0}}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: mockData,
    tableConfig: {
      columns: mockColumns,
      showEmptyRow: true
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,d,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: mockData,
    tableConfig: {
      columns: mockColumns,
      showEmptyRow: true
    },
    paginationConfig: {
      unit: 'Users',
      prefix: 'users'
    }
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var w,h,f;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: mockData,
    tableConfig: {
      columns: mockColumns,
      showEmptyRow: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const row = await canvas.findByText(/john doe/i);
    await userEvent.hover(row);
    await expect(row).toBeInTheDocument();
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,E,x;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: {
      items: [],
      pagination: {
        total: 0
      }
    },
    tableConfig: {
      columns: mockColumns,
      showEmptyRow: true
    }
  }
}`,...(x=(E=e.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const tt=["Default","WithPagination","InteractionTest","Empty"];export{o as Default,e as Empty,n as InteractionTest,a as WithPagination,tt as __namedExportsOrder,$ as default};
