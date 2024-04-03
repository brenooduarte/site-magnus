import "./styles.scss";
import texture from "../../../assets/texture.png";
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
          <span>Registrar</span> sua <span>Marca</span>
        </h1>
        <h1>
          garante os seguintes <span>Benefícios</span>
        </h1>

        <div id="cards">
          <Card
            photo={Property}
            alt={"Homem escrevendo em documento"}
            title={"Propriedade"}
            description={
              "Uma marca sem registro é uma marca sem dono! Somente registrando é que uma pessoa fisica ou jurídica é considerada legalmente proprietária de uma marca."
            }
          />

          <Card
            photo={Security}
            alt={
              "Um cadeado aberto em meio a teclas de computador espalhadas sobre uma mesa"
            }
            title={"Segurança"}
            description={
              "Uma marca registrada é uma marca protegida! Seu dono não precisa se preocupar contra plágio e uso sem permissão de sua marca."
            }
          />

          <Card
            photo={Exclusivity}
            alt={"Homem vestido terno"}
            title={"Exclusividade"}
            description={
              "Após o registro, o proprietário tem direito ao uso exclusivo da marca em todo território nacional. Isso assegura que, em todo o país, somente ele possa utilizá-la."
            }
          />

          <Card
            photo={Credibility}
            alt={"Aperto de mãos"}
            title={"Credibilidade"}
            description={
              "Os consumidores e outras empresas dão maior credibilidade ao negócio que tem sua marca registrada, mostrando um diferencial no mercado."
            }
          />
        </div>
      </div>

      <div className="textures">
        <img
          className="texture"
          src={texture}
          alt="textura do fundo da página"
        />
        <img
          className="texture"
          src={texture}
          alt="textura do fundo da página"
        />
      </div>
    </section>
  );
};

export default Benefits;
