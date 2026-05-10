import{within as v,userEvent as P,expect as w}from"./index-CH2Su9EI.js";import{P as C,R as T}from"./RecurringChargePreview-6EVNEM3a.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./index-CMUIB8cN.js";import"./Input-B1SHhgN9.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";import"./trash-2-CimWJyH9.js";const O={title:"Organisms/RecurringChargePreview",component:T,parameters:{layout:"centered",docs:{description:{component:`RecurringChargePreview\r

Preview card displaying recurring\r
pricing charge information with:\r
- billing period\r
- pricing amount\r
- currency display\r
- edit/delete actions`}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},onEditClicked:{action:"edit clicked"},onDeleteClicked:{action:"delete clicked"}}},t={id:"price_1",display_name:"Pro Monthly",amount:"29",currency:"usd",billing_period:"monthly",price_unit_type:C.FIAT},e={args:{charge:t}},r={args:{charge:t,disabled:!0}},n={args:{charge:{id:"price_2",display_name:"Credits Plan",amount:"100",currency:"usd",billing_period:"monthly",price_unit_type:C.CUSTOM,price_unit_config:{price_unit:"Credits",amount:"100"}}}},a={args:{charge:t},play:async({canvasElement:b})=>{const i=await v(b).findAllByRole("button");await P.hover(i[0]),await w(i[0]).toBeInTheDocument()}};var o,c,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    charge: mockCharge
  }
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    charge: mockCharge,
    disabled: true
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,l,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    charge: {
      id: 'price_2',
      display_name: 'Credits Plan',
      amount: '100',
      currency: 'usd',
      billing_period: 'monthly',
      price_unit_type: PRICE_UNIT_TYPE.CUSTOM,
      price_unit_config: {
        price_unit: 'Credits',
        amount: '100'
      }
    }
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,_,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    charge: mockCharge
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = await canvas.findAllByRole('button');
    await userEvent.hover(buttons[0]);
    await expect(buttons[0]).toBeInTheDocument();
  }
}`,...(y=(_=a.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const A=["Default","Disabled","CustomPriceUnit","InteractionTest"];export{n as CustomPriceUnit,e as Default,r as Disabled,a as InteractionTest,A as __namedExportsOrder,O as default};
