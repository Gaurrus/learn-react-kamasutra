import ProfileInfo from "../components/profile-info";

const ProfileBlock = ({ userName = "name", age = "age", sex = "sex", profession = "profi" }) => {
  return <div className="profile-wrapper">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNgTAOKQDwj1QFQZ6yavofxnyj2MPw0A24w&usqp=CAU"
      alt="avatar"
      className="avatar"
    />
    <ProfileInfo userName="Василий Алибабаевич Петин" age="1736 от рождества Христова" sex="муж" profession="Царъ" />
  </div>

}

export default ProfileBlock;