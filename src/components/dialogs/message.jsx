import messageStyle from '../dialogs/message.module.css'

const Message = (props) => {
  return <div className={messageStyle.wrapper}>
    <span className={messageStyle.header}>{props.message}</span>
  </div>
};

export default Message;