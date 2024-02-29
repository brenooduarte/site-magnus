import "./styles.scss";
import Carousel from "../../Carousel/index.jsx";

import Credibility from "../../../assets/card-images/credibility.png";
import Property from "../../../assets/card-images/property.png";
import Security from "../../../assets/card-images/security.png";

const Benefits = () => {
  const images = [Credibility, Property, Security];
  const titles = ["CREDIBILIDADE", "PROPRIEDADE", "SEGURANÇA"];
  const descriptions = [
    "Os consumidores e outras empresas dão maior credibilidade ao negócio que tem sua marca registrada, mostrando um diferencial no mercado.",
    "Uma marca sem registro é uma marca sem dono! Somente registrando é que uma pessoa fisica ou jurídica é considerada legalmente proprietária de uma marca.",
    "Uma marca registrada é uma marca protegida! Seu dono não precisa se preocupar contra plágio e uso sem permissão de sua marca.",
  ];

  return (
    <section id="benefits-section" className="change-header">
      <div className="container-benefits">
        <h1>
          <span className="yellow-text">Registrar</span> sua{" "}
          <span className="yellow-text highlighted-text">Marca</span>
          <br />
          garante os seguintes <span className="yellow-text">Benefícios</span>
        </h1>
        <Carousel>
          {images.map((image, i) => (
            <>
              <div key={i} className="carousel-item">
                <img className="card-shadow" src={image} alt={titles[i]} />
                <div className="card-content">
                  <span className="card-title">{titles[i]}</span>
                  <span className="card-description">{descriptions[i]}</span>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Benefits;
