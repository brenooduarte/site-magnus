import "./styles.scss";
import Header from "../../components/Header";
import ServicePrice from "../../components/ServicePrice";
import texture from "../../assets/texture-registerbrand.png";
import imageRegisterBrand from "../../assets/image-register-brand.jpg";
import textureDesktop from "../../assets/texture-desktop.png";
import { useState, useEffect } from "react";

const RegisterBrand = () => {
  const INPItaxes = [142, 355];
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
        className="texture-registerbrand-desktop"
        src={textureDesktop}
        alt="texture"
      />

      <Header />

      <main className="register-brand-section">
        <h1>REGISTRAR MINHA MARCA</h1>

        {isMobile ? (
          <>
            <p>
              A marca é o ativo mais valioso de uma empresa, é o seu DNA, por
              onde as pessoas reconhecem e se conectam ao negócio. mas apesar da
              sua grande importância, o que muitos empreendedores não sabem é
              que posssuir CNPJ, site ou perfil na rede social não significa que
              ele seja dono da marca que utiliza.
            </p>

            <img className="image-register-brand" src={imageRegisterBrand} />

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
          </>
        ) : (
          <>
            <div className="container-one">
              <p>
                A marca é o ativo mais valioso de uma empresa, é o seu DNA, por
                onde as pessoas reconhecem e se conectam ao negócio. mas apesar
                da sua grande importância, o que muitos empreendedores não sabem
                é que posssuir CNPJ, site ou perfil na rede social não significa
                que ele seja dono da marca que utiliza.
              </p>

              <div>
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
              </div>
            </div>

            <div className="container-two">
              <div>
                <h2 id="title-register-brand">
                  POR QUE CONTRATAR A MAGNUS PARA REGISTRAR MINHA MARCA?
                </h2>

                <p id="text-register-brand">
                  Mais de 50% dos pedidos de registro de marca não são aceitos
                  por questões técnicas, causando prejuízos ao requerente.
                  Contratar um profissional habilitado é o modo mais seguro de
                  evitar problemas durante o processo, garantindo o sucesso do
                  pedido de registro.
                </p>
              </div>

              <div>
                <img
                  className="image-register-brand"
                  src={imageRegisterBrand}
                />
              </div>
            </div>
          </>
        )}

        <br />
        <br />
        <ServicePrice
          INPItaxes={INPItaxes}
          INPItaxesCaptions={INPItaxesCaptions}
          fees={fees}
          conjunction={conjunction}
        />

        <img src={texture} className="texture-registerbrand" alt="" />
      </main>
    </div>
  );
};

export default RegisterBrand;
