import "./BookingTimeComponent.scss";

export default function BookingTimeComponent({item}) {
  return (
    <div className="booking_time_component">
      <p>{item}:00</p>
    </div>
  );
}