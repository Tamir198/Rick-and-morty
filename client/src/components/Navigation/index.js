import { NavLink } from "react-router-dom";
import { URLS } from "constants/url";

export const Navigation = () => (
  <nav className="nav__item">
    <NavLink to={URLS.HOME}>Home</NavLink>
    <NavLink to={URLS.ALL_CHARACTERS}>All Characters</NavLink>
    <NavLink to={URLS.SINGLE_CHARACTER}>Single Character</NavLink>
  </nav>
);
