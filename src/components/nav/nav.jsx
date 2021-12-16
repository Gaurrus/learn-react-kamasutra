import navStyles from "../nav/nav.module.css";
import {
  NavLink
} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.list}>
        <li>
          <NavLink to="/main" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>News</NavLink>
        </li>
        <li>
          <NavLink to="/music" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
