import "./Filter.scss";
import { useNavigate } from "react-router-dom";

export default function Filter() {
    const navigate = useNavigate();
  return (
    <div className="filter">
      <div className="nav">
          <img onClick={() => navigate("/")} src="backAlt.svg" alt="" />
        <p>Фильтры</p>
        <img src="/trash.svg" alt="" />
      </div>
      <div className="no_nav">
        <div className="filter_block">
            <p>Выбор площадки</p>
            <div>Репетиционная точка</div>
            <div>Студия звукозаписи</div>
        </div>
        <div className="filter_block">
            <p>Сортировка</p>
            <div>Популярные</div>
            <div>Ближайшие</div>
            <div>Сначала дешевые</div>
            <div>Сначала дорогие</div>
        </div>
        <div className="filter_block">
            <p>Услуги</p>
            <div>Репетиция</div>
            <div>Звукозапись</div>
            <div>Сведение</div>
            <div>Мастеринг</div>
            <div>Аранжировка</div>
            <div>Озвучивание</div>
            <div>Песня “под ключ”</div>
            <div>Оцифровка</div>
            <div>Реставрация звука</div>
        </div>
        <div className="filter_block">
            <p>Удобства</p>
            <div>Wi-Fi</div>
            <div>Парковка</div>
            <div>Просторный зал</div>
            <div>Кондиционер</div>
            <div>Чай/кофе</div>
            <div>Зона отдыха</div>
            <div>Туалет</div>
            <div>Курилка</div>
            <div>Отдельный вход</div>
            <div>Аренда оборудования</div>
        </div>
        <div className="filter_block_cost">
            <h6>Цена</h6>
            <div>
                <p>От</p>
                <input placeholder="15" type="text" />
                <p>до</p>
                <input placeholder="255" type="text" />
                <p>р.</p>
            </div>
        </div>
        <div className="button">Найти</div>
      </div>
    </div>
  );
}
