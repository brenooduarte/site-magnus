import "./styles.scss";
import Slide from "../../TestimonialSlide/index.jsx";
import texture from "../../../assets/texture.png";

import customer01 from "../../../assets/testimonial-images/customer-photo/customer01.png";
import customer02 from "../../../assets/testimonial-images/customer-photo/customer01.png";
import customer03 from "../../../assets/testimonial-images/customer-photo/customer01.png";

import brand01 from "../../../assets/testimonial-images/customer-brand/brand01.jpg";
import brand02 from "../../../assets/testimonial-images/customer-brand/brand01.jpg";
import brand03 from "../../../assets/testimonial-images/customer-brand/brand01.jpg";

const customerPhotos = [customer01, customer02, customer03];
const customerNames = ["Lucas Matheus", "Breno Duarte", "Cleber Correia"];
const customerCompanies = ["Magnus", "Google", "Tik Tok"];
const customerTestimonials = [
  "“Quando escolhi a MAGNUS para fazer o registro da minha marca, meu sócio e eu estávamos buscando uma empresa de confiança e com um valor acessível, pois sabíamos que muitas empresas que fazem esse tipo de serviço aplicam golpes. Hoje, nossa marca está registrada e podemos usá-la sem qualquer receio.”",
  "“Muitas vezes é preciso reajustar a logomarca da empresa, adicionar ou retirar termos ou símbolos para evitar problemas durante o registro.“",
  "“A nossa equipe conta com um design gráfico, o que permite otimizar o processo de modificação.”",
];
const customerBrands = [brand01, brand02, brand03];

const Testimonial = () => {
  return (
    <section id="testimonial-section">
      <h1>Depoimentos</h1>

      <Slide
        customerPhotos={customerPhotos}
        customerNames={customerNames}
        customerCompanies={customerCompanies}
        customerTestimonials={customerTestimonials}
        customerBrands={customerBrands}
      />

      <img className="texture" src={texture} alt="textura do fundo da página" />
    </section>
  );
};

export default Testimonial;
