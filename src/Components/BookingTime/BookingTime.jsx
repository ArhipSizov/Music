import { useEffect, useState } from "react";

import BookingTimeComponent from "../BookingTimeComponent/BookingTimeComponent";

import "./BookingTime.scss";

export default function BookingTime({
  item,
  start,
  end,
  costTime,
  setCostTime,
  setTrueDate,
  trueDate
}) {
  const [time, setTime] = useState([]);
  const [showTime, setShowTime] = useState(false);

  const newDate = new Date();
  const [date, setDate] = useState();
  const [month, setMonth] = useState(newDate.getMonth());

  function editTime() {
    if (newDate.getMonth() == month) {
      let newArr = time;
      if (newDate.getDate() <= end) {
        newArr.push(newDate.getDate());
      }
      setTime(newArr);
      newDate.setDate(newDate.getDate() + 1);
      editTime();
    } else {
      setShowTime(true);
    }
  }

  useEffect(() => {
    if (item < 10) item = item;

    setDate(item);

    newDate.setDate(+start);
    editTime();
  }, []);
  return (
    <div className="booking_time">
      <p className="data">{date} число</p>
      {showTime &&
        time.map((item2) => (
          <BookingTimeComponent
            item={item2}
            {...item}
            key={item.id}
            costTime={costTime}
            setCostTime={setCostTime}
            setTrueDate={setTrueDate}
            day={item}
            trueDate={trueDate}
          ></BookingTimeComponent>
        ))}
    </div>
  );
}
