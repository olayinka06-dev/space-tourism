"use client";
import React, {useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

const DestinationCard = ({fade_right, fade_left, image, planet_name, planet_info, distance, time}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 100
    })
  }, []);
  return (
    <div className="container overflow-hidden mx-auto">
      <div className="flex">
        <div data-aos={fade_right} className="w-full md:w-1/2">
          <img className="" src={image} alt="Planets" />
        </div>
        <div data-aos={fade_left} className="w-full flex flex-col gap-4 md:w-1/2">
          <div className="">
            <h1 className="text-[40px] text-white">{planet_name}</h1>
            <p className="text-[rgb(143,147,163)] leading-relaxed">{planet_info}</p>
          </div>
          <div className="flex items-center gap-4">
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
