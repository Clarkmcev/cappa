// import { Splide, SplideSlide } from "@splidejs/react-splide";
interface Props {
  data: any;
  index: number;
}

function Painting({ index, data }: Props) {
  return (
    <section key={index} className="opacity-0 duration-150 p-1">
      <img
        src={data.image}
        alt={data.title}
        className="p-4 h-full w-full rounded-md hover:scale-100 transform transition-all"
      />
    </section>
  );
}

export default Painting;
