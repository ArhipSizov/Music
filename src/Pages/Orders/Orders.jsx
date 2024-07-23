import "./Orders.scss";
import { useState } from "react";

export default function Orders() {
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("");
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
    </div>
  );
}
