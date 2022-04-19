import { createSlice } from "@reduxjs/toolkit";
import { initMessages } from "../dummy-data";

const initialState = initMessages;

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: (state, action) => {
            state.push({
                post: action.payload,
                likes: 0,
                dislikes: 0,
                id: globalThis.crypto.randomUUID(),
                replies: []
            });
        },
        createReply: (state, action) => {
            state.find(post => post.id === action.payload.id).replies.push({
                post: action.payload.reply,
                likes: 0,
                dislikes: 0,
                id: globalThis.crypto.randomUUID()
            })
        }
    }
});

export const { createPost, createReply } = postsSlice.actions;

export default postsSlice.reducer;
