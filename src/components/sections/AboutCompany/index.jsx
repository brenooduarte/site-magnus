import "./styles.scss";

import imageLucas from "../../../assets/lucas-matheus.png";

const AboutCompany = () => {
  return (
    <section id="quem-somos">
      <h1>QUEM SOMOS</h1>
      <div id="about-container">
        {window.innerWidth < 870 ? (
          <>
            <div>
              <img
                id="image-lucas"
                src={imageLucas}
                alt="Foto de Lucas Matheus"
              />
              <p>
                <span>A Magnus</span> é uma empresa criada pelo Engenheiro de
                Produção Lucas Oliveira, com a missão de oferecer serviços de
                propriedade intelectual (PI) de forma acessível e sem enganação.
                Ela nasce em 2021 após o seu criador se deparar com um mercado
                carente de empresas idôneas nesse ramo.
              </p>
            </div>

            <p>
              Conhecendo o serviço de diversos escritório de PI pelo Brasil, era
              claro que esses estavam pouco se importando com o investimento de
              quem busca esse tipo de serviço, pois realizavam os pedidos de
              registros com a certeza de que seria negado e enganavam seus
              clientes com soluções mentirosas e ocultando informações,
              fazendo-os, muitas vezes, gastar grandes quantias a troco de nada.
              Diante disso, a Magnus propõe uma aborgadem simples e honesta para
              com aqueles que desejam ter sua marca registrada no Instituto
              Federal de Propriedade Industrial (INPI).
            </p>
          </>
        ) : (
          <>
            <img
              id="image-lucas"
              src={imageLucas}
              alt="Foto de Lucas Matheus"
            />

            <div className="text-about-company">
              <p>
                <span>A Magnus</span> é uma empresa criada pelo Engenheiro de
                Produção Lucas Oliveira, com a missão de oferecer serviços de
                propriedade intelectual (PI) de forma acessível e sem enganação.
                Ela nasce em 2021 após o seu criador se deparar com um mercado
                carente de empresas idôneas nesse ramo.
              </p>

              <p>
                Conhecendo o serviço de diversos escritório de PI pelo Brasil,
                era claro que esses estavam pouco se importando com o
                investimento de quem busca esse tipo de serviço, pois realizavam
                os pedidos de registros com a certeza de que seria negado e
                enganavam seus clientes com soluções mentirosas e ocultando
                informações, fazendo-os, muitas vezes, gastar grandes quantias a
                troco de nada. Diante disso, a Magnus propõe uma aborgadem
                simples e honesta para com aqueles que desejam ter sua marca
                registrada no Instituto Federal de Propriedade Industrial
                (INPI).
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AboutCompany;
