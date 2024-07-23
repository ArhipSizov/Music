import { NavLink, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  child,
  update,
  push,
} from "firebase/database";
import { useDispatch } from "react-redux";
import { addUser } from "../Services/store/Slice";

import "./App.scss";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Loading from "../Pages/Loading/Loading";
import Search from "../Pages/Search/Search";
import Footer from "../Components/Footer/Footer";
import Profile from "../Pages/Profile/Profile";
import Privacy from "../Pages/Privacy/Privacy";
import Help from "../Pages/Help/Help";
import Editing from "../Pages/Editing/Editing";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const navigate = useNavigate();

  const [showNavFooter, setShowNavFooter] = useState(false);

  const [email, setIEmail] = useState("");
  const [key, setIKey] = useState();
  const [pasvord, setPasvord] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  let data = null;
  const database = getDatabase();
  const starCountRef = ref(database);
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();
  });

  const dispatch = useDispatch();
  const addTask = () => dispatch(addUser({ email, pasvord }));

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setShowNavFooter(false);
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

      onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        const dataArr = Object.values(data.users);
        dataArr.forEach(function (item) {
          const dataEmail = item.email;
          if (currentUser.email == dataEmail && email == "") {
            console.log(item);
            setIEmail(item.email);
            setIKey(item.key);
            setPasvord(item.password);
            setName(item.name);
            setName(item.password);
            const email = item.email
            const pasvord = item.password
            const name = item.name
            const number = item.number
            dispatch(addUser({ email, pasvord, name, number }));
          }
        });
      });
    });
    console.log(user);
  }, []);

  if (!email && showNavFooter == true) {
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
        <Route path="/editing" element={<Editing />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/profile/help" element={<Help />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNavFooter && <Footer />}
    </div>
  );
}

export default App;
