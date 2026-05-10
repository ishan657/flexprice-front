import{j as e}from"./jsx-runtime-6qgwzs7k.js";import{C as r,a}from"./Card-DwF7Ghsh.js";import{B as V}from"./Button-B6Y7aifE.js";import{within as Y,expect as _}from"./index-CH2Su9EI.js";import"./index-DQDNmYQF.js";import"./utils-BLSKlp9E.js";import"./index-CS99gTSD.js";import"./createLucideIcon-_H4XO0m7.js";const te={title:"Atoms/Card",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","notched","bordered","elevated","warning"]},notchPosition:{control:"select",options:["left","right"]},notchSize:{control:"select",options:["sm","md","lg"]},noPadding:{control:"boolean"}}},t={args:{variant:"default",children:e.jsxs("div",{className:"w-[320px]",children:[e.jsx(a,{title:"Monthly Revenue",subtitle:"Compared to last month"}),e.jsx("p",{className:"text-3xl font-semibold",children:"$12,450"})]})}},n={args:{variant:"elevated",children:e.jsxs("div",{className:"w-[320px]",children:[e.jsx(a,{title:"Total Customers",subtitle:"Active subscriptions"}),e.jsx("p",{className:"text-3xl font-semibold",children:"1,284"})]})}},s={args:{variant:"bordered",children:e.jsxs("div",{className:"w-[320px]",children:[e.jsx(a,{title:"Invoices",subtitle:"Generated this month"}),e.jsx("p",{className:"text-3xl font-semibold",children:"342"})]})}},i={args:{variant:"warning",children:e.jsxs("div",{className:"w-[320px]",children:[e.jsx(a,{title:"Payment Failed",subtitle:"Retry required"}),e.jsx("p",{className:"text-sm",children:"Some invoices could not be processed."})]})}},d={args:{variant:"notched",notchPosition:"left",children:e.jsxs("div",{className:"w-[320px]",children:[e.jsx(a,{title:"Usage Analytics",subtitle:"Current billing cycle"}),e.jsx("p",{className:"text-3xl font-semibold",children:"82%"})]})}},o={args:{variant:"notched",notchPosition:"right",children:e.jsxs("div",{className:"w-[320px]",children:[e.jsx(a,{title:"Credits Remaining",subtitle:"Updated 2 mins ago"}),e.jsx("p",{className:"text-3xl font-semibold",children:"240"})]})}},l={args:{variant:"elevated",children:e.jsxs("div",{className:"w-[320px]",children:[e.jsx(a,{title:"Plans",subtitle:"Manage pricing plans",cta:e.jsx(V,{size:"sm",children:"Upgrade"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Your current plan is Pro."})]})}},c={args:{noPadding:!0,children:e.jsxs("div",{className:"w-[320px] p-6",children:[e.jsx(a,{title:"Custom Layout",subtitle:"No internal padding"}),e.jsx("p",{className:"text-sm",children:"This card allows full layout control."})]})}},m={render:function(){return e.jsxs("div",{className:"grid gap-6 w-[700px]",children:[e.jsx(r,{variant:"default",children:e.jsx("p",{className:"font-medium",children:"Default Card"})}),e.jsx(r,{variant:"elevated",children:e.jsx("p",{className:"font-medium",children:"Elevated Card"})}),e.jsx(r,{variant:"bordered",children:e.jsx("p",{className:"font-medium",children:"Bordered Card"})}),e.jsx(r,{variant:"warning",children:e.jsx("p",{className:"font-medium",children:"Warning Card"})}),e.jsx(r,{variant:"notched",children:e.jsx("p",{className:"font-medium",children:"Notched Card"})})]})}},p={args:{variant:"elevated",children:e.jsxs("div",{className:"w-[320px]",children:[e.jsx(a,{title:"Revenue Overview",subtitle:"Monthly analytics"}),e.jsx("p",{className:"text-3xl font-semibold",children:"$24,900"})]})},play:async({canvasElement:u})=>{const G=Y(u).getByText("Revenue Overview");await _(G).toBeInTheDocument()}};var x,v,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <div className='w-[320px]'>\r
                <CardHeader title='Monthly Revenue' subtitle='Compared to last month' />\r
\r
                <p className='text-3xl font-semibold'>$12,450</p>\r
            </div>
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,N,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div className='w-[320px]'>\r
                <CardHeader title='Total Customers' subtitle='Active subscriptions' />\r
\r
                <p className='text-3xl font-semibold'>1,284</p>\r
            </div>
  }
}`,...(f=(N=n.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var C,b,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    children: <div className='w-[320px]'>\r
                <CardHeader title='Invoices' subtitle='Generated this month' />\r
\r
                <p className='text-3xl font-semibold'>342</p>\r
            </div>
  }
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,y,P;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: <div className='w-[320px]'>\r
                <CardHeader title='Payment Failed' subtitle='Retry required' />\r
\r
                <p className='text-sm'>Some invoices could not be processed.</p>\r
            </div>
  }
}`,...(P=(y=i.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var R,S,T;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'notched',
    notchPosition: 'left',
    children: <div className='w-[320px]'>\r
                <CardHeader title='Usage Analytics' subtitle='Current billing cycle' />\r
\r
                <p className='text-3xl font-semibold'>82%</p>\r
            </div>
  }
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var B,H,A;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'notched',
    notchPosition: 'right',
    children: <div className='w-[320px]'>\r
                <CardHeader title='Credits Remaining' subtitle='Updated 2 mins ago' />\r
\r
                <p className='text-3xl font-semibold'>240</p>\r
            </div>
  }
}`,...(A=(H=o.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var E,D,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div className='w-[320px]'>\r
                <CardHeader title='Plans' subtitle='Manage pricing plans' cta={<Button size='sm'>Upgrade</Button>} />\r
\r
                <p className='text-sm text-muted-foreground'>Your current plan is Pro.</p>\r
            </div>
  }
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var M,U,W;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    noPadding: true,
    children: <div className='w-[320px] p-6'>\r
                <CardHeader title='Custom Layout' subtitle='No internal padding' />\r
\r
                <p className='text-sm'>This card allows full layout control.</p>\r
            </div>
  }
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var O,L,$;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: function Render() {
    return <div className='grid gap-6 w-[700px]'>\r
                <Card variant='default'>\r
                    <p className='font-medium'>Default Card</p>\r
                </Card>\r
\r
                <Card variant='elevated'>\r
                    <p className='font-medium'>Elevated Card</p>\r
                </Card>\r
\r
                <Card variant='bordered'>\r
                    <p className='font-medium'>Bordered Card</p>\r
                </Card>\r
\r
                <Card variant='warning'>\r
                    <p className='font-medium'>Warning Card</p>\r
                </Card>\r
\r
                <Card variant='notched'>\r
                    <p className='font-medium'>Notched Card</p>\r
                </Card>\r
            </div>;
  }
}`,...($=(L=m.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var z,q,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <div className='w-[320px]'>\r
                <CardHeader title='Revenue Overview' subtitle='Monthly analytics' />\r
\r
                <p className='text-3xl font-semibold'>$24,900</p>\r
            </div>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByText('Revenue Overview');
    await expect(heading).toBeInTheDocument();
  }
}`,...(F=(q=p.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const ne=["Default","Elevated","Bordered","Warning","NotchedLeft","NotchedRight","WithCTA","NoPadding","AllVariants","InteractionTest"];export{m as AllVariants,s as Bordered,t as Default,n as Elevated,p as InteractionTest,c as NoPadding,d as NotchedLeft,o as NotchedRight,i as Warning,l as WithCTA,ne as __namedExportsOrder,te as default};
