import Contact from "./contact";

import { contactsData } from '../../constants/contacts-data';

import contactListStyle from "./contact-list.module.css";



const ContactList = (props) => {


  let contactsElements = contactsData.map((contact) => <Contact key={contact.id} contact_name={contact.name} />)


  return (
    <div className={contactListStyle.wrapper}>
      <span className={contactListStyle.header}>Список контактов</span>
      <ul className={contactListStyle.contacts}>
        {
          contactsElements
        }
      </ul>
    </div>
  );
};
export default ContactList;
