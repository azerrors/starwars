import { getImages } from "../../../services/useImages";
import { Link } from "react-router-dom";

function CharacterFIlmDetails({ film }) {
  //getting image and id from given film url
  const { image, ID } = getImages(film, "film");

  return (
    //link to given film details
    <Link
      to={`/${ID}?filmid=${ID}`}
      className="flex  items-center justify-center p-2"
    >
      {image && (
        <img
          src={image}
          alt=""
          className="h-24 w-24 rounded-xl transition-all duration-200 hover:scale-[1.02]"
        />
      )}
    </Link>
  );
}

export default CharacterFIlmDetails;
