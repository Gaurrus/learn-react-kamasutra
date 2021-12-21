import messageStyle from '../dialogs/message.module.css'

const Message = ({message}) => {
  return <div className={messageStyle.wrapper}>

    {message.map((item)=><span key={item.id} className={messageStyle.header}>{item.message}</span> )}

  </div>
};

export default Message;