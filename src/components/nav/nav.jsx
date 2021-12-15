import navStyles from "../nav/nav.module.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
  Link,
} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.list}>
        <li>
          <Link to="/main">Profile</Link>
        </li>
        <li>
          <Link to="/dialogs">Messages</Link>
        </li>
        <li>
          <a href="#!">News</a>
        </li>
        <li>
          <a href="#!">Music</a>
        </li>
      </ul>
      <ul className={navStyles.list}>
        <a href="#!">Settings</a>
      </ul>
    </nav>
  );
};

export default Nav;
