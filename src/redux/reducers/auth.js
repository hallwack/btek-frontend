import { createSlice } from "@reduxjs/toolkit";
import * as authAction from "../asyncActions/auth";

const initialState = {
  token: "",
  forgotPassword: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleReset: (state) => {
      state.token = initialState.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authAction.getToken.fulfilled, (state, action) => {
      state.token = action.payload.results;
    });
    builder.addCase(authAction.forgotPassword.fulfilled, (state, action) => {
      state.forgotPassword = action.payload.results;
    });
  },
});

export const { handleReset } = auth.actions;

export default auth.reducer;
