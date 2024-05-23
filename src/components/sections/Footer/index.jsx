import "./styles.scss";
import { Link } from "react-router-dom";
import magnusLogo from "../../../assets/magnus-white-logo.svg";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { SiPix } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="footer-section">
      <div id="footer-container">
        <img id="magnus-white" src={magnusLogo} alt="Logo Magnus" />

        <div className="box-info-footer">
          <div className="bloco1">
            <div className="container-info-footer">
              <h5>ENDEREÇO</h5>
              <p>Rua Antonio Pereira Bae, 125</p>
              <p>Centro, Sumé - PB, Brasil</p>
            </div>

            <div className="container-info-footer">
              <h5>TELEFONE</h5>
              <p>(83) 99976-2090</p>
            </div>

            <div className="container-info-footer">
              <h5>E-MAIL</h5>
              <p>empresarial.magnus@gmail.com</p>
            </div>

            <div className="container-info-footer">
              <h5>REDES SOCIAIS</h5>
              <RiWhatsappFill
                className="icone-footer"
                onClick={() =>
                  window.open("https://wa.me/message/3UDZHQRBD4VDD1", "_blank")
                }
              />
              <AiFillInstagram
                className="icone-footer"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/co.magnus?igsh=OHM0aW02dTY3amc2",
                    "_blank"
                  )
                }
              />
              <IoLogoLinkedin
                className="icone-footer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/comagnus/about/ ",
                    "_blank"
                  )
                }
              />
            </div>
          </div>

          <div className="bloco2 container-info-footer">
            <h5>SERVIÇOS</h5>

            <ul>
              <li>
                <Link to="/registrar-marca" className="service">
                  Registrar minha marca
                </Link>
              </li>
              <li>
                <Link to="/oposicao" className="service">
                  Fui alvo de oposição
                </Link>
              </li>
              <li>
                <Link to="/marca-indeferida" className="service">
                  Marca foi indeferida
                </Link>
              </li>
              <li>
                <Link to="/registrar-software" className="service">
                  Registrar software
                </Link>
              </li>
              <li>
                <Link to="/consultoria" className="service">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>

          <div className="bloco3 container-info-footer">
            <h5>FORMAS DE PAGAMENTO</h5>
            <FaCreditCard className="icone-pagamento" />
            <SiPix className="icone-pagamento" />
          </div>
        </div>

        <span className="copyright">
          Copyright © 2024 - MAGNUS <br /> CNPJ: 46.119.347/0001-59
        </span>
      </div>
    </section>
  );
};

export default Footer;
