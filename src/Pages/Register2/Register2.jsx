import "./Register2.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Register2() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
    console.log("Done!");
  }
  function testJump(x) {
    var ml = ~~x.getAttribute("maxlength");
    if (ml && x.value.length >= ml) {
      do {
        x = x.nextSibling;
      } while (x && !/text/.test(x.type));
      if (x && /text/.test(x.type)) {
        x.focus();
      }
    }
  }
  return (
    <div className="register2">
      <div className="hr_all">
        <NavLink to="/register1">
          <img src="/back.svg" alt="" />
        </NavLink>
        <div className="hr_div">
          <hr className="hr_on" />
          <hr className="hr_on" />
          <hr />
        </div>
      </div>
      <div className="register_all">
        <p className="name">Введите код подтверждения</p>
        <p className="question">
          На номер <p className="number">+375 00 000-00-00</p> отправлен код
          подтверждения. Введите код из смс, чтобы продолжить регистрацию
        </p>
        <div className="input_all">
          <input
            className="input"
            onInput={(e) => testJump(e.target)}
            maxlength="1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            type="text"
          />
          <input
            className="input"
            onInput={(e) => testJump(e.target)}
            maxlength="1"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            type="text"
          />
          <input
            className="input"
            onInput={(e) => testJump(e.target)}
            maxlength="1"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            type="text"
          />
          <input
            className="input"
            onInput={(e) => testJump(e.target)}
            maxlength="1"
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
            type="text"
          />
        </div>
        <NavLink to="/register3">
          <div className="but">Регистрация</div>
        </NavLink>
        <p className="texst_link">Запросить код повторно</p>
      </div>
    </div>
  );
}
