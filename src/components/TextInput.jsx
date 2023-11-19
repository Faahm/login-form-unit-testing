import React from "react";

const TextInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={placeholder}>{label}</label>
      <input
        type="text"
        id={placeholder}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
