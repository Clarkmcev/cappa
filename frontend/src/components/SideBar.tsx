import { useRef } from "react";
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
    { path: ROUTE_BIO, label: "Bio", icon: <FaUser /> },
    { path: ROUTE_CONTACT, label: "Contact", icon: <IoIosInformationCircle /> },
  ];

  const handleOnClick = (url: string) => {
    window.location.href = url;
  };

  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    if (boxRef.current && buttonRefs.current[index]) {
      const rect = buttonRefs.current[index]?.getBoundingClientRect();
      console.log(rect, index);
      boxRef.current.style.top = `${rect.top}px`;
      boxRef.current.style.height = `${rect.height}px`;
    }
  };

  const handleMouseLeave = () => {
    // if (boxRef.current) {
    //   boxRef.current.style.backgroundColor = "yellow";
    // }
  };

  return (
    <div className="bg-primary h-full fixed flex flex-col p-10 border-r-4 ">
      <div className="py-4 pl-4 text-fourth border-x-transparent border-t-transparent border-solid border-2 border-b-fourth/20 text-2xl font-serif">
        Amanda McEvoy
      </div>
      <div className="flex flex-col space-y-2 my-auto font-serif h-full">
        <div className="flex flex-col justify-between h-full mt-4">
          <div className="flex flex-col space-y-2 mt-44">
            {sideBarButtons.map((route: Link, index: number) => {
              return (
                <div
                  ref={(el) => (buttonRefs.current[index] = el)}
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
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
              className="text-fourth hover:text-tertiary cursor-pointer"
            />
            <IoMdMail
              size={30}
              onClick={() => handleOnClick("mailto:")}
              className="text-fourth hover:text-tertiary cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
