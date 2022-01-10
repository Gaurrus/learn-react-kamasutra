import headerStyles from "../header/header.module.css";
import webLogo from "./assets/svg/logo.svg";

export const Header = () => (
  <header className={headerStyles.header}>
    <img
      src={webLogo}
      alt="logo"
      className={headerStyles.logo}
    />
    <span>Antisocial web</span>
  </header>
);
