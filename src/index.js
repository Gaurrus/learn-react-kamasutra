import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app/app';

import reportWebVitals from './reportWebVitals';

import { store, postOnChangeActionCreator, addMessActionCreator, messageOnChangeActionCreator, addMessAcCre } from './components/redux';
import { red_store } from './components/redux/redux-store'; 

import './index.css';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}
        postOnChangeActionCreator={postOnChangeActionCreator}
        addMessActionCreator={addMessActionCreator}
        addMessAcCre={addMessAcCre}
        messageOnChangeActionCreator={messageOnChangeActionCreator}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// rerenderEntireTree(store.getState(), store.dispatch.bind(store))

reportWebVitals();

red_store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})
