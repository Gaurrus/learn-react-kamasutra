import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/dialogs/dialogs";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";
import Settings from "./components/settings/settings";
import Music from "./components/music/music";
import News from "./components/news/news";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />

        <Routes>
          <Route exact path="/dialogs" element={<Dialogs />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
