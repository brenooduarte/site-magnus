import "./styles.scss";
import whatsappIcon from "../../assets/whatsapp-icon.png";

const Button = () => {
  return (
    <button
      className="botao-fale-conosco"
      onClick={() =>
        window.open("https://wa.me/message/3UDZHQRBD4VDD1", "_blank")
      }
    >
      <img src={whatsappIcon} alt="Ícone Whatsapp" />
      Fale com a gente
    </button>
  );
};

export default Button;
