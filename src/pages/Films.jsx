import { getSearchedFilmsData } from "../services/useApi";
import { useQuery } from "@tanstack/react-query";

import List from "../ui/List";
import Spinner from "../ui/Spinner";

function Films() {

  //getting film  datas from useApi.jsx
  const { data: searchedFilm, status: filmLoading } = useQuery({
    keepPreviousData: true,
    queryKey: ["film"],
    queryFn: getSearchedFilmsData,
  });

  return (
    <>
      {filmLoading === "loading" ? (
        <div className="mt-80 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {searchedFilm ? (
            <>
              <List films={searchedFilm} />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}

export default Films;
