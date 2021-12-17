import WallMessage from "./my_posts/my-post";
import ProfileBlock from "./profile/profile-block";

import MainWallpaper from "../main/main-wallpaper";
import { myAvatar, avatarOne, avatarTwo, avatarThree } from "./profile/assets/export";


import mainStyles from "../main/main.module.css";

const Main = () => {

  let postsData = [{
    post: 'Какой-то пост!',
    likes: 2
  },
  {
    post: 'пост - 1',
    likes: 4
  },
  {
    post: 'пост - 2',
    likes: 6
  },
  {
    post: 'пост - 3',
    likes: 8
  },
  ]
  return (
    <main className={mainStyles.main}>
      <MainWallpaper />
      <div className={mainStyles.miniprofile}>
        <ProfileBlock />
        <WallMessage message={postsData[0].post} likes={postsData[0].likes} avatarSrc={myAvatar} />
      </div>
      <div className={mainStyles.posts}>
        <WallMessage message={postsData[1].post} likes={postsData[1].likes} avatarSrc={avatarOne} />
        <WallMessage message={postsData[2].post} likes={postsData[2].likes} avatarSrc={avatarTwo} />
        <WallMessage message={postsData[3].post} likes={postsData[3].likes} avatarSrc={avatarThree} />

      </div>
    </main>
  );
};

export default Main;
