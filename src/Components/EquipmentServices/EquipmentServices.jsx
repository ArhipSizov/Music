import "./EquipmentServices.scss";
import { useEffect, useState } from "react";

export default function EquipmentServices({ name, cost, arr, setArr }) {
  const [classBlock, setClassBlock] = useState("equipment_services");

  useEffect(() => {
    arr.forEach(function (item) {
      if (item  == name) {
        setClassBlock("equipment_services equipment_services_active")
      }
    });
  }, []);

  function functionName() {
    let newArr = arr;

    if (classBlock == "equipment_services") {
      setClassBlock("equipment_services equipment_services_active");
      newArr.push(name);
    } else {
      setClassBlock("equipment_services");
      newArr = newArr.filter((newArr) => newArr !== name);
    }

    setArr(newArr);

    console.log(newArr);
  }
  return (
    <div className={classBlock} onClick={() => functionName()}>
      <p>{name}</p>
      <p>{cost} p.</p>
    </div>
  );
}
