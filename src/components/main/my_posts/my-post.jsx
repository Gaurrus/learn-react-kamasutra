import myPostsStyles from "../my_posts/my-post.module.css"

const WallMessage = (props) => {
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
    <span className={myPostsStyles.like}>
      {props.likes}
    </span>
  </div>
}

export default WallMessage;