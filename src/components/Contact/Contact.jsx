import { PiPhoneFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contact}>
      <div>
        <p className={s.name}>
          <IoMdContact className={s.svg} />
          {name}
        </p>
        <p className={s.name}>
          <PiPhoneFill className={s.svg} />
          {number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
