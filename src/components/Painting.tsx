import React from "react";

interface Props {
  data: any;
  index: number;
}

function Painting({ index, data }: Props) {
  return (
    <section
      key={index}
      className="opacity-0 hover:cursor-pointer duration-150 border-none p-8"
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover rounded-md scale-100 hover:scale-100 transform transition-all"
      />
    </section>
  );
}

export default Painting;
