import "./MiniBlock.scss";
import { useState, useEffect } from "react";
import FullBlock from "../FullBlock/FullBlock";

export default function MiniBlock({
  name,
  logo,
  location,
  square,
  services,
  cost,
  item,
  input,
}) {
  const [showFullBlock, setShowFullBlock] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  class RegExp1 extends RegExp {
    constructor(str) {
      super(str);
      this.pattern = str;
    }
    [Symbol.search](str) {
      return str.indexOf(this.pattern);
    }
  }

  useEffect(() => {
    if (name.search(new RegExp1(input)) == 0) {
      setShowBlock(true);
    } else {
      setShowBlock(false);
    }
  }, [input]);

  return (
    <div className="mini_block">
      {showFullBlock && (
        <div className="full_block_all">
          <FullBlock item={item} setShowBlock={setShowFullBlock} />
        </div>
      )}
      {showBlock && (
        <div className="mini_block_2" onClick={() => setShowFullBlock(true)}>
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
      )}
    </div>
  );
}

// const dataArr = Object.values(name);
// console.log(name);
// dataArr.forEach(function (item) {
//   console.log(item.search(input));
//   // Expected output: 41

//   console.log(input[input.search(item)]);
//   // Expected output: "!"

//   console.log(input);
//   if (input[input.search(item)] > 0) {
//     console.log(42334422343243);
//   }
// })
