import { useState } from "react";
import { useSelector } from "react-redux";
import { ref, update } from "firebase/database";
import { database } from "../../Services/store/index";
import { NavLink } from "react-router-dom";

import "./BookingPay.scss";

export default function BookingPay({ cost, setShowPay, item, room }) {
  const [key, setKey] = useState("");
  const [card, setCard] = useState("");

  const [showPayCard, setShowPayCard] = useState();
  const userArr = useSelector((state) => state.user.user);
  if (key == "") {
    userArr.forEach((element) => {
      setKey(element.key);
      if (element.card !== undefined) {
        setCard(element.card);
      }
    });
  }

  function updateDatabase() {
    const updates = {};

    const postData = {
      cost: cost,
      room: room,
      name: item.name,
    };

    updates["/users/" + key + "/rooms/" + item.name] = postData;
    return update(ref(database), updates);
  }
  return (
    <div className="booking_pay">
      <div onClick={() => setShowPay(false)} className="nav">
        <img src="/backAlt.svg" alt="" />
        <h1>Оплата</h1>
      </div>
      <div className="basic">
        <img className="logo_img" src={item.logo} alt="" />
        <div>
          <h1>{item.name}</h1>
          <p>{item.area}</p>
        </div>
      </div>
      <p className="cost">Итоговая стоимость: {cost}р.</p>
      <form onSubmit={() => updateDatabase()}>
        <form>
          <p className="booking_pay_choice_p">Способ оплаты:</p>
          <div className="booking_pay_choice">
            <input
              onClick={() => setShowPayCard(false)}
              type="radio"
              name="field1"
            />
            <p>Оплата на месте</p>
          </div>
          <div className="booking_pay_choice">
            <input
              onClick={() => setShowPayCard(true)}
              type="radio"
              name="field1"
            />
            <p>Оплата картой</p>
          </div>
        </form>
        {showPayCard && (
          <form>
            {Object.keys(card).map((item) => (
              <div className="booking_pay_card">
                <p>{item}</p>
                <input type="radio" name="field2" />
              </div>
            ))}
            <NavLink className="NavLink" to="/bank_card">
              + Добавить банковскую карточку
            </NavLink>
          </form>
        )}
        <input placeholder="Забронировать" className="button" type="submit" />
      </form>
    </div>
  );
}
