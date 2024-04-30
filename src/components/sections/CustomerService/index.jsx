import "./styles.scss";
import { Link } from "react-router-dom";
import whatsappIcon from "../../../assets/whatsapp-icon.png";

const CustomerService = () => {
  return (
    <section id="service-section">
      <div id="service-content">
        <h1>COMO PODEMOS TE AJUDAR</h1>

        <div id="service-container">
          <Link to="/registrar-marca" className="service">
            REGISTRAR MINHA MARCA
          </Link>
          <Link to="/oposicao" className="service">
            FUI ALVO DE OPOSIÇÃO
          </Link>
          <Link to="/marca-indeferida" className="service">
            MARCA FOI INDEFERIDA
          </Link>
          <Link to="/registrar-software" className="service">
            REGISTRAR SOFTWARE
          </Link>
          <span className="service">CONSULTORIA</span>
        </div>

        <button
          onClick={() =>
            window.open("https://wa.me/message/3UDZHQRBD4VDD1", "_blank")
          }
        >
          <img src={whatsappIcon} alt="Ícone Whatsapp" />
          Fale com a gente
        </button>
      </div>
    </section>
  );
};

export default CustomerService;
