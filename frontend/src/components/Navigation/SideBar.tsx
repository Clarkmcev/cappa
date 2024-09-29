import { useEffect, useRef } from "react";
import Button from "./Button";

import Logo from "../Atoms/Logo";
import { Link, sideBarButtons } from "./utils";
import Links from "./Links";

function SideBar() {
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const moveCursor = (index: number) => {
    if (boxRef.current && buttonRefs.current[index]) {
      const rect = buttonRefs.current[index]?.getBoundingClientRect();
      boxRef.current.style.top = `${rect.top}px`;
      boxRef.current.style.height = `${rect.height}px`;
    }
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
    moveCursor(getIndexOfCurrentRoute());
  }, []);

  return (
    <div className="hidden md:flex bg-primary h-full fixed flex-col p-10 z-50">
      <Logo />
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
          <Links />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
