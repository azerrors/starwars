import { Link } from "react-router-dom";
import { HiOutlineBookmark } from "react-icons/hi";
import { useStar } from "../contexts/starContext";

function FavIcon() {
  const { favouriteData } = useStar();
  return (
    <Link to="/favourite" className="relative">
      <HiOutlineBookmark className=" mt-24 cursor-pointer text-3xl text-cyan-600 hover:text-cyan-400  dark:text-yellow-400 dark:hover:text-yellow-500" />
      <span className=" absolute right-[-0.5rem] top-[7rem] text-md dark:text-yellow-100 rounded-full px-1 text-cyan-300">
        {favouriteData.length}
      </span>
    </Link>
  );
}

export default FavIcon;
