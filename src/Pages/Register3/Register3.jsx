import "./Register3.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useSelector } from "react-redux";
import firebaseConfig from "../../../firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default function Register3(emailTry) {
  const navigate = useNavigate();
  const [pasvord, setPasvord] = useState("");
  const [type, setType] = useState("true");
  const [input1, setInput1] = useState("false");
  const [input2, setInput2] = useState("false");
  const [input3, setInput3] = useState("false");
  const [but, setBut] = useState("none");
  const [butFalse, setButFalse] = useState("butFalse");
  const [help, setHelp] = useState(0);
  const [email, setEmail] = useState();

  const emailArr = useSelector((state) => state.email.email);

  emailArr.forEach((element) => {
    if (help == 0) {
      setHelp(element.email);
      setEmail(element.email);
    }
  });

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database();
  async function addUser(userData) {
    const ref = db.ref("users").push();
    const newKey = ref.key;
    const dataWithKey = {
      ...userData,
      key: newKey,
      email: email,
      password: pasvord,
      name: "Аноним",
      number: "нету",
    };
    await ref.set(dataWithKey);
    userDB(newKey);
  }

  async function userDB(newKey) {
    const onjectUser = {
      key: newKey,
      email: email,
    };
    let json = JSON.stringify(onjectUser);
  }

  function getRegisterData(event) {
      event.preventDefault();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pasvord)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: null,
          })
            .then(() => {
              navigate("/profile");
            })
        })
    addUser();
  }

  useEffect(() => {
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

    if (input1 == "none" && input2 == "none" && input3 == "none") {
      setBut("but")
      setButFalse("none")
    }else{
      setBut("none")
      setButFalse("butFalse")
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
        </div>
      </div>
      <div className="register_all">
        <form onSubmit={getRegisterData}>
          <p className="name">Придумайте пароль</p>
          <p className="question">Придумайте пароль для входа в приложение</p>
          <div className="input_all">
            <img className="img" src="/password.svg" alt="" />

            <input
              required
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
            <p className={input2}>Строчные и заглавные буквы</p>
            <p className={input3}>Цифры и спецсимволы (#, &, ! и т. п.)</p>
          </div>
          <input className={but} type="submit" value="Подтвердить" />
          <div className={butFalse}>Подтвердить</div>
        </form>
      </div>
    </div>
  );
}
