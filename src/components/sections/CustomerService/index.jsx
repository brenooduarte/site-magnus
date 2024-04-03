import "./styles.scss";
import whatsappIcon from "../../../assets/whatsapp-icon.png";
import texture from "../../../assets/texture.png";

const CustomerService = () => {
  return (
    <section id="service-section">
      <div id="service-content">
        <h1>Como podemos te ajudar</h1>

        <div id="service-container">
          <span className="service">REGISTRAR MINHA MARCA</span>
          <span className="service">FUI ALVO DE OPOSIÇÃO</span>
          <span className="service">MARCA FOI INDEFERIDA</span>
          <span className="service">REGISTRAR SOFTWARE</span>
          <span className="service">CONSULTORIA</span>
        </div>

        <button>
          <img src={whatsappIcon} alt="Ícone Whatsapp" />
          Fale com a gente
        </button>
      </div>

      <img className="texture" src={texture} alt="textura do fundo da página" />
    </section>
  );
};

export default CustomerService;