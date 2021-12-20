import WallMessage from "./my_posts/my-post";
import ProfileBlock from "./profile/profile-block";

import MainWallpaper from "../main/main-wallpaper";
import { myAvatar, avatarOne, avatarTwo, avatarThree } from "./profile/assets/export";


import mainStyles from "../main/main.module.css";

const Main = () => {

  let postsData = [{
    post: 'Какой-то пост!',
    likes: 2,
    avatar: myAvatar,
  },
  {
    post: 'пост - 1',
    likes: 4,
    avatar: avatarOne,
  },
  {
    post: 'пост - 2',
    likes: 6,
    avatar: avatarTwo,
  },
  {
    post: 'пост - 3',
    likes: 8,
    avatar: avatarThree,
  },
  {
    post: 'пост - 4',
    likes: 10,
    avatar: avatarThree,
  },
  ]

  let posts = postsData.map((post) => <WallMessage message={post.post} likes={post.likes} avatarSrc={post.avatar} />)
  return (
    <main className={mainStyles.main}>
      <MainWallpaper />
      <div className={mainStyles.miniprofile}>
        <ProfileBlock />
      </div>
      <div className={mainStyles.posts}>
        {posts}

      </div>
    </main>
  );
};

export default Main;
