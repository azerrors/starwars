import React, { useState } from "react";
import { getSearchedPlanetData } from "../services/useApi";
import { useQuery } from "@tanstack/react-query";

import Spinner from "../ui/Spinner";
import List from "../ui/List";
import NotFoundMessage from "../ui/NotFoundMessage";
import Button from "../ui/Button";

function Planet() {
  //creating state for input
  const [planetInput, setPlanetInput] = useState("");

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

  //getting planet datas from useApi.jsx
  const { data: searchedPlanet, status: planetLoading } = useQuery({
    keepPreviousData: true,
    queryKey: ["planet", planetInput, page],
    queryFn: () => getSearchedPlanetData(planetInput, page),
  });

  return (
    <>
      <div className="mt-8 text-center">
        <input
          type="text"
          className="rounded-md border-none px-2 py-1 ring-cyan-200  transition-all duration-200 focus:px-4 focus:outline-none focus:ring dark:ring-yellow-200"
          value={planetInput}
          onChange={(e) => setPlanetInput(e.target.value)}
        />
      </div>

      {planetLoading === "loading" ? (
        <div className="mt-80 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {searchedPlanet.length === 0 ? (
            <NotFoundMessage>
              There Is Nothing To Show About `{planetInput}`. Search Something
              Else
            </NotFoundMessage>
          ) : (
            <>
              <List planet={searchedPlanet} />
              <div className="mr-8 mt-7 flex items-center justify-end gap-5">
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

export default Planet;
