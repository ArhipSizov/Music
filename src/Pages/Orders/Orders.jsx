import { useState } from "react";
import { useSelector } from "react-redux";

import OrdersComponent from "../../Components/OrdersComponent/OrdersComponent";

import "./Orders.scss";

export default function Orders() {
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("");

  const [showOrder, setShowOrder] = useState(true);

  const [key, setKey] = useState("");
  const [rooms, setRooms] = useState([]);

  const userArr = useSelector((state) => state.user.user);
  if (key == "") {
    userArr.forEach((element) => {
      setKey(element.key);
      if (element.rooms !== undefined) {
        setRooms(element.rooms);
      }
    });
  }

  function showOrderFunction(num) {
    if (num == 1) {
      setActive1("active");
      setActive2("");
      setShowOrder(true)
    } else {
      setActive1("");
      setActive2("active");
      setShowOrder(false)
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
      {showOrder && (
        <div className="OrdersComponent_all">
          {Object.values(rooms).map((item) => (
            <OrdersComponent
              item={item}
              {...item}
              key={item.number}
            ></OrdersComponent>
          ))}
        </div>
      )}
    </div>
  );
}
