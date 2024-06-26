import "./styles.scss";
import React, { useEffect } from "react";

const Card = ({ className, photo, alt, title, description }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="600"
      className={`card ${className}`}
    >
      <div className="info-card">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
      </div>
      <img src={photo} alt={alt} />
    </div>
  );
};

export default Card;
