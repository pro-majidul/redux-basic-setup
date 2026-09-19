import { createSlice } from "@reduxjs/toolkit";

interface initialstate {
    name: string,
    description: string,
    priority: string,
    status: string
}

const initialState: initialstate = {
    name: "",
    description: '',
    priority: "medium",
    status: 'pending'
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer