import "./styles.scss";
import React, { useEffect, useState } from "react";

const Card = ({ photo, alt, title, description }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="600"
      className="card"
    >
      <div className="info-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={photo} alt={alt} />
    </div>
  );
};

export default Card;
