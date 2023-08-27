import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      className="flex flex-col w-80"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <a
    href={`${imagen}`}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-0 right-0 p-2"
  >
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="#050816"
        d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
      ></path>
    </svg>
  </a>
    </animated.div>
  );
}

export default Card;
