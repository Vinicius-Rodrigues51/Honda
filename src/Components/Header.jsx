import React, { useState, useContext, useEffect } from "react";
import "./Header.css";
import Logo from "../Assets/Honda_logo_2.png";
import Arrow from "../Assets/Arrow2.png";
import FloatingButtonOptions from "./Options";
import ReactGA from "react-ga";
import { clickTel, clickWpp, assembleiaClick } from "./Functions";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isBackgorundActive, setIsBackgorundActive] = useState(false);
  const date = new Date();
  const year = date.getFullYear();

  ReactGA.initialize("G-MJ4BT20P6P");

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setIsBackgorundActive(!isBackgorundActive);
  };

  const handleOutsideClick = () => {
    setShowOptions(false);
    setIsBackgorundActive(false);
  };

  return (
    <React.Fragment>
      <section className="styledBackgorund">
        <div
          className={`background_click ${isBackgorundActive ? "active" : ""}`}
          onClick={handleOutsideClick}
        ></div>
        <main className="container">
          <h1>Atendimento Multicanal Redebrasil</h1>
          <div className="img">
            <img src={Logo} alt="" />
          </div>

          <h2>Selecione o modo de atendimento</h2>

          <div className="wraper">
            <div
              className="Button"
              onClick={() => {
                clickTel();
              }}
            >
              <a href="tel:08000071304" target="_blank">
                Fale com um dos nossos atendentes
              </a>
            </div>

            <div onClick={() => clickWpp()} className="Button">
              <a href="https://wa.me/5511994965554" target="_blank">
                Fale conosco através do WhatsApp
              </a>
            </div>

            <a
              href="https://clientes.consorcionacionalhonda.com.br/Seguranca/Login?_ga=2.64438120.693823917.1682553218-756674096.1679608111"
              target="_blank"
            >
              <div onClick={() => assembleiaClick()} className="directing">
                <h3>Veja as datas das próximas assembléias Honda</h3>
                <img src={Arrow} />
              </div>
            </a>
          </div>

          <div className="mobile" onClick={toggleOptions}>
            {/* <Button /> */}
            {showOptions && <FloatingButtonOptions />}
          </div>
        </main>
        <footer className="deskfooter">
          <div className="">
            <h4>
              Redebrasil Gestão de ativos LTDA. | CNPJ: 03.681.777/0016-33
            </h4>
            <h4>Rua Protásio Alves, 47 -Niterói | CEP: 92120-160</h4>
            <h4>
              Serviço de Atendimento ao Consumidor (SAC): sac@redebrasil.com.br
            </h4>
            <h4>Central de Atendimento ao Cliente (CAC): (11) 2137-2800 </h4>
            <h4 className="dev">Dev by: Vinicius @ {year}</h4>
          </div>
        </footer>

        <footer>
          <div className="footer_M mobile">
            <h4>
              Redebrasil Gestão de ativos LTDA. | CNPJ: 03.681.777/0016-33
            </h4>
            <h4>Rua Protásio Alves, 47 -Niterói | CEP: 92120-160</h4>
            <h4>
              Serviço de Atendimento ao Consumidor (SAC): sac@redebrasil.com.br
            </h4>
            <h4>Central de Atendimento ao Cliente (CAC): (11) 2137-2800 </h4>
            <h4 className="dev">Dev by: Vinicius @{year}</h4>
          </div>
        </footer>
      </section>

      <button
        onClick={toggleOptions}
        className={`floating-button  ${isBackgorundActive ? "active" : ""}`}
      >
        <div className="mobile_menu"></div>
      </button>
    </React.Fragment>
  );
};

export default Header;
