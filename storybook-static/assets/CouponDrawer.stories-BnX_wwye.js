import{j as p}from"./jsx-runtime-6qgwzs7k.js";import{within as D,userEvent as u,expect as S}from"./index-CH2Su9EI.js";import{a as i,b as m,c as h,M as F}from"./ApiDocs-CAJ0rh-z.js";import{Q as M,a as j}from"./QueryClientProvider-B6QCCsjn.js";import"./index-DQDNmYQF.js";import"./Button-B6Y7aifE.js";import"./index-CS99gTSD.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";import"./Input-B1SHhgN9.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-BaTnzSvR.js";import"./DropdownMenu-CAb0ez7E.js";import"./index-DSPzp8c9.js";import"./Dialog-B8zj_ln6.js";import"./Sheet-DEkiEW1R.js";import"./index-CMUIB8cN.js";import"./CodeBlock-mJjG_es0.js";import"./Card-DwF7Ghsh.js";import"./RecurringChargePreview-6EVNEM3a.js";import"./trash-2-CimWJyH9.js";import"./Table-B-KieeFC.js";import"./plus-CAQs44-f.js";import"./iframe-BebtJecw.js";import"./tiny-invariant-CopsF_GD.js";const G=new j,me={title:"Molecules/CouponDrawer",component:h,decorators:[s=>p.jsx(M,{client:G,children:p.jsx(F,{children:p.jsx(s,{})})})],parameters:{layout:"centered",docs:{description:{component:"Drawer component for creating and editing coupons with validation and dynamic form states."}}},tags:["autodocs"],argTypes:{open:{control:"boolean"},onOpenChange:{action:"open changed"},data:{control:"object"}}},e={args:{open:!0}},a={args:{open:!0,data:{id:"coupon_123",name:"SUMMER50",type:m.PERCENTAGE,cadence:i.ONCE,percentage_off:50}}},n={args:{open:!0,data:{name:"FLAT100",type:m.FIXED,cadence:i.FOREVER,amount_off:100,currency:"usd"}}},r={args:{open:!0,data:{name:"REPEAT20",type:m.PERCENTAGE,cadence:i.REPEATED,percentage_off:20,duration_in_periods:3}}},o={args:{open:!1}},t={args:{open:!0},play:async({canvasElement:s})=>{const c=await D(s).findByPlaceholderText(/enter a name for the coupon/i);await u.clear(c),await u.type(c,"TESTCOUPON"),await S(c).toHaveValue("TESTCOUPON")}};var d,E,C;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(C=(E=e.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var l,O,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    open: true,
    data: {
      id: 'coupon_123',
      name: 'SUMMER50',
      type: COUPON_TYPE.PERCENTAGE,
      cadence: COUPON_CADENCE.ONCE,
      percentage_off: 50
    }
  }
}`,...(g=(O=a.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};var f,P,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: true,
    data: {
      name: 'FLAT100',
      type: COUPON_TYPE.FIXED,
      cadence: COUPON_CADENCE.FOREVER,
      amount_off: 100,
      currency: 'usd'
    }
  }
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var y,N,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: true,
    data: {
      name: 'REPEAT20',
      type: COUPON_TYPE.PERCENTAGE,
      cadence: COUPON_CADENCE.REPEATED,
      percentage_off: 20,
      duration_in_periods: 3
    }
  }
}`,...(_=(N=r.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var R,A,w;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...(w=(A=o.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var v,x,U;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByPlaceholderText(/enter a name for the coupon/i);
    await userEvent.clear(input);
    await userEvent.type(input, 'TESTCOUPON');
    await expect(input).toHaveValue('TESTCOUPON');
  }
}`,...(U=(x=t.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};const ue=["Default","EditCoupon","FixedAmountCoupon","RepeatedCadence","Closed","InteractionTest"];export{o as Closed,e as Default,a as EditCoupon,n as FixedAmountCoupon,t as InteractionTest,r as RepeatedCadence,ue as __namedExportsOrder,me as default};
