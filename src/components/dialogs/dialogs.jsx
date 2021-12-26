import { ContactList } from './contact-list';
import { MessageArea } from './message-area';

import dialogsStyles from "./dialogs.module.css";

export const Dialogs = (props) =>
(
  <div className={dialogsStyles.wrapper}>
    <ContactList state={props.state} />
    <MessageArea state={props.state} />
  </div>
);


