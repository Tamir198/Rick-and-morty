import { createAsyncThunk } from "@reduxjs/toolkit";
import { CharacterService } from "services";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (pageNum) => {
    try {
      const res = await CharacterService.getAll(pageNum);
      return { pageNum, data: res.data.characters };
    } catch (error) {
      //TODO: add error handling
      console.log(error);
    }
  }
);

export const fetchCharacterById = createAsyncThunk(
  "characters/fetchCharacterById",

  async (id) => {
    try {
      const res = await CharacterService.getById(id);
      return res.data;
    } catch (error) {
      //TODO: add error handling
      console.log(error);
    }
  }
);
