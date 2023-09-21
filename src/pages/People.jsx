import React, { useState } from "react";
import { getSearchedPeopleData } from "../services/useApi";
import { useQuery } from "@tanstack/react-query";

import List from "../ui/List";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import NotFoundMessage from "../ui/NotFoundMessage";

function People() {
  //creating state for input
  const [characterInput, setCharacterInput] = useState("");

  //creating state for page -- using in useApi.js
  const [page, setPage] = useState(1);

  //decreasing page state
  const handlePrevClick = () => {
    if (setPage === 0) return page;
    setPage(page - 1);
  };

  //increasing page state
  const handleNextClick = () => {
    setPage(page + 1);
  };

  //getting characters datas from useApi.jsx
  const { data: searchedCharacter, status: characterLoading } = useQuery({
    keepPreviousData: true,
    queryKey: ["character", characterInput, page],
    queryFn: () => getSearchedPeopleData(characterInput, page),
  });

  return (
    <>
      <div className="mt-8 text-center">
        <input
          type="text"
          className="rounded-md border-none px-2 py-1 ring-cyan-200   transition-all duration-200 focus:px-4 focus:outline-none focus:ring dark:ring-yellow-200"
          value={characterInput}
          onChange={(e) => setCharacterInput(e.target.value)}
        />
      </div>

      {characterLoading === "loading" ? (
        <div className="mt-80 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {searchedCharacter.length === 0 ? (
            <NotFoundMessage>
              There Is Nothing To Show About `{characterInput}`. Search
              Something Else
            </NotFoundMessage>
          ) : (
            <>
              <List character={searchedCharacter} />
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

export default People;
