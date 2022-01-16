import styles from "./add-post.module.css";

export const AddPost = (props) => {
  const onAddMess = () => {
    props.addMess();
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.postChange(text);
  };

  return (
    <div className={styles.addPostBlock}>
      <input
        className={styles.input}
        type="text"
        value={props.newPostMessage}
        onChange={onPostChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onAddMess();
          }
        }}
      />
      <button className={styles.button} onClick={onAddMess}>
        Добавить сообщение
      </button>
    </div>
  );
};
