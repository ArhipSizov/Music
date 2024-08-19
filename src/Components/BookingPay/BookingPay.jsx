import "./BookingPay.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function BookingPay({ cost, setShowPay, item }) {
  const [key, setKey] = useState("");
  const [card, setCard] = useState("");

  const [showPayCard, setShowPayCard] = useState();
  const emailArr = useSelector((state) => state.email.email);
  if (key == "") {
    emailArr.forEach((element) => {
      setKey(element.key);
      if (element.card !== undefined) {
        setCard(element.card);
      }
    });
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
      <form>
        <p className="booking_pay_choice_p">Способ оплаты:</p>
        <div className="booking_pay_choice">
          <input onClick={() => setShowPayCard(false)} type="radio" name="field1" />
          <p>Оплата на месте</p>
        </div>
        <div className="booking_pay_choice">
          <input onClick={() => setShowPayCard(true)} type="radio" name="field1" />
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
        </form>
      )}
      <div className="button">Забронировать</div>
    </div>
  );
}
