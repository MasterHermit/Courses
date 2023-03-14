import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        changeLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
})

export const { changeLoggedIn } = userSlice.actions;
export const userReducer = userSlice.reducer


