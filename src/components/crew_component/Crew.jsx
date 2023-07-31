import React from 'react';
import CrewCard from './CrewCard';

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
      content: (<CrewCard image={} headings={} title={} paragraph={} />)
    },
    {
      content: (<CrewCard image={} headings={} title={} paragraph={} />)
    },
    {
      content: (<CrewCard image={} headings={} title={} paragraph={} />)
    },
    {
      content: (<CrewCard image={} headings={} title={} paragraph={} />)
    },
  ]
  return (
    <div className="">
      <div className=""></div>
      <div className="">

      </div>
      <div className="">
        {
          pagination.map((pg, i)=>(
            <span onClick={()=> handleClickPagination(i)}>{pg}</span>
          ))
        }
      </div>
    </div>
  )
}

export default Crew