import { paintings } from "../utils";
import Painting from "./Painting";

function Paintings() {
  return (
    <div className="grid md:grid-cols-1 xl:grid-cols-2">
      {paintings.map((painting, index) => (
        <Painting index={index} data={painting} />
      ))}
    </div>
  );
}

export default Paintings;
