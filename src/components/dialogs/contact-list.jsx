import Contact from "./contact";

import contactListStyle from "./contact-list.module.css";



const ContactList = (props) => {
  
  let contactsElements = props.state.dialogsPage.contactsData.map((contact) => <Contact key={contact.id} contact={contact.name} />)


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
