import "./styles.scss";
import magnusWhiteLogo from "../../../assets/magnus-white-logo.svg";
import texture from "../../../assets/texture.png";

const Satisfaction = () => {
  return (
    <section id="satisfaction-section">
      <div id="satisfaction-container">
        <img
          className="satisfaction-magnus-logo"
          src={magnusWhiteLogo}
          alt="Logotipo branco Magnus"
        />

        <div>
          <h3>A única que tem</h3>
          <span> 100% </span>

          <p>De sucesso no registro das marcas</p>
          <p>De recomendação pelos clientes</p>
          <p>De todos os clientes satisfeitos</p>
        </div>

        <button>
          Dê início ao registro de sua marca <br />
          antes que alguém registre por você
        </button>
      </div>

      <img className="texture" src={texture} alt="textura do fundo da página" />
    </section>
  );
};

export default Satisfaction;
