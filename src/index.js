import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app/app';

import reportWebVitals from './reportWebVitals';

import { state, addPost, updateNewPostMessage, subscribe } from './components/redux';


import './index.css';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostMessage={updateNewPostMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state, addPost)

reportWebVitals();

subscribe(rerenderEntireTree)
