import { NavLink, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import "./App.scss";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Loading from "../Pages/Loading/Loading";
import Search from "../Pages/Search/Search";
import Recovery from "../Pages/Recovery/Recovery";

function App() {
  

  return (
    <div className="all">
      <Routes>
      <Route path="/register" element={<Register/>}/>
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