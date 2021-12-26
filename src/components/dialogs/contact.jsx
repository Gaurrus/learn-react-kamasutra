import { NavLink } from "react-router-dom";

import contactStyle from "./contact.module.css"

const Contact = ({ contact }) => {
  return <li>
    
    <NavLink className={`${contactStyle.contact} ${contactStyle.active}`} to={`/dialogs/${contact.name}`}>
      <>
        {console.log(contact.avatar)}
        {contact}
      </>
    </NavLink>
  </li >;
};
export default Contact;