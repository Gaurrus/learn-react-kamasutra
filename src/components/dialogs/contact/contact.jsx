import { NavLink } from "react-router-dom";

import syles from "./contact.module.css"

export const Contact = ({ contact, avatar }) => {
  return <li>

    <NavLink className={`${syles.contact} ${syles.active}`} to={`/dialogs/${contact.name}`}>
      <>
        <img className={syles.avatar}  src={avatar} alt="" />
        {contact}
      </>
    </NavLink>
  </li >;
};
