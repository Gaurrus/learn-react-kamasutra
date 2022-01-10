import {
  myAvatar,
  avatarOne,
  avatarTwo,
  avatarThree,
} from "../../main/assets";
import { Contact } from './../contact';

import contactListStyle from "./contact-list.module.css";

const contactsData = [
  {
    id: "1",
    name: "Garrus",
    avatar: myAvatar,
  },

  {
    id: "2",
    name: "Зюзя",
    avatar: avatarTwo,
  },
  {
    id: "3",
    name: "Пипа",
    avatar: avatarThree,
  },
  {
    id: "4",
    name: "Кузя",
    avatar: avatarOne,
  },
  {
    id: "5",
    name: "Федя",
    avatar: avatarTwo,
  },
]

export const ContactList = (props) => {

  let contactsElements = contactsData.map((contact) => <Contact key={contact.id} contact={contact.name} avatar={contact.avatar} />)


  return (
    <div className={contactListStyle.wrapper}>
      <span className={contactListStyle.header}>Список контактов</span>
      <ul className={contactListStyle.contacts}>
        {
          contactsElements
        }
      </ul>
    </div>
  );
};

