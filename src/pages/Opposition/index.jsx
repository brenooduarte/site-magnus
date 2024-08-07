import CardStage from "../../components/CardStage";
import "./styles.scss";
import { useState, useEffect } from "react";
import HomemPensativo from "../../assets/homem-pensativo.gif";
import ServicePrice from "../../components/ServicePrice/index.jsx";
import texture from "../../assets/texture-opposition.png";
import textureDesktop from "../../assets/texture-desktop.png";
import Footer from "../../components/sections/Footer/index.jsx";

const Opposition = () => {
  const INPItaxes = [112, 280];
  const INPItaxesCaptions = [
    "(Valor para MEI, ME, EPP, Cooperativas, Associações e Instituições de Ensino)",
    "(Valor para empresas de médio e grande porte)",
  ];

  const fees = [800];
  const conjunction = "ou";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 870);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <img
        className="texture-opposition-desktop"
        src={textureDesktop}
        alt="texture"
      />

      <main id="opposition">
        <div className="title-and-text-opposition">
          <h1>FUI ALVO DE OPOSIÇÃO</h1>

          <h2 className="color-white">
            ANTES DE MAIS NADA, O QUE <br />
            ISSO SIGNIFICA NA PRÁTICA?
          </h2>
        </div>

        <p className="title-card-stage">
          Após o depósito da marca no site do INPI, sua avaliação passa por 3
          etapas:
        </p>

        <div className="stage-cards-container">
          <div className="cards">
            <CardStage
              position="card-left"
              text="Nessa fase o INPI fará uma avaliação formal do processo para verificar se foi preenchido corretamente."
              stageNumber="1"
            />

            <CardStage
              position="card-center"
              text="Neste estágio, há um prazo de 60 dias para empresas se oporem ao registro da marca."
              stageNumber="2"
            />

            <CardStage
              position="card-rigth"
              text="Nessa última etapa o INPI avalia detalhadamente o pedido de registro da marca e publica sua decisão."
              stageNumber="3"
            />
          </div>
        </div>

        {!isMobile ? (
          <div className="gif-with-title">
            <img
              className="homem-pensativo"
              src={HomemPensativo}
              alt="Homem pensativo"
            />
            <h2 className="color-white">
              OK! ENTENDI. <br />
              MAS COMO UMA OPOSIÇÃO PODE <br />
              AFETAR O MEU PROCESSO?
            </h2>
          </div>
        ) : (
          <h2 className="color-white">
            OK! ENTENDI. <br />
            MAS COMO UMA OPOSIÇÃO
            <br />
            AFETA O MEU PROCESSO?
          </h2>
        )}

        <div className="info-container-opposition">
          {isMobile ? (
            <>
              <div className="info-opposition">
                <p id="text-primary">
                  A resposta é bem simples. Quando uma outra empresa se
                  manifesta contra o seu pedido de registro por meio de uma
                  oposição, ela está solicitando ao INPI que não aceite o
                </p>
                <img
                  className="homem-pensativo"
                  src={HomemPensativo}
                  alt="Homem pensativo"
                />
              </div>
              <p>
                seu pedido. Isso é feito por meio do envio de uma petição (um
                documento) ao INPI informando todas as razões pelas quais ele
                não deve aceitar o registro da sua marca.
              </p>
              <br />
              <p>
                Isso acontece quando sua marca é semelhante a outra já
                depositada. Ou quando a outra marca acredita que a sua é uma
                cópia, por exemplo. Há variadas razões pelas quais uma empresa
                pode se opor ao registro da marca de outra. Essa manifestação
                pode acontecer a qualquer momento dos 60 dias estabelecidos pelo
                INPI. Por isso é importante acompanhar semanalmente o processo.
              </p>
              <br />
              <p>
                A manifestação de oposição não é tão comum. Inclusive, grande
                parte dos processos seguem sem sofrer oposição. Mas, caso
                aconteça, é preciso realizar a DEFESA DE OPOSIÇÃO, também dentro
                do prazo de 60 dias. Caso a defesa não seja protocolada dentro
                desse prazo, não há a possibilidade de protocolar depois e seu
                processo poderá ser INDEFERIDO e você precisará iniciar tudo
                novamente.
              </p>
            </>
          ) : (
            <>
              <p id="text-primary">
                A resposta é bem simples. Quando uma outra empresa se manifesta
                contra o seu pedido de registro por meio de uma oposição, ela
                está solicitando ao INPI que não aceite o seu pedido. Isso é
                feito por meio do envio de uma petição (um documento) ao INPI
                informando todas as razões pelas quais ele não deve aceitar o
                registro da sua marca.
              </p>
              <br />
              <p>
                Isso acontece quando sua marca é semelhante a outra já
                depositada. Ou quando a outra marca acredita que a sua é uma
                cópia, por exemplo. Há variadas razões pelas quais uma empresa
                pode se opor ao registro da marca de outra. Essa manifestação
                pode acontecer a qualquer momento dos 60 dias estabelecidos pelo
                INPI. Por isso é importante acompanhar semanalmente o processo.
              </p>
              <br />
              <p>
                A manifestação de oposição não é tão comum. Inclusive, grande
                parte dos processos seguem sem sofrer oposição. Mas, caso
                aconteça, é preciso realizar a DEFESA DE OPOSIÇÃO, também dentro
                do prazo de 60 dias. Caso a defesa não seja protocolada dentro
                desse prazo, não há a possibilidade de protocolar depois e seu
                processo poderá ser INDEFERIDO e você precisará iniciar tudo
                novamente.
              </p>
            </>
          )}
        </div>

        <h2 className="color-yellow title-magnus-estudamos">
          NA MAGNUS ESTUDAMOS SEU CASO COM ATENÇÃO E PREPARAMOS SUA DEFESA COM
          BASE NOS MELHORES ARGUMENTOS.
        </h2>

        <ServicePrice
          INPItaxes={INPItaxes}
          INPItaxesCaptions={INPItaxesCaptions}
          fees={fees}
          conjunction={conjunction}
        />

        <img className="texture-opposition" src={texture} />
      </main>

      <Footer />
    </div>
  );
};

export default Opposition;
