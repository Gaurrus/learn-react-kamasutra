import Contact from "./contact";

const ContactList = (props) => {
  return (
    <div>
      <span>Список контактов</span>
      <ul>
        <Contact contact_name="Garrus" />
        <Contact contact_name="Зюзя" />
        <Contact contact_name="Пипа" />
        <Contact contact_name="Кузя" />
      </ul>
    </div>
  );
};
export default ContactList;
