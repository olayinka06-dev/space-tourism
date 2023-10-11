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
      <div className="flex flex-row justify-center items-center">
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <div className="">
            <h1 className="text-[40px] text-[rgb(159,161,170)]">{title}</h1>
            <h1 className="text-[42px] text-white">{headings}</h1>
          </div>
          <div className="flex-col flex">
            <p className="text-[rgb(143,147,163)] leading-relaxed">{paragraph}</p>
          </div>
        </div>
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <img className="h-[600px]" src={image} alt="Planets" />
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
