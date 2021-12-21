import Message from './message';

import { contactsData } from './../../constants/contacts-data';

import messageAreaStyle from '../dialogs/message-area.module.css'

const MessageArea = (props) => {

  let messagesList = contactsData.map((item) => <Message key={item.name} message={item.messages} />)

  return <div className={messageAreaStyle.wrapper}>
    <span className={messageAreaStyle.header}>Сообщения</span>
    
    {messagesList[0]}
    {console.log(messagesList)}
  </div>
};
export default MessageArea;