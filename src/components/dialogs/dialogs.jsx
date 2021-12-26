import ContactList from "./contact-list";
import MessageArea from "./message-area";

import dialogsStyles from "./dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={dialogsStyles.wrapper}>
      <ContactList state={props.state}/>
      <MessageArea state={props.state}/>
    </div>
  );
};

export default Dialogs;
