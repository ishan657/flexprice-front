import type { Meta, StoryObj } from '@storybook/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { QUERY_CONFIG_PRESETS, createQueryConfig } from '@/utils/queryConfig';

const meta: Meta = {
	title: 'Advanced/QueryCaching',
};

export default meta;

type Story = StoryObj;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: QUERY_CONFIG_PRESETS.DEFAULT,
	},
});

const Demo = () => {
	const realtimeConfig = createQueryConfig({
		staleTime: 0,
	});

	const staticConfig = QUERY_CONFIG_PRESETS.STATIC;

	return (
		<div className='p-6 space-y-6 text-sm'>
			<div className='border p-4 rounded'>
				<h3 className='font-semibold'>Global Default Config</h3>

				<pre>{JSON.stringify(QUERY_CONFIG_PRESETS.DEFAULT, null, 2)}</pre>
			</div>

			<div className='border p-4 rounded'>
				<h3 className='font-semibold'>Realtime Override</h3>

				<pre>{JSON.stringify(realtimeConfig, null, 2)}</pre>
			</div>

			<div className='border p-4 rounded'>
				<h3 className='font-semibold'>Static Preset</h3>

				<pre>{JSON.stringify(staticConfig, null, 2)}</pre>
			</div>
		</div>
	);
};

export const Default: Story = {
	render: () => (
		<QueryClientProvider client={queryClient}>
			<Demo />
		</QueryClientProvider>
	),
};
