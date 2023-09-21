import { useQuery } from "@tanstack/react-query";
import { getFilmId } from "../../services/useIdDetails";
import { useStar } from "../../contexts/starContext";
import { getImages } from "../../services/useImages";

import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import FilmCharacterDetail from "../addDetails/film/FilmCharacterDetail";

function FilmDetail({ id }) {
  //using context api
  const { dispatch, isSend, favouriteData } = useStar();

  //getting film`s given id details
  const { data: filmDetailId, isLoading: filmIdLoading } = useQuery({
    queryKey: ["filmId", id],
    queryFn: () => getFilmId(id),
  });

  if (filmIdLoading)
    return (
      <div className="mt-80 flex items-center justify-center">
        <Spinner />;
      </div>
    );

  if (filmDetailId) {
    // destructuring  variables from filmDetailId
    const { characters, director, opening_crawl, title, release_date, url } =
      filmDetailId;

    //turns url arrays to strings
    const favUrl = favouriteData
      .map((data) => {
        return data.url;
      })
      .join(", ");

    //getting id and image from given film url
    const { image, ID } = getImages(url, "film");

    //getting id from given character url
    const { ID: currID } = getImages(favUrl, "character");

    //checking that identities are the same
    const same = ID === currID;

    //styles
    const h3Style =
      "border-b-2 border-cyan-200 dark:border-yellow-400 dark:text-text  md:text-xl font-semibold text-center tracking-widest text-cyan-800";
    const pStyle =
      "text-center md:text-lg uppercase font-medium tracking-wider text-yellow-500";

    //adding element to favouriteData array
    const getFavourite = () => {
      dispatch({ type: "getFavourite", payload: filmDetailId });

      //react hot toast
      toast(` successfully added to your favorites`);
    };

    //deleting element from favouriteData array
    const deleteFavourite = () => {
      dispatch({ type: "deleteFavourite", payload: url });

      //react hot toast
      toast.error(` successfully deleted from your favorites`);
    };

    return (
      <div>
        <p className="p-1 text-center font-medium uppercase tracking-wider text-cyan-700 dark:text-yellow-500 md:text-3xl">
          {title}
        </p>

        <div className="flex flex-col justify-between  border bg-sky-300 dark:border-yellow-400  dark:bg-third md:flex-row-reverse">
          <div className="m-w-72 m-5">
            {image && (
              <img src={image} alt={image} className="h-98 rounded-3xl" />
            )}
          </div>
          <div className="w-full p-2">
            <h2 className="p-2 text-center text-2xl font-medium uppercase tracking-widest  text-white  dark:text-yellow-200">
              Information
            </h2>
            <div className="">
              <div className="mt-8 flex justify-around">
                <div>
                  <h3 className={h3Style}>Director</h3>
                  <p className={pStyle}>{director}</p>
                </div>
                <div>
                  <h3 className={h3Style}>RELEASE DATE</h3>
                  <p className={pStyle}>{release_date}</p>
                </div>
              </div>
              <div>
                <h3 className={h3Style}>OPENING CRAWL</h3>
                <p className={pStyle}>{opening_crawl}</p>
              </div>
            </div>
            <div className="mt-12 flex gap-2">
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
        <div>
          <h3 className="mt-2 text-center text-xl font-medium uppercase tracking-wider text-cyan-700 dark:text-yellow-500">
            CHARACTERS
          </h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {characters.map((characters) => {
              return (
                <FilmCharacterDetail character={characters} key={characters} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default FilmDetail;
