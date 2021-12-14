import "./App.css";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Nav from "./nav";

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
