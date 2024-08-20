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
import Recovery from "../Pages/Recovery/Recovery";
import Login from "../Pages/Login/Login";
import Loading from "../Pages/Loading/Loading";
import Search from "../Pages/Search/Search";
import Footer from "../Components/Footer/Footer";
import Profile from "../Pages/Profile/Profile";
import Privacy from "../Pages/Privacy/Privacy";
import Help from "../Pages/Help/Help";
import Editing from "../Pages/Editing/Editing";
import EditingPassword from "../Pages/EditingPassword/EditingPassword";
import Settings from "../Pages/Settings/Settings";
import Orders from "../Pages/Orders/Orders";
import Messages from "../Pages/Messages/Messages";
import Favorites from "../Pages/Favorites/Favorites";
import BankCard from "../Pages/BankCard/BankCard";
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
        navigate("/loading")
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
            setIEmail(item.email);
            setIKey(item.key);
            setPasvord(item.password);
            setName(item.name);
            const email = item.email
            const pasvord = item.password
            const name = item.name
            const number = item.number
            const key = item.key
            const favorites = item.favorites
            const card = item.card
            const rooms = item.rooms
            dispatch(addUser({ email, pasvord, name, number, key, favorites, card, rooms }));
          }
        });
      });
    });
  }, []);

  if (!email && showNavFooter == true) {
    return <Loading />;
  }
  return (
    <div className="all">
      <Routes>
        <Route path="/register1" element={<Register />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Search />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="messages" element={<Messages />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/editing" element={<Editing />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/editing_password" element={<EditingPassword />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/profile/help" element={<Help />} />
        <Route path="/bank_card" element={<BankCard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNavFooter && <Footer />}
    </div>
  );
}

export default App;
