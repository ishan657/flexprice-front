import type { Meta, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import DropdownMenu from './DropdownMenu';

/**
 * DropdownMenu
 *
 * Reusable dropdown menu component
 * supporting grouped and disabled options.
 */

const meta: Meta<typeof DropdownMenu> = {
	title: 'Molecules/DropdownMenu',

	component: DropdownMenu,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {
		align: {
			control: 'radio',

			options: ['start', 'end'],
		},

		dir: {
			control: 'radio',

			options: ['ltr', 'rtl'],
		},

		isOpen: {
			control: 'boolean',
		},
	},
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
	args: {
		options: [
			{
				label: 'Edit',
			},

			{
				label: 'Delete',
			},
		],
	},
};

export const DisabledOption: Story = {
	args: {
		options: [
			{
				label: 'Edit',
			},

			{
				label: 'Delete',
				disabled: true,
			},
		],
	},
};

export const GroupedOptions: Story = {
	args: {
		options: [
			{
				label: 'Profile',
				group: 'Account',
			},

			{
				label: 'Settings',
				group: 'Account',
			},

			{
				label: 'Delete',
				group: 'Danger',
			},
		],
	},
};

export const InteractionTest: Story = {
	args: {
		options: [
			{
				label: 'Edit',
			},

			{
				label: 'Delete',
			},
		],
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const trigger = await canvas.findByRole('button');

		await userEvent.click(trigger);

		const option = await within(document.body).findByText(/edit/i);

		await expect(option).toBeInTheDocument();
	},
};
