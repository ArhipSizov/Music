import "./RegisterFinal.scss";
import { NavLink } from "react-router-dom";

export default function RegisterFinal() {
  return (
    <div className="register_final">
      <img className="img" src="/final.svg" alt="" />
      <p className="h1">Поздравляем!</p>
      <p className="p">Регистрация прошла успешно</p>
      <NavLink to="/search">
          <div className="but">Подтвердить</div>
        </NavLink>
    </div>
  );
}
