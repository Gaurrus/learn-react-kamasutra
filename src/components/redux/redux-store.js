import { createStore } from "redux";
import { combineReducers } from "redux";
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';

const redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: messagesReducer,

})

export const red_store = createStore(redusers);

