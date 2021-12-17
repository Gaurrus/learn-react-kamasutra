import { myAvatar } from './assets/export'
import AvatarStyles from "../profile/avatar.module.css";

const Avatar = () => {
  return <img src={myAvatar} alt="avatar" className={AvatarStyles.avatar} />;
};

export default Avatar;
