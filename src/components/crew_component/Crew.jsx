import React from 'react';

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