import styles from "./add-post.module.css";

export const AddPost = (props) => {
  const addMess = () => {
    props.dispatch(props.addMessActionCreator());
  };

  const postOnChange = (e) => {
    const text = e.target.value;
    props.dispatch(props.postOnChangeActionCreator(text));
  };

  return (
    <div className={styles.addPostBlock}>
      <input
        className={styles.input}
        type="text"
        value={props.newPostMessage}
        onChange={postOnChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addMess();
          }
        }}
      />
      <button className={styles.button} onClick={addMess}>
        Добавить сообщение
      </button>
    </div>
  );
};
