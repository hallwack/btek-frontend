import { createSlice } from "@reduxjs/toolkit";
import * as profileAction from "../asyncActions/profile";
import * as authAction from "../asyncActions/auth";

const initialState = {
  user: {},
  token: "",
  isLoading: false,
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    handleReset: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(profileAction.getDataUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(profileAction.getDataUser.fulfilled, (state, action) => {
      state.user = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(profileAction.editData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(profileAction.editData.fulfilled, (state, action) => {
      state.user = action.payload.results;
      state.isLoading = false;
    });
    builder.addCase(authAction.getToken.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authAction.getToken.fulfilled, (state, action) => {
      state.token = action.payload.results.token;
      state.isLoading = false;
    });
  },
});

export const { handleReset } = profile.actions;

export default profile.reducer;
