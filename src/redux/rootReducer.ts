import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/task.slice"
import filtersReducer from "./features/filters/filters.slice"
export const rootReducer = combineReducers({
    counter: counterReducer,
    task: taskReducer,
    filters: filtersReducer
})