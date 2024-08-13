import { useEffect, useState } from "react";
import BookingTimeComponent from "../BookingTimeComponent/BookingTimeComponent";
import "./BookingTime.scss";

export default function BookingTime({ item, start, end }) {
  const [time, setTime] = useState([]);
  const [showTime, setShowTime] = useState(false);
  const [helpI, setHelpI] = useState(0);

  const newDate = new Date();
  const [date, setDate] = useState();
  const [month, setMonth] = useState(newDate.getMonth());
  const [day, setDay] = useState(newDate.getDate());

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
    if (item < 10) item = "0" + item;

    var mm = newDate.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;

    setDate(item + "." + mm);

    newDate.setDate(+start);
    console.log(newDate.getDate());
    editTime();
  }, []);
  return (
    <div className="booking_time">
      <p className="data">{date}</p>
      {showTime &&
        time.map((item) => (
          <BookingTimeComponent
            item={item}
            {...item}
            key={item.id}
          ></BookingTimeComponent>
        ))}
    </div>
  );
}
