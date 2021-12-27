import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Dialogs } from './../dialogs/dialogs';
import { Header } from './../header/header';
import { Nav } from './../nav/nav';
import { Main } from './../main/main';
import { News } from './../news/news';
import { Music } from './../music/music';
import { Settings } from './../settings/settings';
import { Footer } from './../footer/footer';

import { state, addPost } from './../redux';

import "./app.css";

export const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />

        <Routes>
          <Route exact path="/dialogs" element={<Dialogs state={state} />} />
          <Route exact path="/main" element={<Main state={state} addPost={addPost}/>} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
