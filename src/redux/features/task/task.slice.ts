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
        },
        updateTask: (state, action: PayloadAction<{ id: string, change: Pick<ITask, "title" | "description" | "priority" | "status"> }>) => {
            const { id, change } = action.payload;
            const task = state.find(item => item.id === id)
            if (!task) return
            Object.assign(task, change, { updatedAt: Date.now })
        },
        updateStatus: (state, action: PayloadAction<{ id: string, status: TTaskType }>) => {
            const { id, status } = action.payload;
            const task = state.find(item => item.id === id)
            if (!task) return;
            task.status = status;
            task.updatedAt = Date.now()

        },
        deleteTask: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload;
            const taskIndex = state.findIndex(item => item.id === id);
            if (taskIndex === -1) return;
            state.splice(taskIndex, 1);

        }
    }
})

export const { addTask, updateTask, updateStatus, deleteTask } = taskSlice.actions;

export default taskSlice.reducer