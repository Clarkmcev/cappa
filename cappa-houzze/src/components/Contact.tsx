import { useEffect, useState } from "react";
import { useMenuAnimation } from "../animation/utils";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

function Contact() {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered, "div");

  useEffect(() => {
    setIsRendered(true);
    return () => {
      setIsRendered(false);
    };
  }, []);

  const handleOnClick = () => {
    console.log("Clicked");
  };

  return (
    <div ref={scope} className="p-5 flex space-y-4 flex-col max-w-3xl">
      <div className="opacity-0 text-primary font-bold pb-4 border-b-primary/20 border-b-2">
        About me
      </div>
      <div className="opacity-0 text-primary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vero
        similique quibusdam quo dignissimos, explicabo quis sunt quisquam in, a
        incidunt earum temporibus molestias, sint nostrum adipisci fuga dolore
        eum!
      </div>
      <div className="flex space-x-2">
        <FaInstagramSquare onClick={handleOnClick} className="text-secondary" />
        <FaFacebookSquare onClick={handleOnClick} className="text-secondary" />
        <IoMailSharp onClick={handleOnClick} className="text-secondary" />
      </div>
    </div>
  );
}

export default Contact;
