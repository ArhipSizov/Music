import { useEffect, useState } from "react";

import "./BookingRoom.scss";

export default function BookingRoom({ item, setRoom, room, setCostRoom }) {
  const [active, setActive] = useState("booking_room");
  
  useEffect(() => {
    if (item.trueName == room) {
      setActive("booking_room booking_room_active");
      setCostRoom(item.cost)
    } else {
      setActive("booking_room");
    }
  }, [room]);

  return (
    <div
      onClick={() => {
        setRoom(item.trueName);
      }}
      className={active}
    >
      <img className="photo" src={item.photo} alt="" />
      <p>{item.name}</p>
      <div>
        <img src="/room_company.svg" alt="" />
        <p>{item.square} м2</p>
      </div>
    </div>
  );
}
