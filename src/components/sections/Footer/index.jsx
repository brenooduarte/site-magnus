import "./styles.scss";
import magnusLogo from "../../../assets/magnus-yellow-logo.svg";
import linkedinLogo from "../../../assets/footer-icons/linkedin.png";
import whatsappLogo from "../../../assets/footer-icons/whatsapp.png";
import instagramLogo from "../../../assets/footer-icons/instagram.png";

const Footer = () => {
  return (
    <section id="footer-section">
      <div id="footer-container">
        <img id="magnus-yellow" src={magnusLogo} alt="Logo Magnus" />

        <div id="social-media">
          <h4>Redes Sociais</h4>
          <div className="footer-icons">
            <img src={linkedinLogo} alt="" />
            <img src={whatsappLogo} alt="" />
            <img src={instagramLogo} alt="" />
          </div>
        </div>

        <div>
          <h4>Formas de Pagamento</h4>
          <div className="footer-icons"></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
