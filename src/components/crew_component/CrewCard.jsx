"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const CrewCard = ({ image, headings, title, paragraph}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <div className="">
            <h1 className="text-[40px] text-white">{title}</h1>
            <h1 className="text-[40px] text-white">{headings}</h1>
          </div>
          <div className="flex-col flex">
            <p className="text-white text-opacity-30">{paragraph}</p>
          </div>
        </div>
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <img className="" src={image} alt="Planets" />
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
