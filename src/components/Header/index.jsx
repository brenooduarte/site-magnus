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
      const threshold = 50;
      setHasScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
        <Link to="/">Home</Link>
        <Link to="#">Contatos</Link>
        <Link
          id="option-arrow"
          onClick={() => {
            toggleServicesDropdown(), toggleArrow();
          }}
        >
          <span
            className={`arrow ${
              turnArrow ? "turn-on-dropdown-arrow" : "turn-off-dropdown-arrow"
            }`}
          >
            <IoIosArrowForward />
          </span>
          Serviços
        </Link>
        {showServicesDropdown && (
          <ul className="services-dropdown">
            <li>
              <Link to="/registrar-marca<">Registrar minha marca</Link>
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
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </div>
    </header>
  );
}

export default Header;
