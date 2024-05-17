import React, { useEffect, useState } from "react";
import { paintings } from "./utils";
import { useMenuAnimation } from "../animation/utils";
import Painting from "./Painting";

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
        {paintings.map((painting, index) => (
          <Painting index={index} data={painting} />
        ))}
      </div>
    </div>
  );
}

export default Paintings;
