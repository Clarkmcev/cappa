import { ROUTE_CONTACT, ROUTE_PAINTINGS, ROUTE_ABOUT } from "../constants";
import Button from "./Button";
import { ImFilePicture } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useMenuAnimation } from "../animation/utils";

type Link = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

function SideBar() {
  const sideBarButtons: Link[] = [
    { path: ROUTE_PAINTINGS, label: "Paintings", icon: <ImFilePicture /> },
    { path: ROUTE_CONTACT, label: "Contact", icon: <FaUser /> },
    { path: ROUTE_ABOUT, label: "About", icon: <IoIosInformationCircle /> },
  ];
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered, "button");

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div className="bg-primary w-64 h-full fixed flex flex-col p-2" ref={scope}>
      <div className="py-4 ml-10 text-fourth font-bold">Cappa Houze</div>
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
    </div>
  );
}

export default SideBar;
