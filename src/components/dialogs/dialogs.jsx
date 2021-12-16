import ContactList from "./contact-list";
import dialogsStyles from "./dialogs.module.css";
import MessageArea from "./message-area";

const Dialogs = (props) => {
  return (
    <div className={dialogsStyles.wrapper}>
      <ContactList />
      <MessageArea />
    </div>
  );
};

export default Dialogs;
