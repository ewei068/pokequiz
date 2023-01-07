import React from "react";
import { useRouter } from 'next/router';
import LoadImage from "./LoadImage";
import LoadSound from "./LoadSound";
import { QUIZ_NAMES } from "../util/constants";
import DisplayStats from "./DisplayStats";

const MediaContainer = ({ id, pokemonData }) => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="mb-5">
      {type == QUIZ_NAMES.SPRITE.name && <LoadImage id={id} />}
      {
        type == QUIZ_NAMES.POKEDEX_ENTRY.name && 
        <>
          <h3>
            Pokedex Entry:
          </h3>
          <h6 className="text-container w-100">
              {pokemonData[id]["flavor_text"]}
          </h6>
        </>
      }
      {type == QUIZ_NAMES.CRY.name && <LoadSound id={id} />}
      {type == QUIZ_NAMES.STAT.name && <DisplayStats id={id} pokemonData={pokemonData} />}
    </div>
  );
};

export default MediaContainer;