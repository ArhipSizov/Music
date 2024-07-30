import "./MiniBlock.scss";
import { useState } from "react";
import FullBlock from "../FullBlock/FullBlock";

export default function MiniBlock({
  name,
  logo,
  location,
  square,
  services,
  cost,
  item,
}) {
  const [showBlock, setShowBlock] = useState(false);
  return (
    <div className="mini_block">
      {showBlock && (
        <div className="full_block_all">
          <FullBlock item={item} setShowBlock={setShowBlock} />
        </div>
      )}
      <div className="mini_block_2" onClick={() => setShowBlock(true)}>
        <div className="top">
          <img className="logo_img" src={logo} alt="" />
          <div className="no_logo">
            <div className="box1">
              <p className="name">{name}</p>
              <img src="/heart_empty.svg" alt="" />
            </div>
            <div className="box2">
              <img src="/point_company.svg" alt="" />
              <p>{location}</p>
            </div>
            <div className="box3_4">
              <div className="box3">
                <img src="/star_company.svg" alt="" />
                <p>4,8</p>
              </div>
              <div className="box4">
                <img src="/room_company.svg" alt="" />
                <p>{square} м2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          {services.map((item) => (
            <p>{item}, </p>
          ))}
        </div>
        <div className="bottom">
          <p>Звукозапись</p>
          <p className="cost_company">
            от {cost} <p>руб/час</p>
          </p>
        </div>
      </div>
    </div>
  );
}
