import "./styles.scss";
import whatsappIcon from "../../../assets/whatsapp-icon.png";

const CustomerService = () => {
  return (
    <section id="service-section">
      <div id="service-content">
        <h1>COMO PODEMOS TE AJUDAR</h1>

        <div id="service-container">
          <span className="service">REGISTRAR MINHA MARCA</span>
          <span className="service">FUI ALVO DE OPOSIÇÃO</span>
          <span className="service">MARCA FOI INDEFERIDA</span>
          <span className="service">REGISTRAR SOFTWARE</span>
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
