import { Link } from "react-router-dom";
import "./styles.scss";
import { useState, useEffect } from "react";

import magnusWhiteLogo from "../../assets/magnus-white-logo.svg";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [turnArrow, setTurnArrow] = useState(false);

  const scrollToAboutSection = () => {
    if (window.innerWidth < 870) {
      toggleMenu();
    }
    window.location.href = "/#about-section";
  };

  const toggleArrow = () => {
    setTurnArrow(!turnArrow);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 20;
      setHasScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 870) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`header ${showMenu ? "background" : ""}${
        hasScrolled ? " background" : ""
      }`}
    >
      <Link id="link-logo" to="/">
        <img
          className="magnus-logo"
          src={magnusWhiteLogo}
          alt="Logotipo branco Magnus"
        />
      </Link>
      <nav className={`menuSandwich ${showMenu ? "show" : ""}`}>
        <Link to="#" title="Em desenvolvimento">
          Blog
          {window.innerWidth < 870 && (
            <span className="em-desenvolvimento">( Em desenvolvimento )</span>
          )}
        </Link>
        <Link to="#" title="Em desenvolvimento">
          Parceria
          {window.innerWidth < 870 && (
            <span className="em-desenvolvimento">( Em desenvolvimento )</span>
          )}
        </Link>
        <Link id="quem-somos-link" onClick={scrollToAboutSection}>
          Quem Somos
        </Link>
        <Link
          onClick={() => {
            toggleServicesDropdown();
            toggleArrow();
          }}
        >
          Serviços
          <span
            className={`arrow ${
              turnArrow ? "turn-on-dropdown-arrow" : "turn-off-dropdown-arrow"
            }`}
          >
            <IoIosArrowForward />
          </span>
        </Link>
        {showServicesDropdown && (
          <ul className="services-dropdown">
            <li>
              <Link to="/registrar-marca">Registrar minha marca</Link>
            </li>
            <li>
              <Link to="/oposicao">Fui alvo de oposição</Link>
            </li>
            <li>
              <Link to="/marca-indeferida">Marca foi indeferida</Link>
            </li>
            <li>
              <Link to="/registrar-software">Registrar software</Link>
            </li>
            <li>
              <Link to="/consultoria">Consultoria</Link>
            </li>
          </ul>
        )}
      </nav>

      <div className="menuButton" onClick={toggleMenu}>
        <span
          className={`linha linha1 ${showMenu ? "expand-linha1" : ""}`}
        ></span>
        <span
          className={`linha linha2 ${showMenu ? "hide-linha2" : ""}`}
        ></span>
        <span
          className={`linha linha3 linha3-last ${
            showMenu ? "expand-linha3" : ""
          }`}
        ></span>
      </div>
    </header>
  );
}

export default Header;
