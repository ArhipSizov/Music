import "./BankCard.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { database } from "../../Services/store/index";

import BankCardComponent from "../../Components/BankCardComponent/BankCardComponent";

export default function BankCard() {
  const navigate = useNavigate();

  const [error, setError] = useState(true);

  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [CVV, setCVV] = useState("");

  const [key, setKey] = useState("");
  const [card, setCard] = useState({});

  const emailArr = useSelector((state) => state.email.email);
  if (key == "") {
    emailArr.forEach((element) => {
      setKey(element.key);
      if (element.card !== undefined) {
        setCard(element.card);
      }
    });
  }

  function updateDatabase() {
    const updates = {};

    const postData = {
      number: number,
      date: date,
      CVV: CVV,
    };
    updates["/users/" + key + "/card/" + number] = postData;
    navigate("/profile");
    return update(ref(database), updates);
  }

  useEffect(() => {
    setError(true);
    if (number.length == 16) {
      setError(true);
      if (date.length == 5) {
        setError(true);
        if (CVV.length == 3) {
          setError(false);
        }
      }
    }
  }, [number, date, CVV]);
  return (
    <div className="bank_card">
      <NavLink className="div" to="/profile">
        <img src="/backAlt.svg" alt="" />
        <h1>Банковская карта</h1>
      </NavLink>
      <form onSubmit={() => updateDatabase()} className="bank_card_add">
        <input
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          placeholder="Номер карточки"
          type="text"
        />
        <div>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Дата"
            type="text"
          />
          <input
            value={CVV}
            onChange={(event) => setCVV(event.target.value)}
            placeholder="CVV"
            type="text"
          />
        </div>
        {error && <p className="error">Неверные данные</p>}
        {!error && (
          <input placeholder="Добавить" className="button" type="submit" />
        )}
      </form>
      {Object.values(card).map((item) => (
        <BankCardComponent
          item={item}
          {...item}
          key={item.number}
        ></BankCardComponent>
      ))}
    </div>
  );
}
