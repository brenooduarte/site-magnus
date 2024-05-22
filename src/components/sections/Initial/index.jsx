import "./styles.scss";
import backgroundImage from "../../../assets/image-initial-desktop.jpg";
import whatsappIcon from "../../../assets/whatsapp-icon.png";
import Header from "../../Header";
import { motion } from "framer-motion";

const Initial = () => {
  return (
    <section id="initial-section">
      <Header />

      <div id="info-container">
        <motion.h1
          id="initial-title"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.73, ease: "easeInOut" }}
        >
          Você é dono da sua {""}
          <span>MARCA?</span>
        </motion.h1>

        <motion.h2
          id="initial-subtitle"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Proteja sua marca com quem entende do assunto
        </motion.h2>

        <motion.button
          onClick={() =>
            window.open("https://wa.me/message/3UDZHQRBD4VDD1", "_blank")
          }
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
        >
          <img src={whatsappIcon} alt="Ícone Whatsapp" />
          Fale com um especialista agora
        </motion.button>
      </div>

      <img
        id="bg-initial"
        src={backgroundImage}
        alt="Imagem de um escritório"
      />
    </section>
  );
};

export default Initial;
