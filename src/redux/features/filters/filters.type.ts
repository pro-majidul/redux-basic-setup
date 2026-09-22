import type { TPriority, TTaskType } from "../task"

export type TStatusType = "all" | TTaskType
export type TPriorityType = "all" | TPriority
export type TSorttype = "newest" | 'oldest'

export interface Iinitialstate {
    query: string,
    priority: TPriorityType,
    status: TStatusType,
    sort: TSorttype
}