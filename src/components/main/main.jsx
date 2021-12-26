import { ProfileBlock } from "./profile-block";
import { MainWallpaper } from "./main-wallpaper";
import { Post } from './post';



import mainStyles from "./main.module.css";

export const Main = (props) => {

  let posts = props.state.profilePage.postsData.map((post) => <Post key={post.id.toString()} message={post.post} likes={post.likes} avatarSrc={post.avatar} />)
  return (
    <main className={mainStyles.main}>
      <MainWallpaper />
      <div className={mainStyles.miniprofile}>
        <ProfileBlock state={props.state} />
      </div>
      <div className={mainStyles.posts}>
        {posts}

      </div>
    </main>
  );
};
