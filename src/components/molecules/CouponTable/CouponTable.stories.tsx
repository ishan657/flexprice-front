import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { MemoryRouter } from 'react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CouponTable from './CouponTable';

import { COUPON_TYPE } from '@/types/common/Coupon';

import { ENTITY_STATUS } from '@/models';

const queryClient = new QueryClient();

/**
 * CouponTable
 *
 * Displays coupons in a reusable table layout
 * with actions, status chips, and navigation.
 */

const meta: Meta<typeof CouponTable> = {
	title: 'Molecules/CouponTable',

	component: CouponTable,

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
		layout: 'fullscreen',
	},

	tags: ['autodocs'],

	argTypes: {
		data: {
			control: 'object',
		},

		onEdit: {
			action: 'edit clicked',
		},
	},
};

export default meta;

type Story = StoryObj<typeof CouponTable>;

const mockCoupons = [
	{
		id: 'coupon_1',

		name: 'SUMMER50',

		type: COUPON_TYPE.PERCENTAGE,

		percentage_off: 50,

		total_redemptions: 20,

		max_redemptions: 100,

		status: ENTITY_STATUS.PUBLISHED,

		updated_at: new Date().toISOString(),
	},

	{
		id: 'coupon_2',

		name: 'FLAT100',

		type: COUPON_TYPE.FIXED,

		amount_off: 100,

		currency: 'usd',

		total_redemptions: 5,

		max_redemptions: 50,

		status: ENTITY_STATUS.DRAFT,

		updated_at: new Date().toISOString(),
	},
];

export const Default: Story = {
	args: {
		data: mockCoupons,
	},
};

export const Empty: Story = {
	args: {
		data: [],
	},
};

export const SingleCoupon: Story = {
	args: {
		data: [mockCoupons[0]],
	},
};

export const InteractionTest: Story = {
	args: {
		data: mockCoupons,
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const couponName = await canvas.findByText(/summer50/i);

		await userEvent.hover(couponName);

		await expect(couponName).toBeInTheDocument();
	},
};
