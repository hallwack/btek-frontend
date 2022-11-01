import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../helpers/http";

export const getDataUser = createAsyncThunk("profile/getDataUser", async ({token}) => {
  const { data } = await http(token).get("/profile");
  return data;
});

export const editData = createAsyncThunk("profile/editData", async ({token}) => {

})
