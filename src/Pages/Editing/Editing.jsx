import "./Editing.scss";
import { NavLink } from "react-router-dom";
import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  child,
  update,
  push,
} from "firebase/database";
import { useNavigate } from "react-router-dom";
import { database } from "../../Services/store/index";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Editing() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pasvord, setPasvord] = useState("");
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const emailArr = useSelector((state) => state.email.email);
  if (email == "") {
    emailArr.forEach((element) => {
      setName(element.name);
      setNumber(element.number);
      setKey(element.key);
      setEmail(element.email);
      setPasvord(element.password);
    });
  }


  function updateDatabase(params) {
    const updates = {};
    updates["/users/" + key] = null;

    const postData = {
      email: email,
      number: number,
      key: key,
      password: pasvord,
      name: name,
    };
    updates["/users/" + key] = postData;
    navigate("/profile")
    return update(ref(database), updates);
  }
  return (
    <div className="editing">
      <NavLink className="div" to="/profile">
        <img src="/backAlt.svg" alt="" />
        <h1>Редактирование профиля</h1>
      </NavLink>
      <form>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Имя  и фамилия"
        />
        <input
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          type="text"
          placeholder="Номер телефона"
        />
        <div
          onClick={() => updateDatabase()}
          type="submit"
        >Подтвердить</div>
      </form>
    </div>
  );
}
