import { paintings } from "./utils";
import Painting from "./Painting";

function Paintings() {
  return (
    <div ref={null} className="w-full h-screen overflow-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {paintings.map((painting, index) => (
          <Painting index={index} data={painting} />
        ))}
      </div>
    </div>
  );
}

export default Paintings;
