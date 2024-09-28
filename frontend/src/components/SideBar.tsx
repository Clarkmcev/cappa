import { useEffect, useRef } from "react";
import { ROUTE_CONTACT, ROUTE_PAINTINGS, ROUTE_BIO } from "../constants";
import Button from "./Button";
import { FaPaintBrush, FaUser } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
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
    { path: ROUTE_BIO, label: "About me", icon: <FaUser /> },
    { path: ROUTE_CONTACT, label: "Contact", icon: <IoIosInformationCircle /> },
  ];

  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const moveCursor = (index: number) => {
    if (boxRef.current && buttonRefs.current[index]) {
      const rect = buttonRefs.current[index]?.getBoundingClientRect();
      console.log(rect, index);
      boxRef.current.style.top = `${rect.top}px`;
      boxRef.current.style.height = `${rect.height}px`;
    }
  };

  const handleOnClick = (url: string) => {
    window.location.href = url;
  };

  const getIndexOfCurrentRoute = () => {
    const currentPath = location.pathname;
    const index = sideBarButtons.findIndex(
      (button) => button.path === currentPath
    );
    return index;
  };

  const getIndexOfCursor = () => {
    const rect = boxRef.current?.getBoundingClientRect();
    const index = buttonRefs.current.findIndex((button) => {
      const buttonRect = button?.getBoundingClientRect();
      return (
        rect?.top === buttonRect?.top && rect?.height === buttonRect?.height
      );
    });
    return index;
  };

  const handleMouseLeave = () => {
    const currentRouteIndex = getIndexOfCurrentRoute();
    const cursorIndex = getIndexOfCursor();
    if (currentRouteIndex !== cursorIndex) {
      setTimeout(() => {
        moveCursor(currentRouteIndex);
      }, 1000);
    }
  };

  useEffect(() => {
    getIndexOfCurrentRoute();
  }, []);

  return (
    <div className="bg-primary h-full fixed flex flex-col p-10 border-r-4 ">
      <div className="py-4 pl-4 text-fourth font-sans border-x-transparent border-t-transparent border-solid border-2 border-b-fourth/20 text-2xl">
        Amanda McStudio
      </div>
      <div className="flex flex-col space-y-2 my-auto font-serif h-full">
        <div className="flex flex-col justify-between h-full mt-4">
          <div className="flex flex-col space-y-2 mt-44">
            {sideBarButtons.map((route: Link, index: number) => {
              return (
                <div
                  ref={(el) => (buttonRefs.current[index] = el)}
                  key={index}
                  onMouseEnter={() => moveCursor(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button
                    key={index}
                    route={route.path}
                    label={route.label}
                    icon={route.icon}
                  />
                </div>
              );
            })}
          </div>
          <div
            ref={boxRef}
            className="absolute left-34 duration-[400ms] transition-all w-2 h-4 rounded-full bg-fourth/20"
          ></div>
          <div className="flex items-center space-x-2 m-4">
            <RiInstagramFill
              size={30}
              onClick={() =>
                handleOnClick("https://www.instagram.com/amanda_mcevoy_art/")
              }
              className="text-fourth/60 hover:text-fourth cursor-pointer duration-500 transition-all"
            />
            <IoMdMail
              size={30}
              onClick={() => handleOnClick("mailto:")}
              className="text-fourth/60 hover:text-fourth cursor-pointer duration-500 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
