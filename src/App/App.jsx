import { NavLink, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import "./App.scss";
import Error from "../Pages/Error/Error";
import Register1 from "../Pages/Register1/Register1";
import Register2 from "../Pages/Register2/Register2";
import Register3 from "../Pages/Register3/Register3";
import RegisterFinal from "../Pages/RegisterFinal/RegisterFinal";
import Login from "../Pages/Login/Login";
import Loading from "../Pages/Loading/Loading";
import Search from "../Pages/Search/Search";
import Recovery from "../Pages/Recovery/Recovery";

function App() {
  

  return (
    <div className="all">
      <Routes>
      <Route path="/register1" element={<Register1/>}/>
      <Route path="/register2" element={<Register2/>}/>
      <Route path="/register3" element={<Register3/>}/>
      <Route path="/registerfinal" element={<RegisterFinal/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/recovery" element={<Recovery/>}/>
      <Route path="/" element={<Loading/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
    </div>

  );
}

export default App;