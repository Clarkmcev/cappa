import { paintings } from "./utils";
import Painting from "./Painting";

function Paintings() {
  return (
    <div ref={null} className="bg-tertiary w-full h-screen overflow-scroll">
      {/*  Paintings */}
      <div className="grid grid-cols-3">
        {paintings.map((painting, index) => (
          <Painting index={index} data={painting} />
        ))}
      </div>
    </div>
  );
}

export default Paintings;
