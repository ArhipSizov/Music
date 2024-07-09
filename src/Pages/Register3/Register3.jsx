import "./Register3.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useSelector } from "react-redux";

export default function Register3(emailTry) {
  const [pasvord, setPasvord] = useState("");
  const [type, setType] = useState("true");
  const [input1, setInput1] = useState("false");
  const [input2, setInput2] = useState("false");
  const [input3, setInput3] = useState("false");
  const email = useSelector((state) => state);

  function getRegisterData(event) {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pasvord)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: null,
        })
          .then(() => {
            navigate("/");
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    const passLenght = pasvord.match(/[a-z0-9A-Z]/g);
    if (pasvord.length < 8) {
      setInput1("false");
    } else {
      setInput1("true");
    }
    if (pasvord.match(/[A-Z]/g) == null || pasvord.match(/[a-z]/g) == null) {
      setInput2("false");
    } else {
      setInput2("true");
    }
    if (pasvord.length !== 0) {
      if (passLenght.length !== pasvord.length) {
        setInput3("true");
      }
    } else {
      setInput3("false");
    }
  }, [pasvord]);
  return (
    <div className="register3">
      <div className="hr_all">
        <NavLink to="/register1">
          <img src="/back.svg" alt="" />
        </NavLink>
        <div className="hr_div">
          <hr className="hr_on" />
          <hr className="hr_on" />
          <hr className="hr_on" />
        </div>
      </div>
      <div className="register_all">
        <p className="name">Придумайте пароль</p>
        <p className="question">Придумайте пароль для входа в приложение</p>
        <div className="input_all">
          <img className="img" src="/password.svg" alt="" />
          <input
            onChange={(e) => setPasvord(e.target.value)}
            value={pasvord}
            className="input"
            type={type ? "password" : "text"}
            placeholder="пароль"
          />
          <img
          className="eye"
            onClick={() => setType(!type)}
            src={type ? "/eye.svg" : "/eye_open.svg"}
            alt=""
          />
        </div>
        <div className="params">
          <p className={input1}>Не менее 9 символов</p>
          <p className={input2}>Строчные и заглавные буквы (A-z)</p>
          <p className={input3}>Цифры и спецсимволы (#, &, ! и т. п.)</p>
        </div>
        <NavLink to="/registerfinal">
          <div className="but">Подтвердить</div>
        </NavLink>
      </div>
    </div>
  );
}
