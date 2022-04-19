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
                votes: 0,
                id: globalThis.crypto.randomUUID(),
                replies: []
            });
        },
        createReply: (state, action) => {
            state.find(post => post.id === action.payload.id).replies.push({
                post: action.payload.reply,
                votes: 0,
                id: globalThis.crypto.randomUUID()
            });
        },
        updateReplyVotes: (state, action) => {
            state
                .find(post => post.id === action.payload.postId).replies
                .find(reply => reply.id === action.payload.replyId).votes += action.payload.value;
        },
        updatePostVotes: (state, action) => {
            state.find(post => post.id === action.payload.postId).votes += action.payload.value;
        }
    }
});

export const { createPost, createReply, updateReplyVotes, updatePostVotes } = postsSlice.actions;

export default postsSlice.reducer;
