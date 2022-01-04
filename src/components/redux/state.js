import { myAvatar, avatarOne, avatarTwo, avatarThree } from "../main/assets/index.js"
let rerenderEntireTree = () => { }


export const state = {
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
    ]

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
}

export const addPost = () => {
  const newPost = {
    post: state.profilePage.newPostMessage,
    likes: 0,
    avatar: avatarOne,
    id: state.profilePage.postsData.length + 1,
  };
  state.profilePage.postsData.push(newPost)
  state.profilePage.newPostMessage = ''
  rerenderEntireTree(state, addPost)
}

export const updateNewPostMessage = (text) => {

  state.profilePage.newPostMessage = text;
  rerenderEntireTree(state, updateNewPostMessage)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}