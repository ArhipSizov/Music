import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./MassageComponent.scss";

export default function MassageComponent({ coment, time, email }) {
  const [trueEmail, setTrueEmail] = useState("");
  const [classMassage, setClassMassage] = useState("");
  const [userEmail, setUserEmail] = useState(true);

  const userArr = useSelector((state) => state.user.user);
  
  if (trueEmail == "") {
    userArr.forEach((element) => {
      setTrueEmail(element.email);
    });
  } else if (classMassage == "") {
    if (trueEmail == email) {
      setClassMassage("massage_component");
      setUserEmail(false)
    } else {
      setClassMassage("massage_component_alt");
    }
  }
  return (
    <div className={classMassage}>
      {userEmail && <p className="email">{email}</p>}
      <p>{coment}</p>
      <p className="time">{time}</p>
    </div>
  );
}
