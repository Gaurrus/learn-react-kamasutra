import messageStyle from '../dialogs/message.module.css'

const Message = ({ message }) => {
  return <div className={messageStyle.wrapper}>
    {console.log(message)}
    {message.map((item) => <span key={item.mId} className={messageStyle.header}>{item.message}</span>)}

  </div>
};

export default Message;