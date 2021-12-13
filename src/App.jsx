import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://store-images.s-microsoft.com/image/apps.47867.13879366447690213.ff0dcdf1-af01-4af7-b105-db57cef9cb67.771cf851-92c5-4d8a-9314-5cfc91541202?mode=scale&q=90&h=200&w=200&background=%230078D7"
          alt="logo"
          className="logo-img"
        />
        <h1>Antisocial web</h1>
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#!">Profile</a>
          </li>
          <li>
            <a href="#!">Messages</a>
          </li>
          <li>
            <a href="#!">News</a>
          </li>
          <li>
            <a href="#!">Music</a>
          </li>
        </ul>
        <ul className="nav-list">
          <a href="#!">Settings</a>
        </ul>
      </nav>
      <main className="main">
        <img
          src="https://store.hp.com/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg"
          alt="wallpaper"
          className="wallpaper"
        />
        <div className="profile-short-info">
          <div className="profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNgTAOKQDwj1QFQZ6yavofxnyj2MPw0A24w&usqp=CAU"
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="my-message">Message</div>
        </div>
        <div className="posts">
          <div className="message-post">New post</div>
          <div className="message-post">post-1</div>
          <div className="message-post">post-2</div>
        </div>
      </main>
      <footer className="footer">
        <div>Garrus-learn-react.LTD-JPG-PTU/BLR</div>
      </footer>
    </div>
  );
}

export default App;
