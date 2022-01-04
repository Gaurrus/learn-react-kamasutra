import { Message } from './../message';

import messageAreaStyle from './message-area.module.css'

export const MessageArea = (props) => {
  let messagesList = props.state.dialogsPage.messagesData.map((message) => <Message key={message.mId} message={message.message} />)
  return <div className={messageAreaStyle.wrapper}>
    <span className={messageAreaStyle.header}>Сообщения</span>
    {messagesList}
  </div>
};