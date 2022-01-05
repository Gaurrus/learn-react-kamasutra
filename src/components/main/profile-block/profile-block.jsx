import { ProfileInfo } from '../profile-info';
import { Avatar } from "../avatar";
import { AddPost } from "../add-post";

import profileStyles from "./profile-block.module.css";

export const ProfileBlock = (props) => {
  return (
    <div className={profileStyles.wrapper}>
      <div className={profileStyles.profileInfo}>
        <Avatar />
        <ProfileInfo state={props.state} />
      </div>
      <AddPost dispatch={props.dispatch}
        newPostMessage={props.state.profilePage.newPostMessage}
        addMessActionCreator={props.addMessActionCreator}
        postOnChangeActionCreator={props.postOnChangeActionCreator} />
    </div>
  );
};
