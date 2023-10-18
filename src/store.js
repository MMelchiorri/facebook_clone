import { configureStore } from '@reduxjs/toolkit'
import { feedSlice } from '../src/slices/feedSlice'

export const { addPost, setPosts } = feedSlice.actions

export const store = configureStore({
    reducer: {
        feed: feedSlice.reducer
    }
}) 