import React, { useEffect, useState } from "react";
import { paintings } from "./utils";

function Paintings() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return (
    <div className="bg-primary w-full">
      <div className="grid grid-cols-2">
        {paintings.map((painting) => (
          <div
            key={painting.id}
            className="hover:cursor-pointer duration-150 border-none bg-secondary p-4"
          >
            <img
              src={painting.image}
              alt={painting.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paintings;
