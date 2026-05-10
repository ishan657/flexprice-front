import type { Meta, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MemoryRouter } from 'react-router';

import GroupsTable from './GroupsTable';

import { ENTITY_STATUS } from '@/models';

const queryClient = new QueryClient();

/**
 * GroupsTable
 *
 * Displays groups in a reusable table
 * with actions and status handling.
 */

const meta: Meta<typeof GroupsTable> = {
	title: 'Molecules/GroupsTable',

	component: GroupsTable,

	decorators: [
		(Story) => (
			<QueryClientProvider client={queryClient}>
				<MemoryRouter>
					<div className='p-6 bg-white min-h-screen'>
						<Story />
					</div>
				</MemoryRouter>
			</QueryClientProvider>
		),
	],

	parameters: {
		layout: 'fullscreen',
	},

	tags: ['autodocs'],

	argTypes: {
		onEdit: {
			action: 'edit clicked',
		},
	},
};

export default meta;

type Story = StoryObj<typeof GroupsTable>;

const mockGroups = [
	{
		id: 'group_1',

		name: 'Enterprise Customers',

		lookup_key: 'enterprise_customers',

		entity_type: 'customer',

		status: ENTITY_STATUS.PUBLISHED,

		updated_at: new Date().toISOString(),
	},

	{
		id: 'group_2',

		name: 'Beta Users',

		lookup_key: 'beta_users',

		entity_type: 'user',

		status: ENTITY_STATUS.DRAFT,

		updated_at: new Date().toISOString(),
	},
];

export const Default: Story = {
	args: {
		data: mockGroups,

		onEdit: () => {},
	},
};

export const Empty: Story = {
	args: {
		data: [],

		onEdit: () => {},
	},
};

export const SingleGroup: Story = {
	args: {
		data: [mockGroups[0]],

		onEdit: () => {},
	},
};

export const InteractionTest: Story = {
	args: {
		data: mockGroups,

		onEdit: () => {},
	},

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const groupName = await canvas.findByText(/enterprise customers/i);

		await userEvent.hover(groupName);

		await expect(groupName).toBeInTheDocument();
	},
};
