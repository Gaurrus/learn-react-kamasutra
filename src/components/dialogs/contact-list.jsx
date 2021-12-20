import Contact from "./contact";
import contactListStyle from "./contact-list.module.css";



const ContactList = (props) => {
  let contactsData = [{
    name: 'Garrus',
  },
  {
    name: 'Зюзя',
  },
  {
    name: 'Пипа',
  },
  {
    name: 'Кузя',
  },
  {
    name: 'Федя',
  },
  ]

  let contactsElements = contactsData.map((contact) => <Contact contact_name={contact.name} />)


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
