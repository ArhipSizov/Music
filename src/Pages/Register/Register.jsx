import "./Register.scss";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div>
        <img src="/back.svg" alt="" />
        <div className="hr">
          <hr />
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
        <div className="but">Регистрация</div>
        <p className="texst_link"> Регистрируясь, вы соглашаетесь с нашими
          <NavLink className="link" to=""> Условиями использования </NavLink>
          и даете согласие на обработку персональных данных
        </p>
      </div>
    </div>
  );
}
