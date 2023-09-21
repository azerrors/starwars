import { Link } from "react-router-dom";
import { getImages } from "../../../services/useImages";

function CharacterVehicleDetails({ vehicle }) {
  //getting image and id from given vehicle url
  const { image, ID } = getImages(vehicle, "vehicles");


  return (
    //link to given vehicle details
    <Link
      to={`/${ID}?carid=${ID}`}
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

export default CharacterVehicleDetails;
