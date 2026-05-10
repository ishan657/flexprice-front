import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import Dialog from './Dialog';
import Button from '../Button/Button';

const meta: Meta<typeof Dialog> = {
	title: 'Atoms/Dialog',

	component: Dialog,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {
		isOpen: {
			control: 'boolean',
		},

		showCloseButton: {
			control: 'boolean',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	args: {
		isOpen: true,

		title: 'Create Invoice',

		description: 'Fill in the required invoice details below.',

		children: (
			<div className='space-y-4'>
				<p className='text-sm text-zinc-600'>This dialog can contain forms, tables, and other content.</p>

				<Button>Create Invoice</Button>
			</div>
		),

		onOpenChange: () => {},
	},
};

export const WithoutDescription: Story = {
	args: {
		isOpen: true,

		title: 'Delete Customer',

		children: (
			<div className='space-y-4'>
				<p className='text-sm text-zinc-600'>This action cannot be undone.</p>

				<Button variant='destructive'>Delete</Button>
			</div>
		),

		onOpenChange: () => {},
	},
};

export const WithoutCloseButton: Story = {
	args: {
		isOpen: true,

		title: 'Verification Required',

		showCloseButton: false,

		children: <p className='text-sm text-zinc-600'>Please verify your email before continuing.</p>,

		onOpenChange: () => {},
	},
};

export const LongContent: Story = {
	args: {
		isOpen: true,

		title: 'Terms and Conditions',

		description: 'Scrollable dialog content example.',

		children: (
			<div className='space-y-4'>
				{Array.from({ length: 12 }).map((_, i) => (
					<p key={i} className='text-sm text-zinc-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quidem.
					</p>
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

		description: 'Testing dialog rendering and button interaction.',

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
