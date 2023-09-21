import { getStarshipId } from "../../services/useIdDetails";
import { useQuery } from "@tanstack/react-query";
import { useStar } from "../../contexts/starContext";
import { getImages } from "../../services/useImages";

import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

function StarshipDetail({ id }) {
  //using context api
  const { dispatch, isSend, favouriteData } = useStar();

  //getting starhip`s given id details
  const { data: starshipDetailData, isLoading: starshipIdLoading } = useQuery({
    queryKey: ["starshipId", id],
    queryFn: () => getStarshipId(id),
  });

  if (starshipIdLoading)
    return (
      <div className="mt-80 flex items-center justify-center">
        <Spinner />;
      </div>
    );

  if (starshipDetailData) {
    // destructuring variables from starshipDetailData
    const {
      max_atmosphering_speed,
      passengers,
      consumables,
      starship_class,
      name,
      model,
      manufacturer,
      crew,
      cargo_capacity,
      cost_in_credits,
      url,
    } = starshipDetailData;

    //getting id and image from given starship url
    const { ID, image } = getImages(url, "starships");

    //turns url arrays to string
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

    //adding element to favouriteData array
    const getFavourite = () => {
      dispatch({ type: "getFavourite", payload: starshipDetailData });
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
          {name}
        </p>

        <div className="flex flex-col justify-between  border bg-sky-300 dark:border-yellow-400  dark:bg-third md:flex-row-reverse">
          <div className="m-w-72 m-5">
            {image && (
              <img src={image} alt={image} className="h-96 rounded-3xl" />
            )}
          </div>
          <div className="w-full p-2">
            <h2 className="p-2 text-center text-2xl font-medium uppercase tracking-widest  text-white  dark:text-yellow-200">
              Information
            </h2>
            <div className="grid gap-7 py-[6rem]  md:grid-cols-3">
              <div>
                <h3 className={h3Style}>MODEL</h3>
                <p className={pStyle}>{model}</p>
              </div>
              <div>
                <h3 className={h3Style}>CREW</h3>
                <p className={pStyle}>{crew}</p>
              </div>
              <div>
                <h3 className={h3Style}>PASSENGERS</h3>
                <p className={pStyle}>{passengers}</p>
              </div>
              <div>
                <h3 className={h3Style}>CARGO CAPACITY</h3>
                <p className={pStyle}>{cargo_capacity}</p>
              </div>
              <div>
                <h3 className={h3Style}>MANUFACTURER</h3>
                <p className={pStyle}>{manufacturer}</p>
              </div>
              <div>
                <h3 className={h3Style}>CONSUMABLES</h3>
                <p className={pStyle}>{consumables}</p>
              </div>
              <div>
                <h3 className={h3Style}>CREDITS</h3>
                <p className={pStyle}>{cost_in_credits}</p>
              </div>
              <div>
                <h3 className={h3Style}>CLASS</h3>
                <p className={pStyle}>{starship_class}</p>
              </div>
              <div>
                <h3 className={h3Style}>MAX ATMO SPEED </h3>
                <p className={pStyle}>{max_atmosphering_speed}</p>
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

export default StarshipDetail;
