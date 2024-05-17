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
      className={`flex space-x-2 items-center text-tertiary  text-left duration-150 transition-all opacity-0 w-full hover:bg-fourth/ p-4 rounded-lg group hover:bg-secondary/20 ${
        isCurrentPath ? "bg-secondary/20 text-fourth" : ""
      }`}
      onClick={handleClick}
    >
      <section className="group-hover:-translate-y-0.5 duration-150 transition-all  mr-2">
        {icon}
      </section>
      <p className="group-hover:text-fourth">{label}</p>
    </button>
  );
};

export default Button;
