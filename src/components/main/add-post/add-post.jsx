
import styles from "./add-post.module.css";

export const AddPost = (props) => (
    <div className={styles.addPostBlock}>
    <input className={styles.input} type="text"/>
<button className={styles.button} >Добавить сообщение</button>
    </div>
)
