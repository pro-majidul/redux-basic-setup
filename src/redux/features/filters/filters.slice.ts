import { createSlice } from "@reduxjs/toolkit";
import type { Iinitialstate } from "./filters.type";


const initialState: Iinitialstate = {
    query: '',
    priority: "all",
    status: "all",
    sort: "newest"

}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        chanageQueryFilter: (state, action) => {
            state.query = action.payload
        },
        changePriorityFilter: (state, action) => {
            state.priority = action.payload
        },
        chanageStatusFilter: (state, action) => {
            state.status = action.payload
        },
        changeSortFilter: (state, action) => {
            state.sort = action.payload
        },
    }
})

export const { chanageQueryFilter, chanageStatusFilter, changePriorityFilter, changeSortFilter } = filtersSlice.actions

export default filtersSlice.reducer