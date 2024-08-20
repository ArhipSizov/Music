import "./Orders.scss";
import { useState } from "react";
import { database } from "../../Services/store/index";
import { useSelector } from "react-redux";

import OrdersComponent from "../../Components/OrdersComponent/OrdersComponent";

export default function Orders() {
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("");

  const [key, setKey] = useState("");
  const [rooms, setRooms] = useState([]);

  const emailArr = useSelector((state) => state.email.email);
  if (key == "") {
    emailArr.forEach((element) => {
      setKey(element.key);
      if (element.rooms !== undefined) {
        setRooms(element.rooms);
      }
    });
  }
  console.log(rooms);
  function showOrderFunction(num) {
    if (num == 1) {
      setActive1("active");
      setActive2("");
    } else {
      setActive1("");
      setActive2("active");
    }
  }
  return (
    <div className="orders">
      <div className="nav">
        <h1>Заказы</h1>
        <div className="choose_orders">
          <p className={active1} onClick={() => showOrderFunction(1)}>
            Планируемые
          </p>
          <p className={active2} onClick={() => showOrderFunction(2)}>
            Прошедшие
          </p>
        </div>
      </div>
      <div className="OrdersComponent_all">
        {Object.values(rooms).map((item) => (
          <OrdersComponent
            item={item}
            {...item}
            key={item.number}
          ></OrdersComponent>
        ))}
      </div>
    </div>
  );
}
