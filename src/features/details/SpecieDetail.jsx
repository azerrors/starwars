import { useQuery } from "@tanstack/react-query";
import { getSpecieId } from "../../services/useIdDetails";
import { getImages } from "../../services/useImages";
import { useStar } from "../../contexts/starContext";

import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import SpecieHomeworldDetails from "../addDetails/specie/SpecieHomeworldDetails";
import Button from "../../ui/Button";
import SpeciePeopleDetail from "../addDetails/specie/SpeciePeopleDetail";

function SpecieDetail({ id }) {
  //using context api
  const { dispatch, isSend, favouriteData } = useStar();

  //getting specie`s given id details
  const { data: specieDetailData, isLoading: specieIdLoading } = useQuery({
    queryKey: ["specieId", id],
    queryFn: () => getSpecieId(id),
  });

  //loading spinner
  if (specieIdLoading)
    return (
      <div className="mt-80 flex items-center justify-center">
        <Spinner />;
      </div>
    );
  if (specieDetailData) {
    // destructuring variables from specieDetailData
    const {
      name,
      skin_colors,
      people,
      population,
      language,
      hair_colors,
      eye_colors,
      designation,
      classification,
      average_lifespan,
      average_height,
      url,
    } = specieDetailData;

    console.log(people);

    //getting id and image from given species url
    const { image, ID } = getImages(url, "species");

    //turns url arrays to strings
    const favUrl = favouriteData
      .map((data) => {
        return data.url;
      })
      .join(", "); 

    //getting id from given character url
    const { ID: currID } = getImages(favUrl, "character");

    //checking that identities are the same
    const same = ID === currID;

    //styles
    const h3Style =
      "border-b-2 border-cyan-200 dark:border-yellow-400 dark:text-text  md:text-xl font-semibold text-center tracking-widest text-cyan-800";
    const pStyle =
      "text-center md:text-lg uppercase font-medium tracking-wider text-yellow-500";
    //styles

    //onlick functions

    //adding element to favouriteData array
    const getFavourite = () => {
      dispatch({ type: "getFavourite", payload: specieDetailData });
      toast(` successfully added to your favorites`);
    };

    //deleting element from favouriteData array
    const deleteFavourite = () => {
      dispatch({ type: "deleteFavourite", payload: url });
      toast.error(` successfully deleted from your favorites`);
    };
    //onlick functions

    return (
      <div>
        <p className="p-1 text-center font-medium uppercase tracking-wider text-cyan-700 dark:text-yellow-500 md:text-3xl">
          {name}
        </p>
        <div className="flex flex-col justify-between border bg-sky-300 dark:border-yellow-400  dark:bg-third md:flex-row-reverse">
          <div className="m-w-72 m-5">
            {image && (
              <img src={image} alt={image} className="h-98 rounded-3xl" />
            )}
          </div>
          <div className="w-full p-2">
            <h2 className="p-2 text-center text-2xl font-medium uppercase tracking-widest  text-white  dark:text-yellow-200">
              Information
            </h2>
            <div className="grid gap-7 py-[6rem]   md:grid-cols-3">
              <div>
                <h3 className={h3Style}>POPULATION</h3>
                <p className={pStyle}>{population}</p>
              </div>
              <div>
                <h3 className={h3Style}>LANGUAGE</h3>
                <p className={pStyle}>{language}</p>
              </div>
              <div>
                <h3 className={h3Style}>HOMEWORLD</h3>
                <SpecieHomeworldDetails url={url} />
              </div>
              <div>
                <h3 className={h3Style}>EYE COLOR</h3>
                <p className={pStyle}>{eye_colors}</p>
              </div>
              <div>
                <h3 className={h3Style}>PEOPLE</h3>
                <SpeciePeopleDetail url={people} />
              </div>
              <div>
                <h3 className={h3Style}>SKIN COLOR</h3>
                <p className={pStyle}>{skin_colors}</p>
              </div>
              <div>
                <h3 className={h3Style}>HEIGHT</h3>
                <p className={pStyle}>{average_height}</p>
              </div>
              <div>
                <h3 className={h3Style}>HAIR COLOR</h3>
                <p className={pStyle}>{hair_colors}</p>
              </div>
              <div>
                <h3 className={h3Style}>DESIGNATION</h3>
                <p className={pStyle}>{designation}</p>
              </div>
              <div>
                <h3 className={h3Style}>CLASSIFICATION</h3>
                <p className={pStyle}>{classification}</p>
              </div>
              <div>
                <h3 className={h3Style}>LIFESPAN</h3>
                <p className={pStyle}>{average_lifespan}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="nav" category="navigate">
                BACK
              </Button>

              {same && isSend ? (
                <Button type="nav" onClick={deleteFavourite}>
                  Delete
                </Button>
              ) : (
                <Button type="nav" onClick={getFavourite}>
                  ADD TO FAVOURITE
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecieDetail;
