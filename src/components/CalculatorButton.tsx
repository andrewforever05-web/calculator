import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const CalculatorButton: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 text-xl font-semibold rounded-lg transition-all duration-150 active:scale-95 shadow-sm ${className}`}
    >
      {label}
    </button>
  );
};
