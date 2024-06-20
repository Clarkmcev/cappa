interface Props {
  data: any;
  index: number;
}

function Painting({ index, data }: Props) {
  return (
    <section key={index} className="duration-150 p-1">
      <img
        src={data.image}
        alt={data.title}
        className="h-screen rounded-md hover:scale-100 transform transition-all"
      />
    </section>
  );
}

export default Painting;
