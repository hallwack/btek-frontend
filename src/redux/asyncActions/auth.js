import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getToken = createAsyncThunk("auth/getToken", async ({ form }) => {
  const { data } = await http().post("/auth/login", form.toString());
  return data;
});

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ form }) => {
    const { data } = await http().post(
      "/auth/forgot-password",
      form.toString()
    );
    return data;
  }
);
