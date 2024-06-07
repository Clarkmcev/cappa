import { useEffect, useState } from "react";
// import { paintings } from "./utils";
import { useMenuAnimation } from "../animation/utils";
// import Painting from "./Painting";

// import { Carrousel } from "./Caroussel";

function Paintings() {
  // const [isRendered, setIsRendered] = useState<boolean>(false);
  // const [emblaRef] = useEmblaCarousel();

  // useEffect(() => {
  //   setIsRendered(true);
  // }, []);

  // const scope = useMenuAnimation(isRendered, "section");

  return (
    <div ref={null} className="bg-tertiary w-full h-screen overflow-scroll">
      {/*  Paintings */}
      {/* <div className="grid grid-cols-3">
        {paintings.map((painting, index) => (
          <Painting index={index} data={painting} />
        ))}
      </div> */}
    </div>
  );
}

export default Paintings;
