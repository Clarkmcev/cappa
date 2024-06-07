import { useEffect, useState } from "react";
import { useMenuAnimation } from "../animation/utils";

function Contact() {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const scope = useMenuAnimation(isRendered, "div");

  useEffect(() => {
    setIsRendered(true);
    return () => {
      setIsRendered(false);
    };
  }, []);

  return (
    <div
      ref={scope}
      className="font-serif flex space-y-4 flex-col max-w-7xl p-4"
    >
      <div className="opacity-0 text-primary font-bold pb-4 border-b-primary/20 border-b-2 text-2xl">
        About me
      </div>
      <div className="opacity-0 text-primary text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vero
        similique quibusdam quo dignissimos, explicabo quis sunt quisquam in, a
        incidunt earum temporibus molestias, sint nostrum adipisci fuga dolore
        eum!
      </div>
    </div>
  );
}

export default Contact;
