import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import wasal from "../../../assets/dynowheels.png"

import MetaData from "../MetaData";


const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/dyno_wheels_official";
  };
  return (
    
    <div className="aboutSection">
     <MetaData title="About -- Dyno Wheels" />
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "17vmax", height: "17vmax", margin: "0vmax 0" }}
              // src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              src={wasal}
              alt="Founder"
            />
            {/* <Typography>Dyno Wheels</Typography> */}
            {/* <Button  onClick={visitInstagram} color="primary"> */}
              
              <a className="insta" target="_blank" href="https://www.instagram.com/dyno_wheels_official/">Visit Instagram</a>
            {/* </Button> */}
            <span>
              We are a complete Team working for you to make user experience fantastic.
               If you have any queries or suggestions email us on
               dyno.wheel.official@gmail.com
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            {/* <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a> */}

            <a href="https://www.instagram.com/dyno_wheels_official/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
