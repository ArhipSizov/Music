import { useState } from "react";

import FooterBlock from "../FooterBlock/FooterBlock";
import FooterBlockArr from "./FooterBlock.json";

import "./Footer.scss";

export default function Footer() {
  const [footerArr] = useState(FooterBlockArr);
  
  return (
    <div className="footer">
      {footerArr.map((item) => (
        <FooterBlock {...item} key={item.id} />
      ))}
    </div>
  );
}
