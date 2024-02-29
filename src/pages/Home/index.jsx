import "./styles.scss";
import Initial from "../../components/sections/Initial/index.jsx";
import Benefits from "../../components/sections/Benefits/index.jsx";
import Button from "../../components/Button/index.jsx";

const Home = () => {
  return (
    <>
      <Initial />
      <Benefits />
      <div className="button-container">
        <Button
          className="button-message"
          content={
            <>
              Dê início ao Registro de sua{" "}
              <span className="highlighted-text">Marca</span> <br />
              antes que alguém registre por você
            </>
          }
        />
      </div>
    </>
  );
};

export default Home;
