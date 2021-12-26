import { Contact } from './../contact';

import contactListStyle from "./contact-list.module.css";

export const ContactList = (props) => {

  let contactsElements = props.state.dialogsPage.contactsData.map((contact) => <Contact key={contact.id} contact={contact.name} avatar={contact.avatar} />)


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

