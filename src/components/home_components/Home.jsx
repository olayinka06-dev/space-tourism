import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <div className="flex flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          <p className="text-[rgb(195,198,224)] text-[18px]">So, you want to travel to</p>
          <h1 className="text-white text-[40px]">Space</h1>
          <p className="text-[rgb(143,147,163)] leading-relaxed">
            {" "}
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center md:w-1/2">
          <div className="h-[150px] flex items-center justify-center w-[150px] text-center bg-white rounded-full">
            <span> Explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
