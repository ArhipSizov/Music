import "./Filter.scss";
import { useState } from "react";
import { useEffect } from "react";

export default function Filter({
  setShowFilter,
  services,
  setServices,
  facilities,
  setFacilities,
  setMinCost,
  setMaxCost,
}) {
  const [rehearsal, setRehearsal] = useState("not_active");
  const [recording, setRecording] = useState("not_active");
  const [mixing, setMixing] = useState("not_active");
  const [mastering, setMastering] = useState("not_active");
  const [arrangement, setArrangement] = useState("not_active");
  const [voice, setVoice] = useState("not_active");
  const [song, setSong] = useState("not_active");
  const [digitization, setDigitization] = useState("not_active");
  const [restoration, setRestoration] = useState("not_active");

  const [Wi_Fi, setWi_Fi] = useState("not_active");
  const [parking, setParking] = useState("not_active");
  const [air, setAir] = useState("not_active");
  const [hall, setHall] = useState("not_active");
  const [tea, setTea] = useState("not_active");
  const [rest, setRest] = useState("not_active");
  const [toilet, setToilet] = useState("not_active");
  const [smoking, setSmoking] = useState("not_active");
  const [entrance, setEntrance] = useState("not_active");
  const [equipment, setEquipment] = useState("not_active");

  function addFilterServices(params, setParams, nameParams) {
    let newArr = services;
    if (params == "not_active") {
      setParams("active");
      newArr.push(nameParams);
    } else {
      setParams("not_active");
      newArr = newArr.filter((newArr) => newArr !== nameParams);
    }
    setServices(newArr);
  }
  useEffect(() => {
    setServices([]);
  }, []);

  function addFilterFacilities(params, setParams, nameParams) {
    let newArr = facilities;
    if (params == "not_active") {
      setParams("active");
      newArr.push(nameParams);
    } else {
      setParams("not_active");
      newArr = newArr.filter((newArr) => newArr !== nameParams);
    }
    setFacilities(newArr);
  }

  useEffect(() => {
    setServices([]);
    setFacilities([]);
    setMinCost(20);
    setMaxCost(40);
  }, []);

  return (
    <div className="filter">
      <div onClick={() => setShowFilter(false)} className="button">
        Найти
      </div>
      <div className="nav">
        <img onClick={() => setShowFilter(false)} src="backAlt.svg" alt="" />
        <p>Фильтры</p>
        <img src="" alt="" />
      </div>
      <div className="no_nav">
        <div className="filter_block_cost">
          <h6>Цена</h6>
          <div>
            <p>От</p>
            <input
              onChange={(event) => setMinCost(event.target.value)}
              placeholder="20"
              type="text"
            />
            <p>до</p>
            <input
              onChange={(event) => setMaxCost(event.target.value)}
              placeholder="40"
              type="text"
            />
            <p>р.</p>
          </div>
        </div>
        <div className="filter_block">
          <p>Услуги</p>
          <div
            className={rehearsal}
            onClick={() =>
              addFilterServices(rehearsal, setRehearsal, "Репетиция")
            }
          >
            Репетиция
          </div>
          <div
            className={recording}
            onClick={() =>
              addFilterServices(recording, setRecording, "Звукозапись")
            }
          >
            Звукозапись
          </div>
          <div
            className={mixing}
            onClick={() => addFilterServices(mixing, setMixing, "Сведение")}
          >
            Сведение
          </div>
          <div
            className={mastering}
            onClick={() =>
              addFilterServices(mastering, setMastering, "Мастеринг")
            }
          >
            Мастеринг
          </div>
          <div
            className={arrangement}
            onClick={() =>
              addFilterServices(arrangement, setArrangement, "Аранжировка")
            }
          >
            Аранжировка
          </div>
          <div
            className={voice}
            onClick={() => addFilterServices(voice, setVoice, "Озвучивание")}
          >
            Озвучивание
          </div>
          <div
            className={song}
            onClick={() => addFilterServices(song, setSong, "Песня “под ключ”")}
          >
            Песня “под ключ”
          </div>
          <div
            className={digitization}
            onClick={() =>
              addFilterServices(digitization, setDigitization, "Оцифровка")
            }
          >
            Оцифровка
          </div>
          <div
            className={restoration}
            onClick={() =>
              addFilterServices(
                restoration,
                setRestoration,
                "Реставрация звука"
              )
            }
          >
            Реставрация звука
          </div>
        </div>
        <div className="filter_block">
          <p>Удобства</p>
          <div
            className={Wi_Fi}
            onClick={() => addFilterFacilities(Wi_Fi, setWi_Fi, "Wi-Fi")}
          >
            Wi-Fi
          </div>
          <div
            className={parking}
            onClick={() => addFilterFacilities(parking, setParking, "Парковка")}
          >
            Парковка
          </div>
          <div
            className={hall}
            onClick={() => addFilterFacilities(hall, setHall, "hall")}
          >
            Просторный зал
          </div>
          <div
            className={air}
            onClick={() => addFilterFacilities(air, setAir, "Кондиционер")}
          >
            Кондиционер
          </div>
          <div
            className={tea}
            onClick={() => addFilterFacilities(tea, setTea, "Чай/кофе")}
          >
            Чай/кофе
          </div>
          <div
            className={rest}
            onClick={() => addFilterFacilities(rest, setRest, "Зона отдыха")}
          >
            Зона отдыха
          </div>
          <div
            className={toilet}
            onClick={() => addFilterFacilities(toilet, setToilet, "Туалет")}
          >
            Туалет
          </div>
          <div
            className={smoking}
            onClick={() => addFilterFacilities(smoking, setSmoking, "Курилка")}
          >
            Курилка
          </div>
          <div
            className={entrance}
            onClick={() =>
              addFilterFacilities(entrance, setEntrance, "Отдельный вход")
            }
          >
            Отдельный вход
          </div>
          <div
            className={equipment}
            onClick={() =>
              addFilterFacilities(
                equipment,
                setEquipment,
                "Аренда оборудования"
              )
            }
          >
            Аренда оборудования
          </div>
        </div>
      </div>
    </div>
  );
}
