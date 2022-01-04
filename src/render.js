import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { addPost, updateNewPostMessage } from './components/redux';

import './index.css';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostMessage={updateNewPostMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
