import Message from './message';

import { contactsData } from './../../constants/contacts-data';

import messageAreaStyle from '../dialogs/message-area.module.css'

const MessageArea = (props) => {

  let messagesList = contactsData.map((item) => <Message key={item.id} message={item.messages} />)

  return <div className={messageAreaStyle.wrapper}>
    <span className={messageAreaStyle.header}>Сообщения</span>
    {messagesList}
  </div>
};
export default MessageArea;