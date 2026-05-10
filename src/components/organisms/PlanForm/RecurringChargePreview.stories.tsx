import type { Meta, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import RecurringChargePreview from './RecurringChargePreview';

import { PRICE_UNIT_TYPE } from '@/models/Price';

/**
 * RecurringChargePreview
 *
 * Preview card displaying recurring
 * pricing charge information with:
 * - billing period
 * - pricing amount
 * - currency display
 * - edit/delete actions
 */

const meta: Meta<typeof RecurringChargePreview> = {
	title: 'Organisms/RecurringChargePreview',

	component: RecurringChargePreview,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {
		disabled: {
			control: 'boolean',
		},

		onEditClicked: {
			action: 'edit clicked',
		},

		onDeleteClicked: {
			action: 'delete clicked',
		},
	},
};

export default meta;

type Story = StoryObj<typeof RecurringChargePreview>;

const mockCharge = {
	id: 'price_1',

	display_name: 'Pro Monthly',

	amount: '29',

	currency: 'usd',

	billing_period: 'monthly',

	price_unit_type: PRICE_UNIT_TYPE.FIAT,
};

export const Default: Story = {
	args: {
		charge: mockCharge,
	},
};

export const Disabled: Story = {
	args: {
		charge: mockCharge,

		disabled: true,
	},
};

export const CustomPriceUnit: Story = {
	args: {
		charge: {
			id: 'price_2',

			display_name: 'Credits Plan',

			amount: '100',

			currency: 'usd',

			billing_period: 'monthly',

			price_unit_type: PRICE_UNIT_TYPE.CUSTOM,

			price_unit_config: {
				price_unit: 'Credits',

				amount: '100',
			},
		},
	},
};

export const InteractionTest: Story = {
	args: {
		charge: mockCharge,
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const buttons = await canvas.findAllByRole('button');

		await userEvent.hover(buttons[0]);

		await expect(buttons[0]).toBeInTheDocument();
	},
};
