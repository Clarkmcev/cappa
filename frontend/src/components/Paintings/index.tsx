import { useEffect } from "react";
import { VARIANT_PAINTING_STANDARD } from "../../constants";
import { paintings, useScrollToTop } from "../utils";
import Painting from "./Painting";
import { useNavigate } from "react-router-dom";

function Paintings() {
  useScrollToTop();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    navigate("/paintings");
  }, []);

  return (
    <div className="mt-14 md:mt-0 md:ml-20 pt-4 grid md:grid-cols-1 xl:grid-cols-2 md:pl-64">
      {paintings.map((painting, index) => (
        <Painting
          variant={VARIANT_PAINTING_STANDARD}
          index={index}
          data={painting}
        />
      ))}
    </div>
  );
}

export default Paintings;
