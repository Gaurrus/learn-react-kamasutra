
import { ProfileInfo } from '../profile-info';
import { Avatar } from "../avatar";

import profileStyles from "./profile-block.module.css";

export const ProfileBlock = (props) => {
  return (
    <div className={profileStyles.wrapper}>
      <Avatar />
      <ProfileInfo state={props.state} />
    </div>
  );
};
