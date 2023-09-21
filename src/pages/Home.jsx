import { useStar } from "../contexts/starContext";
import { Link } from "react-router-dom";

function Home() {
  const { username } = useStar();

  const imgStyle =
    "md:w-72  w-56 h-56 md:h-64 rounded-lg hover:filter hover:grayscale transition-all duration-300 ";
  const divStyle =
    "border md:w-72 flex justify-center items-center hover:scale-[1.02] rounded-lg transition-all duration-300 relative group";
  const h3Style =
    "text-2xl absolute text-center uppercase font-semibold tracking-widest group-hover:flex hidden transition-all duration-300 text-cyan-200 dark:text-yellow-500 ";

  return (
    <div className="relative h-[52rem]">
      <div className=" absolute left-0 top-0 h-full w-full bg-[url('../../public/homebg.jpg')] bg-cover bg-center bg-no-repeat mix-blend-soft-light blur-sm dark:mix-blend-difference"></div>
      <h1 className="relative p-5 text-center text-xl  font-semibold uppercase tracking-widest text-cyan-500 dark:text-yellow-400 md:text-2xl">
        Hello {username ? username : "stranger"}, welcome to star wars fan page
      </h1>
      <div className="mt-10  flex flex-col items-center gap-6 md:mt-24 md:grid md:grid-cols-3 md:grid-rows-2 md:place-items-center">
        <Link to="/people" className={divStyle}>
          <img src="../../public/character.jpg" className={imgStyle} alt="" />
          <h3 className={h3Style}>Characters</h3>
        </Link>
        <Link to="/species" className={divStyle}>
          <img src="../../public/species.jpg" className={imgStyle} alt="" />
          <h3 className={h3Style}>Species</h3>
        </Link>
        <Link to="/starships" className={divStyle}>
          <img src="../../public/starship.jpg" className={imgStyle} alt="" />
          <h3 className={h3Style}>Starsips</h3>
        </Link>
        <Link to="/vehicles" className={divStyle}>
          <img src="../../public/vehicles.jpg" className={imgStyle} alt="" />
          <h3 className={h3Style}>Vehicles</h3>
        </Link>
        <Link to="/planet" className={divStyle}>
          <img src="../../public/planet.png" className={imgStyle} alt="" />
          <h3 className={h3Style}>Planets</h3>
        </Link>
        <Link to="/films" className={divStyle}>
          <img src="../../public/film.png" className={imgStyle} alt="" />
          <h3 className={h3Style}>Films</h3>
        </Link>
      </div>
    </div>
  );
}

export default Home;
