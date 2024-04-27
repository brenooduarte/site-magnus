import "./styles.scss";
import texture from "../../assets/texture-registerbrand.png";
import Header from "../../components/Header";
import Price from "../../components/Price";

const RegisterBrand = () => {
  const INPItaxes = [142.0, 355.0];
  const INPItaxesCaptions = [
    "(Valor para MEI, ME, EPP, Cooperativas, Associações e Instituições de Ensino)",
    "(Valor para empresas de médio e grande porte)",
  ];

  const fees = [800.0];
  const feesCaptions = ["Parcelado no cartão ou À vista com 10% de desconto"];

  return (
    <div>
      <Header />

      <main>
        <h1>
          REGISTRAR <br />
          MINHA MARCA
        </h1>

        <p>
          A marca é o ativo mais valioso de uma empresa, é o seu dna, por onde
          as pessoas reconhecem e se conectam ao negócio. mas apesar da sua
          grande importância, o que muitos empreendedores não sabem é que
          posssuir cnpj, site ou perfil na rede social não significa que ele
          seja dono da marca que utiliza.
        </p>

        <h3>
          SÓ É DONO DE UMA MARCA <br />
          QUEM A REGISTRA NO INPI
        </h3>

        <h2>
          RISCOS DE UTILIZAR UMA <br />
          MARCA NÃO REGISTRADA
        </h2>

        <ul>
          <li>Perder a marca caso alguêm registre antes</li>
          <li>Ser obrigado a trocar o nome da empresa</li>
          <li>Ser processado e pagar indenização</li>
          <li>Ser vítima de plágio</li>
        </ul>

        <h2 id="title-register-brand">
          POR QUE CONTRATAR A <br />
          MAGNUS PARA REGISTRAR <br />
          MINHA MARCA?
        </h2>

        <p id="text-register-brand">
          Mais de 50% dos pedidos de registro de marca não são aceitos por
          questões técnicas, causando prejuízos ao requerente. Contratar um
          profissional habilitado é o modo mais seguro de evitar problemas
          durante o processo, garantindo o sucesso do pedido de registro.
        </p>

        <h3 className="color-yellow">
          NOSSA MISSÃO É AJUDAR PESSOAS <br />
          E EMPRESAS A SE TORNAREM AS <br />
          ÚNICAS E LEGÍTIMAS DONAS DE <br />
          SUAS MARCAS
        </h3>

        <Price
          INPItaxes={INPItaxes}
          INPItaxesCaptions={INPItaxesCaptions}
          fees={fees}
          feesCaptions={feesCaptions}
        />
      </main>

      <img className="texture" src={texture} alt="textura do fundo da página" />
    </div>
  );
};

export default RegisterBrand;
