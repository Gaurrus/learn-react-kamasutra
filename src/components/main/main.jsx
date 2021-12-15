import MainWallpaper from "../main/main-wallpaper";
import {
  avatarOne,
  avatarTwo,
  avatarThree,
  myAvatar,
} from "../img/import-lmages";

import ProfileBlock from "./profile/profile-block";
import ProfileMessage from "./my_posts/my-post";
import mainStyles from "../main/main.module.css";

const Main = () => {
  return (
    <main className={mainStyles.main}>
      <MainWallpaper />
      <div className={mainStyles.miniprofile}>
        <ProfileBlock />
        <ProfileMessage message="My-post" avatarSrc={myAvatar} />
      </div>
      <div className={mainStyles.posts}>
        <ProfileMessage message="post-1" avatarSrc={avatarOne} />
        <ProfileMessage message="post-2" avatarSrc={avatarTwo} />
        <ProfileMessage message="post-3" avatarSrc={avatarThree} />
      </div>
    </main>
  );
};

export default Main;
