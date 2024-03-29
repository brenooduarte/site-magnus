import "./styles.scss";
import React, { useState, useEffect, useRef } from "react";
import backgroundImage from "../../../assets/image-initial.jpg";
import magnusWhiteLogo from "../../../assets/magnus-white-logo.svg";
import whatsappIcon from "../../../assets/whatsapp-icon.svg";

const Initial = () => {
  return (
    <section id="initial-section">
      <header>
        <img
          className="magnus-logo"
          src={magnusWhiteLogo}
          alt="Logotipo branco Magnus"
        />
      </header>

      <div id="info-container">
        <h1 id="initial-title">
          Você é dono da sua <br />
          <span>MARCA?</span>
        </h1>
        <h2 id="initial-subtitle">
          Proteja sua marca com quem entende do assunto
        </h2>

        <button>
          <img src={whatsappIcon} alt="Ícone Whatsapp" />
          Fale com um especialista agora
        </button>
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
