import { useSearchParams } from "react-router-dom";

import CharacterDetail from "../features/details/CharacterDetail";
import FilmDetail from "../features/details/FilmDetail";
import VehicleDetail from "../features/details/VehicleDetail";
import PlanetDetail from "../features/details/PlanetDetail";
import SpecieDetail from "../features/details/SpecieDetail";
import StarshipDetail from "../features/details/StarshipDetail";

function Details() {
  //getting sended id`s with Link
  const [searchParm] = useSearchParams();

  const characterId = searchParm.get("characterid");
  const carId = searchParm.get("carid");
  const filmId = searchParm.get("filmid");
  const planetId = searchParm.get("planetid");
  const specieId = searchParm.get("specieid");
  const starshipId = searchParm.get("starshipid");

  if (characterId) {
    return (
      <div>
        <CharacterDetail id={characterId} />
      </div>
    );
  }
  if (filmId) {
    return (
      <div>
        <FilmDetail id={filmId} />
      </div>
    );
  }

  if (carId) {
    return (
      <div>
        <VehicleDetail id={carId} />
      </div>
    );
  }

  if (planetId) {
    return (
      <div>
        <PlanetDetail id={planetId} />
      </div>
    );
  }

  if (specieId) {
    return (
      <div>
        <SpecieDetail id={specieId} />
      </div>
    );
  }

  if (starshipId) {
    return (
      <div>
        <StarshipDetail id={starshipId} />
      </div>
    );
  }
}

export default Details;
