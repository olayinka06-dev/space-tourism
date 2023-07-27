import React from 'react'

const NavBar = ({menuData, handleClickMenu}) => {
  return (
    <div className="container p-5 bg-green-400 mx-auto">
        <div className=""></div>
        <div className="">
            {
                menuData.map((md, i)=>(
                    <button onClick={()=> handleClickMenu(i)} key={i}>{md}</button>
                ))
            }
        </div>
    </div>
  )
}

export default NavBar;