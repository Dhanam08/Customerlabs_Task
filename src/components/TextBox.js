import React from "react";

const TextBox = ({ label, value, onChange ,placeholder}) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px" ,fontSize:"12px"}}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ width: "100%", padding: "4px", fontSize: "12px" }}
      />
    </div>
  );
};
export default TextBox;
