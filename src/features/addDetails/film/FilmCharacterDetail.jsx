import { getImages } from "../../../services/useImages";
import { Link } from "react-router-dom";

function FilmCharacterDetail({ character }) {
  //getting image and id from given character url
  const { image, ID } = getImages(character, "character");

  return (
    //link to given character details
    <Link
      to={`/${ID}?characterid=${ID}`}
      className="flex flex-wrap justify-center  rounded border border-cyan-400 transition-all duration-300  hover:scale-[1.02] dark:border-yellow-300"
    >
      <img src={image} alt="" className="w-24 rounded" />
    </Link>
  );
}

export default FilmCharacterDetail;
