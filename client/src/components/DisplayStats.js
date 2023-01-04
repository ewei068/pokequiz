import React from "react";
import StatBar from "./StatBar";

const DisplayStats = ({ id, pokemonData }) => {
  const MAX_VALUE = 255;
  return (
    <>
      <StatBar label="HP" value={pokemonData[id]["stats"][0]} maxValue={MAX_VALUE} />
      <StatBar label="Attack" value={pokemonData[id]["stats"][1]} maxValue={MAX_VALUE} />
      <StatBar label="Defense" value={pokemonData[id]["stats"][2]} maxValue={MAX_VALUE} />
      <StatBar label="Sp. Atk." value={pokemonData[id]["stats"][3]} maxValue={MAX_VALUE} />
      <StatBar label="Sp. Def." value={pokemonData[id]["stats"][4]} maxValue={MAX_VALUE} />
      <StatBar label="Speed" value={pokemonData[id]["stats"][5]} maxValue={MAX_VALUE} />
    </>
  );
};

export default DisplayStats;