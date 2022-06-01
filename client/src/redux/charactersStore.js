import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./reducers/charactersSlice";

export default configureStore({
  reducer:{
    characters: charactersSlice
  }
});