import profileInfoStyles from "../profile/profile-info.module.css";

const ProfileInfo = ({ state }) => {
  return (
    <div className={profileInfoStyles.info}>
      <span>Имя: {state.myData.firstName}</span>
      <span>Фамилия: {state.myData.lastName}</span>
      <span>Отчество: {state.myData.middleName}</span>
      <span>Дата рождения: {state.myData.dateOfBirthd}</span>
      <span>Возраст: {state.myData.age}</span>
      <span>Страна: {state.myData.contry}</span>
      <span>Город: {state.myData.city}</span>
      <span>Профессия: {state.myData.profession}</span>

    </div>
  );
};

export default ProfileInfo;
