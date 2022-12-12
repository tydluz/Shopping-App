import { createSlice } from "@reduxjs/toolkit";

const isLoggeddIn = false;
const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggeddIn },
    reducers: {
        login(state) {
            state.isLoggeddIn = true;
        },
        logout(state) {
            state.isLoggeddIn = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;
