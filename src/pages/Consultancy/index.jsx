import Button from "../../components/Button";
import Header from "../../components/Header";
import { useState } from "react";
import "./styles.scss";

import lampada from "../../assets/lampada.png";
import virginiaWonder from "../../assets/virginia-wonder.png";
import pesquisaViabilidade from "../../assets/pesquisa-viabilidade.png";
import homemCaminhos from "../../assets/homem-caminhos.png";
import cerebroLampada from "../../assets/cerebro-lampada.png";
import detetiveInpi from "../../assets/detetive-inpi.png";

import texture from "../../assets/texture2.png";
import textureDesktop from "../../assets/texture-desktop.png";

const Consultancy = () => {
  const [verMaisCard1, setVerMaisCard1] = useState(false);
  const [verMaisCard2, setVerMaisCard2] = useState(false);
  const [verMaisCard3, setVerMaisCard3] = useState(false);

  const toggleVerMaisCard1 = () => {
    setVerMaisCard1(!verMaisCard1);
  };

  const toggleVerMaisCard2 = () => {
    setVerMaisCard2(!verMaisCard2);
  };

  const toggleVerMaisCard3 = () => {
    setVerMaisCard3(!verMaisCard3);
  };

  return (
    <div>
      <img
        className="texture-consultancy-desktop"
        src={textureDesktop}
        alt="texture"
      />

      <Header />

      <main id="consultancy-section">
        <h1>CONSULTORIA</h1>

        <div className="consultancy-cards">
          <div className="consultancy-card">
            <h2 className="title-card-consultancy">CRIAÇÃO DE UMA MARCA</h2>
            <img className="image-consultancy" src={lampada} alt="Lâmpada" />
            <p>
              Você está pronto para lançar sua empresa no mercado, algum produto
              ou serviço, mas ainda não sabe se a marca que você criou está
              disponível para ser usada? Então esse serviço é o que você
              precisa.
            </p>
            <button
              className={`botao-ver-mais ${
                verMaisCard1 ? "color-white" : "color-yellow"
              }`}
              onClick={() => {
                toggleVerMaisCard1();
              }}
            >
              {verMaisCard1 ? "Ocultar Detalhes" : "Mostrar Detalhes"}
            </button>

            {verMaisCard1 && (
              <>
                <p>
                  É comum muitas empresas se lançarem no mercado ou lançar seus
                  produtos e serviços sem antes fazer uma pesquisa prévia se a
                  marca que vai ser usada já não pertence a outra empresa.
                </p>
                <p>
                  Isso aconteceu, por exemplo, com a Vírgínia Fonseca, famosa
                  empresária e apresentadora que lançou uma linha de produtos
                  chamada “WONDER”, sem saber que essa marca já pertence a outra
                  empresa.
                </p>

                <img
                  className="second-image-consultancy"
                  src={virginiaWonder}
                  alt="Virginia"
                />

                <p>
                  Além de não poder comercializar os produtos recém lançados,
                  perdendo milhares de unidades produzidas e sofrendo um
                  prejuízo gigantesco, Virgínia Fonseca precisará arcar com todo
                  o dano público que isso causou a sua imagem e a da sua
                  empresa.
                </p>
                <p>
                  Para evitar situações como essa, a Magnus oferece um plano de
                  consultoria focado em avaliar a disponibilidade de novas
                  marcas no mercado. Essa avaliação garante que a marca a ser
                  lançada não sofrerá qualquer tipo de problema e terá o caminho
                  livre para atuar no mercado.
                </p>

                <Button />
              </>
            )}
          </div>

          <div className="consultancy-card">
            <h2 className="title-card-consultancy">PESQUISA DE VIABILIDADE</h2>
            <img
              className="image-consultancy"
              src={pesquisaViabilidade}
              alt="Pesquisa de viabilidade"
            />
            <p>
              Você tem uma marca e usa ela há anos, mas nunca se preocupou em
              registrar porque sempre achou que ela já era sua? Temos uma coisa
              para te contar: Você está colocando em risco seu maior patrimônio
              e nem sabe disso.
            </p>
            <button
              className={`botao-ver-mais ${
                verMaisCard2 ? "color-white" : "color-yellow"
              }`}
              onClick={() => {
                toggleVerMaisCard2();
              }}
            >
              {verMaisCard2 ? "Ocultar Detalhes" : "Mostrar Detalhes"}
            </button>

            {verMaisCard2 && (
              <>
                <p>
                  Não adianta ter CNPJ, registro na junta comercial do estado,
                  site da empresa ou redes sociais. Nada disso te garante a
                  posse de uma marca.
                </p>
                <h3 className="highlighted-title-card">
                  SÓ É DONO DA MARCA QUEM REGISTRA NO INPI
                </h3>
                <p>
                  Agora que você sabe disso, o que fazer? Primeiramente,
                  precisamos saber se ainda é possível registrar sua marca.
                  Pois, outra empresa já pode ter registrado uma marca igual ou
                  muito semelhante a sua. Nesse caso, dificilmente há o que ser
                  feito.
                </p>
                <p>
                  Por isso, a melhor atitude que você pode tomar é contratar a
                  Magnus para fazer uma pesquisa da VIABILIDADE. Vamos avaliar,
                  com base em pesquisas no INPI e na legislação, as chances de
                  obtermos o registro da sua marca.
                </p>

                <img
                  className="second-image-consultancy"
                  src={homemCaminhos}
                  alt="Homem caminhos"
                />

                <p>
                  Ao final da pesquisa, te entregamos um relatório contendo
                  todas as informações que você precisa saber acerca da
                  viabilidade de registro da sua marca e te orientaremos qual o
                  melhor caminho a seguir. A Magnus pode ser sua melhor aliada
                  nesse processo.
                </p>

                <Button />
              </>
            )}
          </div>

          <div className="consultancy-card">
            <h2 className="title-card-consultancy">CRIAÇÃO DE UMA MARCA</h2>
            <img
              className="image-consultancy"
              src={cerebroLampada}
              alt="cerebro lampada"
            />
            <p>
              Sendo um dos mais importantes ativos de uma empresa, a marca
              precisa estar sob vigilância constante e sendo acompanhada por um
              profissional hábil nessa função. Pois, por exemplo, nada impede
              que terceiros tentem registrar marcas semelhantes à sua para
              tentar confundir os seus clientes.
            </p>
            <button
              className={`botao-ver-mais ${
                verMaisCard3 ? "color-white" : "color-yellow"
              }`}
              onClick={() => {
                toggleVerMaisCard3();
              }}
            >
              {verMaisCard3 ? "Ocultar Detalhes" : "Mostrar Detalhes"}
            </button>

            {verMaisCard3 && (
              <>
                <img
                  className="second-image-consultancy"
                  src={detetiveInpi}
                  alt="detetive"
                />

                <p>
                  Outro ponto que merece atenção da gestão de uma marca é em
                  relação aos contratos envolvendo seu uso. O titular de uma
                  marca pode, por exemplo, conceder o uso da sua marca a
                  terceiros a partir do pagamento de royalties. Esse tipo de
                  prática é comum sobretudo no meio artístico, pois artistas,
                  como cantores, por exemplo, usam seus nomes como marca e
                  frequentemente se associam a empresas para realizar divulgação
                  de seus produtos ou serviços.
                </p>
                <p>
                  A Magnus pode te ajudar a fazer a correta gestão da sua marca:
                </p>
                <ul>
                  <li>
                    Monitorando depósitos de novas marcas no INPI e preparando
                    oposições caso hajam marcas que possam prejudicar a sua.
                  </li>
                  <li>
                    Acompanhando ações envolvendo o uso da marca para que não
                    haja irregularidades ou abusos por parte de terceiros;
                  </li>
                  <li>
                    Atuando contra o uso indevido de marcas iguais ou
                    semelhantes a sua por parte de terceiros não autorizados e
                    muito mais.
                  </li>
                </ul>

                <Button />
              </>
            )}
          </div>
        </div>

        <img className="texture-consultancy" src={texture} />
      </main>
    </div>
  );
};

export default Consultancy;
