"use client";
import React, { useState } from 'react';

import DestinationCard from "./DestinationCard";
import allData from "../allData";

const Destination = () => {
  const [activeplanet, setActiveplanet] = useState(0);
  const planetTab = ["Moon", "Mars", "Europa", "Titan"];
  const handleClickPlanet = (i) => {
    setActiveplanet(i)
  }

  const planetInfo = [
    {
      content: (
        <DestinationCard
        fade_left={"fade-left"}
        fade_right={"fade-right"}
          image={allData.map((ald) => ald.destinations[activeplanet].images.png)}
          planet_name={allData.map((ald) => ald.destinations[activeplanet].name)}
          planet_info={allData.map((ald) => ald.destinations[activeplanet].description)}
          distance={allData.map(ald => (ald.destinations[activeplanet].distance))}
          time={allData.map(ald => (ald.destinations[activeplanet].travel))}
        />
      ),
    },
    {
      content: (
        <DestinationCard
        fade_left={"fade-left"}
        fade_right={"fade-right"}
          image={allData.map((ald) => ald.destinations[activeplanet].images.png)}
          planet_name={allData.map((ald) => ald.destinations[activeplanet].name)}
          planet_info={allData.map((ald) => ald.destinations[activeplanet].description)}
          distance={allData.map(ald => (ald.destinations[activeplanet].distance))}
          time={allData.map(ald => (ald.destinations[activeplanet].travel))}
        />
      ),
    },
    {
      content: (
        <DestinationCard
        fade_left={"fade-left"}
        fade_right={"fade-right"}
          image={allData.map((ald) => ald.destinations[activeplanet].images.png)}
          planet_name={allData.map((ald) => ald.destinations[activeplanet].name)}
          planet_info={allData.map((ald) => ald.destinations[activeplanet].description)}
          distance={allData.map(ald => (ald.destinations[activeplanet].distance))}
          time={allData.map(ald => (ald.destinations[activeplanet].travel))}
        />
      ),
    },
    {
      content: (
        <DestinationCard
        fade_left={"fade-left"}
        fade_right={"fade-right"}
          image={allData.map((ald) => ald.destinations[activeplanet].images.png)}
          planet_name={allData.map((ald) => ald.destinations[activeplanet].name)}
          planet_info={allData.map((ald) => ald.destinations[activeplanet].description)}
          distance={allData.map(ald => (ald.destinations[activeplanet].distance))}
          time={allData.map(ald => (ald.destinations[activeplanet].travel))}
        />
      ),
    },
  ];

  return (
    <div className="">
      <div className="flex">
        <h1></h1>
        <h1></h1>
      </div>
      <div className="flex flex-row gap-4">
        {planetTab.map((pt, i) => (
          <span onClick={()=> handleClickPlanet(i)} className="text-white cursor-pointer" key={i}>
            {pt}
          </span>
        ))}
      </div>
      <div className="px-24">{planetInfo[activeplanet].content}</div>
    </div>
  );
};

export default Destination;
