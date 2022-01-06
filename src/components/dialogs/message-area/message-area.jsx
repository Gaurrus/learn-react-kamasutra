import { useRef } from 'react';

import { Message } from './../message';

import style from './message-area.module.css'

export const MessageArea = (props) => {

  const newMessageText = useRef();

  const addMessage = () => {
    props.dispatch(props.addMessAcCre());
  }

  const messageOnChange = () => {
    const text = newMessageText.current.value;
    props.dispatch(props.messageOnChangeActionCreator(text));
  }

  let messagesList = props.state.dialogsPage.messagesData.map((message) => <Message key={message.mId} message={message.message} />)

  return <div className={style.wrapper}>
    <span className={style.header}>Сообщения</span>
    {messagesList}
    <textarea name="message" cols="30" rows="3"
      ref={newMessageText}
      onChange={messageOnChange}
      value={props.state.dialogsPage.newUpMessage}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          addMessage()
        }
      }} />
    <button className={style.button} onClick={addMessage}>Отправить сообщение</button>
  </div>
};
