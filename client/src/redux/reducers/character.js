import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters, fetchCharacterById } from "../actions";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: {},
    currentCharacter: {
      id: 0,
      data: undefined,
    },
  },
  reducers: {
    searchCharacterById: (state, action) => {
      state.currentCharacter.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters[action.payload.pageNum] = action.payload.data;
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.currentCharacter.data = action.payload;
      });
  },
});

export const { searchCharacterById } = charactersSlice.actions;

export const characters = charactersSlice.reducer;
