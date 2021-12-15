import ContactList from "./contact-list";
import dialogsStyles from "./dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={dialogsStyles.wrapper}>
      <ContactList />
    </div>
  );
};

export default Dialogs;
