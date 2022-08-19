import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "redux/reducers/charactersSlice";

export default configureStore({
  reducer:{
    characters: charactersSlice
  }
});