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
            state.value.posts.push(action.payload)
        },
        setPosts: (state, action) => {

            state.value = { ...state.value, ...action.payload }

        },
        deletePosts: (state, action) => {

        }
    }
})

