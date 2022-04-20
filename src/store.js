import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './slices/posts-slice';
import newPostReducer from './slices/new-post-slice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        newPostDisplay: newPostReducer
    }
});
