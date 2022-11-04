import { createSlice } from "@reduxjs/toolkit";
import * as authAction from "../asyncActions/auth";

const initialState = {
  token: "",
  forgotPassword: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authAction.getToken.fulfilled, (state, action) => {
      state.token = action.payload.results;
    });
  },
});

/* export const {} = auth.actions; */

export default auth.reducer;
