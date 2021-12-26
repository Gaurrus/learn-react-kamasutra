import profileInfoStyles from "./profile-info.module.css";

export const ProfileInfo = (props) => {
  const userData = props.state.profilePage.userData
  return (
    <div className={profileInfoStyles.info}>
      <span>Имя: {userData.firstName}</span>
      <span>Фамилия: {userData.lastName}</span>
      <span>Отчество: {userData.middleName}</span>
      <span>Дата рождения: {userData.dateOfBirthd}</span>
      <span>Возраст: {userData.age}</span>
      <span>Страна: {userData.contry}</span>
      <span>Город: {userData.city}</span>
      <span>Профессия: {userData.profession}</span>

    </div>
  );
};
