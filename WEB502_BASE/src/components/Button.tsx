import React, { useState } from "react";

interface ButtonProps {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "red", onClick }: ButtonProps) => {
  const [bgColor, setBgColor] = useState(color);

  const handleClick = () => {
    setBgColor((prev) => (prev === "blue" ? "red" : "blue"));
    // Gọi hàm từ cha (nếu có)
    onClick?.();
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
