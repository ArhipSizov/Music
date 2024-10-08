import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";
import { addUser } from "../Services/store/Slice";

import {
  Error,
  Register,
  Recovery,
  Login,
  Loading,
  Search,
  Footer,
  Profile,
  Privacy,
  Help,
  Editing,
  EditingPassword,
  Settings,
  Orders,
  Messages,
  Favorites,
  BankCard,
} from "./index"

import "./App.scss";

function App() {
  const [user, setUser] = useState({});
  const [showNavFooter, setShowNavFooter] = useState(false);
  const [email, setIEmail] = useState("");
  const [classAll, setClassAll] = useState("lite");

  const auth = getAuth();
  const navigate = useNavigate();

  let data = null;
  const database = getDatabase();
  const starCountRef = ref(database);
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();
  });

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setShowNavFooter(false);
        setUser({
          email: null,
          displayName: null,
        });
        navigate("/loading");
        return;
      }
      setShowNavFooter(true);
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
            setIEmail(item.email)
            dispatch(
              addUser({
                email: item.email,
                pasvord: item.password,
                name: item.name,
                number: item.number,
                key: item.key,
                favorites: item.favorites,
                card: item.card,
                rooms: item.rooms,
              })
            );
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
