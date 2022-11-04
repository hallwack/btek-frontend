import { createSlice } from "@reduxjs/toolkit";
import * as profileAction from "../asyncActions/profile";
import * as authAction from "../asyncActions/auth";

const initialState = {
  user: {},
  token: "",
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    handleReset: (state) => {
      state.user = initialState;
      state.token = initialState.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(profileAction.getDataUser.fulfilled, (state, action) => {
      state.user = action.payload.results;
    });
    builder.addCase(profileAction.editData.fulfilled, (state, action) => {
      state.user = action.payload.results;
    });
    builder.addCase(authAction.getToken.fulfilled, (state, action) => {
      state.token = action.payload.results.token;
    });
  },
});

export const { handleReset } = profile.actions;

export default profile.reducer;
