interface Props {
  data: any;
  index: number;
}

function Painting({ index, data }: Props) {
  return (
    <section key={index} className="duration-400 p-10 bg-secondary">
      <img
        src={data.image}
        alt={data.title}
        onClick={() => console.log(data.title)}
        className="object-cover max-h-screen mx-auto fit-cover rounded-xl border-tertiary border transform transition-all cursor-pointer hover:-translate-y-1"
      />
    </section>
  );
}

export default Painting;
