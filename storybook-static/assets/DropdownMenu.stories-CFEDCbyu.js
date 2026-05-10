import{within as a,userEvent as f,expect as v}from"./index-CH2Su9EI.js";import{D as x}from"./DropdownMenu-CAb0ez7E.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./index-BaTnzSvR.js";import"./index-CS99gTSD.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";const P={title:"Molecules/DropdownMenu",component:x,parameters:{layout:"centered",docs:{description:{component:`DropdownMenu\r

Reusable dropdown menu component\r
supporting grouped and disabled options.`}}},tags:["autodocs"],argTypes:{align:{control:"radio",options:["start","end"]},dir:{control:"radio",options:["ltr","rtl"]},isOpen:{control:"boolean"}}},e={args:{options:[{label:"Edit"},{label:"Delete"}]}},n={args:{options:[{label:"Edit"},{label:"Delete",disabled:!0}]}},t={args:{options:[{label:"Profile",group:"Account"},{label:"Settings",group:"Account"},{label:"Delete",group:"Danger"}]}},o={args:{options:[{label:"Edit"},{label:"Delete"}]},play:async({canvasElement:w})=>{const y=await a(w).findByRole("button");await f.click(y);const E=await a(document.body).findByText(/edit/i);await v(E).toBeInTheDocument()}};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Edit'
    }, {
      label: 'Delete'
    }]
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Edit'
    }, {
      label: 'Delete',
      disabled: true
    }]
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Profile',
      group: 'Account'
    }, {
      label: 'Settings',
      group: 'Account'
    }, {
      label: 'Delete',
      group: 'Danger'
    }]
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,b,D;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Edit'
    }, {
      label: 'Delete'
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole('button');
    await userEvent.click(trigger);
    const option = await within(document.body).findByText(/edit/i);
    await expect(option).toBeInTheDocument();
  }
}`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const _=["Default","DisabledOption","GroupedOptions","InteractionTest"];export{e as Default,n as DisabledOption,t as GroupedOptions,o as InteractionTest,_ as __namedExportsOrder,P as default};
