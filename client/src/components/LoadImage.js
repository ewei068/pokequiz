import React from "react";

const LoadImage = ({ id }) => {
  return (
    <img src={`/images/mystery_sprites/${id}.png`} className="sprite" />
  );
};

export default LoadImage;