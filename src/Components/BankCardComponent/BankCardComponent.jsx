import "./BankCardComponent.scss";

export default function BankCardComponent({ number, date, CVV }) {
  return (
    <div className="bank_card_component">
      <p>{number}</p>
      <div>
        <p>Дата: {date}</p>
        <p>CVV: {CVV}</p>
      </div>
    </div>
  );
}
