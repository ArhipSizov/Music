import { useState } from "react";

import "./BookingTimeComponent.scss";

export default function BookingTimeComponent({
  item,
  costTime,
  setCostTime,
  setTrueDate,
  day,
  trueDate,
}) {
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
    setCostTime(newArr)
    if (trueDate.length == 0) {
    setTrueDate([day]);
    }
    let help = 0;
    trueDate.forEach((element) => {
      if (element == day) {
        help = 1;
      } else {
        return;
      }
    });
    if (help == 0) {
      newArr = trueDate;
      newArr.push(day);
      setTrueDate(newArr);
    }
  }

  return (
    <div onClick={functionCostTime} className={active}>
      <p>{item}:00</p>
    </div>
  );
}
