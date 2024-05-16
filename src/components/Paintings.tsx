import React, { useEffect, useState } from "react";
import { paintings } from "./utils";
import { useMenuAnimation } from "../animation/utils";

function Paintings() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    setIsRendered(true);
    const updateScrollPosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("img", updateScrollPosition);
  }, []);

  const scope = useMenuAnimation(isRendered, "section");

  return (
    <div ref={scope} className="bg-tertiary w-full">
      <div className="grid grid-cols-2">
        {paintings.map((painting) => (

          <Painting/>
          <section
            key={painting.id}
            className="opacity-0 hover:cursor-pointer duration-150 border-none p-8"
          >
            <img
              src={painting.image}
              alt={painting.title}
              className="w-full h-full object-cover rounded-md scale-100 hover:scale-100 transform transition-all"
            />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Paintings;
