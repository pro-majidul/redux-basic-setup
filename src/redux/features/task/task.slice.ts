import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { TPriority, TTaskType } from "./task.type";

export interface ITask {
    id: string,
    title: string,
    description: string,
    priority: TPriority,
    status: TTaskType,
    createdAt: number,
    updatedAt: number
}

export type TTask = ITask[]

const initialState: TTask = []

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: {
            prepare: (input: Pick<ITask, "title" | "description" | "priority" | "status">) => {
                const task = {
                    id: nanoid(),
                    title: input.title.trim(),
                    description: input.description.trim(),
                    priority: input.priority,
                    status: input.status,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                }
                return { payload: task }

            },
            reducer: (state, action: PayloadAction<ITask>) => {
                state.push(action.payload)
            }
        }
    }
})

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer