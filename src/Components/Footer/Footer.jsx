import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
        <div className="div">
          <img className="img" src="Search.svg" alt="" />
          <p className="text">Поиск</p>
        </div>
        <div className="div">
          <img className="img" src="Orders.svg" alt="" />
          <p className="text">Заказы</p>
        </div>
        <div className="div">
          <img className="img_alt" src="Messages.svg" alt="" />
          <p className="text">Сообщения</p>
        </div>
        <div className="div">
          <img className="img" src="Profile.svg" alt="" />
          <p className="text">Профиль</p>
        </div>
      </div>
  );
}