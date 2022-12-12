import React from "react";
import { useRouter } from 'next/router';
import LoadImage from "./LoadImage";

const MediaContainer = ({ id }) => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div>
      {type == "image" && <LoadImage id={id} />}
    </div>
  );
};

export default MediaContainer;