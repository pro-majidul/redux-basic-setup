import type { TPriority, TTask } from "./task.type"

export const taskItems: TTask[] = ['pending', 'in-progress', 'done']
export const taskLable: Record<TTask, string> = {
    'pending': 'Pending', 'in-progress': 'In Progress', 'done': 'Done'
}

export const taskPriorityItems: TPriority[] = ['low', 'medium', 'high']
export const taskPriorityLabel: Record<TPriority, string> = {
    'low': 'Low', 'medium': 'Medium', 'high': 'High'
}
