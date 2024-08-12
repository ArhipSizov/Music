import "./FullBlock.scss";

export default function FullBlock({ item, setShowBlock }) {
  return (
    <div className="full_block">
      <div className="button">
        Заказать
      </div>
      <div className="nav">
        <img onClick={() => setShowBlock(false)} src="/backAlt.svg" alt="" />
      </div>
      <img className="photo" src={item.photo} alt="" />
      <div className="body">
        <div className="top_information">
          <img className="logo_img" src={item.logo} alt="" />
          <div className="top_information_no_img">
            <p className="name">{item.name}</p>
            <p>0 отзывов</p>
            <p>{item.area}</p>
            <div>
              <p className="p_alt">4,8</p>
              <img src="star_full.svg" alt="" />
            </div>
            <p>Площадь: {item.square}м2</p>
            <div>
              <p>0</p>
              <img src="/heart.svg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2>Описание</h2>
          <p>{item.description}</p>
        </div>
        <div>
          <h2>Услуги</h2>
          <div className="list">
            {item.services.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <h2>Удобства</h2>
          <div className="list">
            {item.facilities.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <h2>Время работы</h2>
          <p>{item.time_days}</p>
          <p>{item.time_hours}</p>
        </div>
        <div>
          <h2>Контакты</h2>
          <div className="list">
            <p>{item.number}</p>
          </div>
          <p>{item.email}</p>
        </div>
        <div>
          <h2>Расположение</h2>
          <p>{item.location}</p>
        </div>
        <a href="https://yandex.ru/maps/?um=constructor%3Af2f5caf6448b1ab3548e44bc551bdf5f59dbf866488697858b3059f82f0bca7d&source=constructorLink">
          <div>
            <img className="img_map" src={item.image_map} alt="" />
            <div className="but_map">
              <p>Посмотреть на карте</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
