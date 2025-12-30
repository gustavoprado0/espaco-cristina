import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-4 rounded-full font-semibold transition
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
