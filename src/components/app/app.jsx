import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dialogs from "./../dialogs";
import Footer from "./../footer";
import Header from "./../header";
import Main from "./../main";
import Nav from "./../nav/";
import Settings from "./..app/settings";
import Music from "./../music";
import News from "./../news";


import { state } from './../redux';

import "./app.css";

export const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />

        <Routes>
          <Route exact path="/dialogs" element={<Dialogs state={state} />} />
          <Route exact path="/main" element={<Main state={state} />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
