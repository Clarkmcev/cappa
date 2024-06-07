import { ROUTE_CONTACT, ROUTE_PAINTINGS, ROUTE_BIO } from "../constants";
import Button from "./Button";
import { FaPaintBrush, FaUser } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useMenuAnimation } from "../animation/utils";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

type Link = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

function SideBar() {
  const sideBarButtons: Link[] = [
    { path: ROUTE_PAINTINGS, label: "Paintings", icon: <FaPaintBrush /> },
    { path: ROUTE_BIO, label: "Bio", icon: <FaUser /> },
    { path: ROUTE_CONTACT, label: "Contact", icon: <IoIosInformationCircle /> },
  ];
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered, "button");

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const handleOnClick = () => {
    console.log("here");
  };

  return (
    <div className="bg-primary w-64 h-full fixed flex flex-col p-2" ref={scope}>
      <div className="py-4 pl-4 text-fourth border-x-transparent border-t-transparent font-bold border-solid border-2 border-b-secondary/40 text-2xl font-serif">
        Amanda McEvoy
      </div>
      <div className="flex flex-col space-y-2 my-auto font-serif h-full">
        <div className="flex flex-col justify-between h-full mt-4">
          <div className="flex flex-col space-y-2">
            {sideBarButtons.map((route: Link, index: number) => {
              return (
                <Button
                  key={index}
                  route={route.path}
                  label={route.label}
                  icon={route.icon}
                />
              );
            })}
          </div>
          <div className="flex items-center space-x-2 m-4">
            <RiInstagramFill
              size={30}
              onClick={handleOnClick}
              className="text-tertiary hover:text-secondary cursor-pointer "
            />
            <IoMdMail
              size={30}
              onClick={handleOnClick}
              className="text-tertiary hover:text-secondary cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
