import WallMessage from "./my_posts/my-post";
import ProfileBlock from "./profile/profile-block";

import MainWallpaper from "../main/main-wallpaper";

import mainStyles from "../main/main.module.css";

const Main = ({state}) => {

  let posts = state.postsData.map((post) => <WallMessage message={post.post} likes={post.likes} avatarSrc={post.avatar} />)
  return (
    <main className={mainStyles.main}>
      <MainWallpaper />
      <div className={mainStyles.miniprofile}>
        <ProfileBlock state={state}/>
      </div>
      <div className={mainStyles.posts}>
        {posts}

      </div>
    </main>
  );
};

export default Main;
