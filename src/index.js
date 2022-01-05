import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app/app';

import reportWebVitals from './reportWebVitals';

import { store } from './components/redux';


import './index.css';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostMessage={store.updateNewPostMessage.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState(), store.addPost.bind(store))

reportWebVitals();

store.subscribe(rerenderEntireTree)
