import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { useStar } from "../../contexts/starContext";
import { getCharacterId } from "../../services/useIdDetails";
import { getImages } from "../../services/useImages";

import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import CharacterVehicleDetails from "../addDetails/character/CharacterVehicleDetails";
import CharacterFIlmDetails from "../addDetails/character/CharacterFIlmDetails";
import CharacterStarshipDetails from "../addDetails/character/CharacterStarshipDetails";
import toast from "react-hot-toast";

function CharacterDetail({ id }) {
  //using context api
  const { dispatch, isSend, favouriteData } = useStar();

  //getting character`s given id details
  const { data: characterIdData, isLoading: characterIdLoading } = useQuery({
    queryKey: ["characterid", id],
    queryFn: () => getCharacterId(id),
  });

  if (characterIdLoading)
    return (
      <div className="mt-80 flex items-center justify-center">
        <Spinner />;
      </div>
    );

  if (characterIdData) {
    // destructuring  variables from characterIdData
    const {
      name,
      birth_year,
      eye_color,
      skin_color,
      hair_color,
      height,
      gender,
      homeworld,
      films,
      starships,
      vehicles,
      url,
    } = characterIdData;

    //getting id and image from given character url
    const { ID, image } = getImages(url, "character");

    //getting image from given planet url
    const { image: homeworldImg } = getImages(homeworld, "planets");

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
      "border-b-2 border-cyan-200 dark:border-yellow-400  dark:text-text md:text-xl font-semibold text-center tracking-widest text-cyan-800";
    const pStyle =
      "text-center md:text-lg uppercase font-medium tracking-wider text-yellow-500";

    //adding element to favouriteData array
    const getFavourite = () => {
      dispatch({ type: "getFavourite", payload: characterIdData });

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
        {/* 3/1 */}
        <p className="p-1 text-center font-medium uppercase tracking-wider text-cyan-700 dark:text-yellow-500 md:text-3xl">
          {name}
        </p>

        {/* character info */}
        <div className="flex flex-col justify-between  border bg-sky-300 dark:border-yellow-400  dark:bg-third md:flex-row-reverse">
          <div className="m-w-72 m-5">
            {image && (
              <img src={image} alt={image} className="h-98  rounded-3xl" />
            )}
          </div>
          <div className="w-full p-2">
            <h2 className="p-2 text-center text-2xl font-medium uppercase tracking-widest  text-white  dark:text-yellow-200">
              Information
            </h2>
            <div className="grid place-items-center gap-7 py-[6rem]  md:grid-cols-3">
              <di>
                <h3 className={h3Style}>BIRTH YEAR</h3>
                <p className={pStyle}>{birth_year}</p>
              </di>
              <div>
                <h3 className={h3Style}>EYE COLOR</h3>
                <p className={pStyle}>{eye_color}</p>
              </div>
              <div>
                <h3 className={h3Style}>SKIN COLOR</h3>
                <p className={pStyle}>{skin_color}</p>
              </div>
              <div>
                <h3 className={h3Style}>HEIGHT</h3>
                <p className={pStyle}>{height}</p>
              </div>
              <div>
                <h3 className={h3Style}>HAIR COLOR</h3>
                <p className={pStyle}>{hair_color}</p>
              </div>
              <div>
                <h3 className={h3Style}>GENDER</h3>
                <p className={pStyle}>{gender}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="nav" category="navigate">
                BACK
              </Button>

              {isSend && same ? (
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

        {/* more info */}
        <div className="grid min-h-[20rem] gap-3  bg-sky-300  dark:bg-third md:grid-cols-4">
          <div>
            <h3 className="border-b p-2 text-center font-medium dark:border-yellow-400   dark:text-text">
              HOMEWORLD
            </h3>
            <Link to={`/${ID}?planetid=${ID}`}>
              {homeworldImg && (
                <Link
                  to={`/${ID}?planetid=${ID}`}
                  className="mt-5 flex flex-wrap justify-center"
                >
                  <img
                    src={homeworldImg}
                    alt=""
                    className="h-24 w-24  rounded-xl transition-all duration-200 hover:scale-[1.02]"
                  />
                </Link>
              )}
            </Link>
          </div>
          <div>
            <h3 className="border-b p-2 text-center  font-medium dark:border-yellow-400 dark:text-text">
              VEHICLES
            </h3>
            <ul className="mt-5 flex flex-wrap justify-center">
              {vehicles.map((vehicle) => {
                return (
                  <CharacterVehicleDetails vehicle={vehicle} key={vehicle} />
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="border-b p-2 text-center  font-medium dark:border-yellow-400  dark:text-text">
              FILMS
            </h3>
            <ul className="mt-5 flex flex-wrap justify-center">
              {films.map((film) => {
                return <CharacterFIlmDetails film={film} key={film} />;
              })}
            </ul>
          </div>
          <div>
            <h3 className="border-b p-2 text-center font-medium dark:border-yellow-400  dark:text-text">
              STARSHIPS
            </h3>
            <ul className="mt-5 flex flex-wrap justify-center">
              {starships.map((starships) => {
                return (
                  <CharacterStarshipDetails
                    key={starships}
                    starships={starships}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
