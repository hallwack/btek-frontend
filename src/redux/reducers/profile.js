import { createSlice } from "@reduxjs/toolkit";
import * as profileAction from "../asyncActions/profile";

const initialState = {
  user: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(profileAction.getDataUser.fulfilled, (state, action) => {
      state.user = action.payload.results;
    });
  },
});

/* export const {} = profile.actions; */

export default profile;
