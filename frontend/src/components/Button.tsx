import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  route: string;
  label: string;
  icon: React.ReactNode;
}
const Button: React.FC<Props> = ({ route, label, icon }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(route);
  };

  const isCurrentPath = location.pathname === route;

  return (
    <button
      className={`flex space-x-2 items-center text-tertiary  text-left duration-150 transition-all opacity-100 w-full bg-fourth/10  p-4 rounded-lg group ${
        isCurrentPath ? "bg-fourth/40 text-fourth" : ""
      }`}
      onClick={handleClick}
    >
      <section className="duration-150 transition-all mr-2 text-primary">
        {icon}
      </section>
      <p
        className={`group-hover:text-fourth font-bold text-xl ${
          isCurrentPath ? "text-primary" : "text-fourth"
        }`}
      >
        {label}
      </p>
    </button>
  );
};

export default Button;
