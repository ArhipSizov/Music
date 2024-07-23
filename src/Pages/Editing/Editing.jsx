import "./Editing.scss";
import { NavLink } from "react-router-dom";

export default function Editing() {
  return (
    <div className="editing">
      <NavLink className="div" to="/profile">
        <img src="/backAlt.svg" alt="" />
        <h1>Редактирование профиля</h1>
      </NavLink>
      <form>
        <input type="text" placeholder="Имя"/>
        <input type="submit" value="Подтвердить" />
      </form>
    </div>
  );
}
