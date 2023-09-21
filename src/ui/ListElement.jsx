import React from "react";
import { Link } from "react-router-dom";
import { getImages } from "../services/useImages";

function ListElement({
  element,
  category,
  film,
  planet,
  species,
  car,
  starships,
}) {
  //styles
  const liStyle =
    "w-56 border border-cyan-400 rounded-lg transition-all duration-300  dark:border-yellow-300 hover:scale-[1.02]";
  const imgStyle = "h-72 w-full rounded-t-lg";
  const divStyle =
    "text-md rounded-b-lg dark:text-yellow-200 dark:bg-gray-500 font-bold  bg-sky-600 text-center uppercase text-sky-200";
  //styles

  if (category === "character") {
    //destructe variables from element
    const { name, url } = element;
    //get character images by url
    const { ID, image } = getImages(url, "character");

    return (
      //link to character details page
      <Link to={`/${ID}?characterid=${ID}`}>
        <li className={liStyle}>
          <img className={imgStyle} src={image} alt="" />
          <div className={divStyle}>
            <h1>{name}</h1>
          </div>
        </li>
      </Link>
    );
  }

  if (category === "films") {
    //destructe variables from element
    const { title, url } = film;
    //get film images by url
    const { ID, image } = getImages(url, "film");

    //link to film details page
    return (
      <Link to={`/${ID}?filmid=${ID}`}>
        <li className={liStyle}>
          <img className={imgStyle} src={image} alt="" />
          <div className={divStyle}>
            <h1>{title}</h1>
          </div>
        </li>
      </Link>
    );
  }

  if (category === "planet") {
    //destructe variables from planet
    const { name, url } = planet;

    //get planet images by url
    const { ID, image } = getImages(url, "planets");

    return (
      //link to planet details page
      <Link to={`/${ID}?planetid=${ID}`}>
        <li className={liStyle}>
          <img className={imgStyle} src={image} alt="" />
          <div className={divStyle}>
            <h1>{name}</h1>
          </div>
        </li>
      </Link>
    );
  }

  if (category === "species") {
    //destructe variables from species
    const { name, url } = species;

    //get species images by url
    const { ID, image } = getImages(url, "species");

    return (
      //link to specie details page
      <Link to={`/${ID}?specieid=${ID}`}>
        <li className={liStyle}>
          <img className={imgStyle} src={image} alt="" />
          <div className={divStyle}>
            <h1>{name}</h1>
          </div>
        </li>
      </Link>
    );
  }

  if (category === "car") {
    //destructe variables from car
    const { name, url } = car;

    //get vehicles images by url
    const { ID, image } = getImages(url, "vehicles");

    return (
      //link to vehicles details page
      <Link to={`/${ID}?carid=${ID}`}>
        <li className={liStyle}>
          <img className={imgStyle} src={image} alt="" />
          <div className={divStyle}>
            <h1>{name}</h1>
          </div>
        </li>
      </Link>
    );
  }

  if (category === "starships") {
    //destructe variables from starships
    const { name, url } = starships;

    //get starhip images by url
    const { ID, image } = getImages(url, "starships");

    return (
      <Link to={`/${ID}?starshipid=${ID}`}>
        <li className={liStyle}>
          <img className={imgStyle} src={image} alt="" />
          <div className={divStyle}>
            <h1>{name}</h1>
          </div>
        </li>
      </Link>
    );
  }
}

export default ListElement;
