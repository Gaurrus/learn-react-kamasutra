import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';

import './index.css';

export const rerenderEntireTree = (state, addPost) => {
  ReactDOM.render(
    <React.StrictMode>
      <App  state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}