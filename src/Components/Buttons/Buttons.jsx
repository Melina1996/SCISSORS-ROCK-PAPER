import React from 'react'
import { useState } from "react"


export default function Buttons(props) {


  return (
    <div>
        {/* btn containing several props giving: (1)style,(2)calling game-function with respective selected element,(3)change status of "madeChoice",(4)save btn styles in useState, so it can be used in next display */}
        <div className={`${props.bg} ${props.shadow} ${props.styling} ${props.pulse}`}>
            <button onClick={()=>{props.round(props.img);props.setMadeChoice(true);props.setStyleBtnSelected([props.bg,props.shadow])}}  className="myBtn cursor-pointer bg-white w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-6 rounded-full flex justify-center items-center"><img className='w-[40px] h-[50px] md:w-[70px] md:h-[80px]' src={props.img} alt="" /></button>
        </div>

    </div>
  )
}
