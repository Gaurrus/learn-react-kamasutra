import {
  myAvatar,
  avatarOne,
  avatarTwo,
  avatarThree,
} from "../main/assets/index.js";

import { messagesReducer } from "./messages-reducer.js";
import { profileReducer } from "./profile-reducer.js";

export let store = {
  _state: {
    dialogsPage: {
      messagesData: [
        {
          mId: 1,
          message: "Hallo!",
        },
        {
          mId: 2,
          message: "Salut!",
        },
        {
          mId: 3,
          message: "Ti Gde?",
        },
        {
          mId: 4,
          message: "Ya tut!!",
        },
        {
          mId: 5,
          message: "Horosho!",
        },
      ],
      newUpMessage: "New message",
    },

    profilePage: {

      postsData: [
        {
          post: "Какой-то пост!",
          likes: 2,
          avatar: myAvatar,
          id: 1,
        },
        {
          post: "пост - 1",
          likes: 4,
          avatar: avatarOne,
          id: 2,
        },
        {
          post: "пост - 2",
          likes: 6,
          avatar: avatarTwo,
          id: 3,
        },
        {
          post: "пост - 3",
          likes: 8,
          avatar: avatarThree,
          id: 4,
        },
        {
          post: "пост - 4",
          likes: 10,
          avatar: avatarOne,
          id: 5,
        },
        {
          post: "пост - 5",
          likes: 1,
          avatar: avatarTwo,
          id: 6,
        },
      ],
      newPostMessage: "super",
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {
    console.log(this._state);
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(
      this._state.profilePage,
      action,
      avatarOne
    );
    this._state.dialogsPage = messagesReducer(this._state.dialogsPage, action);
    this.rerenderEntireTree(this._state);
  },
};
