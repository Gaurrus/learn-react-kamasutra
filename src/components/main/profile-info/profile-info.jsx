import profileInfoStyles from "./profile-info.module.css";

const userData = {
  firstName: "Иоанн",
  lastName: "Рюриковичи мы!",
  middleName: "Васильевич",
  dateOfBirthd: "25 августа 1530г от рождества Христова",
  age: "Возраст",
  contry: "Царская Россия",
  city: "Москва",
  profession: "Цар",
}

export const ProfileInfo = (props) => {
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
