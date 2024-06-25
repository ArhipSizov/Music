import "./Login.scss";
import { NavLink } from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
      <img className="logo" src="/logo.svg" alt="" />
      <p className="hello">Добро пожаловать!</p>
      <p className="login_text">Введите свои данные для входа в приложение</p>
      <div className="input_all">
        <img className="img" src="/login.svg" alt="" />
        <input className="input" type="text" placeholder="Телефон" />
      </div>
      <div className="input_all">
        <img className="img" src="/password.svg" alt="" />
        <input className="input" type="text" placeholder="Пароль"/>
      </div>
      <NavLink className="recovery" to="/recovery">Забыли пароль?</NavLink>
      <div className="login_but">
        <p>Войти</p>
      </div>
      <NavLink className="register_but" to="/register1">Регистрация</NavLink>
    </div>
  );
}
