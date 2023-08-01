import React from 'react';
import CrewCard from './CrewCard';
import allData from '../allData';

const Crew = () => {
  const pagination = [
    {
      ball: (
        <span className='bg-white h-2 w-2 rounded-full'></span>
      )
    },
    {
      ball: (
        <span className='bg-white h-2 w-2 rounded-full'></span>
      )
    },
    {
      ball: (
        <span className='bg-white h-2 w-2 rounded-full'></span>
      )
    },
    {
      ball: (
        <span className='bg-white h-2 w-2 rounded-full'></span>
      )
    },
  ];

  const crewContent = [
    {
      content: (<CrewCard image={allData.map(ald => ald.crew[0].images.png)} headings={allData.map(ald => ald.crew[0].role)} title={allData.map(ald => ald.crew[0].name)} paragraph={allData.map(ald => ald.crew[0].bio)} />)
    },

  ]
  return (
    <div className="">
      <div className=""></div>
      <div className="">
        {
          pagination.map((pg, i)=>(
            <span className='bg-[red] h-[30vh] w-full' onClick={()=> handleClickPagination(i)}>{pg.ball}</span>
          ))
        }
      </div>
      <div className="">
        {
          crewContent[0].content
        }
      </div>

    </div>
  )
}

export default Crew