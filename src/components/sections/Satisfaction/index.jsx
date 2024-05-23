import "./styles.scss";
import magnusWhiteLogo from "../../../assets/magnus-white-logo.svg";

const Satisfaction = () => {
  return (
    <section id="satisfaction-section">
      <div id="satisfaction-container">
        {window.innerWidth < 870 && (
          <img
            className="satisfaction-magnus-logo"
            src={magnusWhiteLogo}
            alt="Logotipo branco Magnus"
          />
        )}

        <div className="satisfaction-info">
          <div>
            <h3>A única que tem</h3>
            <span> 100% </span>
          </div>

          <div className="satisfaction-text">
            <p>De sucesso no registro das marcas</p>
            <p>De recomendação pelos clientes</p>
            <p>De todos os clientes satisfeitos</p>
          </div>
        </div>

        <button
          onClick={() =>
            window.open("https://wa.me/message/3UDZHQRBD4VDD1", "_blank")
          }
        >
          Dê início ao registro de sua marca <br />
          antes que alguém registre por você
        </button>
      </div>
    </section>
  );
};

export default Satisfaction;
