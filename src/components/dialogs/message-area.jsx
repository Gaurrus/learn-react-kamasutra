import messageAreaStyle from '../dialogs/message-area.module.css'
import Message from './message';

const MessageArea = (props) => {

  let messagesData = [{
    data: 'Hallo!',
  },
  {
    data: 'Salut',
  },
  {
    data: 'Ti Gde?',
  },
  {
    data: 'Ya tut!',
  },
  {
    data: 'Horosho!',
  },
  ]

  let messagesList = messagesData.map((message) => <Message message={message.data} />)

  return <div className={messageAreaStyle.wrapper}>
    <span className={messageAreaStyle.header}>Сообщения</span>
    {messagesList}
  </div>
};
export default MessageArea;