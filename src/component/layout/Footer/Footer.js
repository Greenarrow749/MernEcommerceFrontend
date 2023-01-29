import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download our application for iOS and Android.</p>
        <img src={playStore} alt="playstore"  />
        <img src={appStore} alt="app-store" />
      </div>
      <div className="midFooter">
        <h1>ECommerce</h1>
        <p>Copyrights 2023 &copy; AshishPrasad</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://twitter.com/ashishpd749">Twitter</a>
        <a href="https://www.instagram.com/_ashish_07._/?next=%2F">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
