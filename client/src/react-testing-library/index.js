import { render as appRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import charactersStore from "redux/store";

export * from "@testing-library/react";

export const render = (children) => {
  appRender(
    <BrowserRouter>
      <Provider store={charactersStore}>{children}</Provider>
    </BrowserRouter>
  );
};
