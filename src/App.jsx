import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
