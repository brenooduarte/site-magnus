import "./styles.scss";
import Initial from "../../components/sections/Initial/index.jsx";
import Satisfaction from "../../components/sections/Satisfaction/index.jsx";
import Benefits from "../../components/sections/Benefits/index.jsx";
import Qualities from "../../components/sections/Qualities/index.jsx";
import CustomerService from "../../components/sections/CustomerService/index.jsx";
import Testimonial from "../../components/sections/Testimonial/index.jsx";
import AboutCompany from "../../components/sections/AboutCompany/index.jsx";
import Footer from "../../components/sections/Footer/index.jsx";

const Home = () => {
  return (
    <>
      <Initial />
      <Satisfaction />
      <Benefits />
      <Qualities />
      <CustomerService />
      <Testimonial />
      <AboutCompany />
      <Footer />
    </>
  );
};

export default Home;
