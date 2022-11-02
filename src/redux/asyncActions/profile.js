import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getDataUser = createAsyncThunk(
  "profile/getDataUser",
  async ({ token }) => {
    const { data } = await http(token).get("/profile");
    return data;
  }
);

export const editData = createAsyncThunk(
  "profile/editData",
  async ({ token, data }) => {
    const { data: responseData } = await http(token).put("/profile", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return responseData;
  }
);
