import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PAINTINGS } from "../constants";

interface Props {
  data: any;
  index: number;
}

function Painting({ index, data }: Props) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.15 } // Adjust the threshold as needed
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <section
      key={index}
      ref={imgRef}
      className={`${
        isInView ? "opacity-100  translate-x-2" : "opacity-0"
      } duration-[400ms] transition-all`}
    >
      <img
        src={data.image}
        alt={data.title}
        onClick={() => navigate(`${ROUTE_PAINTINGS}/${data.id}`)}
        className="max-h-[100vh] px-10 my-4 fit-cover border-tertiary transform transition-all cursor-pointer"
      />
      <div className="px-10 flex space-x-4">
        <p className="font-bold text-primary">{data.title}</p>
        <p className="text-primary">Sold</p>
      </div>
    </section>
  );
}

export default Painting;
