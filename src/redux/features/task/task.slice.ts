import { createSlice } from "@reduxjs/toolkit";

interface initialstate {
    title: string,
    description: string,
    priority: string,
    status: string
}

const initialState: initialstate[] = []

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer