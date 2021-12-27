import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';

import './index.css';

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
