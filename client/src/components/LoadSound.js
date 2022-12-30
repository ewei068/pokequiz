import React, { useEffect, useRef } from 'react';

const LoadSound = ({ id }) => {
  const audio = useRef(null);

  useEffect(() => {
    audio.current.load();
  });

  return (
    <>
      <audio ref={audio} controls>
        <source src={`${process.env.BASE_PATH}/cries/${id}.mp3`} />
      </audio>
    </>
  );
};

export default LoadSound;