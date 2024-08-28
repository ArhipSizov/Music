import { NavLink } from 'react-router-dom';

import "./FooterBlock.scss";

export default function FooterBlock({img, text, link, clas, img_active, clas_active}) {
  return (
    <NavLink to={link} className="footerBlock">
      <img className={clas_active} src={img_active} alt="" />
      <img className={clas} src={img} alt="" />
      <p className="text">{text}</p>
    </NavLink>
  );
}
