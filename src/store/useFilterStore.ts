import { create } from 'zustand';

import { persist, createJSONStorage } from 'zustand/middleware';

type FilterValue = string | number | boolean | null | string[];

interface FilterState {
	filters: Record<string, Record<string, FilterValue>>;

	setFilter: (route: string, key: string, value: FilterValue) => void;

	getFilters: (route: string) => Record<string, FilterValue>;

	resetFilters: (route: string) => void;
}

export const useFilterStore = create<FilterState>()(
	persist(
		(set, get) => ({
			filters: {},

			setFilter: (route, key, value) => {
				set((state) => ({
					filters: {
						...state.filters,

						[route]: {
							...state.filters[route],

							[key]: value,
						},
					},
				}));
			},

			getFilters: (route) => {
				return get().filters[route] || {};
			},

			resetFilters: (route) => {
				set((state) => ({
					filters: {
						...state.filters,

						[route]: {},
					},
				}));
			},
		}),

		{
			name: 'flexprice-filters',

			storage: createJSONStorage(() => sessionStorage),
		},
	),
);
