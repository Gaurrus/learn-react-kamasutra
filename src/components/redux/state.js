import { myAvatar, avatarOne, avatarTwo, avatarThree } from "../main/assets/index.js"

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export let store = {
  _state: {
    dialogsPage: {
      contactsData: [{
        id: '1',
        name: 'Garrus',
        avatar: myAvatar,
      },

      {
        id: '2',
        name: 'Зюзя',
        avatar: avatarTwo,
      },
      {
        id: '3',
        name: 'Пипа',
        avatar: avatarThree,
      },
      {
        id: '4',
        name: 'Кузя',
        avatar: avatarOne,
      },
      {
        id: '5',
        name: 'Федя',
        avatar: avatarTwo,
      },
      ],
      messagesData: [
        {
          mId: 1,
          message: 'Hallo!',
        },
        {
          mId: 2,
          message: 'Salut!',
        },
        {
          mId: 3,
          message: 'Ti Gde?',
        },
        {
          mId: 4,
          message: 'Ya tut!!',
        },
        {
          mId: 5,
          message: 'Horosho!',
        },
      ],
      newUpMessage: 'New message',

    },

    profilePage: {

      userData: {
        firstName: 'Иоанн',
        lastName: 'Рюриковичи мы!',
        middleName: 'Васильевич',
        dateOfBirthd: '25 августа 1530г от рождества Христова',
        age: 'Возраст',
        contry: 'Царская Россия',
        city: 'Москва',
        profession: 'Цар'
      },

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
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() { console.log(this._state) },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        post: this._state.profilePage.newPostMessage,
        likes: 0,
        avatar: avatarOne,
        id: this._state.profilePage.postsData.length + 1,
      };
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostMessage = ''
      this.rerenderEntireTree(this._state)
    } else

      if (action.type === UPDATE_NEW_POST_MESSAGE) {
        this._state.profilePage.newPostMessage = action.text;
        this.rerenderEntireTree(this._state)
      } else
        if (action.type === ADD_MESSAGE) {
          const newMessage = {
            mId: this._state.dialogsPage.messagesData.length + 1,
            message: this._state.dialogsPage.newUpMessage,
          };
          this._state.dialogsPage.messagesData.push(newMessage)
          this._state.dialogsPage.newUpMessage = ''
          this.rerenderEntireTree(this._state)
        } else

          if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newUpMessage = action.text;
            this.rerenderEntireTree(this._state)
          }
  }
}

export const addMessActionCreator = () => ({ type: ADD_POST })
export const addMessAcCre = () => ({ type: ADD_MESSAGE })

export const postOnChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_MESSAGE, text: text })
export const messageOnChangeActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, text: text })
