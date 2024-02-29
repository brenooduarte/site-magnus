import "./styles.scss";
import { useState, useEffect, Children } from "react";

const MAX_VISIBILITY = 2;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % children.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [children.length]);

  return (
    <div className="carousel">
      {Children.map(children, (child, i) => (
        <div
          className="carousel-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}

      <div className="carousel-dots">
        {children.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
