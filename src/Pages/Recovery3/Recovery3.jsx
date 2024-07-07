import "./Recovery3.scss";
import { NavLink } from "react-router-dom";

export default function Recovery3() {
  return (
    <div className="register3">
      <div className="hr_all">
        <NavLink to="/login">
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
          <input className="input" type="text" placeholder="пароль" />
          <img src="/eye.svg" alt="" />
        </div>
        <div className="params">
          <p className="trye">Не менее 9 символов</p>
          <p className="false">Строчные и заглавные буквы (A-z)</p>
          <p className="trye">Цифры и спецсимволы (#, &, ! и т. п.)</p>
        </div>
        <NavLink to="/registerfinal">
          <div className="but">Подтвердить</div>
        </NavLink>
      </div>
    </div>
  );
}
