import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  route: string;
  label: string;
  icon: React.ReactNode;
}

const Button: React.FC<Props> = ({ route, label, icon }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      className="flex space-x-2 items-center bg-primary text-tertiary hover:text-fourth text-left p-8"
      onClick={handleClick}
    >
      <div>{icon}</div>
      <div>{label}</div>
    </button>
  );
};

export default Button;
