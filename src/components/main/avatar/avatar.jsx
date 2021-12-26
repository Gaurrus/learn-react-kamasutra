import { myAvatar } from '../../main/assets/index'
import AvatarStyles from "./avatar.module.css";

export const Avatar = () => {
  return <img src={myAvatar} alt="avatar" className={AvatarStyles.avatar} />;
};

