import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import "./App.scss";
import Error from "../Pages/Error/Error";
import Register1 from "../Pages/Register1/Register1";
import Register3 from "../Pages/Register3/Register3";
import RegisterFinal from "../Pages/RegisterFinal/RegisterFinal";
import Recovery1 from "../Pages/Recovery1/Recovery1";
import Recovery2 from "../Pages/Recovery2/Recovery2";
import Recovery3 from "../Pages/Recovery3/Recovery3";
import RecoveryFinal from "../Pages/RecoveryFinal/RecoveryFinal";
import Login from "../Pages/Login/Login";
import Loading from "../Pages/Loading/Loading";
import Search from "../Pages/Search/Search";
import Footer from "../Components/Footer/Footer";
import Profile from "../Pages/Profile/Profile";
import Privacy from "../Pages/Privacy/Privacy";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  const auth = getAuth();
  const navigate = useNavigate();

  const [showNavFooter, setShowNavFooter] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setShowNavFooter(false);
        navigate("/loading");
        setUser({
          email: null,
          displayName: null,
        });
        return;
      } else {
        setShowNavFooter(true);
      }
      setUser({
        displayName: currentUser.displayName,
        email: currentUser.email,
      });
    });
  }, []);

  if (!user) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="all">
      <Routes>
        <Route path="/register1" element={<Register1 />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/registerfinal" element={<RegisterFinal />} />
        <Route path="/recovery1" element={<Recovery1 />} />
        <Route path="/recovery2" element={<Recovery2 />} />
        <Route path="/recovery3" element={<Recovery3 />} />
        <Route path="/recoveryfinal" element={<RecoveryFinal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Search />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNavFooter && (<Footer />)}
    </div>
  );
}

export default App;
