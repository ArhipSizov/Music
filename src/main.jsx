import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import "./Style/index.scss";
import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { Provider } from "react-redux";
import store from "./Services/store";
import firebase from "firebase/compat/app";

firebase.initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>{" "}
  </React.StrictMode>
);
