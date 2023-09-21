import ListElement from "./ListElement";

function List({ character, films, starships, species, planet, car }) {
  if (character) {
    return (
      <ul className="mt-14 flex flex-wrap justify-center gap-5">
        {character?.map((character) => {
          return (
            <ListElement
              category="character"
              element={character}
              key={character.name}
            />
          );
        })}
      </ul>
    );
  }
  if (films && Array.isArray(films)) {
    return (
      <ul className="mt-14 flex flex-wrap justify-center gap-5">
        {films?.map((films) => {
          return <ListElement category="films" film={films} key={films.title} />;
        })}
      </ul>
    );
  }

  if (planet && Array.isArray(planet)) {
    return (
      <ul className="mt-14 flex flex-wrap justify-center gap-5">
        {planet?.map((planet) => {
          return (
            <ListElement category="planet" planet={planet} key={planet.name} />
          );
        })}
      </ul>
    );
  }

  if (species && Array.isArray(species)) {
    return (
      <ul className="mt-14 flex flex-wrap justify-center gap-5">
        {species?.map((species) => {
          return (
            <ListElement
              category="species"
              species={species}
              key={species.name}
            />
          );
        })}
      </ul>
    );
  }

  if (car && Array.isArray(car)) {
    return (
      <ul className="mt-14 flex flex-wrap justify-center gap-5">
        {car?.map((car) => {
          return <ListElement category="car" car={car} key={car.name} />;
        })}
      </ul>
    );
  }

  if (starships && Array.isArray(starships)) {
    return (
      <ul className="mt-14 flex flex-wrap justify-center gap-5 whitespace-nowrap">
        {starships?.map((starships) => {
          return (
            <ListElement
              category="starships"
              starships={starships}
              key={starships.name}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
