import React, { useState } from "react";
import { getSearchedStarshipsData } from "../services/useApi";
import { useQuery } from "@tanstack/react-query";
import List from "../ui/List";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import NotFoundMessage from "../ui/NotFoundMessage";

function Starships() {
  //creating state for input
  const [starshipsInput, setStarshipsInput] = useState("");

  //creating state for page -- using in useApi.js
  const [page, setPage] = useState(1);

  //decreasing page state 
  const handlePrevClick = () => {
    if (setPage === 0) return page;
    setPage(page - 1);
  };

  //increasing page state
  const handleNextClick = () => {
    if (setPage === 0) return page;
    setPage(page + 1);
  };

  //getting starships datas from useApi.jsx
  const { data: searchedStarships, status: startshipsLoading } = useQuery({
    keepPreviousData: true,
    queryKey: ["starships", starshipsInput, page],
    queryFn: () => getSearchedStarshipsData(starshipsInput, page),
  });

  return (
    <>
      <div className="mt-8 text-center">
        <input
          type="text"
          className="rounded-md border-none px-2 py-1 ring-cyan-200 dark:ring-yellow-200 transition-all duration-200 focus:px-4 focus:outline-none focus:ring"
          value={starshipsInput}
          onChange={(e) => setStarshipsInput(e.target.value)}
        />
      </div>

      {startshipsLoading === "loading" ? (
        <div className="mt-80 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {searchedStarships.length === 0 ? (
            <NotFoundMessage>
              There Is Nothing To Show About `{starshipsInput}`. Search
              Something Else
            </NotFoundMessage>
          ) : (
            <>
              <List starships={searchedStarships} />
              <div className="mr-8 mt-4 flex items-center justify-end gap-5">
                {page > 1 && (
                  <Button onClick={handlePrevClick} type="prev">
                    Prev
                  </Button>
                )}
                <Button onClick={handleNextClick} type="next">
                  Next
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Starships;
