import "./Booking.scss";
import BookingRoom from "../BookingRoom/BookingRoom";
import BookingTime from "../BookingTime/BookingTime";
import EquipmentServices from "../EquipmentServices/EquipmentServices";
import { useState, useEffect } from "react";

export default function Booking({ item, setShowBookingBlock }) {
  const [equipment, setEquipment] = useState([]);
  const [services, setServices] = useState([]);
  const [costTime, setCostTime] = useState([]);

  const [time, setTime] = useState([]);
  const [showTime, setShowTime] = useState(false);

  const [room, setRoom] = useState("Room_S");
  const [cost, setCost] = useState(0);
  const [costRoom, setCostRoom] = useState(0);

  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("");
  const [active3, setActive3] = useState("active");
  const [active4, setActive4] = useState("");
  const [activeBlock12, setActiveBlock12] = useState(true);
  const [activeBlock34, setActiveBlock34] = useState(true);
  function showOrderFunction(trueFunction, altFunction, block, blockConst) {
    trueFunction("active");
    altFunction("");
    block(blockConst);
  }

  let arrRoomEquipment = eval("item.halls." + room + ".equipment")
  let arrRoomServices = eval("item.halls." + room + ".services")

  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());

  const halls = Object.values(item.halls);

  function editTime(help) {
    help = help + 1
    if (help < 10) {
      let newArr = time;
      date.setDate(date.getDate() + 1);
      newArr.push(date.getDate());
      setTime(newArr);
      editTime(help);
    } else {
      setShowTime(true);
    }
  }
  useEffect(() => {
    let help = 0
    editTime(help);
  }, []);

  function name() {
    let newCost = +costRoom
    services.forEach((item) => {
      newCost = newCost + +item
    });
    equipment.forEach((item) => {
      newCost = newCost + +item
    });
    newCost = newCost * costTime.length
    setCost(newCost)
  }
  setTimeout(() => {
    name()
  }, 1);
  return (
    <div onClick={() => name()}  className="booking">
      <div onClick={() => setShowBookingBlock(false)} className="nav">
        <img src="/backAlt.svg" alt="" />
        <h1>Бронирование</h1>
      </div>
      <div className="choose_booking">
        <p
          className={active1}
          onClick={() =>
            showOrderFunction(setActive1, setActive2, setActiveBlock12, true)
          }
        >
          Комната
        </p>
        <p
          className={active2}
          onClick={() =>
            showOrderFunction(setActive2, setActive1, setActiveBlock12, false)
          }
        >
          Дополнительно
        </p>
      </div>
      {activeBlock12 && (
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
                <BookingRoom item={item} {...item} key={item.id} room={room} setRoom={setRoom} setCostRoom={setCostRoom}></BookingRoom>
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
                  key={item2}
                  start={item.time_hours_start}
                  end={item.time_hours_end}
                  costTime={costTime}
                  setCostTime={setCostTime}
                ></BookingTime>
              ))}
          </div>
        </div>
      )}
      <div className="booking_footer">
        <p>{cost}р.</p>
        <div>
          <p>Оплатить</p>
        </div>
      </div>
      {!activeBlock12 && (
        <div>
          <div className="choose_booking">
            <p
              className={active3}
              onClick={() =>
                showOrderFunction(
                  setActive3,
                  setActive4,
                  setActiveBlock34,
                  true
                )
              }
            >
              Оборудование
            </p>
            <p
              className={active4}
              onClick={() =>
                showOrderFunction(
                  setActive4,
                  setActive3,
                  setActiveBlock34,
                  false
                )
              }
            >
              Услуги
            </p>
          </div>
          {activeBlock34 && (
            <div className="body">
              {arrRoomEquipment.map((item) => (
                <EquipmentServices item={item} {...item} key={item.id} arr={equipment} setArr={setEquipment}></EquipmentServices>
              ))}
            </div>
          )}
          {!activeBlock34 && (
            <div className="body">
              {arrRoomServices.map((item) => (
                <EquipmentServices item={item} {...item} key={item.id} arr={services} setArr={setServices}></EquipmentServices>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
