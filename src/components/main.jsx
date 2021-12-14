import MainWallpaper from "../components/main-wallpaper";
import NewPost from "../components/new-post";
import ProfileBlock from "../components/profile-block";
import ProfileMessage from "../components/profile-message";
import mainStyles from "../components/main.module.css";

const Main = () => {
  return (
    <main className={mainStyles.main}>
      <MainWallpaper />
      <div className={mainStyles.miniprofile}>
        <ProfileBlock />
        <ProfileMessage />
      </div>
      <div className={mainStyles.posts}>
        <NewPost />
        <NewPost />
        <NewPost />
      </div>
    </main>
  );
};

export default Main;
