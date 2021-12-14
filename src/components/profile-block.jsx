import ProfileInfo from "../components/profile-info";
import profileStyles from "../components/profile-block.module.css";

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
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNgTAOKQDwj1QFQZ6yavofxnyj2MPw0A24w&usqp=CAU"
        alt="avatar"
        className={profileStyles.avatar}
      />
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
