import React from "react";
import "./Options.css";

const FloatingButtonOptions = () => {
  return (
    <ul className="floating-button-options">
      <a href="#">
        <li>
          Próximas assembléias <i class="fa-solid fa-calendar-days"></i>
        </li>
      </a>
      <a href="#">
        <li>
          Whats App <i class="fa-brands fa-whatsapp"></i>
        </li>
      </a>
      <a href="#">
        <li>
          Entre em contato pelo 0800 <i class="fa-solid fa-phone"></i>
        </li>
      </a>
    </ul>
  );
};

export default FloatingButtonOptions;
