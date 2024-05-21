import "./styles.scss";
import Initial from "../../components/sections/Initial/index.jsx";
import Satisfaction from "../../components/sections/Satisfaction/index.jsx";
import Benefits from "../../components/sections/Benefits/index.jsx";
import Qualities from "../../components/sections/Qualities/index.jsx";
import CustomerService from "../../components/sections/CustomerService/index.jsx";
import Testimonial from "../../components/sections/Testimonial/index.jsx";
import AboutCompany from "../../components/sections/AboutCompany/index.jsx";
import Footer from "../../components/sections/Footer/index.jsx";

import texture1 from "../../assets/texture1.png";
import texture2 from "../../assets/texture2.png";

import textureDesktop from "../../assets/texture-desktop.png";

const Home = () => {
  return (
    <>
      <Initial />

      <img
        className="textureDesktop"
        src={textureDesktop}
        alt="textura do fundo da página"
      />

      <img
        className="texture1"
        src={texture1}
        alt="textura do fundo da página"
      />

      <Satisfaction />
      <Benefits />
      <Qualities />

      <img
        className="texture2"
        src={texture2}
        alt="textura do fundo da página"
      />

      <CustomerService />
      <Testimonial />
      <AboutCompany />
      <Footer />
    </>
  );
};

export default Home;
