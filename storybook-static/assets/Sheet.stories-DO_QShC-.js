import{j as e}from"./jsx-runtime-6qgwzs7k.js";import{within as A,userEvent as E,expect as I}from"./index-CH2Su9EI.js";import{S as w}from"./Sheet-CFzkviKX.js";import{B as l}from"./Button-B6Y7aifE.js";import"./index-DQDNmYQF.js";import"./index-Dkxzguci.js";import"./createLucideIcon-_H4XO0m7.js";import"./index-rmX9f7t-.js";import"./index-CS99gTSD.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./utils-BLSKlp9E.js";const K={title:"Atoms/Sheet",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","2xl","3xl","full"]},isOpen:{control:"boolean"}}},r={args:{isOpen:!0,title:"Create Customer",description:"Add customer details and billing information.",size:"md",children:e.jsxs("div",{className:"space-y-4 mt-4",children:[e.jsx("div",{className:"rounded-lg border border-zinc-200 p-4",children:"Customer Information Form"}),e.jsx(l,{children:"Save Customer"})]}),onOpenChange:()=>{}}},t={args:{isOpen:!0,title:"Analytics Dashboard",description:"Expanded sheet with larger content area.",size:"2xl",children:e.jsx("div",{className:"space-y-4 mt-4",children:Array.from({length:5}).map((c,n)=>e.jsxs("div",{className:"rounded-lg border border-zinc-200 p-4",children:["Analytics Widget ",n+1]},n))}),onOpenChange:()=>{}}},a={args:{isOpen:!0,title:"Full Screen Editor",size:"full",children:e.jsx("div",{className:"mt-4 rounded-lg border border-zinc-200 p-6",children:e.jsx("p",{className:"text-zinc-600",children:"Full screen sheet content area."})}),onOpenChange:()=>{}}},s={args:{title:"Invite Team Member",description:"Send invitation to collaborators.",trigger:e.jsx(l,{children:"Open Sheet"}),children:e.jsx("div",{className:"space-y-4 mt-4",children:e.jsx("div",{className:"rounded-lg border border-zinc-200 p-4",children:"Team invitation form"})}),onOpenChange:()=>{}}},o={args:{isOpen:!0,title:"Long Content Example",description:"Testing automatic scroll handling.",size:"lg",children:e.jsx("div",{className:"space-y-4",children:Array.from({length:20}).map((c,n)=>e.jsxs("div",{className:"rounded-lg border border-zinc-200 p-4",children:["Content Block ",n+1]},n))}),onOpenChange:()=>{}}},i={args:{isOpen:!0,title:"Interaction Test",children:e.jsx(l,{children:"Confirm Action"}),onOpenChange:()=>{}},play:async({canvasElement:c})=>{const d=A(c).getByRole("button");await E.click(d),await I(d).toBeInTheDocument()}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Create Customer',
    description: 'Add customer details and billing information.',
    size: 'md',
    children: <div className='space-y-4 mt-4'>\r
                <div className='rounded-lg border border-zinc-200 p-4'>Customer Information Form</div>\r
\r
                <Button>Save Customer</Button>\r
            </div>,
    onOpenChange: () => {}
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Analytics Dashboard',
    description: 'Expanded sheet with larger content area.',
    size: '2xl',
    children: <div className='space-y-4 mt-4'>\r
                {Array.from({
        length: 5
      }).map((_, i) => <div key={i} className='rounded-lg border border-zinc-200 p-4'>\r
                        Analytics Widget {i + 1}\r
                    </div>)}\r
            </div>,
    onOpenChange: () => {}
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,x,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Full Screen Editor',
    size: 'full',
    children: <div className='mt-4 rounded-lg border border-zinc-200 p-6'>\r
                <p className='text-zinc-600'>Full screen sheet content area.</p>\r
            </div>,
    onOpenChange: () => {}
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,O,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Invite Team Member',
    description: 'Send invitation to collaborators.',
    trigger: <Button>Open Sheet</Button>,
    children: <div className='space-y-4 mt-4'>\r
                <div className='rounded-lg border border-zinc-200 p-4'>Team invitation form</div>\r
            </div>,
    onOpenChange: () => {}
  }
}`,...(S=(O=s.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var f,z,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Long Content Example',
    description: 'Testing automatic scroll handling.',
    size: 'lg',
    children: <div className='space-y-4'>\r
                {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className='rounded-lg border border-zinc-200 p-4'>\r
                        Content Block {i + 1}\r
                    </div>)}\r
            </div>,
    onOpenChange: () => {}
  }
}`,...(N=(z=o.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var j,T,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Interaction Test',
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
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const P=["Default","LargeSheet","FullScreen","WithTrigger","ScrollableContent","InteractionTest"];export{r as Default,a as FullScreen,i as InteractionTest,t as LargeSheet,o as ScrollableContent,s as WithTrigger,P as __namedExportsOrder,K as default};
