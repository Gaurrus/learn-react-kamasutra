import messageStyle from './message.module.css'

export const Message = ({ message }) => <div className={messageStyle.wrapper}><span className={messageStyle.header}>{message}</span></div>
