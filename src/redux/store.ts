import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/task.slice"
import filtersReducer from "./features/filters/filters.slice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
        filters: filtersReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store