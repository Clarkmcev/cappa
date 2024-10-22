import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ROUTE_PAINTINGS,
  VARIANT_PAINTING_STANDARD,
  VARIANT_PAINTING_VIEWER,
} from "../../constants";
import Card from "./Card";

interface Props {
  data: any;
  index: number;
  variant: typeof VARIANT_PAINTING_STANDARD | typeof VARIANT_PAINTING_VIEWER;
}

function Painting({ index, data, variant }: Props) {
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
      { threshold: 0.15 }
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

  switch (variant) {
    case VARIANT_PAINTING_VIEWER:
      return (
        <section
          key={index}
          className="w-fit h-full my-auto m-auto flex items-center justify-center"
        >
          <div className="overflow-hidden my-auto flex space-x-4 items-center">
            <img
              src={`/${data.image}`}
              alt={data.title}
              className="max-h-[90vh] my-auto px-10 py-4 fit-cover border-tertiary transform transition-all cursor-pointer hover:brightness-90 duration-300"
            />
            <Card
              title={data.title}
              artist={data.artist}
              tech={data.tech}
              desc={data.desc}
              height={data.height}
              width={data.width}
              year={data.year}
            />
          </div>
        </section>
      );
    case VARIANT_PAINTING_STANDARD:
    default:
      return (
        <section
          key={index}
          ref={imgRef}
          className={`${
            isInView ? "opacity-100 translate-x-0" : "opacity-0"
          } duration-[400ms] transition-all md:ml-10`}
        >
          <div className="overflow-hidden">
            <img
              src={`${data.image}`}
              alt={data.title}
              onClick={() => navigate(`${ROUTE_PAINTINGS}/${data.id}`)}
              className="max-h-[100vh] px-6 py-4 fit-cover border-tertiary transform transition-all cursor-pointer hover:brightness-90 duration-300"
            />
          </div>
        </section>
      );
  }
}

export default Painting;
