import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardHeader } from './Card';
import Button from '../Button/Button';
import { expect, within } from '@storybook/test';

const meta = {
	title: 'Atoms/Card',
	component: Card,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'notched', 'bordered', 'elevated', 'warning'],
		},

		notchPosition: {
			control: 'select',
			options: ['left', 'right'],
		},

		notchSize: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},

		noPadding: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',

		children: (
			<div className='w-[320px]'>
				<CardHeader title='Monthly Revenue' subtitle='Compared to last month' />

				<p className='text-3xl font-semibold'>$12,450</p>
			</div>
		),
	},
};

export const Elevated: Story = {
	args: {
		variant: 'elevated',

		children: (
			<div className='w-[320px]'>
				<CardHeader title='Total Customers' subtitle='Active subscriptions' />

				<p className='text-3xl font-semibold'>1,284</p>
			</div>
		),
	},
};

export const Bordered: Story = {
	args: {
		variant: 'bordered',

		children: (
			<div className='w-[320px]'>
				<CardHeader title='Invoices' subtitle='Generated this month' />

				<p className='text-3xl font-semibold'>342</p>
			</div>
		),
	},
};

export const Warning: Story = {
	args: {
		variant: 'warning',

		children: (
			<div className='w-[320px]'>
				<CardHeader title='Payment Failed' subtitle='Retry required' />

				<p className='text-sm'>Some invoices could not be processed.</p>
			</div>
		),
	},
};

export const NotchedLeft: Story = {
	args: {
		variant: 'notched',
		notchPosition: 'left',

		children: (
			<div className='w-[320px]'>
				<CardHeader title='Usage Analytics' subtitle='Current billing cycle' />

				<p className='text-3xl font-semibold'>82%</p>
			</div>
		),
	},
};

export const NotchedRight: Story = {
	args: {
		variant: 'notched',
		notchPosition: 'right',

		children: (
			<div className='w-[320px]'>
				<CardHeader title='Credits Remaining' subtitle='Updated 2 mins ago' />

				<p className='text-3xl font-semibold'>240</p>
			</div>
		),
	},
};

export const WithCTA: Story = {
	args: {
		variant: 'elevated',

		children: (
			<div className='w-[320px]'>
				<CardHeader title='Plans' subtitle='Manage pricing plans' cta={<Button size='sm'>Upgrade</Button>} />

				<p className='text-sm text-muted-foreground'>Your current plan is Pro.</p>
			</div>
		),
	},
};

export const NoPadding: Story = {
	args: {
		noPadding: true,

		children: (
			<div className='w-[320px] p-6'>
				<CardHeader title='Custom Layout' subtitle='No internal padding' />

				<p className='text-sm'>This card allows full layout control.</p>
			</div>
		),
	},
};
export const AllVariants: Story = {
	render: function Render() {
		return (
			<div className='grid gap-6 w-[700px]'>
				<Card variant='default'>
					<p className='font-medium'>Default Card</p>
				</Card>

				<Card variant='elevated'>
					<p className='font-medium'>Elevated Card</p>
				</Card>

				<Card variant='bordered'>
					<p className='font-medium'>Bordered Card</p>
				</Card>

				<Card variant='warning'>
					<p className='font-medium'>Warning Card</p>
				</Card>

				<Card variant='notched'>
					<p className='font-medium'>Notched Card</p>
				</Card>
			</div>
		);
	},
};

export const InteractionTest: Story = {
	args: {
		variant: 'elevated',

		children: (
			<div className='w-[320px]'>
				<CardHeader title='Revenue Overview' subtitle='Monthly analytics' />

				<p className='text-3xl font-semibold'>$24,900</p>
			</div>
		),
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const heading = canvas.getByText('Revenue Overview');

		await expect(heading).toBeInTheDocument();
	},
};
