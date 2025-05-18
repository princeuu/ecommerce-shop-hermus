"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
    onClick={onClick}
      disabled={disabled}
      className={` 
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-md
        hover:opacity-90
        w-full
        flex
        items-center
        justify-center
        gap-2
        transition
        duration-300
        ${
          outline
            ? "bg-white text-black border-black"
            : "bg-black text-white border-black"
        }
        ${
          small
            ? "text-sm font-light py-1 px-2 border-[1px]"
            : "text-md font-semibold py-3 px-4 border-2"
        }
        ${custom ? custom : ""}
      `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
