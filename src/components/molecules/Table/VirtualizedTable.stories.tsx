import type { Meta, StoryObj } from '@storybook/react';

import FlexpriceTable from './Table';

const meta: Meta<typeof FlexpriceTable> = {
	title: 'Advanced/VirtualizedTable',

	component: FlexpriceTable,

	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof FlexpriceTable>;

const mockData = Array.from({ length: 10000 }, (_, i) => ({
	id: i,

	customer: `Customer ${i}`,

	email: `customer${i}@example.com`,
}));

const columns = [
	{
		title: 'Customer',

		render: (row: any) => row.customer,
	},

	{
		title: 'Email',

		render: (row: any) => row.email,
	},
];

export const Default: Story = {
	args: {
		data: mockData,

		columns,

		virtualized: true,

		estimatedRowHeight: 56,
	},
};
