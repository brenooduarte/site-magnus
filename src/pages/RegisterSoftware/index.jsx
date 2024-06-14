import "./styles.scss";
import ServicePrice from "../../components/ServicePrice";
import texture from "../../assets/texture-registersoftware.png";
import imageRegisterSoftware from "../../assets/image-register-software.jpg";
import textureDesktop from "../../assets/texture-desktop.png";

const RegisterSoftware = () => {
  const INPItaxes = [185];
  const INPItaxesCaptions = [
    "(Valor único)",
    "* A taxa para emissão do certificado pode variar conforme  o porte da empresa ou segmento de atuação",
  ];

  const fees = [800];
  const conjunction = "+";

  return (
    <div>
      <img
        className="texture-registersoftware-desktop"
        src={textureDesktop}
        alt="texture"
      />

      <main id="register-software">
        <h1>REGISTRAR SOFTWARE</h1>

        <h2 className="color-white">
          POR QUE PRECISO REGISTRAR <br />
          MEU SOFTWARE?
        </h2>

        <img className="image-register-software" src={imageRegisterSoftware} />

        <p>
          Registrar um software pode oferecer diversos benefícios, tanto para o
          desenvolvedor quanto para os usuários. Aqui estão algumas razões pelas
          quais é importante considerar o registro de um software:
        </p>

        <ol>
          <li>
            <p>
              <span>1. Proteção de Propriedade Intelectual:</span> Registrar um
              software pode ajudar a proteger os direitos autorais e a
              propriedade intelectual associada a ele. Isso pode ser crucial
              para evitar a cópia não autorizada, distribuição ilegal ou uso não
              autorizado por terceiros.
            </p>
          </li>

          <li>
            <p>
              <span>2. Credibilidade e Confiança:</span> Um software registrado
              pode transmitir uma imagem de credibilidade e confiança aos
              usuários, parceiros comerciais e investidores. Isso pode ser
              especialmente importante em mercados competitivos, onde a
              confiança do cliente é fundamental.
            </p>
          </li>

          <li>
            <p>
              <span>3. Facilitação de Licenciamento e Comercialização:</span> O
              registro do software pode simplificar o processo de licenciamento
              e comercialização, ajudando a estabelecer os termos e condições de
              uso do programa de forma clara e legalmente vinculativa.
            </p>
          </li>

          <li>
            <p>
              <span>4. Proteção contra Infrações:</span> Em muitos países, o
              registro do software pode fornecer uma base mais sólida para
              buscar medidas legais contra infratores que copiem, modifiquem ou
              distribuam o software sem autorização.
            </p>
          </li>
        </ol>

        <h2>
          QUAL O REQUISITO PARA <br />
          REGISTRAR UM SOFTWARE:
        </h2>

        <div className="text-register-software-container">
          <p>
            O principal requisito exigido pelo INPI é que o código do programa
            esteja completo, ou a parte mais relevante do código fonte, ou seja,
            precisam existir de fato as suas linhas de código-fonte.
          </p>

          <br />

          <p>
            Em outras palavras, uma ideia sobre um programa de computador não é
            válida para se adquirir um registro, especialmente porque ele poderá
            passar por modificações até ser finalizado, e essa ideia ou conceito
            sequer é protegida ou protegível, apenas se materializada.
          </p>
        </div>

        <h2 id="register-software">
          REGISTRE SEU SOFTWARE <br />
          COM A MAGNUS
        </h2>

        <ServicePrice
          INPItaxes={INPItaxes}
          INPItaxesCaptions={INPItaxesCaptions}
          fees={fees}
          conjunction={conjunction}
        />

        <img className="texture-registersoftware" src={texture} />
      </main>
    </div>
  );
};

export default RegisterSoftware;
