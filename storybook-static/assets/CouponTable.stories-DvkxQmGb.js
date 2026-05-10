import{j as t}from"./jsx-runtime-6qgwzs7k.js";import{within as A,userEvent as k,expect as B}from"./index-CH2Su9EI.js";import{G as P,R as f,c as M,b as m,h as y,H as U,J as Q,K as H,N as u,O as K,M as L}from"./ApiDocs-Co2QF_84.js";import{Q as X,a as G}from"./QueryClientProvider-B6QCCsjn.js";import{r as g}from"./index-DQDNmYQF.js";import"./Button-B6Y7aifE.js";import"./Input-B1SHhgN9.js";import"./Dialog-CbOliXkN.js";import"./DropdownMenu-Cxv-vWj5.js";import"./Sheet-CFzkviKX.js";import"./index-1rxX2T2W.js";import"./CodeBlock-mJjG_es0.js";import"./index-CMUIB8cN.js";import"./Card-DwF7Ghsh.js";import{g as Y}from"./RecurringChargePreview-6EVNEM3a.js";import{F as q}from"./Table-B-KieeFC.js";import"./index-rmX9f7t-.js";import"./index-CS99gTSD.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";import"./index-Dkxzguci.js";import"./plus-CAQs44-f.js";import"./trash-2-CimWJyH9.js";import"./iframe-BUrLbgcZ.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CFFhkS_s.js";const J=({data:o,onEdit:n})=>{const r=P(),[j,F]=g.useState(null),[R,l]=g.useState(!1),w=o==null?void 0:o.map(e=>({...e})),O=e=>{F(e),l(!0),n==null||n(e)},$=[{fieldName:"name",title:"Name"},{title:"Type",render:e=>{const a=e.type===m.FIXED?"Fixed Amount":"Percentage";return t.jsx(y,{variant:"default",label:a})}},{title:"Discount",render:e=>e.type===m.FIXED?e.amount_off?`${Y(e.currency)} ${e.amount_off}`:"-":e.percentage_off?`${e.percentage_off}%`:"-"},{title:"Redemptions",render:e=>{const a=e.max_redemptions||"∞";return`${e.total_redemptions}/${a}`}},{title:"Status",render:e=>{const a=U(e.status);return t.jsx(y,{variant:a==="Active"?"success":"default",label:a})}},{title:"Updated at",render:e=>Q(e.updated_at)},{fieldVariant:"interactive",render:e=>t.jsx(H,{id:e.id,deleteMutationFn:a=>K.deleteCoupon(a),refetchQueryKey:"fetchCoupons",entityName:"Coupon",edit:{path:`${f.couponDetails}/${e.id}`,onClick:()=>O(e)},archive:{enabled:e.status===u.PUBLISHED}})}];return t.jsxs(t.Fragment,{children:[t.jsx(q,{columns:$,data:w,showEmptyRow:!0,onRowClick:e=>{r(`${f.couponDetails}/${e.id}`)}}),t.jsx(M,{data:j,open:R,onOpenChange:l,refetchQueryKeys:["fetchCoupons"]})]})},V=new G,Se={title:"Molecules/CouponTable",component:J,decorators:[o=>t.jsx(X,{client:V,children:t.jsx(L,{children:t.jsx(o,{})})})],parameters:{layout:"fullscreen",docs:{description:{component:`CouponTable\r

Displays coupons in a reusable table layout\r
with actions, status chips, and navigation.`}}},tags:["autodocs"],argTypes:{data:{control:"object"},onEdit:{action:"edit clicked"}}},d=[{id:"coupon_1",name:"SUMMER50",type:m.PERCENTAGE,percentage_off:50,total_redemptions:20,max_redemptions:100,status:u.PUBLISHED,updated_at:new Date().toISOString()},{id:"coupon_2",name:"FLAT100",type:m.FIXED,amount_off:100,currency:"usd",total_redemptions:5,max_redemptions:50,status:u.DRAFT,updated_at:new Date().toISOString()}],s={args:{data:d}},c={args:{data:[]}},i={args:{data:[d[0]]}},p={args:{data:d},play:async({canvasElement:o})=>{const r=await A(o).findByText(/summer50/i);await k.hover(r),await B(r).toBeInTheDocument()}};var C,x,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data: mockCoupons
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var D,_,v;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(v=(_=c.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var E,S,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: [mockCoupons[0]]
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,N,b;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: mockCoupons
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const couponName = await canvas.findByText(/summer50/i);
    await userEvent.hover(couponName);
    await expect(couponName).toBeInTheDocument();
  }
}`,...(b=(N=p.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const Te=["Default","Empty","SingleCoupon","InteractionTest"];export{s as Default,c as Empty,p as InteractionTest,i as SingleCoupon,Te as __namedExportsOrder,Se as default};
