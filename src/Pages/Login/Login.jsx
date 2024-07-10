import "./Login.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pasvord, setPasvord] = useState("");

  function getLoginData(event) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pasvord)
      .then((user) => {
        navigate("/search");
      })
      .catch((e) => {
        setError(true);
      });
  }

  const [anim, setAnim] = useState("anim");
  useEffect(() => {
    setTimeout(() => {
      setAnim("none");
    }, 1500);
  }, []);
  return (
    <div className="login">
      <div className={anim}></div>
      <img className="logo" src="/logo.svg" alt="" />
      <p className="hello">Добро пожаловать!</p>
      <p className="login_text">Введите свои данные для входа в приложение</p>
      <form className="login_inputs" onSubmit={getLoginData}>
        <div className="input_all">
          <img className="img" src="/login.svg" alt="" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="text"
            placeholder="Телефон"
          />
        </div>
        <div className="input_all">
          <img className="img" src="/password.svg" alt="" />
          <input
            value={pasvord}
            onChange={(e) => setPasvord(e.target.value)}
            className="input"
            type="text"
            placeholder="Пароль"
          />
        </div>

        <NavLink className="recovery" to="/recovery1">
          Забыли пароль?
        </NavLink>
        <input
          type="submit"
          value="Войти"
          className="login_but"
          to="/recovery1"
        />
      </form>
      <NavLink className="register_but" to="/register1">
        Регистрация
      </NavLink>
    </div>
  );
}
