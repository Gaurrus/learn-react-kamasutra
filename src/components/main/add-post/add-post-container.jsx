import { AddPost } from './add-post';

export const AddPostContainer = (props) => {
  const state = props.store.getState()

  const addMess = () => {
    props.store.dispatch(props.addMessActionCreator());
  };

  const postChange = (text) => {
    props.store.dispatch(props.postOnChangeActionCreator(text));
  };

  return (
    <AddPost addMess={addMess} postChange={postChange} newPostMessage={state.profilePage.newPostMessage} />
  );
};
