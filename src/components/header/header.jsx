import headerStyles from "../header/header.module.css";
import logo  from "./assets/svg/logo.svg";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <img
        src={logo}
        alt="logo"
        className={headerStyles.logo}
      />
      <span>Antisocial web</span>
    </header>
  );
};

export default Header;
