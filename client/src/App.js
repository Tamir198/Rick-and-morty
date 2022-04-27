import { Outlet, NavLink } from "react-router-dom";

import HomeRout from './routes/Home'
import AllcharactersRout from './routes/Allcharacters'
import SingleCharacterRout from './routes/SingleCharacter'

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