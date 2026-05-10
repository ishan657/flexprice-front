import{within as m,userEvent as u,expect as l}from"./index-CH2Su9EI.js";import{A as d}from"./ApiDocs-Co2QF_84.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./Button-B6Y7aifE.js";import"./index-CS99gTSD.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-_H4XO0m7.js";import"./Input-B1SHhgN9.js";import"./index-1rxX2T2W.js";import"./index-CFFhkS_s.js";import"./index-rmX9f7t-.js";import"./DropdownMenu-Cxv-vWj5.js";import"./index-Dkxzguci.js";import"./Dialog-CbOliXkN.js";import"./Sheet-CFzkviKX.js";import"./index-CMUIB8cN.js";import"./QueryClientProvider-B6QCCsjn.js";import"./CodeBlock-mJjG_es0.js";import"./Card-DwF7Ghsh.js";import"./RecurringChargePreview-6EVNEM3a.js";import"./trash-2-CimWJyH9.js";import"./Table-B-KieeFC.js";import"./plus-CAQs44-f.js";import"./iframe-BUrLbgcZ.js";import"./tiny-invariant-CopsF_GD.js";const J={title:"Molecules/ApiDocs",component:d,parameters:{layout:"centered"},tags:["autodocs"]},t={},o={play:async({canvasElement:p})=>{const e=m(p).getByRole("button");await u.click(e),await l(e).toBeInTheDocument()}};var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,c,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const K=["Default","InteractionTest"];export{t as Default,o as InteractionTest,K as __namedExportsOrder,J as default};
