import{within as x,userEvent as B,expect as U}from"./index-CH2Su9EI.js";import{e as E}from"./ApiDocs-CAJ0rh-z.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./Button-B6Y7aifE.js";import"./index-CS99gTSD.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";import"./Input-B1SHhgN9.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-BaTnzSvR.js";import"./DropdownMenu-CAb0ez7E.js";import"./index-DSPzp8c9.js";import"./Dialog-B8zj_ln6.js";import"./Sheet-DEkiEW1R.js";import"./index-CMUIB8cN.js";import"./QueryClientProvider-B6QCCsjn.js";import"./CodeBlock-mJjG_es0.js";import"./Card-DwF7Ghsh.js";import"./RecurringChargePreview-6EVNEM3a.js";import"./trash-2-CimWJyH9.js";import"./Table-B-KieeFC.js";import"./plus-CAQs44-f.js";import"./iframe-BebtJecw.js";import"./tiny-invariant-CopsF_GD.js";const tt={title:"Organisms/TutorialCards",component:E,parameters:{layout:"centered",docs:{description:{component:`TutorialCards\r

Organism component displaying\r
tutorial/resource cards with:\r
- image previews\r
- titles\r
- CTA interactions`}}},tags:["autodocs"]},o=[{title:"Getting Started",imageUrl:"https://mintlify.s3.us-west-1.amazonaws.com/flexprice/UsageBaseMetering(1).jpg",onClick:()=>{}},{title:"Usage Based Billing",imageUrl:"https://mintlify.s3.us-west-1.amazonaws.com/flexprice/UsageBaseMetering(1).jpg",onClick:()=>{}},{title:"Advanced Pricing",imageUrl:"https://mintlify.s3.us-west-1.amazonaws.com/flexprice/UsageBaseMetering(1).jpg",onClick:()=>{}}],t={args:{tutorials:o}},r={args:{tutorials:[o[0]]}},a={args:{tutorials:[]}},e={args:{tutorials:[{title:"Fallback Image Card",imageUrl:"",onClick:()=>{}}]}},s={args:{tutorials:o},play:async({canvasElement:h})=>{const i=await x(h).findByText(/getting started/i);await B.hover(i),await U(i).toBeInTheDocument()}};var n,c,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    tutorials: mockTutorials
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tutorials: [mockTutorials[0]]
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,d,w;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tutorials: []
  }
}`,...(w=(d=a.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};var T,f,v;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tutorials: [{
      title: 'Fallback Image Card',
      imageUrl: '',
      onClick: () => {}
    }]
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,C,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tutorials: mockTutorials
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = await canvas.findByText(/getting started/i);
    await userEvent.hover(card);
    await expect(card).toBeInTheDocument();
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const rt=["Default","SingleCard","Empty","MissingImages","InteractionTest"];export{t as Default,a as Empty,s as InteractionTest,e as MissingImages,r as SingleCard,rt as __namedExportsOrder,tt as default};
