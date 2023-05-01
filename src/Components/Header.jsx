import React, { useState } from "react";
import "./Header.css";
import Logo from "../Assets/Honda_logo.png";
// import Logo from "../Assets/Honda_logo_2.png";
import Arrow from "../Assets/Arrow2.png";
import Button from "./Button";
import FloatingButtonOptions from "./Options";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const background = document.querySelector("#background");
  const date = new Date();
  const year = date.getFullYear();

  if (showOptions == true) {
    background.classList.add("active");
  } else {
    background.classList.remove("active");
  }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const removeActive = () => {
    setShowOptions(false);
  };

  return (
    <React.Fragment>
      <div
        id="background"
        className="background_click"
        onClick={removeActive}
      ></div>
      <main className="container">
        <h1>Atendimento Multicanal Redebrasil</h1>
        <div className="img">
          <img src={Logo} alt="" />
        </div>

        <h2>Selecione o modo de atendimento</h2>

        <div className="wraper">
          <div className="Button">
            <a href="#" target="_blank">
              Fale com um dos nossos atendentes
            </a>
          </div>

          <div className="Button">
            <a href="#" target="_blank">
              Fale conosco através do WhatsApp
            </a>
          </div>

          <a
            href="https://clientes.consorcionacionalhonda.com.br/Seguranca/Login?_ga=2.64438120.693823917.1682553218-756674096.1679608111"
            target="_blank"
          >
            <div className="directing">
              <h3>Veja as datas das próximas assembléias Honda</h3>
              <img src={Arrow} />
            </div>
          </a>
        </div>

        <div className="mobile" onClick={toggleOptions}>
          <Button />
          {showOptions && <FloatingButtonOptions />}
        </div>

        <div className="footer desktop">
          <h4>Redebrasil Gestão de ativos LTDA. | CNPJ: 03.681.777/0016-33</h4>
          <h4>Rua Protásio Alves, 47 -Niterói | CEP: 92120-160</h4>
          <h4>
            Serviço de Atendimento ao Consumidor (SAC): sac@redebrasil.com.br
          </h4>
          <h4>Central de Atendimento ao Cliente (CAC): (11) 2137-2800 </h4>
          <h4 className="dev">Dev by: Vinicius @ {year}</h4>
        </div>
      </main>

      <footer>
        <div className="footer_M mobile">
          <h4>Redebrasil Gestão de ativos LTDA. | CNPJ: 03.681.777/0016-33</h4>
          <h4>Rua Protásio Alves, 47 -Niterói | CEP: 92120-160</h4>
          <h4>
            Serviço de Atendimento ao Consumidor (SAC): sac@redebrasil.com.br
          </h4>
          <h4>Central de Atendimento ao Cliente (CAC): (11) 2137-2800 </h4>
          <h4 className="dev">Dev by: Vinicius @{year}</h4>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Header;
