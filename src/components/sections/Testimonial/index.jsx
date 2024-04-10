import "./styles.scss";
import Slide from "../../TestimonialSlide/index.jsx";
import texture from "../../../assets/texture.png";

import customer01 from "../../../assets/testimonial-images/customer-photo/customer01.png";
import customer02 from "../../../assets/testimonial-images/customer-photo/customer02.png";
import customer03 from "../../../assets/testimonial-images/customer-photo/customer03.jpeg";
import customer04 from "../../../assets/testimonial-images/customer-photo/customer04.png";
import customer05 from "../../../assets/testimonial-images/customer-photo/customer05.png";
import customer06 from "../../../assets/testimonial-images/customer-photo/customer06.png";
import customer07 from "../../../assets/testimonial-images/customer-photo/customer07.png";
import customer08 from "../../../assets/testimonial-images/customer-photo/customer08.png";
import customer09 from "../../../assets/testimonial-images/customer-photo/customer09.png";
import customer10 from "../../../assets/testimonial-images/customer-photo/customer10.png";

import brand01 from "../../../assets/testimonial-images/customer-brand/brand01.jpeg";
import brand02 from "../../../assets/testimonial-images/customer-brand/brand02.jpg";
import brand03 from "../../../assets/testimonial-images/customer-brand/brand03.jpg";
import brand04 from "../../../assets/testimonial-images/customer-brand/brand04.jpg";
import brand05 from "../../../assets/testimonial-images/customer-brand/brand05.jpg";
import brand06 from "../../../assets/testimonial-images/customer-brand/brand06.png";
import brand07 from "../../../assets/testimonial-images/customer-brand/brand07.jpg";
import brand08 from "../../../assets/testimonial-images/customer-brand/brand08.jpeg";
import brand09 from "../../../assets/testimonial-images/customer-brand/brand09.jpg";
import brand10 from "../../../assets/testimonial-images/customer-brand/brand10.jpg";

const customerPhotos = [
  customer01,
  customer02,
  customer03,
  customer04,
  customer05,
  customer06,
  customer07,
  customer08,
  customer09,
  customer10,
];

const customerNames = [
  "Valter Souza",
  "Andrea",
  "Dr. Aline Sâmara",
  "Ivonielson",
  "Jaelson Ramos",
  "Murilo Barros",
  "Ediekes Lopes",
  "Jaqueline Oliveira",
  "Daniel Moura",
  "André Rodrigues",
];

const customerCompanies = [
  "Proprietário da VM Comércio",
  "Proprietária da Faról de Notícias",
  "Proprietária da Alilab",
  "Proprietário da Bela Lunni",
  "Proprietário da Jaelson Salgados",
  "Proprietário da Voip Nordeste",
  "Proprietário da Escola Doce Encanto",
  "Proprietária da JP Tempero Cheiro Bom",
  "CEO da SIMEP",
  "Proprietário da Savory Massas",
];

const customerTestimonials = [
  "“Quando escolhi a MAGNUS para fazer o registro da minha marca, meu sócio e eu estávamos buscando uma empresa de confiança e com um valor acessível, pois sabíamos que muitas empresas que fazem esse tipo de serviço aplicam golpes. Hoje, nossa marca está registrada e podemos usá-la sem qualquer receio.”",
  "“Eu já havia tentando registrar minha marca. Contratei uma empresa que simplesmente esqueceu do meu processo. Fiquei tão revoltada que decidi deixar tudo pra lá. Mas, certo dia recebi uma carta me alertando que eu estava usando uma marca que já era registrada e me pedindo para parar com o uso da minha marca imediatamente. Fiquei desesperada, mas conseguimos resolver a situação. Agradeço a Deus e a Lucas, dono da Magnus, que apareceu no momento que eu mais precisava.“",
  "“Escolhemos a Magnus para registrar a Alilab porque sabíamos do histórico da empresa. Precisávamos de alguém em que pudéssemos confiar que tudo daria certo. Estamos extremamente satisfeitos com o serviço prestado e seguros já que nossa marca está registrada.”",
  "“Nossa empresa cresceu muito nesses últimos anos e percebemos a necessidade de ter nossa marca registrada. Pesquisamos por empresas e quando falamos com a Magnus, logo de início sentimos que podíamos confiar nela. O atendimento foi excelente.”",
  "“Minha empresa está há mais de 10 anos no mercado. Temos um nome e uma reputação a zelar. Nos tornamos a maior produtora de salgados da cidade e vendemos mais de 10 mil salgados por mês. Mas não sabia que precisava proteger minha marca. Só de pensar em perde-la, fiquei assustado. Escolhi a Magnus pra me ajudar nesse processo de registro e estou inteiramente satisfeito com o resultado.”",
  "“A gente não sabe o valor da nossa marca até perde-la e foi por isso que eu quase passei. Foi um momento muito difícil para a empresa. Felizmente a Magnus foi como aquela luz no fim do túnel que renovou nossas esperanças. Conseguimos registrar nossa marca e hoje estamos seguros de quem ninguém tira ela da gente.”",
  "“Estávamos recebendo muitas ligações de empresas oferecendo para registrar nossa marca. Mas estávamos com receio pois não tínhamos referencia dessas empresas. Então pedimos indicação a amigos que nos apresentaram à Magnus. Rapidamente já tínhamos nosso pedido de registro protocolado.”",
  "“Conhecemos a Magnus através de uma outra empresa que já havia registrado a marca com eles. Entramos em contato e logo iniciamos o processo de registro da nossa marca. Desde o atendimento até a realização do serviço, tudo feito com muita excelência e celeridade.”",
  "“Nossa experiência ao contratar Magnus para registrar nossa marca foi a melhor possível. Atendimento excelente, rapidez no serviço e ótimo custo benefício. Sempre que alguém nos pede indicação de alguma empresa para registrar sua marca, indicamos a Magnus sem pensar duas vezes.”",
  "“Antes de abrir minha empresa uma das preocupações era em relação ao nome da marca. Queria algo simples, mas que ainda não estivesse sendo usado. Contratei a Magnus para me ajudar e encontramos um nome disponível e que eu pudesse usar sem me preocupar depois. Fizemos o registro e hoje posso dizer que sou dono da minha marca.”",
];

const customerBrands = [
  brand01,
  brand02,
  brand03,
  brand04,
  brand05,
  brand06,
  brand07,
  brand08,
  brand09,
  brand10,
];

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
