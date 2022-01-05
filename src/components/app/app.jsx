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



import "./app.css";

export const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/dialogs" element={<Dialogs state={props.state} />} />
          <Route exact path="" element={<Main state={props.state} 
          dispatch={props.dispatch} 
          addMessActionCreator={props.addMessActionCreator}
          postOnChangeActionCreator={props.postOnChangeActionCreator}/>} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
