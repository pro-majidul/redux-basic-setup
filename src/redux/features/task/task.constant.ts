import type { TPriority, TTaskType } from "./task.type"

export const taskItems: TTaskType[] = ['pending', 'in-progress', 'done']
export const taskLable: Record<TTaskType, string> = {
    'pending': 'Pending', 'in-progress': 'In Progress', 'done': 'Done'
}

export const taskPriorityItems: TPriority[] = ['low', 'medium', 'high']
export const taskPriorityLabel: Record<TPriority, string> = {
    'low': 'Low', 'medium': 'Medium', 'high': 'High'
}
