import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router';

import TableArea from './TableArea';

import { expect, userEvent, within } from '@storybook/test';

/**
 * TableArea
 *
 * Generic reusable table area component
 * with optional pagination support.
 */

const meta: Meta<typeof TableArea> = {
	title: 'Organisms/TableArea',

	component: TableArea,

	decorators: [
		(Story) => (
			<MemoryRouter>
				<div className='p-6 bg-white min-h-screen'>
					<Story />
				</div>
			</MemoryRouter>
		),
	],

	parameters: {
		layout: 'fullscreen',
	},

	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableArea>;

const mockColumns = [
	{
		title: 'Name',

		render: (row: any) => row.name,
	},

	{
		title: 'Email',

		render: (row: any) => row.email,
	},
];

const mockData = {
	items: [
		{
			id: '1',

			name: 'John Doe',

			email: 'john@example.com',
		},

		{
			id: '2',

			name: 'Jane Smith',

			email: 'jane@example.com',
		},
	],

	pagination: {
		total: 2,
	},
};

export const Default: Story = {
	args: {
		data: mockData,

		tableConfig: {
			columns: mockColumns,

			showEmptyRow: true,
		},
	},
};

export const WithPagination: Story = {
	args: {
		data: mockData,

		tableConfig: {
			columns: mockColumns,

			showEmptyRow: true,
		},

		paginationConfig: {
			unit: 'Users',

			prefix: 'users',
		},
	},
};
export const InteractionTest: Story = {
	args: {
		data: mockData,

		tableConfig: {
			columns: mockColumns,

			showEmptyRow: true,
		},
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const row = await canvas.findByText(/john doe/i);

		await userEvent.hover(row);

		await expect(row).toBeInTheDocument();
	},
};
export const Empty: Story = {
	args: {
		data: {
			items: [],

			pagination: {
				total: 0,
			},
		},

		tableConfig: {
			columns: mockColumns,

			showEmptyRow: true,
		},
	},
};
