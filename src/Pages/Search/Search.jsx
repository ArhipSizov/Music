import "./Search.scss";
import MiniBlock from "../../Components/MiniBlock/MiniBlock";
import arrCompanies from "../../../companies.json";
import { useState } from "react";

export default function Search() {
  const companies = Object.values(arrCompanies);

  return (
    <div className="search">
      <div className="nav">
        <img src="/Search.svg" alt="" />
        <input placeholder="Поиск" type="text" />
        <img src="/filter.svg" alt="" />
      </div>{" "}
      {companies.map((item) => (
        <MiniBlock item={item} {...item} key={item.id}></MiniBlock>
      ))}
      <a href="https://yandex.ru/maps/?um=constructor%3Af2f5caf6448b1ab3548e44bc551bdf5f59dbf866488697858b3059f82f0bca7d&source=constructorLink">
        <div className="map">
          <img src="/map.svg" alt="" />
          <p>На карте</p>
        </div>
      </a>
    </div>
  );
}
