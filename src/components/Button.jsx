import React from "react";

const Button = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button ${disabled ? "disabled" : "button"}`}
    >
      Login
    </button>
  );
};

export default Button;
