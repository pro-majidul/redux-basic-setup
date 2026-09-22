import type { RootState } from "@/redux/store";

export const tasklist = (state: RootState) => state.task;
export const totalTask = (state: RootState) => state.task.length;
export const selectTaskById = (state: RootState, id: string) => state.task.find(item => item.id === id) 