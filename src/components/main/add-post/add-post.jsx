import { useRef } from 'react';

import styles from "./add-post.module.css";

export const AddPost = (props) => {

    const newPostElem = useRef();

    const addMess = () => {
        const text = newPostElem.current.value;
        props.addPost(text);
        newPostElem.current.value = ''
    }
    return (
        <div className={styles.addPostBlock}>
            <input className={styles.input} ref={newPostElem} type="text" />
            <button className={styles.button} onClick={addMess} >Добавить сообщение</button>
        </div>
    )
}
