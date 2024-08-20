import "./OrdersComponent.scss";

export default function OrdersComponent({ cost, name, room }) {
  return (
    <div className="orders_component">
        <p>Компания: {name}</p>
        <p>Комната: {room}</p>
        <p>Цена: {cost}р.</p>
    </div>
  );
}
