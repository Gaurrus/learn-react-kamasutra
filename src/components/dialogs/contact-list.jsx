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
  ]
    return (
    <div className={contactListStyle.wrapper}>
      <span className={contactListStyle.header}>Список контактов</span>
      <ul className={contactListStyle.contacts}>
        <Contact contact_name={contactsData[0].name} />
        <Contact contact_name={contactsData[1].name} />
        <Contact contact_name={contactsData[2].name} />
        <Contact contact_name={contactsData[3].name} />
      </ul>
    </div>
  );
};
export default ContactList;
