import "./Recovery1.scss";
import { NavLink } from "react-router-dom";

export default function Recovery1() {
  return (
    <div className="register1">
      <div className="hr_all">
        <NavLink to="/login">
          <img src="/back.svg" alt="" />
        </NavLink>
        <div className="hr_div">
          <hr className="hr_on" />
          <hr />
          <hr />
        </div>
      </div>
      <div className="register_all">
        <p className="name">Регистрация</p>
        <p className="question">Введите e-mail</p>
        <div className="input_all">
          <img className="img" src="/e_mail.svg" alt="" />
          <input className="input" type="text" placeholder="e-mail" />
        </div>
        <NavLink to="/register2">
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
