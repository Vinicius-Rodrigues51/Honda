import React from "react";
import "./Options.css";
import ReactGA from "react-ga";

const handleWppClick = () => {
  ReactGA.event({
    category: "Botões",
    action: "Acessar",
    label: "WhatsApp",
  });
};

const handleTelClick = () => {
  ReactGA.event({
    category: "Botões",
    action: "0800",
    label: "Tel",
  });
};

const handleHondaClick = () => {
  ReactGA.event({
    category: "Botões",
    action: "Assembléia",
    label: "Honda",
  });
};

const FloatingButtonOptions = () => {
  return (
    <ul className="floating-button-options">
      <a
        onClick={handleHondaClick}
        href="https://clientes.consorcionacionalhonda.com.br/Seguranca/Login?_ga=2.266393545.693823917.1682553218-756674096.1679608111"
      >
        <li>
          Próximas assembléias <i class="fa-solid fa-calendar-days"></i>
        </li>
      </a>
      <a
        onClick={handleWppClick}
        href="https://wa.me/5511994965554"
        target="_blank"
      >
        <li>
          Whats App <i class="fa-brands fa-whatsapp"></i>
        </li>
      </a>
      <a onClick={handleTelClick} href="tel:08000071304" target="_blank">
        <li>
          Entre em contato pelo 0800 <i class="fa-solid fa-phone"></i>
        </li>
      </a>
    </ul>
  );
};

export default FloatingButtonOptions;
