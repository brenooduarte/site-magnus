import "./styles.scss";
import Card from "../../Card/index.jsx";
import Credibility from "../../../assets/card-images/credibility-mobile.png";
import Security from "../../../assets/card-images/security-mobile.png";
import Property from "../../../assets/card-images/property-mobile.png";
import Exclusivity from "../../../assets/card-images/exclusivity-mobile.png";

const Benefits = () => {
  return (
    <section id="benefits-section">
      <div id="benefits-container">
        <h1>
          <span>REGISTRAR</span> SUA <span>MARCA</span>
        </h1>
        <h2 id="benefits-subtitle">
          GARANTE OS SEGUINTES <span>BENEFÍCIOS</span>
        </h2>

        <div id="cards">
          <Card
            photo={Property}
            alt={"Homem escrevendo em documento"}
            title={"PROPRIEDADE"}
            description={
              "Uma marca sem registro é uma marca sem dono! Somente registrando é que uma pessoa fisica ou jurídica é considerada legalmente proprietária de uma marca."
            }
          />

          <Card
            className={"security-card"}
            photo={Security}
            alt={
              "Um cadeado aberto em meio a teclas de computador espalhadas sobre uma mesa"
            }
            title={"SEGURANÇA"}
            description={
              "Uma marca registrada é uma marca protegida! Seu dono não precisa se preocupar contra plágio e uso sem permissão de sua marca."
            }
          />

          <Card
            photo={Exclusivity}
            alt={"Homem vestido terno"}
            title={"EXCLUSIVIDADE"}
            description={
              "Após o registro, o proprietário tem direito ao uso exclusivo da marca em todo território nacional. Isso assegura que, em todo o país, somente ele possa utilizá-la."
            }
          />

          <Card
            photo={Credibility}
            alt={"Aperto de mãos"}
            title={"CREDIBILIDADE"}
            description={
              "Os consumidores e outras empresas dão maior credibilidade ao negócio que tem sua marca registrada, mostrando um diferencial no mercado."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
