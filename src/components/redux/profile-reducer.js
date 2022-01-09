const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE";

export const profileReducer = (state, action, avatar) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        post: state.newPostMessage,
        likes: 0,
        avatar: avatar,
        id: state.postsData.length + 1,
      };
      state.postsData.push(newPost);
      state.newPostMessage = "";
      return state;
    case UPDATE_NEW_POST_MESSAGE:
      state.newPostMessage = action.text;
      return state;
    default:
      return state;
  }
};
