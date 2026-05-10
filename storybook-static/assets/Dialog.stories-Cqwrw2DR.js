import{j as e}from"./jsx-runtime-6qgwzs7k.js";import{within as N,userEvent as D,expect as j}from"./index-CH2Su9EI.js";import{D as w}from"./Dialog-CbOliXkN.js";import{B as a}from"./Button-B6Y7aifE.js";import"./index-DQDNmYQF.js";import"./index-Dkxzguci.js";import"./createLucideIcon-_H4XO0m7.js";import"./index-rmX9f7t-.js";import"./index-CS99gTSD.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./utils-BLSKlp9E.js";const P={title:"Atoms/Dialog",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},showCloseButton:{control:"boolean"}}},n={args:{isOpen:!0,title:"Create Invoice",description:"Fill in the required invoice details below.",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-zinc-600",children:"This dialog can contain forms, tables, and other content."}),e.jsx(a,{children:"Create Invoice"})]}),onOpenChange:()=>{}}},t={args:{isOpen:!0,title:"Delete Customer",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-zinc-600",children:"This action cannot be undone."}),e.jsx(a,{variant:"destructive",children:"Delete"})]}),onOpenChange:()=>{}}},s={args:{isOpen:!0,title:"Verification Required",showCloseButton:!1,children:e.jsx("p",{className:"text-sm text-zinc-600",children:"Please verify your email before continuing."}),onOpenChange:()=>{}}},o={args:{isOpen:!0,title:"Terms and Conditions",description:"Scrollable dialog content example.",children:e.jsx("div",{className:"space-y-4",children:Array.from({length:12}).map((i,c)=>e.jsx("p",{className:"text-sm text-zinc-600",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quidem."},c))}),onOpenChange:()=>{}}},r={args:{isOpen:!0,title:"Interaction Test",description:"Testing dialog rendering and button interaction.",children:e.jsx(a,{children:"Confirm Action"}),onOpenChange:()=>{}},play:async({canvasElement:i})=>{const l=N(i).getByRole("button");await D.click(l),await j(l).toBeInTheDocument()}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Create Invoice',
    description: 'Fill in the required invoice details below.',
    children: <div className='space-y-4'>\r
                <p className='text-sm text-zinc-600'>This dialog can contain forms, tables, and other content.</p>\r
\r
                <Button>Create Invoice</Button>\r
            </div>,
    onOpenChange: () => {}
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Delete Customer',
    children: <div className='space-y-4'>\r
                <p className='text-sm text-zinc-600'>This action cannot be undone.</p>\r
\r
                <Button variant='destructive'>Delete</Button>\r
            </div>,
    onOpenChange: () => {}
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Verification Required',
    showCloseButton: false,
    children: <p className='text-sm text-zinc-600'>Please verify your email before continuing.</p>,
    onOpenChange: () => {}
  }
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,O,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Terms and Conditions',
    description: 'Scrollable dialog content example.',
    children: <div className='space-y-4'>\r
                {Array.from({
        length: 12
      }).map((_, i) => <p key={i} className='text-sm text-zinc-600'>\r
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quidem.\r
                    </p>)}\r
            </div>,
    onOpenChange: () => {}
  }
}`,...(f=(O=o.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var y,B,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Interaction Test',
    description: 'Testing dialog rendering and button interaction.',
    children: <Button>Confirm Action</Button>,
    onOpenChange: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  }
}`,...(T=(B=r.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const Q=["Default","WithoutDescription","WithoutCloseButton","LongContent","InteractionTest"];export{n as Default,r as InteractionTest,o as LongContent,s as WithoutCloseButton,t as WithoutDescription,Q as __namedExportsOrder,P as default};
