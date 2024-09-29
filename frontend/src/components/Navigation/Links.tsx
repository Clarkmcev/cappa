import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

function Links() {
  const handleOnClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="flex items-center space-x-2 m-4">
      <RiInstagramFill
        size={30}
        onClick={() =>
          handleOnClick("https://www.instagram.com/amanda_mcevoy_art/")
        }
        className="text-fourth/60 hover:text-fourth cursor-pointer duration-500 transition-all"
      />
      <IoMdMail
        size={30}
        onClick={() => handleOnClick("mailto:")}
        className="text-fourth/60 hover:text-fourth cursor-pointer duration-500 transition-all"
      />
    </div>
  );
}

export default Links;
