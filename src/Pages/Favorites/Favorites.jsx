import "./Favorites.scss";
import { NavLink } from "react-router-dom";
import MiniBlock from "../../Components/MiniBlock/MiniBlock";
import arrCompanies from "../../../companies.json";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Favorites() {
    const companies = Object.values(arrCompanies);
    const [favorites, setFavorites] = useState([]);
    const [key, setKey] = useState("");

    const emailArr = useSelector((state) => state.email.email);
    if (key == "") {
      emailArr.forEach((element) => {
        if (element.favorites !== undefined) {
          setFavorites(element.favorites);
        }
        setKey(element.key);
      });
    }
  return (
    <div className="favorites">
      <div className="nav">
        <NavLink to="/profile">
          <img src="/backAlt.svg" alt="" />
          <h1>Избранное</h1>
        </NavLink>
      </div>
      <div>
      {companies.map((item) => (
        <MiniBlock
          item={item}
          {...item}
          key={item.id}
          classBlock="favorites"
          favorites={favorites}
          setFavorites={setFavorites}
          keyFavorites={key}
        ></MiniBlock>
      ))}
      </div>
    </div>
  );
}
