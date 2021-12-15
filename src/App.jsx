import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/dialogs/dialogs";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/main" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
