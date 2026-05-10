import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { MemoryRouter } from 'react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CouponDrawer from './CouponDrawer';

import { COUPON_TYPE, COUPON_CADENCE } from '@/types/common/Coupon';

const queryClient = new QueryClient();

/**
 * CouponDrawer
 *
 * A reusable drawer component used to create and edit coupons.
 *
 * Features:
 * - Create and edit coupon flows
 * - Fixed and percentage discount support
 * - Validation handling
 * - Conditional form rendering
 * - Date selection
 * - Metadata support
 * - Loading and disabled states
 */

const meta: Meta<typeof CouponDrawer> = {
	title: 'Molecules/CouponDrawer',

	component: CouponDrawer,

	decorators: [
		(Story) => (
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<Story />
				</MemoryRouter>
			</QueryClientProvider>
		),
	],

	parameters: {
		layout: 'centered',

		docs: {
			description: {
				component: 'Drawer component for creating and editing coupons with validation and dynamic form states.',
			},
		},
	},

	tags: ['autodocs'],

	argTypes: {
		open: {
			control: 'boolean',
		},

		onOpenChange: {
			action: 'open changed',
		},

		data: {
			control: 'object',
		},
	},
};

export default meta;

type Story = StoryObj<typeof CouponDrawer>;

export const Default: Story = {
	args: {
		open: true,
	},
};

export const EditCoupon: Story = {
	args: {
		open: true,

		data: {
			id: 'coupon_123',

			name: 'SUMMER50',

			type: COUPON_TYPE.PERCENTAGE,

			cadence: COUPON_CADENCE.ONCE,

			percentage_off: 50,
		},
	},
};

export const FixedAmountCoupon: Story = {
	args: {
		open: true,

		data: {
			name: 'FLAT100',

			type: COUPON_TYPE.FIXED,

			cadence: COUPON_CADENCE.FOREVER,

			amount_off: 100,

			currency: 'usd',
		},
	},
};

export const RepeatedCadence: Story = {
	args: {
		open: true,

		data: {
			name: 'REPEAT20',

			type: COUPON_TYPE.PERCENTAGE,

			cadence: COUPON_CADENCE.REPEATED,

			percentage_off: 20,

			duration_in_periods: 3,
		},
	},
};

export const Closed: Story = {
	args: {
		open: false,
	},
};

export const InteractionTest: Story = {
	args: {
		open: true,
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = await canvas.findByPlaceholderText(/enter a name for the coupon/i);

		await userEvent.clear(input);

		await userEvent.type(input, 'TESTCOUPON');

		await expect(input).toHaveValue('TESTCOUPON');
	},
};
