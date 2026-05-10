import type { Meta, StoryObj } from '@storybook/react';

import { useEffect, useMemo } from 'react';

import { Button, Input } from '@/components/atoms';

import FlexpriceTable from '@/components/molecules/Table';

import { useFilterStore } from '@/store/useFilterStore';

const meta: Meta = {
	title: 'Advanced/DataTableWithFilters',
};

export default meta;

type Story = StoryObj;

const mockData = [
	{
		id: 1,

		customer: 'John Doe',

		status: 'Paid',
	},

	{
		id: 2,

		customer: 'Jane Smith',

		status: 'Pending',
	},

	{
		id: 3,

		customer: 'Alex Brown',

		status: 'Failed',
	},
];

const columns = [
	{
		title: 'Customer',

		render: (row: any) => row.customer,
	},

	{
		title: 'Status',

		render: (row: any) => row.status,
	},
];

const DemoComponent = () => {
	const route = 'customers';

	const { setFilter, getFilters, resetFilters } = useFilterStore();

	const filters = getFilters(route);

	useEffect(() => {
		const activeFilterCount = Object.keys(filters).filter((key) => filters[key]).length;

		const url = new URL(window.location.href);

		url.searchParams.set('f', String(activeFilterCount));

		window.history.replaceState({}, '', url.toString());
	}, [filters]);

	const filteredData = useMemo(() => {
		return mockData.filter((item) => {
			if (!filters.search) return true;

			return item.customer.toLowerCase().includes(String(filters.search).toLowerCase());
		});
	}, [filters]);

	return (
		<div className='p-6 space-y-4'>
			<div className='flex gap-4'>
				<Input
					placeholder='Search customers'
					value={String(filters.search || '')}
					onChange={(value) => setFilter(route, 'search', value)}
				/>

				<Button onClick={() => resetFilters(route)}>Reset Filters</Button>
			</div>

			<FlexpriceTable columns={columns} data={filteredData} />
		</div>
	);
};

export const Default: Story = {
	render: () => <DemoComponent />,
};
