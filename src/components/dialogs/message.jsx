import messageStyle from '../dialogs/message.module.css'

const Message = ({ message }) => <div className={messageStyle.wrapper}><span className={messageStyle.header}>{message}</span></div>

export default Message;