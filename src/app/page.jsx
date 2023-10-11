"use client";
import React, { useState } from 'react';
import NavBar from "@/components/navigation_component/NavBar";
import allData from "@/components/allData";
import Home from "@/components/home_components/Home";
import Destination from "@/components/destination_component/Destination";
import Crew from "@/components/crew_component/Crew";
import Technology from "@/components/technology_component/Technology";

export default function SpaceTourism() {
  const [activeTourism, setActiveTourism] = useState(0);
  const menuData = ["Home", "Destination", "Crew", "Technology"];

  const handleClickMenu = (i) => {
    setActiveTourism(i)
  }

  const tourismContent = [
    {
      content: (<Home/>)
    },
    {
      content: (<Destination/>)
    },
    {
      content: (<Crew/>)
    },
    {
      content: (<Technology/>)
    },
  ]

  return (
    <section className={`${activeTourism === 1 ? "bg-[url(/assets/destination/background-destination-desktop.jpg)] h-screen w-full" : activeTourism === 2 ? "bg-[url(/assets/crew/background-crew-desktop.jpg)] min-h-screen" : activeTourism === 3 ? "bg-[url(/assets/technology/background-technology-desktop.jpg)] h-screen w-full" : "bg-[url(/assets/home/background-home-desktop.jpg)] h-screen w-full"}`}>
      <header>
      <NavBar menuData={menuData} handleClickMenu={handleClickMenu} />
      </header>
      <main>
        <div className="">
          {
            tourismContent[activeTourism].content
          }
        </div>
      </main>

    </section>
  );
}
