import type { Meta, StoryObj } from '@storybook/react';
import CodeBlock from './CodeBlock';
import { themes } from 'prism-react-renderer';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof CodeBlock> = {
	title: 'Atoms/CodeBlock',

	component: CodeBlock,

	parameters: {
		layout: 'padded',
	},

	tags: ['autodocs'],

	argTypes: {
		language: {
			control: 'select',

			options: ['tsx', 'typescript', 'javascript', 'json', 'bash'],
		},
	},
};
export default meta;

export const Default: Story = {
	args: {
		title: 'install.sh',

		code: `
npm install @tanstack/react-table
npm run storybook
    `,

		language: 'bash',
	},
};
type Story = StoryObj<typeof CodeBlock>;

const sampleTsxCode = `
function Button() {
  return (
    <button className="bg-black text-white px-4 py-2 rounded-md">
      Create Invoice
    </button>
  );
}
`;

const sampleJsonCode = `
{
  "plan": "Pro",
  "price": 49,
  "billing": "monthly"
}
`;

const sampleBashCode = `
npm install @tanstack/react-table
npm run storybook
`;

export const TypeScript: Story = {
	args: {
		code: sampleTsxCode,
		language: 'tsx',
	},
};

export const JSONExample: Story = {
	args: {
		code: sampleJsonCode,
		language: 'json',
	},
};

export const BashExample: Story = {
	args: {
		code: sampleBashCode,
		language: 'bash',
	},
};

export const LightTheme: Story = {
	args: {
		code: sampleTsxCode,
		language: 'tsx',
		theme: themes.github,
	},
};

export const DarkTheme: Story = {
	args: {
		code: sampleTsxCode,
		language: 'tsx',
		theme: themes.vsDark,
	},
};
export const InteractionTest: Story = {
	args: {
		code: `
const total = price * quantity;
console.log(total);
    `,
		language: 'javascript',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const copyButton = canvas.getByRole('button');

		await userEvent.click(copyButton);

		await expect(copyButton).toBeInTheDocument();
	},
};
