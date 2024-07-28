import "./MiniBlock.scss";

export default function MiniBlock() {
  return (
    <div className="mini_block">
      <div className="top">
        <img className="logo" src="/logo_company.png" alt="" />
        <div className="no_logo">
          <div className="box1">
            <p className="name">13studio</p>
            <img src="/heart_empty.svg" alt="" />
          </div>
          <div className="box2">
            <img src="/point_company.svg" alt="" />
            <p>ул. Платонова, 31б-13</p>
          </div>
          <div className="box3_4">
            <div className="box3">
              <img src="/star_company.svg" alt="" />
              <p>4,8</p>
            </div>
            <div className="box4">
              <img src="/room_company.svg" alt="" />
              <p>30 м2</p>
            </div>
          </div>
        </div>
      </div>
      <p className="title">
        Звукозапись, сведение, мастеринг, аранжировка, озвучивание
      </p>
      <div className="bottom">
        <p>Звукозапись</p>
        <p className="cost_company">от 25 <p>руб/час</p></p>
      </div>
    </div>
  );
}
