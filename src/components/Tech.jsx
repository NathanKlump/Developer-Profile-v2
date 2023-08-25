import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <a href={technology.link} target="_blank" rel="noopener noreferrer">
          <BallCanvas icon={technology.icon} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
