import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import Sheet from './Sheet';
import Button from '@/components/atoms/Button/Button';

const meta: Meta<typeof Sheet> = {
	title: 'Atoms/Sheet',

	component: Sheet,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {
		size: {
			control: 'select',

			options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
		},

		isOpen: {
			control: 'boolean',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
	args: {
		isOpen: true,

		title: 'Create Customer',

		description: 'Add customer details and billing information.',

		size: 'md',

		children: (
			<div className='space-y-4 mt-4'>
				<div className='rounded-lg border border-zinc-200 p-4'>Customer Information Form</div>

				<Button>Save Customer</Button>
			</div>
		),

		onOpenChange: () => {},
	},
};

export const LargeSheet: Story = {
	args: {
		isOpen: true,

		title: 'Analytics Dashboard',

		description: 'Expanded sheet with larger content area.',

		size: '2xl',

		children: (
			<div className='space-y-4 mt-4'>
				{Array.from({ length: 5 }).map((_, i) => (
					<div key={i} className='rounded-lg border border-zinc-200 p-4'>
						Analytics Widget {i + 1}
					</div>
				))}
			</div>
		),

		onOpenChange: () => {},
	},
};

export const FullScreen: Story = {
	args: {
		isOpen: true,

		title: 'Full Screen Editor',

		size: 'full',

		children: (
			<div className='mt-4 rounded-lg border border-zinc-200 p-6'>
				<p className='text-zinc-600'>Full screen sheet content area.</p>
			</div>
		),

		onOpenChange: () => {},
	},
};

export const WithTrigger: Story = {
	args: {
		title: 'Invite Team Member',

		description: 'Send invitation to collaborators.',

		trigger: <Button>Open Sheet</Button>,

		children: (
			<div className='space-y-4 mt-4'>
				<div className='rounded-lg border border-zinc-200 p-4'>Team invitation form</div>
			</div>
		),

		onOpenChange: () => {},
	},
};

export const ScrollableContent: Story = {
	args: {
		isOpen: true,

		title: 'Long Content Example',

		description: 'Testing automatic scroll handling.',

		size: 'lg',

		children: (
			<div className='space-y-4'>
				{Array.from({ length: 20 }).map((_, i) => (
					<div key={i} className='rounded-lg border border-zinc-200 p-4'>
						Content Block {i + 1}
					</div>
				))}
			</div>
		),

		onOpenChange: () => {},
	},
};

export const InteractionTest: Story = {
	args: {
		isOpen: true,

		title: 'Interaction Test',

		children: <Button>Confirm Action</Button>,

		onOpenChange: () => {},
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const button = canvas.getByRole('button');

		await userEvent.click(button);

		await expect(button).toBeInTheDocument();
	},
};
