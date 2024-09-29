interface Props {
  title: string;
  artist: string;
  tech: string[];
  desc: string;
  height: number;
  width: number;
  year: number;
}

function Card({ title, artist, tech, desc, height, width, year }: Props) {
  return (
    <section className="hidden md:flex font-custom text-primary flex-col space-y-4 pr-32">
      <p className="text-4xl font-bold">{title}</p>
      <div className="text-md text-primary/20">
        {height} x {width} cm
      </div>
      <p className="text-primary/80 text-xl">{desc}</p>
      <p className="text-primary/80 flex flex-col lg:flex-row w-fit space-y-4 lg:space-y-0 lg:space-x-4">
        {tech.map((t) => (
          <div className="bg-primary/80 text-fourth p-2 rounded-md text-xs font-bold whitespace-nowrap">
            {t}
          </div>
        ))}
      </p>
      <div className="flex space-x-2 text-sm">
        <h2>{artist}</h2>
        <p>{year}</p>
      </div>
    </section>
  );
}

export default Card;
