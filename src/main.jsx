import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import "./Style/index.scss";
import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "firebase/compat/app";

firebase.initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
