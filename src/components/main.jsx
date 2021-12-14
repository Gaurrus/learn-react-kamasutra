import MainWallpaper from "../components/main-wallpaper";
import NewPost from "../components/new-post";
import ProfileBlock from "../components/profile-block";
import ProfileMessage from "../components/profile-message";

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