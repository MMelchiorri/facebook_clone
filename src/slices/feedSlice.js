import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        value: {
            stories: [],
            posts: []
        }
    },
    reducers: {
        addPost: (state, action) => {
            console.log(state, action)
        }

    }
}) 