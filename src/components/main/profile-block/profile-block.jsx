import { ProfileInfo } from '../profile-info';
import { Avatar } from "../avatar";
import { AddPostContainer } from './../add-post/add-post-container';

import profileStyles from "./profile-block.module.css";

export const ProfileBlock = (props) => {
  return (
    <div className={profileStyles.wrapper}>
      <div className={profileStyles.profileInfo}>
        <Avatar />
        <ProfileInfo state={props.state} />
      </div>
      <AddPostContainer
        store={props.store}
        addMessActionCreator={props.addMessActionCreator}
        postOnChangeActionCreator={props.postOnChangeActionCreator}
      />
    </div>
  );
};
