import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOutUser, refreshUser } from "./api";

const authInitialState = {
    userData: null,
    token: null,
    authenticated: false,
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, handlePending)
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authenticated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registerUser.rejected, handleRejected)
            .addCase(loginUser.pending, handlePending)
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authenticated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, handleRejected)
            .addCase(logOutUser.pending, handlePending)
            .addCase(logOutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authenticated = false;
                state.userData = null;
                state.token = null;
            })
            .addCase(logOutUser.rejected, handleRejected)
            .addCase(refreshUser.pending, handlePending)
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authenticated = true;
                state.userData = action.payload;
            })
            .addCase(refreshUser.rejected, handleRejected);
    }
});


export default authSlice.reducer;


