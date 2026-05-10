import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import ApiDocs from './ApiDocs';

const meta: Meta<typeof ApiDocs> = {
	title: 'Molecules/ApiDocs',

	component: ApiDocs,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ApiDocs>;

export const Default: Story = {};

export const InteractionTest: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const button = canvas.getByRole('button');

		await userEvent.click(button);

		await expect(button).toBeInTheDocument();
	},
};
