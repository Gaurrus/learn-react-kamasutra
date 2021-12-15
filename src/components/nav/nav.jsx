import navStyles from '../nav/nav.module.css'

const Nav = () => {
  return <nav className={navStyles.nav}>
    <ul className={navStyles.list}>
      <li>
        <a href="#!">Profile</a>
      </li>
      <li>
        <a href="#!">Messages</a>
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
}

export default Nav;