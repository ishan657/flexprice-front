import{within as R,userEvent as N,expect as L}from"./index-CH2Su9EI.js";import{C as q}from"./ApiDocs-Co2QF_84.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./Button-B6Y7aifE.js";import"./index-CS99gTSD.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";import"./Input-B1SHhgN9.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-rmX9f7t-.js";import"./DropdownMenu-Cxv-vWj5.js";import"./index-Dkxzguci.js";import"./Dialog-CbOliXkN.js";import"./Sheet-CFzkviKX.js";import"./index-CMUIB8cN.js";import"./QueryClientProvider-B6QCCsjn.js";import"./CodeBlock-mJjG_es0.js";import"./Card-DwF7Ghsh.js";import"./RecurringChargePreview-6EVNEM3a.js";import"./trash-2-CimWJyH9.js";import"./Table-B-KieeFC.js";import"./plus-CAQs44-f.js";import"./iframe-BUrLbgcZ.js";import"./tiny-invariant-CopsF_GD.js";const pt={title:"Molecules/ContactUsDialog",component:q,parameters:{layout:"centered",docs:{description:{component:"Reusable support dialog with Slack, Email, and Calendly contact actions."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls dialog visibility"},title:{control:"text",description:"Dialog title"},description:{control:"text",description:"Dialog description"},onOpenChange:{action:"open changed",description:"Triggered when dialog open state changes"}}},t={args:{isOpen:!0,title:"Contact us",description:"Reach out to continue or get help."}},e={args:{isOpen:!0,title:"Need assistance?",description:"Choose your preferred support channel."}},o={args:{isOpen:!1}},n={args:{isOpen:!0,title:"Need help with billing, integrations, pricing, or technical support?",description:"Our support team is available through multiple channels. Join the Slack community for quick discussions, send us an email for detailed assistance, or book a dedicated call with our team."}},s={args:{isOpen:!0},play:async({canvasElement:J})=>{const r=await R(document.body).findByRole("button",{name:/contact slack/i});await N.hover(r),await L(r).toBeInTheDocument()}};var a,i,c,p,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Contact us',
    description: 'Reach out to continue or get help.'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Default happy-path story",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var d,m,u,g,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Need assistance?',
    description: 'Choose your preferred support channel.'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Custom content variant",...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var y,C,f,v,O;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isOpen: false
  }
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source},description:{story:"Closed dialog state",...(O=(v=o.parameters)==null?void 0:v.docs)==null?void 0:O.description}}};var w,b,k,D,B;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Need help with billing, integrations, pricing, or technical support?',
    description: 'Our support team is available through multiple channels. Join the Slack community for quick discussions, send us an email for detailed assistance, or book a dedicated call with our team.'
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:"Long content variant",...(B=(D=n.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var S,x,E,T,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isOpen: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(document.body);
    const slackButton = await canvas.findByRole('button', {
      name: /contact slack/i
    });
    await userEvent.hover(slackButton);
    await expect(slackButton).toBeInTheDocument();
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source},description:{story:"Interaction test story",...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};const lt=["Default","CustomContent","Closed","LongContent","InteractionTest"];export{o as Closed,e as CustomContent,t as Default,s as InteractionTest,n as LongContent,lt as __namedExportsOrder,pt as default};
