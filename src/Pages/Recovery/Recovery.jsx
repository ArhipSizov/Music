import "./Recovery.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addUser } from "../../Services/store/Slice";
import { addUserDB } from "../../Services/fbUsers";

import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useSelector } from "react-redux";

export default function Recovery() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pasvord, setPasvord] = useState("");
  const [name, setName] = useState("Аноним");
  const [number, setNumber] = useState("нету");
  const [showRegister1, setShowRegister1] = useState(true);
  const [showRegister2, setShowRegister2] = useState(false);

  const dispatch = useDispatch();

  const addTask = () => dispatch(addUser({ email, pasvord, name, number }));

  const [type, setType] = useState("true");
  const [input1, setInput1] = useState("false");
  const [input2, setInput2] = useState("false");
  const [input3, setInput3] = useState("false");
  const [but, setBut] = useState("none");
  const [butFalse, setButFalse] = useState("butFalse");
  const [help, setHelp] = useState(0);

  const emailArr = useSelector((state) => state.email.email);

  emailArr.forEach((element) => {
    if (help == 0) {
      setHelp(element.email);
      setEmail(element.email);
    }
  });

  const auth = getAuth();

  function conditionPassword() {
    setTimeout(() => {
      const passLenght = pasvord.match(/[a-z0-9A-Z]/g);
      if (pasvord.length < 8) {
        setInput1("false");
      } else {
        setInput1("none");
      }
      if (pasvord.match(/[A-Z]/g) == null || pasvord.match(/[a-z]/g) == null) {
        setInput2("false");
      } else {
        setInput2("none");
      }
      if (pasvord.length !== 0) {
        if (passLenght.length !== pasvord.length) {
          setInput3("none");
        } else {
          setInput3("false");
        }
      } else {
        setInput3("false");
      }
      conditionButton();
    }, 1);
  }
  function conditionButton() {
    if (input1 == "none" && input2 == "none" && input3 == "none") {
      setBut("but");
      setButFalse("none");
    } else {
      setBut("none");
      setButFalse("butFalse");
    }
  }

  function showRegisterFunction() {
    setShowRegister1(false);
    setShowRegister2(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  }
  return (
    <div>
      {showRegister1 && (
        <div className="recovery">
          <div className="hr_all">
            <NavLink to="/login">
              <img src="/back.svg" alt="" />
            </NavLink>
            <div className="hr_div">
              <hr className="hr_on" />
              <hr />
            </div>
          </div>
          <form onSubmit={showRegisterFunction} className="register_all">
            <p className="name">Восстановление пароля</p>
            <p className="question">Введите свой email</p>
            <div className="input_all">
              <img className="img" src="/e_mail.svg" alt="" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input"
                type="email"
                placeholder="e-mail"
                required
              />
            </div>
            <input className="but" type="submit" value="Подтвердить" />
          </form>
        </div>
      )}

      {showRegister2 && (
        <div className="register2">
          <div className="hr_all">
            <NavLink to="/login">
              <img src="/back.svg" alt="" />
            </NavLink>
            <div className="hr_div">
              <hr className="hr_on" />
              <hr className="hr_on" />
            </div>
          </div>
          <div className="register_all">
            <form>
              <p className="name">
                На ваш email успешно отправлено письмо с дальнейшими
                инструкциями для смены пароля
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
