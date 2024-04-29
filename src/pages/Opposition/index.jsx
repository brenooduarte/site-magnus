import CardStage from "../../components/CardStage";
import Header from "../../components/Header";
import "./styles.scss";
import HomemPensativo from "../../assets/homem-pensativo.gif";
import ServicePrice from "../../components/ServicePrice/index.jsx";
import texture from "../../assets/texture-opposition.png";

const Opposition = () => {
  const INPItaxes = [112, 280];
  const INPItaxesCaptions = [
    "(Valor para MEI, ME, EPP, Cooperativas, Associações e Instituições de Ensino)",
    "(Valor para empresas de médio e grande porte)",
  ];

  const fees = [800];
  const conjunction = "ou";

  return (
    <div>
      <Header />

      <main id="opposition">
        <div>
          <h1>
            FUI ALVO DE <br />
            OPOSIÇÃO
          </h1>

          <h2 className="color-white">
            ANTES DE MAIS NADA, O QUE <br />
            ISSO SIGNIFICA NA PRÁTICA?
          </h2>
        </div>

        <p>
          Após o depósito da marca no site do INPI, ela avaliação passa por 3
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

        <h2 className="color-white">
          OK! ENTENDI. <br />
          MAS COMO UMA OPOSIÇÃO PODE <br />
          AFETAR O MEU PROCESSO?
        </h2>

        <div className="info-container-opposition">
          <div className="info-opposition">
            <p id="text-primary">
              A resposta é bem simples. Quando uma outra empresa se manifesta
              contra o seu pedido de registro por meio de uma oposição, ela está
              solicitando ao INPI que não aceite o
            </p>
            <img
              className="homem-pensativo"
              src={HomemPensativo}
              alt="Homem pensativo"
            />
          </div>

          <p>
            seu pedido. Isso é feito por meio do envio de uma petição (um
            documento) ao INPI informando todas as razões pelas quais ele não
            deve aceitar o registro da sua marca.
          </p>
          <br />
          <p>
            Isso acontece quando sua marca é semelhante a outra já depositada.
            Ou quando a outra marca acredita que a sua é uma cópia, por exemplo.
            Há variadas razões pelas quais uma empresa pode se opor ao registro
            da marca de outra. Essa manifestação pode acontecer a qualquer
            momento dos 60 dias estabelecidos pelo INPI. Por isso é importante
            acompanhar semanalmente o processo.
          </p>
          <br />
          <p>
            A manifestação de oposição não é tão comum. Inclusive, grande parte
            dos processos seguem sem sofrer oposição. Mas, caso aconteça, é
            preciso realizar a DEFESA DE OPOSIÇÃO, também dentro do prazo de 60
            dias. Caso a defesa não seja protocolada dentro desse prazo, não há
            a possibilidade de protocolar depois e seu processo poderá ser
            INDEFERIDO e você precisará iniciar tudo novamente.
          </p>
        </div>

        <h2 className="color-yellow">
          NA MAGNUS ESTUDAMOS SEU CASO <br />
          COM ATENÇÃO E PREPARAMOS SUA <br />
          DEFESA COM BASE NOS MELHORES <br />
          ARGUMENTOS.
        </h2>

        <ServicePrice
          INPItaxes={INPItaxes}
          INPItaxesCaptions={INPItaxesCaptions}
          fees={fees}
          conjunction={conjunction}
        />

        <img className="texture-opposition" src={texture} />
      </main>
    </div>
  );
};

export default Opposition;
