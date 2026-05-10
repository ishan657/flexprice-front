import { queryOptions } from '@tanstack/react-query';

export const QUERY_CONFIG_PRESETS = {
	REALTIME: {
		staleTime: 0,

		gcTime: 1000 * 60 * 1,
	},

	DEFAULT: {
		staleTime: 1000 * 60 * 5,

		gcTime: 1000 * 60 * 10,
	},

	STATIC: {
		staleTime: 1000 * 60 * 30,

		gcTime: 1000 * 60 * 60,
	},
};

interface QueryConfigOverrides {
	staleTime?: number;

	gcTime?: number;
}

export const createQueryConfig = (overrides?: QueryConfigOverrides) => {
	return {
		...QUERY_CONFIG_PRESETS.DEFAULT,

		...overrides,
	};
};

export const withQueryConfig = <T>(
	queryKey: unknown[],

	queryFn: () => Promise<T>,

	overrides?: QueryConfigOverrides,
) => {
	return queryOptions({
		queryKey,

		queryFn,

		...createQueryConfig(overrides),
	});
};
