import "./Profile.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from "react-redux";

export default function Profile() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  if (email == "") {
    const emailArr = useSelector((state) => state.email.email);
    console.log(emailArr);
    emailArr.forEach((element) => {
      console.log(element);
      setEmail(element.email);
      setName(element.name);
      setNumber(element.number);
    });
  }

  function signOutUser() {
    signOut(auth).then(() => {
      setUser({
        email: null,
      });
      navigate("/loading");
    });
  }
  return (
    <div className="profile">
      <div className="background"></div>
      <img className="user_img" src="/user.png" alt="" />
      <div className="all_profile">
        <div className="change">
          <img src="/settings.svg" alt="" />
          <NavLink to="/editing">
            <img src="/change.svg" alt="" />
          </NavLink>
        </div>
        <div className="profile_data">
          <p className="name">{name}</p>
          <p className="number">{number}</p>
          <p className="email">Z{email}</p>
        </div>
        <div className="options">
          <div>
            <img src="/heart.svg" alt="" />
            <p>Избранное</p>
          </div>
          <div>
            <img src="/star.svg" alt="" />
            <p>Мои отзывы</p>
          </div>
          <div>
            <img src="/card.svg" alt="" />
            <p>Платежные карты</p>
          </div>
          <NavLink className="div" to="help">
            <img src="/question.svg" alt="" />
            <p>Помощь</p>
          </NavLink>
          <div onClick={signOutUser}>
            <img src="/exit.svg" alt="" />
            <p>Выйти из профиля</p>
          </div>
        </div>
      </div>
    </div>
  );
}
