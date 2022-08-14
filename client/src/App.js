import { Outlet, NavLink } from "react-router-dom";

import HomeRout from './routes/Home'
import AllcharactersRout from './routes/Allcharacters'
import SingleCharacterRout from './routes/SingleCharacter'
import { URLS } from "constants/url";

import '../src/index.css'

function App() {
  return (
    <div>
      <nav className="nav__item">
        <NavLink to={URLS.HOME}>{HomeRout}</NavLink>
        <NavLink to={URLS.ALL_CHARACTERS}>{AllcharactersRout}</NavLink>
        <NavLink to={URLS.SINGLE_CHARACTER}>{SingleCharacterRout}</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App;