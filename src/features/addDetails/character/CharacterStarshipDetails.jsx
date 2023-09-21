import { Link } from "react-router-dom";
import { getImages } from "../../../services/useImages";

function CharacterStarshipDetails({ starships }) {
  //getting image and id from given starship url
  const { image, ID } = getImages(starships, "starships");

  return (
    //link to given starship  details
    <Link to={`/${ID}?starshipid=${ID}`} className="flex  items-center justify-center p-2">
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

export default CharacterStarshipDetails;
