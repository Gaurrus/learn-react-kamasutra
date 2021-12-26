import styles from "./post.module.css"

export const Post = (props) => {
  return <div className={styles.my_post}>
    <div className={styles.avatar_ico}>
      <img
        src={props.avatarSrc}
        alt="avatar"
        className={styles.avatar}
      />
    </div>
    <span className={styles.my_message}>
      {props.message}
    </span>
    <span className={styles.like}>
      {props.likes}
    </span>
  </div>
}
