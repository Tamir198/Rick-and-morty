import { Outlet, BrowserRouter } from "react-router-dom";
import { Navigation } from "components";
import { AppRouter } from "./AppRouter";
import { Provider } from "react-redux";
import charactersStore from "redux/charactersStore";

const App = () => (
  <Provider store={charactersStore}>
    <BrowserRouter>
      <Outlet />
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  </Provider>
);

export default App;
