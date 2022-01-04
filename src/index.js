import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import { state, addPost } from './components/redux';

import './index.css';

rerenderEntireTree(state, addPost)

reportWebVitals();
