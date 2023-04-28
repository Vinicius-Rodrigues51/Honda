import React from "react";
import "./Options.css";

const FloatingButtonOptions = () => {
  return (
    <ul className="floating-button-options">
      <a href="https://clientes.consorcionacionalhonda.com.br/Seguranca/Login?_ga=2.266393545.693823917.1682553218-756674096.1679608111">
        <li>
          Próximas assembléias <i class="fa-solid fa-calendar-days"></i>
        </li>
      </a>
      <a href="https://wa.me/5186140160" target="_blank">
        <li>
          Whats App <i class="fa-brands fa-whatsapp"></i>
        </li>
      </a>
      <a href="tel:+08000071024" target="_blank">
        <li>
          Entre em contato pelo 0800 <i class="fa-solid fa-phone"></i>
        </li>
      </a>
    </ul>
  );
};

export default FloatingButtonOptions;
