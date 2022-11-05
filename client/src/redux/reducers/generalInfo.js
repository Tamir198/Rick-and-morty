import { createSlice } from "@reduxjs/toolkit";
import { fetchGeneralInfo } from "../actions";

export const generalInfoSlice = createSlice({
  name: "generalInfo",
  initialState: {
    generalInfo: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGeneralInfo.fulfilled, (state, action) => {
      state.generalInfo = action.payload;
    });
  },
});

export const generalInfo = generalInfoSlice.reducer;
