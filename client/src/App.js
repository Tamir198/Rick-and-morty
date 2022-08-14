import { Outlet, NavLink } from "react-router-dom";

import HomeRout from './routes/home'
import AllcharactersRout from './routes/allcharacters'
import SingleCharacterRout from './routes/singleCharacter'

import '../src/index.css'

function App() {
  return (
    <div>
      <nav className="nav__item">
        <NavLink to="/home">{HomeRout}</NavLink>
        <NavLink to="/allcharacters">{AllcharactersRout}</NavLink>
        <NavLink to="/singleChatacter">{SingleCharacterRout}</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App;