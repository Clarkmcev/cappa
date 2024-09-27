import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  route: string;
  label: string;
  icon: React.ReactNode;
}
const Button: React.FC<Props> = ({ route, label }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(route);
  };

  const isCurrentPath = location.pathname === route;

  return (
    <button
      className={`flex space-x-2 font-sans items-center text-tertiary  text-left duration-150 transition-all opacity-100 w-full group p-4 rounded-lg group ${
        isCurrentPath ? "text-fourth" : "bg-transparent"
      }`}
      onClick={handleClick}
    >
      <p
        className={`group-hover:text-fourth text-md font-bold ml-4 ${
          isCurrentPath ? "text-fourth" : "text-fourth/60"
        }`}
      >
        {label}
      </p>
    </button>
  );
};

export default Button;
