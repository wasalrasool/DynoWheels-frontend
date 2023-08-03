import React from "react";
import img from "../assets/car5.png";
import img2 from "../assets/car2.png";
import img3 from "../assets/car3.png";
import img4 from "../assets/car4.png";
import Carousel from "react-bootstrap/Carousel";

function Carousal() {
  return (
    <Carousel>

<Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Imported Parts Available" />

        <Carousel.Caption>
          <h3>Imported Parts Available</h3>
          <p>
            We also sell imported parts. You can contact us.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img} alt="Highest Quality" />
        <Carousel.Caption>
          <h3>Pakistan's 1st store based autopart store</h3>
          <p>We beleive in delivering best quality</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Value to Money" />

        <Carousel.Caption>
          <h3>Value to Money</h3>
          <p>All our products are 100% tested and value to money</p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img className="d-block w-100" src={img} alt="Money Safety" />
        <Carousel.Caption>
          <h3>Money Safety</h3>
          <p>Once you received the product then you'll pay.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
