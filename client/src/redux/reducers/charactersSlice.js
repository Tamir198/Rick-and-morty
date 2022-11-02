import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "Characters",
  initialState: [],
  reducers: {
    addCharactersPage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCharactersPage } = charactersSlice.actions;

export default charactersSlice.reducer;
