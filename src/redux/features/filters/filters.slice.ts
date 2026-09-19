import { createSlice } from "@reduxjs/toolkit";

interface initialstate {

    priority: string
}

const initialState: initialstate = {

    priority: " ",

}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {}
})

export default filtersSlice.reducer