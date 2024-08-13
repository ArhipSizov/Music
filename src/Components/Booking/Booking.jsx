import "./Booking.scss";
import BookingRoom from "../BookingRoom/BookingRoom";
import BookingTime from "../BookingTime/BookingTime";
import { useState, useEffect } from "react";

export default function Booking({ item, setShowBookingBlock }) {
  const [time, setTime] = useState([]);
  const [showTime, setShowTime] = useState(false);

  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());

  const halls = Object.values(item.halls);

  function editTime() {
    if (date.getMonth() == month) {
      let newArr = time;
      console.log(date.getDate());
      newArr.push(date.getDate());
      console.log(newArr);
      setTime(newArr);
      date.setDate(date.getDate() + 1);
      editTime();
    } else {
      setShowTime(true);
    }
  }
  useEffect(() => {
    editTime();
  }, []);
  return (
    <div className="booking">
      <div onClick={() => setShowBookingBlock(false)} className="nav">
        <img src="/backAlt.svg" alt="" />
        <h1>Бронирование</h1>
      </div>
      <div className="body">
        <div className="basic">
          <img className="logo_img" src={item.logo} alt="" />
          <div>
            <h1>{item.name}</h1>
            <p>{item.area}</p>
          </div>
        </div>
        <div>
          <h2>Выбор зала</h2>
          <div className="rooms">
            {halls.map((item) => (
              <BookingRoom item={item} {...item} key={item.id}></BookingRoom>
            ))}
          </div>
        </div>
        <div>
          <h2>Выбор времени</h2>
          {showTime &&
            time.map((item2) => (
              <BookingTime
                item={item2}
                {...item2}
                key={item2.id}
                start={item.time_hours_start}
                end={item.time_hours_end}
              ></BookingTime>
            ))}
        </div>
      </div>
    </div>
  );
}
