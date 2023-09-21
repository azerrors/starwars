import React from "react";
import { getImages } from "../../../services/useImages";
import { useQuery } from "@tanstack/react-query";
import { getPlanetId } from "../../../services/useIdDetails";

function SpecieHomeworldDetails({ url }) {
  const { ID } = getImages(url, "species");

  //getting character data 
  const { data } = useQuery({
    queryKey: ["planetname", ID],
    queryFn: () => getPlanetId(ID),
  });
  if (data) {
    return (
      <p className="text-center text-lg font-medium uppercase tracking-wider text-yellow-500">
        {data.name && data.name}
      </p>
    );
  }
}

export default SpecieHomeworldDetails;
