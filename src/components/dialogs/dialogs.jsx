import ContactList from "./contact-list";
import MessageArea from "./message-area";

import dialogsStyles from "./dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={dialogsStyles.wrapper}>
      <ContactList />
      <MessageArea />
    </div>
  );
};

export default Dialogs;
