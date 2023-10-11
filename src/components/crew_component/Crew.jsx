import React, { useState } from "react";
import CrewCard from "./CrewCard";
import allData from "../allData";
import {BsDot} from 'react-icons/bs';
import {GoDotFill} from 'react-icons/go'

const Crew = () => {
  const [crewTab, setCrewTab] = useState(0);
  const pagination = [
    // <BsDot/>
    // <GoDotFill/>
    {
      ball: <span className="bg-white rounded-full px-[12px] py-[1px]"></span>,
    },
    {
      ball: <span className="bg-white rounded-full px-[12px] py-[1px]"></span>,
    },
    {
      ball: <span className="bg-white rounded-full px-[12px] py-[1px]"></span>,
    },
    {
      ball: <span className="bg-white rounded-full px-[12px] py-[1px]"></span>,
    },
  ];

  const handleClickPagination = (i) => {
    setCrewTab(i);
  };

  setInterval(() => {
    crewTab >= 0 && crewTab <= 3 ? setCrewTab(crewTab+1) : setCrewTab(0)
    
  }, 1000);

  return (
    <div className="">
      <div className="flex flex-row gap-2">
        <h3 className="text-[rgb(159,161,170)]">02</h3>
        <h3 className="text-white">MEET YOUR CREW</h3>
      </div>
      <div className="">
        {pagination.map((pg, i) => (
          <span
            className="bg-[red] h-[30vh] w-full"
            onClick={() => handleClickPagination(i)}
          >
            {pg.ball}
          </span>
        ))}
      </div>
      <div className="">
        <CrewCard
          image={allData.map((ald) => ald.crew[crewTab].images.png)}
          headings={allData.map((ald) => ald.crew[crewTab].role)}
          title={allData.map((ald) => ald.crew[crewTab].name)}
          paragraph={allData.map((ald) => ald.crew[crewTab].bio)}
        />
      </div>
    </div>
  );
};

export default Crew;
