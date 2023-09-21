import { useStar } from "../contexts/starContext";

import FavouriteElement from "../features/favourite/FavouriteElement";

function Favourite() {
  // using context api
  const { favouriteData } = useStar();

  return (
    <div>
      <h3 className="mb-5 mt-5 border-b border-cyan-600 text-center text-2xl font-semibold uppercase tracking-widest text-cyan-300 dark:border-yellow-800 dark:text-yellow-400">
        favourite list
      </h3>
      <ul className="flex flex-wrap justify-center gap-5">
        {favouriteData.map((data) => {
          return <FavouriteElement data={data} key={data} />;
        })}
      </ul>
    </div>
  );
}

export default Favourite;
