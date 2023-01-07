import React from "react";
import { MODE_NAMES } from "../util/constants";
import { capitalizePathParam } from "../util/string-utils";

const QuizDisplay = ({ mode, type, score, remaining }) => {
  const remainingLabel = mode == MODE_NAMES.ENDLESS.name ? "Lives" : "Remaining";

  return (
    <>
      <h1>Who's that Pokemon?{mode == MODE_NAMES.ENDLESS.name && " - Endless"}</h1>
      <h2>{capitalizePathParam(type)} Test - Score: {score} - {remainingLabel}: {remaining}</h2>
    </>
  );
};

export default QuizDisplay;