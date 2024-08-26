import "./MassageComponent.scss";

export default function MassageComponent({coment, time}) {
  return (
    <div className="massage_component">
      <p>{coment}</p>
      <p className="time">{time}</p>
    </div>
  );
}