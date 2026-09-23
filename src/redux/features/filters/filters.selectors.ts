import type { RootState } from "@/redux/store";

export const SelectFilters = (state: RootState) => state.filters
export const SelectPriorityFilter = (state: RootState) => state.filters.priority
export const SelectQueryFilter = (state: RootState) => state.filters.query
export const SelectSortMode = (state: RootState) => state.filters.sort
export const SelectStatusFilter = (state: RootState) => state.filters.status