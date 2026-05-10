import{t as I,C as N}from"./CodeBlock-mJjG_es0.js";import{within as O,expect as _}from"./index-CH2Su9EI.js";import"./jsx-runtime-6qgwzs7k.js";import"./index-DQDNmYQF.js";import"./utils-BLSKlp9E.js";import"./index-CMUIB8cN.js";import"./createLucideIcon-_H4XO0m7.js";const M={title:"Atoms/CodeBlock",component:N,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{language:{control:"select",options:["tsx","typescript","javascript","json","bash"]}}},e={args:{title:"install.sh",code:`
npm install @tanstack/react-table
npm run storybook
    `,language:"bash"}},c=`
function Button() {
  return (
    <button className="bg-black text-white px-4 py-2 rounded-md">
      Create Invoice
    </button>
  );
}
`,q=`
{
  "plan": "Pro",
  "price": 49,
  "billing": "monthly"
}
`,L=`
npm install @tanstack/react-table
npm run storybook
`,a={args:{code:c,language:"tsx"}},t={args:{code:q,language:"json"}},s={args:{code:L,language:"bash"}},o={args:{code:c,language:"tsx",theme:I.github}},n={args:{code:c,language:"tsx",theme:I.vsDark}},r={args:{code:`
const total = price * quantity;
console.log(total);
    `,language:"javascript"},play:async({canvasElement:J})=>{const p=O(J).getByRole("button");await userEvent.click(p),await _(p).toBeInTheDocument()}};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'install.sh',
    code: \`
npm install @tanstack/react-table
npm run storybook
    \`,
    language: 'bash'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,i,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    code: sampleTsxCode,
    language: 'tsx'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    code: sampleJsonCode,
    language: 'json'
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,k,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    code: sampleBashCode,
    language: 'bash'
  }
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var T,v,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    code: sampleTsxCode,
    language: 'tsx',
    theme: themes.github
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,E,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    code: sampleTsxCode,
    language: 'tsx',
    theme: themes.vsDark
  }
}`,...(D=(E=n.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var w,f,j;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    code: \`
const total = price * quantity;
console.log(total);
    \`,
    language: 'javascript'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const copyButton = canvas.getByRole('button');
    await userEvent.click(copyButton);
    await expect(copyButton).toBeInTheDocument();
  }
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const Q=["Default","TypeScript","JSONExample","BashExample","LightTheme","DarkTheme","InteractionTest"];export{s as BashExample,n as DarkTheme,e as Default,r as InteractionTest,t as JSONExample,o as LightTheme,a as TypeScript,Q as __namedExportsOrder,M as default};
