import "./styles.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import whatsappIcon from "../../../assets/whatsapp-icon.png";
import coroaLogoMagnus from "../../../assets/coroa-logo-magnus.png";

const CustomerService = () => {
  const [forDesktop, setForDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 870) {
        setForDesktop(true);
      } else {
        setForDesktop(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="service-section">
      <div id="service-content">
        <h1>COMO PODEMOS TE AJUDAR</h1>

        <div id="service-container">
          {forDesktop ? (
            <>
              <div className="service">
                <h4>REGISTRAR MINHA MARCA</h4>
                <p>
                  A marca é o ativo mais valioso de uma empresa, é o seu DNA,
                  por onde as pessoas reconhecem e se conectam ao negócio. mas
                  apesar da sua grande importância, o que muitos empreendedores
                  não sabem é que posssuir CNPJ, site ou perfil na rede social
                  não significa que ele seja dono da marca que utiliza.
                </p>

                <img className="coroa-logo-magnus" src={coroaLogoMagnus} />
                <Link to="/registrar-marca" className="link-saiba-mais">
                  Saiba mais
                </Link>
              </div>

              <div className="service">
                <h4>FUI ALVO DE OPOSIÇÃO</h4>
                <p>
                  A manifestação de oposição não é tão comum. Inclusive, grande
                  parte dos processos seguem sem sofrer oposição. Mas, caso
                  aconteça, é preciso realizar a DEFESA DE OPOSIÇÃO, também
                  dentro do prazo de 60 dias. Caso a defesa não seja protocolada
                  dentro desse prazo, não há a possibilidade de protocolar
                  depois e seu processo poderá ser INDEFERIDO e você precisará
                  iniciar tudo novamente.
                </p>

                <img className="coroa-logo-magnus" src={coroaLogoMagnus} />
                <Link to="/oposicao" className="link-saiba-mais">
                  Saiba mais
                </Link>
              </div>

              <div className="service">
                <h4>MARCA FOI INDEFERIDA</h4>
                <p>
                  Há diversos motivos pelos quais o INPI pode indeferir o pedido
                  de registro de uma marca, os mais comuns são por colidência
                  com outras marcas, por uso de sinais proibidos na composição
                  da marca, por uso de expressão de propaganda ou até mesmo por
                  falta de distintividade e originalidade. Mas seja qual for o
                  caso, o depositante do pedido tem até 60 dias para contestar a
                  decisão de indeferimento proferida pelo INPI, obtendo, dessa
                  forma, a aprovação do pedido de registro da marca.
                </p>

                <img className="coroa-logo-magnus" src={coroaLogoMagnus} />
                <Link to="/marca-indeferida" className="link-saiba-mais">
                  Saiba mais
                </Link>
              </div>

              <div className="service">
                <h4>REGISTRAR SOFTWARE</h4>
                <p>
                  Registrar um software pode oferecer diversos benefícios, tanto
                  para o desenvolvedor quanto para os usuários. Aqui estão
                  algumas razões pelas quais é importante considerar o registro
                  de um software:
                </p>

                <p>
                  <strong>
                    1.Proteção de Propriedade Intelectual <br />
                    2.Credibilidade e Confiança <br />
                    3.Facilitação de Licenciamento e Comercialização
                    <br />
                    4.Proteção contra Infrações
                  </strong>
                </p>

                <img className="coroa-logo-magnus" src={coroaLogoMagnus} />
                <Link to="/registrar-software" className="link-saiba-mais">
                  Saiba mais
                </Link>
              </div>

              <div className="service">
                <h4>CONSULTORIA</h4>
                <p>
                  Sendo um dos mais importantes ativos de uma empresa, a marca
                  precisa estar sob vigilância constante e sendo acompanhada por
                  um profissional hábil nessa função. Pois, por exemplo, nada
                  impede que terceiros tentem registrar marcas semelhantes à sua
                  para tentar confundir os seus clientes.
                  <br />
                  Não adianta ter CNPJ, registro na junta comercial do estado,
                  site da empresa ou redes sociais. Nada disso te garante a
                  posse de uma marca.
                  <span>SÓ É DONO DA MARCA QUEM REGISTRA NO INPI</span>
                </p>

                <img className="coroa-logo-magnus" src={coroaLogoMagnus} />
                <Link to="/registrar-software" className="link-saiba-mais">
                  Saiba mais
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/registrar-marca" className="service">
                REGISTRAR MINHA MARCA
              </Link>
              <Link to="/oposicao" className="service">
                FUI ALVO DE OPOSIÇÃO
              </Link>
              <Link to="/marca-indeferida" className="service">
                MARCA FOI INDEFERIDA
              </Link>
              <Link to="/registrar-software" className="service">
                REGISTRAR SOFTWARE
              </Link>
              <span className="service">CONSULTORIA</span>
            </>
          )}
        </div>

        <button
          onClick={() =>
            window.open("https://wa.me/message/3UDZHQRBD4VDD1", "_blank")
          }
        >
          <img src={whatsappIcon} alt="Ícone Whatsapp" />
          Fale com a gente
        </button>
      </div>
    </section>
  );
};

export default CustomerService;
