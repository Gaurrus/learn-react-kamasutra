import { useRef } from 'react';

import styles from "./add-post.module.css";

export const AddPost = (props) => {

    const newPostElem = useRef();

    const addMess = () => {
        props.dispatch(props.addMessActionCreator());
    }

    const postOnChange = () => {
        const text = newPostElem.current.value;
        props.dispatch(props.postOnChangeActionCreator(text));

    }

    return (
        <div className={styles.addPostBlock}>
            <input className={styles.input} ref={newPostElem} type="text" value={props.newPostMessage} onChange={postOnChange} />
            <button className={styles.button} onClick={addMess} >Добавить сообщение</button>
        </div>
    )
}
