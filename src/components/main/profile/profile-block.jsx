import ProfileInfo from "../profile/profile-info";
import profileStyles from "../profile/profile-block.module.css";
import Avatar from "./avatar";

const ProfileBlock = ({state}) => {
  return (
    <div className={profileStyles.wrapper}>
      <Avatar />
      <ProfileInfo state={state}/>
    </div>
  );
};

export default ProfileBlock;
