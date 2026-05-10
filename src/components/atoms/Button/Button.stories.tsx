import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Plus, Trash2 } from 'lucide-react';
import { userEvent, within, expect } from '@storybook/test';

const meta = {
	title: 'Atoms/Button',
	component: Button,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'secondary', 'ghost', 'destructive', 'outline', 'link'],
		},

		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'xs'],
		},

		isLoading: {
			control: 'boolean',
		},

		disabled: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Create Tax Rate',
		variant: 'default',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Cancel',
		variant: 'secondary',
	},
};

export const Ghost: Story = {
	args: {
		children: 'Learn More',
		variant: 'ghost',
	},
};

export const Danger: Story = {
	args: {
		children: 'Delete Invoice',
		variant: 'destructive',
	},
};

export const Loading: Story = {
	args: {
		children: 'Saving...',
		isLoading: true,
	},
};

export const Disabled: Story = {
	args: {
		children: 'Disabled',
		disabled: true,
	},
};

export const Small: Story = {
	args: {
		children: 'Small Button',
		size: 'sm',
	},
};

export const Large: Story = {
	args: {
		children: 'Large Button',
		size: 'lg',
	},
};

export const WithIcons: Story = {
	args: {
		children: 'Add Customer',
		prefixIcon: <Plus />,
		suffixIcon: <Trash2 />,
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className='flex flex-wrap gap-4'>
			<Button variant='default'>Primary</Button>

			<Button variant='secondary'>Secondary</Button>

			<Button variant='ghost'>Ghost</Button>

			<Button variant='destructive'>Danger</Button>

			<Button variant='outline'>Outline</Button>

			<Button variant='link'>Link</Button>
		</div>
	),
};

//interaction test
export const InteractionTest: Story = {
	args: {
		children: 'Click Me',
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const button = canvas.getByRole('button');

		await userEvent.click(button);

		await expect(button).toBeInTheDocument();
	},
};
