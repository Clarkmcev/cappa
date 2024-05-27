import {
  ROUTE_CONTACT,
  ROUTE_PAINTINGS,
  ROUTE_ABOUT,
  ROUTE_PROJECTS,
  ROUTE_BIO,
  ROUTE_EVENTS,
} from "../constants";
import Button from "./Button";
import { ImFilePicture } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useMenuAnimation } from "../animation/utils";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiProjectorScreenFill } from "react-icons/pi";

type Link = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

function SideBar() {
  const sideBarButtons: Link[] = [
    { path: ROUTE_PAINTINGS, label: "Paintings", icon: <ImFilePicture /> },
    { path: ROUTE_EVENTS, label: "Events", icon: <FaRegCalendarAlt /> },
    {
      path: ROUTE_PROJECTS,
      label: "Projects",
      icon: <PiProjectorScreenFill />,
    },
    { path: ROUTE_BIO, label: "Bio", icon: <IoIosInformationCircle /> },
    { path: ROUTE_CONTACT, label: "Contact", icon: <FaUser /> },
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
