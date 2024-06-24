interface Props {
  data: any;
  index: number;
}

function Painting({ index, data }: Props) {
  return (
    <section key={index} className="duration-400 bg-primary">
      <img
        src={data.image}
        alt={data.title}
        onClick={() => console.log(data.title)}
        className="m-10 object-cover max-h-[80%] mx-auto fit-cover rounded-xl border-tertiary border transform transition-all cursor-pointer hover:-translate-y-1"
      />
    </section>
  );
}

export default Painting;
