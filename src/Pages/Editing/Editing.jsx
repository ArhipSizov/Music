import { NavLink } from "react-router-dom";
import { ref, update } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { database } from "../../Services/store/index";
import { useState } from "react";
import { useSelector } from "react-redux";

import App from "../../Components/CroptImage/App";

import "./Editing.scss";

export default function Editing() {
  const [email, setEmail] = useState("");
  const [pasvord, setPasvord] = useState("");
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [card, setCard] = useState({});

  const navigate = useNavigate();
  const userArr = useSelector((state) => state.user.user);
  if (email == "") {
    userArr.forEach((element) => {
      setName(element.name);
      setNumber(element.number);
      setKey(element.key);
      setEmail(element.email);
      setPasvord(element.password);
      if (element.favorites !== undefined) {
        setFavorites(element.favorites);
      }
      if (element.card !== undefined) {
        setCard(element.card);
      }
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
      favorites: favorites,
      card: card,
    };
    updates["/users/" + key] = postData;
    navigate("/profile");
    return update(ref(database), updates);
  }
  return (
    <div className="editing">
      <NavLink className="div" to="/profile">
        <img src="/backAlt.svg" alt="" />
        <h1>Редактирование профиля</h1>
      </NavLink>
      <form onSubmit={() => updateDatabase()}>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Имя  и фамилия"
        />
        <input
          required
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          type="text"
          placeholder="Номер телефона"
        />
        <input className="button" placeholder="Подтвердить" type="submit" />
      </form>
      <App></App>
    </div>
  );
}
