import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function LikeButton() {
  const handleOnClick = () => {};

  return (
    <button
      className="text-primary bg-primary/10 px-4 p-2 rounded-xl flex space-x-2 items-center duration-150 transition-all hover:bg-primary/40 hover:text-fourth"
      onClick={handleOnClick}
    >
      {/* <FaHeart /> */}
      <FaRegHeart />
      <span>12</span>
    </button>
  );
}

export default LikeButton;
