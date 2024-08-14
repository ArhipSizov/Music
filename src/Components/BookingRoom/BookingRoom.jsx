import "./BookingRoom.scss";

export default function BookingRoom({item}) {
  return (
    <div className="booking_room">
      <img className="photo" src={item.photo} alt="" />
      <p>{item.name}</p>
      <div>
        <img src="/room_company.svg" alt="" />
        <p>{item.square} м2</p>
      </div>
    </div>
  );
}