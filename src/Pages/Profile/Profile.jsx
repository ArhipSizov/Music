import "./Profile.scss";
import { useEffect, useState } from "react";
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
      <div onClick={signOutUser}>
        <p>{user.email}</p>
        <p>Выйти</p>
      </div>
    </div>
  );
}
