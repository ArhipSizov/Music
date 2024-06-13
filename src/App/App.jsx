import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  useEffect(() => {
    const br1 = document.querySelector(".br1");
    const br2 = document.querySelector(".br2");
    const br3 = document.querySelector(".br3");
    const br4 = document.querySelector(".br4");
    const br5 = document.querySelector(".br5");
    const br6 = document.querySelector(".br6");
    const br7 = document.querySelector(".br7");
    setTimeout(() => {
      br1.className = "br1 anim11";
      br2.className = "br2 anim21";
      br3.className = "br3 anim31";
      br4.className = "br4 anim41";
      br5.className = "br5 anim51";
      br6.className = "br6 anim61";
      br7.className = "br7 anim71";
    }, 400);
    setTimeout(() => {
      br1.className = "br1 anim12";
      br2.className = "br2 anim22";
      br3.className = "br3 anim32";
      br4.className = "br4 anim42";
      br5.className = "br5 anim52";
      br6.className = "br6 anim62";
      br7.className = "br7 anim62";
    }, 800);
    setTimeout(() => {
      br1.className = "br1 anim13";
      br2.className = "br2 anim23";
      br3.className = "br3 anim33";
      br4.className = "br4 anim43";
      br5.className = "br5 anim53";
      br6.className = "br6 anim63";
      br7.className = "br7 anim73";
    }, 1200);
    setTimeout(() => {
      br1.className = "br1 anim14";
      br2.className = "br2 anim24";
      br3.className = "br3 anim34";
      br4.className = "br4 anim44";
      br5.className = "br5 anim54";
      br6.className = "br6 anim64";
      br7.className = "br7 anim74";
    }, 1600);
    setTimeout(() => {
      br1.className = "br1 anim15";
      br2.className = "br2 anim25";
      br3.className = "br3 anim35";
      br4.className = "br4 anim45";
      br5.className = "br5 anim55";
      br6.className = "br6 anim65";
      br7.className = "br7 anim75";
    }, 2000);
    setTimeout(() => {
      br1.className = "br1 anim16";
      br2.className = "br2 anim26";
      br3.className = "br3 anim36";
      br4.className = "br4 anim46";
      br5.className = "br5 anim56";
      br6.className = "br6 anim66";
      br7.className = "br7 anim76";
    }, 2400);
    setTimeout(() => {
      br1.className = "br1 anim17";
      br2.className = "br2 anim27";
      br3.className = "br3 anim37";
      br4.className = "br4 anim47";
      br5.className = "br5 anim57";
      br6.className = "br6 anim67";
      br7.className = "br7 anim77";
    }, 2800);
  }, []);

  return (
    <div className="all">
      <div className="logo_anim">
        <div className="br1"></div>
        <div className="br2"></div>
        <div className="br3"></div>
        <div className="br4"></div>
        <div className="br5"></div>
        <div className="br6"></div>
        <div className="br7"></div>
      </div>
    </div>
  );
}

export default App;
