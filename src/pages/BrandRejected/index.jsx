import "./styles.scss";
import ServicePrice from "../../components/ServicePrice";
import texture from "../../assets/texture-brandrejected.png";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../../components/sections/Footer/index.jsx";

import textureDesktop from "../../assets/texture-desktop.png";

const BrandRejected = () => {
  const INPItaxes = [475, 298];
  const INPItaxesCaptions = [
    "(Taxa federal para depósito do recurso contra o indeferimento)",
    "(Taxa federal para emissão do certificado de registro da marca) // * A taxa para emissão do certificado pode variar conforme  o porte da empresa ou segmento de atuação",
  ];

  const fees = [800];
  const conjunction = "+";

  return (
    <div>
      <main id="brand-rejected">
        <img
          className="texture-brandrejected-desktop"
          src={textureDesktop}
          alt="texture"
        />
        <h1>MINHA MARCA FOI INDEFERIDA</h1>

        <div id="info">
          <h3>E AGORA?</h3>
          <p>✋ Calma, ainda não é o fim.</p>
          <p>
            Podemos te ajudar a reverter essa <br />
            decisão do INPI
          </p>
        </div>

        <div className="rejection-text-top">
          <h2>
            POR QUE O INPI INDEFERIU <br />O MEU PROCESSO?
          </h2>
          <p>
            Há diversos motivos pelos quais o INPI pode indeferir o pedido de
            registro de uma marca, os mais comuns são por colidência com outras
            marcas, por uso de sinais proibidos na composição da marca, por uso
            de expressão de propaganda ou até mesmo por falta de distintividade
            e originalidade. Mas seja qual for o caso, o depositante do pedido
            tem até 60 dias para contestar a decisão de indeferimento proferida
            pelo INPI, obtendo, dessa forma, a aprovação do pedido de registro
            da marca.
          </p>
        </div>

        <span id="arrow-icon">
          <IoIosArrowForward />
        </span>

        <div className="rejection-text-bottom">
          <p>
            O primeiro passo para isso é identificar o motivo do indeferimento.
            E então apresentar os argumentos, via petição, demonstrando que a
            decisão do INPI foi equivocada e que a marca pode obter o registro
            conforme as razões alegas e o que a lei prevê.
          </p>

          <p>
            Na Magnus estudamos seu caso com a devida atenção e preparamos sua
            defesa com base nos melhores argumentos.{" "}
          </p>
        </div>

        <h2>
          O QUE VOCÊ RECEBE AO <br />
          CONTRATAR ESSE SERVIÇO?
        </h2>

        <ul id="list-brand-rejected">
          <li>Análise do indeferimento</li>
          <li>Preparação do recurso</li>
          <li>Depósito da petição</li>
          <li>Acompanhamento do processo</li>
          <li>Entrega do certificado de registro</li>
        </ul>

        <ServicePrice
          INPItaxes={INPItaxes}
          INPItaxesCaptions={INPItaxesCaptions}
          fees={fees}
          conjunction={conjunction}
        />

        <img className="texture-brandrejected" src={texture} alt="texture" />
      </main>

      <Footer />
    </div>
  );
};

export default BrandRejected;
