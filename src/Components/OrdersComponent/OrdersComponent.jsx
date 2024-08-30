import "./OrdersComponent.scss";

export default function OrdersComponent({
  cost,
  name,
  room,
  area,
  date,
  logo,
  number,
  time,
}) {
  return (
    <div className="orders_component">
      <div className="orders_nav">
        <img src={logo} alt="" />
        <div>
          <p className="name">{name}</p>
          <p>{area}</p>
        </div>
      </div>
      <div className="orders_settings">
        <div>
          {date.map((item) => (
            <p>{item}, </p>
          ))}
          <p>числа</p>
        </div>
        <p>{cost} р.</p>
        <div>
          {time.map((item) => (
            <p>{item}:00, </p>
          ))}
        </div>
        <p>{room}</p>
      </div>
      <p className="number">Связь: {number}</p>
    </div>
  );
}
