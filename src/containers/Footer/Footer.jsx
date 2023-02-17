import React from "react";
import "./footer.css";
import test from "../../assets/header-bg.jpg";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ background: `url(${test}) no-repeat center center/cover` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <h4 className="footer__logo">FanDomo</h4>
        <span className="footer__copyright">&copy; Fandomo 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
