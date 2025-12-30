import React from "react";

interface InputProps {
  className?: string;
  disabled?: boolean;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: string | number;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  disabled = false,
  className = "",
  value,
  onChange,
  placeholder,
  min,
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      className={`
        px-4 py-4 rounded-full font-semibold transition
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}
        ${className}
      `}
    />
  );
};
