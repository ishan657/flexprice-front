import{j as r}from"./jsx-runtime-6qgwzs7k.js";import{within as G,userEvent as w,expect as D}from"./index-CH2Su9EI.js";import{Q as N,a as b}from"./QueryClientProvider-B6QCCsjn.js";import{h as j,J as I,K as B,N as c,Q as C,M as U}from"./ApiDocs-CAJ0rh-z.js";import"./Button-B6Y7aifE.js";import"./Input-B1SHhgN9.js";import"./index-DQDNmYQF.js";import"./Dialog-B8zj_ln6.js";import"./DropdownMenu-CAb0ez7E.js";import"./Sheet-DEkiEW1R.js";import"./index-1rxX2T2W.js";import"./CodeBlock-mJjG_es0.js";import"./index-CMUIB8cN.js";import"./Card-DwF7Ghsh.js";import"./RecurringChargePreview-6EVNEM3a.js";import{F as A}from"./Table-B-KieeFC.js";import"./index-BaTnzSvR.js";import"./index-CS99gTSD.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";import"./index-DSPzp8c9.js";import"./plus-CAQs44-f.js";import"./trash-2-CimWJyH9.js";import"./iframe-BebtJecw.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CFFhkS_s.js";const Q=({data:t,onEdit:u})=>{const a=t==null?void 0:t.map(e=>({...e})),k=[{fieldName:"name",title:"Name"},{title:"Lookup Key",fieldName:"lookup_key"},{title:"Entity Type",render:e=>{const p=e.entity_type.charAt(0).toUpperCase()+e.entity_type.slice(1);return r.jsx(j,{variant:"default",label:p})}},{title:"Updated at",render:e=>I(e.updated_at)},{fieldVariant:"interactive",render:e=>r.jsx(B,{id:e.id,deleteMutationFn:p=>C.deleteGroup(p),refetchQueryKey:"fetchGroups",entityName:"Group",edit:{onClick:()=>u(e)},archive:{enabled:e.status===c.PUBLISHED}})}];return r.jsx(A,{columns:k,data:a,showEmptyRow:!0})},F=new b,me={title:"Molecules/GroupsTable",component:Q,decorators:[t=>r.jsx(N,{client:F,children:r.jsx(U,{children:r.jsx("div",{className:"p-6 bg-white min-h-screen",children:r.jsx(t,{})})})})],parameters:{layout:"fullscreen",docs:{description:{component:`GroupsTable\r

Displays groups in a reusable table\r
with actions and status handling.`}}},tags:["autodocs"],argTypes:{onEdit:{action:"edit clicked"}}},m=[{id:"group_1",name:"Enterprise Customers",lookup_key:"enterprise_customers",entity_type:"customer",status:c.PUBLISHED,updated_at:new Date().toISOString()},{id:"group_2",name:"Beta Users",lookup_key:"beta_users",entity_type:"user",status:c.DRAFT,updated_at:new Date().toISOString()}],o={args:{data:m,onEdit:()=>{}}},s={args:{data:[],onEdit:()=>{}}},n={args:{data:[m[0]],onEdit:()=>{}}},i={args:{data:m,onEdit:()=>{}},play:async({canvasElement:t})=>{const a=await G(t).findByText(/enterprise customers/i);await w.hover(a),await D(a).toBeInTheDocument()}};var d,l,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: mockGroups,
    onEdit: () => {}
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var g,E,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: [],
    onEdit: () => {}
  }
}`,...(h=(E=s.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var f,x,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: [mockGroups[0]],
    onEdit: () => {}
  }
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var _,v,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data: mockGroups,
    onEdit: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const groupName = await canvas.findByText(/enterprise customers/i);
    await userEvent.hover(groupName);
    await expect(groupName).toBeInTheDocument();
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const ue=["Default","Empty","SingleGroup","InteractionTest"];export{o as Default,s as Empty,i as InteractionTest,n as SingleGroup,ue as __namedExportsOrder,me as default};
