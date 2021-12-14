const ProfileInfo = ({ userName = "name", age = "age", sex = "sex", profession = "profi" }) => {
  return  <div className="profile-info">
      <span>Имя: {userName}</span>
      <span>Дата рождения: {age}</span>
      <span>Пол: {sex}</span>
      <span>Род дейтельности: {profession}</span>
    </div>
}

export default ProfileInfo;