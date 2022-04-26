import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

export const displayedMessageSlice = createSlice({
    name: 'displayedMessage',
    initialState,
    reducers: {
        setDisplayedMessage: (state, action) => {
            return action.payload;
        }
    }
});

export const { setDisplayedMessage } = displayedMessageSlice.actions;
export default displayedMessageSlice.reducer;
