import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import ImageInitial from "../../../assets/image-initial.png";
import MagnusWhiteLogo from "../../../assets/magnus-white-logo.svg";
import MagnusBlackLogo from "../../../assets/magnus-black-logo.svg";

const Initial = () => {
  const [isInOtherSection, setIsInOtherSection] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const otherSection = document.querySelector(".change-header");
      const otherSectionPosition = otherSection ? otherSection.offsetTop : 0;

      setIsScrolled(scrollPosition > 50);
      setIsInOtherSection(scrollPosition >= otherSectionPosition - 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInOtherSection(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(headerRef.current);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section>
      <img
        className={`image-bg ${isInOtherSection ? "scroll-header" : ""}`}
        src={ImageInitial}
        alt="Homem trabalhando no computador"
      />
      <header ref={headerRef} className={isScrolled ? "scrolled" : ""}>
        <div className="container">
          <img
            src={isInOtherSection ? MagnusBlackLogo : MagnusWhiteLogo}
            alt="Magnus"
          />
          <div
            className={`menu-section ${isInOtherSection ? "change-nav" : ""}`}
          >
            <nav>
              <ul>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Serviços</a>
                </li>
                <li>
                  <a href="#">Preços</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <h1>
        Você é dono da sua <br />
        <span className="highlighted-text">Marca ?</span>
      </h1>
    </section>
  );
};

export default Initial;
