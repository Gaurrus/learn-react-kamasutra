const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        mId: state.messagesData.length + 1,
        message: state.newUpMessage,
      };
      state.messagesData.push(newMessage);
      state.newUpMessage = "";
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newUpMessage = action.text;
      return state;

    default:
      return state;
  }
};

export const addMessAcCre = () => ({ type: ADD_MESSAGE });
export const messageOnChangeActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  text: text,
});
