import MainWallpaper from "./main-wallpaper";
import NewPost from "./new-post";
import ProfileBlock from "./profile-block";
import ProfileMessage from "./profile-message";

const Main = () => {
  return <main className="main">
    <MainWallpaper />
    <div className="profile-short-info">
      <ProfileBlock />
      <ProfileMessage />
    </div>
    <div className="posts">
      <NewPost />
      <NewPost />
      <NewPost />
    </div>
  </main>
}

export default Main;