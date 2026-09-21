import { createSlice } from "@reduxjs/toolkit";
import type { TPriority, TTaskType } from "./task.type";

export interface initialstate {
    title: string,
    description: string,
    priority: TPriority,
    status: TTaskType
}

export type TTask = initialstate[]

const initialState: TTask = []

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