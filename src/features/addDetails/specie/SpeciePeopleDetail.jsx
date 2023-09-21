import React from "react";
import { getImages } from "../../../services/useImages";
import { useQuery } from "@tanstack/react-query";
import { getCharacterId } from "../../../services/useIdDetails";
import { Link } from "react-router-dom";

function SpeciePeopleDetail({ url }) {
  const currUrl = url.join("");
  const { ID } = getImages(currUrl, "character");

  //getting character data 
  const { data } = useQuery({
    queryKey: ["specialpeopledetail", ID],
    queryFn: () => getCharacterId(ID),
  });
  if (data) {
    return (
    //link to given character details
      <Link
        to={`/${ID}?characterid=${ID}`}
        className="text-center text-lg font-medium uppercase tracking-wider text-yellow-800"
      >
        <p>{data && data.name}</p>
      </Link>
    );
  }
}

export default SpeciePeopleDetail;
