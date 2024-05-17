import LikeButton from "./LikeButton";

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
        className="h-full w-full object-cover rounded-md scale-100 hover:scale-100 transform transition-all"
      />
      {/* <div className="flex space-x-4 items-center justify-between p-4 bg-fourth/40 rounded-b-lg">
        <div className="flex space-x-2 items-center">
          <h2 className="text-primary">{data.title}</h2>
          <p className="bg-primary px-2 rounded-lg text-fourth">Sold</p>
        </div>
        <LikeButton />
      </div> */}
    </section>
  );
}

export default Painting;
