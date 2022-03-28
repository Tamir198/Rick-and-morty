import SideNav from "./sideNavigation/SideNav";
import { Outlet, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <button>Rick and mory app</button>
      <SideNav></SideNav>
      <nav style={{ display: 'flex', gap: '.5rem' }}>
        <NavLink to="/allcharacters">All characters</NavLink> 
        <NavLink to="/singleChatacter">Single character</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default App;