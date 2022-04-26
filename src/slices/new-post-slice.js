import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const newPostSlice = createSlice({
    name: 'newPost',
    initialState,
    reducers: {
        toggleNewPost: (state, action) => {
            return !state;
        },
        setNewPost: (state, action) => action.payload
    }
});

export const { toggleNewPost, setNewPost } = newPostSlice.actions;

export default newPostSlice.reducer;
