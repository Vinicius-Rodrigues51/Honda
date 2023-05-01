import React from "react";
import "./Button.css";

const Button = () => {
  // return <button className="floating-button">+</button>;
  return (
    <button className="floating-button">
      <div className="mobile_menu"></div>
    </button>
  );
};

export default Button;
