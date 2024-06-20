import { paintings } from "./utils";
import Painting from "./Painting";

function Paintings() {
  return (
    <div ref={null} className="w-full h-screen overflow-scroll">
      <div className="flex">
        {paintings.map((painting, index) => (
          <Painting index={index} data={painting} />
        ))}
      </div>
    </div>
  );
}

export default Paintings;
