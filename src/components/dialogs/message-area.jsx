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
  ]

  return <div className={messageAreaStyle.wrapper}>
    <span className={messageAreaStyle.header}>Сообщения</span>
    <Message message={messagesData[0].data} />
    <Message message={messagesData[1].data} />
    <Message message={messagesData[2].data} />
    <Message message={messagesData[3].data} />
  </div>
};
export default MessageArea;