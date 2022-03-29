import { Outlet, NavLink } from "react-router-dom";

import '../src/index.css'

function App() {
  return (
    <div>
      <button>Rick and mory app</button>
      <nav className="nav__item">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/allcharacters">All characters</NavLink>
        <NavLink to="/singleChatacter">Single character</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App;