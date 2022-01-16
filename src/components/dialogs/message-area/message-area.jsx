import { Message } from "./../message";

import style from "./message-area.module.css";

export const MessageArea = (props) => {
  const onAddMessage = () => {
    props.addMessage();
  };

  const messageOnChange = (e) => {
    const text = e.target.value;
    props.messageChange(text);
  };

  let messagesList = props.messagesData.map((message) => (
    <Message key={message.mId} message={message.message} />
  ));

  return (
    <div className={style.wrapper}>
      <span className={style.header}>Сообщения</span>
      {messagesList}
      <textarea
        name="message"
        cols="30"
        rows="3"
        onChange={messageOnChange}
        value={props.newUpMessage}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onAddMessage();
          }
        }}
      />
      <button className={style.button} onClick={onAddMessage}>
        Отправить сообщение
      </button>
    </div>
  );
};
