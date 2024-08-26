import "./Messages.scss";
import MassageComponent from "../../Components/MassageComponent/MassageComponent";

import { collection, setDoc, getDocs, doc } from "firebase/firestore";

import { db } from "../../main";

import { useState } from "react";

export default function Messages() {
  const [coment, setComent] = useState("");
  const [show, setShow] = useState(false);
  const [dbArr, setDbArr] = useState([]);

  async function addDocFunction() {
    if (coment !== "") {
      const now = new Date();
      const num = String(dbArr.length);
      const time = now.getHours() + ":" + now.getMinutes();
      try {
        const docRef = await setDoc(doc(db, "coments", num), {
          coment: coment,
          time: time,
        });
        location.reload();
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function getDocFunction() {
    const querySnapshot = await getDocs(collection(db, "coments"));
    querySnapshot.forEach((doc) => {
      let newArr = dbArr;
      newArr.push(doc.data());
      setDbArr(newArr);
    });
    setShow(true);
  }

  if (dbArr.length == 0) {
    getDocFunction();
  }

  return (
    <div className="messages">
      <div className="nav">
        <h1>Сообщения</h1>
      </div>
      <div className="messages_footer">
        <textarea
          placeholder="Сообщение"
          onChange={(event) => setComent(event.target.value)}
          name="comment"
          cols="40"
          rows="3"
        ></textarea>
        <img onClick={() => addDocFunction()} src="/send.svg" alt="" />
      </div>
      {show &&
        dbArr.map((item) => <MassageComponent {...item} key={item.id} />)}
    </div>
  );
}
