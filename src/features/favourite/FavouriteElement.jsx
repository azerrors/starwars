import { getImages } from "../../services/useImages";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useStar } from "../../contexts/starContext";

import toast from "react-hot-toast";

function FavouriteElement({ data }) {
  //using context api
  const { dispatch } = useStar();

  //dectructuring given data
  const { url, name, title } = data;

  const sections = url.split("/"); // Split the URL by slashes
  const category = sections[sections.length - 3];

  // Create variables for the possible image data, initialized as null
  let starshipsId,
    starshipsImg,
    vehiclesId,
    vehiclesImg,
    planetsId,
    planetsImg,
    filmsId,
    filmsImg,
    peopleId,
    peopleImg,
    speciesId,
    speciesImg;

    //deleting elemnt from favoriteData array
  const deleteFavourite = () => {
    dispatch({ type: "deleteFavourite", payload: url });
    toast.error(` successfully deleted from your favorites`);
  };

  // Check the category and get image data accordingly
  if (category === "starships") {
    ({ ID: starshipsId, image: starshipsImg } =
      getImages(url, "starships") || {});
  } else if (category === "vehicles") {
    ({ ID: vehiclesId, image: vehiclesImg } = getImages(url, "vehicles") || {});
  } else if (category === "planets") {
    ({ ID: planetsId, image: planetsImg } = getImages(url, "planets") || {});
  } else if (category === "films") {
    ({ ID: filmsId, image: filmsImg } = getImages(url, "film") || {});
  } else if (category === "people") {
    ({ ID: peopleId, image: peopleImg } = getImages(url, "character") || {});
  } else if (category === "species") {
    ({ ID: speciesId, image: speciesImg } = getImages(url, "species") || {});
  }

  // Determine the image choice based on availability
  const imgChoice =
    starshipsImg ||
    vehiclesImg ||
    planetsImg ||
    filmsImg ||
    peopleImg ||
    speciesImg ||
    null;
  const linkChoice = filmsId
    ? `/${filmsId}?filmid=${filmsId}`
    : planetsId
    ? `/${planetsId}?planetid=${planetsId}`
    : speciesId
    ? `/${speciesId}?specieid=${speciesId}`
    : starshipsId
    ? `/${starshipsId}?starshipid=${starshipsId}`
    : peopleId
    ? `/${peopleId}?characterid=${peopleId}`
    : vehiclesId
    ? `/${vehiclesId}?carid=${vehiclesId}`
    : {};

  return (
    <div className="relative rounded-lg border border-cyan-300 transition-all duration-300  hover:scale-[1.02]  dark:border-yellow-400">
      <Link to={linkChoice} className="h-96 w-72">
        <img src={imgChoice} alt="" className="h-80 w-72 rounded-t-lg" />
        <h2 className="text-center font-semibold uppercase text-cyan-500 dark:text-yellow-300">
          {name ? name : title}
        </h2>
      </Link>
      <IoMdClose
        className="absolute top-0 cursor-pointer text-2xl text-red-500"
        onClick={deleteFavourite}
      />
    </div>
  );
}

export default FavouriteElement;
