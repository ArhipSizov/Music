import "./Settings.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Settings() {
  const [showText1, setShowText1] = useState("none");
  const [showText2, setShowText2] = useState("none");
  const [showText3, setShowText3] = useState("none");
  const [showImg1, setShowImg1] = useState("");
  const [showImg2, setShowImg2] = useState("");
  const [showImg3, setShowImg3] = useState("");

  function setShowText(showText, setShowText, setShowImg) {
    if (showText == "none") {
      setShowText("");
      setShowImg("img_on");
    } else {
      setShowText("none");
      setShowImg("");
    }
  }
  return (
    <div className="settings">
      <NavLink className="div" to="/profile">
        <img src="/backAlt.svg" alt="" />
        <h1>Настройки профиля</h1>
      </NavLink>
      <div
        onClick={() => setShowText(showText1, setShowText1, setShowImg1)}
        className="more"
      >
        <p>Безопасность</p>
        <h3 className={showText1}>
          Ваша безопасность очень важна для нас. О том как мы её сохраняем вы
          можете прочитать <NavLink to="/privacy">тут</NavLink>
        </h3>
        <img className={showImg1} src="/backAlt.svg" alt="" />
      </div>
      <div
        onClick={() => setShowText(showText2, setShowText2, setShowImg2)}
        className="more"
      >
        <p>Политика конфиденциальности</p>
        <h3 className={showText2}>
          Мы собираем некоторые ваши данные, не разглашая их третьим лицам.
          Подробнее можете узнать <NavLink to="/privacy">тут</NavLink>
        </h3>
        <img className={showImg2} src="/backAlt.svg" alt="" />
      </div>
      <div
        onClick={() => setShowText(showText3, setShowText3, setShowImg3)}
        className="more"
      >
        <p>О приложении</p>
        <h3 className={showText3}>
          Это приложение предостовляет возможность связыватся с компаниями, за
          деятельность которых мы не несём ответственности. Подробнее можете
          узнать <NavLink to="/privacy">тут</NavLink>
        </h3>
        <img className={showImg3} src="/backAlt.svg" alt="" />
      </div>
    </div>
  );
}
