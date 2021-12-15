import myPostsStyles from "../my_posts/my-post.module.css"

const ProfileBlock = (props) => {
  return <div className={myPostsStyles.my_post}>
    <div className={myPostsStyles.avatar_ico}>
    <img
      src={props.avatarSrc}
      alt="avatar"
      className={myPostsStyles.avatar}
    />
    </div>
    <span className={myPostsStyles.my_message}>
      {props.message}
    </span>
  </div>
}

export default ProfileBlock;