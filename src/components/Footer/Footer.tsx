import React from "react";
import "./Footer.sass";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h1 onClick={() => console.log("s")}>Eryk Ueberhan</h1>
    </div>
  );
};

export default Footer;
