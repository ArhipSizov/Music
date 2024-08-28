import { useState } from "react";

import "./BookingTimeComponent.scss";

export default function BookingTimeComponent({ item, costTime, setCostTime }) {
  const [active, setActive] = useState("booking_time_component");

  function functionCostTime() {
    let newArr = costTime;
    if (active == "booking_time_component") {
      setActive("booking_time_component_active");
      newArr.push(item);
    } else {
      setActive("booking_time_component");
      newArr = newArr.filter((newArr) => newArr !== item);
    }
    setCostTime(newArr);
  }

  return (
    <div onClick={functionCostTime} className={active}>
      <p>{item}:00</p>
    </div>
  );
}
