import MainWallpaper from "../main/main-wallpaper";

import ProfileBlock from "./profile/profile-block";
import ProfileMessage from "./my_posts/my-post";
import mainStyles from "../main/main.module.css";

const Main = () => {
  return (
    <main className={mainStyles.main}>
      <MainWallpaper />
      <div className={mainStyles.miniprofile}>
        <ProfileBlock />
        <ProfileMessage message="My-post"/>
      </div>
      <div className={mainStyles.posts}>
      <ProfileMessage message="post-1"/>
      <ProfileMessage message="post-2"/>
      <ProfileMessage message="post-3"/>
      </div>
    </main>
  );
};

export default Main;
