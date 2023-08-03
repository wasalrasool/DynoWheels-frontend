import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <p>We are working very hard</p>
        <p>Complete Team of profesionals for your Service at all time</p>
        {/* <img src={playStore} alt="playstore" /> */}
        {/* <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>Dyno Wheels.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Dyno Wheels</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a target="_blank" href="https://www.instagram.com/dyno_wheels_official/">Instagram</a>
        {/* <a target="_blank" href="http://youtube.com/6packprogramemr">Youtube</a> */}
        <a target="_blank" href="https://www.instagram.com/dyno_wheels_official/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
