import profileInfoStyles from "../components/profile-info.module.css";

const ProfileInfo = ({
  userName = "name",
  age = "age",
  sex = "sex",
  profession = "profi",
  contry = "contry",
  sity = "sity",
  education = "education",
}) => {
  return (
    <div className={profileInfoStyles.info}>
      <span>Имя: {userName}</span>
      <span>Дата рождения: {age}</span>
      <span>Пол: {sex}</span>
      <span>Страна: {contry}</span>
      <span>Город: {sity}</span>
      <span>Образование: {education}</span>
      <span>Род дейтельности: {profession}</span>
    </div>
  );
};

export default ProfileInfo;
