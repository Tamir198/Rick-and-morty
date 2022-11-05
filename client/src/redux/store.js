import { configureStore } from "@reduxjs/toolkit";
import * as reducers from "redux/reducers";

export default configureStore({
  reducer: {
    ...reducers,
  },
});
