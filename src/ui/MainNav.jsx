import { Link } from "react-router-dom";

function MainNav() {
  const liStyle =
    "hover:text-cyan-300 dark:hover:text-yellow-500 transition-color duration-300";

  return (
    <ul className="mt-12 flex flex-col  items-center  text-lg font-bold   uppercase tracking-widest text-cyan-600  dark:text-yellow-400">
      <li className={liStyle}>
        <Link className="p-2 active:text-red-300" to="/home">
          Home
        </Link>
      </li>

      <li className={liStyle}>
        <Link to="/people">Characters</Link>
      </li>

      <li className={liStyle}>
        <Link to="/films">Films</Link>
      </li>

      <li className={liStyle}>
        <Link to="/cars">Vehicles</Link>
      </li>

      <li className={liStyle}>
        <Link to="/starships">Starships</Link>
      </li>

      <li className={liStyle}>
        <Link to="/planet">Planet</Link>
      </li>

      <li className={liStyle}>
        <Link to="/species">Species</Link>
      </li>
    </ul>
  );
}

export default MainNav;
