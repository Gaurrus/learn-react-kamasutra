import { NavLink } from "react-router-dom";

import contactStyle from "./contact.module.css"

const Contact = (props) => {
  return <li>
    <NavLink className={`${contactStyle.contact} ${contactStyle.active}`} to={`/dialogs/${props.contact_name}`}>
      {props.contact_name}
    </NavLink>
  </li >;
};
export default Contact;