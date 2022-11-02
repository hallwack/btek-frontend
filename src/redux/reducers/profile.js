import { createSlice } from "@reduxjs/toolkit";
import * as profileAction from "../asyncActions/profile";

const initialState = {
  user: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    handleReset: (state) => {
      state.user = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(profileAction.getDataUser.fulfilled, (state, action) => {
      state.user = action.payload.results;
    });
    builder.addCase(profileAction.editData.fulfilled, (state, action) => {
      state.user = action.payload.results;
    });
  },
});

export const { handleReset } = profile.actions;

export default profile.reducer;
