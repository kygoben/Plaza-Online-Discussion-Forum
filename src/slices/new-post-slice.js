import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const newPostSlice = createSlice({
    name: 'newPost',
    initialState,
    reducers: {
        toggleNewPost: (state, action) => {
            return !state;
        }
    }
});

export const { toggleNewPost } = newPostSlice.actions;

export default newPostSlice.reducer;
