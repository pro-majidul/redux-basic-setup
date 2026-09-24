import type { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { SelectFilters } from "../filters";

export const SelectAllTaskList = (state: RootState) => state.task;
export const totalTask = (state: RootState) => state.task.length;
export const selectTaskById = (state: RootState, id: string) => state.task.find(item => item.id === id)

export const selectTaskStatus = createSelector([SelectAllTaskList], (tasks) => {

    const stats = { byStatus: { pending: 0, "in-progress": 0, done: 0 }, total: 0, byPriority: { low: 0, medium: 0, high: 0 } };

    for (const task of tasks) {
        stats.byStatus[task.status] += 1;
        stats.byPriority[task.priority] += 1
    }

    stats.total = tasks.length

    return stats
})

export const selectTaskFilter = createSelector([SelectAllTaskList, SelectFilters], (tasks, filters) => {

    const { priority, query, sort, status } = filters

    const filtered = tasks.filter(task => {

        if (priority !== "all" && task.priority !== priority) {
            return false
        }

        if (status !== "all" && task.status !== status) {
            return false
        }
        if (query) {
            const SearchTerm = query.trim().toLocaleLowerCase()
            const text = `${task.title} ${task.description}`

            if (!text.includes(SearchTerm)) {
                return false
            }
        }
        return true
    })

    const sorted = [...filtered]
    switch (sort) {
        case "newest":
            sorted.sort((a, b) => b.createdAt - a.createdAt);
            break;

        case "oldest":
            sorted.sort((a, b) => a.createdAt - b.createdAt);
            break;

        default:
            break;
    }

    return sorted
})