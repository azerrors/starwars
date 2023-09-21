import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getSearchedCarData } from "../services/useApi";

import Button from "../ui/Button";
import List from "../ui/List";
import Spinner from "../ui/Spinner";
import NotFoundMessage from "../ui/NotFoundMessage";

function Cars() {
  //creating state for input
  const [carInput, setCarInput] = useState("");

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

  //getting vehicles datas from useApi.jsx
  const { data: searchedCar, status: carLoading } = useQuery({
    keepPreviousData: true,
    queryKey: ["cars", carInput, page],
    queryFn: () => getSearchedCarData(carInput, page),
  });

  return (
    <>
      <div className="mt-8 text-center">
        <input
          type="text"
          className="rounded-md border-none px-2 py-1 ring-cyan-200 transition-all duration-200 focus:px-4 focus:outline-none focus:ring dark:ring-yellow-200"
          value={carInput}
          onChange={(e) => setCarInput(e.target.value)}
        />
      </div>

      {carLoading === "loading" ? (
        <div className="mt-80 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {searchedCar.length === 0 ? (
            <NotFoundMessage>
              There Is Nothing To Show About `{carInput}`. Search Something Else
            </NotFoundMessage>
          ) : (
            <>
              <List car={searchedCar} />
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

export default Cars;
