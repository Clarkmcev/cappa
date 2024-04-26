import { ROUTE_CONTACT, ROUTE_PAINTINGS, ROUTE_ABOUT } from "../constants";
import Button from "./Button";
import { ImFilePicture } from "react-icons/im";
import { animate, motion } from "framer-motion";
import { useAnimate, stagger } from "framer-motion";
import { useEffect, useState } from "react";

type Link = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

const staggerMenuItems = stagger(0.3, { startDelay: 0.6 });

function useMenuAnimation(isRendered: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "button",
      isRendered ? { opacity: 1, color: "red" } : { opacity: 0 },
      {
        duration: 0.2,
        delay: isRendered ? staggerMenuItems : 0,
      }
    );
    animate("p", isRendered ? { opacity: 1, color: "blue" } : { opacity: 0 }, {
      duration: 0.2,
      delay: isRendered ? staggerMenuItems : 0,
    });
  }, [isRendered]);

  return scope;
}

function SideBar() {
  const sideBarButtons: Link[] = [
    { path: ROUTE_PAINTINGS, label: "Paintings", icon: <ImFilePicture /> },
    { path: ROUTE_CONTACT, label: "Contact", icon: <ImFilePicture /> },
    { path: ROUTE_ABOUT, label: "About", icon: <ImFilePicture /> },
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
    <div
      className="bg-primary w-fit h-screen flex flex-col fixed border-4 border-y-transparent border-l-transparent border-r-secondary"
      ref={scope}
    >
      <section className="m-10">Cappa Hhouze</section>
      <section>
        {sideBarButtons.map((route: Link) => {
          return (
            <Button route={route.path} label={route.label} icon={route.icon} />
          );
        })}
      </section>
    </div>
  );
}

export default SideBar;
