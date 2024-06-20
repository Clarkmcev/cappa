interface Props {
  data: any;
  index: number;
}

function Painting({ index, data }: Props) {
  return (
    <section key={index} className="duration-150 p-4">
      <img
        src={data.image}
        alt={data.title}
        className="object-cover max-h-screen mx-auto fit-cover rounded-xl border-tertiary border hover:scale-100 transform transition-all cursor-pointer hover:opacity-95 hover:-translate-y-2"
      />
    </section>
  );
}

export default Painting;
