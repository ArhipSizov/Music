import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import "./App.scss";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Loading from "../Pages/Loading/Loading";
import Search from "../Pages/Search/Search";
import Footer from "../Components/Footer/Footer";
import Profile from "../Pages/Profile/Profile";
import Privacy from "../Pages/Privacy/Privacy";
import Help from "../Pages/Help/Help"
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
    return <Loading />;
  }
  return (
    <div className="all">
      <Routes>
        <Route path="/register1" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Search />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/profile/help" element={<Help />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNavFooter && (<Footer />)}
    </div>
  );
}

export default App;
