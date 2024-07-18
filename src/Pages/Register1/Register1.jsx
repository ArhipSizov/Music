import "./Register1.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addUser } from "../../Services/store/Slice";

export default function Register1() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const addTask = () => dispatch(addUser(email));

  function name() {
    navigate("/register3");
    addTask();
  }
  return (
    <div className="register1">
      <div className="hr_all">
        <NavLink to="/login">
          <img src="/back.svg" alt="" />
        </NavLink>
        <div className="hr_div">
          <hr className="hr_on" />
          <hr />
        </div>
      </div>
      <form onSubmit={name} className="register_all">
        <p className="name">Регистрация</p>
        <p className="question">Введите e-mail</p>
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
        <input className="but" type="submit" value="Подтвердить"/>
        <p className="texst_link">
          {" "}
          Регистрируясь, вы соглашаетесь с нашими
          <NavLink className="link" to="/privacy">
            {" "}
            Условиями использования{" "}
          </NavLink>
          и даете согласие на обработку персональных данных
        </p>
      </form>
    </div>
  );
}
