import{j as r}from"./jsx-runtime-6qgwzs7k.js";import{B as e}from"./Button-B6Y7aifE.js";import{within as Q,userEvent as U,expect as X}from"./index-CH2Su9EI.js";import{T as Y}from"./trash-2-CimWJyH9.js";import{P as Z}from"./plus-CAQs44-f.js";import"./index-DQDNmYQF.js";import"./index-CS99gTSD.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";const dr={title:"Atoms/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","ghost","destructive","outline","link"]},size:{control:"select",options:["default","sm","lg","xs"]},isLoading:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{children:"Create Tax Rate",variant:"default"}},n={args:{children:"Cancel",variant:"secondary"}},t={args:{children:"Learn More",variant:"ghost"}},s={args:{children:"Delete Invoice",variant:"destructive"}},o={args:{children:"Saving...",isLoading:!0}},c={args:{children:"Disabled",disabled:!0}},i={args:{children:"Small Button",size:"sm"}},d={args:{children:"Large Button",size:"lg"}},l={args:{children:"Add Customer",prefixIcon:r.jsx(Z,{}),suffixIcon:r.jsx(Y,{})}},u={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(e,{variant:"default",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"destructive",children:"Danger"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"link",children:"Link"})]})},m={args:{children:"Click Me"},play:async({canvasElement:K})=>{const p=Q(K).getByRole("button");await U.click(p),await X(p).toBeInTheDocument()}};var g,h,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Create Tax Rate',
    variant: 'default'
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,B,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    variant: 'secondary'
  }
}`,...(f=(B=n.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,S,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Learn More',
    variant: 'ghost'
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var L,D,I;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Delete Invoice',
    variant: 'destructive'
  }
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var j,T,k;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Saving...',
    isLoading: true
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var w,C,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var P,z,A;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var R,G,M;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var O,N,V;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Add Customer',
    prefixIcon: <Plus />,
    suffixIcon: <Trash2 />
  }
}`,...(V=(N=l.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var W,_,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className='flex flex-wrap gap-4'>\r
            <Button variant='default'>Primary</Button>\r
\r
            <Button variant='secondary'>Secondary</Button>\r
\r
            <Button variant='ghost'>Ghost</Button>\r
\r
            <Button variant='destructive'>Danger</Button>\r
\r
            <Button variant='outline'>Outline</Button>\r
\r
            <Button variant='link'>Link</Button>\r
        </div>
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var F,H,J;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Click Me'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const lr=["Primary","Secondary","Ghost","Danger","Loading","Disabled","Small","Large","WithIcons","AllVariants","InteractionTest"];export{u as AllVariants,s as Danger,c as Disabled,t as Ghost,m as InteractionTest,d as Large,o as Loading,a as Primary,n as Secondary,i as Small,l as WithIcons,lr as __namedExportsOrder,dr as default};
