import "./Profile.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Profile() {
  const [user, setUser] = useState();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
        setUser({
          email: null,
          displayName: null,
        });
        return;
      }
      setUser({
        displayName: currentUser.displayName,
        email: currentUser.email,
      });
    });
  }, []);

  function signOutUser() {
    signOut(auth).then(() => {
      setUser({
        email: null,
        displayName: null,
      });
    });
  }

  if (!user) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="profile">
      <div className="background"></div>
      <img className="user_img" src="/user.png" alt="" />
      <div className="all_profile">
        <div className="change">
          <img src="/settings.svg" alt="" />
          <img src="/change.svg" alt="" />
        </div>
        <div className="profile_data">
          <p className="name">{user.displayName}12</p>
          <p className="number">{user.number}12</p>
          <p className="email">{user.email}</p>
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
