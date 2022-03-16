import SideNav from "./sideNavigation/SideNav";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <button>Rick and mory app</button>
      <SideNav></SideNav>
      <nav>
        <Link to="/allcharacters">All characters</Link> |{" "}
        <Link to="/singleChatacter">Single character</Link>
      </nav>

    </div>
  );
}

export default App;