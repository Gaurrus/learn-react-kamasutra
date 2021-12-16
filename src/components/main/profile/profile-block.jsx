import ProfileInfo from "../profile/profile-info";
import profileStyles from "../profile/profile-block.module.css";
import Avatar from "./avatar";

const ProfileBlock = ({
  userName = "name",
  age = "age",
  sex = "sex",
  profession = "profi",
  contry = "contry",
  sity = "sity",
  education = "education",
}) => {
  return (
    <div className={profileStyles.wrapper}>
      <Avatar />
      <ProfileInfo
        userName="Иоанн Васильевич"
        age="25 августа 1530г от рождества Христова"
        sex="муж"
        profession="Царъ"
        contry="Царская Россия"
        sity="Москва Златоглавая"
        education="Монарх"
      />
    </div>
  );
};

export default ProfileBlock;
