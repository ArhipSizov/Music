import "./Register1.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser } from "../../store/Slice";

export default function Register1() {
  if (window.location.href.indexOf("reload")==-1) {
    window.location.replace(window.location.href+"?reload");
}


  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const addTask = () => dispatch(addUser(email));
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
      <div className="register_all">
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
        <NavLink to="/register3"  onClick={addTask}>
          <div className="but">Регистрация</div>
        </NavLink>
        <p className="texst_link">
          {" "}
          Регистрируясь, вы соглашаетесь с нашими
          <NavLink className="link" to="">
            {" "}
            Условиями использования{" "}
          </NavLink>
          и даете согласие на обработку персональных данных
        </p>
      </div>
    </div>
  );
}
