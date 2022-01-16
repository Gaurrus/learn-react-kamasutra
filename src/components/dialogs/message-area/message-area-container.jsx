
import { MessageArea } from './message-area';

export const MessageAreaContainer = (props) => {
  const state = props.store.getState();

  const addMessage = () => {
    props.store.dispatch(props.addMessAcCre());
  };

  const messageChange = (text) => {
    props.store.dispatch(props.messageOnChangeActionCreator(text));
  };

  return (
    <MessageArea messageChange={messageChange} addMessage={addMessage} newUpMessage={state.dialogsPage.newUpMessage} messagesData={state.dialogsPage.messagesData} />
  );
};
