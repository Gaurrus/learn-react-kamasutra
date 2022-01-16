import { ContactList } from './contact-list';
import { MessageAreaContainer } from './message-area';

import dialogsStyles from "./dialogs.module.css";

export const Dialogs = (props) =>
(
  <div className={dialogsStyles.wrapper}>
    <ContactList state={props.state} />
    <MessageAreaContainer
      store={props.store}
      addMessAcCre={props.addMessAcCre}
      messageOnChangeActionCreator={props.messageOnChangeActionCreator}
    />
  </div>
);


