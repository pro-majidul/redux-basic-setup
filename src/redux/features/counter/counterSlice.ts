import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    value: number;
}

const initialState = {
    value: 0,
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {}

});