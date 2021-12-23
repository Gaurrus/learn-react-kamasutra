import ProfileInfo from "../profile/profile-info";
import profileStyles from "../profile/profile-block.module.css";
import Avatar from "./avatar";

const ProfileBlock = ({userData}) => {
  return (
    <div className={profileStyles.wrapper}>
      <Avatar />
      <ProfileInfo userData={userData}/>
    </div>
  );
};

export default ProfileBlock;
