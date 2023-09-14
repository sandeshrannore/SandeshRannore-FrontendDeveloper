import React from "react";
import satelite from '../assets/satelite.png';

const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center p-4">
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold  mb-4">Welcome to SpaceX</h1>
      <p className="text-lg  text-center max-w-xl">
        SpaceX capsules, including Cargo Dragon (Dragon 1) and Crew Dragon (Dragon 2), are advanced spacecraft designed for cargo resupply missions to the International Space Station (ISS) and crewed missions, respectively. These capsules have played a pivotal role in advancing space exploration.
      </p>
      </div>
      <img className="h-30vh aspect-video mt-8" src={satelite} alt='Satellite' />
    </div>
  );
};

export default HeroSection;
