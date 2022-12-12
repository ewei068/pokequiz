import React from "react";

const LoadImage = ({ id }) => {
  return (
    <img src={`${process.env.BASE_PATH}/images/mystery_sprites/${id}.png`} className="sprite" />
  );
};

export default LoadImage;