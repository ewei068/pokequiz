import React from "react";
import { useRouter } from 'next/router';
import LoadImage from "./LoadImage";

const MediaContainer = ({ id, pokemonData }) => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="mb-5">
      {type == "sprite" && <LoadImage id={id} />}
      {
        type == "pokedex-entry" && 
        <>
          <h3>
            Pokedex Entry:
          </h3>
          <h6 className="text-container w-50">
              {pokemonData[id]["flavor_text"]}
          </h6>
        </>
      }
    </div>
  );
};

export default MediaContainer;