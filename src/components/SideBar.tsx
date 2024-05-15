import { ROUTE_CONTACT, ROUTE_PAINTINGS, ROUTE_ABOUT } from "../constants";
import Button from "./Button";
import { ImFilePicture } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { animate } from "framer-motion";
import { useAnimate, stagger } from "framer-motion";
import { useEffect, useState } from "react";

type Link = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

const staggerMenuItems = stagger(0.2, { startDelay: 0.2 });

function useMenuAnimation(isRendered: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "button",
      isRendered ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 },
      {
        duration: 0.2,
        delay: isRendered ? staggerMenuItems : 0,
      }
    );
  }, [isRendered]);

  return scope;
}

function SideBar() {
  const sideBarButtons: Link[] = [
    { path: ROUTE_PAINTINGS, label: "Paintings", icon: <ImFilePicture /> },
    { path: ROUTE_CONTACT, label: "Contact", icon: <FaUser /> },
    { path: ROUTE_ABOUT, label: "About", icon: <IoIosInformationCircle /> },
  ];
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    animate("button", { opacity: 1 }, { delay: stagger(0.4) });
  }, []);

  return (
    <div className="bg-primary w-64 h-full fixed flex flex-col p-2" ref={scope}>
      <div className="py-4 ml-10 text-fourth font-bold">Cappa Houze</div>
      <div className="flex flex-col space-y-2">
        {sideBarButtons.map((route: Link) => {
          return (
            <Button route={route.path} label={route.label} icon={route.icon} />
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
