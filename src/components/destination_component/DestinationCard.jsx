import React from "react";

const DestinationCard = ({image, planet_name, planet_info, distance, time}) => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-full md:w-1/2">
          <img className="" src={image} alt="Planets" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="">
            <h1 className="text-[40px] text-white">{planet_name}</h1>
            <p className="text-white text-opacity-30">{planet_info}</p>
          </div>
          <div className="flex">
            <div className="">
              <span className="text-white text-opacity-30">Avg. distance</span>
              <h1 className="text-[40px] text-white">{distance}</h1>
            </div>
            <div className="">
              <span className="text-white text-opacity-30">Est. travel time</span>
              <h1 className="text-[40px] text-white">{time}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
