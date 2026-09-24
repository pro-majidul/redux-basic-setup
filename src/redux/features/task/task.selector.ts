import type { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const tasklist = (state: RootState) => state.task;
export const totalTask = (state: RootState) => state.task.length;
export const selectTaskById = (state: RootState, id: string) => state.task.find(item => item.id === id)

export const selectTaskStatus = createSelector([tasklist], (tasks) => {

    const stats = { byStatus: { pending: 0, "in-progress": 0, done: 0 }, total: 0, byPriority: { low: 0, medium: 0, high: 0 } };

    for (const task of tasks) {
        stats.byStatus[task.status] += 1;
        stats.byPriority[task.priority] += 1
    }

    stats.total = tasks.length

    return stats
})