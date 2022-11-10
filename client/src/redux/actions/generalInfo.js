import { createAsyncThunk } from "@reduxjs/toolkit";
import { GeneralInfoService } from "services";

export const fetchGeneralInfo = createAsyncThunk(
  "generalInfo/fetchGeneralInfo",
  async () => {
    try {
      const res = await GeneralInfoService.getAll();
      return res.data;
    } catch (error) {
      //TODO: add error handling
      console.log(error);
    }
  }
);
