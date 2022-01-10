import { myAvatar, avatarOne, avatarTwo, avatarThree } from "../main/assets/index.js"

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE";


const INITIAL_STATE = {
  postsData: [{
    post: 'Какой-то пост!',
    likes: 2,
    avatar: myAvatar,
    id: 1,
  },
  {
    post: 'пост - 1',
    likes: 4,
    avatar: avatarOne,
    id: 2,
  },
  {
    post: 'пост - 2',
    likes: 6,
    avatar: avatarTwo,
    id: 3,
  },
  {
    post: 'пост - 3',
    likes: 8,
    avatar: avatarThree,
    id: 4,
  },
  {
    post: 'пост - 4',
    likes: 10,
    avatar: avatarOne,
    id: 5,
  },
  {
    post: 'пост - 5',
    likes: 1,
    avatar: avatarTwo,
    id: 6,
  },
  ],
  newPostMessage: 'super'
}

export const profileReducer = (state = INITIAL_STATE, action, avatar) => {
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

export const postOnChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_MESSAGE,
  text: text,
});

export const addMessActionCreator = () => ({ type: ADD_POST });

