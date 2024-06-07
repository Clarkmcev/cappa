import { useEffect, useState } from "react";
// import { paintings } from "./utils";
import { useMenuAnimation } from "../animation/utils";
// import Painting from "./Painting";
import useEmblaCarousel from "embla-carousel-react";
import { Carrousel } from "./Caroussel";

function Paintings() {
  // const [isRendered, setIsRendered] = useState<boolean>(false);
  // const [emblaRef] = useEmblaCarousel();

  // useEffect(() => {
  //   setIsRendered(true);
  // }, []);

  // const scope = useMenuAnimation(isRendered, "section");

  return (
    <div ref={null} className="bg-tertiary w-full h-screen overflow-scroll">
      {/* <div className="grid grid-cols-3">
        {paintings.map((painting, index) => (
          <Painting index={index} data={painting} />
        ))}
      </div> */}
      {/* <div className="embla" ref={emblaRef}>
        {" "}
        <div className="embla__container">
          {" "}
          <div className="embla__slide">Slide 1</div>{" "}
          <div className="embla__slide">Slide 2</div>{" "}
          <div className="embla__slide">Slide 3</div>{" "}
        </div>{" "}
      </div> */}
      <Carrousel />
    </div>
  );
}

export default Paintings;
