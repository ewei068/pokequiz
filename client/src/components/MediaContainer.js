import React from "react";
import { useRouter } from 'next/router';
import LoadImage from "./LoadImage";
import LoadSound from "./LoadSound";
import { QUIZ_CONFIG } from "../util/constants";

const MediaContainer = ({ id, pokemonData }) => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="mb-5">
      {type == QUIZ_CONFIG.SPRITE.name && <LoadImage id={id} />}
      {
        type == QUIZ_CONFIG.POKEDEX_ENTRY.name && 
        <>
          <h3>
            Pokedex Entry:
          </h3>
          <h6 className="text-container w-50">
              {pokemonData[id]["flavor_text"]}
          </h6>
        </>
      }
      {type == QUIZ_CONFIG.CRY.name && <LoadSound id={id} />}
    </div>
  );
};

export default MediaContainer;