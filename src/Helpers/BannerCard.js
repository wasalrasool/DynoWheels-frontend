import React from "react";
import "./BannerCard.css";

function BannerCard(props) {
  return (
    <div className="banner-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default BannerCard;
