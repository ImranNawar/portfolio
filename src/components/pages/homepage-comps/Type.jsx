import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Vision Researcher",
          "Deep Learning Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        // delay: 75,
        // pauseFor: 1500,
      }}
    />
  );
}

export default Type;
