import "./MiniBlock.scss";
import { useState, useEffect } from "react";
import FullBlock from "../FullBlock/FullBlock";
import { ref, update } from "firebase/database";
import { database } from "../../Services/store/index";

export default function MiniBlock({
  name,
  facilities,
  logo,
  location,
  square,
  services,
  cost,
  item,
  input,
  servicesArr,
  showFilter,
  facilitiesArr,
  minCost,
  maxCost,
  favorites,
  setFavorites,
  keyFavorites,
  classBlock,
}) {
  const [showFullBlock, setShowFullBlock] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [heart, setHeart] = useState("/heart_empty.svg");

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
    let help = 0;
    if (name.search(new RegExp1(input)) == 0) {
      if (servicesArr.length == 0) {
        help = help + 1;
      } else {
        let a = 0;
        services.forEach(function (item1) {
          servicesArr.forEach(function (item2) {
            if (item1 !== item2) {
            } else {
              a = a + 1;
              if (a == servicesArr.length) {
                help = help + 1;
              }
            }
          });
        });
      }

      if (facilitiesArr.length == 0) {
        help = help + 1;
      } else {
        let a = 0;
        facilities.forEach(function (item1) {
          facilitiesArr.forEach(function (item2) {
            if (item1 !== item2) {
            } else {
              a = a + 1;
              if (a == facilitiesArr.length) {
                help = help + 1;
              }
            }
          });
        });
      }

      if (+minCost <= cost && cost <= +maxCost) {
        help = help + 1;
      }

      if (help == 3) {
        setShowBlock(true);
      } else {
        setShowBlock(false);
      }
    } else {
      if (input !== undefined) {
        setShowBlock(false);
      }
    }
  }, [input, showFilter]);

  useEffect(() => {
    favorites.forEach(function (item) {
      if (item == name) {
        setHeart("/heart.svg");
      }
      if (classBlock == "favorites") {
        if (item == name) {
          setShowBlock(true);
        }
      }
    });
  }, []);

  function updateDatabase(params) {
    let newArr = [];
    favorites.forEach(function (item) {
      newArr.push(item);
    });
    if (params == "add") {
      newArr.push(name);
    } else {
      newArr = newArr.filter((newArr) => newArr !== name);
    }
    setFavorites(newArr);
    const updates = {};
    const postData = newArr;
    updates["/users/" + keyFavorites + "/favorites/"] = postData;
    return update(ref(database), updates);
  }
  function heartFunction() {
    setTimeout(() => {
      setShowFullBlock(false);
    }, 1);
    if (heart == "/heart_empty.svg") {
      setHeart("/heart.svg");
      updateDatabase("add");
    } else {
      setHeart("/heart_empty.svg");
      updateDatabase("delete");
    }
  }
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
                <img onClick={() => heartFunction()} src={heart} alt="" />
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
              <p key={item}>{item}, </p>
            ))}
          </div>
          <div className="bottom">
            <p>Звукозапись</p>
            <p className="cost_company">от {cost}</p>
            <p>руб/час</p>
          </div>
        </div>
      )}
    </div>
  );
}
