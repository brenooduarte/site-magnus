import "./styles.scss";
import backgroundgQuality from "../../../assets/background-quality.jpg";

const Quality = () => {
  return (
    <section id="qualities-section">
      <div id="qualities-info">
        <h1>SOMENTE NA MAGNUS VOCÊ VAI TER</h1>

        <div className="quality-cards">
          <div className="quality-card gray-500">
            <h2>O melhor Custo Benefício</h2>
            <p>
              Sabemos que registrar uma marca pode ser caro, principalmente por
              que muitas empresas cobram valores absurdos por esse serviço.
              <br />
              <br />
              Na MAGNUS a gente faz mais com menos. Aqui você terá sua marca
              registrada com um investimento que cabe no seu bolso.
            </p>
          </div>

          <div className="quality-card gray-500">
            <h2>Suporte Especial</h2>
            <p>
              O pedido de registro de marca e outros processos junto ao INPI
              possuem algumas caracteristicas que tornam cada caso diferente.
              <br />
              <br />
              Portanto, estamos preparados para explicar as subjetividades de
              cada caso e dirimir quaisquer dúvidas referente ao processo.
            </p>
          </div>

          <div className="quality-card gray-500">
            <h2>Confiança e Transparência</h2>
            <p>
              Confiança e Transparência são os nossos principais valores.
              Honramos cada serviço oferecendo o melhor que temos.
              <br />
              <br />
              Aqui você não precisa se preocupar com meias verdades ou falta de
              informação.
            </p>
          </div>
        </div>
      </div>

      <img src={backgroundgQuality} alt="Quatro prédios" />
    </section>
  );
};

export default Quality;
