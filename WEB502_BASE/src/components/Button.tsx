import React, { useState } from "react";

interface ButtonProps {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "red" }: ButtonProps) => {
  const [bgColor, setBgColor] = useState(color);

  const handleClick = () => {
    if (bgColor === "blue") {
      setBgColor("red");
    } 
    if (bgColor === "red") {
      setBgColor("blue");
    }
  };

  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: "white",
      }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
