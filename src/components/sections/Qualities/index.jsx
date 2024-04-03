import "./styles.scss";
import backgroundgQuality from "../../../assets/background-quality.jpg";
import Card from "../../Card/index.jsx";

const Quality = () => {
  return (
    <section id="qualities-section">
      <div id="qualities-info">
        <h1>Somente na Magnus você vai ter</h1>

        <div className="quality-card gray-500">
          <h2>O melhor Custo Benefício</h2>
          <p>
            Sabemos que registrar uma marca pode ser caro, principalmente por
            que muitas empresas cobram valores absurdos por esse serviço.
          </p>
          <p>
            Na MAGNUS a gente faz mais com menos. Aqui você terá sua marca
            registrada com um investimento que cabe no seu bolso.
          </p>
        </div>

        <div className="quality-card gray-1000">
          <h2>Suporte Especial</h2>
          <p>
            O pedido de registro de marca e outros processos junto ao INPI
            possuem algumas caracteristicas que tornam cada caso diferente.
          </p>
          <p>
            Portanto, estamos preparados para explicar as subjetividades de cada
            caso e dirimir quaisquer dúvidas referente ao processo.
          </p>
        </div>

        <div className="quality-card gray-500">
          <h2>Confiança e Transparência</h2>
          <p>
            Confiança e Transparência são os nossos principais valores. Honramos
            cada serviço oferecendo o melhor que temos.
          </p>
          <p>
            Aqui você não precisa se preocupar com meias verdades ou falta de
            informação.
          </p>
        </div>
      </div>

      <img src={backgroundgQuality} alt="Quatro prédios" />
    </section>
  );
};

export default Quality;
